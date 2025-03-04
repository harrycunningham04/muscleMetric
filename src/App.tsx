import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { SettingsProvider } from "./context/SettingsContext";
import Index from "./pages/index";
import Main from "./pages/main";
import Plans from "./pages/plans";
import Workout from "./pages/workout";
import WorkoutDetails from "./pages/workoutDetails";
import CustomPlans from "./pages/customPlans";
import PlanEditor from "./pages/planEditor";
import PlanDetails from "./pages/planDetails";
import Contact from "./pages/contact";
import Verify from "./pages/verify";
import About from "./pages/about";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import History from "./pages/history";
import HistoryDetails from "./pages/historyDetails";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showNav = !["/", "/verify"].includes(location.pathname);
  return (
    <div className="flex flex-col min-h-screen">
      {showNav && <Navigation />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/workout/:id" element={<WorkoutDetails />} />
          <Route path="/custom-plans" element={<CustomPlans />} />
          <Route path="/plans/new" element={<PlanEditor />} />
          <Route path="/plans/:id/edit" element={<PlanEditor />} />
          <Route path="/plans/:id" element={<PlanDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/history" element={<History />} />
          <Route path="/history/:id" element={<HistoryDetails />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SettingsProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/muscleMetric/frontend">
          <AppContent />
        </BrowserRouter>
      </SettingsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
