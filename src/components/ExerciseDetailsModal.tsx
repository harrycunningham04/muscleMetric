import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dumbbell, List, AlignLeft } from "lucide-react";

interface ExerciseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: {
    id: string;
    name: string;
    sets: number;
    reps: number[];
    weights: number[];
    previousWeight: string;
    bodyPart: string;
    equipment: string;
    setupDescription: string;
    repDescription: string;
    type: "compound" | "isolation";
    user: "beginner" | "intermediate" | "advanced";
  };
}

export const ExerciseDetailsModal = ({
  isOpen,
  onClose,
  exercise,
}: ExerciseDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-gradient-to-br from-card to-background border-border/30 shadow-lg overflow-auto max-h-[90vh]">
        <DialogHeader className="mb-2">
          <DialogTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/90">
            {exercise.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-2 overflow-y-auto max-h-[70vh] pr-4">
          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <AlignLeft className="h-4 w-4 mr-2 text-primary/80" />
              Setup Description
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {exercise.setupDescription}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <Dumbbell className="h-4 w-4 mr-2 text-primary/80" />
              Reps & Sets
            </h3>
            <p className="text-muted-foreground text-sm">
              Sets: {exercise.sets} | Reps per Set: {exercise.reps}
            </p>
            <p className="text-muted-foreground text-sm">
              Previous Weight: {exercise.previousWeight}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <List className="h-4 w-4 mr-2 text-primary/80" />
              Equipment Required
            </h3>
            <p className="text-muted-foreground text-sm">
              {exercise.equipment}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <AlignLeft className="h-4 w-4 mr-2 text-primary/80" />
              Rep Description
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {exercise.repDescription}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <AlignLeft className="h-4 w-4 mr-2 text-primary/80" />
              Body Part Targeted
            </h3>
            <p className="text-muted-foreground text-sm">{exercise.bodyPart}</p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-3 flex items-center text-foreground">
              <Dumbbell className="h-4 w-4 mr-2 text-primary/80" />
              Type & User Level
            </h3>
            <p className="text-muted-foreground text-sm">
              Type: {exercise.type} | User Level: {exercise.user}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
