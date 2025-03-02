import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CalendarDays, Dumbbell, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Mock data - replace with actual data fetching
const mockPlan = {
  id: "1",
  title: "8-Week Strength Program",
  duration: "8 weeks",
  workoutDays: 4,
  goals: ["Bench Press: 225 lbs", "Squat: 315 lbs", "Deadlift: 405 lbs"],
  schedule: [
    {
      day: "Monday",
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: 8,
          lastWeight: "185 lbs",
        },
        {
          name: "Overhead Press",
          sets: 3,
          reps: 12,
          lastWeight: "135 lbs",
        },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: 10,
          lastWeight: "65 lbs each",
        },
      ],
    },
    {
      day: "Wednesday",
      exercises: [
        {
          name: "Squat",
          sets: 4,
          reps: 8,
          lastWeight: "275 lbs",
        },
        {
          name: "Romanian Deadlift",
          sets: 3,
          reps: 12,
          lastWeight: "225 lbs",
        },
        {
          name: "Leg Press",
          sets: 3,
          reps: 15,
          lastWeight: "400 lbs",
        },
      ],
    },
    {
      day: "Friday",
      exercises: [
        {
          name: "Deadlift",
          sets: 3,
          reps: 5,
          lastWeight: "315 lbs",
        },
        {
          name: "Barbell Row",
          sets: 3,
          reps: 10,
          lastWeight: "185 lbs",
        },
        {
          name: "Pull-ups",
          sets: 3,
          reps: 8,
          lastWeight: "Bodyweight",
        },
      ],
    },
  ],
};

const PlanDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { toast } = useToast();
  const [isDefault, setIsDefault] = useState(false);

  const handleDefaultToggle = (checked: boolean) => {
    setIsDefault(checked);
    toast({
      title: checked ? "Default Plan Set" : "Default Plan Removed",
      description: checked
        ? "This plan is now your default workout plan"
        : "This plan is no longer your default workout plan",
    });
  };

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/plans")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Plans
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-4">{mockPlan.title}</h1>
                <div className="flex space-x-6 text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{mockPlan.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="w-4 h-4 mr-2" />
                    <span>{mockPlan.workoutDays} days/week</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="default-plan"
                  checked={isDefault}
                  onCheckedChange={handleDefaultToggle}
                />
                <Label htmlFor="default-plan">Set as Default Plan</Label>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Weekly Schedule</h2>
            <div className="space-y-8">
              {mockPlan.schedule.map((day) => (
                <div
                  key={day.day}
                  className="border-b pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="font-medium text-lg mb-4">{day.day}</h3>
                  <div className="space-y-4">
                    {day.exercises.map((exercise) => (
                      <div
                        key={exercise.name}
                        className="bg-muted/20 rounded-lg p-4"
                      >
                        <div>
                          <h4 className="font-medium text-primary">
                            {exercise.name}
                          </h4>
                          <div className="text-sm text-muted-foreground">
                            <span>
                              {exercise.sets} sets × {exercise.reps} reps
                            </span>
                            <span className="mx-2">•</span>
                            <span>Last: {exercise.lastWeight}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <ul className="space-y-3">
              {mockPlan.goals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-center text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {goal}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
