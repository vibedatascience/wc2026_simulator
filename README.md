# FIFA World Cup 2026 Bracket Simulator

Interactive bracket predictor for the 48-team FIFA World Cup 2026.

**No backend. No build step. Pure vanilla JS.**

## Features

| Feature | Description |
|---------|-------------|
| Group selection | Click teams to assign 1st/2nd/3rd positions |
| Playoff teams | Dropdown picker for 6 undecided qualifiers |
| Third-place selection | Select 8 of 12 third-place teams to advance |
| Knockout bracket | Click to select winners, auto-propagates |
| Bracket view | CSS Grid layout with connector lines |
| List view | Alternative compact view |
| Auto-fill modes | Random, Favorites, Underdogs, Champions |
| Share | URL updates automatically, click to copy |

## Auto-Fill Modes

| Mode | Logic |
|------|-------|
| **Random** | Random selections |
| **Favorites** | Highest FIFA ranking wins |
| **Underdogs** | Lowest FIFA ranking wins |
| **Champions** | Historical WC performance wins |

Champions scoring: `titles×10 + finals×5 + semis×2 + quarters×1` (falls back to FIFA ranking if no history)

## Architecture

```
index.html      Entry point, layout structure
├── data.js     Team stats, groups, matches, playoff paths
├── app.js      Application logic, state management, rendering
├── styles.css  All styling
└── logo.png    Official 2026 World Cup emblem
```

## Data Structure

```javascript
// Team statistics for auto-fill modes
const teamStats = {
  ARG: { fifa: 1873, titles: 3, finals: 6, semis: 7, quarters: 12, confed: 'CONMEBOL', host: false },
  BRA: { fifa: 1760, titles: 5, finals: 7, semis: 11, quarters: 12, confed: 'CONMEBOL', host: false },
  // ... all 48+ teams
};
```

## State Management

```javascript
state = {
  playoffSelections: {},    // { UPA: team, UPB: team, ... }
  groupSelections: {},      // { A: { first, second, third }, ... }
  thirdPlaceTeams: [],      // Derived from groupSelections
  selectedThirdPlace: [],   // 8 group letters selected for R32
  knockoutResults: {},      // { matchId: winnerTeam }
  matchTeams: {}            // { matchId: { team1, team2 } } - computed
}
```

## Sharing

URL hash auto-updates as you make selections. Click "Copy link to share bracket" to copy.

State encoded to ~26 char URL-safe string using base64-like encoding.

## Third-Place Assignment

495 possible combinations handled by `getThirdPlaceMatchMapping()` in `data.js`. Maps which 8 groups qualify → which R32 match each plays in.

## Browser Storage

None. All state lives in memory and URL hash. Refresh = reset (unless shared URL).
