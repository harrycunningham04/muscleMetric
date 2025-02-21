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

const prioritizeMusclesForGender = (
  selectedMuscles: string[],
  gender: "male" | "female"
): string[] => {
  if (gender === "female") {
    // Prioritize hamstrings, glutes, quads, and core
    const priorityMuscles = ["Hamstrings", "Glutes", "Quads", "Core"];
    return selectedMuscles
      .filter((muscle) => priorityMuscles.includes(muscle))
      .concat(
        selectedMuscles.filter((muscle) => !priorityMuscles.includes(muscle))
      );
  }
  return selectedMuscles;
};

const generateWorkoutPlan = (
  selectedMuscles: string[],
  daysPerWeek: number,
  gender: "male" | "female"
): PreMadeWorkout => {
  const id = Math.random().toString(36).substr(2, 9);
  const split = workoutSplits[daysPerWeek as keyof typeof workoutSplits];
  const workoutDays: WorkoutDay[] = [];
  let compoundExercisesSelected: string[] = [];

  split.forEach((type, index) => {
    const exercises: Exercise[] = [];
    const musclesForDay = [...selectedMuscles];

    // Reset muscle selection to ensure exercises are selected from a fresh list each day
    let totalExercisesCount = 0; // Keep track of the total number of exercises

    // Select compound exercises
    while (totalExercisesCount < 3 && musclesForDay.length > 0) {
      const muscleIndex = Math.floor(Math.random() * musclesForDay.length);
      const muscle = musclesForDay[muscleIndex];
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
        totalExercisesCount++; // Increment total exercises count
      }

      musclesForDay.splice(muscleIndex, 1);
    }

    // Select isolation exercises to reach exactly 7 exercises
    while (totalExercisesCount < 7 && musclesForDay.length > 0) {
      const muscleIndex = Math.floor(Math.random() * musclesForDay.length);
      const muscle = musclesForDay[muscleIndex];
      const muscleIsolationExercises =
        isolationExercises[muscle as keyof typeof isolationExercises];
      const exercise =
        muscleIsolationExercises[
          Math.floor(Math.random() * muscleIsolationExercises.length)
        ];

      exercises.push({
        name: exercise,
        sets: 3,
        reps: 12,
        notes: `Focus on isolating the ${muscle}`,
      });
      totalExercisesCount++; // Increment total exercises count
    }

    // If still not enough exercises, fill up with compound exercises again
    while (totalExercisesCount < 7) {
      const availableMuscles = Object.keys(compoundExercises) as Array<
        keyof typeof compoundExercises
      >;
      const muscle =
        availableMuscles[Math.floor(Math.random() * availableMuscles.length)];
      const muscleCompoundExercises = compoundExercises[muscle];
      const exercise =
        muscleCompoundExercises[
          Math.floor(Math.random() * muscleCompoundExercises.length)
        ];

      if (!exercises.some((e) => e.name === exercise)) {
        exercises.push({
          name: exercise,
          sets: 4,
          reps: 6,
          notes: `Focus on strength development for ${muscle}`,
        });
        totalExercisesCount++;
      }
    }

    workoutDays.push({
      name: `Day ${index + 1} - ${type}`,
      type: type,
      exercises: exercises,
    });
  });

  const goals = compoundExercisesSelected.map((exercise) => {
    const targetMuscle = exercise.split(" ")[0];
    return {
      description: `Improve ${targetMuscle} strength`,
      targetDate: "8 weeks",
    };
  });

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
  gender: "male" | "female"
): PreMadeWorkout[] => {
  const prioritizedMuscles = prioritizeMusclesForGender(
    selectedMuscles,
    gender
  );
  const customPlan = generateWorkoutPlan(
    prioritizedMuscles,
    daysPerWeek,
    gender
  );
  return [customPlan];
};

export default {
  muscleGroups,
  compoundExercises,
  isolationExercises,
  findMatchingWorkouts,
};
