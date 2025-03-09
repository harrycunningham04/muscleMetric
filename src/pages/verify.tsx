import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";

interface VerifyFormData {
  name: string;
  email: string;
  dateOfBirth: string;
  height: string;
  weight: string;
  password: string;
}

const Verify = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(location.state?.type !== "login");
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState<VerifyFormData>({
    name: "",
    email: "",
    dateOfBirth: "",
    height: "",
    weight: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password || (isSignUp && (!formData.name || !formData.dateOfBirth || !formData.height || !formData.weight))) {
      toast.error("Please fill in all required fields");
      return;
    }

    localStorage.setItem("userProfile", JSON.stringify(formData));
    toast.success(isSignUp ? "Profile created successfully!" : "Welcome back!");
    navigate("/dashboard");
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="container max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center">
          <motion.div 
            initial={false}
            animate={{ 
              gap: "2rem"
            }}
            className="flex flex-col sm:flex-row items-center justify-center"
          >
            <motion.div
              initial={false}
              animate={{ 
                x: 0,
                opacity: 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden sm:block sm:w-[200px] flex-shrink-0"
              style={{
                order: isSignUp ? 0 : 2
              }}
            >
              <motion.div
                className="relative w-32 h-32 flex items-center justify-center cursor-pointer mx-auto"
                onClick={toggleForm}
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  rotateY: isSignUp ? 0 : 180,
                  rotate: isSignUp ? 0 : 360
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 0.6
                }}
              >
                <span className="text-[200px] select-none" style={{ display: "inline-block" }}>
                  🏋️
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ 
                x: 0,
                opacity: 1
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="w-full sm:w-[400px] flex-shrink-0"
              style={{
                order: isSignUp ? 1 : 0
              }}
            >
              <Card className="w-full bg-white/10 backdrop-blur-md border-none">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-primary-foreground text-center">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-primary-foreground text-base">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 text-base md:text-lg p-6"
                        />
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-primary-foreground text-base">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 text-base md:text-lg p-6"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-primary-foreground text-base">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          placeholder="••••••••"
                          className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 text-base md:text-lg p-6"
                        />
                        <Button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
                          variant="ghost"
                          size="icon"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-primary-foreground" />
                          ) : (
                            <Eye className="h-5 w-5 text-primary-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {isSignUp && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="dob" className="text-primary-foreground text-base">Date of Birth</Label>
                          <Input
                            id="dob"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            className="bg-white/20 border-white/30 text-primary-foreground text-base md:text-lg p-6"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="height" className="text-primary-foreground text-base">Height</Label>
                          <Input
                            id="height"
                            value={formData.height}
                            onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                            placeholder={'e.g., 5\'10"'}
                            className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 text-base md:text-lg p-6"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="weight" className="text-primary-foreground text-base">Weight (lbs)</Label>
                          <Input
                            id="weight"
                            type="number"
                            value={formData.weight}
                            onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                            placeholder="170"
                            className="bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/50 text-base md:text-lg p-6"
                          />
                        </div>
                      </>
                    )}

                    <div className="flex flex-col gap-4">
                      <Button type="submit" className="w-full text-base md:text-lg p-6">
                        {isSignUp ? "Sign Up" : "Login"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-white/20 text-primary hover:bg-white/20 text-base md:text-lg p-6"
                        onClick={() => navigate("/")}
                      >
                        Back
                      </Button>
                    </div>

                    <div className="relative py-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/30"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-900 text-primary-foreground">
                          {isSignUp ? "Already have an account?" : "Need an account?"}
                        </span>
                      </div>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={toggleForm}
                      className="w-full text-primary-foreground hover:bg-white/10 text-base md:text-lg"
                    >
                      {isSignUp ? "Log In" : "Sign Up"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Verify;