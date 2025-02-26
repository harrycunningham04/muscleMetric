
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Timer, ChevronLeft, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ExerciseCard } from "@/components/ExerciseCard";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weights: number[];
  actualReps: number[];
  previousWeight?: string;
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
}

const WorkoutDetails = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [workout, setWorkout] = useState<WorkoutState>({
    name: "Push Day",
    exercises: [
      {
        id: "1",
        name: "Barbell Bench Press",
        sets: 3,
        reps: 8,
        weights: [0, 0, 0],
        actualReps: [8, 8, 8],
        previousWeight: "80 kg × 8",
      },
      {
        id: "2",
        name: "Dumbbell Single Arm Row",
        sets: 4,
        reps: 12,
        weights: [0, 0, 0, 0],
        actualReps: [12, 12, 12, 12],
        previousWeight: "30 kg × 12",
      },
    ],
    currentExerciseIndex: 0,
    timerSeconds: 0,
    isTimerRunning: false,
    isWorkoutStarted: false,
    completedExercises: [],
    startedExercises: [],
  });

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    
    if (workout.isTimerRunning) {
      interval = setInterval(() => {
        setWorkout(prev => ({
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
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startWorkout = () => {
    setWorkout(prev => ({
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
    setWorkout(prev => ({
      ...prev,
      startedExercises: [...prev.startedExercises, exerciseId],
    }));
  };

  const completeExercise = (exerciseId: string) => {
    setWorkout(prev => ({
      ...prev,
      completedExercises: [...prev.completedExercises, exerciseId],
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
      const confirmed = window.confirm("You haven't completed all exercises. Are you sure you want to finish the workout?");
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
    <div className="relative min-h-screen bg-modern-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -right-20 opacity-5 transform rotate-12">
          <Dumbbell className="w-96 h-96 text-modern-blue" />
        </div>
        <div className="absolute bottom-40 -left-20 opacity-5 transform -rotate-12">
          <Dumbbell className="w-96 h-96 text-modern-blue" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative max-w-2xl py-8 z-10">
        <div className="flex items-center justify-between mb-8 backdrop-blur-sm bg-white/50 p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-modern-blue/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">{workout.name}</h1>
              <p className="text-sm text-muted-foreground">
                {workout.exercises.length} exercises planned
              </p>
            </div>
          </div>
          {workout.isWorkoutStarted && (
            <div className="flex items-center gap-2 bg-modern-blue/10 px-4 py-2 rounded-lg">
              <Timer className="h-5 w-5 text-modern-blue" />
              <span className="font-mono text-lg font-semibold">{formatTime(workout.timerSeconds)}</span>
            </div>
          )}
        </div>

        {!workout.isWorkoutStarted ? (
          <div className="space-y-4">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm">
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
            <div className="fixed bottom-8 left-4 right-4 max-w-2xl mx-auto">
              <Button 
                onClick={startWorkout}
                className="w-full border-2 border-modern-blue hover:bg-modern-blue/10 text-black transition-all duration-200 hover:scale-105 backdrop-blur-sm bg-white/50"
                variant="outline"
              >
                Start Workout
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {workout.exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                isActive={workout.startedExercises.includes(exercise.id)}
                onComplete={() => completeExercise(exercise.id)}
                onStart={() => startExercise(exercise.id)}
                isStarted={workout.startedExercises.includes(exercise.id)}
                workoutStarted={workout.isWorkoutStarted}
              />
            ))}
            <div className="fixed bottom-8 left-4 right-4 max-w-2xl mx-auto">
              <Button 
                onClick={handleFinishWorkout}
                className="w-full bg-modern-blue hover:bg-modern-blue/90 text-black transition-colors duration-200 backdrop-blur-sm"
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

export default WorkoutDetails;