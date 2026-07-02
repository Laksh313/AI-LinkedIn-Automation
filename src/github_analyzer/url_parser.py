from urllib.parse import urlparse


def parse_github_url(url: str) -> tuple[str, str]:
    parsed = urlparse(url)

    if parsed.scheme not in {"http", "https"} or parsed.netloc.lower() != "github.com":
        raise ValueError("Invalid GitHub repository URL")

    path = parsed.path.strip("/")
    parts = [segment for segment in path.split("/") if segment]

    if len(parts) < 2:
        raise ValueError("Invalid GitHub repository URL")

    owner, repo = parts[0], parts[1]
    if not owner or not repo:
        raise ValueError("Invalid GitHub repository URL")

    return owner, repo