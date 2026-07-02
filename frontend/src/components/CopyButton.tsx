import { useCallback } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/utils/validation";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className }: CopyButtonProps) {
  const { toast } = useToast();

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(text);
    if (success) {
      toast({
        title: "Copied to clipboard",
        description: "Content is ready to paste.",
      });
    } else {
      toast({
        title: "Copy failed",
        description: "Unable to access clipboard. Please copy manually.",
        variant: "destructive",
      });
    }
  }, [text, toast]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className={cn("gap-2", className)}
      aria-label={`Copy ${label.toLowerCase()}`}
    >
      <Copy className="h-3.5 w-3.5" />
      {label}
    </Button>
  );
}

export function CopyIconButton({ text, label, className }: CopyButtonProps) {
  const { toast } = useToast();

  const handleCopy = useCallback(async () => {
    const success = await copyToClipboard(text);
    toast({
      title: success ? "Copied!" : "Copy failed",
      description: success
        ? "Content copied to clipboard."
        : "Please copy manually.",
      variant: success ? "default" : "destructive",
    });
  }, [text, toast]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className={cn("h-8 w-8 text-muted-foreground hover:text-foreground", className)}
      aria-label={label ?? "Copy to clipboard"}
    >
      <Check className="hidden h-4 w-4" />
      <Copy className="h-4 w-4" />
    </Button>
  );
}
