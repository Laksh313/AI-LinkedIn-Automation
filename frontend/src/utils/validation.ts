const GITHUB_REPO_PATTERN =
  /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}\/[a-zA-Z0-9._-]+\/?(?:\?.*)?$/;

export function validateGitHubUrl(url: string): { valid: boolean; error?: string } {
  const trimmed = url.trim();

  if (!trimmed) {
    return { valid: false, error: "Please enter a GitHub repository URL." };
  }

  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return {
      valid: false,
      error: "URL must start with https:// (e.g. https://github.com/username/repo).",
    };
  }

  if (!trimmed.includes("github.com")) {
    return {
      valid: false,
      error: "Please enter a valid GitHub repository URL.",
    };
  }

  if (!GITHUB_REPO_PATTERN.test(trimmed)) {
    return {
      valid: false,
      error:
        "Invalid GitHub repository URL. Use the format: https://github.com/username/repository",
    };
  }

  return { valid: true };
}

export function normalizeGitHubUrl(url: string): string {
  return url.trim().replace(/\/$/, "");
}

export function extractRepoName(url: string): string {
  const normalized = normalizeGitHubUrl(url);
  return normalized.split("/").pop() ?? "repository";
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function randomDelay(minMs: number, maxMs: number): Promise<void> {
  const ms = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
  return delay(ms);
}
