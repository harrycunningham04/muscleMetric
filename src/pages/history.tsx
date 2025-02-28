import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import {
  Calendar,
  ArrowDown,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Exercise {
  name: string;
  sets: number;
  reps: number[];
  weights: number[];
}

interface WorkoutHistory {
  id: string;
  date: string;
  dateObj: Date;
  duration: string;
  planName: string;
  workoutName: string;
  exercises: Exercise[];
}

// Mock API call for workout history
const fetchWorkoutHistory = async ({ pageParam = 1 }) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Create sample data with different months
  const workouts: WorkoutHistory[] = [
    // February 2023
    {
      id: "1",
      date: "27 February 2025",
      dateObj: new Date(2025, 1, 27),
      duration: "1 hr 10 mins",
      planName: "SEMESTER 2",
      workoutName: "DAY 4 : LEGS2 THURSDAY",
      exercises: [
        {
          name: "BARBELL BACK SQUAT",
          sets: 5,
          reps: [8, 8, 8, 8, 8],
          weights: [60, 70, 80, 80, 80],
        },
        {
          name: "MACHINE PRONE HAMSTRING CURL",
          sets: 3,
          reps: [12, 12, 12],
          weights: [50, 55, 55],
        },
        {
          name: "DUMBBELL STANDING CALF RAISE",
          sets: 3,
          reps: [15, 15, 15],
          weights: [20, 20, 20],
        },
        {
          name: "45 DEGREE LEG PRESS",
          sets: 3,
          reps: [12, 12, 12],
          weights: [120, 140, 160],
        },
        {
          name: "SEATED LEG EXTENSION",
          sets: 2,
          reps: [15, 15],
          weights: [40, 45],
        },
      ],
    },
    {
      id: "2",
      date: "25 February 2025",
      dateObj: new Date(2025, 1, 25),
      duration: "55 mins",
      planName: "SEMESTER 2",
      workoutName: "DAY 3 : PUSH2 TUESDAY",
      exercises: [
        {
          name: "INCLINE BENCH PRESS",
          sets: 4,
          reps: [8, 8, 8, 8],
          weights: [60, 65, 70, 70],
        },
        {
          name: "SEATED DUMBBELL PRESS",
          sets: 3,
          reps: [10, 10, 10],
          weights: [20, 22, 24],
        },
        {
          name: "TRICEP PUSHDOWN",
          sets: 3,
          reps: [12, 12, 12],
          weights: [25, 30, 30],
        },
        {
          name: "LATERAL RAISE",
          sets: 3,
          reps: [15, 15, 15],
          weights: [10, 10, 10],
        },
      ],
    },
    {
      id: "8",
      date: "26 February 2025",
      dateObj: new Date(2025, 1, 26),
      duration: "1 hr 10 mins",
      planName: "SEMESTER 2",
      workoutName: "DAY 4 : LEGS2 THURSDAY",
      exercises: [
        {
          name: "BARBELL BACK SQUAT",
          sets: 5,
          reps: [8, 8, 8, 8, 8],
          weights: [60, 70, 80, 80, 80],
        },
        {
          name: "MACHINE PRONE HAMSTRING CURL",
          sets: 3,
          reps: [12, 12, 12],
          weights: [50, 55, 55],
        },
        {
          name: "DUMBBELL STANDING CALF RAISE",
          sets: 3,
          reps: [15, 15, 15],
          weights: [20, 20, 20],
        },
        {
          name: "45 DEGREE LEG PRESS",
          sets: 3,
          reps: [12, 12, 12],
          weights: [120, 140, 160],
        },
        {
          name: "SEATED LEG EXTENSION",
          sets: 2,
          reps: [15, 15],
          weights: [40, 45],
        },
      ],
    },
    // January 2023
    {
      id: "3",
      date: "23 January 2025",
      dateObj: new Date(2025, 0, 23),
      duration: "1 hr 5 mins",
      planName: "SEMESTER 2",
      workoutName: "DAY 2 : PULL1 SUNDAY",
      exercises: [
        {
          name: "DEADLIFT",
          sets: 4,
          reps: [6, 6, 6, 6],
          weights: [100, 120, 130, 130],
        },
        { name: "PULL-UPS", sets: 3, reps: [8, 8, 6], weights: [0, 0, 0] },
        {
          name: "BARBELL ROW",
          sets: 3,
          reps: [10, 10, 10],
          weights: [60, 65, 70],
        },
        {
          name: "BICEP CURL",
          sets: 3,
          reps: [12, 12, 12],
          weights: [15, 17.5, 17.5],
        },
      ],
    },
    {
      id: "4",
      date: "15 January 2025",
      dateObj: new Date(2025, 0, 15),
      duration: "50 mins",
      planName: "SEMESTER 2",
      workoutName: "DAY 1 : PUSH1 FRIDAY",
      exercises: [
        {
          name: "BENCH PRESS",
          sets: 4,
          reps: [8, 8, 8, 8],
          weights: [80, 85, 85, 85],
        },
        {
          name: "OVERHEAD PRESS",
          sets: 3,
          reps: [10, 10, 10],
          weights: [40, 45, 45],
        },
        { name: "DIPS", sets: 3, reps: [12, 12, 10], weights: [0, 0, 0] },
      ],
    },
    // December 2022
    {
      id: "5",
      date: "30 December 2024",
      dateObj: new Date(2024, 11, 30),
      duration: "1 hr",
      planName: "SEMESTER 1",
      workoutName: "FULL BODY",
      exercises: [
        {
          name: "SQUAT",
          sets: 4,
          reps: [10, 10, 10, 10],
          weights: [60, 70, 70, 70],
        },
        { name: "PULL-UPS", sets: 3, reps: [8, 8, 8], weights: [0, 0, 0] },
        {
          name: "ROMANIAN DEADLIFT",
          sets: 3,
          reps: [12, 12, 12],
          weights: [60, 65, 70],
        },
      ],
    },
    {
      id: "6",
      date: "20 November 2024",
      dateObj: new Date(2024, 10, 20),
      duration: "45 mins",
      planName: "SEMESTER 1",
      workoutName: "UPPER BODY",
      exercises: [
        {
          name: "BENCH PRESS",
          sets: 3,
          reps: [10, 10, 10],
          weights: [70, 75, 75],
        },
        {
          name: "BARBELL ROW",
          sets: 3,
          reps: [10, 10, 10],
          weights: [50, 55, 55],
        },
        {
          name: "SHOULDER PRESS",
          sets: 3,
          reps: [10, 10, 8],
          weights: [35, 35, 35],
        },
      ],
    },
    {
      id: "7",
      date: "20 October 2024",
      dateObj: new Date(2024, 9, 20),
      duration: "45 mins",
      planName: "SEMESTER 1",
      workoutName: "UPPER BODY",
      exercises: [
        {
          name: "BENCH PRESS",
          sets: 3,
          reps: [10, 10, 10],
          weights: [70, 75, 75],
        },
        {
          name: "BARBELL ROW",
          sets: 3,
          reps: [10, 10, 10],
          weights: [50, 55, 55],
        },
        {
          name: "SHOULDER PRESS",
          sets: 3,
          reps: [10, 10, 8],
          weights: [35, 35, 35],
        },
      ],
    },
  ];

  return {
    workouts: workouts.slice(0, pageParam * 6),
    nextPage: pageParam + 1,
    hasMore: pageParam * 6 < workouts.length,
  };
};

// Helper to get month name and year
const getMonthAndYear = (date: Date) => {
  return {
    month: date.toLocaleString("default", { month: "long" }),
    year: date.getFullYear(),
  };
};

const History = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableMonths, setAvailableMonths] = useState<
    { month: string; year: number }[]
  >([]);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["workoutHistory"],
      queryFn: fetchWorkoutHistory,
      getNextPageParam: (lastPage) =>
        lastPage.hasMore ? lastPage.nextPage : undefined,
      initialPageParam: 1,
    });

  useEffect(() => {
    if (data) {
      // Extract all unique month/year combinations from the workout data
      const months = new Set<string>();
      data.pages.forEach((page) => {
        page.workouts.forEach((workout) => {
          const { month, year } = getMonthAndYear(workout.dateObj);
          months.add(`${month}-${year}`);
        });
      });

      // Convert to array of objects and sort by date (oldest first)
      const monthArray = Array.from(months)
        .map((monthYear) => {
          const [month, yearStr] = monthYear.split("-");
          return { month, year: parseInt(yearStr) };
        })
        .sort((a, b) => {
          if (a.year !== b.year) return a.year - b.year;

          const monthA = new Date(Date.parse(`${a.month} 1, 2000`)).getMonth();
          const monthB = new Date(Date.parse(`${b.month} 1, 2000`)).getMonth();
          return monthA - monthB;
        });

      setAvailableMonths(monthArray);

      // Set the initial selected date to the latest month in the data or current month
      if (monthArray.length > 0) {
        const latestMonth = monthArray[monthArray.length - 1];
        setSelectedDate(
          new Date(
            latestMonth.year,
            new Date(Date.parse(`${latestMonth.month} 1, 2000`)).getMonth(),
            1
          )
        );
      }
    }
  }, [data]);

  // Filter workouts by selected month and year
  const filteredWorkouts =
    data?.pages.flatMap((page) =>
      page.workouts.filter((workout) => {
        const workoutDate = workout.dateObj;
        return (
          workoutDate.getMonth() === selectedDate.getMonth() &&
          workoutDate.getFullYear() === selectedDate.getFullYear()
        );
      })
    ) || [];

  const goToWorkoutDetails = (workoutId: string) => {
    navigate(`/history/${workoutId}`);
  };

  // Find the current month index for enabling/disabling navigation buttons
  const currentMonthIndex = availableMonths.findIndex(
    (m) =>
      m.month === getMonthAndYear(selectedDate).month &&
      m.year === getMonthAndYear(selectedDate).year
  );

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Workout History</h1>
      </div>

      {/* Month Navigation */}
      <div className="mb-8">
        <div className="text-center mb-2 text-sm text-muted-foreground">
          {availableMonths.length > 0 && selectedDate && (
            <div className="text-lg font-semibold">
              {selectedDate.getFullYear()}
            </div>
          )}
        </div>

        <div className="relative bg-card rounded-lg p-2 border">
          {/* Month tabs */}
          <div className="flex items-center justify-between px-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (currentMonthIndex > 0) {
                  const prevMonth = availableMonths[currentMonthIndex - 1];
                  setSelectedDate(
                    new Date(
                      prevMonth.year,
                      new Date(
                        Date.parse(`${prevMonth.month} 1, 2000`)
                      ).getMonth(),
                      1
                    )
                  );
                }
              }}
              disabled={currentMonthIndex <= 0}
              className="absolute left-2 z-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <ScrollArea className="w-full px-8">
              <div className="flex justify-center space-x-2 min-w-full">
                {availableMonths.map((item, index) => (
                  <Button
                    key={`${item.month}-${item.year}`}
                    variant={currentMonthIndex === index ? "default" : "ghost"}
                    className="px-4 min-w-24"
                    onClick={() => {
                      setSelectedDate(
                        new Date(
                          item.year,
                          new Date(
                            Date.parse(`${item.month} 1, 2000`)
                          ).getMonth(),
                          1
                        )
                      );
                    }}
                  >
                    {item.month}
                  </Button>
                ))}
              </div>
            </ScrollArea>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (currentMonthIndex < availableMonths.length - 1) {
                  const nextMonth = availableMonths[currentMonthIndex + 1];
                  setSelectedDate(
                    new Date(
                      nextMonth.year,
                      new Date(
                        Date.parse(`${nextMonth.month} 1, 2000`)
                      ).getMonth(),
                      1
                    )
                  );
                }
              }}
              disabled={currentMonthIndex >= availableMonths.length - 1}
              className="absolute right-2 z-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {status === "pending" ? (
          <p className="text-center py-8 text-muted-foreground">
            Loading workouts...
          </p>
        ) : status === "error" ? (
          <p className="text-center py-8 text-destructive">
            Error loading workout history
          </p>
        ) : filteredWorkouts.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-lg border">
            <p className="text-muted-foreground">
              No workouts found for this month
            </p>
            <Button
              variant="link"
              onClick={() => {
                if (availableMonths.length > 0) {
                  const latestMonth =
                    availableMonths[availableMonths.length - 1];
                  setSelectedDate(
                    new Date(
                      latestMonth.year,
                      new Date(
                        Date.parse(`${latestMonth.month} 1, 2000`)
                      ).getMonth(),
                      1
                    )
                  );
                }
              }}
              className="mt-2"
            >
              Go to latest workouts
            </Button>
          </div>
        ) : (
          <>
            {filteredWorkouts.map((workout) => (
              <Card
                key={workout.id}
                className="p-4 hover:shadow-lg transition-all cursor-pointer bg-card hover:bg-accent/50"
                onClick={() => goToWorkoutDetails(workout.id)}
              >
                <CardContent className="p-0">
                  <div className="mb-2">
                    <div className="text-lg font-bold text-foreground">
                      {workout.planName}
                    </div>
                    <div className="text-base font-semibold text-foreground">
                      {workout.workoutName}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-1 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{workout.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{workout.duration}</span>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-2" />

                  <div className="mt-3">
                    <div className="flex justify-between text-sm font-medium text-foreground mb-2">
                      <div>EXERCISE</div>
                      <div>SETS</div>
                    </div>

                    {workout.exercises.map((exercise, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 text-sm"
                      >
                        <div className="font-medium text-foreground">
                          {exercise.name}
                        </div>
                        <div className="text-xl font-bold text-primary">
                          {exercise.sets}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {hasNextPage && filteredWorkouts.length < 3 && (
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
                variant="outline"
                className="w-full mt-4"
              >
                {isFetchingNextPage ? "Loading more..." : "Load More Workouts"}
                {!isFetchingNextPage && <ArrowDown className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default History;
