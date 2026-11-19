exports.handler = async (event) => {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "TMDB_API_KEY is not set in Netlify environment variables." }) };
  }
  const path = event.queryStringParameters?.path;
  if (!path || !path.startsWith("/") || path.includes("..")) {
    return { statusCode: 400, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "A valid TMDB API path is required." }) };
  }
  try {
    const url = new URL("https://api.themoviedb.org/3" + path);
    url.searchParams.set("api_key", apiKey);
    const response = await fetch(url);
    const body = await response.text();
    return {
      statusCode: response.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=60" },
      body
    };
  } catch (error) {
    return { statusCode: 502, headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not reach TMDB. Please try again." }) };
  }
};
