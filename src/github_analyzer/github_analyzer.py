from github_analyzer.github_client import GitHubClient
from github_analyzer.url_parser import parse_github_url
from github_analyzer.project_info import ProjectInfo

class RepoAnalyzer:

    def __init__(self):
        self.github = GitHubClient()

    def analyzer(self, repo_url: str):
        owner, repo = parse_github_url(repo_url)

        metadata = self.github.get_repo(owner, repo)
        readme = self.github.get_readme(owner, repo)
        languages = self.github.get_languages(owner, repo)

        return ProjectInfo(
            name = metadata['name'],
            description = metadata.get('description') or "",
            readme = readme,
            languages =list(languages.keys())
        )