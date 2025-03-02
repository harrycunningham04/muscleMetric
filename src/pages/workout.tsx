
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Dumbbell } from "lucide-react";

interface Workout {
  id: string;
  name: string;
  completed: boolean;
  dayOfWeek: string;
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
        completed: false,
        dayOfWeek: "Monday",
        exercises: ["Bench Press", "Shoulder Press", "Tricep Extensions"],
      },
      {
        id: "2",
        name: "Pull Day",
        completed: false,
        dayOfWeek: "Wednesday",
        exercises: ["Pull-ups", "Rows", "Bicep Curls"],
      },
      {
        id: "3",
        name: "Leg Day",
        completed: false,
        dayOfWeek: "Friday",
        exercises: ["Squats", "Romanian Deadlifts", "Calf Raises"],
      },
    ];

    // Sort workouts to put today's workout at the top
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const sortedWorkouts = mockWorkouts.sort((a, b) => {
      if (a.dayOfWeek === today) return -1;
      if (b.dayOfWeek === today) return 1;
      return 0;
    });

    setWorkouts(sortedWorkouts);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-20 opacity-5 transform rotate-12">
          <Dumbbell className="w-96 h-96 text-primary" />
        </div>
        <div className="absolute bottom-40 -left-20 opacity-5 transform -rotate-12">
          <Dumbbell className="w-96 h-96 text-primary" />
        </div>
      </div>

      <div className="container max-w-2xl mx-auto py-8 relative z-10">
        <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-sm mb-6 border text-center">
          <h1 className="text-2xl font-bold mb-2 text-foreground">Today's Workouts</h1>
          <p className="text-muted-foreground">Select your workout to begin</p>
        </div>

        <div className="space-y-4">
          {workouts.map((workout) => (
            <Card
              key={workout.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                workout.completed 
                  ? 'bg-emerald-500/10 dark:bg-emerald-500/20' 
                  : 'bg-card hover:bg-accent'
              }`}
              onClick={() => navigate(`/workout/${workout.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2 text-center mx-auto">
                  <h3 className="text-xl font-semibold text-foreground">{workout.name}</h3>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {workout.dayOfWeek}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {workout.exercises.join(" • ")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {workout.completed ? (
                    <CheckCircle className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Button
                      variant="secondary"
                      className="hover:bg-accent"
                    >
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