import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:8000",
  timeout: 60000,
});

export async function analyzeRepository(repoUrl: string) {
  const response = await apiClient.post("/analyze", {
    repo_url: repoUrl,
  });

  return response.data;
}

export default apiClient;
