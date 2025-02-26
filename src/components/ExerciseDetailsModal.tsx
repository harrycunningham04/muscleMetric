import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  interface ExerciseDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    exercise: {
      name: string;
      form: string;
      equipment: string[];
      alternatives: string[];
    };
  }
  
  export const ExerciseDetailsModal = ({
    isOpen,
    onClose,
    exercise,
  }: ExerciseDetailsModalProps) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">{exercise.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Correct Form</h3>
              <p className="text-muted-foreground">{exercise.form}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Equipment Required</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {exercise.equipment.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Alternative Exercises</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {exercise.alternatives.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };