import {
  Brain,
  Code2,
  Github,
  Sparkles,
  Zap,
} from "lucide-react";

const techStack = [
  { icon: Code2, label: "React" },
  { icon: Sparkles, label: "TypeScript" },
  { icon: Zap, label: "Tailwind CSS" },
  { icon: Brain, label: "Python" },
  { icon: Sparkles, label: "Gemini AI" },
  { icon: Github, label: "GitHub API" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-muted-foreground">Built with</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} AI LinkedIn Automation. Portfolio project.
          </p>
        </div>
      </div>
    </footer>
  );
}
