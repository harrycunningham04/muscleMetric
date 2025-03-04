import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  prioritizeMusclesForGender,
  getExercisesForDay,
  generateGoals,
  MuscleGroupArray,
} from "@/data/premadeWorkout";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dumbbell,
  Calendar,
  Target,
  User,
  Clock,
  LayoutGrid,
} from "lucide-react";

type Gender = "male" | "female";
type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type WorkoutDuration = "30" | "45" | "60" | "90";
type Equipment = "Bodyweight" | "Resistance Bands" | "Dumbbells" | "gym";

const CustomPlans = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState<Gender>("male");
  const [daysPerWeek, setDaysPerWeek] = useState<string>("3");
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);
  const [experience, setExperience] = useState<ExperienceLevel>("beginner");
  const [workoutDuration, setWorkoutDuration] = useState<WorkoutDuration>("45");
  const [equipment, setEquipment] = useState<Equipment>("gym");

  const handleMuscleSelect = (muscle: string) => {
    setSelectedMuscles((prev) => {
      if (prev.includes(muscle)) {
        return prev.filter((m) => m !== muscle);
      }
      if (prev.length >= 3) {
        toast.error("You can only select up to 3 muscle groups");
        return prev;
      }
      return [...prev, muscle];
    });
  };

  const handleNext = () => {
    if (currentStep === 6) {
      handleSubmit();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (selectedMuscles.length !== 3) {
      toast.error("Please select exactly 3 muscle groups");
      return;
    }

    const days = parseInt(daysPerWeek);

    const prioritizedMuscles = prioritizeMusclesForGender(
      selectedMuscles,
      gender
    );
    console.log("Prioritized Muscles:", prioritizedMuscles);

    const workoutDays = Array.from({ length: days }).map((_, dayIndex) => {
      const exercises = getExercisesForDay(
        prioritizedMuscles,
        experience,
        workoutDuration,
        equipment
      );
      console.log(`Exercises for Day ${dayIndex + 1}:`, exercises);

      return {
        name: `Day ${dayIndex + 1}`,
        type: "Strength",
        exercises,
      };
    });

    const allExercises = workoutDays.flatMap((day) => day.exercises);
    console.log("All Selected Exercises:", allExercises);

    const goals = generateGoals(prioritizedMuscles, allExercises);
    console.log("Generated Goals:", goals);

    const generatedWorkout = {
      id: "custom-workout-" + Date.now(),
      title: "Custom Workout Plan",
      description: `A ${daysPerWeek}-day workout plan targeting ${selectedMuscles.join(
        ", "
      )}`,
      targetMuscles: selectedMuscles,
      daysPerWeek: days,
      workoutDays,
      recommendedWeeks: 4,
      goals,
    };

    console.log("Generated Workout Plan:", generatedWorkout);

    navigate("/plans/new", {
      state: {
        preMadeWorkout: generatedWorkout,
        selections: {
          gender,
          daysPerWeek,
          selectedMuscles,
          experience,
          workoutDuration,
        },
      },
    });
  };

  const steps = [
    {
      icon: Dumbbell,
      title: "What's your gender?",
      description: "This helps us personalize your workout plan",
    },
    {
      icon: Calendar,
      title: "How often would you like to work out?",
      description:
        "Choose the number of days you can commit to working out each week",
    },
    {
      icon: User,
      title: "What's your experience level?",
      description: "Choose your fitness experience level",
    },
    {
      icon: Clock,
      title: "Preferred workout duration",
      description: "Select how long you want your workouts to be",
    },
    {
      icon: LayoutGrid,
      title: "What equipment do you have access to?",
      description: "Choose the equipment available for your workouts",
    },
    {
      icon: Target,
      title: "Select your focus areas",
      description: "Choose up to 3 muscle groups you want to prioritize",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 mt-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Create Your Custom Plan
          </h1>
          <p className="text-base md:text-lg text-muted-foreground">
            Follow these steps to create a personalized workout plan tailored to
            your goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-lg border-t-4 border-t-primary">
            <CardHeader className="pb-0">
              {/* Progress indicator - Hidden on small screens */}
              <div className="hidden md:flex justify-center space-x-8 md:space-x-12">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full ${
                        index + 1 <= currentStep
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Icon className="w-5 h-5" />
                      {index < steps.length - 1 && (
                        <motion.div
                          className={`absolute -right-8 md:-right-12 top-1/2 h-[2px] w-8 md:w-12 ${
                            index + 1 < currentStep ? "bg-primary" : "bg-muted"
                          }`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
              {/* Mobile step indicator */}
              <div className="flex md:hidden justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">
                  Step {currentStep} of {steps.length}
                </span>
                <div className="flex gap-1">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-6 h-1 rounded-full ${
                        idx + 1 <= currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                      {steps[currentStep - 1].title}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {steps[currentStep - 1].description}
                    </p>
                  </div>

                  {currentStep === 1 && (
                    <RadioGroup
                      value={gender}
                      onValueChange={(value: Gender) => setGender(value)}
                      className="flex gap-4 justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 max-w-[200px]"
                      >
                        <div
                          className={`p-4 rounded-lg border-2 ${
                            gender === "male"
                              ? "border-primary bg-primary/5"
                              : "border-muted"
                          } cursor-pointer transition-all`}
                          onClick={() => setGender("male")}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="male" id="male" />
                            <Label
                              htmlFor="male"
                              className="text-lg cursor-pointer"
                            >
                              Male
                            </Label>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Optimized for male body types
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 max-w-[200px]"
                      >
                        <div
                          className={`p-4 rounded-lg border-2 ${
                            gender === "female"
                              ? "border-primary bg-primary/5"
                              : "border-muted"
                          } cursor-pointer transition-all`}
                          onClick={() => setGender("female")}
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value="female" id="female" />
                            <Label
                              htmlFor="female"
                              className="text-lg cursor-pointer"
                            >
                              Female
                            </Label>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Optimized for female body types
                          </div>
                        </div>
                      </motion.div>
                    </RadioGroup>
                  )}

                  {currentStep === 2 && (
                    <div className="max-w-xs mx-auto">
                      <Select
                        value={daysPerWeek}
                        onValueChange={setDaysPerWeek}
                      >
                        <SelectTrigger className="w-full text-lg">
                          <SelectValue placeholder="Select days per week" />
                        </SelectTrigger>
                        <SelectContent>
                          {[2, 3, 4, 5, 6].map((days) => (
                            <SelectItem key={days} value={days.toString()}>
                              {days} days per week
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="grid grid-cols-5 gap-2 mt-4">
                        {[2, 3, 4, 5, 6].map((days) => (
                          <Button
                            key={days}
                            type="button"
                            variant={
                              daysPerWeek === days.toString()
                                ? "default"
                                : "outline"
                            }
                            onClick={() => setDaysPerWeek(days.toString())}
                            className="w-full"
                          >
                            {days}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="max-w-md mx-auto grid gap-4">
                      {["beginner", "intermediate", "advanced"].map((level) => (
                        <motion.div
                          key={level}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className={`p-4 rounded-lg border-2 ${
                              experience === level
                                ? "border-primary bg-primary/5"
                                : "border-muted"
                            } cursor-pointer transition-all`}
                            onClick={() =>
                              setExperience(level as ExperienceLevel)
                            }
                          >
                            <RadioGroup
                              value={experience}
                              onValueChange={(value) =>
                                setExperience(value as ExperienceLevel)
                              }
                              className="flex items-center gap-3"
                            >
                              <RadioGroupItem value={level} id={level} />
                              <div className="flex-1">
                                <Label
                                  htmlFor={level}
                                  className="text-lg capitalize cursor-pointer"
                                >
                                  {level}
                                </Label>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {level === "beginner"
                                    ? "New to fitness or returning after a long break"
                                    : level === "intermediate"
                                    ? "Consistent training for 6+ months"
                                    : "Several years of consistent training"}
                                </p>
                              </div>
                            </RadioGroup>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="max-w-md mx-auto">
                      <div className="grid grid-cols-2 gap-4">
                        {["30", "45", "60", "90"].map((duration) => (
                          <motion.div
                            key={duration}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <div
                              className={`p-4 rounded-lg border-2 ${
                                workoutDuration === duration
                                  ? "border-primary bg-primary/5"
                                  : "border-muted"
                              } cursor-pointer transition-all h-full flex flex-col justify-center items-center`}
                              onClick={() =>
                                setWorkoutDuration(duration as WorkoutDuration)
                              }
                            >
                              <Clock
                                className={`h-8 w-8 mb-2 ${
                                  workoutDuration === duration
                                    ? "text-primary"
                                    : "text-muted-foreground"
                                }`}
                              />
                              <p className="font-medium text-lg">
                                {duration} min
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <RadioGroup
                      value={equipment}
                      onValueChange={(value: Equipment) => setEquipment(value)}
                      className="flex flex-col gap-4 max-w-md mx-auto"
                    >
                      {[
                        {
                          value: "bodyweight",
                          title: "Bodyweight Only",
                          description: "No equipment needed",
                        },
                        {
                          value: "bands",
                          title: "Resistance Bands",
                          description: "Basic home equipment",
                        },
                        {
                          value: "dumbbells",
                          title: "Dumbbells",
                          description: "Dumbbell only workouts",
                        },
                        {
                          value: "gym",
                          title: "Full Gym Access",
                          description: "Access to weights and machines",
                        },
                      ].map((item) => (
                        <motion.div
                          key={item.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div
                            className={`flex items-center p-4 border-2 rounded-md cursor-pointer transition-all ${
                              equipment === item.value
                                ? "border-primary bg-primary/5"
                                : "border-muted"
                            }`}
                            onClick={() =>
                              setEquipment(item.value as Equipment)
                            }
                          >
                            <RadioGroupItem
                              value={item.value}
                              id={item.value}
                              className="mr-3"
                            />
                            <Label
                              htmlFor={item.value}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {item.description}
                              </div>
                            </Label>
                          </div>
                        </motion.div>
                      ))}
                    </RadioGroup>
                  )}

                  {currentStep === 6 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {MuscleGroupArray.map((muscle) => (
                          <motion.div
                            key={muscle}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              type="button"
                              variant={
                                selectedMuscles.includes(muscle)
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() => handleMuscleSelect(muscle)}
                              className={`w-full h-full min-h-[56px] ${
                                selectedMuscles.includes(muscle)
                                  ? "bg-primary text-primary-foreground"
                                  : ""
                              }`}
                              disabled={
                                selectedMuscles.length >= 3 &&
                                !selectedMuscles.includes(muscle)
                              }
                            >
                              {muscle}
                            </Button>
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Selected: {selectedMuscles.length}/3
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-center space-x-4 mt-8">
                    {currentStep > 1 && (
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        className="min-w-[100px]"
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      onClick={handleNext}
                      className="min-w-[100px]"
                      disabled={
                        currentStep === 6 && selectedMuscles.length !== 3
                      }
                    >
                      {currentStep === 6 ? "Create Plan" : "Next"}
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomPlans;
