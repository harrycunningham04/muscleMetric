import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Minus } from "lucide-react";
import { ExerciseDetailsModal } from "./ExerciseDetailsModal";

interface ExerciseCardProps {
  exercise: {
    id: string;
    name: string;
    sets: number;
    reps: number;
    weights: number[];
    actualReps: number[];
    previousWeight?: string;
    form?: string;
    equipment?: string[];
    alternatives?: string[];
  };
  isActive: boolean;
  onComplete: () => void;
  onStart?: () => void;
  isStarted?: boolean;
  workoutStarted?: boolean;
}

export const ExerciseCard = ({ 
  exercise, 
  isActive, 
  onComplete, 
  onStart, 
  isStarted,
  workoutStarted 
}: ExerciseCardProps) => {
  const [sets, setSets] = useState(exercise.weights.map((weight, index) => ({
    weight: weight,
    reps: exercise.actualReps[index] || exercise.reps,
  })));
  const [currentSet, setCurrentSet] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (currentSet > 0) {
      const previousSet = sets[currentSet - 1];
      setSets(prevSets => prevSets.map((set, index) => 
        index === currentSet ? {
          weight: previousSet.weight,
          reps: previousSet.reps
        } : set
      ));
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

  const updateSet = (index: number, field: 'weight' | 'reps', value: number) => {
    setSets(sets.map((set, i) => 
      i === index ? { ...set, [field]: value } : set
    ));
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

  const handleCompleteExercise = () => {
    if (areAllSetsComplete()) {
      setIsCompleted(true);
      onComplete();
    }
  };

  // Collapsed view for completed or not started exercises
  if (!isActive || isCompleted) {
    return (
      <div className="bg-modern-darkgray/10 rounded-lg p-4 mb-4 transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">{exercise.name}</h3>
            <p className="text-modern-gray">
              {exercise.sets} sets × {exercise.reps} reps
              {exercise.previousWeight && ` • Last: ${exercise.previousWeight}`}
            </p>
          </div>
          {workoutStarted && !isStarted && !isCompleted && (
            <Button
              onClick={onStart}
              variant="outline"
              className="border-2 border-modern-blue hover:bg-modern-blue/10 text-black transition-all duration-200 hover:scale-105"
            >
              Start Exercise
            </Button>
          )}
        </div>
        <ExerciseDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          exercise={{
            name: exercise.name,
            form: exercise.form || "No form information available",
            equipment: exercise.equipment || [],
            alternatives: exercise.alternatives || [],
          }}
        />
      </div>
    );
  }

  // Active exercise view
  return (
    <div className="bg-modern-darkgray rounded-lg p-6 mb-4">
      <div className="text-center mb-6">
        <h2 className="text-white text-xl font-bold">{exercise.name}</h2>
      </div>

      <div className="mb-6">
        <div className="flex justify-center gap-2 overflow-x-auto pb-2">
          {sets.map((_, index) => (
            <div
              key={index}
              className={`min-w-[80px] px-4 py-2 rounded ${
                currentSet === index 
                  ? "bg-modern-blue text-black" 
                  : "bg-gray-600 text-white"
              }`}
            >
              Set {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="number"
            value={sets[currentSet]?.reps || ''}
            onChange={(e) => updateSet(currentSet, 'reps', Number(e.target.value))}
            className="bg-[#D3E4FD] text-black border-none"
            placeholder={`Previous: ${exercise.actualReps[currentSet] || exercise.reps} reps`}
          />
          <Input
            type="number"
            value={sets[currentSet]?.weight || ''}
            onChange={(e) => updateSet(currentSet, 'weight', Number(e.target.value))}
            className="bg-[#D3E4FD] text-black border-none"
            placeholder={`Previous: ${exercise.weights[currentSet] || 0} kg`}
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            onClick={addSet}
            className="text-black border-white/20"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Set
          </Button>
          <Button 
            variant="outline" 
            onClick={removeSet}
            disabled={sets.length <= 1}
            className="text-black border-white/20"
          >
            <Minus className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
        <Button 
          onClick={currentSet < sets.length - 1 ? handleCompleteSet : handleCompleteExercise}
          className="bg-modern-blue hover:bg-modern-blue/90 text-black"
        >
          {currentSet < sets.length - 1 ? 'Complete Set' : 'Complete Exercise'}
        </Button>
      </div>

      <ExerciseDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        exercise={{
          name: exercise.name,
          form: exercise.form || "No form information available",
          equipment: exercise.equipment || [],
          alternatives: exercise.alternatives || [],
        }}
      />
    </div>
  );
};