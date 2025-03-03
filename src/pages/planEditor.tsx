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
import { ArrowLeft, Save, Plus, Trash } from "lucide-react";
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
  }>;
}

interface Goal {
  id: string;
  description: string;
  targetDate: string;
  exercise: { name: string };
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

  useEffect(() => {
    if (preMadeWorkout) {
      setTitle(preMadeWorkout.title || "Pre-Made Workout Plan");
      setDuration(preMadeWorkout.duration?.toString() || "8");
      setWorkoutDays(preMadeWorkout.workoutDays || []);
      setGoals(preMadeWorkout.goals || []);
    }
  }, [preMadeWorkout]);

  const handleUpdateWorkoutDay = (
    dayId: string,
    exercises: WorkoutDay["exercises"]
  ) => {
    setWorkoutDays(
      workoutDays.map((day) => (day.id === dayId ? { ...day, exercises } : day))
    );
  };

  const handleUpdateGoal = (goalId: string, field: keyof Goal, value: any) => {
    setGoals(
      goals.map((goal) =>
        goal.id === goalId ? { ...goal, [field]: value } : goal
      )
    );
  };

  const handleAddWorkoutDay = () => {
    if (workoutDays.length < 7) {
      const newDayNumber = workoutDays.length + 1;
      const newDay: WorkoutDay = {
        id: newDayNumber.toString(),
        name: `Day ${newDayNumber}`,
        exercises: [],
      };
      setWorkoutDays([...workoutDays, newDay]);
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
    if (!title.trim()) {
      toast({ title: "Error", description: "Plan title is required." });
      return;
    }
    if (!workoutDays.length) {
      toast({ title: "Error", description: "Add at least one workout day." });
      return;
    }
    toast({
      title: isNew
        ? "Plan created successfully!"
        : "Plan updated successfully!",
      description: `Your workout plan "${title}" has been ${
        isNew ? "created" : "updated"
      }.`,
    });
    if (isDefault) {
      toast({
        title: "Default Plan Set",
        description: "This plan has been set as your default workout plan.",
      });
    }
    navigate("/plans");
  };

  const ensureThreeGoals = () => {
    const currentGoalsCount = goals.length;

    if (currentGoalsCount < 3) {
      const newGoals = [...goals];
      for (let i = currentGoalsCount; i < 3; i++) {
        newGoals.push({ 
          id: `goal-${i + 1}`, 
          description: "", 
          targetDate: "", 
          exercise: {name: ""}
        });
      }
      setGoals(newGoals);
    } else if (currentGoalsCount > 3) {
      setGoals(goals.slice(0, 3));
    }
  };

  useEffect(() => {
    ensureThreeGoals();
  }, []);

  const getPlanExercises = () => {
    const exerciseSet = new Set<string>();

    workoutDays.forEach((day) => {
      day.exercises.forEach((exercise) => {
        exerciseSet.add(exercise.name);
      });
    });

    return Array.from(exerciseSet);
  };

  const getOtherGoalExercises = (currentGoalId: string) => {
    return goals
      .filter((g) => g.id !== currentGoalId && g.description)
      .map((g) => g.description);
  };

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
          <div className="space-y-6">
            {workoutDays.map((day, index) => (
              <WorkoutDayEditor
                key={`workout-day-${day.id}-${index}`}
                day={day}
                onUpdate={handleUpdateWorkoutDay}
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
            {goals.map((goal, index) => (
              <GoalEditor
                key={`goal-${goal}-${index}`}
                goal={goal}
                exercises={getPlanExercises()}
                onChange={handleUpdateGoal}
                otherGoalExercises={getOtherGoalExercises(goal.id)}
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
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
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
