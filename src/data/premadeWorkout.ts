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

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  notes?: string;
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

export const muscleGroups = [
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
] as const;

const compoundExercises = {
  Chest: [
    "Bench Press",
    "Incline Dumbbell Press",
    "Decline Bench Press",
    "Dips",
    "Chest Press Machine",
    "Barbell Push-Ups",
  ],
  Back: [
    "Deadlifts",
    "Pull-Ups",
    "Bent-over Rows",
    "Lat Pulldown",
    "T-Bar Rows",
    "Barbell Rows",
  ],
  Shoulders: [
    "Shoulder Press",
    "Arnold Press",
    "Overhead Press",
    "Dumbbell Press",
    "Military Press",
  ],
  Biceps: [
    "Chin-Ups",
    "Barbell Curls",
    "Dumbbell Curls",
    "Preacher Curls",
    "Hammer Curls",
  ],
  Triceps: [
    "Tricep Dips",
    "Close-Grip Bench Press",
    "Overhead Tricep Extension",
    "Tricep Pushdowns",
    "Diamond Push-Ups",
  ],
  Core: [
    "Cable Woodchoppers",
    "Ab Rollouts",
    "Russian Twists",
    "Hanging Leg Raises",
    "Planks",
  ],
  Glutes: [
    "Hip Thrusts",
    "Deadlifts",
    "Sumo Deadlifts",
    "Bulgarian Split Squats",
    "Lunges",
  ],
  Hamstrings: [
    "Romanian Deadlifts",
    "Glute-Ham Raises",
    "Nordic Curls",
    "Leg Curls",
    "Good Mornings",
  ],
  Quads: ["Squats", "Leg Press", "Hack Squats", "Lunges", "Front Squats"],
  Calves: ["Standing Calf Raises", "Seated Calf Raises", "Donkey Calf Raises"],
} as const;

const isolationExercises = {
  Chest: [
    "Chest Flys",
    "Pec Deck Machine",
    "Cable Chest Flys",
    "Dumbbell Pullover",
  ],
  Back: [
    "Single-arm Dumbbell Rows",
    "Seated Cable Rows",
    "Face Pulls",
    "Reverse Flys",
    "Straight-arm Pulldown",
  ],
  Shoulders: [
    "Lateral Raises",
    "Front Raises",
    "Reverse Pec Deck",
    "Cable Lateral Raises",
  ],
  Biceps: [
    "Concentration Curls",
    "Cable Curls",
    "Incline Dumbbell Curls",
    "Spider Curls",
  ],
  Triceps: [
    "Skull Crushers",
    "Rope Extensions",
    "Cable Tricep Kickbacks",
    "Tricep Pushdowns",
  ],
  Core: ["Crunches", "Bicycle Crunches", "Leg Raises", "Dragon Flags", "V-Ups"],
  Glutes: [
    "Glute Bridges",
    "Cable Kickbacks",
    "Step-Ups",
    "Kickbacks",
    "Donkey Kicks",
  ],
  Hamstrings: [
    "Hamstring Curls",
    "Swiss Ball Leg Curls",
    "Kettlebell Swings",
    "Stiff-leg Deadlifts",
  ],
  Quads: [
    "Leg Extensions",
    "Step-Ups",
    "Bulgarian Split Squats",
    "Leg Curl Machine",
  ],
  Calves: [
    "Jump Rope",
    "Box Jumps",
    "Calf Raises on Leg Press",
    "Single-leg Calf Raises",
  ],
} as const;

const workoutSplits = {
  2: ["Upper Body", "Lower Body"],
  3: ["Push", "Pull", "Legs"],
  4: ["Upper Body", "Lower Body", "Upper Body", "Lower Body"],
  5: ["Push", "Pull", "Legs", "Upper Body", "Lower Body"],
  6: ["Push", "Pull", "Legs", "Push", "Pull", "Legs"],
};

export type ExperienceLevel = "beginner" | "intermediate" | "advanced";

export interface WorkoutPlanOptions {
  selectedMuscles: string[];
  daysPerWeek: number;
  gender: "male" | "female";
  experienceLevel: ExperienceLevel;
  preferredDuration: "30" | "45" | "60" | "90";
}

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
      return { compound: 3, isolation: 3 }; // Default to 45 min
  }
};

const adjustForExperienceLevel = (
  experienceLevel: ExperienceLevel,
  exercises: Exercise[]
): Exercise[] => {
  switch (experienceLevel) {
    case "beginner":
      // Beginner: Lower sets and reps, more focus on form
      return exercises.map((exercise) => ({
        ...exercise,
        sets: 3,
        reps: 12,
      }));
    case "intermediate":
      // Intermediate: Balanced sets and reps
      return exercises.map((exercise) => ({
        ...exercise,
        sets: 4,
        reps: 10,
      }));
    case "advanced":
      // Advanced: Higher intensity, more sets, and reps
      return exercises.map((exercise) => ({
        ...exercise,
        sets: 5,
        reps: 6,
      }));
    default:
      return exercises;
  }
};

const prioritizeMusclesForGender = (
  selectedMuscles: string[],
  gender: "male" | "female"
): string[] => {
  if (gender === "female") {
    const priorityMuscles = ["Hamstrings", "Glutes", "Quads", "Core"];
    return selectedMuscles
      .filter((muscle) => priorityMuscles.includes(muscle))
      .concat(
        selectedMuscles.filter((muscle) => !priorityMuscles.includes(muscle))
      );
  }
  return selectedMuscles;
};

const generateGoals = (
  selectedMuscles: string[],
  compoundExercisesSelected: string[]
): { description: string; targetDate: string }[] => {
  const goals: { description: string; targetDate: string }[] = [];

  selectedMuscles.forEach((muscle) => {
    const matchingExercises = [
      ...compoundExercises[muscle as keyof typeof compoundExercises],
    ];

    const exerciseForGoal = compoundExercisesSelected.find((exercise) =>
      (matchingExercises as string[]).includes(exercise)
    );

    if (exerciseForGoal) {
      goals.push({
        description: `Improve strength in ${muscle} using ${exerciseForGoal}`,
        targetDate: "8 weeks",
      });
    }
  });

  return goals;
};

const generateWorkoutPlan = ({
  selectedMuscles,
  daysPerWeek,
  experienceLevel,
  preferredDuration,
}: WorkoutPlanOptions): PreMadeWorkout => {
  const id = Math.random().toString(36).substr(2, 9);
  const split = workoutSplits[daysPerWeek as keyof typeof workoutSplits];
  const workoutDays: WorkoutDay[] = [];
  let compoundExercisesSelected: string[] = [];

  const { compound: compoundCount, isolation: isolationCount } =
    getExerciseCountsForDuration(preferredDuration);
  let totalExercisesCount = 0;

  split.forEach((type, index) => {
    const exercises: Exercise[] = [];
    const usedMuscles: string[] = [];

    // Select compound exercises
    while (totalExercisesCount < compoundCount && selectedMuscles.length > 0) {
      const availableMuscles = selectedMuscles.filter(
        (muscle) => !usedMuscles.includes(muscle)
      );
      if (availableMuscles.length === 0) break;

      const muscle =
        availableMuscles[Math.floor(Math.random() * availableMuscles.length)];
      const muscleCompoundExercises =
        compoundExercises[muscle as keyof typeof compoundExercises];
      const exercise =
        muscleCompoundExercises[
          Math.floor(Math.random() * muscleCompoundExercises.length)
        ];

      if (!compoundExercisesSelected.includes(exercise)) {
        exercises.push({
          name: exercise,
          sets: 4,
          reps: 6,
          notes: `Focus on strength development for ${muscle}`,
        });
        compoundExercisesSelected.push(exercise);
        usedMuscles.push(muscle);
        totalExercisesCount++;
      }
    }

    // Select isolation exercises
    while (totalExercisesCount < compoundCount + isolationCount) {
      const availableMuscles = selectedMuscles.filter(
        (muscle) => !usedMuscles.includes(muscle)
      );

      // If no available muscles left, reset to all selected muscles
      if (availableMuscles.length === 0) {
        usedMuscles.length = 0;
        continue;
      }

      const muscle =
        availableMuscles[Math.floor(Math.random() * availableMuscles.length)];
      const muscleIsolationExercises =
        isolationExercises[muscle as keyof typeof isolationExercises];
      const exercise =
        muscleIsolationExercises[
          Math.floor(Math.random() * muscleIsolationExercises.length)
        ];

      if (!exercises.some((e) => e.name === exercise)) {
        exercises.push({
          name: exercise,
          sets: 3,
          reps: 12,
          notes: `Focus on isolating the ${muscle}`,
        });
        usedMuscles.push(muscle);
        totalExercisesCount++;
      }
    }

    // Adjust exercise intensity based on experience level
    const adjustedExercises = adjustForExperienceLevel(
      experienceLevel,
      exercises
    );

    workoutDays.push({
      name: `Day ${index + 1} - ${type}`,
      type: type,
      exercises: adjustedExercises,
    });
  });

  const goals = generateGoals(selectedMuscles, compoundExercisesSelected);

  return {
    id,
    title: `${daysPerWeek}-Day ${selectedMuscles.join("/")} Focus`,
    description: `Custom workout plan focusing on ${selectedMuscles.join(
      ", "
    )}`,
    targetMuscles: selectedMuscles,
    daysPerWeek,
    workoutDays,
    recommendedWeeks: 8,
    goals,
  };
};

export const findMatchingWorkouts = (
  selectedMuscles: string[],
  daysPerWeek: number,
  gender: "male" | "female",
  experienceLevel: ExperienceLevel,
  preferredDuration: "30" | "45" | "60" | "90"
): PreMadeWorkout[] => {
  const prioritizedMuscles = prioritizeMusclesForGender(
    selectedMuscles,
    gender
  );
  const customPlan = generateWorkoutPlan({
    selectedMuscles: prioritizedMuscles,
    daysPerWeek,
    gender,
    experienceLevel,
    preferredDuration,
  });
  return [customPlan];
};

export default {
  muscleGroups,
  compoundExercises,
  isolationExercises,
  findMatchingWorkouts,
};
