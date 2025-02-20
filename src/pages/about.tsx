import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, History, Target, ArrowRight } from "lucide-react";

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
          transformStyle: "preserve-3d"
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
            transformOrigin: "top"
          }}
        />
        
        {/* Card/Badge */}
        <motion.div
          className="relative bg-white rounded-lg shadow-xl overflow-hidden"
          style={{
            width: "300px",
            height: "200px",
            transformStyle: "preserve-3d"
          }}
        >
          <img
            src="/lovable-uploads/135ad7fd-2edf-47a1-bd71-80877cdc0af3.png"
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

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay" />
        <div className="container relative z-10 px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white">About Our Company</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Empowering individuals to achieve their fitness goals through innovative technology and personalized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lanyard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We're dedicated to transforming the fitness industry by making professional workout planning accessible to everyone. Our platform combines cutting-edge technology with personalized guidance to help you achieve your fitness goals.
              </p>
              <Button className="group" size="lg">
                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-32"
          >
            <h2 className="text-[12rem] font-bold text-primary/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              VALUES
            </h2>
            <h3 className="text-4xl font-bold relative z-10">Our Core Values</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: "Customer Focus",
                description: "Putting our customers first in everything we do",
                delay: 0
              },
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and embracing change",
                delay: 0.2
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in our work",
                delay: 0.4
              },
              {
                title: "Collaboration",
                description: "Working together to achieve greater results",
                delay: 0.6
              },
              {
                title: "Growth",
                description: "Continuous learning and development",
                delay: 0.8
              },
              {
                title: "Trustworthiness",
                description: "Building lasting relationships through integrity",
                delay: 1
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: value.delay }}
              >
                <Card className="bg-primary/5 hover:bg-primary/10 transition-colors border-none">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals working to revolutionize your fitness journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Fitness Director",
                image: "/lovable-uploads/8826cf90-218e-4b8b-94c1-180b4ba8f96f.png"
              },
              {
                name: "Michael Chen",
                role: "Tech Lead",
                image: "/lovable-uploads/8826cf90-218e-4b8b-94c1-180b4ba8f96f.png"
              },
              {
                name: "Emily Rodriguez",
                role: "User Experience Designer",
                image: "/lovable-uploads/8826cf90-218e-4b8b-94c1-180b4ba8f96f.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Fitness Journey?</h2>
            <p className="text-lg opacity-90">
              Join our community today and transform your fitness goals into achievements.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;