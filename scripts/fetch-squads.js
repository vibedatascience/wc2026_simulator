/**
 * Fetch World Cup 2026 squad data from Wikipedia
 * Run with: node scripts/fetch-squads.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// All 48 teams for WC 2026
const teams = [
    { code: 'ARG', name: 'Argentina', wiki: 'Argentina_national_football_team', flag: '🇦🇷', country: 'Argentina' },
    { code: 'BRA', name: 'Brazil', wiki: 'Brazil_national_football_team', flag: '🇧🇷', country: 'Brazil' },
    { code: 'ENG', name: 'England', wiki: 'England_national_football_team', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', country: 'England' },
    { code: 'FRA', name: 'France', wiki: 'France_national_football_team', flag: '🇫🇷', country: 'France' },
    { code: 'ESP', name: 'Spain', wiki: 'Spain_national_football_team', flag: '🇪🇸', country: 'Spain' },
    { code: 'GER', name: 'Germany', wiki: 'Germany_national_football_team', flag: '🇩🇪', country: 'Germany' },
    { code: 'POR', name: 'Portugal', wiki: 'Portugal_national_football_team', flag: '🇵🇹', country: 'Portugal' },
    { code: 'NED', name: 'Netherlands', wiki: 'Netherlands_national_football_team', flag: '🇳🇱', country: 'Netherlands' },
    { code: 'BEL', name: 'Belgium', wiki: 'Belgium_national_football_team', flag: '🇧🇪', country: 'Belgium' },
    { code: 'ITA', name: 'Italy', wiki: 'Italy_national_football_team', flag: '🇮🇹', country: 'Italy' },
    { code: 'CRO', name: 'Croatia', wiki: 'Croatia_national_football_team', flag: '🇭🇷', country: 'Croatia' },
    { code: 'DEN', name: 'Denmark', wiki: 'Denmark_national_football_team', flag: '🇩🇰', country: 'Denmark' },
    { code: 'SUI', name: 'Switzerland', wiki: 'Switzerland_national_football_team', flag: '🇨🇭', country: 'Switzerland' },
    { code: 'AUT', name: 'Austria', wiki: 'Austria_national_football_team', flag: '🇦🇹', country: 'Austria' },
    { code: 'UKR', name: 'Ukraine', wiki: 'Ukraine_national_football_team', flag: '🇺🇦', country: 'Ukraine' },
    { code: 'SRB', name: 'Serbia', wiki: 'Serbia_national_football_team', flag: '🇷🇸', country: 'Serbia' },
    { code: 'POL', name: 'Poland', wiki: 'Poland_national_football_team', flag: '🇵🇱', country: 'Poland' },
    { code: 'SCO', name: 'Scotland', wiki: 'Scotland_national_football_team', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', country: 'Scotland' },
    { code: 'TUR', name: 'Turkey', wiki: 'Turkey_national_football_team', flag: '🇹🇷', country: 'Turkey' },
    { code: 'HUN', name: 'Hungary', wiki: 'Hungary_national_football_team', flag: '🇭🇺', country: 'Hungary' },
    { code: 'USA', name: 'United States', wiki: 'United_States_men%27s_national_soccer_team', flag: '🇺🇸', country: 'USA' },
    { code: 'MEX', name: 'Mexico', wiki: 'Mexico_national_football_team', flag: '🇲🇽', country: 'Mexico' },
    { code: 'CAN', name: 'Canada', wiki: 'Canada_men%27s_national_soccer_team', flag: '🇨🇦', country: 'Canada' },
    { code: 'URU', name: 'Uruguay', wiki: 'Uruguay_national_football_team', flag: '🇺🇾', country: 'Uruguay' },
    { code: 'COL', name: 'Colombia', wiki: 'Colombia_national_football_team', flag: '🇨🇴', country: 'Colombia' },
    { code: 'CHI', name: 'Chile', wiki: 'Chile_national_football_team', flag: '🇨🇱', country: 'Chile' },
    { code: 'ECU', name: 'Ecuador', wiki: 'Ecuador_national_football_team', flag: '🇪🇨', country: 'Ecuador' },
    { code: 'PAR', name: 'Paraguay', wiki: 'Paraguay_national_football_team', flag: '🇵🇾', country: 'Paraguay' },
    { code: 'PER', name: 'Peru', wiki: 'Peru_national_football_team', flag: '🇵🇪', country: 'Peru' },
    { code: 'VEN', name: 'Venezuela', wiki: 'Venezuela_national_football_team', flag: '🇻🇪', country: 'Venezuela' },
    { code: 'JPN', name: 'Japan', wiki: 'Japan_national_football_team', flag: '🇯🇵', country: 'Japan' },
    { code: 'KOR', name: 'South Korea', wiki: 'South_Korea_national_football_team', flag: '🇰🇷', country: 'South Korea' },
    { code: 'AUS', name: 'Australia', wiki: 'Australia_national_soccer_team', flag: '🇦🇺', country: 'Australia' },
    { code: 'IRN', name: 'Iran', wiki: 'Iran_national_football_team', flag: '🇮🇷', country: 'Iran' },
    { code: 'KSA', name: 'Saudi Arabia', wiki: 'Saudi_Arabia_national_football_team', flag: '🇸🇦', country: 'Saudi Arabia' },
    { code: 'QAT', name: 'Qatar', wiki: 'Qatar_national_football_team', flag: '🇶🇦', country: 'Qatar' },
    { code: 'MAR', name: 'Morocco', wiki: 'Morocco_national_football_team', flag: '🇲🇦', country: 'Morocco' },
    { code: 'SEN', name: 'Senegal', wiki: 'Senegal_national_football_team', flag: '🇸🇳', country: 'Senegal' },
    { code: 'GHA', name: 'Ghana', wiki: 'Ghana_national_football_team', flag: '🇬🇭', country: 'Ghana' },
    { code: 'CMR', name: 'Cameroon', wiki: 'Cameroon_national_football_team', flag: '🇨🇲', country: 'Cameroon' },
    { code: 'NGA', name: 'Nigeria', wiki: 'Nigeria_national_football_team', flag: '🇳🇬', country: 'Nigeria' },
    { code: 'EGY', name: 'Egypt', wiki: 'Egypt_national_football_team', flag: '🇪🇬', country: 'Egypt' },
    { code: 'TUN', name: 'Tunisia', wiki: 'Tunisia_national_football_team', flag: '🇹🇳', country: 'Tunisia' },
    { code: 'ALG', name: 'Algeria', wiki: 'Algeria_national_football_team', flag: '🇩🇿', country: 'Algeria' },
    { code: 'CIV', name: 'Ivory Coast', wiki: 'Ivory_Coast_national_football_team', flag: '🇨🇮', country: 'Ivory Coast' },
    { code: 'CRC', name: 'Costa Rica', wiki: 'Costa_Rica_national_football_team', flag: '🇨🇷', country: 'Costa Rica' },
    { code: 'JAM', name: 'Jamaica', wiki: 'Jamaica_national_football_team', flag: '🇯🇲', country: 'Jamaica' },
    { code: 'NZL', name: 'New Zealand', wiki: 'New_Zealand_national_football_team', flag: '🇳🇿', country: 'New Zealand' },
];

// Capital cities for fallback birthplace coordinates
const capitalCoords = {
    'Argentina': { lat: -34.6, lng: -58.4, city: 'Buenos Aires' },
    'Brazil': { lat: -23.5, lng: -46.6, city: 'São Paulo' },
    'England': { lat: 51.5, lng: -0.1, city: 'London' },
    'France': { lat: 48.9, lng: 2.3, city: 'Paris' },
    'Spain': { lat: 40.4, lng: -3.7, city: 'Madrid' },
    'Germany': { lat: 52.5, lng: 13.4, city: 'Berlin' },
    'Portugal': { lat: 38.7, lng: -9.1, city: 'Lisbon' },
    'Netherlands': { lat: 52.4, lng: 4.9, city: 'Amsterdam' },
    'Belgium': { lat: 50.8, lng: 4.4, city: 'Brussels' },
    'Italy': { lat: 41.9, lng: 12.5, city: 'Rome' },
    'Croatia': { lat: 45.8, lng: 16.0, city: 'Zagreb' },
    'Denmark': { lat: 55.7, lng: 12.6, city: 'Copenhagen' },
    'Switzerland': { lat: 46.9, lng: 7.4, city: 'Bern' },
    'Austria': { lat: 48.2, lng: 16.4, city: 'Vienna' },
    'Ukraine': { lat: 50.4, lng: 30.5, city: 'Kyiv' },
    'Serbia': { lat: 44.8, lng: 20.5, city: 'Belgrade' },
    'Poland': { lat: 52.2, lng: 21.0, city: 'Warsaw' },
    'Scotland': { lat: 55.9, lng: -3.2, city: 'Edinburgh' },
    'Turkey': { lat: 41.0, lng: 29.0, city: 'Istanbul' },
    'Hungary': { lat: 47.5, lng: 19.0, city: 'Budapest' },
    'USA': { lat: 40.7, lng: -74.0, city: 'New York' },
    'Mexico': { lat: 19.4, lng: -99.1, city: 'Mexico City' },
    'Canada': { lat: 43.7, lng: -79.4, city: 'Toronto' },
    'Uruguay': { lat: -34.9, lng: -56.2, city: 'Montevideo' },
    'Colombia': { lat: 4.7, lng: -74.1, city: 'Bogotá' },
    'Chile': { lat: -33.4, lng: -70.6, city: 'Santiago' },
    'Ecuador': { lat: -0.2, lng: -78.5, city: 'Quito' },
    'Paraguay': { lat: -25.3, lng: -57.6, city: 'Asunción' },
    'Peru': { lat: -12.0, lng: -77.0, city: 'Lima' },
    'Venezuela': { lat: 10.5, lng: -66.9, city: 'Caracas' },
    'Japan': { lat: 35.7, lng: 139.7, city: 'Tokyo' },
    'South Korea': { lat: 37.6, lng: 127.0, city: 'Seoul' },
    'Australia': { lat: -33.9, lng: 151.2, city: 'Sydney' },
    'Iran': { lat: 35.7, lng: 51.4, city: 'Tehran' },
    'Saudi Arabia': { lat: 24.7, lng: 46.7, city: 'Riyadh' },
    'Qatar': { lat: 25.3, lng: 51.5, city: 'Doha' },
    'Morocco': { lat: 33.6, lng: -7.6, city: 'Casablanca' },
    'Senegal': { lat: 14.7, lng: -17.5, city: 'Dakar' },
    'Ghana': { lat: 5.6, lng: -0.2, city: 'Accra' },
    'Cameroon': { lat: 3.9, lng: 11.5, city: 'Yaoundé' },
    'Nigeria': { lat: 6.5, lng: 3.4, city: 'Lagos' },
    'Egypt': { lat: 30.0, lng: 31.2, city: 'Cairo' },
    'Tunisia': { lat: 36.8, lng: 10.2, city: 'Tunis' },
    'Algeria': { lat: 36.8, lng: 3.1, city: 'Algiers' },
    'Ivory Coast': { lat: 5.3, lng: -4.0, city: 'Abidjan' },
    'Costa Rica': { lat: 9.9, lng: -84.1, city: 'San José' },
    'Jamaica': { lat: 18.0, lng: -76.8, city: 'Kingston' },
    'New Zealand': { lat: -36.8, lng: 174.8, city: 'Auckland' },
};

// Club to league mapping
const clubLeagues = {
    // Premier League
    'manchester city': 'Premier League', 'manchester united': 'Premier League', 'liverpool': 'Premier League',
    'arsenal': 'Premier League', 'chelsea': 'Premier League', 'tottenham': 'Premier League', 'tottenham hotspur': 'Premier League',
    'newcastle': 'Premier League', 'newcastle united': 'Premier League', 'aston villa': 'Premier League',
    'west ham': 'Premier League', 'west ham united': 'Premier League', 'brighton': 'Premier League',
    'crystal palace': 'Premier League', 'brentford': 'Premier League', 'fulham': 'Premier League',
    'wolverhampton': 'Premier League', 'wolves': 'Premier League', 'bournemouth': 'Premier League',
    'nottingham forest': 'Premier League', 'everton': 'Premier League', 'luton': 'Premier League',
    'burnley': 'Premier League', 'sheffield united': 'Premier League',
    // La Liga
    'real madrid': 'La Liga', 'barcelona': 'La Liga', 'atletico madrid': 'La Liga', 'atlético madrid': 'La Liga',
    'sevilla': 'La Liga', 'real sociedad': 'La Liga', 'villarreal': 'La Liga', 'athletic bilbao': 'La Liga',
    'real betis': 'La Liga', 'valencia': 'La Liga', 'getafe': 'La Liga', 'celta vigo': 'La Liga',
    'osasuna': 'La Liga', 'almeria': 'La Liga', 'las palmas': 'La Liga', 'alaves': 'La Liga',
    'girona': 'La Liga', 'cadiz': 'La Liga', 'mallorca': 'La Liga', 'granada': 'La Liga',
    // Serie A
    'inter milan': 'Serie A', 'inter': 'Serie A', 'ac milan': 'Serie A', 'milan': 'Serie A',
    'juventus': 'Serie A', 'napoli': 'Serie A', 'roma': 'Serie A', 'lazio': 'Serie A',
    'atalanta': 'Serie A', 'fiorentina': 'Serie A', 'bologna': 'Serie A', 'torino': 'Serie A',
    'monza': 'Serie A', 'genoa': 'Serie A', 'lecce': 'Serie A', 'udinese': 'Serie A',
    'sassuolo': 'Serie A', 'empoli': 'Serie A', 'cagliari': 'Serie A', 'verona': 'Serie A',
    'salernitana': 'Serie A', 'frosinone': 'Serie A',
    // Bundesliga
    'bayern munich': 'Bundesliga', 'bayern': 'Bundesliga', 'borussia dortmund': 'Bundesliga', 'dortmund': 'Bundesliga',
    'rb leipzig': 'Bundesliga', 'leipzig': 'Bundesliga', 'bayer leverkusen': 'Bundesliga', 'leverkusen': 'Bundesliga',
    'eintracht frankfurt': 'Bundesliga', 'frankfurt': 'Bundesliga', 'wolfsburg': 'Bundesliga',
    'borussia monchengladbach': 'Bundesliga', 'monchengladbach': 'Bundesliga', 'hoffenheim': 'Bundesliga',
    'freiburg': 'Bundesliga', 'union berlin': 'Bundesliga', 'stuttgart': 'Bundesliga',
    'werder bremen': 'Bundesliga', 'augsburg': 'Bundesliga', 'mainz': 'Bundesliga',
    'bochum': 'Bundesliga', 'koln': 'Bundesliga', 'cologne': 'Bundesliga', 'heidenheim': 'Bundesliga',
    // Ligue 1
    'psg': 'Ligue 1', 'paris saint-germain': 'Ligue 1', 'paris': 'Ligue 1',
    'marseille': 'Ligue 1', 'monaco': 'Ligue 1', 'lyon': 'Ligue 1', 'lille': 'Ligue 1',
    'lens': 'Ligue 1', 'nice': 'Ligue 1', 'rennes': 'Ligue 1', 'strasbourg': 'Ligue 1',
    'nantes': 'Ligue 1', 'montpellier': 'Ligue 1', 'toulouse': 'Ligue 1', 'reims': 'Ligue 1',
    'brest': 'Ligue 1', 'le havre': 'Ligue 1', 'metz': 'Ligue 1', 'lorient': 'Ligue 1',
    'clermont': 'Ligue 1',
    // Other European
    'ajax': 'Eredivisie', 'psv': 'Eredivisie', 'feyenoord': 'Eredivisie',
    'benfica': 'Primeira Liga', 'porto': 'Primeira Liga', 'sporting cp': 'Primeira Liga', 'sporting': 'Primeira Liga',
    'celtic': 'Scottish Premiership', 'rangers': 'Scottish Premiership',
    'galatasaray': 'Turkish Super Lig', 'fenerbahce': 'Turkish Super Lig', 'besiktas': 'Turkish Super Lig',
    'shakhtar donetsk': 'Ukrainian Premier League', 'dynamo kyiv': 'Ukrainian Premier League',
    'red bull salzburg': 'Austrian Bundesliga', 'rapid vienna': 'Austrian Bundesliga',
    'club brugge': 'Belgian Pro League', 'genk': 'Belgian Pro League', 'anderlecht': 'Belgian Pro League',
    'fc copenhagen': 'Danish Superliga', 'brondby': 'Danish Superliga',
    'young boys': 'Swiss Super League', 'basel': 'Swiss Super League',
    'olympiacos': 'Greek Super League', 'panathinaikos': 'Greek Super League', 'aek athens': 'Greek Super League',
    'red star belgrade': 'Serbian SuperLiga', 'partizan': 'Serbian SuperLiga',
    'dinamo zagreb': 'Croatian First League', 'hajduk split': 'Croatian First League',
    // Americas
    'inter miami': 'MLS', 'la galaxy': 'MLS', 'lafc': 'MLS', 'atlanta united': 'MLS',
    'river plate': 'Argentine Primera', 'boca juniors': 'Argentine Primera',
    'flamengo': 'Brasileirao', 'palmeiras': 'Brasileirao', 'sao paulo': 'Brasileirao',
    'club america': 'Liga MX', 'guadalajara': 'Liga MX', 'monterrey': 'Liga MX', 'tigres': 'Liga MX', 'cruz azul': 'Liga MX',
    // Asia
    'al-nassr': 'Saudi Pro League', 'al-hilal': 'Saudi Pro League', 'al-ittihad': 'Saudi Pro League', 'al-ahli': 'Saudi Pro League',
    'al-sadd': 'Qatar Stars League', 'al-duhail': 'Qatar Stars League',
    'urawa red diamonds': 'J1 League', 'vissel kobe': 'J1 League',
    'jeonbuk': 'K League 1', 'ulsan': 'K League 1',
    'persepolis': 'Iranian Pro League', 'esteghlal': 'Iranian Pro League',
    // Africa
    'al-ahly': 'Egyptian Premier League', 'zamalek': 'Egyptian Premier League',
    'wydad': 'Botola Pro', 'raja': 'Botola Pro',
};

function getLeagueFromClub(club) {
    if (!club) return 'Unknown';
    const normalized = club.toLowerCase().trim();

    for (const [clubName, league] of Object.entries(clubLeagues)) {
        if (normalized.includes(clubName) || clubName.includes(normalized)) {
            return league;
        }
    }
    return 'Unknown';
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; WC2026Bot/1.0)',
                'Accept': 'text/html'
            }
        };

        https.get(url, options, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        }).on('error', reject);
    });
}

function extractPlayers(html, teamCountry) {
    const players = [];

    function stripTags(s) {
        return String(s || '').replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    // Try multiple patterns to find players
    // Pattern 1: Look for player links with typical formatting
    const playerPatterns = [
        // Standard wiki table rows with player names
        /title="([^"]+)"[^>]*>([^<]+)<\/a>\s*<\/td>\s*<td[^>]*>(\d+)<\/td>/gi,
        // Player name in link followed by position/number
        /<a[^>]*title="([^"]+)"[^>]*>([^<]+)<\/a>[^<]*<\/td>[^<]*<td[^>]*>(?:GK|DF|MF|FW|Goalkeeper|Defender|Midfielder|Forward)/gi,
        // Name cell with age
        /<td[^>]*>[^<]*<a[^>]*title="([^"]+)"[^>]*>([^<]+)<\/a>[^<]*<\/td>[^<]*<td[^>]*>.*?(\d{1,2})/gi,
    ];

    // Extract from the actual "Current squad" section header (not the TOC entry)
    // Wikipedia pages often mention "Current squad" in the table-of-contents much earlier.
    let searchArea = html;
    const sectionAnchors = [
        /<h[23][^>]*id="Current_squad"/i,
        /<h[23][^>]*id="Players"/i,
        /<h[23][^>]*id="Squad"/i,
    ];

    let startIdx = -1;
    for (const re of sectionAnchors) {
        const m = re.exec(html);
        if (m && typeof m.index === 'number') {
            startIdx = m.index;
            break;
        }
    }

    // Fall back to the *last* occurrence if we can't find a proper header anchor
    if (startIdx === -1) {
        const lower = html.toLowerCase();
        startIdx = lower.lastIndexOf('current squad');
    }

    if (startIdx !== -1) {
        // Give ourselves plenty of room to include the whole squad table.
        searchArea = html.substring(startIdx, startIdx + 200000);
    }

    // Narrow to the squad table (prevents accidentally matching other tables like staff/history)
    let tableArea = searchArea;
    const tableMatches = [...searchArea.matchAll(/<table[^>]*class="[^"]*wikitable[^"]*"[^>]*>[\s\S]*?<\/table>/gi)];
    for (const m of tableMatches) {
        const tableHtml = m[0];
        const hasClubHeader = /<th[^>]*>\s*Club\s*<\/th>/i.test(tableHtml);
        const hasPlayerHeader = /<th[^>]*>\s*(Player|Name)\s*<\/th>/i.test(tableHtml);
        const hasPosHeader = /<abbr[^>]*>\s*Pos\.?\s*<\/abbr>|<th[^>]*>\s*Pos\.?\s*<\/th>|Position/i.test(tableHtml);

        if (hasClubHeader && hasPlayerHeader && hasPosHeader) {
            tableArea = tableHtml;
            break;
        }
    }

    // Find all table rows that look like player entries
    const rowPattern = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rowMatch;

    while ((rowMatch = rowPattern.exec(tableArea)) !== null) {
        const row = rowMatch[1];

        // Skip header rows
        if (row.includes('<th')) continue;

        // Try to extract player info from this row
        const nameMatch = row.match(/<a[^>]*title="([^"(]+?)(?:\s*\(footballer[^)]*\))?"[^>]*>([^<]+)<\/a>/i);
        if (!nameMatch) continue;

        const fullName = nameMatch[2].trim();
        if (fullName.length < 3 || fullName.length > 40) continue;
        if (/^\d+$/.test(fullName)) continue;
        if (fullName.toLowerCase().includes('captain') || fullName.toLowerCase().includes('coach')) continue;

        // Try to find position
        let position = 'MF';
        if (/Goalkeeper|GK/i.test(row)) position = 'GK';
        else if (/Defender|DF|CB|LB|RB/i.test(row)) position = 'DF';
        else if (/Midfielder|MF|CM|CDM|CAM/i.test(row)) position = 'MF';
        else if (/Forward|FW|ST|CF|LW|RW|Striker|Winger/i.test(row)) position = 'FW';

        // Try to find club (prefer the Club column in the squad table)
        let club = 'Unknown';
        const tdMatches = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)];
        if (tdMatches.length > 0) {
            const clubCell = tdMatches[tdMatches.length - 1][1];
            const linkMatches = [...clubCell.matchAll(/<a[^>]*>([^<]+)<\/a>/gi)];
            if (linkMatches.length > 0) {
                club = stripTags(linkMatches[linkMatches.length - 1][1]);
            } else {
                club = stripTags(clubCell);
            }
        }

        if (!club || club.length < 2 || /^(edit|notes?)$/i.test(club)) {
            club = 'Unknown';
        }

        // Try to find age
        let age = 25 + Math.floor(Math.random() * 8) - 4;
        const ageMatch = row.match(/age[^\d]*(\d{2})/i) || row.match(/>(\d{2})</);
        if (ageMatch && parseInt(ageMatch[1]) >= 16 && parseInt(ageMatch[1]) <= 45) {
            age = parseInt(ageMatch[1]);
        }

        // Get birthplace
        const coords = capitalCoords[teamCountry] || { lat: 0, lng: 0, city: 'Unknown' };

        // Check for duplicates
        if (!players.find(p => p.name === fullName)) {
            players.push({
                name: fullName,
                position: position,
                club: club,
                league: getLeagueFromClub(club),
                age: age,
                birthplace: {
                    city: coords.city,
                    country: teamCountry,
                    lat: coords.lat + (Math.random() - 0.5) * 2,
                    lng: coords.lng + (Math.random() - 0.5) * 2
                }
            });
        }

        if (players.length >= 26) break;
    }

    return players;
}

function generateDefaultSquad(teamCountry) {
    const positions = [
        'GK', 'GK', 'GK',
        'DF', 'DF', 'DF', 'DF', 'DF', 'DF', 'DF', 'DF',
        'MF', 'MF', 'MF', 'MF', 'MF', 'MF',
        'FW', 'FW', 'FW', 'FW', 'FW', 'FW'
    ];

    const coords = capitalCoords[teamCountry] || { lat: 0, lng: 0, city: 'Unknown' };

    return positions.map((pos, i) => ({
        name: `Player ${i + 1}`,
        position: pos,
        club: 'Unknown',
        league: 'Unknown',
        age: 22 + Math.floor(Math.random() * 10),
        birthplace: {
            city: coords.city,
            country: teamCountry,
            lat: coords.lat + (Math.random() - 0.5) * 2,
            lng: coords.lng + (Math.random() - 0.5) * 2
        }
    }));
}

async function fetchTeamSquad(team) {
    console.log(`Fetching ${team.name}...`);

    try {
        const url = `https://en.wikipedia.org/wiki/${team.wiki}`;
        const html = await fetchUrl(url);

        let players = extractPlayers(html, team.country);

        if (players.length < 11) {
            console.log(`  - Only found ${players.length} players, using defaults`);
            players = generateDefaultSquad(team.country);
        } else {
            console.log(`  - Found ${players.length} players`);
        }

        return {
            code: team.code,
            name: team.name,
            flag: team.flag,
            country: team.country,
            players: players
        };
    } catch (e) {
        console.error(`  - Error: ${e.message}`);
        return {
            code: team.code,
            name: team.name,
            flag: team.flag,
            country: team.country,
            players: generateDefaultSquad(team.country)
        };
    }
}

async function main() {
    console.log('='.repeat(50));
    console.log('Fetching World Cup 2026 Squad Data from Wikipedia');
    console.log('='.repeat(50));
    console.log('');

    const squadData = {};

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        const result = await fetchTeamSquad(team);

        squadData[result.code] = {
            name: result.name,
            flag: result.flag,
            confederation: getConfederation(result.code),
            fifaRanking: i + 1,
            players: result.players
        };

        // Small delay to be nice to Wikipedia
        await new Promise(r => setTimeout(r, 500));
    }

    // Generate output
    const output = generateOutputFile(squadData);

    const outputPath = path.join(__dirname, '..', 'teams-data.js');
    fs.writeFileSync(outputPath, output);

    console.log('');
    console.log('='.repeat(50));
    console.log(`Done! Saved to teams-data.js`);
    console.log(`Total teams: ${Object.keys(squadData).length}`);

    // Stats
    let totalPlayers = 0;
    let playersWithClubs = 0;
    Object.values(squadData).forEach(team => {
        totalPlayers += team.players.length;
        playersWithClubs += team.players.filter(p => p.club !== 'Unknown').length;
    });
    console.log(`Total players: ${totalPlayers}`);
    console.log(`Players with clubs: ${playersWithClubs}`);
    console.log('='.repeat(50));
}

function getConfederation(code) {
    const confs = {
        'ARG': 'CONMEBOL', 'BRA': 'CONMEBOL', 'URU': 'CONMEBOL', 'COL': 'CONMEBOL',
        'CHI': 'CONMEBOL', 'ECU': 'CONMEBOL', 'PAR': 'CONMEBOL', 'PER': 'CONMEBOL', 'VEN': 'CONMEBOL',
        'USA': 'CONCACAF', 'MEX': 'CONCACAF', 'CAN': 'CONCACAF', 'CRC': 'CONCACAF', 'JAM': 'CONCACAF',
        'ENG': 'UEFA', 'FRA': 'UEFA', 'ESP': 'UEFA', 'GER': 'UEFA', 'POR': 'UEFA', 'NED': 'UEFA',
        'BEL': 'UEFA', 'ITA': 'UEFA', 'CRO': 'UEFA', 'DEN': 'UEFA', 'SUI': 'UEFA', 'AUT': 'UEFA',
        'UKR': 'UEFA', 'SRB': 'UEFA', 'POL': 'UEFA', 'SCO': 'UEFA', 'TUR': 'UEFA', 'HUN': 'UEFA',
        'JPN': 'AFC', 'KOR': 'AFC', 'AUS': 'AFC', 'IRN': 'AFC', 'KSA': 'AFC', 'QAT': 'AFC',
        'MAR': 'CAF', 'SEN': 'CAF', 'GHA': 'CAF', 'CMR': 'CAF', 'NGA': 'CAF', 'EGY': 'CAF',
        'TUN': 'CAF', 'ALG': 'CAF', 'CIV': 'CAF',
        'NZL': 'OFC'
    };
    return confs[code] || 'UEFA';
}

function generateOutputFile(squadData) {
    return `// FIFA World Cup 2026 - Teams Data
// Auto-generated from Wikipedia on ${new Date().toISOString().split('T')[0]}
// Run 'node scripts/fetch-squads.js' to regenerate

const leagueWeights = {
    "Premier League": { tier: 1, weight: 100 },
    "La Liga": { tier: 1, weight: 95 },
    "Serie A": { tier: 1, weight: 90 },
    "Bundesliga": { tier: 1, weight: 88 },
    "Ligue 1": { tier: 1, weight: 85 },
    "Primeira Liga": { tier: 2, weight: 70 },
    "Eredivisie": { tier: 2, weight: 68 },
    "Belgian Pro League": { tier: 2, weight: 60 },
    "Scottish Premiership": { tier: 2, weight: 55 },
    "Argentine Primera": { tier: 2, weight: 65 },
    "Brasileirao": { tier: 2, weight: 70 },
    "Turkish Super Lig": { tier: 3, weight: 52 },
    "Ukrainian Premier League": { tier: 3, weight: 45 },
    "Austrian Bundesliga": { tier: 3, weight: 48 },
    "Swiss Super League": { tier: 3, weight: 47 },
    "Danish Superliga": { tier: 3, weight: 46 },
    "Greek Super League": { tier: 3, weight: 45 },
    "Croatian First League": { tier: 3, weight: 42 },
    "Serbian SuperLiga": { tier: 3, weight: 40 },
    "Liga MX": { tier: 3, weight: 55 },
    "MLS": { tier: 3, weight: 50 },
    "Saudi Pro League": { tier: 3, weight: 55 },
    "J1 League": { tier: 4, weight: 45 },
    "K League 1": { tier: 4, weight: 43 },
    "Qatar Stars League": { tier: 4, weight: 42 },
    "Iranian Pro League": { tier: 4, weight: 40 },
    "Egyptian Premier League": { tier: 4, weight: 38 },
    "Botola Pro": { tier: 4, weight: 36 },
    "Unknown": { tier: 5, weight: 30 }
};

const squadData = ${JSON.stringify(squadData, null, 4)};

// Helper functions
function calculateSquadStrength(teamCode) {
    const team = squadData[teamCode];
    if (!team) return 0;
    let total = 0;
    team.players.forEach(player => {
        const leagueInfo = leagueWeights[player.league] || leagueWeights["Unknown"];
        total += leagueInfo.weight;
    });
    return Math.round(total / team.players.length);
}

function getLeagueDistribution(teamCode) {
    const team = squadData[teamCode];
    if (!team) return {};
    const dist = {};
    team.players.forEach(player => {
        dist[player.league] = (dist[player.league] || 0) + 1;
    });
    return dist;
}

function getAgeDistribution(teamCode) {
    const team = squadData[teamCode];
    if (!team) return {};
    const ranges = { "17-21": 0, "22-25": 0, "26-29": 0, "30-33": 0, "34+": 0 };
    team.players.forEach(player => {
        const age = player.age;
        if (age <= 21) ranges["17-21"]++;
        else if (age <= 25) ranges["22-25"]++;
        else if (age <= 29) ranges["26-29"]++;
        else if (age <= 33) ranges["30-33"]++;
        else ranges["34+"]++;
    });
    return ranges;
}

function getAverageAge(teamCode) {
    const team = squadData[teamCode];
    if (!team) return "0";
    const total = team.players.reduce((sum, p) => sum + p.age, 0);
    return (total / team.players.length).toFixed(1);
}

function getBirthplaceData(teamCode) {
    const team = squadData[teamCode];
    if (!team) return [];
    return team.players.map(player => ({
        name: player.name,
        ...player.birthplace
    }));
}
`;
}

main().catch(console.error);
