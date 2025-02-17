import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BarChart2,
  Calendar,
  Timer,
  Award,
  TrendingUp,
  UserPlus,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExerciseProgressGraph } from "@/components/ExerciseProgressGraph";

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const [showFeatureDialog, setShowFeatureDialog] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<number>(0);

  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mascotRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Workout Plans",
      description:
        "Access custom workout plans tailored to your fitness level and goals.",
      image: "/public/WorkoutPlans.jpg",
      graph: <ExerciseProgressGraph exercise="Overhead Press" />,
      type: "dialog",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Goal Setting",
      description:
        "Set personalized fitness goals and get guided support to achieve them.",
      image: "/public/Goals.jpg",
      graph: <ExerciseProgressGraph exercise="Deadlift" />,
      type: "popover-right",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Easy to Use",
      description:
        "Intuitive interface designed for both beginners and experienced athletes.",
      image: "/public/Welcome.jpg",
      graph: <ExerciseProgressGraph exercise="Squats" />,
      type: "popover-left",
    },

    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Progress Tracking",
      description:
        "Track your workouts and monitor your progress with detailed analytics and charts.",

      graph: <ExerciseProgressGraph exercise="Bench Press" />,
      type: "dialog",
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: "Performance Metrics",
      description:
        "Get detailed insights into your performance and areas for improvement.",
      graph: <ExerciseProgressGraph exercise="Pull-ups" />,
      type: "popover-bottom",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Community",
      description:
        "Join a community of fitness enthusiasts and share your journey.",
      graph: <ExerciseProgressGraph exercise="Bicep Curls" />,
      type: "popover-right",
    },
  ];

  const renderFeatureCard = (feature: any, index: number) => {
    const cardContent = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        className="bg-white/5 backdrop-blur-lg rounded-lg p-6 cursor-pointer transition-all h-full"
      >
        <div className="flex items-center gap-4 mb-4">
          {feature.icon}
          <h3 className="text-xl font-bold">{feature.title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{feature.description}</p>
        {feature.image && (
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-auto object-cover rounded-lg mb-4 opacity-50"
          />
        )}
        <div className="flex items-center text-blue-400 hover:text-blue-300">
          <span className="mr-2">Learn more</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </motion.div>
    );

    if (feature.type === "dialog") {
      return (
        <div
          onClick={() => {
            setCurrentFeature(index);
            setShowFeatureDialog(true);
          }}
        >
          {cardContent}
        </div>
      );
    } else {
      return (
        <Popover>
          <PopoverTrigger asChild>{cardContent}</PopoverTrigger>
          <PopoverContent
            className="w-[400px] p-4"
            side={
              feature.type.replace("popover-", "") as
                | "top"
                | "right"
                | "bottom"
                | "left"
            }
          >
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="h-[200px]">{feature.graph}</div>
            </div>
          </PopoverContent>
        </Popover>
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-[200vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white antialiased"
    >
      {/* Sticky Header with Mascot */}
      <motion.div
        className="fixed top-4 left-4 z-50 flex items-center gap-4 bg-black/50 backdrop-blur-lg p-4 rounded-lg shadow-lg ring-1 ring-white/10"
        style={{ y: mascotY }}
      >
        <motion.div
          className="size-16 bg-urban-indigo rounded-full flex items-center justify-center shadow-inner"
          style={{ rotate: mascotRotate }}
        >
          <span className="text-6xl">🏋️</span>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: parallaxY1, opacity }}
        ></motion.div>

        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 space-y-8"
          >
            <motion.div
              className="w-full aspect-square max-w-4xl max-h-[400px] mx-auto relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/public/MuscleMetricIcon.png"
                alt="MuscleMetric Logo"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to MuscleMetric
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your ultimate fitness companion for tracking workouts, setting
              goals, and achieving results.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
            >
              Sign Up
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="min-h-screen relative py-20">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y: parallaxY2 }}
        >
          <div className="absolute inset-0 bg-[url('/public/MuscleMetricLogo.png')] bg-center bg-no-repeat bg-contain" />
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) =>
              renderFeatureCard(feature, index)
            )}
          </div>
        </div>
      </section>

      {/* Feature Dialog */}
      <Dialog open={showFeatureDialog} onOpenChange={setShowFeatureDialog}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>{features[currentFeature]?.title}</DialogTitle>
            <DialogDescription>
              {features[currentFeature]?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 h-[400px]">
            {features[currentFeature]?.graph}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
