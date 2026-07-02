export interface ProjectAnalysis {
  project_purpose: string;
  technologies: string[];
  features: string[];
  problems_solved: string[];
  technical_challenges: string[];
  learning_outcomes: string[];
  future_improvements: string[];
}

export interface AnalysisResponse {
  analysis: ProjectAnalysis;
  linkedin_showcase: string;
  technical_breakdown: string;
  carousel: string[];
  resume_bullets: string[];
  portfolio_description: string;
  hashtags: string[];
}

export type AppView = "idle" | "loading" | "results" | "error";

export interface AnalysisState {
  view: AppView;
  data: AnalysisResponse | null;
  error: string | null;
  repoUrl: string;
}
