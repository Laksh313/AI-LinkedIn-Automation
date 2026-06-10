from urllib.parse import urlparse

def parse_github_url(url):

    path = urlparse(url).path.strip("/")

    owner, repo = path.split("/")[:2]

    return owner, repo