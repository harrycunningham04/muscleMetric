import { Card } from '@/components/ui/card';
import { Calendar, Clock, Dumbbell } from 'lucide-react';

// Mock data - replace with actual data fetching
const workoutHistory = [
  {
    id: '1',
    date: '2024-03-15',
    duration: '45 minutes',
    exercises: ['Bench Press', 'Squats', 'Deadlifts'],
    planName: '8-Week Strength Program'
  },
  {
    id: '2',
    date: '2024-03-13',
    duration: '60 minutes',
    exercises: ['Pull-ups', 'Rows', 'Bicep Curls'],
    planName: '8-Week Strength Program'
  },
  // Add more history items...
];

const History = () => {

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Workout History</h1>
      <div className="grid gap-4">
        {workoutHistory.map((workout) => (
          <Card 
            key={workout.id}
            className="p-4 hover:shadow-lg transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg mb-2">{workout.planName}</h3>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(workout.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{workout.duration}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Dumbbell className="w-5 h-5 text-primary" />
                <span className="ml-2 text-sm text-muted-foreground">
                  {workout.exercises.length} exercises
                </span>
              </div>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {workout.exercises.join(', ')}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;