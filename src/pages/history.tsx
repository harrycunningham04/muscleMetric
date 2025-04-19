import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Exercise {
  name: string;
  sets: number;
  reps: number[];
  weights: number[];
}

interface WorkoutHistory {
  id: string;
  date: string;
  dateObj: Date;
  duration: string;
  planName: string;
  workoutName: string;
  exercises: Exercise[];
}

const fetchWorkoutHistory = async (): Promise<WorkoutHistory[]> => {
  const sessionData = localStorage.getItem("session");
  if (!sessionData) {
    throw new Error("Session not found in local storage.");
  }

  const session = JSON.parse(sessionData);
  const userId = session.userId;

  const url = `https://hc920.brighton.domains/muscleMetric/php/history/history.php?user_id=${userId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error fetching workout history");
  }

  const data = await response.json();

  // Transform the data into the correct format for WorkoutHistory
  return data.map((item: any) => ({
    id: item.id,
    date: item.date,
    dateObj: new Date(item.date), // Convert the date string into a Date object
    duration: item.duration,
    planName: item.planName,
    workoutName: item.workoutName,
    exercises: countExercises(item.exercises), // Count occurrences of each exercise
  }));
};

// Helper function to count occurrences of each exercise (i.e., count the sets)
const countExercises = (exercises: string[]) => {
  const exerciseCount: { [key: string]: number } = {};

  exercises.forEach((exercise) => {
    exerciseCount[exercise] = (exerciseCount[exercise] || 0) + 1;
  });

  // Transform the counts into the correct structure for the `WorkoutHistory` interface
  return Object.keys(exerciseCount).map((exerciseName) => ({
    name: exerciseName,
    sets: exerciseCount[exerciseName], // The count of each exercise is treated as the number of sets
    reps: [], // No reps since we don't need them
    weights: [], // No weights since we don't need them
  }));
};

const History = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const workoutsPerPage = 5;

  const {
    data,
    status,
  }: { data?: WorkoutHistory[]; status: "pending" | "error" | "success" } =
    useQuery<WorkoutHistory[]>({
      queryKey: ["workoutHistory"],
      queryFn: fetchWorkoutHistory,
    });

  const sortedWorkouts =
    data?.sort(
      (a: WorkoutHistory, b: WorkoutHistory) =>
        b.dateObj.getTime() - a.dateObj.getTime()
    ) || [];

  const workoutsToDisplay = sortedWorkouts.slice(
    (currentPage - 1) * workoutsPerPage,
    currentPage * workoutsPerPage
  );

  const goToWorkoutDetails = (workoutId: string) => {
    navigate(`/history/${workoutId}`);
  };

  const totalPages = Math.ceil(sortedWorkouts.length / workoutsPerPage);

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground text-center">
          Workout History
        </h1>
      </div>

      <div className="space-y-4">
        {status === "pending" ? (
          <p className="text-center py-8 text-muted-foreground">
            Loading workouts...
          </p>
        ) : status === "error" ? (
          <p className="text-center py-8 text-destructive">
            Error loading workout history
          </p>
        ) : sortedWorkouts.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-lg border">
            <p className="text-muted-foreground">No workouts found.</p>
          </div>
        ) : (
          <>
            {workoutsToDisplay.map((workout) => (
              <Card
                key={workout.id}
                className="p-4 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/50"
                onClick={() => goToWorkoutDetails(workout.id)}
              >
                <CardContent className="p-0">
                  <div className="mb-2">
                    <div className="text-lg font-bold text-foreground">
                      {workout.planName}
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      {workout.workoutName}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-1 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{workout.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{workout.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex flex-col space-y-2 mt-4">
                    {workout.exercises
                      .slice(0, 3)
                      .map((exercise: Exercise, idx: number) => (
                        <div key={idx}>
                          <div className="text-sm font-semibold">
                            {exercise.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {exercise.sets} sets
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <span className="text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default History;
