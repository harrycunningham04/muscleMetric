import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaDumbbell, FaRegHdd } from "react-icons/fa";
import {
  GiChest,
  GiMuscleUp,
  GiLeg,
  GiHammerDrop,
  GiPlanks,
} from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

// Import the exercises data
import { exercises, Exercises } from "@/data/Exercise";
import React from "react";

interface BodyPart {
  id: string;
  name: string;
  icon: React.ElementType; // Ensure the icon is a React component type
}

const bodyParts: BodyPart[] = [
  { id: "chest", name: "Chest", icon: GiChest },
  { id: "back", name: "Back", icon: GiMuscleUp },
  { id: "quads", name: "Quads", icon: GiLeg },
  { id: "hamstrings", name: "Hamstring", icon: GiHammerDrop },
  { id: "glutes", name: "Glutes", icon: FaDumbbell },
  { id: "calves", name: "Calves", icon: FaRegHdd },
  { id: "biceps", name: "Biceps", icon: FaDumbbell },
  { id: "triceps", name: "Triceps", icon: FaDumbbell },
  { id: "core", name: "Core", icon: GiPlanks },
  { id: "shoulders", name: "Shoulders", icon: IoIosPeople },
];

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

interface ExerciseSelectionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (exercises: Exercises[]) => void;
  selectedExercises?: Exercises[];
}

export const ExerciseSelectionModal = ({
  open,
  onOpenChange,
  onSelect,
  selectedExercises = [],
}: ExerciseSelectionModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [localSelectedExercises, setLocalSelectedExercises] =
    useState<Exercises[]>(selectedExercises);
  const [lastFilter, setLastFilter] = useState<
    "search" | "bodyPart" | "letter" | null
  >(null);

  const handleExerciseToggle = (exercise: Exercises) => {
    setLocalSelectedExercises((prev) =>
      prev.some((e) => e.id === exercise.id)
        ? prev.filter((e) => e.id !== exercise.id)
        : [...prev, exercise]
    );
  };

  const handleBodyPartSelect = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    setLastFilter("bodyPart");
    setSelectedLetter(null);
    setSearchTerm("");
  };

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter);
    setLastFilter("letter");
    setSelectedBodyPart(null);
    setSearchTerm("");
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value) {
      setLastFilter("search");
      setSelectedBodyPart(null);
      setSelectedLetter(null);
    } else {
      setLastFilter(null);
    }
  };

  const getFilteredExercises = () => {
    switch (lastFilter) {
      case "search":
        return exercises.filter((exercise) =>
          exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case "bodyPart":
        return exercises.filter(
          (exercise) => exercise.bodyPart === selectedBodyPart
        );
      case "letter":
        return exercises.filter((exercise) =>
          exercise.name.startsWith(selectedLetter!)
        );
      default:
        return exercises;
    }
  };

  const handleConfirm = () => {
    onSelect(localSelectedExercises);
    setLocalSelectedExercises([]);
    onOpenChange(false);
  };

  // New function to clear all filters
  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedBodyPart(null);
    setSelectedLetter(null);
    setLastFilter(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Exercises</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex gap-4 min-h-0">
          <div className="w-48 border-r h-full flex flex-col">
            <ScrollArea className="flex-1">
              <div className="flex flex-col h-full gap-2">
                {bodyParts.map((part) => (
                  <Button
                    key={part.id}
                    variant="ghost"
                    className={cn(
                      "flex-1 w-full justify-start gap-2",
                      selectedBodyPart === part.id && "bg-accent"
                    )}
                    onClick={() => handleBodyPartSelect(part.id)}
                  >
                    {React.createElement(part.icon, { className: "h-6 w-6" })}
                    {part.name}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search exercises..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="grid grid-cols-2 gap-2">
                {getFilteredExercises().map((exercise) => (
                  <Button
                    key={exercise.id}
                    variant="outline"
                    className={cn(
                      "justify-start",
                      localSelectedExercises.some(
                        (e) => e.id === exercise.id
                      ) && "bg-accent"
                    )}
                    onClick={() => handleExerciseToggle(exercise)}
                  >
                    {exercise.name}
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Right Sidebar - Alphabet */}
          <div className="w-8 flex flex-col items-center border-l">
            <ScrollArea className="h-full">
              {alphabet.map((letter) => (
                <Button
                  key={letter}
                  variant="ghost"
                  className={cn(
                    "w-full p-0 h-8",
                    selectedLetter === letter && "bg-accent"
                  )}
                  onClick={() => handleLetterSelect(letter)}
                >
                  {letter}
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-4">
          <div>
            {" "}
            <Button variant="outline" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                onOpenChange(false);
                setLocalSelectedExercises([]);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleConfirm}>
              Add Selected ({localSelectedExercises.length})
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
