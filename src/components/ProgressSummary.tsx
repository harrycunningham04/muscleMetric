
import { Card, CardContent } from "@/components/ui/card";
import { Users, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

// Mock data - replace with actual data
const strengthData = {
  exercises: [
    { name: "Bench Press", maxWeight: "225 lbs", agePercentile: 85, genderPercentile: 75 },
    { name: "Squat", maxWeight: "315 lbs", agePercentile: 90, genderPercentile: 80 },
    { name: "Deadlift", maxWeight: "405 lbs", agePercentile: 95, genderPercentile: 85 },
    { name: "Overhead Press", maxWeight: "135 lbs", agePercentile: 70, genderPercentile: 65 },
    { name: "Barbell Row", maxWeight: "185 lbs", agePercentile: 75, genderPercentile: 70 },
  ],
};

export const ProgressSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Age Group Comparison
                  </p>
                  <p className="text-2xl font-bold">View Strength Rankings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Strength Comparison - Age Group</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {strengthData.exercises.map((exercise) => (
              <div key={exercise.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{exercise.name}</p>
                  <p className="text-sm text-muted-foreground">Max: {exercise.maxWeight}</p>
                </div>
                <Progress value={exercise.agePercentile} className="h-2" />
                <p className="text-sm text-muted-foreground text-right">
                  Stronger than {exercise.agePercentile}% of your age group
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Gender Group Comparison
                  </p>
                  <p className="text-2xl font-bold">View Strength Rankings</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Strength Comparison - Gender Group</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            {strengthData.exercises.map((exercise) => (
              <div key={exercise.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="font-medium">{exercise.name}</p>
                  <p className="text-sm text-muted-foreground">Max: {exercise.maxWeight}</p>
                </div>
                <Progress value={exercise.genderPercentile} className="h-2" />
                <p className="text-sm text-muted-foreground text-right">
                  Stronger than {exercise.genderPercentile}% of your gender group
                </p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};