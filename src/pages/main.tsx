import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DashboardView } from "@/components/DashboardView";
import { ProgressSummary } from "@/components/ProgressSummary";
import { ExerciseProgressGraph } from "@/components/ExerciseProgressGraph";
import { getExercisesList } from "@/components/ExerciseSelector";
import { UserProfile } from "@/components/UserProfile";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const exercises = getExercisesList();
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="container py-8 bg-background text-foreground min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/plans")}
              className="text-foreground hover:text-foreground/80 hover:text-white"
            >
              Plans
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/pre-made-plans")}
              className="text-foreground hover:text-foreground/80 hover:text-white"
            >
              Pre-Made Plans
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/contact")}
              className="text-foreground hover:text-foreground/80 hover:text-white"
            >
              Contact
            </Button>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <UserProfile />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <DashboardView />

        <ProgressSummary />

        <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>Exercise Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="md:hidden mb-4">
              <Select
                value={selectedExercise || undefined}
                onValueChange={(value) => setSelectedExercise(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an exercise" />
                </SelectTrigger>
                <SelectContent>
                  {exercises.map((exercise) => (
                    <SelectItem key={exercise} value={exercise}>
                      {exercise}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="hidden md:grid md:grid-cols-12 gap-6">
              <div className="md:col-span-3">
                <div className="space-y-2">
                  {exercises.map((exercise) => (
                    <button
                      key={exercise}
                      onClick={() => setSelectedExercise(exercise)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedExercise === exercise
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      {exercise}
                    </button>
                  ))}
                </div>
              </div>

              <div className="md:col-span-9">
                {selectedExercise ? (
                  <ExerciseProgressGraph exercise={selectedExercise} />
                ) : (
                  <div className="text-center text-muted-foreground py-12">
                    Select an exercise from the list to view your progress
                  </div>
                )}
              </div>
            </div>

            <div className="md:hidden">
              {selectedExercise ? (
                <ExerciseProgressGraph exercise={selectedExercise} />
              ) : (
                <div className="text-center text-muted-foreground py-12">
                  Select an exercise to view your progress
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Main;
