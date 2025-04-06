import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "@/context/SettingsContext";

interface Goal {
  id: string;
  exerciseName: string;
  targetWeight: number;
}

interface GoalEditorProps {
  goal: Goal;
  onChange: (goalId: string, field: keyof Goal, value: string | number) => void;
  exercises: string[];
}

export const GoalEditor = ({ goal, onChange, exercises }: GoalEditorProps) => {
  const { weightUnit } = useSettings();

  return (
    <div className="flex space-x-4 border p-3 rounded-lg bg-gray-50">
      <Select
        value={goal.exerciseName}
        onValueChange={(value) => onChange(goal.id, "exerciseName", value)}
        disabled={exercises.length === 0}
      >
        <SelectTrigger aria-label="Select an exercise">
          <SelectValue placeholder="Select exercise" />
        </SelectTrigger>
        <SelectContent>
          {exercises.map((exercise) => (
            <SelectItem key={exercise} value={exercise}>
              {exercise}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Input
        type="number"
        value={
          goal.targetWeight !== undefined && goal.targetWeight !== null
            ? goal.targetWeight
            : ""
        }
        onChange={(e) =>
          onChange(
            goal.id,
            "targetWeight",
            e.target.value === "" ? "" : Math.max(0, Number(e.target.value))
          )
        }
        placeholder={`Target weight (${weightUnit})`}
        aria-label={`Target weight in ${weightUnit}`}
        className="bg-white"
        min={0}
      />
    </div>
  );
};
