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
    
    def generate_post_content(self, payload):
        
        response = self.client.models.generate_content(
            model="gemini-3.1-flash-lite",
            contents = f"""
You are an experienced software engineer and technical storyteller.

Your task is to write a LinkedIn post based ONLY on the project analysis provided below.

GOALS:

* Showcase the project professionally.
* Demonstrate technical depth without sounding overly academic.
* Make the post attractive to recruiters, hiring managers, and developers.
* Sound human and authentic, not AI-generated.
* Focus on lessons learned, challenges solved, and practical impact.

WRITING RULES:

* Length: 200 to 400 words.
* Professional but conversational tone.
* No emojis.
* No buzzwords, hype, or marketing language.
* Avoid phrases like:

  * "excited to share"
  * "thrilled to announce"
  * "game-changing"
  * "revolutionary"
  * "cutting-edge"
  * "leveraged"
* Explain the problem before the solution.
* Mention the technologies naturally.
* Include one technical challenge and how it was solved.
* Include what was learned while building the project.
* End with a thoughtful question or discussion prompt.
* Add 3 to 5 relevant hashtags at the end.

POST STRUCTURE:

1. Hook (1 to 2 sentences)

   * Introduce the problem or insight that motivated the project.

2. Problem

   * What issue was being solved?

3. Solution

   * What was built?
   * How does it work?

4. Technical Highlights

   * Mention architecture, technologies, models, APIs, frameworks, or algorithms used.

5. Challenges & Learning

   * Discuss one meaningful challenge and takeaway.

6. Closing

   * Reflection, future improvements, or discussion question.

PROJECT ANALYSIS:
{payload}

Return ONLY the LinkedIn post text.
"""
        )

        return(response.text)