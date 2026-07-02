import { Sparkles } from "lucide-react";

import { RepoInput } from "@/components/RepoInput";

interface HeroProps {
  repoUrl: string;
  onRepoUrlChange: (url: string) => void;
  onAnalyze: () => void;
  isLoading?: boolean;
}

export function Hero({
  repoUrl,
  onRepoUrlChange,
  onAnalyze,
  isLoading = false,
}: HeroProps) {
  return (
    <section className="relative px-4 py-16 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Sparkles className="h-4 w-4" />
          AI-Powered Content Generation
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="gradient-text">AI LinkedIn</span> Automation
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Analyze any public GitHub repository and generate professional
          LinkedIn-ready content using AI.
        </p>

        <div className="mt-10 flex justify-center">
          <RepoInput
            value={repoUrl}
            onChange={onRepoUrlChange}
            onSubmit={onAnalyze}
            isLoading={isLoading}
          />
        </div>
      </div>
    </section>
  );
}
