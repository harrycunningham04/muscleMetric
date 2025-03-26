import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  ArrowLeft,
  ArrowRight,
  Clock,
  Dumbbell,
  CalendarCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";


//plans table linking to user id, create ui for if only one plan has been made
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


//history call
const fetchWorkouts = async ({ pageParam = 0 }) => {
  const pageSize = 5;
  const allWorkouts = Array.from({ length: 50 }, (_, i) => ({
    id: `${i + 1}`,
    date: new Date(2024, 2, 15 - i).toISOString(),
    duration: `${30 + Math.floor(Math.random() * 30)} minutes`,
    exercises: ["Bench Press", "Squats", "Deadlifts"],
    planName: "8-Week Strength Program",
  }));

  const start = pageParam * pageSize;
  const end = start + pageSize;
  const hasMore = end < allWorkouts.length;

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    workouts: allWorkouts.slice(start, end),
    nextPage: hasMore ? pageParam + 1 : undefined,
  };
};

const Plans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activePlanId, setActivePlanId] = useState<string>("1");
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["workouts"],
      queryFn: fetchWorkouts,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 0,
    });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (
      scrollHeight - scrollTop <= clientHeight * 1.5 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  };

  
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


  // from workouts table, first workout that is not completed, from the default plan.
  const todaysWorkout = {
    id: "today-1",
    name: "Push Day",
    exercises: ["Bench Press", "Shoulder Press", "Tricep Extensions"],
    duration: "45 minutes",
    planName: activePlan?.title || "Default Plan",
  };

  return (
    <div className="container py-8 relative min-h-screen">
      {mockPlans.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Today's Workout</h2>
              <Card
                className="p-6 cursor-pointer transition-all duration-300 hover:shadow-lg bg-primary text-primary-foreground"
                onClick={() => navigate(`/workout/${todaysWorkout.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarCheck className="w-5 h-5" />
                      <h3 className="text-xl font-semibold">
                        {todaysWorkout.name}
                      </h3>
                    </div>
                    <p className="text-primary-foreground/80">
                      {todaysWorkout.exercises.join(" • ")}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">
                          {todaysWorkout.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dumbbell className="w-4 h-4" />
                        <span className="text-sm">
                          {todaysWorkout.exercises.length} exercises
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Start Workout
                  </Button>
                </div>
              </Card>
            </div>

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
            <ScrollArea
              className="h-[600px] rounded-md border p-4"
              onScrollCapture={handleScroll}
              ref={scrollRef}
            >
              <div className="space-y-4">
                {status === "pending" ? (
                  <div className="text-center py-4">Loading...</div>
                ) : status === "error" ? (
                  <div className="text-center py-4">Error loading workouts</div>
                ) : (
                  <>
                    {data.pages.map((page, i) => (
                      <React.Fragment key={i}>
                        {page.workouts.map((workout) => (
                          <Card
                            key={workout.id}
                            className="p-4 hover:shadow-lg transition-all cursor-pointer"
                            onClick={() => navigate(`/history/${workout.id}`)}
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
                      </React.Fragment>
                    ))}
                    {isFetchingNextPage && (
                      <div className="text-center py-4">Loading more...</div>
                    )}
                  </>
                )}
              </div>
            </ScrollArea>
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
