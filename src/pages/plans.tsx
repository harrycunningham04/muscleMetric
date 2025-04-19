import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Plus,
  ArrowLeft,
  ArrowRight,
  Clock,
  Dumbbell,
  CalendarCheck,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";

type Plan = {
  id: string;
  title: string;
  duration: number;
  workoutDays: number;
  UserID: number;
  isDefault: number;
  created_at: string;
  updated_at: string;
  goals: number;
};

type WorkoutType = {
  id: string;
  name: string;
  exercises: string[];
  planName: string;
};

// Plans API call with fetch
const fetchPlans = async () => {
  try {
    const sessionData = localStorage.getItem("session");
    if (sessionData) {
      const session = JSON.parse(sessionData); // Parse the string into an object
      const userId = session.userId;
      console.log("User ID:", userId);

      const response = await fetch(
        `https://hc920.brighton.domains/muscleMetric/php/plans/plansData.php?user_id=${userId}`
      ); // Make sure to update this with the correct API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("plansData:", data.plans); // Log plansData to verify the response
      return data.plans; // assuming the structure returns an array of plans
    } else {
      console.log("Session not found in local storage.");
    }
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw new Error("Error fetching plans");
  }
};

const fetchWorkouts = async ({ pageParam = 0 }) => {
  const pageSize = 5;

  const sessionData = localStorage.getItem("session");
  if (!sessionData) {
    console.warn("Session not found in local storage.");
    return {
      workouts: [],
      nextPage: undefined,
    };
  }

  const session = JSON.parse(sessionData);
  const userId = session.userId;
  console.log("User ID:", userId);

  const res = await fetch(
    `https://hc920.brighton.domains/muscleMetric/php/plans/historyData.php?user_id=${userId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch history data");
  }

  const data = await res.json();

  // Simulate pagination
  const start = pageParam * pageSize;
  const end = start + pageSize;
  const workouts = data.slice(start, end);
  const hasMore = end < data.length;

  return {
    workouts,
    nextPage: hasMore ? pageParam + 1 : undefined,
  };
};

const Plans = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activePlanId, setActivePlanId] = useState<string>("1");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [todaysWorkout, setTodaysWorkout] = useState<WorkoutType | null>(null);
  const [currentPlanIndex, setCurrentPlanIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Fetch plans data on mount
  useEffect(() => {
    const loadPlans = async () => {
      try {
        const planData = await fetchPlans();
        // Transform the planData to match the PlanCardProps structure
        const transformedPlans = planData.map((plan: any) => {
          const startDate = new Date(plan.created_at);

          const endDate = new Date(startDate);
          endDate.setDate(startDate.getDate() + plan.Duration * 7);

          const endDateStr = endDate.toISOString().split("T")[0];

          return {
            id: plan.id,
            title: plan.Title,
            duration: plan.Duration,
            workoutDays: plan.DaysPerWeek,
            goals: plan.goals || 3,
            isDefault: plan.isDefault === 1,
            progress: plan.progress || 0,
            startDate: startDate.toISOString().split("T")[0],
            endDate: endDateStr,
          };
        });

        setPlans(transformedPlans);
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not load workout plans.",
          variant: "destructive",
        });
      }
    };

    loadPlans();
  }, []);

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

  const handleActivatePlan = async (planId: string) => {
    try {
      const response = await fetch(
        "https://hc920.brighton.domains/muscleMetric/php/plans/update/activePlan.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "2", // Replace this with dynamic user ID if available
            planId: planId,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setActivePlanId(planId);
        toast({
          title: "Plan Activated",
          description: "Your active plan has been updated successfully.",
        });
        window.location.reload();
      } else {
        toast({
          title: "Activation Failed",
          description:
            data.error || "Something went wrong while activating the plan.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not reach the server. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const activePlan = plans.find((plan) => plan.isDefault);
  const inactivePlans = plans.filter((plan) => plan.id !== activePlanId);

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

  useEffect(() => {
    const fetchTodaysWorkout = async () => {
      try {
        let UserID = 2;
        const res = await fetch(
          `https://hc920.brighton.domains/muscleMetric/php/plans/workoutData.php?user_id=${UserID}`
        );
        const data = await res.json();

        console.log("Raw response from workoutData.php:", data);

        if (data.error) {
          console.error(data.error);
          return;
        }

        const { id, name, exercises, planName } = data;

        setTodaysWorkout({
          id: id.toString(),
          name: name,
          exercises: exercises,
          planName: planName || "Default Plan",
        });
      } catch (err) {
        console.error("Failed to fetch workout:", err);
      }
    };

    fetchTodaysWorkout();
  }, []);

  useEffect(() => {
    if (todaysWorkout) {
      console.log("Updated todaysWorkout:", todaysWorkout);
    }
  }, [todaysWorkout]);

  return (
    <div className="container py-8 relative min-h-screen">
      {plans.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {todaysWorkout && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Next Workout</h2>
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
            )}

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

            {inactivePlans.length > 1 && (
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

          {data?.pages[0]?.workouts?.length > 0 ? (
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
                    <div className="text-center py-4">
                      Error loading workouts
                    </div>
                  ) : (
                    <>
                      {data.pages.map((page, i) => (
                        <React.Fragment key={i}>
                          {page.workouts.map(
                            (workout: {
                              id: number;
                              planName: string;
                              workoutName: string;
                              duration: string;
                              date: string;
                              exercises: string[];
                            }) => (
                              <Card
                                key={workout.id}
                                className="p-4 hover:shadow-lg transition-all cursor-pointer"
                                onClick={() =>
                                  navigate(`/history/${workout.id}`)
                                }
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold text-lg mb-2">
                                      {workout.planName}
                                    </h3>
                                    <h4 className="font-semibold text-lg mb-2">
                                      {workout.workoutName}
                                    </h4>
                                    <div className="flex items-center text-muted-foreground mb-1">
                                      <Clock className="w-4 h-4 mr-2" />
                                      <span>{workout.duration}</span>
                                    </div>
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(
                                      workout.date
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground">
                                  {Object.entries(
                                    workout.exercises.reduce(
                                      (
                                        acc: Record<string, number>,
                                        exercise: string
                                      ) => {
                                        acc[exercise] =
                                          (acc[exercise] || 0) + 1;
                                        return acc;
                                      },
                                      {}
                                    )
                                  ).map(
                                    (
                                      [exercise, count]: [string, number],
                                      index: number
                                    ) => (
                                      <div key={index}>
                                        • {exercise} ({count}{" "}
                                        {count > 1 ? "sets" : "set"})
                                      </div>
                                    )
                                  )}
                                </div>
                              </Card>
                            )
                          )}
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
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
              <Activity className="w-12 h-12 mb-4 opacity-75" />
              <h3 className="text-lg font-semibold">No workouts yet</h3>
              <p className="text-sm">
                Once you complete a workout, it’ll show up here. Let’s get
                moving!
              </p>
            </div>
          )}
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
