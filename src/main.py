from github_analyzer.github_analyzer import RepoAnalyzer
from llm.client import GeminiClient

analyzer = RepoAnalyzer()
client = GeminiClient()

result = analyzer.analyzer("https://github.com/Laksh313/CodeAlpha_Handwritten-Character-Recognition")

#print(result.model_dump_json(indent=2))

print(client.analyze_project(result.model_dump_json(indent=2)))