import {
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { addDays, format } from "date-fns";

interface ExerciseProgressGraphProps {
  exercise: string;
}

export const ExerciseProgressGraph = ({ }: ExerciseProgressGraphProps) => {
  // Mock data - replace with actual API data
  const data = Array.from({ length: 10 }, (_, i) => ({
    date: format(addDays(new Date(), i * 3), "MMM dd"),
    actual: Math.floor(100 + Math.random() * 50),
    goal: 100 + (i * 5),
  }));

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
              <span className="font-medium">{entry.value} lbs</span>
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
            {data[data.length - 1].actual} lbs
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

      <div className="h-[300px] mt-4">
        <ChartContainer config={config}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="date"
              stroke="currentColor"
              className="text-muted-foreground"
            />
            <YAxis
              stroke="currentColor"
              className="text-muted-foreground"
              unit=" lbs"
            />
            <ChartTooltip content={CustomTooltip} />
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual Weight"
              stroke={config.actual.color}
              strokeWidth={2}
              dot={{ fill: config.actual.color }}
            />
            <Line
              type="monotone"
              dataKey="goal"
              name="Goal Weight"
              stroke={config.goal.color}
              strokeWidth={2}
              dot={{ fill: config.goal.color }}
            />
            <Legend />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};