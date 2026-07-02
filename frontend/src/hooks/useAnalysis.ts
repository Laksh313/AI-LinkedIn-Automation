import { useCallback, useState } from "react";

import type { AnalysisResponse, AppView } from "@/types/analysis";
import { fetchAnalysis } from "@/services/analysisService";
import { validateGitHubUrl } from "@/utils/validation";

interface UseAnalysisReturn {
  view: AppView;
  data: AnalysisResponse | null;
  error: string | null;
  repoUrl: string;
  setRepoUrl: (url: string) => void;
  analyze: () => Promise<void>;
  reset: () => void;
}

export function useAnalysis(): UseAnalysisReturn {
  const [view, setView] = useState<AppView>("idle");
  const [data, setData] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [repoUrl, setRepoUrlState] = useState("");

  const setRepoUrl = useCallback((url: string) => {
    setRepoUrlState(url);
    setError(null);
    if (view === "error") {
      setView("idle");
    }
  }, [view]);

  const analyze = useCallback(async () => {
    const validation = validateGitHubUrl(repoUrl);

    if (!validation.valid) {
      setError(validation.error ?? "Invalid URL");
      setView("error");
      setData(null);
      return;
    }

    setError(null);
    setView("loading");
    setData(null);

    try {
      const result = await fetchAnalysis(repoUrl);
      setData(result);
      setView("results");
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong while analyzing the repository. Please try again.";
      setError(message);
      setView("error");
    }
  }, [repoUrl]);

  const reset = useCallback(() => {
    setView("idle");
    setData(null);
    setError(null);
  }, []);

  return {
    view,
    data,
    error,
    repoUrl,
    setRepoUrl,
    analyze,
    reset,
  };
}
