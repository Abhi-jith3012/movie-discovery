# Where To Watch — starter website

This is a dark, responsive prototype for your idea.

## What it already has
- Search UI
- Movie/series/reality-show style results
- Streaming provider section
- IMDb rating + IMDb link
- Main cast
- Awards section
- Responsive mobile layout
- Demo titles so it works immediately

## Turning it into a live-data website

Use TMDB as the main data source. TMDB provides movie, TV and person search/data, credits, and country-specific watch-provider information. Its watch-provider data is powered by a JustWatch partnership and requires the required attribution.

You will need a TMDB API key/token and a small backend/server function so your secret is not exposed in the browser.

Useful TMDB endpoints to wire in:
- /search/multi
- /movie/{id}
- /movie/{id}/credits
- /tv/{id}
- /tv/{id}/credits
- /movie/{id}/watch/providers
- /tv/{id}/watch/providers

IMDb ratings/IDs can be displayed when the matching IMDb data is available.

Important: streaming availability changes by country and over time, so the production site should let the user choose a country (defaulting to India if that is your target market) and show a "last checked" time.

For commercial use, check TMDB's current licensing/attribution requirements rather than assuming the free developer terms apply.
