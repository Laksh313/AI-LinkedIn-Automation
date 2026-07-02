# AI LinkedIn Automation

An AI-powered Python application that analyzes GitHub repositories and generates professional LinkedIn content to showcase software projects.

The goal of this project is to automate the process of turning GitHub repositories into high-quality LinkedIn posts that highlight technical skills, project architecture, and learning outcomes.

---

## Features

### Current Features

- Analyze public GitHub repositories
- Extract repository metadata
- Retrieve README and project information
- Generate structured AI project analysis using Google Gemini
- Generate LinkedIn-ready content including:
  - Showcase post
  - Technical breakdown
  - Carousel ideas
  - Image/banner suggestions
  - Resume bullet points
  - Portfolio description
  - Suggested hashtags

- Save generated content as JSON for easy reuse

### Planned Features

- LinkedIn publishing
- Draft approval workflow
- Image generation
- Carousel generation
- Project history database
- Automated posting schedule
- Analytics dashboard
- Multi-LLM support

---

# Project Workflow

```
GitHub Repository
        │
        ▼
GitHub API
        │
        ▼
Repository Extraction
        │
        ▼
Gemini Project Analysis
        │
        ▼
LinkedIn Content Generation
        │
        ▼
JSON Output
```

---

# Project Structure

```
AI-LinkedIn-Automation/
│
├── src/
│   ├── clients/
│   │   ├── github_client.py
│   │   └── gemini_client.py
│   │
│   ├── models/
│   │
│   ├── services/
│   │
│   ├── prompts/
│   │
│   ├── utils/
│   │
│   ├── config.py
│   └── main.py
│
├── output/
│
├── tests/
│
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

---

# Tech Stack

- Python
- Google Gemini API
- GitHub REST API
- Pydantic
- Requests
- python-dotenv

---

# Installation

Clone the repository.

```bash
git clone https://github.com/<your-username>/AI-LinkedIn-Automation.git
```

Move into the project directory.

```bash
cd AI-LinkedIn-Automation
```

Create a virtual environment.

### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies.

```bash
pip install -r requirements.txt
```

---

# Environment Variables

Create a `.env` file.

```env
GITHUB_TOKEN=your_github_token
GEMINI_API_KEY=your_gemini_api_key
```

---

# Running the Project

```bash
python src/main.py
```

The application will:

1. Fetch repository information from GitHub.
2. Analyze the project using Gemini.
3. Generate LinkedIn content.
4. Save the generated output as a JSON file inside the `output/` directory.

---

# Example Output

```json
{
  "project_analysis": {
    "project_purpose": "...",
    "technologies": [],
    "key_features": [],
    "learning_outcomes": []
  },
  "linkedin_content": {
    "showcase_post": "...",
    "technical_breakdown": "...",
    "carousel_ideas": [],
    "resume_bullets": [],
    "portfolio_description": "...",
    "hashtags": []
  }
}
```

---

# Why This Project?

Developers often spend hours converting completed projects into polished LinkedIn posts, portfolio entries, and resume content.

This project aims to automate that workflow by using AI to transform a GitHub repository into professional, recruiter-friendly content with minimal manual effort.

---

# Roadmap

- [x] GitHub repository extraction
- [x] AI project analysis
- [x] LinkedIn content generation
- [x] JSON export
- [ ] LinkedIn draft approval
- [ ] Automatic image prompt generation
- [ ] Carousel generation
- [ ] LinkedIn publishing
- [ ] Project history database
- [ ] Web interface
- [ ] Docker support
- [ ] CI/CD pipeline

---

# Learning Goals

This project is designed to strengthen skills in:

- Python software engineering
- API integration
- Prompt engineering
- AI application development
- Clean architecture
- Automation workflows
- Content generation with LLMs

---

# Contributing

Contributions, suggestions, and feedback are welcome. Feel free to open an issue or submit a pull request.

---

# License

This project is licensed under the MIT License.
