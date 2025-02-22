import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, GripVertical } from "lucide-react";
import { useState } from "react";
import { ExerciseSelectionModal } from "./ExerciseSelectionModal";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
}

interface WorkoutDayProps {
  day: {
    id: string;
    name: string;
    exercises: Exercise[];
  };
  onUpdate: (dayId: string, exercises: Exercise[]) => void;
}

export const WorkoutDayEditor = ({ day, onUpdate }: WorkoutDayProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState(day.name);

  const handleAddExercise = () => {
    setIsModalOpen(true);
  };

  const handleExerciseSelect = (selectedExercises: Array<{ id: string; name: string }>) => {
    const newExercises = selectedExercises.map(exercise => ({
      id: exercise.id,
      name: exercise.name,
      sets: 3,
      reps: 10,
    }));
    onUpdate(day.id, [...day.exercises, ...newExercises]);
  };

  const handleRemoveExercise = (exerciseId: string) => {
    onUpdate(
      day.id,
      day.exercises.filter((ex) => ex.id !== exerciseId)
    );
  };

  const handleExerciseChange = (exerciseId: string, field: keyof Exercise, value: string | number) => {
    onUpdate(
      day.id,
      day.exercises.map((ex) =>
        ex.id === exerciseId ? { ...ex, [field]: value } : ex
      )
    );
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(day.exercises);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onUpdate(day.id, items);
  };

  return (
    <div className="border-b pb-6 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-4">
        <Input
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          className="font-medium w-auto"
        />
        <Button variant="outline" onClick={handleAddExercise}>
          <Plus className="w-4 h-4 mr-2" />
          Add Exercise
        </Button>
      </div>
      
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={day.id}>
          {(provided) => (
            <div 
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {day.exercises.map((exercise, index) => (
                <Draggable 
                  key={exercise.id} 
                  draggableId={exercise.id} 
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="grid grid-cols-[auto_1fr_auto_auto] gap-4 items-center bg-white p-3 rounded-lg border"
                    >
                      <div {...provided.dragHandleProps}>
                        <GripVertical className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        <img 
                          src="/placeholder.svg" 
                          alt={exercise.name} 
                          className="w-10 h-10 rounded object-cover"
                        />
                        <span>{exercise.name}</span>
                      </div>
                      <Input
                        type="number"
                        placeholder="Sets"
                        value={exercise.sets}
                        onChange={(e) =>
                          handleExerciseChange(exercise.id, "sets", parseInt(e.target.value))
                        }
                        className="w-20"
                      />
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          placeholder="Reps"
                          value={exercise.reps}
                          onChange={(e) =>
                            handleExerciseChange(exercise.id, "reps", parseInt(e.target.value))
                          }
                          className="w-20"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveExercise(exercise.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <ExerciseSelectionModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        onSelect={handleExerciseSelect}
        selectedExercises={[]}
      />
    </div>
  );
};