import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { CopyButton } from "@/components/CopyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  title: string;
  content: string;
  icon?: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
  copyLabel?: string;
  className?: string;
}

export function ContentCard({
  title,
  content,
  icon,
  collapsible = false,
  defaultExpanded = true,
  copyLabel = "Copy",
  className,
}: ContentCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const isCollapsed = collapsible && !expanded;

  return (
    <Card
      className={cn(
        "glass animate-slide-up transition-all duration-300 hover:border-primary/20",
        className,
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 bg-card/40 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          {title}
        </CardTitle>
        <div className="flex items-center gap-2">
          <CopyButton text={content} label={copyLabel} />
          {collapsible && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              aria-label={expanded ? "Collapse content" : "Expand content"}
            >
              {expanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="relative p-6">
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            isCollapsed && "max-h-32",
          )}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {content}
          </p>
        </div>
        {isCollapsed && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent" />
        )}
        {collapsible && isCollapsed && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 w-full text-muted-foreground"
            onClick={() => setExpanded(true)}
          >
            Show more
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
