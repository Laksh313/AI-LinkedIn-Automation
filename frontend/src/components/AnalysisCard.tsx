import {
  AlertTriangle,
  BookOpen,
  Layers,
  Lightbulb,
  Rocket,
  Target,
  Wrench,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectAnalysis } from "@/types/analysis";

interface AnalysisCardProps {
  analysis: ProjectAnalysis;
}

interface AnalysisSection {
  key: keyof Pick<
    ProjectAnalysis,
    | "features"
    | "problems_solved"
    | "technical_challenges"
    | "learning_outcomes"
    | "future_improvements"
  >;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const listSections: AnalysisSection[] = [
  { key: "features", title: "Key Features", icon: Layers },
  { key: "problems_solved", title: "Problems Solved", icon: Target },
  {
    key: "technical_challenges",
    title: "Technical Challenges",
    icon: AlertTriangle,
  },
  { key: "learning_outcomes", title: "Learning Outcomes", icon: BookOpen },
  {
    key: "future_improvements",
    title: "Future Improvements",
    icon: Rocket,
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
  return (
    <Card className="glass animate-slide-up overflow-hidden">
      <CardHeader className="border-b border-border/50 bg-card/40">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Wrench className="h-5 w-5 text-primary" />
          Project Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8 p-6">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-400" />
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Project Purpose
            </h4>
          </div>
          <p className="text-sm leading-relaxed text-foreground/90">
            {analysis.project_purpose}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {analysis.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {listSections.map(({ key, title, icon: Icon }) => (
          <div key={key}>
            <div className="mb-3 flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {title}
              </h4>
            </div>
            <BulletList items={analysis[key]} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
