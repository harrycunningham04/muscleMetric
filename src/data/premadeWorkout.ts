import { exercises } from "./Exercise";

export type MuscleGroup =
  | "Chest"
  | "Back"
  | "Shoulders"
  | "Biceps"
  | "Triceps"
  | "Core"
  | "Glutes"
  | "Hamstrings"
  | "Quads"
  | "Calves";

export const MuscleGroupArray: MuscleGroup[] = [
  "Chest",
  "Back",
  "Shoulders",
  "Biceps",
  "Triceps",
  "Core",
  "Glutes",
  "Hamstrings",
  "Quads",
  "Calves",
];

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  notes?: string;
  type: string;
  bodyPart: string;
  equipment?: string;
  setupDescription?: string;
  repDescription?: string;
  user: string;
}

export interface WorkoutDay {
  name: string;
  type: string;
  exercises: Exercise[];
}

export interface PreMadeWorkout {
  id: string;
  title: string;
  description: string;
  targetMuscles: string[];
  daysPerWeek: number;
  workoutDays: WorkoutDay[];
  recommendedWeeks: number;
  goals: { description: string; targetDate: string }[];
}

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";
export type Equipment = "Bodyweight" | "Resistance Bands" | "Dumbbells" | "gym";

export interface WorkoutPlanOptions {
  selectedMuscles: string[];
  daysPerWeek: number;
  gender: "male" | "female";
  experienceLevel: ExperienceLevel;
  preferredDuration: "30" | "45" | "60" | "90";
}

const prioritizeMusclesForGender = (
  selectedMuscles: string[],
  gender: "male" | "female"
): string[] => {
  const femalePriority = ["Hamstrings", "Glutes", "Quads", "Core"];
  const malePriority = ["Chest", "Biceps", "Triceps"];

  const priorityMuscles = gender === "female" ? femalePriority : malePriority;

  return selectedMuscles
    .filter((muscle) => priorityMuscles.includes(muscle))
    .concat(
      selectedMuscles.filter((muscle) => !priorityMuscles.includes(muscle))
    );
};

const getExerciseCountsForDuration = (
  preferredDuration: "30" | "45" | "60" | "90"
) => {
  switch (preferredDuration) {
    case "30":
      return { compound: 2, isolation: 2 };
    case "45":
      return { compound: 3, isolation: 2 };
    case "60":
      return { compound: 4, isolation: 3 };
    case "90":
      return { compound: 4, isolation: 5 };
    default:
      return { compound: 3, isolation: 3 }; 
  }
};

const getExercisesForDay = (
  muscleGroups: string[],
  experienceLevel: ExperienceLevel,
  preferredDuration: "30" | "45" | "60" | "90",
  Equipment: "Bodyweight" | "Resistance Bands" | "Dumbbells" | "gym"
): Exercise[] => {
  const { compound, isolation } =
    getExerciseCountsForDuration(preferredDuration);

  const lowerCaseMuscleGroups = muscleGroups.map((muscle) =>
    muscle.toLowerCase()
  );

  const compoundExercises = exercises
    .filter((exercise) => lowerCaseMuscleGroups.includes(exercise.bodyPart))
    .filter((exercise) => exercise.type === "compound")
    .filter(
      (exercise) => Equipment === "gym" || exercise.equipment === Equipment
    )
    .filter((exercise) =>
      experienceLevel === "beginner"
        ? exercise.user === "beginner"
        : experienceLevel === "intermediate"
        ? ["beginner", "intermediate"].includes(exercise.user)
        : true
    );

  const isolationExercises = exercises
    .filter((exercise) => lowerCaseMuscleGroups.includes(exercise.bodyPart))
    .filter((exercise) => exercise.type !== "compound")
    .filter((exercise) =>
      experienceLevel === "beginner"
        ? exercise.user === "beginner"
        : experienceLevel === "intermediate"
        ? ["beginner", "intermediate"].includes(exercise.user)
        : true
    );

  console.log("🏋️ Compound Exercises:", compoundExercises.length);
  console.log("💪 Isolation Exercises:", isolationExercises.length);

  const selectedExercises: Exercise[] = [];

  const selectRandomExercises = (
    source: typeof exercises,
    count: number,
    isCompound: boolean
  ) => {
    let added = 0;
    console.log(
      `🎲 Selecting ${count} ${isCompound ? "compound" : "isolation"} exercises`
    );

    if (source.length === 0) {
      console.warn(
        `🚫 No available ${isCompound ? "compound" : "isolation"} exercises!`
      );
      return;
    }

    console.log(`🔢 Count to select: ${count}, Current added: ${added}`);

    while (added < count && source.length > 0) {
      console.log("🚦 Entering selection loop");
      const randomIndex = Math.floor(Math.random() * source.length);
      console.log(`🎲 Random Index: ${randomIndex}`);

      const exercise = source.splice(randomIndex, 1)[0];
      if (!exercise) {
        console.warn(
          "❌ Failed to select an exercise. Source array may be empty."
        );
        break;
      }

      selectedExercises.push({
        id: exercise.id,
        name: exercise.name,
        sets: isCompound
          ? Math.floor(Math.random() * 2) + 3
          : Math.floor(Math.random() * 2) + 2,
        reps: isCompound
          ? Math.floor(Math.random() * 2) * 2 + 6
          : Math.floor(Math.random() * 4) * 2 + 8,
        notes: exercise.setupDescription || exercise.repDescription || "",
        type: exercise.type,
        bodyPart: exercise.bodyPart,
        user: exercise.user,
      });
      added++;
    }
    console.log(
      `✅ Selected ${added} ${isCompound ? "compound" : "isolation"} exercises`
    );
  };

  selectRandomExercises(compoundExercises, compound, true);
  selectRandomExercises(isolationExercises, isolation, false);

  console.log("🎯 Final Selected Exercises for Day:", selectedExercises);

  return selectedExercises;
};

const generateGoals = (
  selectedMuscles: string[],
  exercises: Exercise[]
): { description: string; exercise: Exercise }[] => {
  return selectedMuscles.flatMap((muscle) => {
    const relevantExercises = exercises.filter((exercise) =>
      exercise.bodyPart.toLowerCase().includes(muscle.toLowerCase())
    );

    const compoundExercises = relevantExercises.filter(
      (exercise) => exercise.type === "compound"
    );

    if (compoundExercises.length === 0) return [];

    const selectedExercise =
      compoundExercises[Math.floor(Math.random() * compoundExercises.length)];

    return {
      description: `Increase strength in ${muscle} by improving performance in ${selectedExercise.name}`,
      exercise: selectedExercise,
    };
  });
};

export { prioritizeMusclesForGender, getExercisesForDay, generateGoals };
