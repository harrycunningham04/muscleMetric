import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

// Mock data - replace with actual data fetching
const mockPlans = [
  {
    id: "1",
    title: "8-Week Strength Program",
    duration: "8 weeks",
    workoutDays: 4,
    goals: 3,
    progress: 65,
    startDate: "2024-01-01",
    endDate: "2024-02-28",
  },
  {
    id: "2",
    title: "Summer Shred",
    duration: "12 weeks",
    workoutDays: 5,
    goals: 4,
    progress: 30,
    startDate: "2024-03-01",
    endDate: "2024-05-31",
  },
  {
    id: "3",
    title: "Winter Bulk",
    duration: "12 weeks",
    workoutDays: 5,
    goals: 3,
    progress: 90,
    startDate: "2023-10-01",
    endDate: "2024-03-31",
  },
];

const recentWorkouts = [
  {
    id: "1",
    date: "2024-03-15",
    duration: "45 minutes",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    planName: "8-Week Strength Program",
  },
  {
    id: "2",
    date: "2024-03-13",
    duration: "60 minutes",
    exercises: ["Pull-ups", "Rows", "Bicep Curls"],
    planName: "8-Week Strength Program",
  },
  {
    id: "3",
    date: "2024-03-15",
    duration: "45 minutes",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    planName: "8-Week Strength Program",
  },
  {
    id: "4",
    date: "2024-03-13",
    duration: "60 minutes",
    exercises: ["Pull-ups", "Rows", "Bicep Curls"],
    planName: "8-Week Strength Program",
  },
  {
    id: "5",
    date: "2024-03-15",
    duration: "45 minutes",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    planName: "8-Week Strength Program",
  },
  {
    id: "6",
    date: "2024-03-13",
    duration: "60 minutes",
    exercises: ["Pull-ups", "Rows", "Bicep Curls"],
    planName: "8-Week Strength Program",
  },
  {
    id: "7",
    date: "2024-03-15",
    duration: "45 minutes",
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    planName: "8-Week Strength Program",
  },
  {
    id: "8",
    date: "2024-03-13",
    duration: "60 minutes",
    exercises: ["Pull-ups", "Rows", "Bicep Curls"],
    planName: "8-Week Strength Program",
  },
];

const Plans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activePlanId, setActivePlanId] = useState<string>("1");
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);

  const handleActivatePlan = (planId: string) => {
    setActivePlanId(planId);
    toast({
      title: "Plan Activated",
      description: "Your active plan has been updated successfully.",
    });
  };

  const activePlan = mockPlans.find((plan) => plan.id === activePlanId);
  const inactivePlans = mockPlans.filter((plan) => plan.id !== activePlanId);

  const nextPlan = () => {
    setCurrentPlanIndex((prev) =>
      prev === inactivePlans.length - 1 ? 0 : prev + 1
    );
  };

  const previousPlan = () => {
    setCurrentPlanIndex((prev) =>
      prev === 0 ? inactivePlans.length - 1 : prev - 1
    );
  };

  return (
    <div className="container py-8 relative min-h-screen">
      {mockPlans.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {activePlan && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Active Plan</h2>
                <PlanCard
                  {...activePlan}
                  isActive={true}
                  onActivate={handleActivatePlan}
                />
              </div>
            )}

            {inactivePlans.length > 0 && (
              <div className="relative">
                <h2 className="text-xl font-semibold mb-4">Other Plans</h2>
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPlanIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PlanCard
                        {...inactivePlans[currentPlanIndex]}
                        isActive={false}
                        onActivate={handleActivatePlan}
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={previousPlan}
                      className="rounded-full bg-background/80 backdrop-blur"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextPlan}
                      className="rounded-full bg-background/80 backdrop-blur"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Workouts</h2>
              <Button
                variant="ghost"
                onClick={() => navigate("/history")}
                className="text-sm"
              >
                View All History
              </Button>
            </div>
            <div className="space-y-4">
              {recentWorkouts.map((workout) => (
                <Card
                  key={workout.id}
                  className="p-4 hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => navigate(`/workout/${workout.id}`)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {workout.planName}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{workout.duration}</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(workout.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {workout.exercises.join(", ")}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-8 right-8">
        <Button onClick={() => navigate("/plans/new")} size="lg">
          <Plus className="w-4 h-4 mr-2" />
          Create New Plan
        </Button>
      </div>
    </div>
  );
};

export default Plans;
