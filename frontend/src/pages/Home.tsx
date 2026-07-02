import { ErrorCard } from "@/components/ErrorCard";
import { Dashboard } from "@/components/Dashboard";
import { EmptyState } from "@/components/EmptyState";
import { Hero } from "@/components/Hero";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useAnalysis } from "@/hooks/useAnalysis";

export function Home() {
  const { view, data, error, repoUrl, setRepoUrl, analyze } = useAnalysis();

  return (
    <>
      <Hero
        repoUrl={repoUrl}
        onRepoUrlChange={setRepoUrl}
        onAnalyze={() => void analyze()}
        isLoading={view === "loading"}
      />

      {view === "error" && error && (
        <div className="mx-auto max-w-2xl px-4 pb-8">
          <ErrorCard message={error} />
        </div>
      )}

      {view === "loading" && <LoadingScreen repoUrl={repoUrl} />}

      {view === "idle" && <EmptyState />}

      {view === "results" && data && (
        <Dashboard data={data} repoUrl={repoUrl} />
      )}
    </>
  );
}
