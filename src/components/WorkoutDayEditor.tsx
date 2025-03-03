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

  const handleExerciseSelect = (
    selectedExercises: Array<{ id: string; name: string }>
  ) => {
    const newExercises = selectedExercises.map((exercise) => ({
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

  const handleExerciseChange = (
    exerciseId: string,
    field: keyof Exercise,
    value: string | number
  ) => {
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
        <Droppable droppableId={String(day.id || "default-droppable-id")}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {day.exercises.map((exercise, index) => (
                <Draggable
                  key={`exercise-${exercise.id}-${index}`}
                  draggableId={`exercise-${exercise.id}-${index}`}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="flex items-center bg-white p-3 rounded-lg border"
                    >
                      <div {...provided.dragHandleProps} className="mr-4">
                        <GripVertical className="h-4 w-4 text-gray-400" />
                      </div>
                      <span className="flex-1 font-medium">
                        {exercise.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <p>Sets</p>
                        <Input
                          type="number"
                          placeholder="Sets"
                          value={exercise.sets}
                          onChange={(e) =>
                            handleExerciseChange(
                              exercise.id,
                              "sets",
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16"
                        />
                        <p>Reps</p>
                        <Input
                          type="number"
                          placeholder="Reps"
                          value={exercise.reps}
                          onChange={(e) =>
                            handleExerciseChange(
                              exercise.id,
                              "reps",
                              parseInt(e.target.value)
                            )
                          }
                          className="w-16"
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
