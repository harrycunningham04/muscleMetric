import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { UserProfile } from '@/components/UserProfile';
import { toast } from 'sonner';
import { muscleGroups, findMatchingWorkouts } from '@/data/preMadeWorkouts';

const PreMadePlans = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [daysPerWeek, setDaysPerWeek] = useState<string>('3');
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const handleMuscleSelect = (muscle: string) => {
    setSelectedMuscles(prev => {
      if (prev.includes(muscle)) {
        return prev.filter(m => m !== muscle);
      }
      if (prev.length >= 3) {
        toast.error("You can only select up to 3 muscle groups");
        return prev;
      }
      return [...prev, muscle];
    });
  };

  const handleSubmit = () => {
    if (selectedMuscles.length !== 3) {
      toast.error("Please select exactly 3 muscle groups");
      return;
    }

    const matchingWorkouts = findMatchingWorkouts(selectedMuscles, parseInt(daysPerWeek));
    const selectedWorkout = matchingWorkouts[0];

    // Navigate to plan editor with the pre-made workout data
    navigate('/plans/new', {
      state: {
        preMadeWorkout: selectedWorkout,
        selections: {
          gender,
          daysPerWeek,
          selectedMuscles
        }
      }
    });
  };

  return (
    <div className="container py-8 bg-background text-foreground min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Create Custom Plan</h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/plans")}
              className="text-foreground hover:text-foreground/80"
            >
              My Plans
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/dashboard")}
              className="text-foreground hover:text-foreground/80"
            >
              Dashboard
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
              className="text-foreground hover:text-foreground/80"
            >
              Contact
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <UserProfile />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label>Select your gender</Label>
                  <RadioGroup
                    value={gender}
                    onValueChange={(value: 'male' | 'female') => setGender(value)}
                    className="flex gap-4 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button onClick={() => setStep(2)}>Next</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label>How many days per week would you like to work out?</Label>
                  <Select value={daysPerWeek} onValueChange={setDaysPerWeek}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select days per week" />
                    </SelectTrigger>
                    <SelectContent>
                      {[2, 3, 4, 5, 6].map(days => (
                        <SelectItem key={days} value={days.toString()}>
                          {days} days
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button onClick={() => setStep(3)}>Next</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label>Select up to 3 muscle groups to focus on</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {muscleGroups.map(muscle => (
                      <Button
                        key={muscle}
                        variant={selectedMuscles.includes(muscle) ? "default" : "outline"}
                        onClick={() => handleMuscleSelect(muscle)}
                        className="w-full"
                        disabled={selectedMuscles.length >= 3 && !selectedMuscles.includes(muscle)}
                      >
                        {muscle}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-sm text-muted-foreground mb-4">
                      Selected ({selectedMuscles.length}/3): {selectedMuscles.join(', ') || 'None'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={selectedMuscles.length === 0}
                  >
                    Create Plan
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreMadePlans;