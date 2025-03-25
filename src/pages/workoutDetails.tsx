import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Timer, ChevronLeft, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ExerciseCard } from "@/components/ExerciseCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weights: number[];
  actualReps: number[];
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

const Workout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  //call to workoutExercises table list of exercises, reps sets and last used weight, 
  //call to exercises table get all information about that exercise
  const [workout, setWorkout] = useState<WorkoutState>({
    name: "Push Day",
    exercises: [
      {
        id: "1",
        name: "Bench Press",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
        bodyPart: "chest",
        equipment: "Barbell, Bench",
        setupDescription:
          "Lie flat on your back on a bench with the barbell set above your chest. Place your hands slightly wider than shoulder-width apart on the bar.",
        repDescription:
          "Lower the barbell slowly to your chest while maintaining control. Press the bar back up to the starting position, ensuring your elbows are at a 45-degree angle to your torso throughout the movement.",
        type: "compound",
        user: "intermediate",
      },
      {
        id: "2",
        name: "Incline Bench Press",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
        bodyPart: "chest",
        equipment: "Barbell, Incline Bench",
        setupDescription:
          "Lie on an incline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.",
        repDescription:
          "Lower the barbell to the upper part of your chest and then press it back up to the starting position, keeping your elbows at a 45-degree angle.",
        type: "compound",
        user: "advanced",
      },
      {
        id: "3",
        name: "Decline Bench Press",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
        bodyPart: "chest",
        equipment: "Barbell, Decline Bench",
        setupDescription:
          "Lie on a decline bench with the barbell positioned above your chest. Grip the barbell slightly wider than shoulder-width.",
        repDescription:
          "Lower the barbell to the lower part of your chest, then press it back up to the starting position while maintaining control.",
        type: "compound",
        user: "advanced",
      },
      {
        id: "4",
        name: "Dumbbell Bench Press",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
        bodyPart: "chest",
        equipment: "Dumbbells, Bench",
        setupDescription:
          "Lie flat on your back on a bench and hold a dumbbell in each hand at shoulder level.",
        repDescription:
          "Press the dumbbells upward, extending your arms fully, then lower them back to the starting position.",
        type: "compound",
        user: "beginner",
      },
      {
        id: "5",
        name: "Dumbbell Flys",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
        bodyPart: "chest",
        equipment: "Dumbbells, Bench",
        setupDescription:
          "Lie flat on a bench with a dumbbell in each hand, arms extended above your chest.",
        repDescription:
          "Slowly lower the dumbbells outward, keeping a slight bend in your elbows. Bring the dumbbells back together, squeezing your chest.",
        type: "isolation",
        user: "beginner",
      },
    ],
    currentExerciseIndex: 0,
    timerSeconds: 0,
    isTimerRunning: false,
    isWorkoutStarted: false,
    completedExercises: [],
    startedExercises: [],
    activeExerciseId: null,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (workout.isTimerRunning) {
      interval = setInterval(() => {
        setWorkout((prev) => ({
          ...prev,
          timerSeconds: prev.timerSeconds + 1,
        }));
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [workout.isTimerRunning]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startWorkout = () => {
    setWorkout((prev) => ({
      ...prev,
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
    if (workout.activeExerciseId && workout.activeExerciseId !== exerciseId) {
      setWorkout((prev) => ({
        ...prev,
        startedExercises: prev.startedExercises.includes(exerciseId)
          ? prev.startedExercises
          : [...prev.startedExercises, exerciseId],
        activeExerciseId: exerciseId,
      }));
    } else {
      // Starting a new exercise or the same exercise
      setWorkout((prev) => ({
        ...prev,
        startedExercises: prev.startedExercises.includes(exerciseId)
          ? prev.startedExercises
          : [...prev.startedExercises, exerciseId],
        activeExerciseId: exerciseId,
      }));
    }
  };

  const reopenExercise = (exerciseId: string) => {
    setWorkout((prev) => ({
      ...prev,
      completedExercises: prev.completedExercises.filter(
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
      ...prev,
      activeExerciseId: null,
    }));
  };

  const completeExercise = (exerciseId: string) => {
    setWorkout((prev) => ({
      ...prev,
      completedExercises: [...prev.completedExercises, exerciseId],
      activeExerciseId: null,
    }));
    toast({
      title: "Exercise Completed",
      description: "Great job! Keep going! 🎯",
    });
  };

  const handleFinishWorkout = () => {
    if (workout.completedExercises.length === workout.exercises.length) {
      toast({
        title: "Workout completed! 🎉",
        description: "Amazing work! Your progress has been saved.",
      });
      navigate("/main");
    } else {
      const confirmed = window.confirm(
        "You haven't completed all exercises. Are you sure you want to finish the workout?"
      );
      if (confirmed) {
        toast({
          title: "Workout saved",
          description: "Your partial progress has been saved.",
        });
        navigate("/main");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-20 opacity-5 dark:opacity-10 transform rotate-12">
          <Dumbbell className="w-96 h-96 text-primary" />
        </div>
        <div className="absolute bottom-40 -left-20 opacity-5 dark:opacity-10 transform -rotate-12">
          <Dumbbell className="w-96 h-96 text-primary" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative max-w-2xl py-8 z-10">
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
                  {workout.name}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {workout.exercises.length} exercises planned
                </p>
              </div>
            </div>
            {workout.isWorkoutStarted && (
              <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-lg border border-primary/20 dark:border-primary/30">
                <Timer className="h-5 w-5 text-primary dark:text-primary" />
                <span className="font-mono text-lg font-semibold text-foreground">
                  {formatTime(workout.timerSeconds)}
                </span>
              </div>
            )}
          </div>
        </Card>

        {!workout.isWorkoutStarted ? (
          <div className="flex justify-center items-center w-full">
            <Card className="overflow-hidden w-full backdrop-blur-sm bg-card/95 dark:bg-card/90 border border-border/50 dark:border-border/30 shadow-sm">
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold mb-4 text-foreground">
                  Workout Preview
                </h2>
                <Separator className="my-4 bg-border/70 dark:bg-border/50" />
                <div className="space-y-6">
                  {workout.exercises.map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      isActive={false}
                      onComplete={() => {}}
                      workoutStarted={false}
                    />
                  ))}
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
            {workout.exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className="overflow-hidden transition-all duration-200 backdrop-blur-sm bg-card/95 dark:bg-card/90 border border-border/50 dark:border-border/30 shadow-sm hover:shadow-md dark:hover:shadow-primary/10"
              >
                <div className="p-4">
                  <ExerciseCard
                    exercise={exercise}
                    isActive={workout.activeExerciseId === exercise.id}
                    onComplete={() => completeExercise(exercise.id)}
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
    </div>
  );
};

export default Workout;
