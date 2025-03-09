import { useState, useEffect } from "react";
import { User, UserPlus, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSettings } from "@/context/SettingsContext";
import {
  mainLifts,
  ageGroups,
  calculateOneRM,
  calculateStrengthLevel,
  getUserAgeGroup,
  lbsToKg,
} from "@/data/strengthStandards";

export const StrengthCalculator = () => {
  const [selectedExercise, setSelectedExercise] = useState("Bench Press");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [calculatedOneRM, setCalculatedOneRM] = useState<number | null>(null);
  const [percentile, setPercentile] = useState<number | null>(null);
  const [strengthLevel, setStrengthLevel] = useState<string | null>(null);
  const { weightUnit, formatWeight } = useSettings();
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);

  // Set age range when age is entered
  useEffect(() => {
    if (age) {
      const ageNum = parseInt(age);
      const ageGroup = ageGroups.find(
        (group) => ageNum >= group.min && ageNum <= group.max
      );
      if (ageGroup) {
        setSelectedAgeRange(ageGroup.range);
      }
      console.log(selectedAgeRange);
    }
  }, [age]);

  const handleCalculate = () => {
    const weightNum = parseFloat(weight);
    const repsNum = parseInt(reps);
    const ageNum = parseInt(age);

    if (
      isNaN(weightNum) ||
      isNaN(repsNum) ||
      repsNum <= 0 ||
      isNaN(ageNum) ||
      ageNum < 15
    ) {
      return;
    }

    // Use weight directly in calculation - no need to convert here as our 1RM formula is unit-agnostic
    const oneRM = calculateOneRM(weightNum, repsNum);
    setCalculatedOneRM(oneRM);

    // Calculate strength level and percentile
    const oneRMInKg = weightUnit === "lbs" ? lbsToKg(oneRM) : oneRM;
    const result = calculateStrengthLevel(
      oneRMInKg,
      ageNum,
      gender,
      selectedExercise
    );
    setStrengthLevel(result.level);
    setPercentile(result.percentile);
  };

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4 p-1">
        <div>
          <Label htmlFor="gender-select">Gender</Label>
          <RadioGroup
            value={gender}
            onValueChange={(value) => setGender(value as "male" | "female")}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="flex items-center gap-1">
                <User className="h-4 w-4" /> Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="flex items-center gap-1">
                <UserPlus className="h-4 w-4" /> Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="exercise-select">Select Exercise</Label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {mainLifts.map((lift) => (
              <Button
                key={lift}
                variant={selectedExercise === lift ? "default" : "outline"}
                onClick={() => setSelectedExercise(lift)}
                className="w-full justify-center"
              >
                {lift}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="weight">Weight ({weightUnit})</Label>
            <Input
              id="weight"
              type="number"
              placeholder={`Weight in ${weightUnit}`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="reps">Reps</Label>
            <Input
              id="reps"
              type="number"
              placeholder="Reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate
        </Button>

        {calculatedOneRM !== null && percentile !== null && (
          <div className="space-y-4 mt-6 p-4 bg-muted rounded-lg">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Estimated One-Rep Max
              </p>
              <p className="text-2xl font-bold">
                {formatWeight(calculatedOneRM)}
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="font-medium flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-amber-500" />
                  Percentile Ranking
                </p>
                <p className="text-sm font-bold">{percentile}%</p>
              </div>
              <Progress value={percentile} className="h-2" />
              <p className="text-sm text-muted-foreground">
                You're stronger than {percentile}% of{" "}
                {gender === "male" ? "men" : "women"} in your age group (
                {getUserAgeGroup(parseInt(age))})
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium mb-2">
                Strength Classification
              </p>
              <div className="grid grid-cols-5 gap-1 text-center text-xs">
                {[
                  "Beginner",
                  "Novice",
                  "Intermediate",
                  "Advanced",
                  "Elite",
                ].map((level) => (
                  <div
                    key={level}
                    className={`py-1 rounded ${
                      strengthLevel === level
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-accent text-muted-foreground"
                    }`}
                  >
                    {level}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};
