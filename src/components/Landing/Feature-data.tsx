import {
  BarChart2,
  Calendar,
  Timer,
  Award,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { ExampleExerciseProgressGraph } from "@/components/ExampleExerciseProgressGraph";
import Goals from "@/assets/Goals.jpg";
import Welcome from "@/assets/Welcome.jpg";
import WorkoutPlans from "@/assets/WorkoutPlans.jpg";
import ProgressTracking from "@/assets/ProgressTracking.png";
import PerformanceMetric from "@/assets/PerformanceMetrics.png";

export const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Goal Setting",
    description:
      "Set personalized fitness goals and get guided support to achieve them.",
    image: { Goals },
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h5 className="font-semibold">Sample Goals</h5>
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-primary/10 rounded">
              <span>Bench Press</span>
              <span>225 lbs by June</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-primary/10 rounded">
              <span>Weight Loss</span>
              <span>15 lbs in 3 months</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-primary/10 rounded">
              <span>Workout Frequency</span>
              <span>4x per week</span>
            </div>
          </div>
        </div>
      </div>
    ),
    type: "popover-right",
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Easy to Use",
    description:
      "Intuitive interface designed for both beginners and experienced athletes.",
    image: { Welcome },
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="p-3 bg-primary/10 rounded text-center">
            <p className="font-semibold">Quick Add</p>
            <p className="text-sm text-muted-foreground">
              Add workouts in seconds
            </p>
          </div>
          <div className="p-3 bg-primary/10 rounded text-center">
            <p className="font-semibold">Templates</p>
            <p className="text-sm text-muted-foreground">
              Save favorite routines
            </p>
          </div>
          <div className="p-3 bg-primary/10 rounded text-center">
            <p className="font-semibold">Auto-Track</p>
            <p className="text-sm text-muted-foreground">Smart rest timer</p>
          </div>
          <div className="p-3 bg-primary/10 rounded text-center">
            <p className="font-semibold">History</p>
            <p className="text-sm text-muted-foreground">View past workouts</p>
          </div>
        </div>
      </div>
    ),
    type: "popover-left",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Workout Plans",
    description:
      "Access custom workout plans tailored to your fitness level and goals.",
    image: { WorkoutPlans },
    content: (
      <div className="space-y-4">
        <div className="border rounded p-4">
          <h5 className="font-semibold mb-2">5-Day Split Example</h5>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-20 font-medium">Monday:</span>
              <span className="text-muted-foreground">Chest & Triceps</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20 font-medium">Tuesday:</span>
              <span className="text-muted-foreground">Back & Biceps</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20 font-medium">Wednesday:</span>
              <span className="text-muted-foreground">Legs & Core</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20 font-medium">Thursday:</span>
              <span className="text-muted-foreground">Shoulders & Arms</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-20 font-medium">Friday:</span>
              <span className="text-muted-foreground">Full Body & Cardio</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    type: "dialog",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Progress Tracking",
    description:
      "Track your workouts and monitor your progress with detailed analytics and charts.",
    image: { ProgressTracking },
    content: <ExampleExerciseProgressGraph exercise="Bench Press" />,
    type: "dialog",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Performance Metrics",
    description:
      "Get detailed insights into your performance and areas for improvement.",
    image: { PerformanceMetric },
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-primary/10 rounded">
            <h5 className="font-semibold mb-2">Volume</h5>
            <p className="text-2xl font-bold">24,560 lbs</p>
            <p className="text-sm text-muted-foreground">This week</p>
          </div>
          <div className="p-4 bg-primary/10 rounded">
            <h5 className="font-semibold mb-2">Sessions</h5>
            <p className="text-2xl font-bold">16</p>
            <p className="text-sm text-muted-foreground">This month</p>
          </div>
          <div className="p-4 bg-primary/10 rounded">
            <h5 className="font-semibold mb-2">Time</h5>
            <p className="text-2xl font-bold">45 min</p>
            <p className="text-sm text-muted-foreground">Avg. workout</p>
          </div>
          <div className="p-4 bg-primary/10 rounded">
            <h5 className="font-semibold mb-2">Streak</h5>
            <p className="text-2xl font-bold">5 days</p>
            <p className="text-sm text-muted-foreground">Current</p>
          </div>
        </div>
      </div>
    ),
    type: "popover-left",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Community",
    description:
      "Join a community of fitness enthusiasts and share your journey.",
    image: "@/assets/Community.png",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4 p-3 bg-primary/10 rounded">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              🏃‍♂️
            </div>
            <div>
              <p className="font-semibold">John D.</p>
              <p className="text-sm text-muted-foreground">
                New PR: 315lb Deadlift! 💪
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-primary/10 rounded">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              🏋️‍♀️
            </div>
            <div>
              <p className="font-semibold">Sarah M.</p>
              <p className="text-sm text-muted-foreground">
                30-day challenge completed! 🎉
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    type: "popover-right",
  },
] as const;
