import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OneRepModal } from "./OneRepModal";
import {
  Dumbbell,
  Target,
  ListChecks,
  ActivitySquare,
  Timer,
  Calculator,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSettings } from "@/context/SettingsContext";

// Motivational quotes array
const quotes = [
  "The only bad workout is the one that didn't happen.",
  "Your body can stand almost anything. It's your mind you have to convince.",
  "The harder you work, the luckier you get.",
  "Success starts with self-discipline.",
  "Your health is an investment, not an expense.",
  "The difference between try and triumph is just a little umph!",
  "Don't wish for it, work for it.",
];

export const DashboardView = () => {
  const [isOneRmModalOpen, setIsOneRmModalOpen] = useState(false);
  const { weightUnit, formatWeight } = useSettings();
  const navigate = useNavigate();

  //facts table

  // Mock data - in a real app, this would come from your backend
  const stats = {
    streak: 5,
    totalVolume: 24560,
    workoutsCompleted: 32,
    setsCompleted: 486,
    averageWorkoutDuration: "45min",
  };

  const [dailyQuote, setDailyQuote] = useState("");

  useEffect(() => {
    // Get a consistent quote for the day using the date
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        1000 /
        60 /
        60 /
        24
    );
    const quoteIndex = dayOfYear % quotes.length;
    setDailyQuote(quotes[quoteIndex]);
  }, []);

  const handleWorkoutClick = () => {
    navigate("/workout");
  };

  // Format previous weight with current unit
  const formattedTotalWeight = stats.totalVolume
    ? formatWeight(stats.totalVolume, weightUnit)
    : undefined;


  return (
    <Card className="w-full hover:shadow-lg transition-all">
      <CardHeader className="bg-primary rounded-xl">
        <div
          className="flex flex-col items-center justify-center p-6 cursor-pointer hover:bg-primary/5 transition-all duration-300 rounded-xl text-muted group"
          onClick={handleWorkoutClick}
        >
          <div></div>
          <CardTitle className="text-3xl group-hover:scale-105 transition-transform pb-6">
            {dailyQuote}
          </CardTitle>
          <CardDescription className="text-3xl group-hover:scale-105 transition-transform">
            Lets Workout 💪
          </CardDescription>
          <div></div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg overflow-hidden border bg-gradient-to-br from-background to-primary/5 p-4 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Workout Streak */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 hover:from-orange-500/20 hover:to-red-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-default">
              <ActivitySquare className="w-8 h-8 text-orange-600" />
              <div className="text-2xl font-bold">{stats.streak} 🔥</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>

            {/* Total Volume */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-default">
              <Dumbbell className="w-8 h-8 text-blue-600" />
              <div className="text-2xl font-bold">{formattedTotalWeight}</div>
              <div className="text-sm text-muted-foreground">
                Total {weightUnit} Lifted
              </div>
            </div>

            {/* Workouts Completed */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-default">
              <Target className="w-8 h-8 text-green-600" />
              <div className="text-2xl font-bold">
                {stats.workoutsCompleted}
              </div>
              <div className="text-sm text-muted-foreground">
                Workouts Complete
              </div>
            </div>

            {/* Sets Completed */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 hover:from-purple-500/20 hover:to-violet-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-default">
              <ListChecks className="w-8 h-8 text-purple-600" />
              <div className="text-2xl font-bold">{stats.setsCompleted}</div>
              <div className="text-sm text-muted-foreground">
                Sets Completed
              </div>
            </div>

            {/* Average Workout Duration */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-pink-500/10 to-rose-500/10 hover:from-pink-500/20 hover:to-rose-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-default">
              <Timer className="w-8 h-8 text-pink-600" />
              <div className="text-2xl font-bold">
                {stats.averageWorkoutDuration}
              </div>
              <div className="text-sm text-muted-foreground">
                Avg. Workout Time
              </div>
            </div>

            {/* 1RM Calculator Card */}
            <div
              className="p-4 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/10 hover:from-indigo-500/20 hover:to-blue-500/20 transition-all flex flex-col items-center justify-center text-center space-y-2 hover:scale-105 cursor-pointer"
              onClick={() => setIsOneRmModalOpen(true)}
            >
              <Calculator className="w-8 h-8 text-indigo-600" />
              <div className="text-lg font-semibold">Calculate 1RM</div>
              <div className="text-sm text-muted-foreground">Find Your Max</div>
            </div>
          </div>
        </div>
      </CardContent>

      <OneRepModal
        isOpen={isOneRmModalOpen}
        onClose={() => setIsOneRmModalOpen(false)}
      />
    </Card>
  );
};
