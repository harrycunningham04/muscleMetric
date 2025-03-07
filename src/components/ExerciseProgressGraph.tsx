import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { addDays, format } from "date-fns";
import { useSettings } from "@/context/SettingsContext";

interface ExerciseProgressGraphProps {
  exercise: string;
}

export const ExerciseProgressGraph = ({}: ExerciseProgressGraphProps) => {
  const { weightUnit, convertWeight, formatWeight } = useSettings();

  // Mock data - replace with actual API data
  const data = Array.from({ length: 10 }, (_, i) => {
    const actualWeight = Math.floor(100 + Math.random() * 50);
    const goalWeight = 100 + i * 5;

    return {
      date: format(addDays(new Date(), i * 3), "MMM dd"),
      actual: actualWeight,
      goal: goalWeight,
      // Add converted values for display
      actualDisplay: convertWeight(actualWeight),
      goalDisplay: convertWeight(goalWeight),
    };
  });

  const config = {
    actual: {
      color: "#0EA5E9",
      label: "Actual Weight",
    },
    goal: {
      color: "#22C55E",
      label: "Goal Weight",
    },
  };

  const isOnTrack = data[data.length - 1].actual >= data[data.length - 1].goal;

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
                {entry.name === "Actual Weight"
                  ? formatWeight(entry.payload.actual)
                  : formatWeight(entry.payload.goal)}
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
          <p className="text-sm font-medium">Current Progress</p>
          <p className="text-2xl font-bold">
            {formatWeight(data[data.length - 1].actual)}
          </p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isOnTrack
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {isOnTrack ? "On Track" : "Falling Behind"}
        </div>
      </div>

      <div className="w-full h-[400px]">
        {" "}
        {/* Adjusted height to ensure it fits in the container */}
        <ResponsiveContainer width="100%" height="100%">
          <ChartContainer config={config}>
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
              <ChartTooltip content={CustomTooltip} />
              <Line
                type="monotone"
                dataKey="actualDisplay"
                name="Actual Weight"
                stroke={config.actual.color}
                strokeWidth={2}
                dot={{ fill: config.actual.color, r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="goalDisplay"
                name="Goal Weight"
                stroke={config.goal.color}
                strokeWidth={2}
                dot={{ fill: config.goal.color, r: 3 }}
              />
              <Legend wrapperStyle={{ fontSize: "12px", marginTop: "10px" }} />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
