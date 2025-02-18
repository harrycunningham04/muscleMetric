
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FeatureCardProps {
  feature: any;
  index: number;
  onClick?: () => void;
  type: "dialog" | "popover-left" | "popover-right" | "popover-top";
}

export const FeatureCard = ({ feature, index, onClick, type }: FeatureCardProps) => {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)"
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

  if (type === "dialog") {
    return <div onClick={onClick}>{cardContent}</div>;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {cardContent}
      </PopoverTrigger>
      <PopoverContent 
        className="w-[400px] p-4"
        side={type.replace('popover-', '') as "top" | "right" | "bottom" | "left"}
      >
        <div className="space-y-4">
          <h4 className="font-semibold text-lg">{feature.title}</h4>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
          <div className="h-[200px]">
            {feature.content}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};