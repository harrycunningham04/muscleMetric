import { useState } from "react";
import { exercises } from "@/data/Exercise";

const ExerciseAutocomplete = ({ onSelect }: { onSelect: (exercise: string) => void }) => {
  const [query, setQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Prevent input if it contains numbers
    if (/\d/.test(value)) return;

    setQuery(value);

    if (value.length > 0) {
      const matches = exercises
        .map((ex) => ex.name)
        .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit to top 5 matches

      setFilteredExercises(matches);
    } else {
      setFilteredExercises([]);
    }
  };

  const handleSelect = (exercise: string) => {
    setQuery(exercise);
    setFilteredExercises([]);
    onSelect(exercise);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Start typing an exercise..."
        className="w-full p-2 border rounded"
      />
      {filteredExercises.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded mt-1 shadow-md z-10">
          {filteredExercises.map((exercise) => (
            <li
              key={exercise}
              onClick={() => handleSelect(exercise)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {exercise}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExerciseAutocomplete;
