import requests

class GitHubClient:

    BASE_URL = "https://api.github.com"

    def get_repo(self, owner, repo):

        url = f"{self.BASE_URL}/repos/{owner}/{repo}"

        response = requests.get(url)
        response.raise_for_status()

        return response.json()

    def get_readme(self, owner, repo):

        url = f"{self.BASE_URL}/repos/{owner}/{repo}/readme"

        response = requests.get(
            url,
            headers={
                "Accept": "application/vnd.github.raw"
            }
        )

        response.raise_for_status()

        return response.text
    
    def get_languages(self, owner: str, repo: str):
        
        url = f"{self.BASE_URL}/repos/{owner}/{repo}/languages"

        response = requests.get(url)

        response.raise_for_status()

        return response.json()