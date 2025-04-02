import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Dumbbell } from "lucide-react";

interface Exercise {
  id: number;
  WorkoutId: number;
  Name: string;
}

interface Workout {
  id: number;
  name: string;
  completed: boolean;
  exercises: string[];
}

export const Workout = () => {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        let USER_ID = 2
        setLoading(true);
        const response = await fetch(`https://hc920.brighton.domains/muscleMetric/php/workout/workout.php?user_id=${USER_ID}`);
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        // Transform workouts data
        const transformedWorkouts = data.workouts.map((workout: any) => ({
          id: workout.id,
          name: workout.Name,
          completed: workout.Completed === 1, // Convert 1/0 to true/false
          exercises: data.exercises
            .filter((exercise: Exercise) => exercise.WorkoutId === workout.id)
            .map((exercise: Exercise) => exercise.Name),
        }));

        // Sort workouts to put uncompleted ones at the top
        transformedWorkouts.sort((a: { completed: any; }, b: { completed: any; }) => Number(a.completed) - Number(b.completed));

        setWorkouts(transformedWorkouts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  if (loading) return <p className="text-center text-foreground">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
                  ? "bg-emerald-500/10 dark:bg-emerald-500/20"
                  : "bg-card hover:bg-accent"
              }`}
              onClick={() => navigate(`/workout/${workout.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2 text-center mx-auto">
                  <h3 className="text-xl font-semibold text-foreground">{workout.name}</h3>
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
