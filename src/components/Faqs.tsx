import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover all major aspects of fitness training including strength training, cardio, flexibility, and nutrition planning. Our services are available both in-person and online.",
  },
  {
    question: "How do I get started with MuscleMetric?",
    answer:
      "Getting started is easy! Simply create an account, choose your fitness plan, and you'll get immediate access to your personalized workout routines and tracking tools.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Results vary by individual, but most users start seeing measurable progress within 4-6 weeks when following our programs consistently. We track your progress to help you stay motivated.",
  },
  {
    question: "What support is available?",
    answer:
      "We offer 24/7 chat support, weekly check-ins with fitness coaches, and a community forum where you can connect with other members on similar fitness journeys.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. We offer a full refund within the first 14 days if you're not completely satisfied with our service.",
  },
  {
    question: "Do you offer personalized training plans?",
    answer:
      "Yes! We create custom training plans based on your goals, fitness level, and schedule. Our AI technology helps optimize your plan as you progress.",
  },
];

export const Faqs = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="text-center mb-12">
        <h2 className="inline-block text-lg font-medium px-4 py-2 bg-primary/10 rounded-full text-primary mb-4">
          FAQ's
        </h2>
        <h3 className="text-4xl font-bold mb-4">We've got you covered</h3>
        <p className="text-muted-foreground">
          Find answers to commonly asked questions about our services
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg hover:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};
