from github_analyzer.github_analyzer import RepoAnalyzer

analyzer = RepoAnalyzer()

result = analyzer.analyzer("https://github.com/Laksh313/CodeAlpha_Handwritten-Character-Recognition")

print(result.model_dump_json(indent=2))