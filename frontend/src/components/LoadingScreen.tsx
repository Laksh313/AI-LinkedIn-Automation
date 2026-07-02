import {
  Brain,
  Code2,
  FileSearch,
  Sparkles,
  Wand2,
} from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { extractRepoName } from "@/utils/validation";

interface LoadingScreenProps {
  repoUrl: string;
}

const steps = [
  { icon: FileSearch, label: "Fetching repository metadata" },
  { icon: Code2, label: "Analyzing source code structure" },
  { icon: Brain, label: "Processing with Gemini AI" },
  { icon: Wand2, label: "Generating LinkedIn content" },
  { icon: Sparkles, label: "Finalizing your showcase" },
];

export function LoadingScreen({ repoUrl }: LoadingScreenProps) {
  const [activeStep, setActiveStep] = useState(0);
  const repoName = extractRepoName(repoUrl);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 animate-fade-in"
      role="status"
      aria-live="polite"
      aria-label="Analyzing repository"
    >
      <div className="relative mb-8">
        <div className="h-24 w-24 rounded-2xl bg-primary/10 animate-pulse-glow flex items-center justify-center">
          <Brain className="h-12 w-12 text-primary animate-pulse" />
        </div>
        <div className="absolute -inset-4 rounded-3xl border border-primary/20 animate-ping opacity-20" />
      </div>

      <h2 className="text-2xl font-semibold">Analyzing Repository</h2>
      <p className="mt-2 text-muted-foreground">
        Processing{" "}
        <span className="font-medium text-foreground">{repoName}</span>
      </p>

      <div className="mt-10 w-full max-w-md space-y-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const isComplete = index < activeStep;

          return (
            <div
              key={step.label}
              className={cn(
                "flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-500",
                isActive && "border-primary/40 bg-primary/10",
                isComplete && "border-border/50 bg-card/30 opacity-60",
                !isActive && !isComplete && "border-transparent opacity-40",
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg transition-colors",
                  isActive && "bg-primary/20 text-primary",
                  isComplete && "bg-emerald-500/20 text-emerald-400",
                  !isActive && !isComplete && "bg-muted text-muted-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span
                className={cn(
                  "text-sm transition-colors",
                  isActive && "font-medium text-foreground",
                  isComplete && "text-muted-foreground line-through",
                  !isActive && !isComplete && "text-muted-foreground",
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700 ease-out"
          style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
