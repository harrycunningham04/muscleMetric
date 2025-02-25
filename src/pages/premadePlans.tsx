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
import { muscleGroups, findMatchingWorkouts } from "../data/premadeWorkout";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calendar, Target } from "lucide-react";

type Gender = "male" | "female";

const PreMadePlans = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [gender, setGender] = useState<Gender>("male");
  const [daysPerWeek, setDaysPerWeek] = useState<string>("3");
  const [selectedMuscles, setSelectedMuscles] = useState<string[]>([]);

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
    if (currentStep === 3) {
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

    const matchingWorkouts = findMatchingWorkouts(
      selectedMuscles,
      parseInt(daysPerWeek),
      gender
    );
    const selectedWorkout = matchingWorkouts[0]; 

    // Log the entire pre-made plan
    console.log("Pre-made Plan:", {
      selectedWorkout,
      gender,
      daysPerWeek,
      selectedMuscles,
    });

    navigate("/plans/new", {
      state: {
        preMadeWorkout: selectedWorkout,
        selections: { gender, daysPerWeek, selectedMuscles },
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
      icon: Target,
      title: "Select your focus areas",
      description: "Choose up to 3 muscle groups you want to prioritize",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 mt-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Create Your Custom Plan
          </h1>
          <p className="text-lg text-muted-foreground">
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
              <div className="flex justify-center space-x-16">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative w-12 h-12 flex items-center justify-center rounded-full ${
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
                          className={`absolute -right-16 top-1/2 h-[2px] w-16 ${
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
            </CardHeader>
            <CardContent className="pt-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-2">
                      {steps[currentStep - 1].title}
                    </h2>
                    <p className="text-muted-foreground">
                      {steps[currentStep - 1].description}
                    </p>
                  </div>

                  {currentStep === 1 && (
                    <RadioGroup
                      value={gender}
                      onValueChange={(value: Gender) => setGender(value)}
                      className="flex gap-4 justify-center"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="text-lg">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="text-lg">
                          Female
                        </Label>
                      </div>
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
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {muscleGroups.map((muscle) => (
                          <motion.div
                            key={muscle}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant={
                                selectedMuscles.includes(muscle)
                                  ? "default"
                                  : "outline"
                              }
                              onClick={() => handleMuscleSelect(muscle)}
                              className={`w-full h-full min-h-[60px] ${
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
                    <Button onClick={handleNext} className="min-w-[100px]">
                      {currentStep === 3 ? "Create Plan" : "Next"}
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

export default PreMadePlans;
