
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "We cover all major aspects of fitness training including strength training, cardio, flexibility, and nutrition planning. Our services are available both in-person and online."
  },
  {
    question: "How do I get started with MuscleMetric?",
    answer: "Getting started is easy! Simply create an account, choose your fitness plan, and you'll get immediate access to your personalized workout routines and tracking tools."
  },
  {
    question: "How quickly will I see results?",
    answer: "Results vary by individual, but most users start seeing measurable progress within 4-6 weeks when following our programs consistently. We track your progress to help you stay motivated."
  },
  {
    question: "What support is available?",
    answer: "We offer 24/7 chat support, weekly check-ins with fitness coaches, and a community forum where you can connect with other members on similar fitness journeys."
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel your subscription at any time. We offer a full refund within the first 14 days if you're not completely satisfied with our service."
  },
  {
    question: "Do you offer personalized training plans?",
    answer: "Yes! We create custom training plans based on your goals, fitness level, and schedule. Our AI technology helps optimize your plan as you progress."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our fitness programs? We're here to help you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Contact Form */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                    placeholder="How can we help?"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>support@musclemetric.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>+1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
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
      </div>
    </div>
  );
};

export default Contact;