import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { format } from "date-fns";
import { useSettings } from "@/context/SettingsContext";
import { useEffect, useState } from "react";
import axios from "axios";

interface ExerciseProgressGraphProps {
  exerciseId: number;
  userId: number;
}

export const ExerciseProgressGraph = ({
  exerciseId,
  userId,
}: ExerciseProgressGraphProps) => {
  const { weightUnit, convertWeight, formatWeight } = useSettings();
  const [data, setData] = useState<
    { date: string; actual: number; actualDisplay: number }[]
  >([]);
  const [goalData, setGoalData] = useState<
    { date: string; goal: number; goalDisplay: number }[]
  >([]);
  const [isGoalExercise, setIsGoalExercise] = useState(false);

  useEffect(() => {
    const fetchGoalData = async () => {
      try {
        const res = await axios.post(
          "https://hc920.brighton.domains/muscleMetric/php/dashboard/graph/goalData.php",
          {
            exercise_id: exerciseId,
            user_id: userId,
          }
        );

        if (res.data.message === "Not a goal exercise") {
          setIsGoalExercise(false);
          setGoalData([]);
          return;
        }

        setIsGoalExercise(true);

        const {
          date: endDateStr,
          duration,
          startingWeight,
          targetWeight,
        } = res.data;

        const endDate = new Date(endDateStr);
        const startDate = new Date(endDate);
        startDate.setDate(startDate.getDate() - (duration - 1) * 7);

        const weightIncrement =
          (targetWeight - startingWeight) / (duration - 1);

        const weeklyGoals = Array.from({ length: duration }, (_, i) => {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i * 7);
          const weight = startingWeight + weightIncrement * i;
          return {
            date: format(date, "yyyy-MM-dd"),
            goal: weight,
            goalDisplay: convertWeight(weight),
            label: `Week ${i + 1}`,
          };
        });

        setGoalData(weeklyGoals);
      } catch (err) {
        console.error("Error fetching goal data", err);
      }
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          "https://hc920.brighton.domains/muscleMetric/php/dashboard/graph/graphData.php",
          {
            exercise_id: exerciseId,
            user_id: userId,
          }
        );

        const processed = res.data
          .map((entry: any) => {
            if (!entry.sets || entry.sets.length === 0) return null;

            const workoutDate = new Date(entry.date);
            const maxWeight = Math.max(...entry.sets.map((s: any) => s.weight));

            return {
              date: format(workoutDate, "yyyy-MM-dd"), // Keep true workout date
              actual: maxWeight,
              actualDisplay: convertWeight(maxWeight),
            };
          })
          .filter(Boolean);

        setData(processed);
      } catch (err) {
        console.error("Error fetching graph data", err);
      }
    };

    const loadAll = async () => {
      await fetchGoalData();
      await fetchData();
    };

    loadAll();
  }, [exerciseId, userId]);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border/50 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-sm mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div
              key={`${entry.name}-${index}`}
              className="flex items-center gap-2 text-sm"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name === "Goal" ? (
                <p className="text-xs text-muted-foreground italic">
                  {entry.payload.label}
                </p>
              ) : (
                <span className="text-muted-foreground">{entry.name}:</span>
              )}
              <span className="font-medium">
                {formatWeight(
                  entry.payload.actualWeight ?? entry.payload.goalWeight
                )}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // First, get all dates from both goalData and data
  const allDatesSet = new Set<string>([
    ...goalData.map((g) => g.date),
    ...data.map((d) => d.date),
  ]);
  const allDates = Array.from(allDatesSet).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );

  // Then, build the merged array
  const mergedDates = allDates.map((date) => {
    const goalEntry = goalData.find((g) => g.date === date);
    const actualEntry = data.find((d) => d.date === date);

    return {
      date,
      goalWeight: goalEntry ? goalEntry.goal : null,
      actualWeight: actualEntry ? actualEntry.actual : null,
    };
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Current Weight</p>
          <p className="text-2xl font-bold">
            {data.length > 0 ? formatWeight(data[data.length - 1].actual) : "-"}
          </p>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={mergedDates}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              stroke="currentColor"
              className="text-muted-foreground"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke="currentColor"
              className="text-muted-foreground"
              unit={` ${weightUnit}`}
              domain={["auto", "auto"]}
              tick={{ fontSize: 12 }}
              width={60}
            />
            <Tooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="actualWeight"
              name="Your Weight"
              stroke="#0EA5E9"
              strokeWidth={2}
              dot={{ fill: "#0EA5E9", r: 3 }}
              connectNulls={false}
            />
            {isGoalExercise && goalData.length > 0 && (
              <Line
                type="monotone"
                dataKey="goalWeight"
                name="Goal"
                stroke="#22C55E"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#22C55E", r: 3 }}
                connectNulls={true}
              />
            )}
            <Legend wrapperStyle={{ fontSize: "12px", marginTop: "10px" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
