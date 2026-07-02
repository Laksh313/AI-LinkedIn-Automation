import { Github, Loader2, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RepoInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export function RepoInput({
  value,
  onChange,
  onSubmit,
  isLoading = false,
  disabled = false,
}: RepoInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading && !disabled) {
      onSubmit();
    }
  };

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
      <div className="relative flex-1">
        <Github
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="url"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="https://github.com/username/repository"
          disabled={isLoading || disabled}
          aria-label="GitHub repository URL"
          className={cn(
            "h-14 w-full rounded-xl border border-border bg-card/80 pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground/60 backdrop-blur-sm transition-all duration-200",
            "focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
        />
      </div>
      <Button
        size="lg"
        onClick={onSubmit}
        disabled={isLoading || disabled}
        className="h-14 min-w-[180px] gap-2 rounded-xl text-base"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <Search className="h-5 w-5" />
            Analyze Repository
          </>
        )}
      </Button>
    </div>
  );
}
