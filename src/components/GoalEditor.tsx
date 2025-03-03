import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";

interface Goal {
  id: string;
  description: string;
  targetDate: string;
}

interface GoalEditorProps {
  goal: Goal;
  exercises: string[];
  onChange: (goalId: string, field: keyof Goal, value: string) => void;
  otherGoalExercises?: string[];
  onValidationChange: (goalId: string, isValid: boolean) => void;
}

export const GoalEditor = ({
  goal,
  exercises,
  onChange,
  otherGoalExercises = [],
}: GoalEditorProps) => {
  const availableExercises = exercises.filter(
    (exercise) =>
      !otherGoalExercises.includes(exercise) || exercise === goal.description
  );

  return (
    <div key={goal.id} className="grid grid-cols-2 gap-4">
      <Select
        value={goal.description}
        onValueChange={(value) => onChange(goal.id, "description", value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select exercise" />
        </SelectTrigger>
        <SelectContent>
          {availableExercises.map((exercise) => (
            <SelectItem key={exercise} value={exercise}>
              {exercise}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {!goal.description && (
        <AlertCircle className="h-4 w-4 text-red-500 absolute right-10 top-3" />
      )}
      <Input
        type="number"
        placeholder="Target weight (kgs)"
        value={goal.targetDate}
        onChange={(e) => onChange(goal.id, "targetDate", e.target.value)}
      />
      {!goal.targetDate && (
        <AlertCircle className="h-4 w-4 text-red-500 absolute right-2 top-3" />
      )}
    </div>
  );
};
