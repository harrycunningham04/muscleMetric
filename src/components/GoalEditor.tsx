
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Goal {
  id: string;
  description: string;
  targetDate: string;
}

interface GoalEditorProps {
  goal: Goal;
  exercises: string[];
  onChange: (goalId: string, field: keyof Goal, value: string) => void;
  otherGoalExercises?: string[]; // New prop to track exercises selected by other goals
}

export const GoalEditor = ({ goal, exercises, onChange, otherGoalExercises = [] }: GoalEditorProps) => {
  // Filter out exercises that are already selected by other goals
  const availableExercises = exercises.filter(exercise => 
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
      <Input
        type="number"
        placeholder="Target weight (kgs)"
        value={goal.targetDate}
        onChange={(e) => onChange(goal.id, "targetDate", e.target.value)}
      />
    </div>
  );
};