import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Index from "./pages/index";
import Main from "./pages/main";
import Plans from "./pages/plans";
import PreMadePlans from "./pages/premadePlans";
import Contact from "./pages/contact";
import Verify from "./pages/verify";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Main />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/pre-made-plans" element={<PreMadePlans />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
