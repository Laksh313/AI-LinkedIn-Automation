import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from github_analyzer.github_analyzer import RepoAnalyzer
from llm.client import GeminiClient

analyzer = RepoAnalyzer()
client = GeminiClient()


def build_frontend_analysis_payload(llm_analysis: dict[str, Any]) -> dict[str, Any]:
    supporting_content = client.generate_supporting_content(json.dumps(llm_analysis))
    linkedin_showcase = client.generate_post_content(json.dumps(llm_analysis))

    return {
        "analysis": {
            "project_purpose": llm_analysis.get("project_purpose", ""),
            "technologies": llm_analysis.get("tech_stack", []) or [],
            "features": llm_analysis.get("key_features", []) or [],
            "problems_solved": [llm_analysis.get("problem_solved", "")] if llm_analysis.get("problem_solved") else [],
            "technical_challenges": llm_analysis.get("technical_challenges", []) or [],
            "learning_outcomes": llm_analysis.get("learning_outcomes", []) or [],
            "future_improvements": llm_analysis.get("real_world_applications", []) or [],
        },
        "linkedin_showcase": linkedin_showcase,
        "technical_breakdown": supporting_content.get("technical_breakdown", ""),
        "carousel": supporting_content.get("carousel", []) or [],
        "resume_bullets": supporting_content.get("resume_bullets", []) or [],
        "portfolio_description": supporting_content.get("portfolio_description", ""),
        "hashtags": supporting_content.get("hashtags", []) or [],
    }


def _parse_llm_analysis(llm_analysis_text: str) -> dict[str, Any]:
    try:
        return json.loads(llm_analysis_text)
    except json.JSONDecodeError:
        cleaned = llm_analysis_text.strip()
        if cleaned.startswith("```json"):
            cleaned = cleaned[len("```json"):]
        if cleaned.startswith("```"):
            cleaned = cleaned[3:]
        if cleaned.endswith("```"):
            cleaned = cleaned[:-3]
        cleaned = cleaned.strip()
        try:
            return json.loads(cleaned)
        except json.JSONDecodeError:
            return {
                "project_purpose": "",
                "problem_solved": "",
                "tech_stack": [],
                "key_features": [],
                "technical_challenges": [],
                "real_world_applications": [],
                "learning_outcomes": [],
                "architecture_summary": "",
            }


def analyze_repository(repo_url: str) -> dict[str, Any]:
    github_analysis = analyzer.analyse(repo_url)
    llm_analysis_text = client.analyze_project(github_analysis.model_dump_json(indent=2))
    llm_analysis = _parse_llm_analysis(llm_analysis_text)
    frontend_payload = build_frontend_analysis_payload(llm_analysis)

    repo_name = repo_url.rstrip("/").split("/")[-1]
    data = {
        "repo_name": repo_name,
        "repo_url": repo_url,
        "linkedin_post": frontend_payload["linkedin_showcase"],
        **frontend_payload,
    }

    output_dir = Path("data/content")
    output_dir.mkdir(parents=True, exist_ok=True)

    file_path = output_dir / f"{repo_name}.json"
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    return data


def main() -> None:
    repo_url = "https://github.com/Laksh313/CodeAlpha_Handwritten-Character-Recognition"
    result = analyze_repository(repo_url)
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()