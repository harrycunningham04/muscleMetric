import { toast } from "@/hooks/use-toast";
import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const isSessionValid = () => {
  const sessionStr = localStorage.getItem("session");
  if (!sessionStr) return false;

  try {
    const session = JSON.parse(sessionStr);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    return now - session.timestamp < oneDay;
  } catch {
    return false;
  }
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = isSessionValid();

  useEffect(() => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to access this page.",
        variant: "destructive",
      });
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
