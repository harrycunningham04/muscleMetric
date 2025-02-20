import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Lanyard = () => {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-100, 100], [30, -30]);
  const rotateY = useTransform(dragX, [-100, 100], [-30, 30]);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(dragX, springConfig);
  const springY = useSpring(dragY, springConfig);
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    dragX.set(event.clientX - centerX);
    dragY.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    dragX.set(0);
    dragY.set(0);
  };

  return (
    <div
      className="perspective-1000 relative h-[400px] w-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          x: springX,
          y: springY,
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        drag
        dragElastic={0.1}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        {/* Lanyard String */}
        <div
          className="absolute left-1/2 -top-20 w-1 h-20 bg-gradient-to-b from-gray-400 to-gray-600"
          style={{
            transform: "translateX(-50%) rotateX(5deg)",
            transformOrigin: "top",
          }}
        />

        {/* Card/Badge */}
        <motion.div
          className="relative bg-white rounded-lg shadow-xl overflow-hidden"
          style={{
            width: "300px",
            height: "200px",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src="/MuscleMetricIcon.png"
            alt="Company logo"
            className="w-full h-full object-cover"
            draggable="false"
          />

          {/* Reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />

          {/* Hole for the lanyard */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Lanyard;
