import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronLeft, Dumbbell, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import jsPDF from "jspdf";

interface Exercise {
  name: string;
  sets: number;
  reps: number[];
  weights: number[];
}

interface HistoryDetails {
  id: string;
  date: string;
  duration: string;
  planName: string;
  workoutName: string;
  exercises: Exercise[];
}

const HistoryDetails = () => {
  const { historyid } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [workout, setWorkout] = useState<HistoryDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://hc920.brighton.domains/muscleMetric/php/history/historyDetails.php?history_id=${historyid}`
        );
        const data = await response.json();

        if (data.error) {
          toast({
            title: "Error",
            description: data.error,
            variant: "destructive",
          });
          setWorkout(null);
        } else {
          // Group sets by exercise
          const exerciseMap: { [key: string]: Exercise } = {};

          data.sets.forEach((set: any) => {
            const exerciseName = set.ExerciseName;
            if (!exerciseMap[exerciseName]) {
              exerciseMap[exerciseName] = {
                name: exerciseName,
                sets: 0,
                reps: [],
                weights: [],
              };
            }

            exerciseMap[exerciseName].sets += 1;
            exerciseMap[exerciseName].reps.push(set.Reps);
            exerciseMap[exerciseName].weights.push(parseFloat(set.Weight));
          });

          const workoutData: HistoryDetails = {
            id: data.history.id,
            date: data.history.Date,
            duration: data.history.Duration,
            planName: data.planTitle || "Unknown Plan",
            workoutName: data.workoutName,
            exercises: Object.values(exerciseMap),
          };

          setWorkout(workoutData);
        }
      } catch (error) {
        console.error("Failed to fetch workout data", error);
        toast({
          title: "Error",
          description: "Failed to load workout data.",
          variant: "destructive",
        });
        setWorkout(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [historyid]);

  const generatePDF = () => {
    if (!workout) return;

    const pdf = new jsPDF();
    const margin = 15;
    let yPos = 20;

    // Set font styles
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(16);

    // Add title
    pdf.text(workout.planName, margin, yPos);
    yPos += 10;

    // Add workout name
    pdf.setFontSize(14);
    pdf.text(workout.workoutName, margin, yPos);
    yPos += 10;

    // Add date and duration
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.text(
      `Date: ${workout.date} | Duration: ${workout.duration}`,
      margin,
      yPos
    );
    yPos += 15;

    // Add exercise header
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(12);
    pdf.text("Exercise", margin, yPos);
    pdf.text("Set", 100, yPos);
    pdf.text("Reps", 120, yPos);
    pdf.text("Weight (kg)", 150, yPos);
    yPos += 8;

    // Add line
    pdf.line(margin, yPos, 195, yPos);
    yPos += 10;

    // Add exercises
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);

    workout.exercises.forEach((exercise) => {
      // Exercise name
      pdf.setFont("helvetica", "bold");
      pdf.text(exercise.name, margin, yPos);
      yPos += 8;

      // Sets, reps, weights
      pdf.setFont("helvetica", "normal");
      for (let i = 0; i < exercise.sets; i++) {
        pdf.text(`Set ${i + 1}`, 100, yPos);
        pdf.text(exercise.reps[i]?.toString() || "-", 120, yPos);
        pdf.text(exercise.weights[i]?.toString() || "0", 150, yPos);
        yPos += 6;
      }

      yPos += 6;

      // Check if we need a new page
      if (yPos > 270) {
        pdf.addPage();
        yPos = 20;
      }
    });

    // Save the PDF
    pdf.save(`workout-${workout.date.replace(/\s/g, "-")}.pdf`);

    toast({
      title: "PDF Downloaded",
      description: "Your workout has been saved as a PDF",
    });
  };

  if (loading) {
    return (
      <div className="container max-w-2xl mx-auto py-8 flex justify-center">
        <p className="text-center py-8 text-muted-foreground">
          Loading workout details...
        </p>
      </div>
    );
  }

  if (!workout) {
    return (
      <div className="container max-w-2xl mx-auto py-8">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <p className="text-center py-8 text-destructive">Workout not found</p>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto py-8">
      <div className="flex justify-between items-start mb-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Back to History
        </Button>
        <Button variant="outline" onClick={generatePDF}>
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-foreground">
              {workout.planName}
            </h1>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              {workout.workoutName}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {workout.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {workout.duration}
              </div>
              <div className="flex items-center">
                <Dumbbell className="w-4 h-4 mr-2" />
                {workout.exercises.length} exercises
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <h3 className="text-lg font-semibold mb-4 text-foreground">
        Exercise Details
      </h3>

      <div className="space-y-4">
        {workout.exercises.map((exercise, exIndex) => (
          <Card key={exIndex}>
            <CardContent className="p-6">
              <div className="font-bold text-lg text-foreground mb-2">
                {exercise.name}
              </div>
              <Separator className="my-3" />

              <div className="grid grid-cols-3 text-sm font-medium text-muted-foreground mb-2">
                <div>SET</div>
                <div>REPS</div>
                <div>WEIGHT</div>
              </div>

              {Array.from({ length: exercise.sets }).map((_, setIndex) => (
                <div
                  key={setIndex}
                  className="grid grid-cols-3 py-2 border-b last:border-0"
                >
                  <div className="font-medium text-foreground">
                    {setIndex + 1}
                  </div>
                  <div className="font-medium text-foreground">
                    {exercise.reps[setIndex] || "-"}
                  </div>
                  <div className="font-medium text-foreground">
                    {exercise.weights[setIndex] || 0} kg
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoryDetails;
