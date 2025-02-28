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
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [workout, setWorkout] = useState<HistoryDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Mock data - replace with actual API call
      const mockWorkouts: HistoryDetails[] = [
        {
          id: "1",
          date: "27 February 2023",
          duration: "1 hr 10 mins",
          planName: "SEMESTER 2",
          workoutName: "DAY 4 : LEGS2 THURSDAY",
          exercises: [
            {
              name: "BARBELL BACK SQUAT",
              sets: 5,
              reps: [8, 8, 8, 8, 8],
              weights: [60, 70, 80, 80, 80],
            },
            {
              name: "MACHINE PRONE HAMSTRING CURL",
              sets: 3,
              reps: [12, 12, 12],
              weights: [50, 55, 55],
            },
            {
              name: "DUMBBELL STANDING CALF RAISE",
              sets: 3,
              reps: [15, 15, 15],
              weights: [20, 20, 20],
            },
            {
              name: "45 DEGREE LEG PRESS",
              sets: 3,
              reps: [12, 12, 12],
              weights: [120, 140, 160],
            },
            {
              name: "SEATED LEG EXTENSION",
              sets: 2,
              reps: [15, 15],
              weights: [40, 45],
            },
          ],
        },
        {
          id: "2",
          date: "25 February 2023",
          duration: "55 mins",
          planName: "SEMESTER 2",
          workoutName: "DAY 3 : PUSH2 TUESDAY",
          exercises: [
            {
              name: "INCLINE BENCH PRESS",
              sets: 4,
              reps: [8, 8, 8, 8],
              weights: [60, 65, 70, 70],
            },
            {
              name: "SEATED DUMBBELL PRESS",
              sets: 3,
              reps: [10, 10, 10],
              weights: [20, 22, 24],
            },
            {
              name: "TRICEP PUSHDOWN",
              sets: 3,
              reps: [12, 12, 12],
              weights: [25, 30, 30],
            },
            {
              name: "LATERAL RAISE",
              sets: 3,
              reps: [15, 15, 15],
              weights: [10, 10, 10],
            },
          ],
        },
        {
          id: "3",
          date: "23 February 2023",
          duration: "1 hr 5 mins",
          planName: "SEMESTER 2",
          workoutName: "DAY 2 : PULL1 SUNDAY",
          exercises: [
            {
              name: "DEADLIFT",
              sets: 4,
              reps: [6, 6, 6, 6],
              weights: [100, 120, 130, 130],
            },
            { name: "PULL-UPS", sets: 3, reps: [8, 8, 6], weights: [0, 0, 0] },
            {
              name: "BARBELL ROW",
              sets: 3,
              reps: [10, 10, 10],
              weights: [60, 65, 70],
            },
            {
              name: "BICEP CURL",
              sets: 3,
              reps: [12, 12, 12],
              weights: [15, 17.5, 17.5],
            },
          ],
        },
      ];

      const workoutData = mockWorkouts.find((w) => w.id === id) || null;
      setWorkout(workoutData);
      setLoading(false);
    };

    fetchWorkout();
  }, [id]);

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
