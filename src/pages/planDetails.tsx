import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, Dumbbell, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MusclePieChart from "@/components/MusclePieChart";

type Exercise = {
  name: string;
  sets: number;
  reps: number;
  lastWeight: string;
  BodyPart: string; // Add BodyPart to Exercise type
};

type Day = {
  day: string;
  exercises: Exercise[];
};

type Plan = {
  title: string;
  duration: string;
  workoutDays: number;
  schedule: Day[];
  goals: string[];
};

const PlanDetails = () => {
  const navigate = useNavigate();
  const { planid } = useParams();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        console.log("🔄 Fetching plan details...");

        const sessionData = localStorage.getItem("session");
        if (!sessionData) {
          throw new Error("❌ Session not found in local storage.");
        }

        const session = JSON.parse(sessionData);
        const userId = session.userId;

        const response = await fetch(
          "https://hc920.brighton.domains/muscleMetric/php/plans/planDetails.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              planid,
              userId,
            }),
          }
        );

        // Log the raw response to check what is returned
        const responseText = await response.text();
        console.log("📥 Raw Response Text:", responseText);

        // Try to parse as JSON if the response is valid JSON
        const data = JSON.parse(responseText);
        console.log("✅ Parsed response data:", data);

        if (!data || Object.keys(data).length === 0) {
          throw new Error("❌ No data found for this plan.");
        }

        setPlan(data);
      } catch (error: any) {
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [planid]);

  if (loading) return <div className="container py-8">Loading...</div>;
  if (error) return <div className="container py-8 text-red-600">{error}</div>;
  if (!plan) return <div className="container py-8">Plan not found.</div>;

  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/plans")}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Plans
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-4">{plan.title}</h1>
                <div className="flex space-x-6 text-muted-foreground">
                  <div className="flex items-center">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    <span>{plan.duration} weeks</span>
                  </div>
                  <div className="flex items-center">
                    <Dumbbell className="w-4 h-4 mr-2" />
                    <span>{plan.workoutDays} days per week</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Weekly Schedule</h2>
            <div className="space-y-8">
              {plan.schedule.map((day) => (
                <div
                  key={day.day}
                  className="border-b pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="font-medium text-lg mb-4">{day.day}</h3>
                  <div className="space-y-4">
                    {day.exercises.map((exercise) => (
                      <div
                        key={exercise.name}
                        className="bg-muted/20 rounded-lg p-4"
                      >
                        <div>
                          <h4 className="font-medium text-primary">
                            {exercise.name}
                          </h4>
                          <div className="text-sm text-muted-foreground">
                            <span>
                              {exercise.sets} sets × {exercise.reps} reps
                            </span>
                            <span className="mx-2">•</span>
                            <span>Last: {exercise.lastWeight}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Goals</h2>
            <ul className="space-y-3">
              {plan.goals.map((goal, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                  {goal}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 mt-6">
            <h2 className="text-xl font-semibold mb-6">
              Muscle Group Breakdown
            </h2>
            <div className="flex justify-center items-center">
              <MusclePieChart plan={plan} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
