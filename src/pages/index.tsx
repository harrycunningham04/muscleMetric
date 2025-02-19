import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Features } from "@/components/Landing/Features";

const Index = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mascotRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const ref = useRef(null);

  const { scrollXProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const perspectiveY = useTransform(scrollXProgress, [0, 1], [0, -100]);

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
      <section
        ref={ref}
        className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-4"
      >
        {/* Background effect */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ y: perspectiveY }}
        >
          <div className="absolute inset-0 bg-[url('/Header.png')] bg-center bg-no-repeat bg-contain" />
        </motion.div>

        {/* Container */}
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex flex-col items-center"
          >
            {/* Logo & Title Row */}
            <div className="flex items-center justify-center gap-4 mt-20 mb-5">
              <motion.img
                src="/MuscleMetricIcon.png"
                alt="MuscleMetric Logo"
                className="w-14 h-auto object-contain rounded-xl"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.h1
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Welcome to MuscleMetric
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Your ultimate fitness companion for tracking workouts, setting
              goals, and achieving results.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button
              onClick={() => navigate("/verify", { state: { type: "login" }})}
              variant="outline"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/verify", { state: { type: "signup" }})}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300"
            >
              Sign Up
            </Button>
          </motion.div>
        </div>

        {/* Perspective Scrolling Image */}
        <div className="hero-image-wrapper">
          <div className={`hero-image ${scrolled ? "scrolled" : ""}`}>
            <img
              src="/FitnessDashboard.png"
              alt="Fitness Dashboard"
              className="w-full max-w-[900px] h-auto rounded-lg shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features parallaxY2={parallaxY2} />
    </div>
  );
};

export default Index;
