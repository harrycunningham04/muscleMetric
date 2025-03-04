import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";
import ExerciseAutocomplete from "./ExerciseAutoComplete";

interface OneRepMaxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const calculateOneRepMax = (weight: number, reps: number) => {
  return {
    epley: weight * (1 + reps / 30),
    brzycki: weight / (1.0278 - 0.0278 * reps),
    mcglothin: (100 * weight) / (101.3 - 2.67123 * reps),
    oconner: weight * (1 + 0.025 * reps),
    lombardi: weight * Math.pow(reps, 0.1),
  };
};

const calculateAverage = (values: Record<string, number>) => {
  const sum = Object.values(values).reduce((acc, val) => acc + val, 0);
  return sum / Object.values(values).length;
};

export const OneRepModal = ({ isOpen, onClose }: OneRepMaxModalProps) => {
  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const { weightUnit } = useSettings();

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  useEffect(() => {
    setResults(null);
  }, [selectedExercise, weight, reps]);

  const resetForm = () => {
    setSelectedExercise("");
    setWeight("");
    setReps("");
    setResults(null);
  };

  const handleCalculate = () => {
    if (!selectedExercise.trim()) {
      alert("Please select an exercise before calculating 1RM.");
      return;
    }

    const weightInput = parseFloat(weight);
    const repsInput = parseInt(reps);

    if (isNaN(weightInput) || isNaN(repsInput) || repsInput < 1 || weightInput < 1) {
      setResults(null);
      return;
    }

    const calculations = calculateOneRepMax(weightInput, repsInput);
    setResults(calculations);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            1RM Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="exercise">Select Exercise</Label>
            <ExerciseAutocomplete
              onSelect={(exercise) => {
                setSelectedExercise(exercise);
                setResults(null); // Reset results when exercise is changed
              }}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="weight">Weight ({weightUnit})</Label>
            <Input
              id="weight"
              type="number"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="reps">Repetitions</Label>
            <Input
              id="reps"
              type="number"
              min="1"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="Enter reps"
            />
          </div>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md disabled:bg-gray-400"
            onClick={handleCalculate}
            disabled={!selectedExercise}
          >
            Calculate 1RM
          </button>

          {results && (
            <div className="mt-4 space-y-3 p-4 rounded-lg bg-muted">
              <div className="pb-3 mb-3 border-b">
                <h3 className="font-semibold text-sm text-muted-foreground">
                  Average 1RM Estimate:
                </h3>
                <p className="text-xl font-bold">
                  {Math.round(calculateAverage(results))} {weightUnit}
                </p>
              </div>
              <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                Individual Formulas:
              </h3>
              {Object.entries(results).map(([formula, value]) => (
                <div
                  key={formula}
                  className="flex justify-between items-center"
                >
                  <span className="capitalize text-sm">{formula}:</span>
                  <span className="font-mono">
                    {Math.round(value)} {weightUnit}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
