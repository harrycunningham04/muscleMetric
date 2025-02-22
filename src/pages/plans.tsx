import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/hooks/use-toast";

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
];

const Plans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activePlanId, setActivePlanId] = useState<string>("1");

  const handleActivatePlan = (planId: string) => {
    setActivePlanId(planId);
    toast({
      title: "Plan Activated",
      description: "Your active plan has been updated successfully.",
    });
  };

  const activePlan = mockPlans.find((plan) => plan.id === activePlanId);
  const inactivePlans = mockPlans.filter((plan) => plan.id !== activePlanId);

  return (
    <div className="container py-8 relative min-h-screen">
      {mockPlans.length === 0 ? (
        <EmptyState />
      ) : (
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
            <div>
              <h2 className="text-xl font-semibold mb-4">Other Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inactivePlans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    {...plan}
                    isActive={false}
                    onActivate={handleActivatePlan}
                  />
                ))}
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
      )}
    </div>
  );
};

export default Plans;
