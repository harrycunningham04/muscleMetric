import { Plus, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Dumbbell className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-2">No Workout Plans Yet</h3>
        <p className="text-muted-foreground mb-6">
          Create your first workout plan to get started on your fitness journey.
        </p>
        <Button onClick={() => navigate('/plans/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Create New Plan
        </Button>
      </div>
    </div>
  );
};

export default EmptyState;
