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
import { exercises, Exercise } from "@/data/Exercise";

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
  onSelect: (exercises: Exercise[]) => void;
  selectedExercises?: Exercise[];
}

export const ExerciseSelectionModal = ({
  open,
  onOpenChange,
  onSelect,
  selectedExercises = [],
}: ExerciseSelectionModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null); // Explicitly type this state
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null); // Explicitly type this state
  const [localSelectedExercises, setLocalSelectedExercises] =
    useState<Exercise[]>(selectedExercises);
  const [lastFilter, setLastFilter] = useState<
    "search" | "bodyPart" | "letter" | null
  >(null);

  const handleExerciseToggle = (exercise: Exercise) => {
    setLocalSelectedExercises((prev) =>
      prev.some((e) => e.id === exercise.id)
        ? prev.filter((e) => e.id !== exercise.id)
        : [...prev, exercise]
    );
  };

  const handleBodyPartSelect = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart); // No issue now
    setLastFilter("bodyPart");
    setSelectedLetter(null);
    setSearchTerm("");
  };

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter); // No issue now
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
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Select Exercises</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex gap-4 min-h-0">
          {/* Left Sidebar - Body Parts */}
          <div className="w-48 border-r">
            <ScrollArea className="h-full">
              {bodyParts.map((part) => (
                <Button
                  key={part.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2",
                    selectedBodyPart === part.id && "bg-accent"
                  )}
                  onClick={() => handleBodyPartSelect(part.id)}
                >
                  <part.icon className="h-4 w-4" />
                  {part.name}
                </Button>
              ))}
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

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>
            Add Selected ({localSelectedExercises.length})
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
