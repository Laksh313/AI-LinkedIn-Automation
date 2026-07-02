# AI LinkedIn Automation

**Automatically generate professional LinkedIn content from GitHub repositories using AI.**

This project analyzes any GitHub repository and uses Google's Gemini AI to generate a comprehensive suite of LinkedIn-ready content including showcase posts, technical breakdowns, carousel ideas, resume bullets, portfolio descriptions, and hashtags.

## Features

- 🔍 **Repository Analysis** – Fetches metadata, README, requirements, and languages from GitHub
- 🤖 **AI-Powered Content Generation** – Uses Google Gemini to analyze projects and generate insights
- 📝 **LinkedIn Showcase** – Professional, recruiter-friendly post highlighting the project
- 🎨 **Carousel Ideas** – Visual storytelling slides for LinkedIn carousel posts
- 📋 **Resume Bullets** – Polished bullet points for your resume or CV
- 🔧 **Technical Breakdown** – Architecture and design deep-dive
- #️⃣ **Hashtag Suggestions** – Relevant, trending hashtags for discoverability
- 🌐 **Web API** – FastAPI backend with REST endpoints
- ⚛️ **Modern Frontend** – React + TypeScript + Tailwind CSS dashboard
- 📟 **CLI Tool** – Command-line interface for batch processing

## Tech Stack

### Backend

- **FastAPI** – Modern, fast web framework
- **Uvicorn** – ASGI server
- **Python 3.13+** – Core language
- **Google Generative AI SDK** – Gemini API integration
- **Requests** – GitHub API client
- **Pydantic** – Data validation

### Frontend

- **React 19** – UI framework
- **TypeScript** – Type safety
- **Vite** – Build tool
- **Tailwind CSS** – Styling
- **Axios** – HTTP client
- **Lucide React** – Icons

## Quick Start

### Prerequisites

- Python 3.13+
- Node.js 18+ (for frontend)
- GitHub account (for API access)
- Google Generative AI API key ([get one here](https://ai.google.dev/))

### Setup

#### 1. Clone the repository

```bash
git clone <repository-url>
cd AI-LinkedIn-Automation
```

#### 2. Backend Setup

```bash
# Create and activate virtual environment
python -m venv .venv
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt
```

#### 3. Environment Configuration

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your-google-generative-ai-api-key
```

#### 4. Frontend Setup

```bash
cd frontend
npm install
```

## Usage

### CLI (Python Backend Only)

Analyze a single repository and save results:

```bash
python src/main.py
```

The script defaults to analyzing the CodeAlpha Handwritten Character Recognition project. Modify the URL in `src/main.py` to analyze different repositories.

**Output:** JSON file saved to `data/content/{repo-name}.json`

### API Server

Start the FastAPI backend:

```bash
uvicorn src.api.server:app --reload
```

The server runs at `http://127.0.0.1:8000`

**Interactive API docs:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

#### API Endpoint

**POST /analyze**

Request:

```json
{
  "repo_url": "https://github.com/username/repository"
}
```

Response:

```json
{
  "repo_name": "repository",
  "repo_url": "https://github.com/username/repository",
  "linkedin_post": "...",
  "analysis": {
    "project_purpose": "...",
    "technologies": ["..."],
    "features": ["..."],
    "problems_solved": ["..."],
    "technical_challenges": ["..."],
    "learning_outcomes": ["..."],
    "future_improvements": ["..."]
  },
  "linkedin_showcase": "...",
  "technical_breakdown": "...",
  "carousel": ["...", "...", "..."],
  "resume_bullets": ["...", "...", "..."],
  "portfolio_description": "...",
  "hashtags": ["#tag1", "#tag2", "..."]
}
```

### Frontend

Start the development server:

```bash
cd frontend
npm run dev
```

The frontend runs at `http://localhost:5173`

**Features:**

- Enter any GitHub repository URL
- View real-time analysis dashboard
- Copy LinkedIn posts, technical breakdowns, and hashtags
- Browse carousel ideas and resume bullets
- Download or share content

## Project Structure

```
AI-LinkedIn-Automation/
├── src/
│   ├── main.py                      # CLI entry point
│   ├── api/
│   │   └── server.py               # FastAPI application
│   ├── github_analyzer/
│   │   ├── github_analyzer.py       # Main analysis orchestrator
│   │   ├── github_client.py         # GitHub API wrapper
│   │   ├── url_parser.py            # URL validation and parsing
│   │   └── project_info.py          # Data models
│   ├── llm/
│   │   └── client.py                # Gemini API client
│   └── data/
│       └── content/                 # Generated analysis outputs
│
├── frontend/
│   ├── src/
│   │   ├── main.tsx                 # React entry point
│   │   ├── App.tsx                  # Main component
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Dashboard.tsx        # Results display
│   │   │   ├── LoadingScreen.tsx    # Loading animation
│   │   │   ├── Hero.tsx             # Search section
│   │   │   ├── ErrorCard.tsx        # Error handling
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── api.ts               # Axios client
│   │   │   └── analysisService.ts   # Analysis logic
│   │   ├── types/
│   │   │   └── analysis.ts          # TypeScript interfaces
│   │   ├── hooks/
│   │   │   └── useAnalysis.ts       # Analysis state management
│   │   └── pages/
│   │       ├── Home.tsx             # Main page
│   │       └── About.tsx            # About page
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
├── tests/
│   └── test_backend_response_mapping.py
│
├── .env                             # Environment variables (not in repo)
├── requirements.txt                 # Python dependencies
└── README.md                        # This file
```

## Configuration

### Backend

Environment variables (`.env`):

- `GEMINI_API_KEY` – Required. Your Google Generative AI API key

### Frontend

Build configuration in `frontend/vite.config.ts`:

- Default API URL: `http://127.0.0.1:8000`
- Set `VITE_API_URL` environment variable to override

## API Details

### GitHub API

The project uses the GitHub REST API to fetch:

- Repository metadata (name, description, stars, etc.)
- README.md content
- requirements.txt (Python dependencies)
- Programming languages used
- Repository tree structure

**Note:** GitHub API has rate limits. Unauthenticated requests: 60/hour. For higher limits, use a GitHub token.

### Gemini AI

The project uses two Gemini models:

1. **Gemini 2.5 Flash** – Fast analysis and supporting content generation
2. **Gemini 3.1 Flash Lite** – LinkedIn post generation

Content generated:

- Analyzes repository structure, purpose, and technologies
- Generates professional, non-generic LinkedIn posts
- Creates carousel slide ideas
- Produces resume bullets
- Writes portfolio descriptions
- Suggests relevant hashtags

## Error Handling

The API returns appropriate HTTP status codes:

- **400 Bad Request** – Invalid GitHub URL or missing parameters
- **500 Internal Server Error** – GitHub API failure, Gemini API failure, or unexpected error

Frontend displays user-friendly error messages for all failure scenarios.

## Performance

- **Analysis time:** 30-60 seconds per repository (varies by API response times)
- **Content generation:** Gemini API calls account for most of the time
- **Typical response size:** 10-50KB JSON

## Limitations

- Requires public GitHub repositories (private repos not supported via public API without authentication)
- Analysis quality depends on repository metadata and README content
- Gemini API usage is subject to rate limits and quotas
- Free tier Gemini API has daily usage limits

## Development

### Running Tests

```bash
python -m unittest tests.test_backend_response_mapping
```

### Linting Frontend

```bash
cd frontend
npm run lint
```

### Building Frontend

```bash
cd frontend
npm run build
```

Production build output: `frontend/dist/`

## Deployment

### Backend (Uvicorn)

For production, use a production ASGI server:

```bash
gunicorn -w 4 -k uvicorn.workers.UvicornWorker src.api.server:app
```

### Frontend (Static Hosting)

```bash
cd frontend
npm run build
# Upload dist/ to your hosting provider (Vercel, Netlify, AWS S3, etc.)
```

## Contributing

Contributions are welcome! Areas for enhancement:

- Support for private repositories (with GitHub token)
- Batch repository analysis
- Content scheduling integration (LinkedIn, Twitter, etc.)
- Multiple language support
- Better error recovery and retry logic
- Performance optimization
- Additional content formats (email templates, blog posts)

## License

This project is open source and available under the MIT License.

## Support & Contact

For issues, feature requests, or questions:

- Open an issue on GitHub
- Contact the project maintainers

## Acknowledgments

- [Google Generative AI](https://ai.google.dev/) for Gemini
- [GitHub API](https://docs.github.com/en/rest) for repository data
- [FastAPI](https://fastapi.tiangolo.com/) for the backend framework
- [React](https://react.dev/) for the frontend
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

**Built with ❤️ to help developers showcase their work on LinkedIn**
