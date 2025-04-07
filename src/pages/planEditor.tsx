import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save, Plus, Trash, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WorkoutDayEditor } from "@/components/WorkoutDayEditor";
import { GoalEditor } from "@/components/GoalEditor";

interface WorkoutDay {
  id: string;
  name: string;
  exercises: Array<{
    id: string;
    name: string;
    sets: number;
    reps: number;
    startingWeight?: number;
  }>;
}

interface Goal {
  description: string;
  exercise: {
    id: string;
    name: string;
  };
  targetWeight: number;
}

interface ValidationState {
  [key: string]: boolean;
}

const PlanEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const location = useLocation();

  const isNew = !id;
  const preMadeWorkout = location.state?.preMadeWorkout || null;

  const [title, setTitle] = useState("8-Week Strength Program");
  const [duration, setDuration] = useState("8");
  const [isDefault, setIsDefault] = useState(false);
  const [workoutDays, setWorkoutDays] = useState<WorkoutDay[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);

  const [workoutValidation, setWorkoutValidation] = useState<ValidationState>(
    {}
  );
  const [goalValidation, setGoalValidation] = useState<ValidationState>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (preMadeWorkout) {
      setTitle(preMadeWorkout.title || "Pre-Made Workout Plan");
      setDuration(preMadeWorkout.duration?.toString() || "8");
      setWorkoutDays(preMadeWorkout.workoutDays || []);
      setGoals(preMadeWorkout.goals || []);
    }
  }, [preMadeWorkout]);

  const handleDayValidationChange = (dayId: string, isValid: boolean) => {
    setWorkoutValidation((prev) => ({
      ...prev,
      [dayId]: isValid,
    }));
  };

  const handleUpdateWorkoutDay = (
    dayId: string,
    exercises: WorkoutDay["exercises"]
  ) => {
    setWorkoutDays(
      workoutDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              exercises: exercises.map((ex) => ({
                ...ex,
                startingWeight:
                  ex.startingWeight && ex.startingWeight < 0
                    ? 0
                    : ex.startingWeight,
              })),
            }
          : day
      )
    );
  };

  const roundToNearest = (num: number) => Math.round(num * 4) / 4;

  const handleUpdateGoal = (
    goalId: string,
    field: keyof Goal,
    value: string | number
  ) => {
    // Early update for non-weight fields
    if (field !== "targetWeight") {
      setGoals((prevGoals) =>
        prevGoals.map((goal) =>
          goal.exercise.id === goalId ? { ...goal, [field]: value } : goal
        )
      );
      return;
    }

    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.exercise.id !== goalId) return goal;

        let updatedValue =
          typeof value === "number" ? value : parseFloat(value as string);

        if (typeof updatedValue === "number") {
          const exercise = workoutDays
            .flatMap((day) => day.exercises)
            .find((ex) => ex.name === goal.exercise.name);

          if (exercise?.startingWeight) {
            const startingWeight = exercise.startingWeight;
            const weeks = Math.max(1, parseInt(duration, 10) || 1);

            const minWeight = roundToNearest(startingWeight * 1.02 ** weeks);
            const maxWeight = roundToNearest(startingWeight * 1.1 ** weeks);
            const roundedValue = roundToNearest(updatedValue);

            if (roundedValue < minWeight) {
              toast({
                title: "Goal Weight Too Low",
                description: `The target weight for ${goal.exercise.name} should be at least ${minWeight}kg over ${weeks} weeks.`,
                variant: "destructive",
              });
              updatedValue = minWeight;
            } else if (roundedValue > maxWeight) {
              toast({
                title: "Goal Weight Too High",
                description: `The target weight for ${goal.exercise.name} should not exceed ${maxWeight}kg over ${weeks} weeks.`,
                variant: "destructive",
              });
              updatedValue = maxWeight;
            } else {
              updatedValue = roundedValue;
            }
          }
        }

        return { ...goal, [field]: updatedValue };
      })
    );
  };

  const handleAddWorkoutDay = () => {
    if (workoutDays.length < 7) {
      const newDay: WorkoutDay = {
        id: (workoutDays.length + 1).toString(),
        name: `Day ${workoutDays.length + 1}`,
        exercises: [],
      };
      setWorkoutDays([...workoutDays, newDay]);
      setWorkoutValidation((prev) => ({
        ...prev,
        [newDay.id]: true,
      }));
    }
  };

  const handleRemoveWorkoutDay = () => {
    if (
      workoutDays.length > 0 &&
      confirm("Are you sure you want to remove the last day?")
    ) {
      const updatedDays = [...workoutDays];
      updatedDays.pop();
      setWorkoutDays(updatedDays);
    }
  };

  const handleSave = () => {
    if (!isFormValid) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields before saving.",
        variant: "destructive",
      });
      return;
    }

    // Section 1 - Plan Details
    const planData = {
      title,
      duration,
      DaysPerWeek: workoutDays.length, // Assuming the number of workout days represents days per week
      isDefault,
      userId: 2, // Hardcoded for now as requested
    };
    console.log("Section 1 - Plan Details:", planData);

    // Section 2 - Workout Names
    const workoutNames = workoutDays.map((day) => day.name);
    console.log("Section 2 - Workout Names:", workoutNames);

    // Section 3 - Exercises in each workout (id, sets, reps, weight)
    const exercises = workoutDays.flatMap((day) =>
      day.exercises.map((exercise) => ({
        workoutId: day.id,
        exerciseId: exercise.id,
        sets: exercise.sets,
        reps: exercise.reps,
        startingWeight: exercise.startingWeight,
      }))
    );
    console.log("Section 3 - Exercises:", exercises);

    // Section 4 - Goals (exercise ids and weights)
    const goalsData = goals.map((goal) => ({
      exerciseId: goal.exercise.id, // This assumes goal.id is the exerciseId or modify as per your structure
      weight: goal.targetWeight, // Assuming targetWeight is the weight for the goal
    }));
    console.log("Section 4 - Goals:", goalsData);

    // Section 5 - Exercise Weights for each exercise
    const exerciseWeights = exercises.map((exercise) => ({
      exerciseId: exercise.exerciseId,
      weight: exercise.startingWeight,
    }));
    console.log("Section 5 - Exercise Weights:", exerciseWeights);

    // Show success toast
    toast({
      title: isNew
        ? "Plan created successfully!"
        : "Plan updated successfully!",
      description: `Your workout plan "${title}" has been ${
        isNew ? "created" : "updated"
      }.`,
    });

    // If set as default, show another toast
    if (isDefault) {
      toast({
        title: "Default Plan Set",
        description: "This plan has been set as your default workout plan.",
      });
    }

    // Navigate to plans page
    navigate("/plans");
  };

  const ensureThreeGoals = () => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];

      while (updatedGoals.length < 3) {
        updatedGoals.push({
          description: "", // Empty string as a placeholder
          exercise: {
            id: `exercise-${updatedGoals.length + 1}`, // Unique ID for exercise
            name: "", // Empty name as a placeholder
          },
          targetWeight: 0, // Default target weight
        });
      }

      return updatedGoals.slice(0, 3); // Ensure exactly 3 goals
    });
  };

  useEffect(() => {
    // Verify all workout days have valid exercises
    const areWorkoutDaysValid =
      Object.keys(workoutValidation).length > 0 &&
      Object.values(workoutValidation).every((value) => value === true);

    // Verify all goals have valid data
    const areGoalsValid =
      Object.keys(goalValidation).length === goals.length &&
      Object.values(goalValidation).every((value) => value === true);

    // At least one exercise required
    const hasExercises = workoutDays.some((day) => day.exercises.length > 0);

    // All validation conditions must be met
    const isValid = areWorkoutDaysValid && areGoalsValid && hasExercises;

    setIsFormValid(isValid);
  }, [workoutValidation, goalValidation, workoutDays, goals.length]);

  useEffect(() => {
    ensureThreeGoals();
  }, []); // Runs only once on mount

  useEffect(() => {
    const initialWorkoutValidation: ValidationState = {};
    workoutDays.forEach((day) => {
      initialWorkoutValidation[day.id] = day.exercises.every(
        (ex) =>
          ex.startingWeight !== undefined &&
          ex.startingWeight !== null &&
          ex.startingWeight.toString() !== ""
      );
    });
    setWorkoutValidation(initialWorkoutValidation);

    const initialGoalValidation: ValidationState = {};
    goals.forEach((goal) => {
      initialGoalValidation[goal.exercise.id] =
        goal.exercise.name !== "" && goal.targetWeight > 0;
    });
    setGoalValidation(initialGoalValidation);
  }, [workoutDays, goals]);

  const getPlanExercises = () => {
    const exerciseSet = new Set<string>();

    workoutDays.forEach((day) => {
      day.exercises.forEach((exercise) => {
        exerciseSet.add(exercise.name);
      });
    });

    return Array.from(exerciseSet);
  };

  const hasExercises = workoutDays.some((day) => day.exercises.length > 0);

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/plans")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Plans
      </Button>

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-primary">
          {isNew ? "Create New Workout Plan" : "Edit Workout Plan"}
        </h1>
        <div className="flex items-center space-x-2">
          <Switch
            id="default-plan"
            checked={isDefault}
            onCheckedChange={setIsDefault}
          />
          <Label htmlFor="default-plan">Set as Default Plan</Label>
        </div>
      </div>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Basic Information
          </h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Plan Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-white"
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4">4 weeks</SelectItem>
                  <SelectItem value="8">8 weeks</SelectItem>
                  <SelectItem value="12">12 weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-primary">Workout Days</h2>
            {workoutDays.length < 7 && (
              <Button
                variant="outline"
                onClick={handleAddWorkoutDay}
                className="ml-auto"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Workout Day
              </Button>
            )}
          </div>
          {!hasExercises && (
            <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-center gap-2">
              <AlertCircle className="text-amber-500 h-5 w-5" />
              <p className="text-amber-700">
                Add at least one exercise to your workout plan
              </p>
            </div>
          )}
          <div className="space-y-6">
            {workoutDays.map((day, index) => (
              <WorkoutDayEditor
                key={`workout-day-${day.id}-${index}`}
                day={day}
                onUpdate={handleUpdateWorkoutDay}
                onValidationChange={handleDayValidationChange}
              />
            ))}
          </div>
          {workoutDays.length > 0 && (
            <div className="border-t pt-6 mt-6 flex justify-end">
              <Button variant="destructive" onClick={handleRemoveWorkoutDay}>
                <Trash className="w-4 h-4 mr-2" />
                Remove Last Day
              </Button>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-primary pb-4">Goals</h2>
          <div className="space-y-4">
            {goals.map((goal) => (
              <GoalEditor
                key={goal.exercise.id}
                goal={goal}
                exercises={getPlanExercises()}
                onChange={handleUpdateGoal} // Ensure handleUpdateGoal is correctly typed
              />
            ))}
          </div>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => navigate("/plans")}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className={`${
              isFormValid ? "bg-primary hover:bg-primary-hover" : "bg-gray-400"
            } text-primary-foreground`}
            disabled={!isFormValid}
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlanEditor;
