import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, UserPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSettings } from "@/context/SettingsContext";
import {
  mainLifts,
  ageGroups,
  getStrengthStandards,
  kgToLbs,
} from "@/data/StrengthStandards";

export const StrengthStandards = () => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [selectedAgeRange, setSelectedAgeRange] = useState<string | null>(null);
  const { weightUnit } = useSettings();

  // Convert weight values for display based on user's preferred unit
  const displayWeight = (weight: number) => {
    return weightUnit === "kg" ? `${weight} kg` : `${kgToLbs(weight)} lbs`;
  };

  // Get strength standards for display - filtered by age range and gender
  const getFilteredStrengthStandards = () => {
    return mainLifts.map((exercise) => {
      // Select data based on gender and exercise
      const genderData = getStrengthStandards(exercise, gender);

      let filteredData = [];

      // Filter by age range if selected
      if (selectedAgeRange && selectedAgeRange in genderData) {
        filteredData.push({
          age: selectedAgeRange,
          data: genderData[selectedAgeRange as keyof typeof genderData],
        });
      } else {
        // Otherwise show all age ranges
        for (const [ageRange, data] of Object.entries(genderData)) {
          filteredData.push({
            age: ageRange,
            data: data,
          });
        }
      }

      return {
        exercise,
        data: filteredData,
      };
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="standards-gender">Gender</Label>
          <RadioGroup
            value={gender}
            onValueChange={(value) => setGender(value as "male" | "female")}
            className="flex flex-col space-y-2 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="standards-male" />
              <Label
                htmlFor="standards-male"
                className="flex items-center gap-1"
              >
                <User className="h-4 w-4" /> Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="standards-female" />
              <Label
                htmlFor="standards-female"
                className="flex items-center gap-1"
              >
                <UserPlus className="h-4 w-4" /> Female
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="age-range">Filter by Age Range</Label>
          <Select
            value={selectedAgeRange ?? "all"} // Default to "all" instead of ""
            onValueChange={(value) =>
              setSelectedAgeRange(value === "all" ? null : value)
            }
          >
            <SelectTrigger id="age-range">
              <SelectValue placeholder="All Age Groups" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Age Groups</SelectItem>
              {ageGroups.map((group) => (
                <SelectItem key={group.range} value={group.range}>
                  {group.range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-6 text-center">
          {getFilteredStrengthStandards().map(({ exercise, data }) => (
            <div key={exercise} className="space-y-2">
              <h3 className="font-bold text-lg">{exercise}</h3>
              <div className="text-sm">
                {data.map((ageData) => (
                  <div key={ageData.age} className="mb-4">
                    <h4 className="font-medium text-primary">
                      {ageData.age} age group
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-1">
                      <div className="font-medium">Beginner</div>
                      <div>{displayWeight(ageData.data.beginner)}</div>

                      <div className="font-medium">Novice</div>
                      <div>{displayWeight(ageData.data.novice)}</div>

                      <div className="font-medium">Intermediate</div>
                      <div>{displayWeight(ageData.data.intermediate)}</div>

                      <div className="font-medium">Advanced</div>
                      <div>{displayWeight(ageData.data.advanced)}</div>

                      <div className="font-medium">Elite</div>
                      <div>{displayWeight(ageData.data.elite)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground mt-4">
            Note: These values represent estimated one-rep maximums for each
            strength level.
          </p>
        </div>
      </ScrollArea>
    </>
  );
};
