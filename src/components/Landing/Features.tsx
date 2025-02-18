
import { motion } from "framer-motion";
import { features } from "./Feature-data";
import { FeatureCard } from "./FeatureCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

interface FeaturesProps {
  parallaxY2: any;
}

export const Features = ({ parallaxY2 }: FeaturesProps) => {
  const [showFeatureDialog, setShowFeatureDialog] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<number>(0);

  return (
    <section className="min-h-screen relative py-20">
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: parallaxY2 }}
      >
        <div className="absolute inset-0 bg-[url('/MuscleMetricLogo.png')] bg-center bg-no-repeat bg-contain" />
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              type={feature.type}
              onClick={feature.type === "dialog" ? () => {
                setCurrentFeature(index);
                setShowFeatureDialog(true);
              } : undefined}
            />
          ))}
        </div>
      </div>

      <Dialog open={showFeatureDialog} onOpenChange={setShowFeatureDialog}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>{features[currentFeature]?.title}</DialogTitle>
            <DialogDescription>
              {features[currentFeature]?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 min-h-[550px]">
            {features[currentFeature]?.content}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};