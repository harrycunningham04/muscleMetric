import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, GripVertical, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { ExerciseSelectionModal } from "./ExerciseSelectionModal";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  startingWeight?: number;
}

interface WorkoutDayProps {
  day: {
    id: string;
    name: string;
    exercises: Exercise[];
  };
  onUpdate: (dayId: string, exercises: Exercise[], workoutName?: string) => void;
  onValidationChange: (dayId: string, isValid: boolean) => void;
}

export const WorkoutDayEditor = ({
  day,
  onUpdate,
  onValidationChange,
}: WorkoutDayProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutName, setWorkoutName] = useState(day.name);

  const isValidExercise = (exercise: Exercise) => {
    return (
      exercise.startingWeight !== undefined &&
      exercise.startingWeight !== null &&
      exercise.startingWeight.toString() !== ""
    );
  };

  const validate = (exercises: Exercise[], name: string) => {
    const validExercises = exercises.every(isValidExercise);
    const validName = name.trim().length > 0;
    const allValid = validExercises && validName;
    onValidationChange(day.id, allValid);
    return allValid;
  };

  useEffect(() => {
    validate(day.exercises, workoutName);
  }, [day.exercises, workoutName]);

  const handleAddExercise = () => setIsModalOpen(true);

  const handleExerciseSelect = (
    selectedExercises: Array<{ id: string; name: string }>
  ) => {
    const newExercises = selectedExercises.map((exercise) => ({
      id: exercise.id,
      name: exercise.name,
      sets: 3,
      reps: 10,
      startingWeight: undefined,
    }));
    onUpdate(day.id, [...day.exercises, ...newExercises], workoutName);
  };

  const handleRemoveExercise = (exerciseId: string) => {
    onUpdate(
      day.id,
      day.exercises.filter((ex) => ex.id !== exerciseId),
      workoutName
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
      ),
      workoutName
    );
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(day.exercises);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onUpdate(day.id, items, workoutName);
  };

  const handleWorkoutNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkoutName(e.target.value);
  };

  const handleWorkoutNameBlur = () => {
    onUpdate(day.id, day.exercises, workoutName);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="border-b pb-6 last:border-0 last:pb-0">
      <div className="flex justify-between items-center mb-4">
        <Input
          value={workoutName}
          onChange={handleWorkoutNameChange}
          onBlur={handleWorkoutNameBlur}
          onKeyDown={handleKeyDown}
          className={`font-medium w-auto ${
            workoutName.trim() === "" ? "border-red-500" : ""
          }`}
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
                  key={`exercise-${exercise.id}`}
                  draggableId={`exercise-${exercise.id}`}
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
                          onKeyDown={handleKeyDown}
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
                          onKeyDown={handleKeyDown}
                          className="w-16"
                        />
                        <p>Starting Weight</p>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="Kgs"
                            value={exercise.startingWeight ?? ""}
                            onChange={(e) =>
                              handleExerciseChange(
                                exercise.id,
                                "startingWeight",
                                parseFloat(e.target.value)
                              )
                            }
                            onKeyDown={handleKeyDown}
                            className={`w-20 ${
                              !isValidExercise(exercise)
                                ? "border-red-500"
                                : ""
                            }`}
                          />
                          {!isValidExercise(exercise) && (
                            <AlertCircle className="h-4 w-4 text-red-500 absolute right-2 top-3" />
                          )}
                        </div>
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
