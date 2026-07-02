import { Search } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function EmptyState() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 animate-fade-in">
      <Card className="glass border-dashed">
        <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Ready to analyze</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter a public GitHub repository URL above and click Analyze to
              generate LinkedIn content, resume bullets, carousel ideas, and
              more.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
