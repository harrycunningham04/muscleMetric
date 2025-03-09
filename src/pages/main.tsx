import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardView } from "@/components/DashboardView";
import { ProgressSummary } from "@/components/ProgressSummary";
import { ExerciseProgressGraph } from "@/components/ExerciseProgressGraph";

const mockPlan = {
  id: 1,
  name: "Plan 1",
  exercises: [
    "Bench Press",
    "Squats",
    "Deadlifts",
    "Pull-Ups",
    "Push-Ups",
    "Overhead Press",
    "Bent-Over Rows",
    "Lat Pulldown",
    "Leg Press",
    "Lunges",
    "Dumbbell Curls",
    "Tricep Dips",
    "Hammer Curls",
    "Tricep Pushdowns",
    "Calf Raises",
    "Romanian Deadlifts",
    "Glute Bridges",
    "Hip Thrusts",
    "Seated Shoulder Press",
    "Face Pulls",
    "Cable Flys",
    "Chest Flys",
    "Front Squats",
    "Barbell Shrugs",
    "Reverse Lunges",
    "Sumo Deadlifts",
    "Leg Curls",
    "Leg Extensions",
    "Incline Bench Press",
    "Arnold Press",
  ],
};

const Main = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  return (
    <div className="container py-8 bg-background text-foreground min-h-screen">
      <div className="space-y-8">
        <DashboardView />
        <ProgressSummary />

        <Card className="bg-card text-card-foreground md:block hidden">
          <CardHeader>
            <CardTitle>Exercise Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="hidden md:grid md:grid-cols-12 gap-6">
              {/* Exercise List Sidebar */}
              <div className="md:col-span-3">
                <div
                  className="space-y-2 overflow-y-auto"
                  style={{ maxHeight: "500px" }}
                >
                  {mockPlan.exercises.map((exercise) => (
                    <button
                      key={exercise}
                      onClick={() => setSelectedExercise(exercise)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedExercise === exercise
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      {exercise}
                    </button>
                  ))}
                </div>
              </div>

              {/* Exercise Progress Graph */}
              <div className="md:col-span-9">
                <div className="h-full">
                  {selectedExercise ? (
                    <ExerciseProgressGraph exercise={selectedExercise} />
                  ) : (
                    <div className="text-center text-muted-foreground py-12">
                      Select an exercise from the list to view your progress
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile View: Message */}
        <div className="md:hidden">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Exercise Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-12">
                To view your progress graphs, please use a larger screen.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Main;
