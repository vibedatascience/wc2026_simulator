# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FIFA World Cup 2026 Bracket Simulator - a pure vanilla JavaScript web application with three modes:
- **Choose Your Own** (`index.html` + `app.js`) - Interactive bracket predictor
- **Simulate Tournament** (`tournament.html` + `tournament-sim.js`) - AI-powered match simulation
- **Teams Visualized** (`teams.html` + `teams-viz.js`) - D3.js-based team analytics

**No backend. No build step. No package manager.** Open HTML files directly in browser.

## Development

To develop, simply open the HTML files in a browser. Use a local server to avoid CORS issues:
```bash
python -m http.server 8000
# or
npx serve
```

## Architecture

### Shared Resources
- `data.js` - Team stats, groups (A-L), match configurations, third-place mappings
- `styles.css` - All styling for all three pages
- External libs loaded via CDN: html2canvas, D3.js, TopoJSON

### Page-Specific Logic
| Page | Script | Purpose |
|------|--------|---------|
| index.html | app.js | State-driven bracket with URL sharing |
| tournament.html | tournament-sim.js | Probabilistic match simulation |
| teams.html | teams-viz.js + teams-data.js | D3 visualizations |

### State Management (app.js)
```javascript
state = {
  playoffSelections: {},     // Undecided qualifiers (UPA, UPB, etc.)
  groupSelections: {},       // { A: { first, second, third }, ... }
  selectedThirdPlace: [],    // 8 group letters advancing to R32
  knockoutResults: {},       // { matchId: winnerTeam }
  matchTeams: {}             // Computed from selections
}
```

State encodes to ~26 char URL hash for sharing. All state lives in memory + URL (no localStorage).

### Third-Place Logic
495 possible combinations of 8-from-12 third-place teams. `getThirdPlaceMatchMapping()` in `data.js` maps which groups advance to which R32 matches.

### Auto-Fill Modes (app.js)
- **Random** - Random picks
- **Favorites** - Higher FIFA ranking wins
- **Underdogs** - Lower FIFA ranking wins
- **Champions** - Historical score: `titles×10 + finals×5 + semis×2 + quarters×1`

### Simulation Settings (tournament-sim.js)
Four sliders: Upset Factor, Home Advantage (USA/MEX/CAN boost), Elite Team Boost, Goal Volume.
