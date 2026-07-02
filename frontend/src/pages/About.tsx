import {
  ArrowRight,
  Bot,
  Database,
  Github,
  Layers,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technologies = [
  "Python",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Google Gemini AI",
  "GitHub REST API",
  "Vite",
  "shadcn/ui",
];

const architectureSteps = [
  {
    icon: Github,
    title: "GitHub API Layer",
    description:
      "Fetches repository metadata, README, file structure, and language statistics from public repositories using the GitHub REST API.",
  },
  {
    icon: Database,
    title: "Analysis Engine",
    description:
      "Python backend parses repository data, extracts project insights, and structures information for AI processing.",
  },
  {
    icon: Bot,
    title: "Gemini AI Layer",
    description:
      "Google's Gemini model generates professional LinkedIn posts, technical breakdowns, carousel ideas, and resume bullets.",
  },
  {
    icon: Layers,
    title: "React Frontend",
    description:
      "Modern TypeScript frontend displays analysis results in an intuitive dashboard with copy-to-clipboard functionality.",
  },
];

const roadmap = [
  "Connect frontend to live Python backend API",
  "Add user authentication and analysis history",
  "Support batch analysis of multiple repositories",
  "Export content as PDF or Markdown",
  "Add LinkedIn post scheduling integration",
  "Implement custom tone and style preferences",
];

export function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeader
        title="About This Project"
        description="AI-powered GitHub repository analysis for professional content generation"
      />

      <div className="space-y-8 animate-fade-in">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              What It Does
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              AI LinkedIn Automation is a portfolio project that bridges the gap
              between software engineering work and professional self-promotion.
              It analyzes any public GitHub repository and uses Google&apos;s
              Gemini AI to generate polished, LinkedIn-ready content.
            </p>
            <p>
              Simply paste a repository URL, and the system produces a
              comprehensive analysis including project purpose, technical
              challenges, a full LinkedIn showcase post, carousel slide ideas,
              resume bullet points, portfolio descriptions, and relevant
              hashtags—all tailored to your project.
            </p>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Project Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-colors hover:border-primary/20"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Future Roadmap</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {roadmap.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-4">
          <Button asChild size="lg" className="gap-2 rounded-xl">
            <Link to="/">
              Try It Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
