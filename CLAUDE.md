# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FIFA World Cup 2026 Bracket Simulator — a pure vanilla JavaScript web application. **No backend, no build step, no package manager, no frameworks.** Open HTML files directly in a browser.

Three modes:
- **Choose Your Own** (`index.html` + `app.js`) — Interactive bracket predictor where users manually pick group winners, third-place qualifiers, and knockout results
- **Simulate Tournament** (`tournament.html` + `tournament-sim.js`) — Probabilistic match simulation using Poisson distribution
- **Teams Visualized** (`teams.html` + `teams-viz.js` + `teams-data.js`) — D3.js-based team analytics (squad strength, league distribution, age profiles, birthplace maps)

## Development

Open HTML files in a browser. Use a local server to avoid CORS issues:
```bash
python -m http.server 8000
# or
npx serve
```

There are no tests, linters, build tools, or CI/CD pipelines. Manual browser testing only.

No `package.json`, no `node_modules`, no TypeScript, no transpilation.

## Architecture

See `ARCHITECTURE.md` for Mermaid diagrams of the full system and data flows.

### File Map

| File | Lines | Role |
|------|-------|------|
| `data.js` | ~958 | Shared data: `teamStats` (FIFA rankings, WC history for 48 teams), `playoffPaths` (6 undecided qualifiers with 3-4 options each), `groups` (A-L, 4 teams each), knockout match definitions (`r32Matches`, `r16Matches`, `qfMatches`, `sfMatches`, `finalMatch`, `thirdPlaceMatch`), full group stage schedule (`GROUP_MATCHES`), third-place assignment mappings (495 combinations via `getThirdPlaceMatchMapping()`) |
| `app.js` | ~1476 | Choose Your Own mode: state management, group/knockout rendering, team click handlers, third-place selection UI, URL hash encode/decode (~26 char shareable state), auto-fill modes (Random/Favorites/Underdogs/Champions), bracket view toggle, screenshot download via html2canvas |
| `tournament-sim.js` | ~1494 | Simulate mode: `TournamentSimulator` class — Poisson-based match simulation, group stage round-robin, standings calculation (Pts > GD > GF > FIFA rank), third-place ranking, full knockout bracket, penalty shootout logic, rendering for group tables/matches/knockout/champion. Includes multiple view toggles (bracket/list, schedule/standings) |
| `teams-viz.js` | ~889 | Teams Visualized mode: D3.js charts (squad strength bars, league tier stacked bars, age distribution stacked bars), world map with player birthplace dots via TopoJSON, team selector chip UI |
| `teams-data.js` | ~21344 | Squad data: every player for all 48 teams — name, age, club, league, position, birthplace (lat/lng). Plus helper functions (`calculateSquadStrength`, `getLeagueDistribution`, `getAgeDistribution`, `getAverageAge`) and `leagueWeights` tier mapping. **Auto-generated** — do not edit by hand |
| `styles.css` | ~3060 | Single shared stylesheet for all three pages. Uses CSS custom properties for theming |
| `index.html` | ~226 | Choose Your Own UI: header with auto-fill buttons, groups section, third-place section, knockout bracket/list views |
| `tournament.html` | ~195 | Simulate mode UI: header with Simulate button, settings panel with 4 sliders, stats bar, group/knockout/champion sections |
| `teams.html` | ~108 | Teams Visualized UI: team selector chips, chart containers, birthplace map |
| `scripts/fetch-squads.js` | ~701 | Node.js utility to fetch squad data from Wikipedia MediaWiki API and generate `teams-data.js` |
| `scripts/update-squads.py` | ~900 | Python utility to fetch/update squad rosters from Wikipedia (alternative to fetch-squads.js) |

### Shared Data Layer (`data.js`)

All three pages load `data.js` via `<script>` tag. It exposes these globals:
- `teamStats` — Object keyed by 3-letter country code (e.g., `ARG`, `BRA`). Each entry has: `fifa` (ranking points), `titles`, `finals`, `semis`, `quarters`, `confed`, `host`
- `fifaRankings` — Legacy alias, derived from `teamStats`
- `playoffPaths` — 6 playoff paths (`UPA`-`UPD`, `IC1`, `IC2`) with 3-4 candidate teams each
- `groups` — 12 groups (A-L), each with 4 teams (some are playoff placeholders with `qualifier: true`)
- `r32Matches`, `r16Matches`, `qfMatches`, `sfMatches`, `finalMatch`, `thirdPlaceMatch` — Knockout bracket structure using reference strings like `1A` (1st in Group A), `2B`, `3_74` (3rd-place team assigned to match 74), `W73` (winner of match 73), `L101` (loser of match 101)
- `GROUP_MATCHES` — Full group stage schedule with dates, match numbers, venues
- `getThirdPlaceMatchMapping(qualifyingGroups)` — Returns `{ matchId: groupLetter }` mapping for any combination of 8 qualifying third-place groups

### State Management (app.js — Choose Your Own)

```javascript
state = {
  playoffSelections: {},   // { UPA: teamObj, UPB: teamObj, ... }
  groupSelections: {},     // { A: { first, second, third }, B: { ... }, ... }
  thirdPlaceTeams: [],     // Computed from groupSelections
  selectedThirdPlace: [],  // 8 group letters chosen by user
  knockoutResults: {},     // { matchId: winnerTeamObj }
  matchTeams: {}           // { matchId: { team1, team2 } } — computed
}
```

State encodes to ~26 char URL hash for sharing:
- 3 chars: playoff selections (6 paths x 3 bits each)
- 10 chars: group orderings (12 groups x 5 bits, permutation encoding)
- 2 chars: third-place selection (12-bit bitmask)
- 11 chars: knockout results (32 matches x 2 bits each)

No localStorage. All state lives in memory + URL.

### Simulation Engine (tournament-sim.js)

`TournamentSimulator` class with configurable settings via 4 sliders:
- **Upset Factor** (0-100): Controls how much FIFA ratings influence outcomes. High = more upsets
- **Home Advantage** (0-100): Boost for host nations (USA, MEX, CAN). Up to +0.3 expected goals
- **Elite Team Boost** (0-100): Extra rating points for top 8 teams (ARG, FRA, ESP, ENG, BRA, POR, NED, BEL)
- **Goal Volume** (0-100): Base expected goals per team (0.9 to 1.8 range)

Match simulation flow:
1. Calculate expected goals (xG) for each team using FIFA ratings + settings
2. Generate actual goals via Poisson random distribution
3. For knockout draws: 35% chance of extra-time goal (weighted by ratings), then penalty shootout if still tied
4. Penalties: 5 rounds with ~75% base conversion (adjusted by rating), then sudden death

Group standings sorted by: Points > GD > GF > FIFA ranking. Top 2 advance + best 8 of 12 third-place teams.

### Third-Place Logic

The 2026 format has 48 teams in 12 groups. Top 2 from each group (24 teams) + best 8 third-place teams (from 12) = 32 teams in knockout. There are C(12,8) = 495 possible combinations. `getThirdPlaceMatchMapping()` in `data.js` hardcodes all 495 mappings to determine which third-place team plays in which R32 match.

### Auto-Fill Modes (app.js)

- **Random** — Random picks for every selection
- **Favorites** — Higher FIFA ranking always wins
- **Underdogs** — Lower FIFA ranking always wins
- **Champions** — Historical score: `titles*10 + finals*5 + semis*2 + quarters*1`

### External Dependencies (CDN only)

- **html2canvas** — Screenshot/download bracket as PNG
- **D3.js v7** — Charts and visualizations on Teams page
- **TopoJSON v3** — World map rendering for birthplace visualization
- **world-atlas** — GeoJSON country boundaries
- **Google Fonts** — Inter font family (weights 300-700)
- **Google Analytics** — Usage tracking (G-SGBEPY4N67)

## Key Patterns and Conventions

### Code Style
- All JS uses vanilla DOM manipulation (no virtual DOM, no templating library)
- Functions: camelCase (e.g., `handleTeamClick()`, `calculateExpectedGoals()`)
- DOM IDs: kebab-case (e.g., `groups-container`, `bracket-r32-left`)
- CSS classes: kebab-case with semantic naming (e.g., `team-row`, `group-card`)
- Functions are exposed to HTML via `window.functionName = functionName` pattern
- HTML event handlers use inline `onclick="handleTeamClick(...)"` pattern
- Rendering uses string-based `innerHTML` template literals

### Data Conventions
- Team objects always have: `{ name, code, flag }` and optionally `host`, `qualifier`, `ranking`
- Teams referenced by 3-letter ISO country codes: `ARG`, `BRA`, `FRA`, etc.
- Playoff teams have `qualifier: true` and their `code` matches a key in `playoffPaths`
- Match IDs are integers: 1-72 (group stage), 73-88 (R32), 89-96 (R16), 97-100 (QF), 101-102 (SF), 103 (3rd place), 104 (final)
- Reference strings: `1A`=1st Group A, `2B`=2nd Group B, `3_74`=3rd place in match 74, `W73`=winner of match 73, `L101`=loser of match 101

### CSS Architecture
- CSS custom properties for theming: `--bg-primary`, `--accent-color` (#8b0000 dark red), `--success-color`, `--gold`/`--silver`/`--bronze`, etc.
- Font: Inter (Google Fonts)
- Shadow levels: `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- No CSS preprocessor, no CSS modules — single flat stylesheet

### Data Flow Pattern
1. User actions trigger state mutations
2. State changes trigger full section re-renders (replace `innerHTML`)
3. URL hash updates automatically via `encodeStateToHash()` / `decodeStateFromHash()`
4. No reactivity framework — manual render calls after state changes

### Scripts (not used at runtime)
- `scripts/fetch-squads.js` — Run with Node.js to regenerate `teams-data.js` from Wikipedia
- `scripts/update-squads.py` — Run with Python 3 as alternative to fetch-squads.js
- These fetch player data from Wikipedia's MediaWiki API and output the `teams-data.js` file
