import { AlertCircle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ErrorCardProps {
  message: string;
  className?: string;
}

export function ErrorCard({ message, className }: ErrorCardProps) {
  return (
    <Card
      className={cn(
        "border-destructive/30 bg-destructive/5 animate-slide-up",
        className,
      )}
      role="alert"
    >
      <CardContent className="flex items-start gap-3 p-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/15">
          <AlertCircle className="h-5 w-5 text-destructive" />
        </div>
        <div>
          <p className="font-medium text-destructive">Invalid URL</p>
          <p className="mt-1 text-sm text-muted-foreground">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
