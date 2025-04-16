import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";

interface FeatureCardProps {
  feature: any;
  index: number;
  onClick?: () => void;
  type: "dialog" | "popover-left" | "popover-right" | "popover-top";
}

const popoverHeights: Record<string, string> = {
  "Progress Tracking": "h-[500px]",
  "Goal Setting": "h-[100px]",
  "Easy to Use": "h-[100px]",
  "Workout Plans": "h-[100px]",
  "Performance Metrics": "h-[100px]",
  Community: "h-[100px]",
};

export const FeatureCard = ({ feature, index, type }: FeatureCardProps) => {
  const [popoverSide, setPopoverSide] = useState<
    "top" | "right" | "bottom" | "left"
  >(type.replace("popover-", "") as "top" | "right" | "bottom" | "left");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPopoverSide("bottom"); // Force popovers to open below on small screens
      } else {
        setPopoverSide(
          type.replace("popover-", "") as "top" | "right" | "bottom" | "left"
        );
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [type]);

  const popoverHeight = popoverHeights[feature.key] || "h-auto";

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
      className="bg-white/5 backdrop-blur-md border border-white/10 shadow-lg rounded-xl p-6 cursor-pointer transition-all h-full"
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
          className="w-full h-auto object-cover rounded-lg mb-4 opacity-60"
        />
      )}
      <div className="flex items-center text-blue-400 hover:text-blue-300">
        <span className="mr-2">Click to Learn more</span>
        <ChevronRight className="w-4 h-4" />
      </div>
    </motion.div>
  );

  return (
    <Popover>
      <PopoverTrigger asChild>{cardContent}</PopoverTrigger>
      <PopoverContent
        className={`w-fit max-w-[420px] p-5 bg-white backdrop-blur-xl border border-white/20 shadow-xl rounded-xl`}
        side={popoverSide}
        align="center"
        sideOffset={12}
      >
        <div className="space-y-4">
          <div className={`${popoverHeight} overflow-hidden rounded-lg`}>
            {feature.content}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
