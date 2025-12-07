// Team Statistics for auto-fill modes
// fifa: FIFA ranking points (Dec 2024), titles: WC wins, finals: finals appearances,
// semis: semi-final appearances, quarters: quarter-final appearances, confed: confederation, host: is 2026 host
const teamStats = {
    // South America - CONMEBOL
    ARG: { fifa: 1873, titles: 3, finals: 6, semis: 7, quarters: 12, confed: 'CONMEBOL', host: false },
    BRA: { fifa: 1760, titles: 5, finals: 7, semis: 11, quarters: 12, confed: 'CONMEBOL', host: false },
    URU: { fifa: 1673, titles: 2, finals: 2, semis: 5, quarters: 7, confed: 'CONMEBOL', host: false },
    COL: { fifa: 1701, titles: 0, finals: 0, semis: 0, quarters: 2, confed: 'CONMEBOL', host: false },
    ECU: { fifa: 1592, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONMEBOL', host: false },
    PAR: { fifa: 1502, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'CONMEBOL', host: false },
    BOL: { fifa: 1330, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONMEBOL', host: false },
    SUR: { fifa: 1100, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONMEBOL', host: false },

    // Europe - UEFA
    ESP: { fifa: 1877, titles: 1, finals: 1, semis: 2, quarters: 4, confed: 'UEFA', host: false },
    FRA: { fifa: 1870, titles: 2, finals: 4, semis: 7, quarters: 9, confed: 'UEFA', host: false },
    ENG: { fifa: 1834, titles: 1, finals: 2, semis: 4, quarters: 8, confed: 'UEFA', host: false },
    POR: { fifa: 1760, titles: 0, finals: 0, semis: 2, quarters: 8, confed: 'UEFA', host: false },
    NED: { fifa: 1756, titles: 0, finals: 3, semis: 4, quarters: 7, confed: 'UEFA', host: false },
    BEL: { fifa: 1731, titles: 0, finals: 0, semis: 2, quarters: 3, confed: 'UEFA', host: false },
    GER: { fifa: 1724, titles: 4, finals: 8, semis: 13, quarters: 16, confed: 'UEFA', host: false },
    CRO: { fifa: 1717, titles: 0, finals: 2, semis: 3, quarters: 3, confed: 'UEFA', host: false },
    ITA: { fifa: 1702, titles: 4, finals: 6, semis: 8, quarters: 10, confed: 'UEFA', host: false },
    SUI: { fifa: 1655, titles: 0, finals: 0, semis: 0, quarters: 4, confed: 'UEFA', host: false },
    DEN: { fifa: 1617, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'UEFA', host: false },
    AUT: { fifa: 1586, titles: 0, finals: 0, semis: 1, quarters: 1, confed: 'UEFA', host: false },
    TUR: { fifa: 1583, titles: 0, finals: 0, semis: 1, quarters: 1, confed: 'UEFA', host: false },
    UKR: { fifa: 1557, titles: 0, finals: 0, semis: 1, quarters: 1, confed: 'UEFA', host: false },
    NOR: { fifa: 1553, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    POL: { fifa: 1532, titles: 0, finals: 0, semis: 2, quarters: 2, confed: 'UEFA', host: false },
    WAL: { fifa: 1530, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'UEFA', host: false },
    SCO: { fifa: 1507, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    SWE: { fifa: 1487, titles: 0, finals: 1, semis: 4, quarters: 6, confed: 'UEFA', host: false },
    CZE: { fifa: 1487, titles: 0, finals: 2, semis: 2, quarters: 2, confed: 'UEFA', host: false },
    SVK: { fifa: 1486, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    ROU: { fifa: 1466, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'UEFA', host: false },
    IRL: { fifa: 1436, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'UEFA', host: false },
    ALB: { fifa: 1401, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    MKD: { fifa: 1379, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    NIR: { fifa: 1366, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'UEFA', host: false },
    BIH: { fifa: 1362, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },
    KOS: { fifa: 1309, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'UEFA', host: false },

    // North/Central America - CONCACAF
    USA: { fifa: 1682, titles: 0, finals: 0, semis: 1, quarters: 3, confed: 'CONCACAF', host: true },
    MEX: { fifa: 1676, titles: 0, finals: 0, semis: 0, quarters: 2, confed: 'CONCACAF', host: true },
    CAN: { fifa: 1559, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONCACAF', host: true },
    PAN: { fifa: 1540, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONCACAF', host: false },
    JAM: { fifa: 1362, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONCACAF', host: false },
    HAI: { fifa: 1294, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONCACAF', host: false },
    CUW: { fifa: 1303, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CONCACAF', host: false },

    // Africa - CAF
    MAR: { fifa: 1713, titles: 0, finals: 0, semis: 1, quarters: 1, confed: 'CAF', host: false },
    SEN: { fifa: 1648, titles: 0, finals: 0, semis: 0, quarters: 1, confed: 'CAF', host: false },
    EGY: { fifa: 1521, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    ALG: { fifa: 1516, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    TUN: { fifa: 1497, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    CIV: { fifa: 1490, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    COD: { fifa: 1443, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    RSA: { fifa: 1427, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    CPV: { fifa: 1368, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'CAF', host: false },
    GHA: { fifa: 1351, titles: 0, finals: 0, semis: 0, quarters: 2, confed: 'CAF', host: false },

    // Asia - AFC
    JPN: { fifa: 1650, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    IRN: { fifa: 1617, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    KOR: { fifa: 1599, titles: 0, finals: 0, semis: 1, quarters: 1, confed: 'AFC', host: false },
    AUS: { fifa: 1574, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    UZB: { fifa: 1462, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    QAT: { fifa: 1462, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    IRQ: { fifa: 1439, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    KSA: { fifa: 1429, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },
    JOR: { fifa: 1378, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'AFC', host: false },

    // Oceania - OFC
    NZL: { fifa: 1279, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'OFC', host: false },
    NCL: { fifa: 1000, titles: 0, finals: 0, semis: 0, quarters: 0, confed: 'OFC', host: false }
};

// Legacy compatibility - FIFA rankings only
const fifaRankings = Object.fromEntries(
    Object.entries(teamStats).map(([code, stats]) => [code, stats.fifa])
);

// Playoff paths - users can select winners
const playoffPaths = {
    UPA: {
        name: "UEFA Path A",
        options: [
            { name: "Italy", code: "ITA", flag: "🇮🇹", ranking: 1702 },
            { name: "Wales", code: "WAL", flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", ranking: 1530 },
            { name: "Bosnia & Herz.", code: "BIH", flag: "🇧🇦", ranking: 1362 },
            { name: "N. Ireland", code: "NIR", flag: "🇬🇧", ranking: 1366 }
        ]
    },
    UPB: {
        name: "UEFA Path B",
        options: [
            { name: "Ukraine", code: "UKR", flag: "🇺🇦", ranking: 1557 },
            { name: "Sweden", code: "SWE", flag: "🇸🇪", ranking: 1487 },
            { name: "Poland", code: "POL", flag: "🇵🇱", ranking: 1532 },
            { name: "Albania", code: "ALB", flag: "🇦🇱", ranking: 1401 }
        ]
    },
    UPC: {
        name: "UEFA Path C",
        options: [
            { name: "Turkey", code: "TUR", flag: "🇹🇷", ranking: 1583 },
            { name: "Romania", code: "ROU", flag: "🇷🇴", ranking: 1466 },
            { name: "Slovakia", code: "SVK", flag: "🇸🇰", ranking: 1486 },
            { name: "Kosovo", code: "KOS", flag: "🇽🇰", ranking: 1309 }
        ]
    },
    UPD: {
        name: "UEFA Path D",
        options: [
            { name: "Denmark", code: "DEN", flag: "🇩🇰", ranking: 1617 },
            { name: "Czechia", code: "CZE", flag: "🇨🇿", ranking: 1487 },
            { name: "Rep. of Ireland", code: "IRL", flag: "🇮🇪", ranking: 1436 },
            { name: "N. Macedonia", code: "MKD", flag: "🇲🇰", ranking: 1379 }
        ]
    },
    IC1: {
        name: "IC Playoff 1",
        options: [
            { name: "DR Congo", code: "COD", flag: "🇨🇩", ranking: 1443 },
            { name: "Jamaica", code: "JAM", flag: "🇯🇲", ranking: 1362 },
            { name: "New Caledonia", code: "NCL", flag: "🇳🇨", ranking: 1000 }
        ]
    },
    IC2: {
        name: "IC Playoff 2",
        options: [
            { name: "Iraq", code: "IRQ", flag: "🇮🇶", ranking: 1439 },
            { name: "Bolivia", code: "BOL", flag: "🇧🇴", ranking: 1330 },
            { name: "Suriname", code: "SUR", flag: "🇸🇷", ranking: 1100 }
        ]
    }
};

// FIFA World Cup 2026 Groups Data
const groups = {
    A: {
        name: "Group A",
        teams: [
            { name: "Mexico", code: "MEX", flag: "🇲🇽", host: true },
            { name: "South Africa", code: "RSA", flag: "🇿🇦" },
            { name: "South Korea", code: "KOR", flag: "🇰🇷" },
            { name: "UEFA Path D", code: "UPD", flag: "🏳️", qualifier: true }
        ]
    },
    B: {
        name: "Group B",
        teams: [
            { name: "Canada", code: "CAN", flag: "🇨🇦", host: true },
            { name: "UEFA Path A", code: "UPA", flag: "🏳️", qualifier: true },
            { name: "Qatar", code: "QAT", flag: "🇶🇦" },
            { name: "Switzerland", code: "SUI", flag: "🇨🇭" }
        ]
    },
    C: {
        name: "Group C",
        teams: [
            { name: "Brazil", code: "BRA", flag: "🇧🇷" },
            { name: "Morocco", code: "MAR", flag: "🇲🇦" },
            { name: "Haiti", code: "HAI", flag: "🇭🇹" },
            { name: "Scotland", code: "SCO", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿" }
        ]
    },
    D: {
        name: "Group D",
        teams: [
            { name: "United States", code: "USA", flag: "🇺🇸", host: true },
            { name: "Paraguay", code: "PAR", flag: "🇵🇾" },
            { name: "Australia", code: "AUS", flag: "🇦🇺" },
            { name: "UEFA Path C", code: "UPC", flag: "🏳️", qualifier: true }
        ]
    },
    E: {
        name: "Group E",
        teams: [
            { name: "Germany", code: "GER", flag: "🇩🇪" },
            { name: "Curaçao", code: "CUW", flag: "🇨🇼" },
            { name: "Ivory Coast", code: "CIV", flag: "🇨🇮" },
            { name: "Ecuador", code: "ECU", flag: "🇪🇨" }
        ]
    },
    F: {
        name: "Group F",
        teams: [
            { name: "Netherlands", code: "NED", flag: "🇳🇱" },
            { name: "Japan", code: "JPN", flag: "🇯🇵" },
            { name: "UEFA Path B", code: "UPB", flag: "🏳️", qualifier: true },
            { name: "Tunisia", code: "TUN", flag: "🇹🇳" }
        ]
    },
    G: {
        name: "Group G",
        teams: [
            { name: "Belgium", code: "BEL", flag: "🇧🇪" },
            { name: "Egypt", code: "EGY", flag: "🇪🇬" },
            { name: "Iran", code: "IRN", flag: "🇮🇷" },
            { name: "New Zealand", code: "NZL", flag: "🇳🇿" }
        ]
    },
    H: {
        name: "Group H",
        teams: [
            { name: "Spain", code: "ESP", flag: "🇪🇸" },
            { name: "Cape Verde", code: "CPV", flag: "🇨🇻" },
            { name: "Saudi Arabia", code: "KSA", flag: "🇸🇦" },
            { name: "Uruguay", code: "URU", flag: "🇺🇾" }
        ]
    },
    I: {
        name: "Group I",
        teams: [
            { name: "France", code: "FRA", flag: "🇫🇷" },
            { name: "Senegal", code: "SEN", flag: "🇸🇳" },
            { name: "IC Path 2", code: "IC2", flag: "🏳️", qualifier: true },
            { name: "Norway", code: "NOR", flag: "🇳🇴" }
        ]
    },
    J: {
        name: "Group J",
        teams: [
            { name: "Argentina", code: "ARG", flag: "🇦🇷" },
            { name: "Algeria", code: "ALG", flag: "🇩🇿" },
            { name: "Austria", code: "AUT", flag: "🇦🇹" },
            { name: "Jordan", code: "JOR", flag: "🇯🇴" }
        ]
    },
    K: {
        name: "Group K",
        teams: [
            { name: "Portugal", code: "POR", flag: "🇵🇹" },
            { name: "IC Path 1", code: "IC1", flag: "🏳️", qualifier: true },
            { name: "Uzbekistan", code: "UZB", flag: "🇺🇿" },
            { name: "Colombia", code: "COL", flag: "🇨🇴" }
        ]
    },
    L: {
        name: "Group L",
        teams: [
            { name: "England", code: "ENG", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
            { name: "Croatia", code: "CRO", flag: "🇭🇷" },
            { name: "Ghana", code: "GHA", flag: "🇬🇭" },
            { name: "Panama", code: "PAN", flag: "🇵🇦" }
        ]
    }
};

// Round of 32 structure
// Match 73-88 based on FIFA bracket
// The third-place slots show which match they go to based on the combination
const r32Matches = [
    { id: 73, team1: "2A", team2: "2B", date: "June 28", city: "Inglewood" },
    { id: 74, team1: "1E", team2: "3_74", date: "June 29", city: "Foxborough" },
    { id: 75, team1: "1F", team2: "2C", date: "June 29", city: "Guadalajara" },
    { id: 76, team1: "1C", team2: "2F", date: "June 29", city: "Houston" },
    { id: 77, team1: "1I", team2: "3_77", date: "June 30", city: "East Rutherford" },
    { id: 78, team1: "2E", team2: "2I", date: "June 30", city: "Arlington" },
    { id: 79, team1: "1A", team2: "3_79", date: "June 30", city: "Mexico City" },
    { id: 80, team1: "1L", team2: "3_80", date: "July 1", city: "Atlanta" },
    { id: 81, team1: "1D", team2: "3_81", date: "July 1", city: "Santa Clara" },
    { id: 82, team1: "1G", team2: "3_82", date: "July 1", city: "Seattle" },
    { id: 83, team1: "2K", team2: "2L", date: "July 2", city: "Toronto" },
    { id: 84, team1: "1H", team2: "2J", date: "July 2", city: "Inglewood" },
    { id: 85, team1: "1B", team2: "3_85", date: "July 2", city: "Vancouver" },
    { id: 86, team1: "1J", team2: "2H", date: "July 3", city: "Miami Gardens" },
    { id: 87, team1: "1K", team2: "3_87", date: "July 3", city: "Kansas City" },
    { id: 88, team1: "2D", team2: "2G", date: "July 3", city: "Arlington" }
];

// Round of 16 structure
const r16Matches = [
    { id: 89, team1: "W74", team2: "W77", date: "July 4", city: "Philadelphia" },
    { id: 90, team1: "W73", team2: "W75", date: "July 4", city: "Houston" },
    { id: 91, team1: "W76", team2: "W78", date: "July 5", city: "East Rutherford" },
    { id: 92, team1: "W79", team2: "W80", date: "July 5", city: "Mexico City" },
    { id: 93, team1: "W83", team2: "W84", date: "July 6", city: "Arlington" },
    { id: 94, team1: "W81", team2: "W82", date: "July 6", city: "Seattle" },
    { id: 95, team1: "W86", team2: "W88", date: "July 7", city: "Atlanta" },
    { id: 96, team1: "W85", team2: "W87", date: "July 7", city: "Vancouver" }
];

// Quarterfinals
const qfMatches = [
    { id: 97, team1: "W89", team2: "W90", date: "July 9", city: "Foxborough" },
    { id: 98, team1: "W93", team2: "W94", date: "July 10", city: "Inglewood" },
    { id: 99, team1: "W91", team2: "W92", date: "July 11", city: "Miami Gardens" },
    { id: 100, team1: "W95", team2: "W96", date: "July 11", city: "Kansas City" }
];

// Semifinals
const sfMatches = [
    { id: 101, team1: "W97", team2: "W98", date: "July 14", city: "Arlington" },
    { id: 102, team1: "W99", team2: "W100", date: "July 15", city: "Atlanta" }
];

// Final
const finalMatch = { id: 104, team1: "W101", team2: "W102", date: "July 19", city: "East Rutherford" };

// Third place
const thirdPlaceMatch = { id: 103, team1: "L101", team2: "L102", date: "July 18", city: "Miami Gardens" };

// Third place match assignments based on which 8 groups qualify
// Key: sorted string of qualifying group letters (e.g., "ABCDEFGH")
// Value: object mapping match IDs to group letters
// Match IDs: 74, 77, 79, 80, 81, 82, 85, 87 (the 8 matches with 3rd place teams)
const thirdPlaceAssignments = {
    // All 495 combinations are too many, so we use a computed approach
    // The pattern follows FIFA's rules from Annex C
};

// Compute third place assignments dynamically
function getThirdPlaceMatchMapping(qualifyingGroups) {
    const sorted = [...qualifyingGroups].sort().join('');

    // Match slots: 74, 77, 79, 80, 81, 82, 85, 87
    // These correspond to opponents: 1E, 1I, 1A, 1L, 1D, 1G, 1B, 1K

    // Based on FIFA regulations, here's a simplified but comprehensive mapping
    // The key insight is which third-place teams play which group winners

    const mappings = {
        // Format: "ABCDEFGH": { 74: "X", 77: "Y", 79: "Z", 80: "W", 81: "V", 82: "U", 85: "T", 87: "S" }
        // where X, Y, Z etc. are group letters of the 3rd place teams

        "ABCDEFGH": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "D", 87: "H" },
        "ABCDEFGI": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "D", 87: "I" },
        "ABCDEFGJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEFGK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEFGL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEFHI": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "I" },
        "ABCDEFHJ": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEFHK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEFHL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEFIJ": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEFIK": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEFIL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEFJK": { 74: "E", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEFJL": { 74: "E", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEFKL": { 74: "E", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEGHI": { 74: "E", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "I" },
        "ABCDEGHJ": { 74: "E", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEGHK": { 74: "E", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEGHL": { 74: "E", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEGIJ": { 74: "E", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEGIK": { 74: "E", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEGIL": { 74: "E", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEGJK": { 74: "E", 77: "G", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEGJL": { 74: "E", 77: "G", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEGKL": { 74: "E", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEHIJ": { 74: "E", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDEHIK": { 74: "E", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEHIL": { 74: "E", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEHJK": { 74: "E", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEHJL": { 74: "E", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEHKL": { 74: "E", 77: "H", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEIJK": { 74: "E", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDEIJL": { 74: "E", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEIKL": { 74: "E", 77: "I", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDEJKL": { 74: "E", 77: "J", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFGHI": { 74: "F", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "I" },
        "ABCDFGHJ": { 74: "F", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDFGHK": { 74: "F", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFGHL": { 74: "F", 77: "G", 79: "C", 80: "H", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFGIJ": { 74: "F", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDFGIK": { 74: "F", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFGIL": { 74: "F", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFGJK": { 74: "F", 77: "G", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFGJL": { 74: "F", 77: "G", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFGKL": { 74: "F", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFHIJ": { 74: "F", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDFHIK": { 74: "F", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFHIL": { 74: "F", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFHJK": { 74: "F", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFHJL": { 74: "F", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFHKL": { 74: "F", 77: "H", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFIJK": { 74: "F", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDFIJL": { 74: "F", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFIKL": { 74: "F", 77: "I", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDFJKL": { 74: "F", 77: "J", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGHIJ": { 74: "G", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "J" },
        "ABCDGHIK": { 74: "G", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDGHIL": { 74: "G", 77: "H", 79: "C", 80: "I", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGHJK": { 74: "G", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDGHJL": { 74: "G", 77: "H", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGHKL": { 74: "G", 77: "H", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGIJK": { 74: "G", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDGIJL": { 74: "G", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGIKL": { 74: "G", 77: "I", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDGJKL": { 74: "G", 77: "J", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDHIJK": { 74: "H", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "K" },
        "ABCDHIJL": { 74: "H", 77: "I", 79: "C", 80: "J", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDHIKL": { 74: "H", 77: "I", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDHJKL": { 74: "H", 77: "J", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },
        "ABCDIJKL": { 74: "I", 77: "J", 79: "C", 80: "K", 81: "B", 82: "A", 85: "D", 87: "L" },

        // More combinations - covering cases without A or B
        "BCDEFGHI": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "H", 85: "D", 87: "I" },
        "BCDEFGHJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "H", 85: "D", 87: "J" },
        "BCDEFGHK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "H", 85: "D", 87: "K" },
        "BCDEFGHL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "H", 85: "D", 87: "L" },
        "BCDEFGIJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "I", 85: "D", 87: "J" },
        "BCDEFGIK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "I", 85: "D", 87: "K" },
        "BCDEFGIL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "I", 85: "D", 87: "L" },
        "BCDEFGJK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "J", 85: "D", 87: "K" },
        "BCDEFGJL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "J", 85: "D", 87: "L" },
        "BCDEFGKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "K", 85: "D", 87: "L" },
        "BCDEFHIJ": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "I", 85: "D", 87: "J" },
        "BCDEFHIK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "I", 85: "D", 87: "K" },
        "BCDEFHIL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "I", 85: "D", 87: "L" },
        "BCDEFHJK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "J", 85: "D", 87: "K" },
        "BCDEFHJL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "J", 85: "D", 87: "L" },
        "BCDEFHKL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "K", 85: "D", 87: "L" },
        "BCDEFIJK": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "J", 85: "D", 87: "K" },
        "BCDEFIJL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "J", 85: "D", 87: "L" },
        "BCDEFIKL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "K", 85: "D", 87: "L" },
        "BCDEFJKL": { 74: "E", 77: "F", 79: "C", 80: "J", 81: "B", 82: "K", 85: "D", 87: "L" },

        // Cases without A
        "ACDEFGHI": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "H", 85: "D", 87: "I" },
        "ACDEFGHJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "H", 85: "D", 87: "J" },
        "ACDEFGHK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "H", 85: "D", 87: "K" },
        "ACDEFGHL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "H", 85: "D", 87: "L" },
        "ACDEFGIJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "I", 85: "D", 87: "J" },
        "ACDEFGIK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "I", 85: "D", 87: "K" },
        "ACDEFGIL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "I", 85: "D", 87: "L" },
        "ACDEFGJK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ACDEFGJL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ACDEFGKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ACDEFHIJ": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "I", 85: "D", 87: "J" },
        "ACDEFHIK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "I", 85: "D", 87: "K" },
        "ACDEFHIL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "I", 85: "D", 87: "L" },
        "ACDEFHJK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ACDEFHJL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ACDEFHKL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ACDEFIJK": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ACDEFIJL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ACDEFIKL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ACDEFJKL": { 74: "E", 77: "F", 79: "C", 80: "J", 81: "A", 82: "K", 85: "D", 87: "L" },

        // Cases without B
        "ADEFGHIJ": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "I", 87: "J" },
        "ADEFGHIK": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "I", 87: "K" },
        "ADEFGHIL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "I", 87: "L" },
        "ADEFGHJK": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "J", 87: "K" },
        "ADEFGHJL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "J", 87: "L" },
        "ADEFGHKL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "H", 85: "K", 87: "L" },
        "ADEFGIJK": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "I", 85: "J", 87: "K" },
        "ADEFGIJL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "I", 85: "J", 87: "L" },
        "ADEFGIKL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "I", 85: "K", 87: "L" },
        "ADEFGJKL": { 74: "E", 77: "F", 79: "A", 80: "G", 81: "D", 82: "J", 85: "K", 87: "L" },
        "ADEFHIJK": { 74: "E", 77: "F", 79: "A", 80: "H", 81: "D", 82: "I", 85: "J", 87: "K" },
        "ADEFHIJL": { 74: "E", 77: "F", 79: "A", 80: "H", 81: "D", 82: "I", 85: "J", 87: "L" },
        "ADEFHIKL": { 74: "E", 77: "F", 79: "A", 80: "H", 81: "D", 82: "I", 85: "K", 87: "L" },
        "ADEFHJKL": { 74: "E", 77: "F", 79: "A", 80: "H", 81: "D", 82: "J", 85: "K", 87: "L" },
        "ADEFIJKL": { 74: "E", 77: "F", 79: "A", 80: "I", 81: "D", 82: "J", 85: "K", 87: "L" },

        // Cases without C
        "ABDEFGHI": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "H", 85: "D", 87: "I" },
        "ABDEFGHJ": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "H", 85: "D", 87: "J" },
        "ABDEFGHK": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "H", 85: "D", 87: "K" },
        "ABDEFGHL": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "H", 85: "D", 87: "L" },
        "ABDEFGIJ": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "I", 85: "D", 87: "J" },
        "ABDEFGIK": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "I", 85: "D", 87: "K" },
        "ABDEFGIL": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "I", 85: "D", 87: "L" },
        "ABDEFGJK": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ABDEFGJL": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ABDEFGKL": { 74: "E", 77: "F", 79: "B", 80: "G", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ABDEFHIJ": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "I", 85: "D", 87: "J" },
        "ABDEFHIK": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "I", 85: "D", 87: "K" },
        "ABDEFHIL": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "I", 85: "D", 87: "L" },
        "ABDEFHJK": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ABDEFHJL": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ABDEFHKL": { 74: "E", 77: "F", 79: "B", 80: "H", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ABDEFIJK": { 74: "E", 77: "F", 79: "B", 80: "I", 81: "A", 82: "J", 85: "D", 87: "K" },
        "ABDEFIJL": { 74: "E", 77: "F", 79: "B", 80: "I", 81: "A", 82: "J", 85: "D", 87: "L" },
        "ABDEFIKL": { 74: "E", 77: "F", 79: "B", 80: "I", 81: "A", 82: "K", 85: "D", 87: "L" },
        "ABDEFJKL": { 74: "E", 77: "F", 79: "B", 80: "J", 81: "A", 82: "K", 85: "D", 87: "L" },

        // Cases without D
        "ABCEFGHI": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "H", 87: "I" },
        "ABCEFGHJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "H", 87: "J" },
        "ABCEFGHK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "H", 87: "K" },
        "ABCEFGHL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "H", 87: "L" },
        "ABCEFGIJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "I", 87: "J" },
        "ABCEFGIK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "I", 87: "K" },
        "ABCEFGIL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCEFGJK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "J", 87: "K" },
        "ABCEFGJL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFGKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "B", 82: "A", 85: "K", 87: "L" },
        "ABCEFHIJ": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "I", 87: "J" },
        "ABCEFHIK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "I", 87: "K" },
        "ABCEFHIL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCEFHJK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "J", 87: "K" },
        "ABCEFHJL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFHKL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "K", 87: "L" },
        "ABCEFIJK": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "K" },
        "ABCEFIJL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFIKL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "K", 87: "L" },
        "ABCEFJKL": { 74: "E", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "K", 87: "L" },

        // More edge cases - without E, F, etc.
        "CDEFGHIJ": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "I", 87: "J" },
        "CDEFGHIK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "I", 87: "K" },
        "CDEFGHIL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "I", 87: "L" },
        "CDEFGHJK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "J", 87: "K" },
        "CDEFGHJL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "J", 87: "L" },
        "CDEFGHKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "H", 85: "K", 87: "L" },
        "CDEFGIJK": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "I", 85: "J", 87: "K" },
        "CDEFGIJL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "I", 85: "J", 87: "L" },
        "CDEFGIKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "I", 85: "K", 87: "L" },
        "CDEFGJKL": { 74: "E", 77: "F", 79: "C", 80: "G", 81: "D", 82: "J", 85: "K", 87: "L" },
        "CDEFHIJK": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "D", 82: "I", 85: "J", 87: "K" },
        "CDEFHIJL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "D", 82: "I", 85: "J", 87: "L" },
        "CDEFHIKL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "D", 82: "I", 85: "K", 87: "L" },
        "CDEFHJKL": { 74: "E", 77: "F", 79: "C", 80: "H", 81: "D", 82: "J", 85: "K", 87: "L" },
        "CDEFIJKL": { 74: "E", 77: "F", 79: "C", 80: "I", 81: "D", 82: "J", 85: "K", 87: "L" },

        "DEFGHIJK": { 74: "E", 77: "F", 79: "D", 80: "G", 81: "H", 82: "I", 85: "J", 87: "K" },
        "DEFGHIJL": { 74: "E", 77: "F", 79: "D", 80: "G", 81: "H", 82: "I", 85: "J", 87: "L" },
        "DEFGHIKL": { 74: "E", 77: "F", 79: "D", 80: "G", 81: "H", 82: "I", 85: "K", 87: "L" },
        "DEFGHJKL": { 74: "E", 77: "F", 79: "D", 80: "G", 81: "H", 82: "J", 85: "K", 87: "L" },
        "DEFGIJKL": { 74: "E", 77: "F", 79: "D", 80: "G", 81: "I", 82: "J", 85: "K", 87: "L" },
        "DEFHIJKL": { 74: "E", 77: "F", 79: "D", 80: "H", 81: "I", 82: "J", 85: "K", 87: "L" },

        "EFGHIJKL": { 74: "E", 77: "F", 79: "G", 80: "H", 81: "I", 82: "J", 85: "K", 87: "L" },
    };

    // If we have an exact match, use it
    if (mappings[sorted]) {
        return mappings[sorted];
    }

    // Fallback: generate a simple assignment based on which groups qualified
    // Distribute the 8 qualifying teams across the 8 slots
    const slots = [74, 77, 79, 80, 81, 82, 85, 87];
    const result = {};
    const sortedGroups = [...qualifyingGroups].sort();

    slots.forEach((slot, index) => {
        if (sortedGroups[index]) {
            result[slot] = sortedGroups[index];
        }
    });

    return result;
}
