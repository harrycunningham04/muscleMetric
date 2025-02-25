import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Dumbbell, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PlanCardProps {
  id: string;
  title: string;
  duration: string;
  workoutDays: number;
  goals: number;
  isActive?: boolean;
  progress?: number;
  startDate?: string;
  endDate?: string;
  onActivate?: (id: string) => void;
}

const PlanCard = ({ 
  id, 
  title, 
  duration, 
  workoutDays, 
  goals,
  isActive = false,
  progress = 0,
  startDate,
  endDate,
  onActivate 
}: PlanCardProps) => {
  const navigate = useNavigate();
  const [showActivateDialog, setShowActivateDialog] = React.useState(false);

  const handleActivateClick = () => {
    if (!isActive && onActivate) {
      setShowActivateDialog(true);
    }
  };

  const confirmActivation = () => {
    if (onActivate) {
      onActivate(id);
      setShowActivateDialog(false);
    }
  };

  return (
    <>
      <Card 
        className={`p-6 hover:shadow-lg transition-all cursor-pointer ${
          isActive 
            ? 'bg-muted border-primary border-2' 
            : 'bg-secondary hover:bg-secondary/90'
        }`}
        onClick={handleActivateClick}
      >
        {isActive && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-primary font-medium">Active Plan</span>
              <span className="text-sm text-muted-foreground">{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        <h3 className={`text-xl font-semibold mb-4 ${isActive ? 'text-primary' : ''}`}>
          {title}
        </h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-muted-foreground">
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Dumbbell className="w-4 h-4 mr-2" />
            <span>{workoutDays} workout days</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Target className="w-4 h-4 mr-2" />
            <span>{goals} goals set</span>
          </div>
          {startDate && endDate && (
            <div className="text-sm text-muted-foreground">
              {startDate} - {endDate}
            </div>
          )}
        </div>

        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/plans/${id}`);
            }}
          >
            View Details
          </Button>
          <Button 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/plans/${id}/edit`);
            }}
          >
            Edit Plan
          </Button>
        </div>
      </Card>

      <Dialog open={showActivateDialog} onOpenChange={setShowActivateDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Activate Plan</DialogTitle>
            <DialogDescription>
              Are you sure you want to make "{title}" your active plan? Your current progress on the previous plan will be saved.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowActivateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmActivation}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlanCard;