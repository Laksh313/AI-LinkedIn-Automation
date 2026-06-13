from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

class GeminiClient:

    def __init__(self):
        self.client = genai.Client(
            api_key=os.getenv("GEMINI_API_KEY")
        )

    def analyze_project(self, payload):
        
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""You are an expert software engineer.

        Analyze this GitHub repository.

        Repository:

        {payload}

        Identify:

        1. Project purpose
        2. Problem solved
        3. Tech stack
        4. Key features
        5. Technical challenges likely faced
        6. Real-world applications
        7. Learning outcomes
        8. Architecture summary

        Return ONLY valid JSON matching:

        {{
            "project_purpose": "",
            "problem_solved": "",
            "tech_stack": [],
            "key_features": [],
            "technical_challenges": [],
            "real_world_applications": [],
            "learning_outcomes": [],
            "architecture_summary": ""
        }}"""
        )

        return(response.text)