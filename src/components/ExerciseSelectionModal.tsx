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
import { Search, Dumbbell, ChevronRight } from "lucide-react";
import { useState } from "react";

const bodyParts = [
  { id: "chest", name: "Chest", icon: Dumbbell },
  { id: "back", name: "Back", icon: Dumbbell },
  { id: "legs", name: "Legs", icon: Dumbbell },
  { id: "arms", name: "Arms", icon: Dumbbell },
  { id: "core", name: "Core", icon: Dumbbell },
  { id: "shoulders", name: "Shoulders", icon: Dumbbell },
];

const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

interface Exercise {
  id: string;
  name: string;
  bodyPart: string;
  equipment?: string;
}

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
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [localSelectedExercises, setLocalSelectedExercises] = useState<Exercise[]>(selectedExercises);
  const [lastFilter, setLastFilter] = useState<'search' | 'bodyPart' | 'letter' | null>(null);

  // Mock exercises - replace with your actual exercise data
  const exercises: Exercise[] = [
    { id: "1", name: "Bench Press", bodyPart: "chest" },
    { id: "2", name: "Deadlift", bodyPart: "back" },
    { id: "3", name: "Squats", bodyPart: "legs" },
    { id: "4", name: "Bicep Curls", bodyPart: "arms" },
    { id: "5", name: "Shoulder Press", bodyPart: "shoulders" },
    { id: "6", name: "Crunches", bodyPart: "core" },
    // Add more exercises as needed
  ];

  const handleExerciseToggle = (exercise: Exercise) => {
    setLocalSelectedExercises((prev) =>
      prev.some((e) => e.id === exercise.id)
        ? prev.filter((e) => e.id !== exercise.id)
        : [...prev, exercise]
    );
  };

  const handleBodyPartSelect = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    setLastFilter('bodyPart');
    setSelectedLetter(null);
    setSearchTerm("");
  };

  const handleLetterSelect = (letter: string) => {
    setSelectedLetter(letter);
    setLastFilter('letter');
    setSelectedBodyPart(null);
    setSearchTerm("");
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    if (value) {
      setLastFilter('search');
      setSelectedBodyPart(null);
      setSelectedLetter(null);
    } else {
      setLastFilter(null);
    }
  };

  const getFilteredExercises = () => {
    switch (lastFilter) {
      case 'search':
        return exercises.filter(exercise =>
          exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      case 'bodyPart':
        return exercises.filter(exercise =>
          exercise.bodyPart === selectedBodyPart
        );
      case 'letter':
        return exercises.filter(exercise =>
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
                      localSelectedExercises.some((e) => e.id === exercise.id) && "bg-accent"
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