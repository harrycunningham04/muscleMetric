
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Weight, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { StrengthCalculator } from "./Strength/StrengthCalculator";
import { StrengthStandards } from "./Strength/StrengthStandards";

export const ProgressSummary = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Weight className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Calculate Your
                  </p>
                  <p className="text-2xl font-bold">Strength Percentile</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Calculate Your Strength Percentile</DialogTitle>
          </DialogHeader>
          <StrengthCalculator />
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
            <CardContent className="flex items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    View Your
                  </p>
                  <p className="text-2xl font-bold">Strength Standards</p>
                </div>
                <ChevronRight className="w-5 h-5 ml-auto text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Strength Standards by Age Group</DialogTitle>
          </DialogHeader>
          <StrengthStandards />
        </DialogContent>
      </Dialog>
    </div>
  );
};