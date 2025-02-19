
export type MuscleGroup = "Chest" | "Back" | "Shoulders" | "Biceps" | "Triceps" | "Core" | "Glutes" | "Hamstrings" | "Quads" | "Calves";

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
  'Chest',
  'Back',
  'Shoulders',
  'Biceps',
  'Triceps',
  'Core',
  'Glutes',
  'Hamstrings',
  'Quads',
  'Calves'
] as const;

const exerciseDatabase = {
  Chest: ["Bench Press", "Incline Dumbbell Press", "Chest Flys", "Push-Ups", "Decline Bench Press", "Cable Crossovers", "Dips", "Pec Deck Machine", "Dumbbell Pullover"],
  Back: ["Pull-Ups", "Bent-over Rows", "Lat Pulldown", "Deadlifts", "T-Bar Rows", "Seated Cable Rows", "Face Pulls", "Single-arm Dumbbell Rows", "Reverse Flys"],
  Shoulders: ["Shoulder Press", "Lateral Raises", "Front Raises", "Face Pulls", "Arnold Press", "Reverse Pec Deck", "Cable Lateral Raises", "Seated Dumbbell Press"],
  Biceps: ["Bicep Curls", "Hammer Curls", "Concentration Curls", "Preacher Curls", "Reverse Curls", "Cable Curls", "Incline Dumbbell Curls", "Spider Curls"],
  Triceps: ["Tricep Dips", "Tricep Pushdowns", "Overhead Extensions", "Close-Grip Bench Press", "Diamond Push-Ups", "Skull Crushers", "Rope Extensions"],
  Core: ["Crunches", "Hanging Leg Raises", "Russian Twists", "Planks", "Bicycle Crunches", "Ab Rollouts", "Cable Woodchoppers", "Dragon Flags"],
  Glutes: ["Hip Thrusts", "Glute Bridges", "Bulgarian Split Squats", "Kickbacks", "Sumo Deadlifts", "Cable Kickbacks", "Step-Ups"],
  Hamstrings: ["Romanian Deadlifts", "Hamstring Curls", "Good Mornings", "Nordic Curls", "Glute-Ham Raises", "Swiss Ball Leg Curls"],
  Quads: ["Squats", "Leg Extensions", "Front Squats", "Step-Ups", "Split Squats", "Hack Squats", "Leg Press"],
  Calves: ["Standing Calf Raises", "Seated Calf Raises", "Jump Rope", "Box Jumps", "Donkey Calf Raises"]
} as const;

const workoutSplits = {
  2: ["Upper Body", "Lower Body"],
  3: ["Push", "Pull", "Legs"],
  4: ["Upper Body", "Lower Body", "Upper Body", "Lower Body"],
  5: ["Push", "Pull", "Legs", "Upper Body", "Lower Body"],
  6: ["Push", "Pull", "Legs", "Push", "Pull", "Legs"]
};

const generateWorkoutPlan = (
  selectedMuscles: string[], 
  daysPerWeek: number
): PreMadeWorkout => {
  const id = Math.random().toString(36).substr(2, 9);
  const split = workoutSplits[daysPerWeek as keyof typeof workoutSplits];
  const workoutDays: WorkoutDay[] = [];

  // Generate workout days
  split.forEach((type, index) => {
    const exercises: Exercise[] = [];
    const musclesForDay = [...selectedMuscles];
    const targetExerciseCount = 4; // Target 4 exercises per day

    // Add exercises for each muscle group
    while (exercises.length < targetExerciseCount && musclesForDay.length > 0) {
      const muscleIndex = Math.floor(Math.random() * musclesForDay.length);
      const muscle = musclesForDay[muscleIndex];
      const muscleExercises = exerciseDatabase[muscle as keyof typeof exerciseDatabase];
      
      // Select a random exercise for this muscle
      const exerciseName = muscleExercises[Math.floor(Math.random() * muscleExercises.length)];
      
      // Add exercise if not already included
      if (!exercises.find(e => e.name === exerciseName)) {
        exercises.push({
          name: exerciseName,
          sets: 3,
          reps: 12,
          notes: `Focus on ${muscle} activation`
        });
      }

      // Remove muscle if we've used it enough
      if (exercises.length % 2 === 0) {
        musclesForDay.splice(muscleIndex, 1);
      }
    }

    workoutDays.push({
      name: `Day ${index + 1} - ${type}`,
      type: type,
      exercises: exercises
    });
  });

  // Generate appropriate goals based on selected muscles
  const goals = selectedMuscles.map(muscle => ({
    description: `Improve ${muscle} strength`,
    targetDate: '8 weeks'
  }));

  return {
    id,
    title: `${daysPerWeek}-Day ${selectedMuscles.join('/')} Focus`,
    description: `Custom workout plan focusing on ${selectedMuscles.join(', ')}`,
    targetMuscles: selectedMuscles,
    daysPerWeek,
    workoutDays,
    recommendedWeeks: 8,
    goals
  };
};

export const findMatchingWorkouts = (selectedMuscles: string[], daysPerWeek: number): PreMadeWorkout[] => {
  // Generate a custom workout plan based on user selections
  const customPlan = generateWorkoutPlan(selectedMuscles, daysPerWeek);
  return [customPlan];
};

export default {
  muscleGroups,
  exerciseDatabase,
  findMatchingWorkouts
};