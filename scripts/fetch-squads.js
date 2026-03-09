/**
 * Fetch World Cup 2026 squad data from Wikipedia using MediaWiki API
 * Run with: node scripts/fetch-squads.js
 *
 * Uses action=parse&prop=wikitext to get structured wikitext with
 * {{nat fs g player|...}} templates, which is far more reliable than
 * scraping raw HTML tables.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// ─── Team List ──────────────────────────────────────────────────────
// 40 confirmed group stage teams + 22 playoff candidates = 62 total
// Must match data.js exactly.

const teams = [
    // Group A
    { code: 'MEX', name: 'Mexico', wiki: 'Mexico_national_football_team', flag: '🇲🇽', country: 'Mexico' },
    { code: 'RSA', name: 'South Africa', wiki: 'South_Africa_national_soccer_team', flag: '🇿🇦', country: 'South Africa' },
    { code: 'KOR', name: 'South Korea', wiki: 'South_Korea_national_football_team', flag: '🇰🇷', country: 'South Korea' },
    // Group B
    { code: 'CAN', name: 'Canada', wiki: 'Canada_men%27s_national_soccer_team', flag: '🇨🇦', country: 'Canada' },
    { code: 'QAT', name: 'Qatar', wiki: 'Qatar_national_football_team', flag: '🇶🇦', country: 'Qatar' },
    { code: 'SUI', name: 'Switzerland', wiki: 'Switzerland_national_football_team', flag: '🇨🇭', country: 'Switzerland' },
    // Group C
    { code: 'BRA', name: 'Brazil', wiki: 'Brazil_national_football_team', flag: '🇧🇷', country: 'Brazil' },
    { code: 'MAR', name: 'Morocco', wiki: 'Morocco_national_football_team', flag: '🇲🇦', country: 'Morocco' },
    { code: 'HAI', name: 'Haiti', wiki: 'Haiti_national_football_team', flag: '🇭🇹', country: 'Haiti' },
    { code: 'SCO', name: 'Scotland', wiki: 'Scotland_national_football_team', flag: '🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}', country: 'Scotland' },
    // Group D
    { code: 'USA', name: 'United States', wiki: 'United_States_men%27s_national_soccer_team', flag: '🇺🇸', country: 'USA' },
    { code: 'PAR', name: 'Paraguay', wiki: 'Paraguay_national_football_team', flag: '🇵🇾', country: 'Paraguay' },
    { code: 'AUS', name: 'Australia', wiki: 'Australia_men%27s_national_soccer_team', flag: '🇦🇺', country: 'Australia' },
    // Group E
    { code: 'GER', name: 'Germany', wiki: 'Germany_national_football_team', flag: '🇩🇪', country: 'Germany' },
    { code: 'CUW', name: 'Curaçao', wiki: 'Cura%C3%A7ao_national_football_team', flag: '🇨🇼', country: 'Curaçao' },
    { code: 'CIV', name: 'Ivory Coast', wiki: 'Ivory_Coast_national_football_team', flag: '🇨🇮', country: 'Ivory Coast' },
    { code: 'ECU', name: 'Ecuador', wiki: 'Ecuador_national_football_team', flag: '🇪🇨', country: 'Ecuador' },
    // Group F
    { code: 'NED', name: 'Netherlands', wiki: 'Netherlands_national_football_team', flag: '🇳🇱', country: 'Netherlands' },
    { code: 'JPN', name: 'Japan', wiki: 'Japan_national_football_team', flag: '🇯🇵', country: 'Japan' },
    { code: 'TUN', name: 'Tunisia', wiki: 'Tunisia_national_football_team', flag: '🇹🇳', country: 'Tunisia' },
    // Group G
    { code: 'BEL', name: 'Belgium', wiki: 'Belgium_national_football_team', flag: '🇧🇪', country: 'Belgium' },
    { code: 'EGY', name: 'Egypt', wiki: 'Egypt_national_football_team', flag: '🇪🇬', country: 'Egypt' },
    { code: 'IRN', name: 'Iran', wiki: 'Iran_national_football_team', flag: '🇮🇷', country: 'Iran' },
    { code: 'NZL', name: 'New Zealand', wiki: 'New_Zealand_men%27s_national_football_team', flag: '🇳🇿', country: 'New Zealand' },
    // Group H
    { code: 'ESP', name: 'Spain', wiki: 'Spain_national_football_team', flag: '🇪🇸', country: 'Spain' },
    { code: 'CPV', name: 'Cape Verde', wiki: 'Cape_Verde_national_football_team', flag: '🇨🇻', country: 'Cape Verde' },
    { code: 'KSA', name: 'Saudi Arabia', wiki: 'Saudi_Arabia_national_football_team', flag: '🇸🇦', country: 'Saudi Arabia' },
    { code: 'URU', name: 'Uruguay', wiki: 'Uruguay_national_football_team', flag: '🇺🇾', country: 'Uruguay' },
    // Group I
    { code: 'FRA', name: 'France', wiki: 'France_national_football_team', flag: '🇫🇷', country: 'France' },
    { code: 'SEN', name: 'Senegal', wiki: 'Senegal_national_football_team', flag: '🇸🇳', country: 'Senegal' },
    { code: 'NOR', name: 'Norway', wiki: 'Norway_national_football_team', flag: '🇳🇴', country: 'Norway' },
    // Group J
    { code: 'ARG', name: 'Argentina', wiki: 'Argentina_national_football_team', flag: '🇦🇷', country: 'Argentina' },
    { code: 'ALG', name: 'Algeria', wiki: 'Algeria_national_football_team', flag: '🇩🇿', country: 'Algeria' },
    { code: 'AUT', name: 'Austria', wiki: 'Austria_national_football_team', flag: '🇦🇹', country: 'Austria' },
    { code: 'JOR', name: 'Jordan', wiki: 'Jordan_national_football_team', flag: '🇯🇴', country: 'Jordan' },
    // Group K
    { code: 'POR', name: 'Portugal', wiki: 'Portugal_national_football_team', flag: '🇵🇹', country: 'Portugal' },
    { code: 'UZB', name: 'Uzbekistan', wiki: 'Uzbekistan_national_football_team', flag: '🇺🇿', country: 'Uzbekistan' },
    { code: 'COL', name: 'Colombia', wiki: 'Colombia_national_football_team', flag: '🇨🇴', country: 'Colombia' },
    // Group L
    { code: 'ENG', name: 'England', wiki: 'England_national_football_team', flag: '🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}', country: 'England' },
    { code: 'CRO', name: 'Croatia', wiki: 'Croatia_national_football_team', flag: '🇭🇷', country: 'Croatia' },
    { code: 'GHA', name: 'Ghana', wiki: 'Ghana_national_football_team', flag: '🇬🇭', country: 'Ghana' },
    { code: 'PAN', name: 'Panama', wiki: 'Panama_national_football_team', flag: '🇵🇦', country: 'Panama' },

    // ── Playoff candidates ──
    // UEFA Path A
    { code: 'ITA', name: 'Italy', wiki: 'Italy_national_football_team', flag: '🇮🇹', country: 'Italy' },
    { code: 'WAL', name: 'Wales', wiki: 'Wales_national_football_team', flag: '🏴\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}', country: 'Wales' },
    { code: 'BIH', name: 'Bosnia & Herz.', wiki: 'Bosnia_and_Herzegovina_national_football_team', flag: '🇧🇦', country: 'Bosnia and Herzegovina' },
    { code: 'NIR', name: 'N. Ireland', wiki: 'Northern_Ireland_national_football_team', flag: '🇬🇧', country: 'Northern Ireland' },
    // UEFA Path B
    { code: 'UKR', name: 'Ukraine', wiki: 'Ukraine_national_football_team', flag: '🇺🇦', country: 'Ukraine' },
    { code: 'SWE', name: 'Sweden', wiki: 'Sweden_men%27s_national_football_team', flag: '🇸🇪', country: 'Sweden' },
    { code: 'POL', name: 'Poland', wiki: 'Poland_national_football_team', flag: '🇵🇱', country: 'Poland' },
    { code: 'ALB', name: 'Albania', wiki: 'Albania_national_football_team', flag: '🇦🇱', country: 'Albania' },
    // UEFA Path C
    { code: 'TUR', name: 'Turkey', wiki: 'Turkey_national_football_team', flag: '🇹🇷', country: 'Turkey' },
    { code: 'ROU', name: 'Romania', wiki: 'Romania_national_football_team', flag: '🇷🇴', country: 'Romania' },
    { code: 'SVK', name: 'Slovakia', wiki: 'Slovakia_national_football_team', flag: '🇸🇰', country: 'Slovakia' },
    { code: 'KOS', name: 'Kosovo', wiki: 'Kosovo_national_football_team', flag: '🇽🇰', country: 'Kosovo' },
    // UEFA Path D
    { code: 'DEN', name: 'Denmark', wiki: 'Denmark_national_football_team', flag: '🇩🇰', country: 'Denmark' },
    { code: 'CZE', name: 'Czechia', wiki: 'Czech_Republic_national_football_team', flag: '🇨🇿', country: 'Czech Republic' },
    { code: 'IRL', name: 'Rep. of Ireland', wiki: 'Republic_of_Ireland_national_football_team', flag: '🇮🇪', country: 'Ireland' },
    { code: 'MKD', name: 'N. Macedonia', wiki: 'North_Macedonia_national_football_team', flag: '🇲🇰', country: 'North Macedonia' },
    // IC Playoff 1
    { code: 'COD', name: 'DR Congo', wiki: 'DR_Congo_national_football_team', flag: '🇨🇩', country: 'DR Congo' },
    { code: 'JAM', name: 'Jamaica', wiki: 'Jamaica_national_football_team', flag: '🇯🇲', country: 'Jamaica' },
    { code: 'NCL', name: 'New Caledonia', wiki: 'New_Caledonia_national_football_team', flag: '🇳🇨', country: 'New Caledonia' },
    // IC Playoff 2
    { code: 'IRQ', name: 'Iraq', wiki: 'Iraq_national_football_team', flag: '🇮🇶', country: 'Iraq' },
    { code: 'BOL', name: 'Bolivia', wiki: 'Bolivia_national_football_team', flag: '🇧🇴', country: 'Bolivia' },
    { code: 'SUR', name: 'Suriname', wiki: 'Suriname_national_football_team', flag: '🇸🇷', country: 'Suriname' },
];

// ─── Capital city coordinates (fallback for birthplace) ─────────────
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
    'Poland': { lat: 52.2, lng: 21.0, city: 'Warsaw' },
    'Scotland': { lat: 55.9, lng: -3.2, city: 'Edinburgh' },
    'Turkey': { lat: 41.0, lng: 29.0, city: 'Istanbul' },
    'USA': { lat: 40.7, lng: -74.0, city: 'New York' },
    'Mexico': { lat: 19.4, lng: -99.1, city: 'Mexico City' },
    'Canada': { lat: 43.7, lng: -79.4, city: 'Toronto' },
    'Uruguay': { lat: -34.9, lng: -56.2, city: 'Montevideo' },
    'Colombia': { lat: 4.7, lng: -74.1, city: 'Bogotá' },
    'Ecuador': { lat: -0.2, lng: -78.5, city: 'Quito' },
    'Paraguay': { lat: -25.3, lng: -57.6, city: 'Asunción' },
    'Japan': { lat: 35.7, lng: 139.7, city: 'Tokyo' },
    'South Korea': { lat: 37.6, lng: 127.0, city: 'Seoul' },
    'Australia': { lat: -33.9, lng: 151.2, city: 'Sydney' },
    'Iran': { lat: 35.7, lng: 51.4, city: 'Tehran' },
    'Saudi Arabia': { lat: 24.7, lng: 46.7, city: 'Riyadh' },
    'Qatar': { lat: 25.3, lng: 51.5, city: 'Doha' },
    'Morocco': { lat: 33.6, lng: -7.6, city: 'Casablanca' },
    'Senegal': { lat: 14.7, lng: -17.5, city: 'Dakar' },
    'Ghana': { lat: 5.6, lng: -0.2, city: 'Accra' },
    'Egypt': { lat: 30.0, lng: 31.2, city: 'Cairo' },
    'Tunisia': { lat: 36.8, lng: 10.2, city: 'Tunis' },
    'Algeria': { lat: 36.8, lng: 3.1, city: 'Algiers' },
    'Ivory Coast': { lat: 5.3, lng: -4.0, city: 'Abidjan' },
    'Jamaica': { lat: 18.0, lng: -76.8, city: 'Kingston' },
    'New Zealand': { lat: -36.8, lng: 174.8, city: 'Auckland' },
    'South Africa': { lat: -26.2, lng: 28.0, city: 'Johannesburg' },
    'Norway': { lat: 59.9, lng: 10.8, city: 'Oslo' },
    'Jordan': { lat: 31.9, lng: 35.9, city: 'Amman' },
    'Uzbekistan': { lat: 41.3, lng: 69.3, city: 'Tashkent' },
    'Panama': { lat: 9.0, lng: -79.5, city: 'Panama City' },
    'Cape Verde': { lat: 15.0, lng: -23.6, city: 'Praia' },
    'Haiti': { lat: 18.5, lng: -72.3, city: 'Port-au-Prince' },
    'Curaçao': { lat: 12.2, lng: -69.0, city: 'Willemstad' },
    'Wales': { lat: 51.5, lng: -3.2, city: 'Cardiff' },
    'Bosnia and Herzegovina': { lat: 43.9, lng: 18.4, city: 'Sarajevo' },
    'Northern Ireland': { lat: 54.6, lng: -5.9, city: 'Belfast' },
    'Sweden': { lat: 59.3, lng: 18.1, city: 'Stockholm' },
    'Albania': { lat: 41.3, lng: 19.8, city: 'Tirana' },
    'Romania': { lat: 44.4, lng: 26.1, city: 'Bucharest' },
    'Slovakia': { lat: 48.1, lng: 17.1, city: 'Bratislava' },
    'Kosovo': { lat: 42.7, lng: 21.2, city: 'Pristina' },
    'Czech Republic': { lat: 50.1, lng: 14.4, city: 'Prague' },
    'Ireland': { lat: 53.3, lng: -6.3, city: 'Dublin' },
    'North Macedonia': { lat: 42.0, lng: 21.4, city: 'Skopje' },
    'DR Congo': { lat: -4.3, lng: 15.3, city: 'Kinshasa' },
    'New Caledonia': { lat: -22.3, lng: 166.5, city: 'Nouméa' },
    'Iraq': { lat: 33.3, lng: 44.4, city: 'Baghdad' },
    'Bolivia': { lat: -16.5, lng: -68.2, city: 'La Paz' },
    'Suriname': { lat: 5.8, lng: -55.2, city: 'Paramaribo' },
};

// ─── Club → League mapping ──────────────────────────────────────────
const clubLeagues = {
    // Premier League
    'manchester city': 'Premier League', 'manchester united': 'Premier League', 'liverpool': 'Premier League',
    'arsenal': 'Premier League', 'chelsea': 'Premier League', 'tottenham hotspur': 'Premier League', 'tottenham': 'Premier League',
    'newcastle united': 'Premier League', 'newcastle': 'Premier League', 'aston villa': 'Premier League',
    'west ham united': 'Premier League', 'west ham': 'Premier League', 'brighton & hove albion': 'Premier League', 'brighton': 'Premier League',
    'crystal palace': 'Premier League', 'brentford': 'Premier League', 'fulham': 'Premier League',
    'wolverhampton wanderers': 'Premier League', 'wolves': 'Premier League', 'bournemouth': 'Premier League',
    'nottingham forest': 'Premier League', 'everton': 'Premier League', 'ipswich town': 'Premier League',
    'leicester city': 'Premier League', 'southampton': 'Premier League',
    'leeds united': 'Premier League', 'burnley': 'Premier League', 'sunderland': 'Premier League',
    // EFL Championship
    'sheffield united': 'EFL Championship', 'norwich city': 'EFL Championship', 'middlesbrough': 'EFL Championship',
    'coventry city': 'EFL Championship', 'west bromwich albion': 'EFL Championship', 'stoke city': 'EFL Championship',
    'millwall': 'EFL Championship', 'blackburn rovers': 'EFL Championship', 'bristol city': 'EFL Championship',
    'sheffield wednesday': 'EFL Championship', 'hull city': 'EFL Championship', 'watford': 'EFL Championship',
    'preston north end': 'EFL Championship', 'derby county': 'EFL Championship',
    'oxford united': 'EFL Championship', 'portsmouth': 'EFL Championship', 'swansea city': 'EFL Championship',
    'queens park rangers': 'EFL Championship', 'qpr': 'EFL Championship',
    // EFL League One
    'luton town': 'EFL League One', 'plymouth argyle': 'EFL League One', 'cardiff city': 'EFL League One',
    'bolton wanderers': 'EFL League One', 'barnsley': 'EFL League One', 'wigan athletic': 'EFL League One',
    'charlton athletic': 'EFL League One', 'reading': 'EFL League One', 'peterborough united': 'EFL League One',
    // La Liga
    'real madrid': 'La Liga', 'barcelona': 'La Liga', 'atlético madrid': 'La Liga', 'atletico madrid': 'La Liga', 'atlético de madrid': 'La Liga',
    'sevilla': 'La Liga', 'real sociedad': 'La Liga', 'villarreal': 'La Liga', 'athletic bilbao': 'La Liga', 'athletic club': 'La Liga',
    'real betis': 'La Liga', 'valencia': 'La Liga', 'getafe': 'La Liga', 'celta vigo': 'La Liga', 'celta de vigo': 'La Liga',
    'osasuna': 'La Liga', 'girona': 'La Liga', 'mallorca': 'La Liga', 'las palmas': 'La Liga',
    'rayo vallecano': 'La Liga', 'alavés': 'La Liga', 'espanyol': 'La Liga', 'leganés': 'La Liga', 'real valladolid': 'La Liga',
    'levante': 'La Liga', 'real oviedo': 'La Liga',
    // Segunda División
    'granada': 'Segunda División', 'zaragoza': 'Segunda División', 'real zaragoza': 'Segunda División',
    'huesca': 'Segunda División', 'sd huesca': 'Segunda División',
    'racing de santander': 'Segunda División', 'racing santander': 'Segunda División',
    'castellón': 'Segunda División', 'cd castellón': 'Segunda División', 'castellon': 'Segunda División',
    'almería': 'Segunda División', 'cádiz': 'Segunda División', 'tenerife': 'Segunda División',
    'burgos': 'Segunda División', 'eibar': 'Segunda División', 'elche': 'Segunda División',
    // Serie A
    'inter milan': 'Serie A', 'internazionale': 'Serie A', 'internazionale milano': 'Serie A',
    'ac milan': 'Serie A',
    'juventus': 'Serie A', 'napoli': 'Serie A', 'roma': 'Serie A', 'lazio': 'Serie A',
    'atalanta': 'Serie A', 'fiorentina': 'Serie A', 'bologna': 'Serie A', 'torino': 'Serie A',
    'monza': 'Serie A', 'genoa': 'Serie A', 'lecce': 'Serie A', 'udinese': 'Serie A',
    'empoli': 'Serie A', 'cagliari': 'Serie A', 'parma': 'Serie A', 'como': 'Serie A', 'venezia': 'Serie A', 'verona': 'Serie A',
    'sassuolo': 'Serie A', 'pisa': 'Serie A', 'cremonese': 'Serie A',
    // Serie B
    'sampdoria': 'Serie B', 'palermo': 'Serie B', 'bari': 'Serie B', 'brescia': 'Serie B',
    'cesena': 'Serie B', 'modena': 'Serie B', 'reggiana': 'Serie B', 'spezia': 'Serie B',
    'frosinone': 'Serie B', 'salernitana': 'Serie B', 'catanzaro': 'Serie B', 'cosenza': 'Serie B',
    // Bundesliga
    'bayern munich': 'Bundesliga', 'bayern münchen': 'Bundesliga', 'bayern': 'Bundesliga',
    'borussia dortmund': 'Bundesliga', 'dortmund': 'Bundesliga',
    'rb leipzig': 'Bundesliga', 'leipzig': 'Bundesliga',
    'bayer leverkusen': 'Bundesliga', 'bayer 04 leverkusen': 'Bundesliga', 'leverkusen': 'Bundesliga',
    'eintracht frankfurt': 'Bundesliga', 'frankfurt': 'Bundesliga',
    'wolfsburg': 'Bundesliga', 'borussia mönchengladbach': 'Bundesliga', 'mönchengladbach': 'Bundesliga',
    'hoffenheim': 'Bundesliga', 'freiburg': 'Bundesliga', 'union berlin': 'Bundesliga',
    'vfb stuttgart': 'Bundesliga', 'stuttgart': 'Bundesliga',
    'werder bremen': 'Bundesliga', 'augsburg': 'Bundesliga', 'mainz 05': 'Bundesliga', 'mainz': 'Bundesliga',
    'bochum': 'Bundesliga', 'heidenheim': 'Bundesliga', 'st. pauli': 'Bundesliga', 'holstein kiel': 'Bundesliga',
    '1. fc köln': 'Bundesliga', 'fc köln': 'Bundesliga', 'köln': 'Bundesliga',
    'hamburger sv': 'Bundesliga', 'hamburg': 'Bundesliga',
    // 2. Bundesliga
    'schalke 04': '2. Bundesliga', 'fc schalke 04': '2. Bundesliga',
    'hertha bsc': '2. Bundesliga', 'hertha berlin': '2. Bundesliga',
    'hertha bsc ii': 'Regionalliga',
    'hannover 96': '2. Bundesliga', '1. fc kaiserslautern': '2. Bundesliga', 'kaiserslautern': '2. Bundesliga',
    'fortuna düsseldorf': '2. Bundesliga', 'fortuna dusseldorf': '2. Bundesliga',
    '1. fc nürnberg': '2. Bundesliga', 'nürnberg': '2. Bundesliga',
    'karlsruher sc': '2. Bundesliga', 'greuther fürth': '2. Bundesliga',
    'sc paderborn': '2. Bundesliga', 'paderborn': '2. Bundesliga',
    'eintracht braunschweig': '2. Bundesliga', 'ssc magdeburg': '2. Bundesliga', '1. fc magdeburg': '2. Bundesliga',
    // Ligue 1
    'paris saint-germain': 'Ligue 1', 'psg': 'Ligue 1',
    'olympique de marseille': 'Ligue 1', 'marseille': 'Ligue 1', 'om': 'Ligue 1',
    'as monaco': 'Ligue 1', 'monaco': 'Ligue 1',
    'olympique lyonnais': 'Ligue 1', 'lyon': 'Ligue 1',
    'lille': 'Ligue 1', 'losc lille': 'Ligue 1',
    'rc lens': 'Ligue 1', 'lens': 'Ligue 1',
    'nice': 'Ligue 1', 'ogc nice': 'Ligue 1',
    'stade rennais': 'Ligue 1', 'rennes': 'Ligue 1',
    'strasbourg': 'Ligue 1', 'nantes': 'Ligue 1', 'montpellier': 'Ligue 1',
    'toulouse': 'Ligue 1', 'stade de reims': 'Ligue 1', 'reims': 'Ligue 1',
    'stade brestois': 'Ligue 1', 'brest': 'Ligue 1',
    'le havre': 'Ligue 1', 'angers': 'Ligue 1', 'auxerre': 'Ligue 1', 'saint-étienne': 'Ligue 1',
    'fc lorient': 'Ligue 1', 'lorient': 'Ligue 1', 'paris fc': 'Ligue 1', 'fc metz': 'Ligue 1', 'metz': 'Ligue 1',
    // Ligue 2
    'caen': 'Ligue 2', 'sm caen': 'Ligue 2',
    'bastia': 'Ligue 2', 'sc bastia': 'Ligue 2',
    'guingamp': 'Ligue 2', 'amiens': 'Ligue 2', 'pau fc': 'Ligue 2',
    'rodez': 'Ligue 2', 'grenoble foot': 'Ligue 2', 'laval': 'Ligue 2', 'troyes': 'Ligue 2',
    'dunkerque': 'Ligue 2', 'bordeaux': 'Ligue 2',
    // Primeira Liga (Portugal)
    'benfica': 'Primeira Liga', 'sl benfica': 'Primeira Liga',
    'porto': 'Primeira Liga', 'fc porto': 'Primeira Liga',
    'sporting cp': 'Primeira Liga', 'sporting': 'Primeira Liga',
    'braga': 'Primeira Liga', 'sc braga': 'Primeira Liga',
    'vitória de guimarães': 'Primeira Liga',
    // Eredivisie
    'ajax': 'Eredivisie', 'psv eindhoven': 'Eredivisie', 'psv': 'Eredivisie',
    'feyenoord': 'Eredivisie', 'az alkmaar': 'Eredivisie', 'az': 'Eredivisie',
    'fc twente': 'Eredivisie', 'twente': 'Eredivisie',
    'fc utrecht': 'Eredivisie', 'utrecht': 'Eredivisie', 'sc heerenveen': 'Eredivisie',
    'nec nijmegen': 'Eredivisie', 'nec': 'Eredivisie', 'fc groningen': 'Eredivisie',
    // Eerste Divisie (Netherlands 2nd)
    'almere city': 'Eerste Divisie', 'almere city fc': 'Eerste Divisie',
    'ado den haag': 'Eerste Divisie', 'nac breda': 'Eerste Divisie',
    'roda jc': 'Eerste Divisie', 'de graafschap': 'Eerste Divisie',
    // Belgian Pro League
    'club brugge': 'Belgian Pro League', 'genk': 'Belgian Pro League', 'krc genk': 'Belgian Pro League',
    'anderlecht': 'Belgian Pro League', 'rsc anderlecht': 'Belgian Pro League',
    'royal antwerp': 'Belgian Pro League', 'standard liège': 'Belgian Pro League',
    'union saint-gilloise': 'Belgian Pro League',
    // Turkish Süper Lig
    'galatasaray': 'Turkish Super Lig', 'fenerbahçe': 'Turkish Super Lig', 'fenerbahce': 'Turkish Super Lig',
    'beşiktaş': 'Turkish Super Lig', 'besiktas': 'Turkish Super Lig',
    'trabzonspor': 'Turkish Super Lig', 'başakşehir': 'Turkish Super Lig',
    // Scottish Premiership
    'celtic': 'Scottish Premiership', 'rangers': 'Scottish Premiership',
    // Other European
    'shakhtar donetsk': 'Ukrainian Premier League', 'dynamo kyiv': 'Ukrainian Premier League',
    'red bull salzburg': 'Austrian Bundesliga', 'rapid vienna': 'Austrian Bundesliga', 'sturm graz': 'Austrian Bundesliga',
    'fc copenhagen': 'Danish Superliga', 'fc midtjylland': 'Danish Superliga', 'brøndby': 'Danish Superliga',
    'young boys': 'Swiss Super League', 'bsc young boys': 'Swiss Super League', 'basel': 'Swiss Super League',
    'olympiacos': 'Greek Super League', 'panathinaikos': 'Greek Super League', 'aek athens': 'Greek Super League',
    'red star belgrade': 'Serbian SuperLiga', 'partizan': 'Serbian SuperLiga',
    'dinamo zagreb': 'Croatian First League', 'hajduk split': 'Croatian First League',
    'slavia prague': 'Czech First League', 'sparta prague': 'Czech First League',
    'legia warsaw': 'Polish Ekstraklasa', 'lech poznań': 'Polish Ekstraklasa',
    'malmö ff': 'Swedish Allsvenskan', 'malmö': 'Swedish Allsvenskan',
    // Americas
    'inter miami': 'MLS', 'la galaxy': 'MLS', 'lafc': 'MLS', 'atlanta united': 'MLS',
    'fc cincinnati': 'MLS', 'columbus crew': 'MLS', 'new york red bulls': 'MLS',
    'cf montréal': 'MLS', 'toronto fc': 'MLS', 'vancouver whitecaps': 'MLS',
    'river plate': 'Argentine Primera', 'boca juniors': 'Argentine Primera', 'racing club': 'Argentine Primera',
    'flamengo': 'Brasileirão', 'palmeiras': 'Brasileirão', 'são paulo': 'Brasileirão', 'sao paulo': 'Brasileirão',
    'fluminense': 'Brasileirão', 'botafogo': 'Brasileirão', 'corinthians': 'Brasileirão',
    'club américa': 'Liga MX', 'club america': 'Liga MX', 'guadalajara': 'Liga MX',
    'monterrey': 'Liga MX', 'tigres': 'Liga MX', 'cruz azul': 'Liga MX', 'pumas': 'Liga MX',
    // Asia
    'al-nassr': 'Saudi Pro League', 'al nassr': 'Saudi Pro League',
    'al-hilal': 'Saudi Pro League', 'al hilal': 'Saudi Pro League',
    'al-ittihad': 'Saudi Pro League', 'al ittihad': 'Saudi Pro League',
    'al-ahli': 'Saudi Pro League', 'al ahli': 'Saudi Pro League',
    'al-sadd': 'Qatar Stars League', 'al sadd': 'Qatar Stars League',
    'al-duhail': 'Qatar Stars League', 'al duhail': 'Qatar Stars League',
    'al-rayyan': 'Qatar Stars League',
    'urawa red diamonds': 'J1 League', 'urawa reds': 'J1 League', 'vissel kobe': 'J1 League',
    'yokohama f. marinos': 'J1 League', 'kawasaki frontale': 'J1 League',
    'jeonbuk hyundai motors': 'K League 1', 'ulsan hyundai': 'K League 1', 'ulsan hd': 'K League 1',
    'persepolis': 'Iranian Pro League', 'esteghlal': 'Iranian Pro League',
    // Africa
    'al ahly': 'Egyptian Premier League', 'al-ahly': 'Egyptian Premier League', 'zamalek': 'Egyptian Premier League',
    'wydad casablanca': 'Botola Pro', 'wydad': 'Botola Pro', 'raja casablanca': 'Botola Pro', 'raja': 'Botola Pro',
    'espérance de tunis': 'Tunisian Ligue 1', 'espérance': 'Tunisian Ligue 1',
    'mc alger': 'Algerian Ligue 1', 'usm alger': 'Algerian Ligue 1',
    'tp mazembe': 'Congolese Ligue 1', 'as vita club': 'Congolese Ligue 1',
    'kaizer chiefs': 'South African Premier League', 'orlando pirates': 'South African Premier League', 'mamelodi sundowns': 'South African Premier League',
};

// ─── clubnat → league fallback ──────────────────────────────────────
const countryToLeague = {
    ENG: 'Premier League', ESP: 'La Liga', ITA: 'Serie A',
    GER: 'Bundesliga', FRA: 'Ligue 1', POR: 'Primeira Liga',
    NED: 'Eredivisie', BEL: 'Belgian Pro League', TUR: 'Turkish Super Lig',
    SCO: 'Scottish Premiership', GRE: 'Greek Super League',
    UKR: 'Ukrainian Premier League', AUT: 'Austrian Bundesliga',
    SUI: 'Swiss Super League', DEN: 'Danish Superliga',
    CRO: 'Croatian First League', SRB: 'Serbian SuperLiga',
    POL: 'Polish Ekstraklasa', CZE: 'Czech First League',
    ROU: 'Romanian SuperLiga', SWE: 'Swedish Allsvenskan',
    NOR: 'Norwegian Eliteserien', RUS: 'Russian Premier League',
    USA: 'MLS', MEX: 'Liga MX', CAN: 'MLS',
    ARG: 'Argentine Primera', BRA: 'Brasileirão',
    COL: 'Colombian Primera A', ECU: 'Ecuadorian Serie A',
    URU: 'Uruguayan Primera', PAR: 'Paraguayan Primera',
    JPN: 'J1 League', KOR: 'K League 1', CHN: 'Chinese Super League',
    AUS: 'A-League', KSA: 'Saudi Pro League', QAT: 'Qatar Stars League',
    IRN: 'Iranian Pro League', IRQ: 'Iraqi Premier League',
    UAE: 'UAE Pro League', JOR: 'Jordanian Pro League',
    EGY: 'Egyptian Premier League', MAR: 'Botola Pro',
    TUN: 'Tunisian Ligue 1', ALG: 'Algerian Ligue 1',
    SEN: 'Senegalese Ligue 1', CIV: 'Ivorian Ligue 1',
    GHA: 'Ghanaian Premier League', CMR: 'Cameroonian Ligue 1',
    NGA: 'Nigerian NPFL', RSA: 'South African Premier League',
    COD: 'Congolese Ligue 1',
    ISR: 'Israeli Premier League', CYP: 'Cypriot First Division',
    HUN: 'Hungarian NB I', BUL: 'Bulgarian First League',
    WAL: 'Welsh Premier League', NIR: 'NIFL Premiership',
    FIN: 'Finnish Veikkausliiga',
};

function getLeagueFromClub(club, clubnat) {
    if (!club || club === 'Unknown') {
        if (clubnat && countryToLeague[clubnat]) return countryToLeague[clubnat];
        return 'Unknown';
    }

    const normalized = club.toLowerCase().trim();

    // Exact match first
    if (clubLeagues[normalized]) return clubLeagues[normalized];

    // Substring match — club name from wiki includes a known club name
    // Only match if the dictionary key is 5+ chars to avoid false positives like "inter", "nice", "om"
    for (const [clubName, league] of Object.entries(clubLeagues)) {
        if (clubName.length >= 5 && normalized.includes(clubName)) {
            return league;
        }
    }

    // Fallback to clubnat country → league
    if (clubnat && countryToLeague[clubnat]) {
        return countryToLeague[clubnat];
    }

    return 'Unknown';
}

// ─── Confederation mapping ──────────────────────────────────────────
function getConfederation(code) {
    const confs = {
        'ARG': 'CONMEBOL', 'BRA': 'CONMEBOL', 'URU': 'CONMEBOL', 'COL': 'CONMEBOL',
        'ECU': 'CONMEBOL', 'PAR': 'CONMEBOL', 'BOL': 'CONMEBOL', 'SUR': 'CONMEBOL',
        'USA': 'CONCACAF', 'MEX': 'CONCACAF', 'CAN': 'CONCACAF', 'PAN': 'CONCACAF',
        'JAM': 'CONCACAF', 'HAI': 'CONCACAF', 'CUW': 'CONCACAF',
        'ENG': 'UEFA', 'FRA': 'UEFA', 'ESP': 'UEFA', 'GER': 'UEFA', 'POR': 'UEFA',
        'NED': 'UEFA', 'BEL': 'UEFA', 'ITA': 'UEFA', 'CRO': 'UEFA', 'DEN': 'UEFA',
        'SUI': 'UEFA', 'AUT': 'UEFA', 'UKR': 'UEFA', 'POL': 'UEFA', 'SCO': 'UEFA',
        'TUR': 'UEFA', 'NOR': 'UEFA', 'WAL': 'UEFA', 'BIH': 'UEFA', 'NIR': 'UEFA',
        'SWE': 'UEFA', 'ALB': 'UEFA', 'ROU': 'UEFA', 'SVK': 'UEFA', 'KOS': 'UEFA',
        'CZE': 'UEFA', 'IRL': 'UEFA', 'MKD': 'UEFA',
        'JPN': 'AFC', 'KOR': 'AFC', 'AUS': 'AFC', 'IRN': 'AFC', 'KSA': 'AFC',
        'QAT': 'AFC', 'UZB': 'AFC', 'IRQ': 'AFC', 'JOR': 'AFC',
        'MAR': 'CAF', 'SEN': 'CAF', 'GHA': 'CAF', 'EGY': 'CAF',
        'TUN': 'CAF', 'ALG': 'CAF', 'CIV': 'CAF', 'COD': 'CAF',
        'RSA': 'CAF', 'CPV': 'CAF',
        'NZL': 'OFC', 'NCL': 'OFC'
    };
    return confs[code] || 'UEFA';
}

// ─── HTTP helper ────────────────────────────────────────────────────
function fetchUrl(url, method, postBody) {
    return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            method: method || 'GET',
            headers: {
                'User-Agent': 'WC2026SimBot/1.0 (https://github.com; squad data for hobby project)',
                'Accept': 'application/json'
            }
        };

        if (postBody) {
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.headers['Content-Length'] = Buffer.byteLength(postBody);
        }

        const req = https.request(options, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return fetchUrl(res.headers.location).then(resolve).catch(reject);
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });

        req.on('error', reject);

        if (postBody) {
            req.write(postBody);
        }
        req.end();
    });
}

// ─── MediaWiki API helpers ──────────────────────────────────────────

/**
 * Fetch section list for a Wikipedia page.
 * Returns array of { index, line, anchor }.
 */
async function fetchSections(wikiPage) {
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${wikiPage}&prop=sections&format=json`;
    const raw = await fetchUrl(url);
    const json = JSON.parse(raw);
    if (json.error) throw new Error(json.error.info);
    return json.parse.sections;
}

/**
 * Fetch wikitext for a specific section of a Wikipedia page.
 */
async function fetchSectionWikitext(wikiPage, sectionIndex) {
    const url = `https://en.wikipedia.org/w/api.php?action=parse&page=${wikiPage}&section=${sectionIndex}&prop=wikitext&format=json`;
    const raw = await fetchUrl(url);
    const json = JSON.parse(raw);
    if (json.error) throw new Error(json.error.info);
    return json.parse.wikitext['*'];
}

// ─── Wikitext parser ────────────────────────────────────────────────

/**
 * Parse birth date from various wikitext date templates:
 *   {{bda|1994|4|25}}
 *   {{Birth date and age|1994|4|25}}
 *   {{Birth date and age|df=yes|1994|4|25}}
 *   {{birth date and age2|...}} etc.
 * Returns age as integer, or null if unparseable.
 */
function parseBirthAge(ageStr) {
    if (!ageStr) return null;

    // Match patterns like {{bda|1994|4|25}} or {{Birth date and age|df=yes|1994|4|25}}
    const dateMatch = ageStr.match(/(\d{4})\|(\d{1,2})\|(\d{1,2})/);
    if (dateMatch) {
        const year = parseInt(dateMatch[1]);
        const month = parseInt(dateMatch[2]);
        const day = parseInt(dateMatch[3]);
        if (year > 1970 && year < 2010) {
            const now = new Date();
            let age = now.getFullYear() - year;
            if (now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day)) {
                age--;
            }
            return age;
        }
    }
    return null;
}

/**
 * Parse a club name from wikitext link syntax:
 *   [[Club Full Name|Display Name]] → Display Name
 *   [[Simple Club]] → Simple Club
 *   plain text → plain text
 */
function parseClubName(clubStr) {
    if (!clubStr) return 'Unknown';

    // [[Full Name|Short Name]] → Short Name
    const pipeMatch = clubStr.match(/\[\[([^|]*)\|([^\]]*)\]\]/);
    if (pipeMatch) return pipeMatch[2].trim();

    // [[Simple Name]] → Simple Name
    const simpleMatch = clubStr.match(/\[\[([^\]]*)\]\]/);
    if (simpleMatch) return simpleMatch[1].trim();

    return clubStr.trim() || 'Unknown';
}

/**
 * Extract the raw Wikipedia article title from wikitext link syntax.
 * Unlike parsePlayerName, this preserves disambiguation suffixes
 * for Wikidata lookups.
 *   [[Kylian Mbappé]] → "Kylian Mbappé"
 *   [[Kylian Mbappé|K. Mbappé]] → "Kylian Mbappé"
 *   [[Foo (footballer)|Foo]] → "Foo (footballer)"
 *   {{sortname|First|Last}} → "First Last"
 */
function extractWikiTitle(nameStr) {
    if (!nameStr) return null;

    const sortnameMatch = nameStr.match(/\{\{sortname\|([^|]+)\|([^|}]+)/i);
    if (sortnameMatch) {
        return (sortnameMatch[1].trim() + ' ' + sortnameMatch[2].trim());
    }

    const illMatch = nameStr.match(/\{\{ill\|([^|]+)\|/i);
    if (illMatch) return illMatch[1].trim();

    const pipeMatch = nameStr.match(/\[\[([^|]*)\|([^\]]*)\]\]/);
    if (pipeMatch) return pipeMatch[1].trim();

    const simpleMatch = nameStr.match(/\[\[([^\]]*)\]\]/);
    if (simpleMatch) return simpleMatch[1].trim();

    return null; // no wiki link — can't resolve
}

/**
 * Parse player name from wikitext link syntax:
 *   [[Kylian Mbappé]] → Kylian Mbappé
 *   [[Kylian Mbappé|K. Mbappé]] → Kylian Mbappé (prefer full link name)
 *   [[Foo (footballer)|Foo]] → Foo
 */
function parsePlayerName(nameStr) {
    if (!nameStr) return null;

    // {{sortname|First|Last}} → First Last (used by Australia, some others)
    const sortnameMatch = nameStr.match(/\{\{sortname\|([^|]+)\|([^|}]+)/i);
    if (sortnameMatch) {
        return (sortnameMatch[1].trim() + ' ' + sortnameMatch[2].trim());
    }

    // {{ill|Name|lang}} → Name (interlanguage link)
    const illMatch = nameStr.match(/\{\{ill\|([^|]+)\|/i);
    if (illMatch) {
        return illMatch[1].trim();
    }

    // [[Full Name (disambiguation)|Display]] → prefer full link name
    const pipeMatch = nameStr.match(/\[\[([^|]*)\|([^\]]*)\]\]/);
    if (pipeMatch) {
        const full = pipeMatch[1].replace(/\s*\(.*?\)\s*$/, '').trim();
        const display = pipeMatch[2].trim();
        return full.length >= display.length ? full : display;
    }

    // [[Simple Name]] or [[Name (footballer)]]
    const simpleMatch = nameStr.match(/\[\[([^\]]*)\]\]/);
    if (simpleMatch) {
        return simpleMatch[1].replace(/\s*\(.*?\)\s*$/, '').trim();
    }

    return nameStr.trim() || null;
}

/**
 * Map position abbreviations used in Wikipedia templates
 */
function normalizePosition(pos) {
    if (!pos) return 'MF';
    pos = pos.toUpperCase().trim();
    if (pos === 'GK') return 'GK';
    if (pos === 'DF') return 'DF';
    if (pos === 'MF') return 'MF';
    if (pos === 'FW') return 'FW';
    return 'MF';
}

/**
 * Parse {{nat fs g player|...}} templates from wikitext.
 * These appear in Wikipedia's national football team squad sections.
 *
 * Typical format:
 *   {{nat fs g player|no=1|pos=GK|name=[[Brice Samba]]|age={{bda|1994|4|25}}|caps=3|goals=0|club=[[Stade Rennais FC|Rennes]]|clubnat=FRA}}
 *
 * Also handles:
 *   {{nat fs player|...}} (without 'g' - same fields)
 *   Case-insensitive template names
 */
function parseSquadFromWikitext(wikitext, teamCountry) {
    const players = [];

    // Find all {{nat fs player|...}} or {{nat fs g player|...}} templates.
    // We can't use a simple regex because the templates contain nested {{ }}
    // (e.g. age={{Birth date and age|...}}). Instead, we find the start of each
    // template and then walk forward counting braces to find the matching }}.
    const startRegex = /\{\{nat fs(?: g)? player\s*\|/gi;
    let startMatch;

    while ((startMatch = startRegex.exec(wikitext)) !== null) {
        // Extract full template content by brace-counting from after the opening {{
        const contentStart = startMatch.index + startMatch[0].length;
        let depth = 2; // We already consumed the opening {{
        let i = contentStart;
        while (i < wikitext.length && depth > 0) {
            if (wikitext[i] === '{' && i + 1 < wikitext.length && wikitext[i + 1] === '{') {
                depth += 2; i += 2; continue;
            }
            if (wikitext[i] === '}' && i + 1 < wikitext.length && wikitext[i + 1] === '}') {
                depth -= 2; i += 2; continue;
            }
            i++;
        }
        const params = wikitext.substring(contentStart, i - 2);

        // Parse key=value pairs from the template parameters
        // We need to handle nested {{ }} and [[ ]] — the | inside [[ ]] links
        // is NOT a parameter separator (e.g. club=[[Club Name|Display]])
        const fields = {};
        let braceDepth = 0;
        let bracketDepth = 0;
        let currentKey = '';
        let currentVal = '';
        let inKey = true;

        for (let j = 0; j < params.length; j++) {
            const ch = params[j];
            if (ch === '{') { braceDepth++; currentVal += ch; continue; }
            if (ch === '}') { braceDepth--; currentVal += ch; continue; }
            if (ch === '[') { bracketDepth++; currentVal += ch; continue; }
            if (ch === ']') { bracketDepth--; currentVal += ch; continue; }

            if (braceDepth === 0 && bracketDepth === 0 && ch === '|') {
                // End of this param
                if (currentKey.trim()) {
                    fields[currentKey.trim().toLowerCase()] = currentVal.trim();
                }
                currentKey = '';
                currentVal = '';
                inKey = true;
                continue;
            }

            if (braceDepth === 0 && bracketDepth === 0 && ch === '=' && inKey) {
                inKey = false;
                continue;
            }

            if (inKey) {
                currentKey += ch;
            } else {
                currentVal += ch;
            }
        }
        // Don't forget the last param
        if (currentKey.trim()) {
            fields[currentKey.trim().toLowerCase()] = currentVal.trim();
        }

        const name = parsePlayerName(fields.name);
        if (!name) continue;

        const wikiTitle = extractWikiTitle(fields.name);
        const pos = normalizePosition(fields.pos);
        const club = parseClubName(fields.club);
        const clubnat = (fields.clubnat || '').trim().toUpperCase();
        const age = parseBirthAge(fields.age);
        const league = getLeagueFromClub(club, clubnat);

        const coords = capitalCoords[teamCountry] || { lat: 0, lng: 0, city: 'Unknown' };

        // Skip duplicates
        if (players.find(p => p.name === name)) continue;

        // Cap at 30 players (some pages have multiple call-up lists)
        if (players.length >= 30) break;

        players.push({
            name,
            wikiTitle, // raw Wikipedia article title for Wikidata resolution
            position: pos,
            club,
            league,
            age: age || (22 + Math.floor(Math.random() * 8)),
            birthplace: {
                city: coords.city,
                country: teamCountry,
                lat: +(coords.lat + (Math.random() - 0.5) * 2).toFixed(4),
                lng: +(coords.lng + (Math.random() - 0.5) * 2).toFixed(4)
            }
        });
    }

    return players;
}

// ─── Default squad generator (fallback) ─────────────────────────────
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
            lat: +(coords.lat + (Math.random() - 0.5) * 2).toFixed(4),
            lng: +(coords.lng + (Math.random() - 0.5) * 2).toFixed(4)
        }
    }));
}

// ─── Main fetch logic per team ──────────────────────────────────────
async function fetchTeamSquad(team) {
    console.log(`Fetching ${team.name} (${team.code})...`);

    try {
        // Step 1: Get sections list
        const sections = await fetchSections(team.wiki);

        // Step 2: Find "Current squad" section (or variations)
        const squadKeywords = ['current squad', 'squad', 'current roster', 'roster', 'players'];
        let sectionIndex = null;

        for (const keyword of squadKeywords) {
            const found = sections.find(s =>
                s.line.toLowerCase().trim() === keyword
            );
            if (found) {
                sectionIndex = found.index;
                break;
            }
        }

        // If exact match failed, try partial match
        if (sectionIndex === null) {
            for (const keyword of squadKeywords) {
                const found = sections.find(s =>
                    s.line.toLowerCase().includes(keyword)
                );
                if (found) {
                    sectionIndex = found.index;
                    break;
                }
            }
        }

        if (sectionIndex === null) {
            console.log(`  ⚠ No squad section found, trying full page...`);
            // Try fetching section 0 (full page intro) — unlikely to work but worth a shot
            // Better: try all sections
            for (const section of sections) {
                const wikitext = await fetchSectionWikitext(team.wiki, section.index);
                if (/\{\{nat fs(?: g)? player/i.test(wikitext)) {
                    sectionIndex = section.index;
                    console.log(`  → Found players in section "${section.line}"`);
                    break;
                }
                await sleep(200);
            }
        }

        if (sectionIndex === null) {
            console.log(`  ✗ No squad data found, using defaults`);
            return makeResult(team, generateDefaultSquad(team.country));
        }

        // Step 3: Fetch wikitext for that section
        const wikitext = await fetchSectionWikitext(team.wiki, sectionIndex);

        // Step 4: Parse players from wikitext
        let players = parseSquadFromWikitext(wikitext, team.country);

        if (players.length < 11) {
            console.log(`  ⚠ Only found ${players.length} players in section ${sectionIndex}, scanning adjacent sections...`);

            // Some pages split the squad across sub-sections — scan nearby sections
            const idx = parseInt(sectionIndex);
            for (let delta = 1; delta <= 3; delta++) {
                for (const offset of [delta, -delta]) {
                    const tryIdx = idx + offset;
                    if (tryIdx < 1 || tryIdx > sections.length) continue;
                    try {
                        const extraText = await fetchSectionWikitext(team.wiki, tryIdx);
                        const extraPlayers = parseSquadFromWikitext(extraText, team.country);
                        for (const p of extraPlayers) {
                            if (!players.find(existing => existing.name === p.name)) {
                                players.push(p);
                            }
                        }
                    } catch (e) { /* ignore */ }
                    await sleep(200);
                }
                if (players.length >= 11) break;
            }
        }

        if (players.length < 11) {
            console.log(`  ✗ Only ${players.length} players after scanning, using defaults`);
            return makeResult(team, generateDefaultSquad(team.country));
        }

        console.log(`  ✓ ${players.length} players`);
        return makeResult(team, players);

    } catch (e) {
        console.error(`  ✗ Error: ${e.message}`);
        return makeResult(team, generateDefaultSquad(team.country));
    }
}

function makeResult(team, players) {
    return {
        code: team.code,
        name: team.name,
        flag: team.flag,
        country: team.country,
        players
    };
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

// ─── Output file generator ──────────────────────────────────────────
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
    "Brasileirão": { tier: 2, weight: 70 },
    "Turkish Super Lig": { tier: 3, weight: 52 },
    "Ukrainian Premier League": { tier: 3, weight: 45 },
    "Russian Premier League": { tier: 3, weight: 45 },
    "Austrian Bundesliga": { tier: 3, weight: 48 },
    "Swiss Super League": { tier: 3, weight: 47 },
    "Danish Superliga": { tier: 3, weight: 46 },
    "Greek Super League": { tier: 3, weight: 45 },
    "Croatian First League": { tier: 3, weight: 42 },
    "Serbian SuperLiga": { tier: 3, weight: 40 },
    "Polish Ekstraklasa": { tier: 3, weight: 42 },
    "Czech First League": { tier: 3, weight: 42 },
    "Romanian SuperLiga": { tier: 3, weight: 40 },
    "Swedish Allsvenskan": { tier: 3, weight: 40 },
    "Norwegian Eliteserien": { tier: 3, weight: 40 },
    "Liga MX": { tier: 3, weight: 55 },
    "MLS": { tier: 3, weight: 50 },
    "Saudi Pro League": { tier: 3, weight: 55 },
    "J1 League": { tier: 4, weight: 45 },
    "K League 1": { tier: 4, weight: 43 },
    "Qatar Stars League": { tier: 4, weight: 42 },
    "Iranian Pro League": { tier: 4, weight: 40 },
    "Iraqi Premier League": { tier: 4, weight: 35 },
    "Jordanian Pro League": { tier: 4, weight: 33 },
    "Egyptian Premier League": { tier: 4, weight: 38 },
    "Botola Pro": { tier: 4, weight: 36 },
    "Tunisian Ligue 1": { tier: 4, weight: 35 },
    "Algerian Ligue 1": { tier: 4, weight: 34 },
    "Senegalese Ligue 1": { tier: 4, weight: 32 },
    "Ivorian Ligue 1": { tier: 4, weight: 32 },
    "Ghanaian Premier League": { tier: 4, weight: 32 },
    "South African Premier League": { tier: 4, weight: 35 },
    "Congolese Ligue 1": { tier: 4, weight: 30 },
    "Colombian Primera A": { tier: 3, weight: 50 },
    "Ecuadorian Serie A": { tier: 4, weight: 40 },
    "Uruguayan Primera": { tier: 4, weight: 42 },
    "Paraguayan Primera": { tier: 4, weight: 38 },
    "A-League": { tier: 4, weight: 40 },
    "Chinese Super League": { tier: 4, weight: 38 },
    "UAE Pro League": { tier: 4, weight: 40 },
    "Hungarian NB I": { tier: 4, weight: 35 },
    "Israeli Premier League": { tier: 4, weight: 38 },
    "Cypriot First Division": { tier: 4, weight: 33 },
    "EFL Championship": { tier: 3, weight: 55 },
    "EFL League One": { tier: 4, weight: 38 },
    "2. Bundesliga": { tier: 3, weight: 48 },
    "Serie B": { tier: 3, weight: 45 },
    "Ligue 2": { tier: 4, weight: 40 },
    "Segunda División": { tier: 3, weight: 48 },
    "Eerste Divisie": { tier: 4, weight: 38 },
    "Regionalliga": { tier: 5, weight: 25 },
    "Welsh Premier League": { tier: 5, weight: 28 },
    "NIFL Premiership": { tier: 5, weight: 28 },
    "Finnish Veikkausliiga": { tier: 4, weight: 33 },
    "Bulgarian First League": { tier: 4, weight: 33 },
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

// ─── Wikidata Birthplace Resolution ──────────────────────────────────

/**
 * Batch-resolve Wikipedia article titles → Wikidata QIDs.
 * MediaWiki API allows max 50 titles per request.
 * Returns Map<title, qid>
 */
async function resolveWikidataIds(titles) {
    const titleToQid = new Map();
    const batches = [];
    for (let i = 0; i < titles.length; i += 50) {
        batches.push(titles.slice(i, i + 50));
    }

    for (let bIdx = 0; bIdx < batches.length; bIdx++) {
        const batch = batches[bIdx];
        const titlesParam = batch.map(t => t.replace(/ /g, '_')).join('|');
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titlesParam)}&prop=pageprops&ppprop=wikibase_item&redirects=1&format=json`;

        try {
            const raw = await fetchUrl(url);
            const data = JSON.parse(raw);
            const query = data.query || {};

            // Build reverse maps for normalization and redirects
            const normalizedMap = {};
            (query.normalized || []).forEach(n => { normalizedMap[n.to] = n.from; });
            const redirectMap = {};
            (query.redirects || []).forEach(r => { redirectMap[r.to] = r.from; });

            // Extract QIDs from pages
            const pages = query.pages || {};
            for (const page of Object.values(pages)) {
                if (page.missing !== undefined) continue;
                const qid = page.pageprops && page.pageprops.wikibase_item;
                if (!qid) continue;

                // Trace back through redirects and normalization to find original title
                let resolvedTitle = page.title;

                // Check if this title was a redirect target
                const redirectFrom = redirectMap[resolvedTitle];
                // Check if the redirect source (or the title itself) was normalized
                const normalizedFrom = normalizedMap[redirectFrom || resolvedTitle];

                // The original input title is the one before normalization
                const originalTitle = normalizedFrom || redirectFrom || resolvedTitle;

                // Match against our input titles (spaces vs underscores)
                const matchedTitle = batch.find(t =>
                    t === originalTitle ||
                    t.replace(/_/g, ' ') === originalTitle ||
                    t === originalTitle.replace(/ /g, '_') ||
                    t === resolvedTitle ||
                    t.replace(/_/g, ' ') === resolvedTitle
                );

                if (matchedTitle) {
                    titleToQid.set(matchedTitle, qid);
                } else {
                    // Fallback: store by resolved title
                    titleToQid.set(resolvedTitle, qid);
                }
            }
        } catch (e) {
            console.error(`  ⚠ Wikidata ID batch ${bIdx + 1} failed: ${e.message}`);
        }

        if (bIdx < batches.length - 1) await sleep(300);
    }

    return titleToQid;
}

/**
 * Batch-query Wikidata SPARQL for birthplace data (P19) with coordinates (P625).
 * Returns Map<qid, { city, country, lat, lng }>
 */
async function fetchBirthplaces(qids) {
    const birthplaces = new Map();
    // SPARQL queries can handle ~200 QIDs at a time comfortably via POST
    const batches = [];
    for (let i = 0; i < qids.length; i += 150) {
        batches.push(qids.slice(i, i + 150));
    }

    for (let bIdx = 0; bIdx < batches.length; bIdx++) {
        const batch = batches[bIdx];
        const values = batch.map(q => `wd:${q}`).join(' ');

        const sparql = `
SELECT ?person ?birthPlaceLabel ?countryLabel ?lat ?lon WHERE {
  VALUES ?person { ${values} }
  ?person wdt:P19 ?birthPlace .
  ?birthPlace wdt:P625 ?coord .
  OPTIONAL { ?birthPlace wdt:P17 ?country . }
  BIND(geof:latitude(?coord) AS ?lat)
  BIND(geof:longitude(?coord) AS ?lon)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en,en-us,en-gb,es,fr,de,pt" . }
}`;

        try {
            const raw = await fetchUrl(
                'https://query.wikidata.org/sparql',
                'POST',
                `format=json&query=${encodeURIComponent(sparql)}`
            );
            const data = JSON.parse(raw);

            for (const binding of (data.results || {}).bindings || []) {
                const qid = binding.person.value.split('/').pop();
                const city = binding.birthPlaceLabel ? binding.birthPlaceLabel.value : 'Unknown';
                const country = binding.countryLabel ? binding.countryLabel.value : 'Unknown';
                const lat = parseFloat(binding.lat.value);
                const lon = parseFloat(binding.lon.value);

                if (!isNaN(lat) && !isNaN(lon)) {
                    birthplaces.set(qid, { city, country, lat, lng: lon });
                }
            }
        } catch (e) {
            console.error(`  ⚠ SPARQL batch ${bIdx + 1} failed: ${e.message}`);
        }

        if (bIdx < batches.length - 1) await sleep(1000);
    }

    return birthplaces;
}

// ─── Main ───────────────────────────────────────────────────────────
async function main() {
    console.log('='.repeat(60));
    console.log('Fetching World Cup 2026 Squad Data from Wikipedia (API)');
    console.log('='.repeat(60));
    console.log(`Teams to fetch: ${teams.length}`);
    console.log('');

    const squadData = {};
    let successCount = 0;
    let defaultCount = 0;

    for (let i = 0; i < teams.length; i++) {
        const team = teams[i];
        const result = await fetchTeamSquad(team);

        const isDefault = result.players.length > 0 && result.players[0].name === 'Player 1';

        squadData[result.code] = {
            name: result.name,
            flag: result.flag,
            confederation: getConfederation(result.code),
            fifaRanking: i + 1,
            players: result.players
        };

        if (isDefault) {
            defaultCount++;
        } else {
            successCount++;
        }

        // Be nice to Wikipedia — 400ms between requests
        await sleep(400);
    }

    // ─── Resolve real birthplaces via Wikidata ─────────────────────
    console.log('');
    console.log('─'.repeat(60));
    console.log('Resolving birthplaces via Wikidata...');

    // Collect all wikiTitles across all teams
    const allWikiTitles = [];
    const titleToPlayerRefs = new Map(); // title → [{teamCode, playerIndex}]

    for (const [code, team] of Object.entries(squadData)) {
        team.players.forEach((player, idx) => {
            if (player.wikiTitle) {
                allWikiTitles.push(player.wikiTitle);
                const refs = titleToPlayerRefs.get(player.wikiTitle) || [];
                refs.push({ code, idx });
                titleToPlayerRefs.set(player.wikiTitle, refs);
            }
        });
    }

    console.log(`  Players with wiki links: ${allWikiTitles.length}`);

    // Step 1: Resolve titles → Wikidata QIDs
    const uniqueTitles = [...new Set(allWikiTitles)];
    console.log(`  Unique titles to resolve: ${uniqueTitles.length}`);
    const titleToQid = await resolveWikidataIds(uniqueTitles);
    console.log(`  Resolved QIDs: ${titleToQid.size}`);

    // Build QID → title reverse map, and collect unique QIDs
    const qidToTitle = new Map();
    for (const [title, qid] of titleToQid.entries()) {
        qidToTitle.set(qid, title);
    }
    const uniqueQids = [...new Set(titleToQid.values())];

    // Step 2: Fetch birthplaces from Wikidata SPARQL
    console.log(`  Fetching birthplaces for ${uniqueQids.length} players...`);
    const birthplaces = await fetchBirthplaces(uniqueQids);
    console.log(`  Got birthplaces: ${birthplaces.size}`);

    // Step 3: Update player records
    let updatedCount = 0;
    for (const [title, qid] of titleToQid.entries()) {
        const bp = birthplaces.get(qid);
        if (!bp) continue;

        const refs = titleToPlayerRefs.get(title) || [];
        for (const ref of refs) {
            const player = squadData[ref.code].players[ref.idx];
            player.birthplace = {
                city: bp.city,
                country: bp.country,
                lat: +bp.lat.toFixed(4),
                lng: +bp.lng.toFixed(4)
            };
            updatedCount++;
        }
    }
    console.log(`  Updated ${updatedCount} players with real birthplaces`);

    // Strip wikiTitle from player objects before writing output
    for (const team of Object.values(squadData)) {
        team.players.forEach(p => delete p.wikiTitle);
    }

    console.log('─'.repeat(60));

    // Generate output
    const output = generateOutputFile(squadData);
    const outputPath = path.join(__dirname, '..', 'teams-data.js');
    fs.writeFileSync(outputPath, output);

    console.log('');
    console.log('='.repeat(60));
    console.log(`Done! Saved to teams-data.js`);
    console.log(`Total teams: ${Object.keys(squadData).length}`);
    console.log(`Successfully scraped: ${successCount}`);
    console.log(`Using defaults: ${defaultCount}`);

    // Stats
    let totalPlayers = 0;
    let playersWithClubs = 0;
    let playersWithLeagues = 0;
    let playersWithBirthplaces = 0;
    Object.values(squadData).forEach(team => {
        totalPlayers += team.players.length;
        playersWithClubs += team.players.filter(p => p.club !== 'Unknown').length;
        playersWithLeagues += team.players.filter(p => p.league !== 'Unknown').length;
        playersWithBirthplaces += team.players.filter(p =>
            p.birthplace.city !== 'Unknown' &&
            !Object.values(capitalCoords).some(c =>
                c.city === p.birthplace.city && c.lat === p.birthplace.lat
            )
        ).length;
    });
    console.log(`Total players: ${totalPlayers}`);
    console.log(`Players with clubs: ${playersWithClubs} (${(playersWithClubs/totalPlayers*100).toFixed(1)}%)`);
    console.log(`Players with leagues: ${playersWithLeagues} (${(playersWithLeagues/totalPlayers*100).toFixed(1)}%)`);
    console.log(`Players with real birthplaces: ${playersWithBirthplaces} (${(playersWithBirthplaces/totalPlayers*100).toFixed(1)}%)`);
    console.log('='.repeat(60));
}

main().catch(console.error);
