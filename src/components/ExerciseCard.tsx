import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus, Info, ArrowLeft } from "lucide-react";
import { ExerciseDetailsModal } from "./ExerciseDetailsModal";
import { useSettings } from "@/context/SettingsContext";

interface ExerciseCardProps {
  exercise: {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weights: number[];
    previousWeight?: string;
    bodyPart: string;
    equipment: string;
    setupDescription: string;
    repDescription: string;
    type: "compound" | "isolation";
    user: "beginner" | "intermediate" | "advanced";
  };
  isActive: boolean;
  onComplete: (sets: { weight: number; reps: number }[]) => void;
  onStart?: () => void;
  isStarted?: boolean;
  workoutStarted?: boolean;
  onDeactivate?: () => void;
  isCompleted?: boolean;
  onReopenExercise?: () => void;
}

export const ExerciseCard = ({
  exercise,
  isActive,
  onComplete,
  onStart,
  isStarted,
  workoutStarted,
  onDeactivate,
  isCompleted: externalIsCompleted,
  onReopenExercise,
}: ExerciseCardProps) => {
  const { weightUnit, formatWeight } = useSettings();
  const [sets, setSets] = useState(
    Array.from({ length: exercise.sets }, (_, index) => ({
      weight: exercise.weights[index] ?? 0,
      reps: exercise.reps,
    }))
  );
  const [currentSet, setCurrentSet] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Use the external completion state if provided
  const exerciseCompleted =
    externalIsCompleted !== undefined ? externalIsCompleted : isCompleted;

  useEffect(() => {
    if (currentSet > 0) {
      const previousSet = sets[currentSet - 1];
      setSets((prevSets) =>
        prevSets.map((set, index) =>
          index === currentSet
            ? {
                weight: previousSet.weight,
                reps: previousSet.reps,
              }
            : set
        )
      );
    }
  }, [currentSet]);

  const addSet = () => {
    setSets([...sets, { weight: 0, reps: exercise.reps }]);
  };

  const removeSet = () => {
    if (sets.length > 1) {
      setSets(sets.slice(0, -1));
      if (currentSet >= sets.length - 1) {
        setCurrentSet(Math.max(0, sets.length - 2));
      }
    }
  };

  const updateSet = (
    index: number,
    field: "weight" | "reps",
    value: number
  ) => {
    setSets(
      sets.map((set, i) => (i === index ? { ...set, [field]: value } : set))
    );
  };

  const isSetComplete = (set: { weight: number; reps: number }) => {
    return set.weight > 0 && set.reps > 0;
  };

  const areAllSetsComplete = () => {
    return sets.every(isSetComplete);
  };

  const handleCompleteSet = () => {
    if (isSetComplete(sets[currentSet])) {
      if (currentSet < sets.length - 1) {
        setCurrentSet(currentSet + 1);
      } else if (areAllSetsComplete()) {
        handleCompleteExercise();
      }
    }
  };

  const handlePreviousSet = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  const handleCompleteExercise = () => {
    if (areAllSetsComplete()) {
      setIsCompleted(true);
      onComplete(sets);

      if (onDeactivate) {
        onDeactivate();
      }
    }
  };

  // Format previous weight with current unit
  const formattedPreviousWeight = exercise.previousWeight
    ? formatWeight(parseFloat(exercise.previousWeight.split(" ")[0]))
    : undefined;

  // Collapsed view for not started or completed exercises
  if (!isActive || exerciseCompleted) {
    return (
      <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 mb-4 transition-all duration-300 ease-in-out border border-border/30 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3
              className="font-semibold text-lg flex items-center cursor-pointer group text-foreground"
              onClick={() => setIsModalOpen(true)}
            >
              {exercise.name}
              <Info className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-60 transition-opacity" />
            </h3>
            <p className="text-muted-foreground">
              {exercise.sets} sets × {exercise.reps} reps
              {formattedPreviousWeight && ` • Last: ${formattedPreviousWeight}`}
            </p>
          </div>
          {workoutStarted && (
            <>
              {!isStarted && !exerciseCompleted && (
                <Button
                  onClick={onStart}
                  variant="outline"
                  className="border-primary text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  Start Exercise
                </Button>
              )}
              {isStarted && !isActive && onReopenExercise && (
                <Button
                  onClick={onReopenExercise}
                  variant="outline"
                  className="border-primary text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
                >
                  Edit Exercise
                </Button>
              )}
            </>
          )}
        </div>
        <ExerciseDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          exercise={{
            ...exercise,
            previousWeight: exercise.previousWeight || "", // Default to empty string if undefined
          }} // Pass the full exercise object
        />
      </div>
    );
  }

  // Active exercise view
  return (
    <div className="w-full max-w-md mx-auto bg-primary text-primary-foreground rounded-lg px-4 py-6 mb-4 shadow-md border border-border/20">
      <div className="text-center mb-6">
        <h2
          className="text-primary-foreground text-xl font-bold flex items-center justify-center cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
        >
          {exercise.name}
          <Info className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-60 transition-opacity" />
        </h2>
      </div>

      <div className="mb-6">
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {sets.map((_, index) => (
            <div
              key={index}
              className={`min-w-[72px] px-3 py-2 rounded text-center text-sm ${
                currentSet === index
                  ? "bg-accent text-accent-foreground font-medium"
                  : "bg-muted/60 text-muted-foreground"
              }`}
            >
              Set {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="number"
            value={sets[currentSet]?.reps || ""}
            onChange={(e) =>
              updateSet(currentSet, "reps", Number(e.target.value))
            }
            className="bg-background text-foreground border border-border"
            placeholder={`Previous: ${exercise.reps} reps`}
          />
          <Input
            type="number"
            value={sets[currentSet]?.weight || ""}
            onChange={(e) =>
              updateSet(currentSet, "weight", Number(e.target.value))
            }
            className="bg-background text-foreground border border-border"
            placeholder={`Previous: ${
              exercise.weights[currentSet] ?? 0
            } ${weightUnit}`}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
        {/* Add/Remove Set Buttons */}
        <div className="flex gap-2 justify-center sm:justify-start w-full sm:w-auto flex-wrap">
          <Button
            variant="outline"
            onClick={addSet}
            className="flex-1 sm:flex-none text-primary-foreground bg-primary-foreground/20 hover:bg-primary-foreground/50"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Set
          </Button>
          <Button
            variant="outline"
            onClick={removeSet}
            disabled={sets.length <= 1}
            className="flex-1 sm:flex-none text-primary-foreground bg-primary-foreground/20 hover:bg-primary-foreground/50"
          >
            <Minus className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 justify-center sm:justify-end w-full sm:w-auto flex-wrap">
          {currentSet > 0 && (
            <Button
              variant="outline"
              onClick={handlePreviousSet}
              className="flex-1 sm:flex-none text-primary-foreground bg-primary-foreground/20 hover:bg-primary-foreground/50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous Set
            </Button>
          )}
          <Button
            onClick={
              currentSet < sets.length - 1
                ? handleCompleteSet
                : handleCompleteExercise
            }
            className="flex-1 sm:flex-none bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {currentSet < sets.length - 1
              ? "Complete Set"
              : "Complete Exercise"}
          </Button>
        </div>
      </div>

      <ExerciseDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        exercise={{
          ...exercise,
          previousWeight: exercise.previousWeight || "",
        }}
      />
    </div>
  );
};
