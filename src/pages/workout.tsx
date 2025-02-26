import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Dumbbell } from "lucide-react";

interface Workout {
  id: string;
  name: string;
  completed: boolean;
  exercises: string[];
}

export const Workout = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockWorkouts = [
      {
        id: "1",
        name: "Push Day",
        completed: true,
        exercises: ["Bench Press", "Shoulder Press", "Tricep Extensions"],
      },
      {
        id: "3",
        name: "Leg Day",
        completed: false,
        exercises: ["Squats", "Romanian Deadlifts", "Calf Raises"],
      },
      {
        id: "2",
        name: "Pull Day",
        completed: true,
        exercises: ["Pull-ups", "Rows", "Bicep Curls"],
      },
    ];

    // Sort workouts by their id (numerical order)
    const sortedWorkouts = mockWorkouts.sort(
      (a, b) => parseInt(a.id) - parseInt(b.id)
    );

    setWorkouts(sortedWorkouts);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 opacity-5 transform rotate-12">
          <Dumbbell className="w-96 h-96 text-modern-blue" />
        </div>
        <div className="absolute bottom-40 -left-20 opacity-5 transform -rotate-12">
          <Dumbbell className="w-96 h-96 text-modern-blue" />
        </div>
      </div>

      <div className="container max-w-2xl mx-auto py-8 relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-6 border">
          <h1 className="text-2xl font-bold mb-2 text-foreground">
            Today's Workouts
          </h1>
          <p className="text-muted-foreground">Select your workout to begin</p>
        </div>

        <div className="space-y-4">
          {workouts.map((workout) => (
            <Card
              key={workout.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                workout.completed
                  ? "bg-emerald-500/10 dark:bg-emerald-500/20"
                  : "bg-card hover:bg-accent"
              }`}
              onClick={() => navigate(`/workout/${workout.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {workout.name}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Workout ID: {workout.id}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {workout.exercises.join(" • ")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {workout.completed ? (
                    <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Button variant="secondary" className="hover:bg-accent">
                      Start Workout
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workout;
