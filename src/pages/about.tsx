
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Dumbbell, 
  Target, 
  Users, 
  Trophy,  
  Sparkles,
  Star,
  Calendar,
  BarChart2,
  LucideIcon
} from "lucide-react";
import ImagePlaceholder from "@/assets/ProgressTracking.png"

const StoryBlock = ({ 
  title, 
  content, 
  icon: Icon, 
  color = "bg-primary/10"
}: { 
  title: string; 
  content: string; 
  icon: React.ElementType; 
  color?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col md:flex-row gap-6 items-start"
  >
    <div className={`p-4 rounded-2xl ${color} text-primary shrink-0 dark:text-white`}>
      <Icon size={28} />
    </div>
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-lg text-muted-foreground">{content}</p>
    </div>
  </motion.div>
);

const CoreValueCard = ({ 
  title, 
  description, 
  icon: Icon, 
  delay = 0,
  color = "bg-primary/5" 
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType; 
  delay?: number;
  color?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="h-full"
  >
    <Card className={`h-full ${color} hover:shadow-xl transition-all duration-300 border-none hover:-translate-y-2 dark:bg-gray-800/50`}>
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="bg-white dark:bg-gray-700 rounded-full p-4 shadow-md mb-4">
          <Icon className="text-primary dark:text-white" size={24} />
        </div>
        <h4 className="text-xl font-semibold mb-2 dark:text-white">{title}</h4>
        <p className="text-muted-foreground dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const Testimonial = ({
  quote,
  author,
  role,
  rating,
  delay = 0
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="h-full"
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/10 dark:bg-gray-800/70 dark:border-gray-700">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-lg italic text-muted-foreground dark:text-gray-300 flex-grow">"{quote}"</p>
        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
          <p className="font-semibold dark:text-white">{author}</p>
          <p className="text-sm text-muted-foreground dark:text-gray-400">{role}</p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ProductFeature = ({
  title,
  description,
  icon: Icon,
  delay = 0
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex gap-4"
  >
    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0 h-fit dark:bg-gray-700 dark:text-white">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-muted-foreground dark:text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary to-purple-700 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -30, 0],
              scale: [1, 1.2, 1] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-white/5 blur-3xl"
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 20, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ 
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container relative z-10 px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white/80 mb-4">
              <Sparkles className="inline-block mr-2 h-4 w-4" /> Transforming Fitness Through Technology
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-sm">
              We're on a Mission to <span className="text-yellow-300">Redefine</span> Fitness
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Building the tools that empower everyone to achieve their personal fitness goals through intelligent planning and tracking.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="rounded-full bg-white text-primary hover:bg-white/90 mt-8 text-lg px-8 dark:bg-gray-200 dark:text-gray-800"
                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="our-story" className="py-24 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-16"
            >
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white">Our Story</h2>
                <div className="w-20 h-1 bg-primary dark:bg-white mx-auto rounded-full"></div>
              </div>

              <StoryBlock 
                title="Empowering Your Fitness Journey"
                content="Our goal is to transform the fitness industry by providing a comprehensive platform where you can create tailored workout plans, set achievable goals, and track your progress effectively. We believe fitness should be accessible, structured, and motivating for everyone, whether you're a beginner or an advanced athlete."
                icon={Dumbbell}
                color="bg-purple-100 dark:bg-purple-900/30"
              />

              <StoryBlock 
                title="Why We Built This Platform"
                content="We saw a gap in the market for a truly user-friendly and professional workout planning tool. Many existing solutions lacked the personalization and guidance needed to help individuals make consistent progress. By combining technology with expert insights, our platform offers a streamlined experience that adapts to your evolving fitness needs."
                icon={Target}
                color="bg-blue-100 dark:bg-blue-900/30"
              />

              <StoryBlock 
                title="The Future"
                content="We want to allow brands, people, everyone to collaborate. We know the best thing about the fitness world is the community it brings together, so our next goal is to allow for the community to come together on this app and share experiences, knowledge and new prs together. We hope you are just as excited as we are about the future of Muscle Metric's!"
                icon={Users}
                color="bg-green-100 dark:bg-green-900/30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and how we build our platform
            </p>
            <div className="w-20 h-1 bg-primary dark:bg-white mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            <CoreValueCard
              title="Personalization"
              description="We believe fitness is not one-size-fits-all. Our platform adapts to your unique goals and needs."
              icon={Target}
              delay={0}
              color="bg-blue-50 dark:bg-blue-900/20"
            />
            <CoreValueCard
              title="Community"
              description="Building connections that inspire and motivate each other to achieve more together."
              icon={Users}
              delay={0.1}
              color="bg-green-50 dark:bg-green-900/20"
            />
            <CoreValueCard
              title="Excellence"
              description="Commitment to providing the highest quality tools and information to help you succeed."
              icon={Trophy}
              delay={0.2}
              color="bg-yellow-50 dark:bg-yellow-900/20"
            />
            <CoreValueCard
              title="Accessibility"
              description="Making professional fitness planning accessible to everyone regardless of experience level."
              icon={Heart}
              delay={0.3}
              color="bg-red-50 dark:bg-red-900/20"
            />
            <CoreValueCard
              title="Innovation"
              description="Constantly exploring new ways to improve and enhance your fitness journey through technology."
              icon={Sparkles}
              delay={0.4}
              color="bg-purple-50 dark:bg-purple-900/20"
            />
            <CoreValueCard
              title="Growth"
              description="Supporting continuous improvement and celebrating progress at every step of your journey."
              icon={Dumbbell}
              delay={0.5}
              color="bg-indigo-50 dark:bg-indigo-900/20"
            />
          </div>
          
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 dark:bg-white/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary/5 dark:bg-white/5 blur-3xl"></div>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their fitness journey with our platform
            </p>
            <div className="w-20 h-1 bg-primary dark:bg-white mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="This platform completely changed how I approach my workouts. The personalized plans are exactly what I needed to start seeing real progress."
              author="Alex Thompson"
              role="Fitness Enthusiast"
              rating={5}
              delay={0}
            />
            <Testimonial
              quote="As a busy professional, I needed something efficient and effective. This app delivers exactly that - structured workouts that fit my schedule perfectly."
              author="Jamie Lee"
              role="Marketing Executive"
              rating={5}
              delay={0.1}
            />
            <Testimonial
              quote="The progress tracking feature is amazing! Being able to see my improvements over time keeps me motivated and on track with my fitness goals."
              author="Chris Morgan"
              role="Software Developer"
              rating={4}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-primary dark:text-white">How Muscle Metric Works For You</h2>
                <p className="text-lg text-muted-foreground dark:text-gray-300">
                  Our intuitive platform makes it simple to plan, track, and achieve your fitness goals with features designed for real results.
                </p>
                
                <div className="space-y-6 mt-8">
                  <ProductFeature
                    title="Create Custom Workout Plans"
                    description="Design personalized workout routines tailored to your specific goals, fitness level, and available equipment."
                    icon={Dumbbell}
                    delay={0.1}
                  />
                  
                  <ProductFeature
                    title="Schedule Your Training"
                    description="Easily organize your workouts in a weekly calendar to maintain consistency and build healthy habits."
                    icon={Calendar}
                    delay={0.2}
                  />
                  
                  <ProductFeature
                    title="Track Your Progress"
                    description="Monitor your performance with detailed metrics and visualizations to see your improvements over time."
                    icon={BarChart2}
                    delay={0.3}
                  />
                  
                  <ProductFeature
                    title="Stay Connected"
                    description="Get support and motivation through our growing community of fitness enthusiasts."
                    icon={Users}
                    delay={0.4}
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
              >
                <img 
                  src={ImagePlaceholder}
                  alt="Muscle Metric App Screenshot" 
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-purple-800 dark:from-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
        <div className="container px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold drop-shadow-sm">
                Ready to Transform Your Fitness Journey?
              </h2>
              <p className="text-xl text-white/80">
                Join thousands of users who are already achieving their fitness goals with our platform.
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-4 border-white/30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border-4 border-white/20"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full border-4 border-white/10"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;