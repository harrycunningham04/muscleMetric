import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Edit2, Save, Settings as SettingsIcon } from "lucide-react";
import { Settings } from "./Settings";
import { useSettings } from "@/context/SettingsContext";

interface UserData {
  name: string;
  email: string;
  heightFeet: string;
  heightInches: string;
  weight: string;
  dateOfBirth: string;
}

const initialUserData: UserData = {
  name: "John Doe",
  email: "john@example.com",
  heightFeet: "5",
  heightInches: "10",
  weight: "75",
  dateOfBirth: "1990-01-01",
};

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userData, setUserData] = React.useState<UserData>(initialUserData);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { weightUnit, formatWeight } = useSettings();

  React.useEffect(() => {
    if (!isProfileOpen) {
      setUserData(initialUserData);
      setIsEditing(false);
    }
  }, [isProfileOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
    setIsEditing(false);
  };

  // Convert weight for display if needed
  const displayWeight = userData.weight
    ? formatWeight(parseFloat(userData.weight))
    : "";

  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSettingsOpen(true)}
          className="h-8 w-8"
        >
          <SettingsIcon className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-8 h-8 text-base font-semibold"
          onClick={() => setIsProfileOpen(true)}
        >
          {userData.name
            .split(" ")
            .map((word) => word[0])
            .join("")}
        </Button>
      </div>

      {/* Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Profile Information</DialogTitle>
          </DialogHeader>
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <Save className="h-4 w-4" />
              ) : (
                <Edit2 className="h-4 w-4" />
              )}
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heightFeet">Height</Label>
                <div className="flex gap-2">
                  <Input
                    id="heightFeet"
                    type="number"
                    value={userData.heightFeet}
                    onChange={(e) =>
                      setUserData({ ...userData, heightFeet: e.target.value })
                    }
                    disabled={!isEditing}
                    placeholder="Feet"
                  />
                  <Input
                    id="heightInches"
                    type="number"
                    value={userData.heightInches}
                    onChange={(e) =>
                      setUserData({ ...userData, heightInches: e.target.value })
                    }
                    disabled={!isEditing}
                    placeholder="Inches"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight ({weightUnit})</Label>
                <Input
                  id="weight"
                  type="number"
                  value={userData.weight}
                  onChange={(e) =>
                    setUserData({ ...userData, weight: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={userData.dateOfBirth}
                  onChange={(e) =>
                    setUserData({ ...userData, dateOfBirth: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
            </div>
          </form>
          {isEditing && (
            <DialogFooter>
              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full md:w-auto"
              >
                Save Changes
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <Settings />
      </Dialog>
    </>
  );
};
