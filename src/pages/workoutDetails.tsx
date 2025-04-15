import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Timer, ChevronLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weights: number[];
  previousWeight: string;
  bodyPart: string;
  equipment: string;
  setupDescription: string;
  repDescription: string;
  type: "compound" | "isolation";
  user: "beginner" | "intermediate" | "advanced";
}

interface WorkoutState {
  name: string;
  exercises: Exercise[];
  currentExerciseIndex: number;
  timerSeconds: number;
  isTimerRunning: boolean;
  isWorkoutStarted: boolean;
  completedExercises: string[];
  startedExercises: string[];
  activeExerciseId: string | null;
}

interface APIExercise {
  ExerciseId: number;
  Name: string;
  Sets: number;
  Reps: number;
  Weight: string;
  BodyPart: string;
  Equipment: string;
  SetUpDescription?: string;
  RepDescription?: string;
  Type: string;
  ExperienceLevel: string;
}

const Workout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { workoutid } = useParams();

  const [workout, setWorkout] = useState<WorkoutState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!workoutid) {
      setError("Invalid workout ID");
      setLoading(false);
      return;
    }

    const fetchWorkout = async () => {
      try {
        const response = await fetch(
          `https://hc920.brighton.domains/muscleMetric/php/workout/workoutDetails.php?id=${workoutid}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch workout data");
        }
        const data = await response.json();

        console.log("API Response:", data);

        // Convert API data to match WorkoutState format
        const formattedWorkout: WorkoutState = {
          name: data.workout?.name || "Unnamed Workout",
          exercises: Array.isArray(data.exercises)
            ? data.exercises.map((exercise: APIExercise) => ({
                id: String(exercise.ExerciseId),
                name: exercise.Name,
                sets: exercise.Sets,
                reps: exercise.Reps,
                weights: exercise.Weight ? [parseFloat(exercise.Weight)] : [],
                previousWeight: exercise.Weight || "N/A",
                bodyPart: exercise.BodyPart,
                equipment: exercise.Equipment,
                setupDescription:
                  exercise.SetUpDescription ||
                  "No setup description available.",
                repDescription:
                  exercise.RepDescription || "No rep description available.",
                type: (exercise.Type || "").toLowerCase() as
                  | "compound"
                  | "isolation",
                user: (exercise.ExperienceLevel || "").toLowerCase() as
                  | "beginner"
                  | "intermediate"
                  | "advanced",
              }))
            : [],
          currentExerciseIndex: 0,
          timerSeconds: 0,
          isTimerRunning: false,
          isWorkoutStarted: false,
          completedExercises: [],
          startedExercises: [],
          activeExerciseId: null,
        };

        console.log("Checking Exercises Array:", data.exercises);
        console.log("Formatted Exercises:", formattedWorkout.exercises);
        setWorkout(formattedWorkout);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (workout?.isTimerRunning) {
      interval = setInterval(() => {
        setWorkout((prev) => ({
          ...prev!,
          timerSeconds: prev!.timerSeconds + 1,
        }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [workout?.isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startWorkout = () => {
    setWorkout((prev) => ({
      ...prev!,
      isWorkoutStarted: true,
      isTimerRunning: true,
    }));
    toast({
      title: "Workout Started",
      description: "Let's crush it! 💪",
    });
  };

  const startExercise = (exerciseId: string) => {
    // If there's an active exercise and it's different from the one being started
    if (workout?.activeExerciseId && workout.activeExerciseId !== exerciseId) {
      setWorkout((prev) => ({
        ...prev!,
        startedExercises: prev!.startedExercises.includes(exerciseId)
          ? prev!.startedExercises
          : [...prev!.startedExercises, exerciseId],
        activeExerciseId: exerciseId,
      }));
    } else {
      // Starting a new exercise or the same exercise
      setWorkout((prev) => ({
        ...prev!,
        startedExercises: prev!.startedExercises.includes(exerciseId)
          ? prev!.startedExercises
          : [...prev!.startedExercises, exerciseId],
        activeExerciseId: exerciseId,
      }));
    }
  };

  const reopenExercise = (exerciseId: string) => {
    setWorkout((prev) => ({
      ...prev!,
      completedExercises: prev!.completedExercises.filter(
        (id) => id !== exerciseId
      ),
      activeExerciseId: exerciseId,
    }));

    toast({
      title: "Exercise Reopened",
      description: "You can now edit your weights and reps",
    });
  };

  const deactivateExercise = () => {
    setWorkout((prev) => ({
      ...prev!,
      activeExerciseId: null,
    }));
  };

  const handleCompletedExercise = (
    exerciseId: string,
    sets: { weight: number; reps: number }[] // reps as a single number now
  ) => {
    console.log("Received sets for", exerciseId, sets);

    setWorkout((prev) => {
      if (!prev) return prev;

      const updatedExercises = prev.exercises.map((ex) =>
        ex.id === exerciseId
          ? {
              ...ex,
              sets: sets.length, // Keep this as the number of sets
              weights: sets.map((set) => set.weight), // Array of weights
              reps: sets[sets.length - 1].reps,
            }
          : ex
      );

      return {
        ...prev,
        completedExercises: [
          ...new Set([...prev.completedExercises, exerciseId]),
        ],
        exercises: updatedExercises,
      };
    });

    toast({
      title: "Exercise Completed",
      description: "Great job! Keep going! 🎯",
    });
  };

  // Calculate historySetsData using useMemo
  const historySetsData = useMemo(() => {
    if (!workout) return [];
    return workout.exercises
      .filter((ex) => workout.completedExercises.includes(ex.id))
      .flatMap((ex) =>
        ex.weights.map((weight, index) => ({
          ExerciseId: ex.id,
          SetNumber: index + 1,
          Reps: ex.reps,
          Weight: weight,
        }))
      );
  }, [workout]);

  function calculateNewAverageTime(
    oldTime: string,
    workoutCount: number,
    newWorkoutSeconds: number
  ): string {
    // Check if oldTime is valid
    if (!oldTime || oldTime === "00:00:00") {
      console.log("🟡 Invalid or default oldTime, using fallback.");
      oldTime = "00:00:00"; // Set a default value if oldTime is invalid
    }

    const [hours, minutes, seconds] = oldTime.split(":").map(Number);
    const oldSeconds = hours * 3600 + minutes * 60 + seconds;

    const totalTime =
      (oldSeconds * workoutCount + newWorkoutSeconds) / (workoutCount + 1);

    const h = String(Math.floor(totalTime / 3600)).padStart(2, "0");
    const m = String(Math.floor((totalTime % 3600) / 60)).padStart(2, "0");
    const s = String(Math.floor(totalTime % 60)).padStart(2, "0");

    console.log("🟡 oldTime value:", oldTime);
    return `${h}:${m}:${s}`;
  }

  const handleFinishWorkout = async () => {
    let userid = 2;

    const totalSetsThisWorkout = historySetsData.length;

    const totalWeightThisWorkout = historySetsData.reduce(
      (total, set) => total + set.Weight,
      0
    );

    if (!workout) return;

    const now = new Date();
    const formattedDate = now.toISOString().split("T")[0];
    const formattedTime = new Date(workout.timerSeconds * 1000)
      .toISOString()
      .substr(11, 8);

    const workoutHistoryData = {
      WorkoutId: workoutid,
      WorkoutTime: formattedTime,
      Date: formattedDate,
    };

    try {
      console.log("🟡 Sending workout history:", workoutHistoryData);

      const historyRes = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/workout/write/section1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(workoutHistoryData),
        }
      );

      const historyResult = await historyRes.json();
      console.log("🟢 Received history result:", historyResult);

      if (!historyResult.success) {
        throw new Error("❌ Failed to save workout history");
      }

      const historyId = historyResult.historyId;
      console.log("✅ WorkoutHistory saved with historyId:", historyId);

      const setsData = {
        historyId,
        sets: historySetsData,
      };

      console.log("🟡 Sending sets data:", setsData);

      const setsRes = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/workout/write/section2.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(setsData),
        }
      );

      const setsResult = await setsRes.json();
      console.log("🟢 Received sets result:", setsResult);

      if (!setsResult.success) {
        throw new Error("❌ Failed to save history sets");
      }

      console.log("✅ History sets saved.");

      // 🟡 Send userId to section 3
      const section3Data = {
        userId: userid,
      };

      console.log("🟡 Sending section 3 data:", section3Data);

      const section3Res = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/workout/write/section3.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(section3Data),
        }
      );

      const section3Result = await section3Res.json();
      console.log("🟢 Received section 3 result:", section3Result);

      console.log("Section data 3 test1:", section3Result.SetsCompleted);
      console.log(
        "Section data 3 test2:",
        section3Result.data[0].SetsCompleted
      );

      if (!section3Result.success) {
        throw new Error("❌ Failed to save section 3 data");
      }

      console.log("✅ Section 3 data saved.");

      //updated fact to section 4
      const updatedFacts = {
        userid,
        newWorkoutCount: section3Result.data[0].WorkoutsComplete + 1,
        newSetsCompleted:
          section3Result.data[0].SetsCompleted + totalSetsThisWorkout,
        newTotalWeight:
          section3Result.data[0].TotalWeight + totalWeightThisWorkout,
        newAvgWorkoutTime: calculateNewAverageTime(
          section3Result.data[0].AvgWorkoutTime,
          section3Result.data[0].WorkoutsComplete,
          workout.timerSeconds
        ),
      };

      console.log(
        "✅ Section 3 succeeded, preparing to send section 4 data..."
      );
      console.log("📦 Updated facts payload:", updatedFacts);

      const section4Res = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/workout/write/section4.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFacts),
        }
      );

      console.log("🟢 Section 4 request completed, parsing response...");

      const section4Result = await section4Res.json();
      console.log("📩 Section 4 response:", section4Result);

      if (!section4Result.success) {
        throw new Error("❌ Failed to save section 4 data");
      }

      console.log("✅ Section 4 data saved.");

      console.log("Section 5 starting");

      //section 5, updating Workouts table
      const section5Res = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/workout/write/section5.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ WorkoutId: workoutid }),
        }
      );

      const section5Result = await section5Res.json();
      console.log("Section 5 response:", section5Result);

      if(!section5Result.success) {
        throw new Error("❌ Failed to save section 5 data");
      }

      console.log("Section 5 data saved");

      // 🎉 Final toast/redirect
      if (workout.completedExercises.length === workout.exercises.length) {
        toast({
          title: "Workout completed! 🎉",
          description: "Amazing work! Your progress has been saved.",
        });
        navigate("/dashboard");
      } else {
        const confirmed = window.confirm(
          "You haven't completed all exercises. Are you sure you want to finish the workout?"
        );
        if (confirmed) {
          toast({
            title: "Workout saved",
            description: "Your partial progress has been saved.",
          });
          navigate("/dashboard");
        }
      }
    } catch (error) {
      console.error("❌ Error saving workout:", error);
      toast({
        title: "Save failed",
        description: "Something went wrong while saving your workout.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-background flex justify-center items-center">
      {/* Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary border-opacity-75"></div>
          <p className="text-lg text-muted-foreground mt-4">
            Loading workout...
          </p>
        </div>
      ) : error ? (
        /* Error Message */
        <div className="text-center text-red-500">
          <p className="text-xl font-semibold">⚠️ Error loading workout</p>
          <p className="text-sm">{error}</p>
        </div>
      ) : (
        /* Main Content */
        <div className="relative max-w-2xl py-8 z-10">
          {/* Header Card */}
          <Card className="mb-8 backdrop-blur-sm bg-card/90 dark:bg-card/80 border border-border/50 dark:border-border/30 shadow-sm">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigate(-1)}
                  className="hover:bg-accent hover:text-accent-foreground rounded-full transition-colors"
                  aria-label="Go back"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    {workout?.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {workout?.exercises.length} exercises planned
                  </p>
                </div>
              </div>
              {workout?.isWorkoutStarted && (
                <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-lg border border-primary/20 dark:border-primary/30">
                  <Timer className="h-5 w-5 text-primary dark:text-primary" />
                  <span className="font-mono text-lg font-semibold text-foreground">
                    {formatTime(workout.timerSeconds)}
                  </span>
                </div>
              )}
            </div>
          </Card>

          {/* Render Content */}
          {!workout?.isWorkoutStarted ? (
            <div className="flex justify-center items-center w-full">
              <Card className="overflow-hidden w-full backdrop-blur-sm bg-card/95 dark:bg-card/90 border border-border/50 dark:border-border/30 shadow-sm">
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-4 text-foreground">
                    Workout Preview
                  </h2>
                  <Separator className="my-4 bg-border/70 dark:bg-border/50" />
                  <div className="space-y-6">
                    {Array.isArray(workout?.exercises) &&
                    workout.exercises.length > 0 ? (
                      workout.exercises.map((exercise) => (
                        <ExerciseCard
                          key={exercise.id}
                          exercise={exercise}
                          isActive={false}
                          onComplete={() => {}}
                          workoutStarted={false}
                        />
                      ))
                    ) : (
                      <p className="text-center text-muted-foreground">
                        No exercises found for this workout.
                      </p>
                    )}
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={startWorkout}
                      className="w-full md:w-2/3 mx-auto transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
                      size="lg"
                    >
                      Start Workout
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <div className="space-y-4">
              {workout?.exercises?.map((exercise) => (
                <Card
                  key={exercise.id}
                  className="overflow-hidden transition-all duration-200 backdrop-blur-sm bg-card/95 dark:bg-card/90 border border-border/50 dark:border-border/30 shadow-sm hover:shadow-md dark:hover:shadow-primary/10"
                >
                  <div className="p-4">
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      isActive={workout.activeExerciseId === exercise.id}
                      onComplete={(sets) =>
                        handleCompletedExercise(exercise.id, sets)
                      }
                      onStart={() => startExercise(exercise.id)}
                      onDeactivate={deactivateExercise}
                      isStarted={workout.startedExercises.includes(exercise.id)}
                      workoutStarted={workout.isWorkoutStarted}
                      isCompleted={workout.completedExercises.includes(
                        exercise.id
                      )}
                      onReopenExercise={() => reopenExercise(exercise.id)}
                    />
                  </div>
                </Card>
              ))}
              <div className="mt-8 text-center pt-4">
                <Button
                  onClick={handleFinishWorkout}
                  className="w-full md:w-2/3 mx-auto transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background"
                  size="lg"
                >
                  Complete Workout
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Workout;
