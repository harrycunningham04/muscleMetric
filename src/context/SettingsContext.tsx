import React, { createContext, useContext, useState, useEffect } from "react";

type WeightUnit = "lbs" | "kg";

interface SettingsContextType {
  weightUnit: WeightUnit;
  setWeightUnit: (unit: WeightUnit) => void;
  convertWeight: (weight: number, toUnit?: WeightUnit) => number;
  formatWeight: (weight: number, toUnit?: WeightUnit) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  // Load from localStorage or use default
  const [weightUnit, setWeightUnitState] = useState<WeightUnit>(() => {
    const savedUnit = localStorage.getItem("weightUnit");
    return (savedUnit as WeightUnit) || "lbs";
  });

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("weightUnit", weightUnit);
  }, [weightUnit]);

  const setWeightUnit = (unit: WeightUnit) => {
    setWeightUnitState(unit);
  };

  // Conversion functions
  const convertWeight = (weight: number, toUnit?: WeightUnit): number => {
    const targetUnit = toUnit || weightUnit;
    
    if (targetUnit === "kg" && weightUnit === "lbs") {
      // Convert from lbs to kg
      return parseFloat((weight * 0.453592).toFixed(1));
    } else if (targetUnit === "lbs" && weightUnit === "kg") {
      // Convert from kg to lbs
      return parseFloat((weight * 2.20462).toFixed(1));
    }
    
    // No conversion needed
    return weight;
  };

  // Format weight with unit
  const formatWeight = (weight: number, toUnit?: WeightUnit): string => {
    const targetUnit = toUnit || weightUnit;
    const convertedWeight = convertWeight(weight, targetUnit);
    return `${convertedWeight} ${targetUnit}`;
  };

  return (
    <SettingsContext.Provider 
      value={{ 
        weightUnit, 
        setWeightUnit,
        convertWeight,
        formatWeight
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};