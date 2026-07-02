import {
  FileText,
  Hash,
  Images,
  Linkedin,
  List,
  Terminal,
} from "lucide-react";

import { AnalysisCard } from "@/components/AnalysisCard";
import { ContentCard } from "@/components/ContentCard";
import { CopyButton } from "@/components/CopyButton";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { AnalysisResponse } from "@/types/analysis";

interface DashboardProps {
  data: AnalysisResponse;
  repoUrl: string;
}

export function Dashboard({ data, repoUrl }: DashboardProps) {
  const resumeText = data.resume_bullets.map((b) => `• ${b}`).join("\n");
  const hashtagsText = data.hashtags.join(" ");

  return (
    <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <SectionHeader
        title="Analysis Dashboard"
        description={`Results for ${repoUrl}`}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <AnalysisCard analysis={data.analysis} />
        </div>

        <div className="lg:col-span-2">
          <ContentCard
            title="LinkedIn Showcase"
            content={data.linkedin_showcase}
            icon={<Linkedin className="h-5 w-5 text-[#0A66C2]" />}
            collapsible
            defaultExpanded
            copyLabel="Copy Post"
          />
        </div>

        <div className="lg:col-span-2">
          <ContentCard
            title="Technical Breakdown"
            content={data.technical_breakdown}
            icon={<Terminal className="h-5 w-5 text-emerald-400" />}
            copyLabel="Copy Breakdown"
          />
        </div>

        <div className="lg:col-span-2">
          <Card className="glass animate-slide-up">
            <CardHeader className="border-b border-border/50 bg-card/40">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Images className="h-5 w-5 text-violet-400" />
                Carousel Ideas
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.carousel.map((slide, index) => (
                <div
                  key={slide}
                  className="group relative rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:-translate-y-1"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {slide}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="glass animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 bg-card/40 pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <List className="h-5 w-5 text-amber-400" />
              Resume Bullet Points
            </CardTitle>
            <CopyButton text={resumeText} label="Copy Bullets" />
          </CardHeader>
          <CardContent className="p-6">
            <ul className="space-y-3">
              {data.resume_bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 bg-card/40 pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-sky-400" />
              Portfolio Description
            </CardTitle>
            <CopyButton
              text={data.portfolio_description}
              label="Copy Description"
            />
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {data.portfolio_description}
            </p>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Card className="glass animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 bg-card/40 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Hash className="h-5 w-5 text-pink-400" />
                Suggested Hashtags
              </CardTitle>
              <CopyButton text={hashtagsText} label="Copy Hashtags" />
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {data.hashtags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-default px-4 py-1.5 text-sm transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
