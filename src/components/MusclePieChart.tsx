import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Define the muscle groups you're tracking (now in uppercase)
const muscleGroups = [
  "CHEST",
  "BACK",
  "SHOULDERS",
  "BICEPS",
  "TRICEPS",
  "CORE",
  "QUADS",
  "HAMSTRINGS",
  "GLUTES",
  "CALVES",
];

export type Exercise = {
  name: string;
  BodyPart: string;
  sets: number;
  reps: number;
  lastWeight: string;
};

export type Day = {
  day: string;
  exercises: Exercise[];
};

export type Plan = {
  title: string;
  workoutDays: number;
  goals: string[];
  schedule: Day[];
};

const MuscleTargetPieChart = ({ plan }: { plan: Plan | null }) => {
  const [muscleData, setMuscleData] = useState<any[]>([]);

  // Calculate the muscle group percentage
  const calculateMuscleGroups = (plan: Plan) => {
    const muscleCount: { [key: string]: number } = {};
    const totalExercises = plan.schedule.reduce(
      (acc, day) => acc + day.exercises.length,
      0
    );
  
    plan.schedule.forEach((day) => {
      day.exercises.forEach((exercise) => {
        const muscleUpper = exercise.BodyPart.toUpperCase();
        const matchIndex = muscleGroups.findIndex(
          (m) => m.toUpperCase() === muscleUpper
        );
        if (matchIndex !== -1) {
          const originalCased = muscleGroups[matchIndex];
          muscleCount[originalCased] = (muscleCount[originalCased] || 0) + 1;
        }
      });
    });
  
    const data = muscleGroups.map((muscle) => {
      const count = muscleCount[muscle] || 0;
      return {
        name: muscle.charAt(0).toUpperCase() + muscle.slice(1).toLowerCase(),
        value: parseFloat(((count / totalExercises) * 100).toFixed(2)),
      };
    });
  
    setMuscleData(data);
  };
  

  // Use effect to calculate muscle groups when the plan data changes
  useEffect(() => {
    if (plan) {
      calculateMuscleGroups(plan);
    }
  }, [plan]);

  // Define a more varied color palette for each muscle group
  const colors = [
    "#FF0000", // Chest
    "#33FF57", // Back
    "#3357FF", // Shoulders
    "#FF33A6", // Biceps
    "#C71585", // Triceps
    "#FFEB33", // Core
    "#000080", // Quads
    "#FF33C8", // Hamstrings
    "#800080", // Glutes
    "#006400", // Calves
  ];

  // Don't render the chart until the muscleData is available
  if (muscleData.length === 0) {
    return <div>Loading muscle data...</div>;
  }

  return (
    <div className="chart-container">
      <PieChart width={450} height={450}>
        <Pie
          data={muscleData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          label
        >
          {muscleData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index] || "#e0e0e0"} />
          ))}
        </Pie>
        <Tooltip formatter={(value: any) => `${value.toFixed(2)}%`} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MuscleTargetPieChart;
