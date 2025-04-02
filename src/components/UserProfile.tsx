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
  height: number;
  weight: number;
  dateOfBirth: string;
}

const initialUserData: UserData = {
  name: "",
  email: "",
  height: 0,
  weight: 0,
  dateOfBirth: "",
};

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userData, setUserData] = React.useState<UserData>(initialUserData);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);
  const { weightUnit } = useSettings();

    // Fetch user data from the backend
    React.useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch("https://hc920.brighton.domains/muscleMetric/php/user/getUser.php?user_id=2");
          const data = await response.json();
          
          if (data.message) {
            console.error("Error:", data.message);
          } else {
            setUserData({
              name: data.Name,
              email: data.Email,
              height: Number(data.Height),  // Ensure it's a number
              weight: Number(data.Weight),  // Ensure it's a number
              dateOfBirth: data.DateOfBirth,
            });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserData();
    }, []); // Runs only once when the component mounts

  React.useEffect(() => {
    if (!isProfileOpen) {
      setIsEditing(false);
    }
  }, [isProfileOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://hc920.brighton.domains/muscleMetric/php/user/updateUser.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: 2,  // Change this dynamically based on logged-in user
          name: userData.name,
          email: userData.email,
          height: userData.height,
          weight: userData.weight,
          dateOfBirth: userData.dateOfBirth,
        }),
      });
  
      const data = await response.json();
  
      if (data.message === "User updated successfully") {
        console.log("User data updated successfully");
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Failed to update user data:", error);
    }
  
    setIsEditing(false);
  };
  


  return (
    <>
      <div className="flex items-center gap-4">
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
                <Label htmlFor="height">Height (cm)</Label>
                <div className="flex gap-2">
                  <Input
                    id="height"
                    type="number"
                    value={userData.height}
                    onChange={(e) =>
                      setUserData({ ...userData, height: Number(e.target.value) })
                    }
                    disabled={!isEditing}
                    placeholder="Height"
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
                    setUserData({ ...userData, weight:  Number(e.target.value) })
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
