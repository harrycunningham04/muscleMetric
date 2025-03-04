import React, { createContext, useContext, useState } from "react";

type WeightUnit = "lbs" | "kg";

interface SettingsContextType {
  weightUnit: WeightUnit;
  setWeightUnit: (unit: WeightUnit) => void;
  convertWeight: (weight: number, toUnit?: WeightUnit) => number;
  formatWeight: (weight: number, toUnit?: WeightUnit) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Load from localStorage or use default
  const [weightUnit, setWeightUnitState] = useState<WeightUnit>(() => {
    const savedUnit = localStorage.getItem("weightUnit") as WeightUnit | null;
    return savedUnit ?? "kg";
  });

  // Save to localStorage when changed
  const setWeightUnit = (unit: WeightUnit) => {
    localStorage.setItem("weightUnit", unit);
    setWeightUnitState(unit);
  };

  // Conversion functions
  const convertWeight = (weight: number, toUnit?: WeightUnit): number => {
    const targetUnit = toUnit || weightUnit; // Use user's preferred unit

    if (targetUnit === "lbs") {
      // Convert kg to lbs
      return parseFloat((weight * 2.20462).toFixed(1));
    } else if (targetUnit === "kg") {
      // Convert lbs to kg (not needed for totalVolume since it's always in kg)
      return parseFloat((weight * 1).toFixed(1));
    }

    return weight; // Fallback (shouldn't happen)
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
        formatWeight,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
