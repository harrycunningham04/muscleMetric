import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardView } from "@/components/DashboardView";
import { ProgressSummary } from "@/components/ProgressSummary";
import { ExerciseProgressGraph } from "@/components/ExerciseProgressGraph";

const Main = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [exercises, setExercises] = useState<{ id: number; name: string }[]>(
    []
  );
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    const sessionData = localStorage.getItem("session");
    if (sessionData) {
      const session = JSON.parse(sessionData);
      setUserId(session.userId); // Only set state here
    }
  }, []);
  
  useEffect(() => {
    if (!userId) return; // Don't run if userId is still null/0

    const fetchExercises = async () => {
      try {
        console.log("Fetching exercises with userId:", userId); // Should now be correct
        const response = await fetch(
          `https://hc920.brighton.domains/muscleMetric/php/dashboard/exercises.php?user_id=${userId}`
        );
        const data = await response.json();

        if (response.ok && data.exercises) {
          setExercises(data.exercises);
        } else {
          console.error("Error fetching exercises:", data.message);
        }
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, [userId]);

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
                  {exercises.length > 0 ? (
                    exercises.map((exercise) => (
                      <button
                        key={exercise.id}
                        onClick={() => {
                          setSelectedExercise(exercise.id);
                          console.log("Selected exercise ID:", exercise.id);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedExercise === exercise.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        }`}
                      >
                        {exercise.name}
                      </button>
                    ))
                  ) : (
                    <div className="text-center text-muted-foreground py-4">
                      Create a plan and you will see your exercises here.
                    </div>
                  )}
                </div>
              </div>

              {/* Exercise Progress Graph */}
              <div className="md:col-span-9">
                <div className="h-full">
                  {selectedExercise && userId ? (
                    <ExerciseProgressGraph
                      exerciseId={selectedExercise}
                      userId={userId}
                    />
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
