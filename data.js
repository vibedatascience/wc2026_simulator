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
        "ABCDEFGH": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "G", 87: "D" },
        "ABCDEFGI": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEFGJ": { 74: "D", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEFGK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEFGL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDEFHI": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "E", 87: "D" },
        "ABCDEFHJ": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "D" },
        "ABCDEFHK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "D" },
        "ABCDEFHL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "B", 82: "A", 85: "F", 87: "L" },
        "ABCDEFIJ": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCDEFIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "E", 87: "I" },
        "ABCDEFIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCDEFJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCDEFJL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDEFKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCDEGHI": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEGHJ": { 74: "C", 77: "D", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEGHK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCDEGHL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDEGIJ": { 74: "C", 77: "D", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDEGIK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDEGIL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDEGJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABCDEGJL": { 74: "C", 77: "D", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDEGKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDEHIJ": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCDEHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "I" },
        "ABCDEHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCDEHJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCDEHJL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDEHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCDEIJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCDEIJL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDEIKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCDEJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDFGHI": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "D" },
        "ABCDFGHJ": { 74: "C", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "D" },
        "ABCDFGHK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "D" },
        "ABCDFGHL": { 74: "D", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDFGIJ": { 74: "D", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDFGIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDFGIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDFGJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABCDFGJL": { 74: "D", 77: "F", 79: "C", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDFGKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDFHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "D" },
        "ABCDFHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "F", 87: "I" },
        "ABCDFHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "F", 87: "L" },
        "ABCDFHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "D" },
        "ABCDFHJL": { 74: "D", 77: "F", 79: "C", 80: "H", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDFHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "F", 87: "L" },
        "ABCDFIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCDFIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDFIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCDFJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDGHIJ": { 74: "C", 77: "D", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDGHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCDGHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDGHJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABCDGHJL": { 74: "C", 77: "D", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDGHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDGIJK": { 74: "D", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCDGIJL": { 74: "D", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDGIKL": { 74: "C", 77: "D", 79: "I", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCDGJKL": { 74: "D", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDHIJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCDHIJL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDHIKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCDHJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCDIJKL": { 74: "C", 77: "D", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFGHI": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCEFGHJ": { 74: "C", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCEFGHK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABCEFGHL": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEFGIJ": { 74: "C", 77: "F", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCEFGIK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCEFGIL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEFGJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABCEFGJL": { 74: "C", 77: "F", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEFGKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEFHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCEFHIK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "I" },
        "ABCEFHIL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCEFHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCEFHJL": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFHKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABCEFIJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCEFIJL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEFIKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCEFJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEGHIJ": { 74: "C", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCEGHIK": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCEGHIL": { 74: "C", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEGHJK": { 74: "C", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABCEGHJL": { 74: "C", 77: "G", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEGHKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCEGIJK": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCEGIJL": { 74: "C", 77: "G", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEGIKL": { 74: "A", 77: "C", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "ABCEGJKL": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEHIJK": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCEHIJL": { 74: "C", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEHIKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCEHJKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCEIJKL": { 74: "A", 77: "C", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABCFGHIJ": { 74: "C", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCFGHIK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABCFGHIL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCFGHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABCFGHJL": { 74: "C", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCFGHKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCFGIJK": { 74: "F", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCFGIJL": { 74: "F", 77: "G", 79: "C", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCFGIKL": { 74: "C", 77: "F", 79: "I", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCFGJKL": { 74: "F", 77: "G", 79: "C", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCFHIJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCFHIJL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCFHIKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABCFHJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCFIJKL": { 74: "C", 77: "F", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCGHIJK": { 74: "C", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABCGHIJL": { 74: "C", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCGHIKL": { 74: "C", 77: "H", 79: "I", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABCGHJKL": { 74: "C", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCGIJKL": { 74: "C", 77: "G", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABCHIJKL": { 74: "C", 77: "H", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEFGHI": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABDEFGHJ": { 74: "D", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABDEFGHK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "E" },
        "ABDEFGHL": { 74: "D", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEFGIJ": { 74: "D", 77: "F", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABDEFGIK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABDEFGIL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEFGJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABDEFGJL": { 74: "D", 77: "F", 79: "E", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEFGKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEFHIJ": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABDEFHIK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "I" },
        "ABDEFHIL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABDEFHJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABDEFHJL": { 74: "D", 77: "F", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEFHKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "E", 87: "L" },
        "ABDEFIJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDEFIJL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEFIKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABDEFJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEGHIJ": { 74: "D", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABDEGHIK": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABDEGHIL": { 74: "D", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEGHJK": { 74: "D", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABDEGHJL": { 74: "D", 77: "G", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEGHKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDEGIJK": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDEGIJL": { 74: "D", 77: "G", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEGIKL": { 74: "A", 77: "D", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "ABDEGJKL": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEHIJK": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDEHIJL": { 74: "D", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEHIKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABDEHJKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDEIJKL": { 74: "A", 77: "D", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABDFGHIJ": { 74: "D", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABDFGHIK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABDFGHIL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDFGHJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "J" },
        "ABDFGHJL": { 74: "D", 77: "F", 79: "H", 80: "J", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDFGHKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDFGIJK": { 74: "D", 77: "G", 79: "F", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDFGIJL": { 74: "D", 77: "G", 79: "F", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDFGIKL": { 74: "D", 77: "F", 79: "I", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDFGJKL": { 74: "D", 77: "G", 79: "F", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDFHIJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDFHIJL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDFHIKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABDFHJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDFIJKL": { 74: "D", 77: "F", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDGHIJK": { 74: "D", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABDGHIJL": { 74: "D", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDGHIKL": { 74: "D", 77: "H", 79: "I", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABDGHJKL": { 74: "D", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDGIJKL": { 74: "D", 77: "G", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABDHIJKL": { 74: "D", 77: "H", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFGHIJ": { 74: "F", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABEFGHIK": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "I" },
        "ABEFGHIL": { 74: "F", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABEFGHJK": { 74: "F", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "E" },
        "ABEFGHJL": { 74: "F", 77: "G", 79: "H", 80: "E", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFGHKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "G", 87: "L" },
        "ABEFGIJK": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABEFGIJL": { 74: "F", 77: "G", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFGIKL": { 74: "A", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "ABEFGJKL": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFHIJK": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABEFHIJL": { 74: "F", 77: "H", 79: "E", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFHIKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "I", 87: "L" },
        "ABEFHJKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABEFIJKL": { 74: "A", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABEGHIJK": { 74: "A", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "ABEGHIJL": { 74: "A", 77: "G", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "ABEGHIKL": { 74: "A", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "ABEGHJKL": { 74: "A", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "ABEGIJKL": { 74: "A", 77: "G", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABEHIJKL": { 74: "A", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABFGHIJK": { 74: "F", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "I" },
        "ABFGHIJL": { 74: "F", 77: "G", 79: "H", 80: "I", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABFGHIKL": { 74: "A", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "ABFGHJKL": { 74: "F", 77: "G", 79: "H", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABFGIJKL": { 74: "F", 77: "G", 79: "I", 80: "K", 81: "B", 82: "A", 85: "J", 87: "L" },
        "ABFHIJKL": { 74: "A", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ABGHIJKL": { 74: "A", 77: "G", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "ACDEFGHI": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "G", 87: "D" },
        "ACDEFGHJ": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "J", 82: "A", 85: "G", 87: "D" },
        "ACDEFGHK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "D" },
        "ACDEFGHL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "F", 82: "A", 85: "G", 87: "L" },
        "ACDEFGIJ": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACDEFGIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "A", 85: "G", 87: "I" },
        "ACDEFGIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACDEFGJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACDEFGJL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDEFGKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACDEFHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "J", 87: "D" },
        "ACDEFHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "E", 87: "I" },
        "ACDEFHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "F", 82: "A", 85: "E", 87: "L" },
        "ACDEFHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "D" },
        "ACDEFHJL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "F", 82: "A", 85: "J", 87: "L" },
        "ACDEFHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "E", 87: "L" },
        "ACDEFIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "A", 85: "J", 87: "I" },
        "ACDEFIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACDEFIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "A", 85: "E", 87: "L" },
        "ACDEFJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACDEGHIJ": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACDEGHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "I" },
        "ACDEGHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACDEGHJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACDEGHJL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDEGHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACDEGIJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACDEGIJL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDEGIKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACDEGJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDEHIJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "I" },
        "ACDEHIJL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACDEHIKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "I", 82: "A", 85: "E", 87: "L" },
        "ACDEHJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACDEIJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACDFGHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "D" },
        "ACDFGHIK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "G", 87: "I" },
        "ACDFGHIL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "F", 82: "A", 85: "G", 87: "L" },
        "ACDFGHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "D" },
        "ACDFGHJL": { 74: "D", 77: "F", 79: "C", 80: "H", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDFGHKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "G", 87: "L" },
        "ACDFGIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACDFGIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDFGIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACDFGJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDFHIJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "J", 87: "I" },
        "ACDFHIJL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "F", 82: "A", 85: "J", 87: "L" },
        "ACDFHIKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "I", 82: "A", 85: "F", 87: "L" },
        "ACDFHJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "F", 82: "A", 85: "J", 87: "L" },
        "ACDFIJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACDGHIJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACDGHIJL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDGHIKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACDGHJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDGIJKL": { 74: "C", 77: "D", 79: "I", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACDHIJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACEFGHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACEFGHIK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "I" },
        "ACEFGHIL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACEFGHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ACEFGHJL": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACEFGHKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ACEFGIJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACEFGIJL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACEFGIKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACEFGJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACEFHIJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "I" },
        "ACEFHIJL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACEFHIKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "E", 87: "L" },
        "ACEFHJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ACEFIJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACEGHIJK": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACEGHIJL": { 74: "C", 77: "H", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACEGHIKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACEGHJKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACEGIJKL": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACEHIJKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACFGHIJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ACFGHIJL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACFGHIKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ACFGHJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACFGIJKL": { 74: "C", 77: "F", 79: "I", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ACFHIJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ACGHIJKL": { 74: "C", 77: "G", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ADEFGHIJ": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ADEFGHIK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "I" },
        "ADEFGHIL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ADEFGHJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "E" },
        "ADEFGHJL": { 74: "D", 77: "F", 79: "H", 80: "E", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADEFGHKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "G", 87: "L" },
        "ADEFGIJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ADEFGIJL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADEFGIKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ADEFGJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADEFHIJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "I" },
        "ADEFHIJL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ADEFHIKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "E", 87: "L" },
        "ADEFHJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "E", 82: "A", 85: "J", 87: "L" },
        "ADEFIJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ADEGHIJK": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ADEGHIJL": { 74: "D", 77: "H", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADEGHIKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ADEGHJKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADEGIJKL": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ADEHIJKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ADFGHIJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "ADFGHIJL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADFGHIKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "ADFGHJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADFGIJKL": { 74: "D", 77: "F", 79: "I", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "ADFHIJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "ADGHIJKL": { 74: "D", 77: "G", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "AEFGHIJK": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "I" },
        "AEFGHIJL": { 74: "F", 77: "H", 79: "E", 80: "I", 81: "J", 82: "A", 85: "G", 87: "L" },
        "AEFGHIKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "G", 87: "L" },
        "AEFGHJKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "J", 82: "A", 85: "G", 87: "L" },
        "AEFGIJKL": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "AEFHIJKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "AEGHIJKL": { 74: "A", 77: "G", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "AFGHIJKL": { 74: "F", 77: "G", 79: "H", 80: "K", 81: "I", 82: "A", 85: "J", 87: "L" },
        "BCDEFGHI": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "H", 85: "G", 87: "E" },
        "BCDEFGHJ": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "J", 85: "G", 87: "D" },
        "BCDEFGHK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "G", 87: "E" },
        "BCDEFGHL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDEFGIJ": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCDEFGIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "E", 85: "G", 87: "I" },
        "BCDEFGIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "E", 85: "G", 87: "L" },
        "BCDEFGJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCDEFGJL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDEFGKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "E", 85: "G", 87: "L" },
        "BCDEFHIJ": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "H", 85: "J", 87: "E" },
        "BCDEFHIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "E", 87: "I" },
        "BCDEFHIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "H", 85: "E", 87: "L" },
        "BCDEFHJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "J", 87: "E" },
        "BCDEFHJL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCDEFHKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "E", 87: "L" },
        "BCDEFIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "E", 85: "J", 87: "I" },
        "BCDEFIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "E", 85: "J", 87: "L" },
        "BCDEFIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "I", 85: "E", 87: "L" },
        "BCDEFJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "E", 85: "J", 87: "L" },
        "BCDEGHIJ": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCDEGHIK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "I" },
        "BCDEGHIL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDEGHJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCDEGHJL": { 74: "C", 77: "D", 79: "H", 80: "E", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDEGHKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDEGIJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BCDEGIJL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDEGIKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCDEGJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDEHIJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BCDEHIJL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCDEHIKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "H", 85: "I", 87: "L" },
        "BCDEHJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCDEIJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCDFGHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "D" },
        "BCDFGHIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "G", 87: "I" },
        "BCDFGHIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDFGHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "D" },
        "BCDFGHJL": { 74: "D", 77: "F", 79: "C", 80: "J", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDFGHKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCDFGIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BCDFGIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDFGIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCDFGJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDFHIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BCDFHIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCDFHIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "I", 87: "L" },
        "BCDFHJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCDFIJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCDGHIJK": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BCDGHIJL": { 74: "C", 77: "D", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDGHIKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCDGHJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDGIJKL": { 74: "C", 77: "D", 79: "I", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCDHIJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCEFGHIJ": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCEFGHIK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "I" },
        "BCEFGHIL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCEFGHJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BCEFGHJL": { 74: "C", 77: "F", 79: "H", 80: "E", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCEFGHKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BCEFGIJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BCEFGIJL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCEFGIKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCEFGJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCEFHIJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BCEFHIJL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCEFHIKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "I", 87: "L" },
        "BCEFHJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCEFIJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCEGHIJK": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BCEGHIJL": { 74: "C", 77: "G", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCEGHIKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCEGHJKL": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BCEGIJKL": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCEHIJKL": { 74: "C", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCFGHIJK": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BCFGHIJL": { 74: "C", 77: "F", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCFGHIKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BCFGHJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCFGIJKL": { 74: "C", 77: "F", 79: "I", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BCFHIJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BCGHIJKL": { 74: "C", 77: "G", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BDEFGHIJ": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BDEFGHIK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "I" },
        "BDEFGHIL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BDEFGHJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "E" },
        "BDEFGHJL": { 74: "D", 77: "F", 79: "H", 80: "E", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDEFGHKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "G", 87: "L" },
        "BDEFGIJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BDEFGIJL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDEFGIKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BDEFGJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDEFHIJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BDEFHIJL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BDEFHIKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "I", 87: "L" },
        "BDEFHJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BDEFIJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BDEGHIJK": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BDEGHIJL": { 74: "D", 77: "G", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BDEGHIKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BDEGHJKL": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BDEGIJKL": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BDEHIJKL": { 74: "D", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BDFGHIJK": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "I" },
        "BDFGHIJL": { 74: "D", 77: "F", 79: "H", 80: "I", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDFGHIKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BDFGHJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDFGIJKL": { 74: "D", 77: "F", 79: "I", 80: "K", 81: "B", 82: "J", 85: "G", 87: "L" },
        "BDFHIJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BDGHIJKL": { 74: "D", 77: "G", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BEFGHIJK": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "I" },
        "BEFGHIJL": { 74: "F", 77: "G", 79: "E", 80: "I", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BEFGHIKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "G", 87: "L" },
        "BEFGHJKL": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "B", 82: "H", 85: "J", 87: "L" },
        "BEFGIJKL": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BEFHIJKL": { 74: "F", 77: "H", 79: "E", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "BEGHIJKL": { 74: "B", 77: "G", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "BFGHIJKL": { 74: "F", 77: "G", 79: "H", 80: "K", 81: "B", 82: "I", 85: "J", 87: "L" },
        "CDEFGHIJ": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "J", 82: "H", 85: "G", 87: "E" },
        "CDEFGHIK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "H", 85: "G", 87: "I" },
        "CDEFGHIL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "E", 82: "H", 85: "G", 87: "L" },
        "CDEFGHJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "H", 85: "G", 87: "E" },
        "CDEFGHJL": { 74: "D", 77: "F", 79: "C", 80: "E", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CDEFGHKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "H", 85: "G", 87: "L" },
        "CDEFGIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "J", 85: "G", 87: "I" },
        "CDEFGIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "E", 82: "J", 85: "G", 87: "L" },
        "CDEFGIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "I", 85: "G", 87: "L" },
        "CDEFGJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "J", 85: "G", 87: "L" },
        "CDEFHIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "H", 85: "J", 87: "I" },
        "CDEFHIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "E", 82: "H", 85: "J", 87: "L" },
        "CDEFHIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "H", 85: "E", 87: "L" },
        "CDEFHJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "H", 85: "J", 87: "L" },
        "CDEFIJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "E", 82: "I", 85: "J", 87: "L" },
        "CDEGHIJK": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "I" },
        "CDEGHIJL": { 74: "C", 77: "D", 79: "E", 80: "I", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CDEGHIKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "I", 82: "H", 85: "G", 87: "L" },
        "CDEGHJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CDEGIJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "CDEHIJKL": { 74: "C", 77: "D", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "CDFGHIJK": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "H", 85: "G", 87: "I" },
        "CDFGHIJL": { 74: "D", 77: "F", 79: "C", 80: "I", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CDFGHIKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "H", 85: "G", 87: "L" },
        "CDFGHJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CDFGIJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "CDFHIJKL": { 74: "D", 77: "F", 79: "C", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "CDGHIJKL": { 74: "C", 77: "D", 79: "H", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "CEFGHIJK": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "I" },
        "CEFGHIJL": { 74: "C", 77: "F", 79: "E", 80: "I", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CEFGHIKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "I", 82: "H", 85: "G", 87: "L" },
        "CEFGHJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "L" },
        "CEFGIJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "CEFHIJKL": { 74: "C", 77: "F", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "CEGHIJKL": { 74: "C", 77: "G", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "CFGHIJKL": { 74: "C", 77: "F", 79: "H", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "DEFGHIJK": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "I" },
        "DEFGHIJL": { 74: "D", 77: "F", 79: "E", 80: "I", 81: "J", 82: "H", 85: "G", 87: "L" },
        "DEFGHIKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "I", 82: "H", 85: "G", 87: "L" },
        "DEFGHJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "J", 82: "H", 85: "G", 87: "L" },
        "DEFGIJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "DEFHIJKL": { 74: "D", 77: "F", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "DEGHIJKL": { 74: "D", 77: "G", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
        "DFGHIJKL": { 74: "D", 77: "F", 79: "H", 80: "K", 81: "I", 82: "J", 85: "G", 87: "L" },
        "EFGHIJKL": { 74: "F", 77: "G", 79: "E", 80: "K", 81: "I", 82: "H", 85: "J", 87: "L" },
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
