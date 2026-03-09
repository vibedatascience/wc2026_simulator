#!/usr/bin/env python3
"""
Fetch World Cup 2026 squad data from Wikipedia using MediaWiki API.

Usage:
    python scripts/update-squads.py              # Fetch all 64 teams
    python scripts/update-squads.py ARG FRA ENG  # Fetch only specified teams
    python scripts/update-squads.py --dry-run    # Fetch but don't write file

Requires: Python 3.7+ (no external dependencies)
"""

import json
import re
import sys
import time
import urllib.request
import urllib.parse
from datetime import date, datetime
from pathlib import Path

# ─── Team List ───────────────────────────────────────────────────────
# 42 confirmed group stage teams + 22 playoff candidates = 64 total

TEAMS = [
    # Group A
    {"code": "MEX", "name": "Mexico", "wiki": "Mexico_national_football_team", "flag": "🇲🇽", "country": "Mexico"},
    {"code": "RSA", "name": "South Africa", "wiki": "South_Africa_national_soccer_team", "flag": "🇿🇦", "country": "South Africa"},
    {"code": "KOR", "name": "South Korea", "wiki": "South_Korea_national_football_team", "flag": "🇰🇷", "country": "South Korea"},
    # Group B
    {"code": "CAN", "name": "Canada", "wiki": "Canada_men%27s_national_soccer_team", "flag": "🇨🇦", "country": "Canada"},
    {"code": "QAT", "name": "Qatar", "wiki": "Qatar_national_football_team", "flag": "🇶🇦", "country": "Qatar"},
    {"code": "SUI", "name": "Switzerland", "wiki": "Switzerland_national_football_team", "flag": "🇨🇭", "country": "Switzerland"},
    # Group C
    {"code": "BRA", "name": "Brazil", "wiki": "Brazil_national_football_team", "flag": "🇧🇷", "country": "Brazil"},
    {"code": "MAR", "name": "Morocco", "wiki": "Morocco_national_football_team", "flag": "🇲🇦", "country": "Morocco"},
    {"code": "HAI", "name": "Haiti", "wiki": "Haiti_national_football_team", "flag": "🇭🇹", "country": "Haiti"},
    {"code": "SCO", "name": "Scotland", "wiki": "Scotland_national_football_team", "flag": "🏴\U000e0067\U000e0062\U000e0073\U000e0063\U000e0074\U000e007f", "country": "Scotland"},
    # Group D
    {"code": "USA", "name": "United States", "wiki": "United_States_men%27s_national_soccer_team", "flag": "🇺🇸", "country": "USA"},
    {"code": "PAR", "name": "Paraguay", "wiki": "Paraguay_national_football_team", "flag": "🇵🇾", "country": "Paraguay"},
    {"code": "AUS", "name": "Australia", "wiki": "Australia_men%27s_national_soccer_team", "flag": "🇦🇺", "country": "Australia"},
    # Group E
    {"code": "GER", "name": "Germany", "wiki": "Germany_national_football_team", "flag": "🇩🇪", "country": "Germany"},
    {"code": "CUW", "name": "Curaçao", "wiki": "Cura%C3%A7ao_national_football_team", "flag": "🇨🇼", "country": "Curaçao"},
    {"code": "CIV", "name": "Ivory Coast", "wiki": "Ivory_Coast_national_football_team", "flag": "🇨🇮", "country": "Ivory Coast"},
    {"code": "ECU", "name": "Ecuador", "wiki": "Ecuador_national_football_team", "flag": "🇪🇨", "country": "Ecuador"},
    # Group F
    {"code": "NED", "name": "Netherlands", "wiki": "Netherlands_national_football_team", "flag": "🇳🇱", "country": "Netherlands"},
    {"code": "JPN", "name": "Japan", "wiki": "Japan_national_football_team", "flag": "🇯🇵", "country": "Japan"},
    {"code": "TUN", "name": "Tunisia", "wiki": "Tunisia_national_football_team", "flag": "🇹🇳", "country": "Tunisia"},
    # Group G
    {"code": "BEL", "name": "Belgium", "wiki": "Belgium_national_football_team", "flag": "🇧🇪", "country": "Belgium"},
    {"code": "EGY", "name": "Egypt", "wiki": "Egypt_national_football_team", "flag": "🇪🇬", "country": "Egypt"},
    {"code": "IRN", "name": "Iran", "wiki": "Iran_national_football_team", "flag": "🇮🇷", "country": "Iran"},
    {"code": "NZL", "name": "New Zealand", "wiki": "New_Zealand_men%27s_national_football_team", "flag": "🇳🇿", "country": "New Zealand"},
    # Group H
    {"code": "ESP", "name": "Spain", "wiki": "Spain_national_football_team", "flag": "🇪🇸", "country": "Spain"},
    {"code": "CPV", "name": "Cape Verde", "wiki": "Cape_Verde_national_football_team", "flag": "🇨🇻", "country": "Cape Verde"},
    {"code": "KSA", "name": "Saudi Arabia", "wiki": "Saudi_Arabia_national_football_team", "flag": "🇸🇦", "country": "Saudi Arabia"},
    {"code": "URU", "name": "Uruguay", "wiki": "Uruguay_national_football_team", "flag": "🇺🇾", "country": "Uruguay"},
    # Group I
    {"code": "FRA", "name": "France", "wiki": "France_national_football_team", "flag": "🇫🇷", "country": "France"},
    {"code": "SEN", "name": "Senegal", "wiki": "Senegal_national_football_team", "flag": "🇸🇳", "country": "Senegal"},
    {"code": "NOR", "name": "Norway", "wiki": "Norway_national_football_team", "flag": "🇳🇴", "country": "Norway"},
    # Group J
    {"code": "ARG", "name": "Argentina", "wiki": "Argentina_national_football_team", "flag": "🇦🇷", "country": "Argentina"},
    {"code": "ALG", "name": "Algeria", "wiki": "Algeria_national_football_team", "flag": "🇩🇿", "country": "Algeria"},
    {"code": "AUT", "name": "Austria", "wiki": "Austria_national_football_team", "flag": "🇦🇹", "country": "Austria"},
    {"code": "JOR", "name": "Jordan", "wiki": "Jordan_national_football_team", "flag": "🇯🇴", "country": "Jordan"},
    # Group K
    {"code": "POR", "name": "Portugal", "wiki": "Portugal_national_football_team", "flag": "🇵🇹", "country": "Portugal"},
    {"code": "UZB", "name": "Uzbekistan", "wiki": "Uzbekistan_national_football_team", "flag": "🇺🇿", "country": "Uzbekistan"},
    {"code": "COL", "name": "Colombia", "wiki": "Colombia_national_football_team", "flag": "🇨🇴", "country": "Colombia"},
    # Group L
    {"code": "ENG", "name": "England", "wiki": "England_national_football_team", "flag": "🏴\U000e0067\U000e0062\U000e0065\U000e006e\U000e0067\U000e007f", "country": "England"},
    {"code": "CRO", "name": "Croatia", "wiki": "Croatia_national_football_team", "flag": "🇭🇷", "country": "Croatia"},
    {"code": "GHA", "name": "Ghana", "wiki": "Ghana_national_football_team", "flag": "🇬🇭", "country": "Ghana"},
    {"code": "PAN", "name": "Panama", "wiki": "Panama_national_football_team", "flag": "🇵🇦", "country": "Panama"},
    # Playoff candidates - UEFA Path A
    {"code": "ITA", "name": "Italy", "wiki": "Italy_national_football_team", "flag": "🇮🇹", "country": "Italy"},
    {"code": "WAL", "name": "Wales", "wiki": "Wales_national_football_team", "flag": "🏴\U000e0067\U000e0062\U000e0077\U000e006c\U000e0073\U000e007f", "country": "Wales"},
    {"code": "BIH", "name": "Bosnia & Herz.", "wiki": "Bosnia_and_Herzegovina_national_football_team", "flag": "🇧🇦", "country": "Bosnia and Herzegovina"},
    {"code": "NIR", "name": "N. Ireland", "wiki": "Northern_Ireland_national_football_team", "flag": "🇬🇧", "country": "Northern Ireland"},
    # UEFA Path B
    {"code": "UKR", "name": "Ukraine", "wiki": "Ukraine_national_football_team", "flag": "🇺🇦", "country": "Ukraine"},
    {"code": "SWE", "name": "Sweden", "wiki": "Sweden_men%27s_national_football_team", "flag": "🇸🇪", "country": "Sweden"},
    {"code": "POL", "name": "Poland", "wiki": "Poland_national_football_team", "flag": "🇵🇱", "country": "Poland"},
    {"code": "ALB", "name": "Albania", "wiki": "Albania_national_football_team", "flag": "🇦🇱", "country": "Albania"},
    # UEFA Path C
    {"code": "TUR", "name": "Turkey", "wiki": "Turkey_national_football_team", "flag": "🇹🇷", "country": "Turkey"},
    {"code": "ROU", "name": "Romania", "wiki": "Romania_national_football_team", "flag": "🇷🇴", "country": "Romania"},
    {"code": "SVK", "name": "Slovakia", "wiki": "Slovakia_national_football_team", "flag": "🇸🇰", "country": "Slovakia"},
    {"code": "KOS", "name": "Kosovo", "wiki": "Kosovo_national_football_team", "flag": "🇽🇰", "country": "Kosovo"},
    # UEFA Path D
    {"code": "DEN", "name": "Denmark", "wiki": "Denmark_national_football_team", "flag": "🇩🇰", "country": "Denmark"},
    {"code": "CZE", "name": "Czechia", "wiki": "Czech_Republic_national_football_team", "flag": "🇨🇿", "country": "Czech Republic"},
    {"code": "IRL", "name": "Rep. of Ireland", "wiki": "Republic_of_Ireland_national_football_team", "flag": "🇮🇪", "country": "Ireland"},
    {"code": "MKD", "name": "N. Macedonia", "wiki": "North_Macedonia_national_football_team", "flag": "🇲🇰", "country": "North Macedonia"},
    # IC Playoff 1
    {"code": "COD", "name": "DR Congo", "wiki": "DR_Congo_national_football_team", "flag": "🇨🇩", "country": "DR Congo"},
    {"code": "JAM", "name": "Jamaica", "wiki": "Jamaica_national_football_team", "flag": "🇯🇲", "country": "Jamaica"},
    {"code": "NCL", "name": "New Caledonia", "wiki": "New_Caledonia_national_football_team", "flag": "🇳🇨", "country": "New Caledonia"},
    # IC Playoff 2
    {"code": "IRQ", "name": "Iraq", "wiki": "Iraq_national_football_team", "flag": "🇮🇶", "country": "Iraq"},
    {"code": "BOL", "name": "Bolivia", "wiki": "Bolivia_national_football_team", "flag": "🇧🇴", "country": "Bolivia"},
    {"code": "SUR", "name": "Suriname", "wiki": "Suriname_national_football_team", "flag": "🇸🇷", "country": "Suriname"},
]

TEAM_BY_CODE = {t["code"]: t for t in TEAMS}

# ─── Capital city coordinates (fallback birthplace) ──────────────────
CAPITAL_COORDS = {
    "Argentina": (-34.6, -58.4, "Buenos Aires"), "Brazil": (-23.5, -46.6, "São Paulo"),
    "England": (51.5, -0.1, "London"), "France": (48.9, 2.3, "Paris"),
    "Spain": (40.4, -3.7, "Madrid"), "Germany": (52.5, 13.4, "Berlin"),
    "Portugal": (38.7, -9.1, "Lisbon"), "Netherlands": (52.4, 4.9, "Amsterdam"),
    "Belgium": (50.8, 4.4, "Brussels"), "Italy": (41.9, 12.5, "Rome"),
    "Croatia": (45.8, 16.0, "Zagreb"), "Denmark": (55.7, 12.6, "Copenhagen"),
    "Switzerland": (46.9, 7.4, "Bern"), "Austria": (48.2, 16.4, "Vienna"),
    "Ukraine": (50.4, 30.5, "Kyiv"), "Poland": (52.2, 21.0, "Warsaw"),
    "Scotland": (55.9, -3.2, "Edinburgh"), "Turkey": (41.0, 29.0, "Istanbul"),
    "USA": (40.7, -74.0, "New York"), "Mexico": (19.4, -99.1, "Mexico City"),
    "Canada": (43.7, -79.4, "Toronto"), "Uruguay": (-34.9, -56.2, "Montevideo"),
    "Colombia": (4.7, -74.1, "Bogotá"), "Ecuador": (-0.2, -78.5, "Quito"),
    "Paraguay": (-25.3, -57.6, "Asunción"), "Japan": (35.7, 139.7, "Tokyo"),
    "South Korea": (37.6, 127.0, "Seoul"), "Australia": (-33.9, 151.2, "Sydney"),
    "Iran": (35.7, 51.4, "Tehran"), "Saudi Arabia": (24.7, 46.7, "Riyadh"),
    "Qatar": (25.3, 51.5, "Doha"), "Morocco": (33.6, -7.6, "Casablanca"),
    "Senegal": (14.7, -17.5, "Dakar"), "Ghana": (5.6, -0.2, "Accra"),
    "Egypt": (30.0, 31.2, "Cairo"), "Tunisia": (36.8, 10.2, "Tunis"),
    "Algeria": (36.8, 3.1, "Algiers"), "Ivory Coast": (5.3, -4.0, "Abidjan"),
    "Jamaica": (18.0, -76.8, "Kingston"), "New Zealand": (-36.8, 174.8, "Auckland"),
    "South Africa": (-26.2, 28.0, "Johannesburg"), "Norway": (59.9, 10.8, "Oslo"),
    "Jordan": (31.9, 35.9, "Amman"), "Uzbekistan": (41.3, 69.3, "Tashkent"),
    "Panama": (9.0, -79.5, "Panama City"), "Cape Verde": (15.0, -23.6, "Praia"),
    "Haiti": (18.5, -72.3, "Port-au-Prince"), "Curaçao": (12.2, -69.0, "Willemstad"),
    "Wales": (51.5, -3.2, "Cardiff"), "Bosnia and Herzegovina": (43.9, 18.4, "Sarajevo"),
    "Northern Ireland": (54.6, -5.9, "Belfast"), "Sweden": (59.3, 18.1, "Stockholm"),
    "Albania": (41.3, 19.8, "Tirana"), "Romania": (44.4, 26.1, "Bucharest"),
    "Slovakia": (48.1, 17.1, "Bratislava"), "Kosovo": (42.7, 21.2, "Pristina"),
    "Czech Republic": (50.1, 14.4, "Prague"), "Ireland": (53.3, -6.3, "Dublin"),
    "North Macedonia": (42.0, 21.4, "Skopje"), "DR Congo": (-4.3, 15.3, "Kinshasa"),
    "New Caledonia": (-22.3, 166.5, "Nouméa"), "Iraq": (33.3, 44.4, "Baghdad"),
    "Bolivia": (-16.5, -68.2, "La Paz"), "Suriname": (5.8, -55.2, "Paramaribo"),
}

# ─── Club → League mapping ──────────────────────────────────────────
CLUB_LEAGUES = {
    # Premier League
    "manchester city": "Premier League", "manchester united": "Premier League",
    "liverpool": "Premier League", "arsenal": "Premier League", "chelsea": "Premier League",
    "tottenham hotspur": "Premier League", "tottenham": "Premier League",
    "newcastle united": "Premier League", "aston villa": "Premier League",
    "west ham united": "Premier League", "brighton & hove albion": "Premier League",
    "brighton": "Premier League", "crystal palace": "Premier League",
    "brentford": "Premier League", "fulham": "Premier League",
    "wolverhampton wanderers": "Premier League", "wolves": "Premier League",
    "bournemouth": "Premier League", "nottingham forest": "Premier League",
    "everton": "Premier League", "ipswich town": "Premier League",
    "leicester city": "Premier League", "southampton": "Premier League",
    # La Liga
    "real madrid": "La Liga", "barcelona": "La Liga", "atlético madrid": "La Liga",
    "atletico madrid": "La Liga", "sevilla": "La Liga", "real sociedad": "La Liga",
    "villarreal": "La Liga", "athletic bilbao": "La Liga", "athletic club": "La Liga",
    "real betis": "La Liga", "valencia": "La Liga", "getafe": "La Liga",
    "celta vigo": "La Liga", "osasuna": "La Liga", "girona": "La Liga",
    "mallorca": "La Liga", "las palmas": "La Liga", "rayo vallecano": "La Liga",
    "espanyol": "La Liga",
    # Serie A
    "inter milan": "Serie A", "internazionale": "Serie A",
    "internazionale milano": "Serie A", "ac milan": "Serie A",
    "juventus": "Serie A", "napoli": "Serie A", "roma": "Serie A", "lazio": "Serie A",
    "atalanta": "Serie A", "fiorentina": "Serie A", "bologna": "Serie A",
    "torino": "Serie A", "monza": "Serie A", "genoa": "Serie A",
    "lecce": "Serie A", "udinese": "Serie A", "empoli": "Serie A",
    "cagliari": "Serie A", "parma": "Serie A", "como": "Serie A", "venezia": "Serie A",
    # Bundesliga
    "bayern munich": "Bundesliga", "bayern münchen": "Bundesliga",
    "borussia dortmund": "Bundesliga", "dortmund": "Bundesliga",
    "rb leipzig": "Bundesliga", "leipzig": "Bundesliga",
    "bayer leverkusen": "Bundesliga", "bayer 04 leverkusen": "Bundesliga",
    "leverkusen": "Bundesliga", "eintracht frankfurt": "Bundesliga",
    "wolfsburg": "Bundesliga", "hoffenheim": "Bundesliga",
    "freiburg": "Bundesliga", "union berlin": "Bundesliga",
    "vfb stuttgart": "Bundesliga", "stuttgart": "Bundesliga",
    "werder bremen": "Bundesliga", "augsburg": "Bundesliga",
    "mainz 05": "Bundesliga", "mainz": "Bundesliga",
    # Ligue 1
    "paris saint-germain": "Ligue 1", "psg": "Ligue 1",
    "olympique de marseille": "Ligue 1", "marseille": "Ligue 1",
    "as monaco": "Ligue 1", "monaco": "Ligue 1",
    "olympique lyonnais": "Ligue 1", "lyon": "Ligue 1",
    "lille": "Ligue 1", "losc lille": "Ligue 1",
    "rc lens": "Ligue 1", "lens": "Ligue 1",
    "nice": "Ligue 1", "ogc nice": "Ligue 1",
    "stade rennais": "Ligue 1", "rennes": "Ligue 1",
    "strasbourg": "Ligue 1", "nantes": "Ligue 1", "montpellier": "Ligue 1",
    "toulouse": "Ligue 1", "stade de reims": "Ligue 1", "reims": "Ligue 1",
    "stade brestois": "Ligue 1", "brest": "Ligue 1",
    # Portuguese Primeira Liga
    "benfica": "Primeira Liga", "sl benfica": "Primeira Liga",
    "porto": "Primeira Liga", "fc porto": "Primeira Liga",
    "sporting cp": "Primeira Liga", "sporting": "Primeira Liga",
    "braga": "Primeira Liga", "sc braga": "Primeira Liga",
    # Eredivisie
    "ajax": "Eredivisie", "psv eindhoven": "Eredivisie", "psv": "Eredivisie",
    "feyenoord": "Eredivisie", "az alkmaar": "Eredivisie",
    "fc twente": "Eredivisie", "twente": "Eredivisie",
    # Belgian Pro League
    "club brugge": "Belgian Pro League", "genk": "Belgian Pro League",
    "anderlecht": "Belgian Pro League", "rsc anderlecht": "Belgian Pro League",
    "royal antwerp": "Belgian Pro League", "standard liège": "Belgian Pro League",
    # Turkish Super Lig
    "galatasaray": "Turkish Super Lig", "fenerbahçe": "Turkish Super Lig",
    "fenerbahce": "Turkish Super Lig", "beşiktaş": "Turkish Super Lig",
    "besiktas": "Turkish Super Lig", "trabzonspor": "Turkish Super Lig",
    # Scottish Premiership
    "celtic": "Scottish Premiership", "rangers": "Scottish Premiership",
    # Other European
    "shakhtar donetsk": "Ukrainian Premier League", "dynamo kyiv": "Ukrainian Premier League",
    "red bull salzburg": "Austrian Bundesliga", "sturm graz": "Austrian Bundesliga",
    "fc copenhagen": "Danish Superliga", "fc midtjylland": "Danish Superliga",
    "young boys": "Swiss Super League", "bsc young boys": "Swiss Super League",
    "red star belgrade": "Serbian SuperLiga", "partizan": "Serbian SuperLiga",
    "dinamo zagreb": "Croatian First League", "hajduk split": "Croatian First League",
    "slavia prague": "Czech First League", "sparta prague": "Czech First League",
    "legia warsaw": "Polish Ekstraklasa",
    # Americas
    "inter miami": "MLS", "la galaxy": "MLS", "lafc": "MLS",
    "atlanta united": "MLS", "fc cincinnati": "MLS", "columbus crew": "MLS",
    "toronto fc": "MLS", "vancouver whitecaps": "MLS",
    "river plate": "Argentine Primera", "boca juniors": "Argentine Primera",
    "racing club": "Argentine Primera",
    "flamengo": "Brasileirão", "palmeiras": "Brasileirão",
    "fluminense": "Brasileirão", "botafogo": "Brasileirão",
    "corinthians": "Brasileirão",
    "club américa": "Liga MX", "club america": "Liga MX",
    "guadalajara": "Liga MX", "monterrey": "Liga MX",
    "tigres": "Liga MX", "cruz azul": "Liga MX",
    # Asia
    "al-nassr": "Saudi Pro League", "al nassr": "Saudi Pro League",
    "al-hilal": "Saudi Pro League", "al hilal": "Saudi Pro League",
    "al-ittihad": "Saudi Pro League", "al-ahli": "Saudi Pro League",
    "al-sadd": "Qatar Stars League", "al sadd": "Qatar Stars League",
    "al-duhail": "Qatar Stars League", "al duhail": "Qatar Stars League",
    "vissel kobe": "J1 League", "urawa red diamonds": "J1 League",
    "persepolis": "Iranian Pro League", "esteghlal": "Iranian Pro League",
    # Africa
    "al ahly": "Egyptian Premier League", "zamalek": "Egyptian Premier League",
    "wydad casablanca": "Botola Pro", "wydad": "Botola Pro",
    "raja casablanca": "Botola Pro", "raja": "Botola Pro",
    "kaizer chiefs": "South African Premier League",
    "orlando pirates": "South African Premier League",
    "mamelodi sundowns": "South African Premier League",
    "tp mazembe": "Congolese Ligue 1",
}

# clubnat country code → league fallback
COUNTRY_TO_LEAGUE = {
    "ENG": "Premier League", "ESP": "La Liga", "ITA": "Serie A",
    "GER": "Bundesliga", "FRA": "Ligue 1", "POR": "Primeira Liga",
    "NED": "Eredivisie", "BEL": "Belgian Pro League", "TUR": "Turkish Super Lig",
    "SCO": "Scottish Premiership", "GRE": "Greek Super League",
    "UKR": "Ukrainian Premier League", "AUT": "Austrian Bundesliga",
    "SUI": "Swiss Super League", "DEN": "Danish Superliga",
    "CRO": "Croatian First League", "SRB": "Serbian SuperLiga",
    "POL": "Polish Ekstraklasa", "CZE": "Czech First League",
    "ROU": "Romanian SuperLiga", "SWE": "Swedish Allsvenskan",
    "NOR": "Norwegian Eliteserien",
    "USA": "MLS", "MEX": "Liga MX", "CAN": "MLS",
    "ARG": "Argentine Primera", "BRA": "Brasileirão",
    "COL": "Colombian Primera A", "ECU": "Ecuadorian Serie A",
    "URU": "Uruguayan Primera", "PAR": "Paraguayan Primera",
    "JPN": "J1 League", "KOR": "K League 1", "CHN": "Chinese Super League",
    "AUS": "A-League", "KSA": "Saudi Pro League", "QAT": "Qatar Stars League",
    "IRN": "Iranian Pro League", "IRQ": "Iraqi Premier League",
    "UAE": "UAE Pro League", "JOR": "Jordanian Pro League",
    "EGY": "Egyptian Premier League", "MAR": "Botola Pro",
    "TUN": "Tunisian Ligue 1", "ALG": "Algerian Ligue 1",
    "SEN": "Senegalese Ligue 1", "CIV": "Ivorian Ligue 1",
    "GHA": "Ghanaian Premier League", "RSA": "South African Premier League",
    "COD": "Congolese Ligue 1",
    "ISR": "Israeli Premier League", "CYP": "Cypriot First Division",
    "HUN": "Hungarian NB I",
}

CONFEDERATIONS = {
    "ARG": "CONMEBOL", "BRA": "CONMEBOL", "URU": "CONMEBOL", "COL": "CONMEBOL",
    "ECU": "CONMEBOL", "PAR": "CONMEBOL", "BOL": "CONMEBOL", "SUR": "CONMEBOL",
    "USA": "CONCACAF", "MEX": "CONCACAF", "CAN": "CONCACAF", "PAN": "CONCACAF",
    "JAM": "CONCACAF", "HAI": "CONCACAF", "CUW": "CONCACAF",
    "ENG": "UEFA", "FRA": "UEFA", "ESP": "UEFA", "GER": "UEFA", "POR": "UEFA",
    "NED": "UEFA", "BEL": "UEFA", "ITA": "UEFA", "CRO": "UEFA", "DEN": "UEFA",
    "SUI": "UEFA", "AUT": "UEFA", "UKR": "UEFA", "POL": "UEFA", "SCO": "UEFA",
    "TUR": "UEFA", "NOR": "UEFA", "WAL": "UEFA", "BIH": "UEFA", "NIR": "UEFA",
    "SWE": "UEFA", "ALB": "UEFA", "ROU": "UEFA", "SVK": "UEFA", "KOS": "UEFA",
    "CZE": "UEFA", "IRL": "UEFA", "MKD": "UEFA",
    "JPN": "AFC", "KOR": "AFC", "AUS": "AFC", "IRN": "AFC", "KSA": "AFC",
    "QAT": "AFC", "UZB": "AFC", "IRQ": "AFC", "JOR": "AFC",
    "MAR": "CAF", "SEN": "CAF", "GHA": "CAF", "EGY": "CAF",
    "TUN": "CAF", "ALG": "CAF", "CIV": "CAF", "COD": "CAF",
    "RSA": "CAF", "CPV": "CAF",
    "NZL": "OFC", "NCL": "OFC",
}


def get_league(club: str, clubnat: str) -> str:
    """Resolve league from club name and/or clubnat country code."""
    if not club or club == "Unknown":
        return COUNTRY_TO_LEAGUE.get(clubnat, "Unknown") if clubnat else "Unknown"

    normalized = club.lower().strip()
    if normalized in CLUB_LEAGUES:
        return CLUB_LEAGUES[normalized]

    # Substring match (only for longer keys to avoid false positives)
    for name, league in CLUB_LEAGUES.items():
        if len(name) >= 5 and name in normalized:
            return league

    if clubnat and clubnat in COUNTRY_TO_LEAGUE:
        return COUNTRY_TO_LEAGUE[clubnat]
    return "Unknown"


# ─── Wikipedia API ───────────────────────────────────────────────────

def fetch_json(url: str) -> dict:
    """Fetch a URL and parse as JSON."""
    req = urllib.request.Request(url, headers={
        "User-Agent": "WC2026SimBot/1.0 (squad data for hobby project)",
        "Accept": "application/json",
    })
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def fetch_sections(wiki_page: str) -> list:
    url = f"https://en.wikipedia.org/w/api.php?action=parse&page={wiki_page}&prop=sections&format=json"
    data = fetch_json(url)
    if "error" in data:
        raise RuntimeError(data["error"]["info"])
    return data["parse"]["sections"]


def fetch_section_wikitext(wiki_page: str, section_index) -> str:
    url = f"https://en.wikipedia.org/w/api.php?action=parse&page={wiki_page}&section={section_index}&prop=wikitext&format=json"
    data = fetch_json(url)
    if "error" in data:
        raise RuntimeError(data["error"]["info"])
    return data["parse"]["wikitext"]["*"]


# ─── Wikitext parsing ────────────────────────────────────────────────

def parse_birth_age(age_str: str) -> int | None:
    """Extract age from {{bda|Y|M|D}} or {{Birth date and age|...}} template."""
    if not age_str:
        return None
    m = re.search(r"(\d{4})\|(\d{1,2})\|(\d{1,2})", age_str)
    if m:
        year, month, day = int(m[1]), int(m[2]), int(m[3])
        if 1970 < year < 2010:
            today = date.today()
            age = today.year - year
            if (today.month, today.day) < (month, day):
                age -= 1
            return age
    return None


def parse_club_name(club_str: str) -> str:
    if not club_str:
        return "Unknown"
    # [[Full Name|Display]] → Display
    m = re.search(r"\[\[([^|]*)\|([^\]]*)\]\]", club_str)
    if m:
        return m.group(2).strip()
    # [[Simple Name]]
    m = re.search(r"\[\[([^\]]*)\]\]", club_str)
    if m:
        return m.group(1).strip()
    return club_str.strip() or "Unknown"


def parse_player_name(name_str: str) -> str | None:
    if not name_str:
        return None
    # {{sortname|First|Last}}
    m = re.search(r"\{\{sortname\|([^|]+)\|([^|}]+)", name_str, re.IGNORECASE)
    if m:
        return f"{m.group(1).strip()} {m.group(2).strip()}"
    # {{ill|Name|lang}}
    m = re.search(r"\{\{ill\|([^|]+)\|", name_str, re.IGNORECASE)
    if m:
        return m.group(1).strip()
    # [[Full Name (x)|Display]]
    m = re.search(r"\[\[([^|]*)\|([^\]]*)\]\]", name_str)
    if m:
        full = re.sub(r"\s*\(.*?\)\s*$", "", m.group(1)).strip()
        display = m.group(2).strip()
        return full if len(full) >= len(display) else display
    # [[Simple Name]]
    m = re.search(r"\[\[([^\]]*)\]\]", name_str)
    if m:
        return re.sub(r"\s*\(.*?\)\s*$", "", m.group(1)).strip()
    return name_str.strip() or None


def normalize_position(pos: str) -> str:
    if not pos:
        return "MF"
    pos = pos.upper().strip()
    if pos in ("GK", "DF", "MF", "FW"):
        return pos
    return "MF"


def parse_template_params(params: str) -> dict:
    """Parse key=value pairs from wikitext template, respecting nested {{ }} and [[ ]]."""
    fields = {}
    brace_depth = 0
    bracket_depth = 0
    key = ""
    val = ""
    in_key = True

    for ch in params:
        if ch == "{":
            brace_depth += 1; val += ch; continue
        if ch == "}":
            brace_depth -= 1; val += ch; continue
        if ch == "[":
            bracket_depth += 1; val += ch; continue
        if ch == "]":
            bracket_depth -= 1; val += ch; continue

        if brace_depth == 0 and bracket_depth == 0 and ch == "|":
            if key.strip():
                fields[key.strip().lower()] = val.strip()
            key = ""; val = ""; in_key = True; continue

        if brace_depth == 0 and bracket_depth == 0 and ch == "=" and in_key:
            in_key = False; continue

        if in_key:
            key += ch
        else:
            val += ch

    if key.strip():
        fields[key.strip().lower()] = val.strip()
    return fields


def parse_squad_from_wikitext(wikitext: str, country: str) -> list:
    """Extract player data from {{nat fs g player|...}} templates."""
    import random

    players = []
    coords = CAPITAL_COORDS.get(country, (0, 0, "Unknown"))

    for m in re.finditer(r"\{\{nat fs(?: g)? player\s*\|", wikitext, re.IGNORECASE):
        # Brace-counting to find end of template
        start = m.end()
        depth = 2
        i = start
        while i < len(wikitext) and depth > 0:
            if wikitext[i:i+2] == "{{":
                depth += 2; i += 2; continue
            if wikitext[i:i+2] == "}}":
                depth -= 2; i += 2; continue
            i += 1
        params = wikitext[start:i-2]
        fields = parse_template_params(params)

        name = parse_player_name(fields.get("name"))
        if not name:
            continue
        if any(p["name"] == name for p in players):
            continue
        if len(players) >= 30:
            break

        pos = normalize_position(fields.get("pos"))
        club = parse_club_name(fields.get("club"))
        clubnat = (fields.get("clubnat", "")).strip().upper()
        age = parse_birth_age(fields.get("age"))
        league = get_league(club, clubnat)

        players.append({
            "name": name,
            "position": pos,
            "club": club,
            "league": league,
            "age": age or random.randint(22, 29),
            "birthplace": {
                "city": coords[2],
                "country": country,
                "lat": round(coords[0] + (random.random() - 0.5) * 2, 4),
                "lng": round(coords[1] + (random.random() - 0.5) * 2, 4),
            },
        })

    return players


def generate_default_squad(country: str) -> list:
    import random
    positions = (["GK"] * 3 + ["DF"] * 8 + ["MF"] * 6 + ["FW"] * 6)
    coords = CAPITAL_COORDS.get(country, (0, 0, "Unknown"))
    return [
        {
            "name": f"Player {i+1}",
            "position": pos,
            "club": "Unknown",
            "league": "Unknown",
            "age": random.randint(22, 31),
            "birthplace": {
                "city": coords[2],
                "country": country,
                "lat": round(coords[0] + (random.random() - 0.5) * 2, 4),
                "lng": round(coords[1] + (random.random() - 0.5) * 2, 4),
            },
        }
        for i, pos in enumerate(positions)
    ]


# ─── Fetch one team ─────────────────────────────────────────────────

def fetch_team_squad(team: dict) -> list:
    """Fetch squad for one team from Wikipedia. Returns list of player dicts."""
    print(f"Fetching {team['name']} ({team['code']})...")

    try:
        sections = fetch_sections(team["wiki"])

        # Find squad section
        squad_keywords = ["current squad", "squad", "current roster", "roster", "players"]
        section_idx = None

        for keyword in squad_keywords:
            for s in sections:
                if s["line"].lower().strip() == keyword:
                    section_idx = s["index"]; break
            if section_idx:
                break

        if not section_idx:
            for keyword in squad_keywords:
                for s in sections:
                    if keyword in s["line"].lower():
                        section_idx = s["index"]; break
                if section_idx:
                    break

        if not section_idx:
            print(f"  ⚠ No squad section found, scanning all sections...")
            for s in sections:
                wt = fetch_section_wikitext(team["wiki"], s["index"])
                if re.search(r"\{\{nat fs(?: g)? player", wt, re.IGNORECASE):
                    section_idx = s["index"]
                    print(f"  → Found players in section \"{s['line']}\"")
                    break
                time.sleep(0.2)

        if not section_idx:
            print(f"  ✗ No squad data found, using defaults")
            return generate_default_squad(team["country"])

        wikitext = fetch_section_wikitext(team["wiki"], section_idx)
        players = parse_squad_from_wikitext(wikitext, team["country"])

        # If too few, scan adjacent sections
        if len(players) < 11:
            print(f"  ⚠ Only {len(players)} players, scanning adjacent...")
            idx = int(section_idx)
            for delta in range(1, 4):
                for offset in (delta, -delta):
                    try_idx = idx + offset
                    if try_idx < 1 or try_idx > len(sections):
                        continue
                    try:
                        extra_wt = fetch_section_wikitext(team["wiki"], try_idx)
                        extra = parse_squad_from_wikitext(extra_wt, team["country"])
                        names = {p["name"] for p in players}
                        players.extend(p for p in extra if p["name"] not in names)
                    except Exception:
                        pass
                    time.sleep(0.2)
                if len(players) >= 11:
                    break

        if len(players) < 11:
            print(f"  ✗ Only {len(players)} players, using defaults")
            return generate_default_squad(team["country"])

        print(f"  ✓ {len(players)} players")
        return players

    except Exception as e:
        print(f"  ✗ Error: {e}")
        return generate_default_squad(team["country"])


# ─── Output generation ───────────────────────────────────────────────

def generate_output(squad_data: dict) -> str:
    """Generate teams-data.js content."""
    # Read the league weights and helpers from the Node.js scraper output format
    today = date.today().isoformat()

    league_weights = {
        "Premier League": {"tier": 1, "weight": 100},
        "La Liga": {"tier": 1, "weight": 95},
        "Serie A": {"tier": 1, "weight": 90},
        "Bundesliga": {"tier": 1, "weight": 88},
        "Ligue 1": {"tier": 1, "weight": 85},
        "Primeira Liga": {"tier": 2, "weight": 70},
        "Eredivisie": {"tier": 2, "weight": 68},
        "Belgian Pro League": {"tier": 2, "weight": 60},
        "Scottish Premiership": {"tier": 2, "weight": 55},
        "Argentine Primera": {"tier": 2, "weight": 65},
        "Brasileirão": {"tier": 2, "weight": 70},
        "Turkish Super Lig": {"tier": 3, "weight": 52},
        "Ukrainian Premier League": {"tier": 3, "weight": 45},
        "Austrian Bundesliga": {"tier": 3, "weight": 48},
        "Swiss Super League": {"tier": 3, "weight": 47},
        "Danish Superliga": {"tier": 3, "weight": 46},
        "Greek Super League": {"tier": 3, "weight": 45},
        "Croatian First League": {"tier": 3, "weight": 42},
        "Serbian SuperLiga": {"tier": 3, "weight": 40},
        "Polish Ekstraklasa": {"tier": 3, "weight": 42},
        "Czech First League": {"tier": 3, "weight": 42},
        "Romanian SuperLiga": {"tier": 3, "weight": 40},
        "Swedish Allsvenskan": {"tier": 3, "weight": 40},
        "Norwegian Eliteserien": {"tier": 3, "weight": 40},
        "Liga MX": {"tier": 3, "weight": 55},
        "MLS": {"tier": 3, "weight": 50},
        "Saudi Pro League": {"tier": 3, "weight": 55},
        "J1 League": {"tier": 4, "weight": 45},
        "K League 1": {"tier": 4, "weight": 43},
        "Qatar Stars League": {"tier": 4, "weight": 42},
        "Iranian Pro League": {"tier": 4, "weight": 40},
        "Iraqi Premier League": {"tier": 4, "weight": 35},
        "Jordanian Pro League": {"tier": 4, "weight": 33},
        "Egyptian Premier League": {"tier": 4, "weight": 38},
        "Botola Pro": {"tier": 4, "weight": 36},
        "Tunisian Ligue 1": {"tier": 4, "weight": 35},
        "Algerian Ligue 1": {"tier": 4, "weight": 34},
        "Senegalese Ligue 1": {"tier": 4, "weight": 32},
        "Ivorian Ligue 1": {"tier": 4, "weight": 32},
        "Ghanaian Premier League": {"tier": 4, "weight": 32},
        "South African Premier League": {"tier": 4, "weight": 35},
        "Congolese Ligue 1": {"tier": 4, "weight": 30},
        "Colombian Primera A": {"tier": 3, "weight": 50},
        "Ecuadorian Serie A": {"tier": 4, "weight": 40},
        "Uruguayan Primera": {"tier": 4, "weight": 42},
        "Paraguayan Primera": {"tier": 4, "weight": 38},
        "A-League": {"tier": 4, "weight": 40},
        "Chinese Super League": {"tier": 4, "weight": 38},
        "UAE Pro League": {"tier": 4, "weight": 40},
        "Hungarian NB I": {"tier": 4, "weight": 35},
        "Israeli Premier League": {"tier": 4, "weight": 38},
        "Cypriot First Division": {"tier": 4, "weight": 33},
        "Welsh Premier League": {"tier": 5, "weight": 28},
        "NIFL Premiership": {"tier": 5, "weight": 28},
        "Finnish Veikkausliiga": {"tier": 4, "weight": 33},
        "Bulgarian First League": {"tier": 4, "weight": 33},
        "Unknown": {"tier": 5, "weight": 30},
    }

    lw_json = json.dumps(league_weights, indent=4)
    sd_json = json.dumps(squad_data, indent=4, ensure_ascii=False)

    return f"""// FIFA World Cup 2026 - Teams Data
// Auto-generated from Wikipedia on {today}
// Run 'node scripts/fetch-squads.js' or 'python scripts/update-squads.py' to regenerate

const leagueWeights = {lw_json};

const squadData = {sd_json};

// Helper functions
function calculateSquadStrength(teamCode) {{
    const team = squadData[teamCode];
    if (!team) return 0;
    let total = 0;
    team.players.forEach(player => {{
        const leagueInfo = leagueWeights[player.league] || leagueWeights["Unknown"];
        total += leagueInfo.weight;
    }});
    return Math.round(total / team.players.length);
}}

function getLeagueDistribution(teamCode) {{
    const team = squadData[teamCode];
    if (!team) return {{}};
    const dist = {{}};
    team.players.forEach(player => {{
        dist[player.league] = (dist[player.league] || 0) + 1;
    }});
    return dist;
}}

function getAgeDistribution(teamCode) {{
    const team = squadData[teamCode];
    if (!team) return {{}};
    const ranges = {{ "17-21": 0, "22-25": 0, "26-29": 0, "30-33": 0, "34+": 0 }};
    team.players.forEach(player => {{
        const age = player.age;
        if (age <= 21) ranges["17-21"]++;
        else if (age <= 25) ranges["22-25"]++;
        else if (age <= 29) ranges["26-29"]++;
        else if (age <= 33) ranges["30-33"]++;
        else ranges["34+"]++;
    }});
    return ranges;
}}

function getAverageAge(teamCode) {{
    const team = squadData[teamCode];
    if (!team) return "0";
    const total = team.players.reduce((sum, p) => sum + p.age, 0);
    return (total / team.players.length).toFixed(1);
}}

function getBirthplaceData(teamCode) {{
    const team = squadData[teamCode];
    if (!team) return [];
    return team.players.map(player => ({{
        name: player.name,
        ...player.birthplace
    }}));
}}
"""


# ─── Main ────────────────────────────────────────────────────────────

def main():
    import random
    random.seed(42)  # Reproducible birthplace offsets

    dry_run = "--dry-run" in sys.argv
    filter_codes = [a.upper() for a in sys.argv[1:] if not a.startswith("--")]

    if filter_codes:
        teams_to_fetch = [t for t in TEAMS if t["code"] in filter_codes]
        missing = set(filter_codes) - {t["code"] for t in teams_to_fetch}
        if missing:
            print(f"Unknown team codes: {', '.join(missing)}")
            sys.exit(1)
    else:
        teams_to_fetch = TEAMS

    print("=" * 60)
    print("Fetching World Cup 2026 Squad Data from Wikipedia (Python)")
    print("=" * 60)
    print(f"Teams to fetch: {len(teams_to_fetch)}")
    if dry_run:
        print("DRY RUN — will not write file")
    print()

    # If updating specific teams, load existing data first
    output_path = Path(__file__).parent.parent / "teams-data.js"
    squad_data = {}
    if filter_codes and output_path.exists():
        # Parse existing squadData from JS file
        content = output_path.read_text()
        m = re.search(r"const squadData = ({[\s\S]+?});\s*\n\s*// Helper", content)
        if m:
            squad_data = json.loads(m.group(1))
            print(f"Loaded existing data for {len(squad_data)} teams")

    success = 0
    defaults = 0

    for i, team in enumerate(teams_to_fetch):
        players = fetch_team_squad(team)
        is_default = any(p["name"].startswith("Player ") for p in players[:1])

        squad_data[team["code"]] = {
            "name": team["name"],
            "flag": team["flag"],
            "confederation": CONFEDERATIONS.get(team["code"], "UEFA"),
            "fifaRanking": i + 1,
            "players": players,
        }

        if is_default:
            defaults += 1
        else:
            success += 1

        time.sleep(0.4)  # Rate limit

    if not dry_run:
        output = generate_output(squad_data)
        output_path.write_text(output, encoding="utf-8")

    print()
    print("=" * 60)
    if not dry_run:
        print(f"Done! Saved to {output_path.name}")
    else:
        print("Done! (dry run, no file written)")
    print(f"Total teams: {len(squad_data)}")
    print(f"Successfully scraped: {success}")
    print(f"Using defaults: {defaults}")

    total = sum(len(t["players"]) for t in squad_data.values())
    with_clubs = sum(1 for t in squad_data.values() for p in t["players"] if p["club"] != "Unknown")
    with_leagues = sum(1 for t in squad_data.values() for p in t["players"] if p["league"] != "Unknown")
    print(f"Total players: {total}")
    print(f"Players with clubs: {with_clubs} ({with_clubs/total*100:.1f}%)")
    print(f"Players with leagues: {with_leagues} ({with_leagues/total*100:.1f}%)")
    print("=" * 60)


if __name__ == "__main__":
    main()
