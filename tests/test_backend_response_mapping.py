import unittest

from src.main import build_frontend_analysis_payload


class BackendResponseMappingTest(unittest.TestCase):
    def test_builds_richer_frontend_payload_from_llm_json(self) -> None:
        llm_analysis = {
            "project_purpose": "Build a tool",
            "problem_solved": "Solve onboarding",
            "tech_stack": ["Python", "FastAPI"],
            "key_features": ["API", "Dashboard"],
            "technical_challenges": ["Latency"],
            "real_world_applications": ["Teams"],
            "learning_outcomes": ["API design"],
            "architecture_summary": "Service oriented architecture",
        }

        payload = build_frontend_analysis_payload(llm_analysis)

        self.assertEqual(payload["analysis"]["project_purpose"], "Build a tool")
        self.assertEqual(payload["analysis"]["technologies"], ["Python", "FastAPI"])
        self.assertEqual(payload["analysis"]["features"], ["API", "Dashboard"])
        self.assertEqual(payload["analysis"]["problems_solved"], ["Solve onboarding"])
        self.assertEqual(payload["analysis"]["technical_challenges"], ["Latency"])
        self.assertEqual(payload["analysis"]["learning_outcomes"], ["API design"])
        self.assertEqual(payload["analysis"]["future_improvements"], ["Teams"])


if __name__ == "__main__":
    unittest.main()
