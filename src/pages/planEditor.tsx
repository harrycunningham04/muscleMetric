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
  id: string;
  exerciseName: string;
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
    exercises: WorkoutDay["exercises"],
    workoutName?: string
  ) => {
    setWorkoutDays(
      workoutDays.map((day) =>
        day.id === dayId
          ? {
              ...day,
              name: workoutName ?? day.name, // fallback if undefined
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

  const handleUpdateGoal = (
    goalId: string,
    field: keyof Goal,
    value: string | number
  ) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) => {
        if (goal.id === goalId) {
          let updatedValue = value;

          if (field === "targetWeight" && typeof value === "number") {
            const exercise = workoutDays
              .flatMap((day) => day.exercises)
              .find((ex) => ex.name === goal.exerciseName);

            if (exercise && exercise.startingWeight) {
              const startingWeight = exercise.startingWeight;
              const weeks = parseInt(duration, 10);

              const minWeight = startingWeight * 1.02 ** weeks; // 2% increase per week
              const maxWeight = startingWeight * 1.1 ** weeks; // 10% increase per week

              // Round to nearest 0.25
              const roundToNearest = (num: number) => Math.round(num * 4) / 4;
              const roundedMinWeight = roundToNearest(minWeight);
              const roundedMaxWeight = roundToNearest(maxWeight);
              const roundedValue = roundToNearest(value);

              if (roundedValue < roundedMinWeight) {
                toast({
                  title: "Goal Weight Too Low",
                  description: `The target weight for ${goal.exerciseName} should be at least ${roundedMinWeight}kg over ${weeks} weeks.`,
                  variant: "destructive",
                });
                updatedValue = roundedMinWeight;
              } else if (roundedValue > roundedMaxWeight) {
                toast({
                  title: "Goal Weight Too High",
                  description: `The target weight for ${goal.exerciseName} should not exceed ${roundedMaxWeight}kg over ${weeks} weeks.`,
                  variant: "destructive",
                });
                updatedValue = roundedMaxWeight;
              } else {
                updatedValue = roundedValue;
              }
            }
          }

          return { ...goal, [field]: updatedValue };
        }
        return goal;
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

  const handleSave = async () => {
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
      DaysPerWeek: workoutDays.length.toString(),
      isDefault: isDefault.toString(),
      userId: "2",
    };
    console.log("Section 1 - Plan Details:", planData);

    try {
      const planResponse = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/plans/write/section1.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(planData).toString(),
        }
      );
      const planDataResponse = await planResponse.json();

      if (!planDataResponse.success) {
        toast({
          title: "Section 1 Error",
          description:
            planDataResponse.error ||
            "An error occurred while saving the plan.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Plan saved successfully!",
        description: `Your workout plan "${title}" has been saved.`,
      });

      // Section 2 - Workout Names
      const workoutNames = workoutDays.map((day) => day.name);
      const workoutData = {
        planId: planDataResponse.planId,
        workoutNames: JSON.stringify(workoutNames),
      };

      try {
        const workoutResponse = await fetch(
          "https://hc920.brighton.domains/muscleMetric/php/plans/write/section2.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(workoutData).toString(),
          }
        );
        const workoutDataResponse = await workoutResponse.json();

        if (!workoutDataResponse.success) {
          toast({
            title: "Section 2 Error",
            description:
              workoutDataResponse.error ||
              "An error occurred while saving the workouts.",
            variant: "destructive",
          });
          return;
        }

        if (isDefault) {
          toast({
            title: "Default Plan Set",
            description: "This plan has been set as your default workout plan.",
          });
        }

        // Section 3 - Exercises
        const exercises = workoutDays.flatMap((day, index) =>
          day.exercises.map((exercise) => ({
            workoutId: workoutDataResponse.workoutIds[index],
            exerciseId: exercise.id,
            sets: exercise.sets,
            reps: exercise.reps,
            startingWeight: exercise.startingWeight,
          }))
        );

        try {
          const exercisesResponse = await fetch(
            "https://hc920.brighton.domains/muscleMetric/php/plans/write/section3.php",
            {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: new URLSearchParams({
                workoutExercises: JSON.stringify(exercises),
              }).toString(),
            }
          );

          const exercisesDataResponse = await exercisesResponse.json();

          if (!exercisesDataResponse.success) {
            toast({
              title: "Section 3 Error",
              description:
                exercisesDataResponse.error ||
                "An error occurred while saving the exercises.",
              variant: "destructive",
            });
            return;
          }

          // Section 4 - Goals
          const goalsData = goals.map((goal) => ({
            exerciseName: goal.exerciseName,
            weight: goal.targetWeight,
          }));

          try {
            const goalsResponse = await fetch(
              "https://hc920.brighton.domains/muscleMetric/php/plans/write/section4.php",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                  goals: JSON.stringify(goalsData),
                  planId: planDataResponse.planId,
                }).toString(),
              }
            );

            const goalsDataResponse = await goalsResponse.json();

            if (!goalsDataResponse.success) {
              toast({
                title: "Section 4 Error",
                description:
                  goalsDataResponse.error ||
                  "An error occurred while saving the goals.",
                variant: "destructive",
              });
              return;
            }

            // Section 5 - Starting Weights
            const allExerciseWeights = workoutDays
              .flatMap((day) => day.exercises)
              .reduce((uniqueExercises, exercise) => {
                if (!uniqueExercises.has(exercise.id)) {
                  uniqueExercises.set(exercise.id, {
                    exerciseId: exercise.id,
                    weight: exercise.startingWeight,
                  });
                }
                return uniqueExercises;
              }, new Map());

            const weightsData = {
              planId: planDataResponse.planId,
              exerciseWeights: JSON.stringify(
                Array.from(allExerciseWeights.values())
              ),
            };

            try {
              console.log("Sending to Section 5:", {
                planId: planDataResponse.planId,
                exerciseWeights: Array.from(allExerciseWeights.values()),
              });

              const weightsResponse = await fetch(
                "https://hc920.brighton.domains/muscleMetric/php/plans/write/section5.php",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: new URLSearchParams(weightsData).toString(),
                }
              );

              const weightsResponseData = await weightsResponse.json();

              if (!weightsResponseData.success) {
                toast({
                  title: "Section 5 Error",
                  description:
                    weightsResponseData.error ||
                    "An error occurred while saving the starting weights.",
                  variant: "destructive",
                });
                return;
              }

              // Navigate to plans page
              navigate("/plans");
            } catch (error) {
              toast({
                title: "Section 5 Network Error",
                description:
                  "There was a network issue while saving the starting weights.",
                variant: "destructive",
              });
            }
          } catch (error) {
            toast({
              title: "Section 4 Network Error",
              description:
                "There was a network issue while saving the goals section.",
              variant: "destructive",
            });
          }
        } catch (error) {
          toast({
            title: "Section 3 Network Error",
            description:
              "There was a network issue while saving the exercises section.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Section 2 Network Error",
          description:
            "There was a network issue while saving the workout names.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Section 1 Network Error",
        description: "There was a network issue while saving the plan.",
        variant: "destructive",
      });
    }
  };

  const ensureThreeGoals = () => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];

      while (updatedGoals.length < 3) {
        updatedGoals.push({
          id: `goal-${updatedGoals.length + 1}`,
          exerciseName: "",
          targetWeight: 0,
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
      initialGoalValidation[goal.id] =
        goal.exerciseName !== "" && goal.targetWeight > 0;
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
                key={goal.id}
                goal={goal}
                exercises={getPlanExercises()}
                onChange={handleUpdateGoal}
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
