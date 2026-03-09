# Architecture

## System Overview

```mermaid
graph TB
    subgraph Pages["Three App Modes"]
        INDEX["index.html<br/><b>Choose Your Own</b>"]
        TOURNEY["tournament.html<br/><b>Simulate Tournament</b>"]
        TEAMS["teams.html<br/><b>Teams Visualized</b>"]
    end

    subgraph Scripts["Page Scripts"]
        APP["app.js<br/>Interactive bracket picker"]
        SIM["tournament-sim.js<br/>TournamentSimulator class"]
        VIZ["teams-viz.js<br/>D3 chart rendering"]
    end

    subgraph SharedData["Shared Data Layer"]
        DATA["data.js<br/>teamStats, groups, playoffPaths,<br/>knockout structure, match schedule,<br/>third-place mappings (495)"]
        SQUAD["teams-data.js<br/>squadData: 48 teams × ~26 players<br/>leagueWeights, helper functions"]
    end

    subgraph CDN["External CDN Libraries"]
        H2C["html2canvas"]
        D3["D3.js v7"]
        TOPO["TopoJSON v3"]
        ATLAS["world-atlas"]
    end

    STYLES["styles.css<br/>Shared stylesheet"]

    INDEX --> APP
    TOURNEY --> SIM
    TEAMS --> VIZ

    INDEX --> DATA
    TOURNEY --> DATA
    TEAMS --> DATA
    TEAMS --> SQUAD

    INDEX --> STYLES
    TOURNEY --> STYLES
    TEAMS --> STYLES

    APP --> H2C
    VIZ --> D3
    VIZ --> TOPO
    VIZ --> ATLAS

    APP --> DATA
    SIM --> DATA
    VIZ --> SQUAD
```

## Data Flow — Choose Your Own Mode

```mermaid
flowchart LR
    subgraph UserInput["User Actions"]
        PO[Select Playoff Teams]
        GS[Pick Group 1st/2nd/3rd]
        TP[Select 8 Third-Place Teams]
        KO[Pick Knockout Winners]
    end

    subgraph State["In-Memory State"]
        S1[playoffSelections]
        S2[groupSelections]
        S3[selectedThirdPlace]
        S4[knockoutResults]
        S5[matchTeams — computed]
    end

    subgraph Output["Output"]
        URL["URL Hash<br/>~26 chars encoded"]
        BRACKET[Bracket View]
        SCREENSHOT[PNG Download]
    end

    PO --> S1
    GS --> S2
    TP --> S3
    KO --> S4

    S1 --> S5
    S2 --> S5
    S3 --> S5
    S4 --> S5

    S5 --> BRACKET
    S1 & S2 & S3 & S4 --> URL
    BRACKET --> SCREENSHOT
```

## Data Flow — Simulate Tournament Mode

```mermaid
flowchart TD
    SETTINGS["Simulation Settings<br/>Upset Factor | Home Advantage<br/>Elite Boost | Goal Volume"]

    subgraph GroupStage["Group Stage Simulation"]
        RR["Round-Robin<br/>6 matches per group × 12 groups"]
        STAND["Calculate Standings<br/>Pts → GD → GF → FIFA"]
        RANK3["Rank Third-Place Teams<br/>Best 8 of 12 qualify"]
    end

    subgraph KnockoutSim["Knockout Simulation"]
        R32["Round of 32<br/>16 matches"]
        R16["Round of 16<br/>8 matches"]
        QF["Quarterfinals<br/>4 matches"]
        SF["Semifinals<br/>2 matches"]
        TPM["Third-Place Match"]
        FINAL["Final"]
    end

    subgraph MatchEngine["Match Engine"]
        XG["Calculate xG<br/>FIFA rating + boosts"]
        POISSON["Poisson Random<br/>Generate goals"]
        ET["Extra Time<br/>35% chance of goal"]
        PEN["Penalty Shootout<br/>5 rounds + sudden death"]
    end

    SETTINGS --> XG
    XG --> POISSON
    POISSON -->|Draw in knockout| ET
    ET -->|Still tied| PEN

    RR --> STAND
    STAND --> RANK3
    RANK3 --> R32
    R32 --> R16 --> QF --> SF --> FINAL
    SF --> TPM

    MatchEngine -.->|Used by| RR
    MatchEngine -.->|Used by| R32
    MatchEngine -.->|Used by| R16
    MatchEngine -.->|Used by| QF
    MatchEngine -.->|Used by| SF
    MatchEngine -.->|Used by| FINAL
```

## Data Flow — Teams Visualized Mode

```mermaid
flowchart LR
    SQUAD_DATA["teams-data.js<br/>48 teams, ~1200 players"]

    subgraph Selection["Team Selection"]
        CHIPS["Team Chips<br/>Toggle on/off"]
        SELECT_ALL["Select All"]
    end

    subgraph Charts["D3 Visualizations"]
        STRENGTH["Squad Strength<br/>Horizontal bar chart"]
        LEAGUE["League Distribution<br/>Stacked bar (5 tiers)"]
        AGE["Age Distribution<br/>Stacked bar (5 ranges)"]
        MAP["Birthplace Map<br/>World map + dots"]
    end

    SQUAD_DATA --> STRENGTH
    SQUAD_DATA --> LEAGUE
    SQUAD_DATA --> AGE
    SQUAD_DATA --> MAP

    CHIPS --> STRENGTH
    CHIPS --> LEAGUE
    CHIPS --> AGE
    SELECT_ALL --> STRENGTH
    SELECT_ALL --> LEAGUE
    SELECT_ALL --> AGE
```

## Tournament Bracket Structure

```mermaid
flowchart LR
    subgraph GS["Group Stage"]
        G["12 Groups (A–L)<br/>4 teams each<br/>48 teams total"]
    end

    subgraph Qualify["Qualification"]
        Q1["24 × Group 1st/2nd"]
        Q2["8 × Best Third-Place<br/>(from 12, pick 8)"]
    end

    subgraph KO["Knockout Rounds"]
        R32_["R32: 16 matches<br/>IDs 73–88"]
        R16_["R16: 8 matches<br/>IDs 89–96"]
        QF_["QF: 4 matches<br/>IDs 97–100"]
        SF_["SF: 2 matches<br/>IDs 101–102"]
        TP_["3rd Place: ID 103"]
        F_["Final: ID 104"]
    end

    G --> Q1
    G --> Q2
    Q1 --> R32_
    Q2 --> R32_
    R32_ --> R16_ --> QF_ --> SF_
    SF_ --> F_
    SF_ --> TP_
```

## URL State Encoding

```mermaid
flowchart LR
    subgraph Encode["26-char URL Hash"]
        E1["3 chars<br/>Playoff picks<br/>6 paths × 3 bits"]
        E2["10 chars<br/>Group orderings<br/>12 groups × 5 bits"]
        E3["2 chars<br/>Third-place mask<br/>12-bit bitmask"]
        E4["11 chars<br/>Knockout results<br/>32 matches × 2 bits"]
    end

    E1 --> E2 --> E3 --> E4

    STATE["Full App State"] --> E1
    E4 --> HASH["window.location.hash"]
    HASH --> SHARE["Shareable Link"]
```
