# WhereToWatch — Netlify version

## Deploy
1. Push these files to a GitHub repository:
   - `index.html`
   - `netlify.toml`
   - `netlify/functions/tmdb.js`
2. In Netlify, choose **Add new site → Import an existing project** and connect that GitHub repository.
3. In the Netlify site dashboard, open **Site configuration → Environment variables**.
4. Add `TMDB_API_KEY` with your TMDB API key as its value.
5. Trigger a deploy (or redeploy the latest deploy).

The browser calls the Netlify Function at `/.netlify/functions/tmdb`; the function adds the secret API key server-side. Do not put the key in `index.html` or commit it to GitHub.

## Features
- Live popular titles and multi-search (movies and TV)
- Title details, ratings, genres, overview and cast
- Watch-provider data where TMDB has it (India first, then US fallback)
- Cast member combined credits

Streaming availability and other metadata depend on TMDB coverage. Awards are not supplied by this TMDB integration.
