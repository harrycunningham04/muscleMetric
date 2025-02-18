import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const exercises = [
  "Bench Press",
  "Squat",
  "Deadlift",
  "Overhead Press",
  "Barbell Row",
  "Pull-ups",
  "Push-ups",
  "Dips",
  "Lunges",
  "Leg Press"
];

interface ExerciseSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export const ExerciseSelector = ({ value, onChange }: ExerciseSelectorProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
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
  );
};

export const getExercisesList = () => exercises;