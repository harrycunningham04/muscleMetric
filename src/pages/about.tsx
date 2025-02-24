import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Lanyard from "../components/Lanyard/Lanyard";

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
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Empowering individuals to achieve their fitness goals through
              innovative technology and personalized solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-12 mt-[-175px]">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lanyard position={[0, 0, 30]} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Empowering Your Fitness Journey
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our goal is to transform the fitness industry by providing a
                  comprehensive platform where you can create tailored workout
                  plans, set achievable goals, and track your progress
                  effectively. We believe fitness should be accessible,
                  structured, and motivating for everyone, whether you're a
                  beginner or an advanced athlete.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Why We Built This Platform
                </h3>
                <p className="text-lg text-muted-foreground">
                  We saw a gap in the market for a truly user-friendly and
                  professional workout planning tool. Many existing solutions
                  lacked the personalization and guidance needed to help
                  individuals make consistent progress. By combining technology
                  with expert insights, our platform offers a streamlined
                  experience that adapts to your evolving fitness needs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">The Future</h3>
                <p className="text-lg text-muted-foreground">
                  We want to allow brands, people, everyone to collaborate. We
                  know the best thing about the fitness world is the community
                  it brings together, so our next goal is to allow for the
                  community to come together on this app and share experiences,
                  knowledge and new prs together. We hope you are just as
                  excited as we are about the future of Muscle Metric's!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
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
            <h3 className="text-4xl font-bold relative z-10">
              Our Core Values
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: "Customer Focus",
                description: "Putting our customers first in everything we do",
                delay: 0,
              },
              {
                title: "Innovation",
                description:
                  "Constantly pushing boundaries and embracing change",
                delay: 0.2,
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in our work",
                delay: 0.4,
              },
              {
                title: "Collaboration",
                description: "Working together to achieve greater results",
                delay: 0.6,
              },
              {
                title: "Growth",
                description: "Continuous learning and development",
                delay: 0.8,
              },
              {
                title: "Trustworthiness",
                description: "Building lasting relationships through integrity",
                delay: 1,
              },
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
                    <h4 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground">{value.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-lg opacity-90">
              Create your perfect plan from our pre-made section or make your
              own unique plan in ours plans section.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
