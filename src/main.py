from github_analyzer.github_analyzer import RepoAnalyzer
from llm.client import GeminiClient

analyzer = RepoAnalyzer()
client = GeminiClient()

repo_url = 'https://github.com/Laksh313/CodeAlpha_Handwritten-Character-Recognition'

github_analysis = analyzer.analyse(repo_url)

#print(github_analysis)

llm_analysis = client.analyze_project(github_analysis.model_dump_json(indent=2))

linkedin_content = client.generate_post_content(llm_analysis)

import json
from pathlib import Path

repo_name = repo_url.rstrip("/").split("/")[-1]

data = {
    "repo_name": repo_name,
    "repo_url": repo_url,
    "linkedin_post": linkedin_content
}

output_dir = Path("data/content")
output_dir.mkdir(parents=True, exist_ok=True)

file_path = output_dir / f"{repo_name}.json"

with open(file_path, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

'''with open("linkedin_content.txt", "w", encoding="utf-8") as f:
    f.write(linkedin_content)'''