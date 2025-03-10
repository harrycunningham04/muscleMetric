
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSettings } from "@/context/SettingsContext";

export const Settings = () => {
  const { weightUnit, setWeightUnit } = useSettings();

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>
          Customise your app preferences. Changes will be applied automatically.
        </DialogDescription>
      </DialogHeader>
      
      <div className="py-4 space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Weight Unit</h3>
          <RadioGroup 
            value={weightUnit} 
            onValueChange={(value) => setWeightUnit(value as "lbs" | "kg")}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lbs" id="lbs" />
              <Label htmlFor="lbs">Pounds (lbs)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="kg" id="kg" />
              <Label htmlFor="kg">Kilograms (kg)</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </DialogContent>
  );
};