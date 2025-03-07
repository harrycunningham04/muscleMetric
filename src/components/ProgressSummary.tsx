
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Weight, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSettings } from "@/context/SettingsContext";

// Mock percentile data - this would come from a real database in production
const strengthPercentiles = {
  "Bench Press": [
    { age: "18-29", percentiles: [45, 65, 85, 115, 140, 165, 195, 225, 255, 285] },
    { age: "30-39", percentiles: [40, 60, 80, 110, 135, 160, 185, 215, 245, 275] },
    { age: "40-49", percentiles: [35, 55, 75, 100, 125, 150, 175, 205, 230, 255] },
    { age: "50-59", percentiles: [30, 50, 70, 90, 115, 135, 160, 185, 210, 235] },
    { age: "60+", percentiles: [25, 40, 60, 80, 100, 120, 145, 165, 185, 205] },
  ],
  "Squat": [
    { age: "18-29", percentiles: [80, 115, 145, 175, 205, 235, 265, 305, 345, 385] },
    { age: "30-39", percentiles: [75, 110, 140, 170, 195, 225, 255, 290, 330, 370] },
    { age: "40-49", percentiles: [70, 105, 135, 160, 185, 215, 245, 275, 315, 350] },
    { age: "50-59", percentiles: [65, 95, 125, 150, 175, 200, 230, 260, 295, 330] },
    { age: "60+", percentiles: [55, 85, 115, 140, 160, 185, 210, 240, 270, 300] },
  ],
  "Deadlift": [
    { age: "18-29", percentiles: [95, 135, 170, 205, 240, 275, 315, 355, 400, 440] },
    { age: "30-39", percentiles: [90, 130, 165, 200, 235, 265, 305, 345, 385, 425] },
    { age: "40-49", percentiles: [85, 125, 160, 190, 225, 255, 290, 330, 370, 410] },
    { age: "50-59", percentiles: [80, 115, 150, 180, 210, 240, 275, 310, 350, 385] },
    { age: "60+", percentiles: [70, 105, 135, 165, 195, 225, 255, 290, 325, 360] },
  ],
};

// Age group ranges for determining the user's age group
const ageGroups = [
  { range: "18-29", min: 18, max: 29 },
  { range: "30-39", min: 30, max: 39 },
  { range: "40-49", min: 40, max: 49 },
  { range: "50-59", min: 50, max: 59 },
  { range: "60+", min: 60, max: 120 },
];

// Main exercises
const mainLifts = ["Bench Press", "Squat", "Deadlift"];

export const ProgressSummary = () => {
  const [selectedExercise, setSelectedExercise] = useState("Bench Press");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [age, setAge] = useState("");
  const [calculatedOneRM, setCalculatedOneRM] = useState<number | null>(null);
  const [percentile, setPercentile] = useState<number | null>(null);
  const { weightUnit, formatWeight } = useSettings();
  
  // Get age group based on user input
  const getUserAgeGroup = (age: number): string => {
    const ageGroup = ageGroups.find(group => age >= group.min && age <= group.max);
    return ageGroup ? ageGroup.range : "30-39"; // Default to 30-39 if no match
  };

  // Calculate Brzycki 1RM formula: weight × (36 / (37 - reps))
  const calculateOneRM = (weight: number, reps: number): number => {
    if (reps >= 37) return weight * 36; // Avoid division by zero or negative
    return weight * (36 / (37 - reps));
  };

  // Calculate percentile based on 1RM
  const calculatePercentile = (exercise: string, oneRM: number, userAge: number): number => {
    const exerciseData = strengthPercentiles[exercise as keyof typeof strengthPercentiles];
    if (!exerciseData) return 0;
    
    const userAgeGroup = getUserAgeGroup(userAge);
    const ageGroup = exerciseData.find(group => group.age === userAgeGroup);
    if (!ageGroup) return 0;
    
    // Find where the user's 1RM falls in the percentile array
    const { percentiles } = ageGroup;
    
    // Convert oneRM if necessary based on user's weight unit preference
    const oneRMInLbs = weightUnit === 'kg' ? oneRM * 2.20462 : oneRM;
    
    let userPercentile = 0;
    for (let i = 0; i < percentiles.length; i++) {
      if (oneRMInLbs <= percentiles[i]) {
        // Calculate more precise percentile within this bracket
        const lowerBound = i > 0 ? percentiles[i-1] : 0;
        const upperBound = percentiles[i];
        const range = upperBound - lowerBound;
        const position = oneRMInLbs - lowerBound;
        
        userPercentile = (i * 10) + (position / range * 10);
        break;
      }
    }
    
    // If stronger than the highest percentile
    if (oneRMInLbs > percentiles[percentiles.length - 1]) {
      userPercentile = 99;
    }
    
    return Math.min(Math.round(userPercentile), 99);
  };

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const repsNum = parseInt(reps);
    const ageNum = parseInt(age);
    
    if (isNaN(weightNum) || isNaN(repsNum) || repsNum <= 0 || isNaN(ageNum) || ageNum < 18) {
      return;
    }
    
    // Convert weight to calculation units if needed
    const calculationWeight = weightUnit === 'kg' ? weightNum : weightNum / 2.20462;
    
    const oneRM = calculateOneRM(calculationWeight, repsNum);
    setCalculatedOneRM(oneRM);
    
    const userPercentile = calculatePercentile(selectedExercise, oneRM, ageNum);
    setPercentile(userPercentile);
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Weight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Calculate Your
                  </p>
                  <p className="text-2xl font-bold">Strength Percentile</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Calculate Your Strength Percentile</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-4 p-1">
              <div>
                <Label htmlFor="exercise-select">Select Exercise</Label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {mainLifts.map((lift) => (
                    <Button
                      key={lift}
                      variant={selectedExercise === lift ? "default" : "outline"}
                      onClick={() => setSelectedExercise(lift)}
                      className="w-full justify-center"
                    >
                      {lift}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="weight">Weight ({weightUnit})</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder={`Weight in ${weightUnit}`}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="reps">Reps</Label>
                  <Input
                    id="reps"
                    type="number"
                    placeholder="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              
              <Button onClick={handleCalculate} className="w-full">
                Calculate
              </Button>
              
              {calculatedOneRM !== null && percentile !== null && (
                <div className="space-y-4 mt-6 p-4 bg-muted rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Estimated One-Rep Max</p>
                    <p className="text-2xl font-bold">{formatWeight(calculatedOneRM)}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="font-medium flex items-center gap-2">
                        <Trophy className="h-4 w-4 text-amber-500" />
                        Percentile Ranking
                      </p>
                      <p className="text-sm font-bold">{percentile}%</p>
                    </div>
                    <Progress value={percentile} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      You're stronger than {percentile}% of people in your age group ({getUserAgeGroup(parseInt(age))})
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <p className="text-sm font-medium mb-2">Strength Classification</p>
                    <div className="grid grid-cols-5 gap-1 text-center text-xs">
                      {["Beginner", "Novice", "Intermediate", "Advanced", "Elite"].map((level, i) => (
                        <div
                          key={level}
                          className={`py-1 rounded ${
                            percentile >= i * 20 && percentile < (i + 1) * 20
                              ? "bg-primary text-primary-foreground font-bold"
                              : "bg-accent text-muted-foreground"
                          }`}
                        >
                          {level}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    View Your
                  </p>
                  <p className="text-2xl font-bold">Strength Standards</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Strength Standards by Age Group</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6">
              {mainLifts.map((exercise) => {
                const exerciseData = strengthPercentiles[exercise as keyof typeof strengthPercentiles];
                
                return (
                  <div key={exercise} className="space-y-2">
                    <h3 className="font-bold text-lg">{exercise}</h3>
                    <div className="text-sm">
                      {exerciseData.map(ageData => (
                        <div key={ageData.age} className="mb-4">
                          <h4 className="font-medium text-primary">{ageData.age} age group</h4>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1">
                            <div className="font-medium">Beginner (10%)</div>
                            <div>{ageData.percentiles[0]} lbs</div>
                            
                            <div className="font-medium">Novice (30%)</div>
                            <div>{ageData.percentiles[2]} lbs</div>
                            
                            <div className="font-medium">Intermediate (50%)</div>
                            <div>{ageData.percentiles[4]} lbs</div>
                            
                            <div className="font-medium">Advanced (70%)</div>
                            <div>{ageData.percentiles[6]} lbs</div>
                            
                            <div className="font-medium">Elite (90%)</div>
                            <div>{ageData.percentiles[8]} lbs</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <p className="text-xs text-muted-foreground mt-4">
                Note: These values represent estimated one-rep maximums for each percentile.
              </p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};