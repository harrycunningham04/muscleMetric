
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit2, Save } from "lucide-react";

interface UserData {
  name: string;
  email: string;
  height: string;
  weight: string;
  dateOfBirth: string;
}

const initialUserData: UserData = {
  name: "John Doe",
  email: "john@example.com",
  height: "5'10\"",
  weight: "75",
  dateOfBirth: "1990-01-01"
};

export const UserProfile: React.FC = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [userData, setUserData] = React.useState<UserData>(initialUserData);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating user data:", userData);
    setIsEditing(false);
  };

  return (
    <>
      <Button 
        variant="outline" 
        size="icon" 
        className="rounded-full w-8 h-8 text-base font-semibold"
        onClick={() => setIsOpen(true)}
      >
        {userData.name.charAt(0)}
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              {isEditing ? <Save className="h-4 w-4" /> : <Edit2 className="h-4 w-4" />}
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                <Input
                  id="height"
                  value={userData.height}
                  onChange={(e) => setUserData({ ...userData, height: e.target.value })}
                  disabled={!isEditing}
                  placeholder={'e.g., 5\'10"'}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kgs)</Label>
                <Input
                  id="weight"
                  type="number"
                  value={userData.weight}
                  onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  value={userData.dateOfBirth}
                  onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
                  disabled={!isEditing}
                />
              </div>
            </div>
            {isEditing && (
              <div className="flex justify-end">
                <Button type="submit" className="w-full md:w-auto">
                  Save Changes
                </Button>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};