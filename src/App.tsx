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
import Terms from "./pages/terms";
import Privacy from "./pages/privacy";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import History from "./pages/history";
import HistoryDetails from "./pages/historyDetails";
import Footer2 from "./components/Footer2";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showNav = !["/", "/verify"].includes(location.pathname);
  const showAlternateFooter = !["/", "/verify"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showNav && <Navigation />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/verify" element={<Verify />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            }
          />
          <Route
            path="/plans"
            element={
              <PrivateRoute>
                <Plans />
              </PrivateRoute>
            }
          />
          <Route
            path="/workout"
            element={
              <PrivateRoute>
                <Workout />
              </PrivateRoute>
            }
          />
          <Route
            path="/workout/:workoutid"
            element={
              <PrivateRoute>
                <WorkoutDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/custom-plans"
            element={
              <PrivateRoute>
                <CustomPlans />
              </PrivateRoute>
            }
          />
          <Route
            path="/plans/new"
            element={
              <PrivateRoute>
                <PlanEditor />
              </PrivateRoute>
            }
          />
          <Route
            path="/plans/:planid"
            element={
              <PrivateRoute>
                <PlanDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <History />
              </PrivateRoute>
            }
          />
          <Route
            path="/history/:historyid"
            element={
              <PrivateRoute>
                <HistoryDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/terms"
            element={
              <PrivateRoute>
                <Terms />
              </PrivateRoute>
            }
          />
          <Route
            path="/privacy"
            element={
              <PrivateRoute>
                <Privacy />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      {showAlternateFooter ? <Footer /> : <Footer2 />}
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
