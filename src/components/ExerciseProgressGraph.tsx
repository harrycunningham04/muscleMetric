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

  useEffect(() => {
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

            const maxWeight = Math.max(...entry.sets.map((s: any) => s.weight));
            return {
              date: format(new Date(entry.date), "MMM dd"),
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

    const fetchGoalData = async () => {
      try {
        const res = await axios.post(
          "https://hc920.brighton.domains/muscleMetric/php/dashboard/graph/goalData.php",
          {
            exercise_id: exerciseId,
            user_id: userId,
          }
        );

        if (res.data.message === "Not a goal exercise") return;

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
          date.setDate(date.getDate() + i * 7);
          const weight = startingWeight + weightIncrement * i;
          return {
            date: format(date, "MMM dd"),
            goal: weight,
            goalDisplay: convertWeight(weight),
          };
        });

        setGoalData(weeklyGoals);
      } catch (err) {
        console.error("Error fetching goal data", err);
      }
    };

    fetchData();
    fetchGoalData();
  }, [exerciseId, userId]);

  const isOnTrack =
    data.length > 0 &&
    goalData.length > 0 &&
    data[data.length - 1].actual >= goalData[goalData.length - 1].goal;

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
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-medium">
                {formatWeight(entry.payload.actual ?? entry.payload.goal)}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium">Progress</p>
          <p className="text-2xl font-bold">
            {data.length > 0 ? formatWeight(data[data.length - 1].actual) : "-"}
          </p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isOnTrack
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {isOnTrack ? "On Track" : "Needs Improvement"}
        </div>
      </div>

      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
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
              dataKey="actualDisplay"
              name="Max Weight"
              stroke="#0EA5E9"
              strokeWidth={2}
              dot={{ fill: "#0EA5E9", r: 3 }}
            />
            {goalData.length > 0 && (
              <Line
                type="monotone"
                dataKey="goalDisplay"
                name="Goal"
                data={goalData}
                stroke="#22C55E"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#22C55E", r: 3 }}
              />
            )}
            <Legend wrapperStyle={{ fontSize: "12px", marginTop: "10px" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
