// FIFA World Cup 2026 - Teams Data
// Auto-generated from Wikipedia on 2026-04-02
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

const squadData = {
    "MEX": {
        "name": "Mexico",
        "flag": "🇲🇽",
        "confederation": "CONCACAF",
        "fifaRanking": 1,
        "players": [
            {
                "name": "Raúl Rangel",
                "position": "GK",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 26,
                "birthplace": {
                    "city": "Zapotlán el Grande Municipality",
                    "country": "Mexico",
                    "lat": 19.7,
                    "lng": -103.5167
                }
            },
            {
                "name": "Carlos Acevedo",
                "position": "GK",
                "club": "Santos Laguna",
                "league": "Liga MX",
                "age": 29,
                "birthplace": {
                    "city": "Torreón",
                    "country": "Mexico",
                    "lat": 25.5439,
                    "lng": -103.419
                }
            },
            {
                "name": "Guillermo Ochoa",
                "position": "GK",
                "club": "AEL Limassol",
                "league": "Cypriot First Division",
                "age": 40,
                "birthplace": {
                    "city": "Guadalajara",
                    "country": "Mexico",
                    "lat": 20.6764,
                    "lng": -103.3422
                }
            },
            {
                "name": "Jorge Sánchez",
                "position": "DF",
                "club": "PAOK",
                "league": "Greek Super League",
                "age": 28,
                "birthplace": {
                    "city": "Torreón",
                    "country": "Mexico",
                    "lat": 25.5439,
                    "lng": -103.419
                }
            },
            {
                "name": "César Montes",
                "position": "DF",
                "club": "Lokomotiv Moscow",
                "league": "Russian Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Hermosillo",
                    "country": "Mexico",
                    "lat": 29.075,
                    "lng": -110.9583
                }
            },
            {
                "name": "Johan Vásquez",
                "position": "DF",
                "club": "Genoa",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Navojoa",
                    "country": "Mexico",
                    "lat": 27.0817,
                    "lng": -109.4456
                }
            },
            {
                "name": "Israel Reyes",
                "position": "DF",
                "club": "América",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Autlán de Navarro Municipality",
                    "country": "Mexico",
                    "lat": 19.75,
                    "lng": -104.3
                }
            },
            {
                "name": "Everardo López",
                "position": "DF",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 21,
                "birthplace": {
                    "city": "Mexico City",
                    "country": "Mexico",
                    "lat": 19.8096,
                    "lng": -99.2022
                }
            },
            {
                "name": "Richard Ledezma",
                "position": "DF",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Phoenix",
                    "country": "United States",
                    "lat": 33.4483,
                    "lng": -112.0739
                }
            },
            {
                "name": "Jesús Gallardo",
                "position": "DF",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 31,
                "birthplace": {
                    "city": "Cárdenas",
                    "country": "Mexico",
                    "lat": 17.9894,
                    "lng": -93.3769
                }
            },
            {
                "name": "Jesús Alberto Angulo",
                "position": "DF",
                "club": "UANL",
                "league": "Liga MX",
                "age": 28,
                "birthplace": {
                    "city": "Culiacán",
                    "country": "Mexico",
                    "lat": 24.7903,
                    "lng": -107.3878
                }
            },
            {
                "name": "Érik Lira",
                "position": "MF",
                "club": "Cruz Azul",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Cuauhtémoc",
                    "country": "Mexico",
                    "lat": 19.4431,
                    "lng": -99.1447
                }
            },
            {
                "name": "Carlos Rodríguez",
                "position": "MF",
                "club": "Cruz Azul",
                "league": "Liga MX",
                "age": 29,
                "birthplace": {
                    "city": "San Nicolás de los Garza",
                    "country": "Mexico",
                    "lat": 25.7555,
                    "lng": -100.2896
                }
            },
            {
                "name": "Érick Sánchez",
                "position": "MF",
                "club": "América",
                "league": "Liga MX",
                "age": 26,
                "birthplace": {
                    "city": "Gustavo A. Madero",
                    "country": "Mexico",
                    "lat": 19.4841,
                    "lng": -99.1114
                }
            },
            {
                "name": "Orbelín Pineda",
                "position": "MF",
                "club": "AEK Athens",
                "league": "Greek Super League",
                "age": 30,
                "birthplace": {
                    "city": "Coyuca de Catalán Municipality",
                    "country": "Mexico",
                    "lat": 18.0888,
                    "lng": -100.9149
                }
            },
            {
                "name": "Obed Vargas",
                "position": "MF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "Anchorage",
                    "country": "United States",
                    "lat": 61.2167,
                    "lng": -149.8936
                }
            },
            {
                "name": "Álvaro Fidalgo",
                "position": "MF",
                "club": "Betis",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Oviedo",
                    "country": "Spain",
                    "lat": 43.3625,
                    "lng": -5.8503
                }
            },
            {
                "name": "Denzell García",
                "position": "MF",
                "club": "Juárez",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Los Mochis",
                    "country": "Mexico",
                    "lat": 25.7936,
                    "lng": -108.9969
                }
            },
            {
                "name": "Brian Gutiérrez",
                "position": "MF",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Berwyn",
                    "country": "United States",
                    "lat": 41.8433,
                    "lng": -87.7909
                }
            },
            {
                "name": "Germán Berterame",
                "position": "FW",
                "club": "Inter Miami",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Villa María",
                    "country": "Argentina",
                    "lat": -32.4103,
                    "lng": -63.2314
                }
            },
            {
                "name": "Raúl Jiménez",
                "position": "FW",
                "club": "Fulham",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Tepeji del Río de Ocampo Municipality",
                    "country": "Mexico",
                    "lat": 19.9053,
                    "lng": -99.3417
                }
            },
            {
                "name": "Alexis Vega",
                "position": "FW",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 28,
                "birthplace": {
                    "city": "Cuauhtémoc",
                    "country": "Mexico",
                    "lat": 19.4431,
                    "lng": -99.1447
                }
            },
            {
                "name": "Guillermo Martínez",
                "position": "FW",
                "club": "UNAM",
                "league": "Liga MX",
                "age": 31,
                "birthplace": {
                    "city": "Celaya",
                    "country": "Mexico",
                    "lat": 20.5289,
                    "lng": -100.815
                }
            },
            {
                "name": "Julián Quiñones",
                "position": "FW",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Magüí Payán",
                    "country": "Colombia",
                    "lat": 1.7658,
                    "lng": -78.1828
                }
            },
            {
                "name": "Roberto Alvarado",
                "position": "FW",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 27,
                "birthplace": {
                    "city": "Salamanca",
                    "country": "Mexico",
                    "lat": 20.569,
                    "lng": -101.1996
                }
            },
            {
                "name": "Armando González",
                "position": "FW",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Mexico City",
                    "country": "Mexico",
                    "lat": 19.5454,
                    "lng": -98.4415
                }
            }
        ]
    },
    "RSA": {
        "name": "South Africa",
        "flag": "🇿🇦",
        "confederation": "CAF",
        "fifaRanking": 2,
        "players": [
            {
                "name": "Ronwen Williams",
                "position": "GK",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Gqeberha",
                    "country": "South Africa",
                    "lat": -33.9581,
                    "lng": 25.6
                }
            },
            {
                "name": "Renaldo Leaner",
                "position": "GK",
                "club": "Sekhukhune United",
                "league": "South African Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.0077,
                    "lng": 27.8918
                }
            },
            {
                "name": "Ricardo Goss",
                "position": "GK",
                "club": "Siwelele",
                "league": "South African Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Durban",
                    "country": "South Africa",
                    "lat": -29.8583,
                    "lng": 31.025
                }
            },
            {
                "name": "Sipho Chaine",
                "position": "GK",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.6166,
                    "lng": 27.7395
                }
            },
            {
                "name": "Darren Johnson",
                "position": "GK",
                "club": "AmaZulu",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.2521,
                    "lng": 27.0609
                }
            },
            {
                "name": "Thabang Matuludi",
                "position": "DF",
                "club": "Polokwane City",
                "league": "South African Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.2114,
                    "lng": 27.2783
                }
            },
            {
                "name": "Khulumani Ndamane",
                "position": "DF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.5228,
                    "lng": 28.3398
                }
            },
            {
                "name": "Aubrey Modiba",
                "position": "DF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Polokwane",
                    "country": "South Africa",
                    "lat": -23.9,
                    "lng": 29.45
                }
            },
            {
                "name": "Mbekezeli Mbokazi",
                "position": "DF",
                "club": "Chicago Fire FC",
                "league": "MLS",
                "age": 20,
                "birthplace": {
                    "city": "Hluhluwe",
                    "country": "South Africa",
                    "lat": -28.0189,
                    "lng": 32.2675
                }
            },
            {
                "name": "Samukele Kabini",
                "position": "DF",
                "club": "Molde",
                "league": "Norwegian Eliteserien",
                "age": 22,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.6468,
                    "lng": 27.3509
                }
            },
            {
                "name": "Nkosinathi Sibisi",
                "position": "DF",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Durban",
                    "country": "South Africa",
                    "lat": -29.8583,
                    "lng": 31.025
                }
            },
            {
                "name": "Khuliso Mudau",
                "position": "DF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Musina",
                    "country": "South Africa",
                    "lat": -22.3381,
                    "lng": 30.0417
                }
            },
            {
                "name": "Ime Okon",
                "position": "DF",
                "club": "Hannover 96",
                "league": "2. Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "South Africa",
                    "country": "South Africa",
                    "lat": -29,
                    "lng": 24
                }
            },
            {
                "name": "Deano van Rooyen",
                "position": "DF",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.7068,
                    "lng": 27.3487
                }
            },
            {
                "name": "Tylon Smith",
                "position": "DF",
                "club": "Queens Park Rangers",
                "league": "EFL Championship",
                "age": 20,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.2631,
                    "lng": 28.2385
                }
            },
            {
                "name": "Vuyo Letlapa",
                "position": "DF",
                "club": "Sekhukhune United",
                "league": "South African Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.7783,
                    "lng": 28.8697
                }
            },
            {
                "name": "Olwethu Makhanya",
                "position": "DF",
                "club": "Philadelphia Union",
                "league": "MLS",
                "age": 21,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.5191,
                    "lng": 28.5441
                }
            },
            {
                "name": "Teboho Mokoena",
                "position": "MF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Bethlehem",
                    "country": "South Africa",
                    "lat": -28.2333,
                    "lng": 28.3
                }
            },
            {
                "name": "Thalente Mbatha",
                "position": "MF",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.7319,
                    "lng": 27.3437
                }
            },
            {
                "name": "Themba Zwane",
                "position": "MF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 36,
                "birthplace": {
                    "city": "Thembisa",
                    "country": "South Africa",
                    "lat": -26.0055,
                    "lng": 28.2102
                }
            },
            {
                "name": "Sphephelo Sithole",
                "position": "MF",
                "club": "Tondela",
                "league": "Primeira Liga",
                "age": 27,
                "birthplace": {
                    "city": "Durban",
                    "country": "South Africa",
                    "lat": -29.8583,
                    "lng": 31.025
                }
            },
            {
                "name": "Jayden Adams",
                "position": "MF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cape Town",
                    "country": "South Africa",
                    "lat": -33.9253,
                    "lng": 18.4239
                }
            },
            {
                "name": "Luke Le Roux",
                "position": "MF",
                "club": "Portsmouth",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Soweto",
                    "country": "South Africa",
                    "lat": -26.2678,
                    "lng": 27.8586
                }
            },
            {
                "name": "Ndamulelo Maphangule",
                "position": "MF",
                "club": "Polokwane City",
                "league": "South African Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.5335,
                    "lng": 27.4756
                }
            },
            {
                "name": "Mthetheleli Mthiyane",
                "position": "MF",
                "club": "Stellenbosch",
                "league": "South African Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.7913,
                    "lng": 27.4074
                }
            },
            {
                "name": "Oswin Appollis",
                "position": "FW",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Bishop Lavis",
                    "country": "South Africa",
                    "lat": -33.9486,
                    "lng": 18.5758
                }
            },
            {
                "name": "Tshepang Moremi",
                "position": "FW",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Sharpeville",
                    "country": "South Africa",
                    "lat": -26.6667,
                    "lng": 27.8667
                }
            },
            {
                "name": "Lyle Foster",
                "position": "FW",
                "club": "Burnley",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Soweto",
                    "country": "South Africa",
                    "lat": -26.2678,
                    "lng": 27.8586
                }
            },
            {
                "name": "Relebohile Mofokeng",
                "position": "FW",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Sharpeville",
                    "country": "South Africa",
                    "lat": -26.6667,
                    "lng": 27.8667
                }
            },
            {
                "name": "Thapelo Maseko",
                "position": "FW",
                "club": "AEL Limassol",
                "league": "Cypriot First Division",
                "age": 22,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.0236,
                    "lng": 28.6255
                }
            }
        ]
    },
    "KOR": {
        "name": "South Korea",
        "flag": "🇰🇷",
        "confederation": "AFC",
        "fifaRanking": 3,
        "players": [
            {
                "name": "Kim Seung-gyu",
                "position": "GK",
                "club": "FC Tokyo",
                "league": "J1 League",
                "age": 35,
                "birthplace": {
                    "city": "Ulsan",
                    "country": "South Korea",
                    "lat": 35.55,
                    "lng": 129.3167
                }
            },
            {
                "name": "Song Bum-keun",
                "position": "GK",
                "club": "Jeonbuk Hyundai Motors",
                "league": "K League 1",
                "age": 28,
                "birthplace": {
                    "city": "Seongnam",
                    "country": "South Korea",
                    "lat": 37.4386,
                    "lng": 127.1378
                }
            },
            {
                "name": "Jo Hyeon-woo",
                "position": "GK",
                "club": "Ulsan HD",
                "league": "K League 1",
                "age": 34,
                "birthplace": {
                    "city": "Seoul",
                    "country": "South Korea",
                    "lat": 37.56,
                    "lng": 126.99
                }
            },
            {
                "name": "Lee Han-beom",
                "position": "DF",
                "club": "Midtjylland",
                "league": "Danish Superliga",
                "age": 23,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Kim Ju-sung",
                "position": "DF",
                "club": "Sanfrecce Hiroshima",
                "league": "J1 League",
                "age": 25,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Kim Min-jae",
                "position": "DF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Tongyeong",
                    "country": "South Korea",
                    "lat": 34.8458,
                    "lng": 128.4236
                }
            },
            {
                "name": "Lee Tae-seok",
                "position": "DF",
                "club": "Austria Wien",
                "league": "Austrian Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Cho Yu-min",
                "position": "DF",
                "club": "Sharjah",
                "league": "UAE Pro League",
                "age": 29,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Kim Moon-hwan",
                "position": "DF",
                "club": "Daejeon Hana Citizen",
                "league": "K League 1",
                "age": 30,
                "birthplace": {
                    "city": "Hwaseong",
                    "country": "South Korea",
                    "lat": 37.2,
                    "lng": 126.7667
                }
            },
            {
                "name": "Seol Young-woo",
                "position": "DF",
                "club": "Red Star Belgrade",
                "league": "Serbian SuperLiga",
                "age": 27,
                "birthplace": {
                    "city": "Ulsan",
                    "country": "South Korea",
                    "lat": 35.55,
                    "lng": 129.3167
                }
            },
            {
                "name": "Kim Tae-hyeon",
                "position": "DF",
                "club": "Kashima Antlers",
                "league": "J1 League",
                "age": 25,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Hong Hyun-seok",
                "position": "MF",
                "club": "Gent",
                "league": "Belgian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Paik Seung-ho",
                "position": "MF",
                "club": "Birmingham City",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Suwon",
                    "country": "South Korea",
                    "lat": 37.2858,
                    "lng": 127.01
                }
            },
            {
                "name": "Lee Jae-sung",
                "position": "MF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 33,
                "birthplace": {
                    "city": "Ulsan",
                    "country": "South Korea",
                    "lat": 35.55,
                    "lng": 129.3167
                }
            },
            {
                "name": "Hwang Hee-chan",
                "position": "MF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Chuncheon",
                    "country": "South Korea",
                    "lat": 37.8747,
                    "lng": 127.7342
                }
            },
            {
                "name": "Park Jin-seob",
                "position": "MF",
                "club": "Zhejiang FC",
                "league": "Chinese Super League",
                "age": 30,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Eom Ji-sung",
                "position": "MF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Gimje",
                    "country": "South Korea",
                    "lat": 35.8017,
                    "lng": 126.8889
                }
            },
            {
                "name": "Lee Kang-in",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Incheon",
                    "country": "South Korea",
                    "lat": 37.4639,
                    "lng": 126.6486
                }
            },
            {
                "name": "Yang Hyun-jun",
                "position": "MF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 23,
                "birthplace": {
                    "city": "Busan",
                    "country": "South Korea",
                    "lat": 35.18,
                    "lng": 129.075
                }
            },
            {
                "name": "Kim Jin-gyu",
                "position": "MF",
                "club": "Jeonbuk Hyundai Motors",
                "league": "K League 1",
                "age": 29,
                "birthplace": {
                    "city": "Pohang",
                    "country": "South Korea",
                    "lat": 36.0322,
                    "lng": 129.365
                }
            },
            {
                "name": "Kwon Hyeok-kyu",
                "position": "MF",
                "club": "Karlsruher SC",
                "league": "2. Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Bae Jun-ho",
                "position": "MF",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 22,
                "birthplace": {
                    "city": "Daegu",
                    "country": "South Korea",
                    "lat": 35.8717,
                    "lng": 128.6017
                }
            },
            {
                "name": "Son Heung-min",
                "position": "FW",
                "club": "Los Angeles FC",
                "league": "MLS",
                "age": 33,
                "birthplace": {
                    "city": "Chuncheon",
                    "country": "South Korea",
                    "lat": 37.8747,
                    "lng": 127.7342
                }
            },
            {
                "name": "Cho Gue-sung",
                "position": "FW",
                "club": "Midtjylland",
                "league": "Danish Superliga",
                "age": 28,
                "birthplace": {
                    "city": "Ansan",
                    "country": "South Korea",
                    "lat": 37.3236,
                    "lng": 126.8219
                }
            },
            {
                "name": "Oh Hyeon-gyu",
                "position": "FW",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 24,
                "birthplace": {
                    "city": "Namyangju",
                    "country": "South Korea",
                    "lat": 37.6367,
                    "lng": 127.2142
                }
            }
        ]
    },
    "CZE": {
        "name": "Czechia",
        "flag": "🇨🇿",
        "confederation": "UEFA",
        "fifaRanking": 4,
        "players": [
            {
                "name": "Matěj Kovář",
                "position": "GK",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "Uherské Hradiště",
                    "country": "Czech Republic",
                    "lat": 49.0698,
                    "lng": 17.4597
                }
            },
            {
                "name": "Martin Jedlička",
                "position": "GK",
                "club": "Baník Ostrava",
                "league": "Czech First League",
                "age": 28,
                "birthplace": {
                    "city": "Příbram",
                    "country": "Czech Republic",
                    "lat": 49.69,
                    "lng": 14.0105
                }
            },
            {
                "name": "Lukáš Horníček",
                "position": "GK",
                "club": "Braga",
                "league": "Primeira Liga",
                "age": 23,
                "birthplace": {
                    "city": "Vysoké Mýto",
                    "country": "Czech Republic",
                    "lat": 49.9532,
                    "lng": 16.1618
                }
            },
            {
                "name": "Vladimír Coufal",
                "position": "DF",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 33,
                "birthplace": {
                    "city": "Prague",
                    "country": "Czech Republic",
                    "lat": 50.0875,
                    "lng": 14.4214
                }
            },
            {
                "name": "Tomáš Holeš",
                "position": "DF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 33,
                "birthplace": {
                    "city": "Polička",
                    "country": "Czech Republic",
                    "lat": 49.7147,
                    "lng": 16.2655
                }
            },
            {
                "name": "Ladislav Krejčí",
                "position": "DF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Rosice",
                    "country": "Czech Republic",
                    "lat": 49.1824,
                    "lng": 16.3879
                }
            },
            {
                "name": "Jaroslav Zelený",
                "position": "DF",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 33,
                "birthplace": {
                    "city": "Hradec Králové",
                    "country": "Czech Republic",
                    "lat": 50.2092,
                    "lng": 15.8319
                }
            },
            {
                "name": "David Jurásek",
                "position": "DF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Dolní Němčí",
                    "country": "Czech Republic",
                    "lat": 48.9684,
                    "lng": 17.5859
                }
            },
            {
                "name": "Robin Hranáč",
                "position": "DF",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Plzeň",
                    "country": "Czech Republic",
                    "lat": 49.7414,
                    "lng": 13.3825
                }
            },
            {
                "name": "Martin Vitík",
                "position": "DF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Czech Republic",
                    "country": "Czech Republic",
                    "lat": 50,
                    "lng": 15
                }
            },
            {
                "name": "Štěpán Chaloupek",
                "position": "DF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 23,
                "birthplace": {
                    "city": "Meziboří",
                    "country": "Czech Republic",
                    "lat": 50.6212,
                    "lng": 13.5988
                }
            },
            {
                "name": "Tomáš Souček",
                "position": "MF",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Havlíčkův Brod",
                    "country": "Czech Republic",
                    "lat": 49.6079,
                    "lng": 15.5807
                }
            },
            {
                "name": "Vladimír Darida",
                "position": "MF",
                "club": "Hradec Králové",
                "league": "Czech First League",
                "age": 35,
                "birthplace": {
                    "city": "Plzeň",
                    "country": "Czech Republic",
                    "lat": 49.7414,
                    "lng": 13.3825
                }
            },
            {
                "name": "Lukáš Provod",
                "position": "MF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 29,
                "birthplace": {
                    "city": "Plzeň",
                    "country": "Czech Republic",
                    "lat": 49.7414,
                    "lng": 13.3825
                }
            },
            {
                "name": "Michal Sadílek",
                "position": "MF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 26,
                "birthplace": {
                    "city": "Uherské Hradiště",
                    "country": "Czech Republic",
                    "lat": 49.0698,
                    "lng": 17.4597
                }
            },
            {
                "name": "Pavel Šulc",
                "position": "MF",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Karlovy Vary",
                    "country": "Czech Republic",
                    "lat": 50.2306,
                    "lng": 12.8725
                }
            },
            {
                "name": "Lukáš Červ",
                "position": "MF",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 24,
                "birthplace": {
                    "city": "Prague",
                    "country": "Czech Republic",
                    "lat": 50.0875,
                    "lng": 14.4214
                }
            },
            {
                "name": "Adam Karabec",
                "position": "MF",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 22,
                "birthplace": {
                    "city": "Czech Republic",
                    "country": "Czech Republic",
                    "lat": 50,
                    "lng": 15
                }
            },
            {
                "name": "Tomáš Ladra",
                "position": "MF",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 28,
                "birthplace": {
                    "city": "Česká Lípa",
                    "country": "Czech Republic",
                    "lat": 50.6856,
                    "lng": 14.5377
                }
            },
            {
                "name": "Pavel Bucha",
                "position": "MF",
                "club": "Cincinnati",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Nelahozeves",
                    "country": "Czech Republic",
                    "lat": 50.2616,
                    "lng": 14.2989
                }
            },
            {
                "name": "Denis Višinský",
                "position": "MF",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 23,
                "birthplace": {
                    "city": "Mělník",
                    "country": "Czech Republic",
                    "lat": 50.3506,
                    "lng": 14.4742
                }
            },
            {
                "name": "Patrik Schick",
                "position": "FW",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Prague",
                    "country": "Czech Republic",
                    "lat": 50.0875,
                    "lng": 14.4214
                }
            },
            {
                "name": "Tomáš Chorý",
                "position": "FW",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 31,
                "birthplace": {
                    "city": "Olomouc",
                    "country": "Czech Republic",
                    "lat": 49.5939,
                    "lng": 17.2508
                }
            },
            {
                "name": "Mojmír Chytil",
                "position": "FW",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 26,
                "birthplace": {
                    "city": "Skalka",
                    "country": "Czech Republic",
                    "lat": 49.4031,
                    "lng": 17.1698
                }
            },
            {
                "name": "Jan Kliment",
                "position": "FW",
                "club": "Sigma Olomouc",
                "league": "Czech First League",
                "age": 32,
                "birthplace": {
                    "city": "Myjava",
                    "country": "Slovakia",
                    "lat": 48.7578,
                    "lng": 17.5686
                }
            }
        ]
    },
    "CAN": {
        "name": "Canada",
        "flag": "🇨🇦",
        "confederation": "CONCACAF",
        "fifaRanking": 5,
        "players": [
            {
                "name": "Dayne St. Clair",
                "position": "GK",
                "club": "Inter Miami",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Pickering",
                    "country": "Canada",
                    "lat": 43.9069,
                    "lng": -79.1308
                }
            },
            {
                "name": "Maxime Crépeau",
                "position": "GK",
                "club": "Orlando City",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Greenfield Park",
                    "country": "Canada",
                    "lat": 45.4833,
                    "lng": -73.45
                }
            },
            {
                "name": "Owen Goodman",
                "position": "GK",
                "club": "Barnsley",
                "league": "EFL League One",
                "age": 22,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.8643,
                    "lng": -79.7103
                }
            },
            {
                "name": "Jahkeele Marshall-Rutty",
                "position": "DF",
                "club": "New York Red Bulls",
                "league": "MLS",
                "age": 21,
                "birthplace": {
                    "city": "Brampton",
                    "country": "Canada",
                    "lat": 43.6833,
                    "lng": -79.7667
                }
            },
            {
                "name": "Ralph Priso",
                "position": "DF",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            },
            {
                "name": "Kamal Miller",
                "position": "DF",
                "club": "Portland Timbers",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Scarborough",
                    "country": "Canada",
                    "lat": 43.7737,
                    "lng": -79.2446
                }
            },
            {
                "name": "Joel Waterman",
                "position": "DF",
                "club": "Chicago Fire",
                "league": "MLS",
                "age": 30,
                "birthplace": {
                    "city": "Langley",
                    "country": "Canada",
                    "lat": 49.1044,
                    "lng": -122.5827
                }
            },
            {
                "name": "Derek Cornelius",
                "position": "DF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 28,
                "birthplace": {
                    "city": "Ajax",
                    "country": "Canada",
                    "lat": 43.8583,
                    "lng": -79.0364
                }
            },
            {
                "name": "Luc de Fougerolles",
                "position": "DF",
                "club": "Dender",
                "league": "Belgian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Richie Laryea",
                "position": "DF",
                "club": "Toronto FC",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            },
            {
                "name": "Niko Sigur",
                "position": "DF",
                "club": "Hajduk Split",
                "league": "Croatian First League",
                "age": 22,
                "birthplace": {
                    "city": "Burnaby",
                    "country": "Canada",
                    "lat": 49.25,
                    "lng": -122.9492
                }
            },
            {
                "name": "Alistair Johnston",
                "position": "DF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 27,
                "birthplace": {
                    "city": "Vancouver",
                    "country": "Canada",
                    "lat": 49.2608,
                    "lng": -123.1139
                }
            },
            {
                "name": "Moïse Bombito",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Montreal",
                    "country": "Canada",
                    "lat": 45.5033,
                    "lng": -73.5868
                }
            },
            {
                "name": "Mathieu Choinière",
                "position": "MF",
                "club": "Los Angeles FC",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Saint-Alexandre",
                    "country": "Canada",
                    "lat": 45.2333,
                    "lng": -73.1167
                }
            },
            {
                "name": "Ismaël Koné",
                "position": "MF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Junior Hoilett",
                "position": "MF",
                "club": "Swindon Town",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Brampton",
                    "country": "Canada",
                    "lat": 43.6833,
                    "lng": -79.7667
                }
            },
            {
                "name": "Liam Millar",
                "position": "MF",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            },
            {
                "name": "Tajon Buchanan",
                "position": "MF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Brampton",
                    "country": "Canada",
                    "lat": 43.6833,
                    "lng": -79.7667
                }
            },
            {
                "name": "Nathan Saliba",
                "position": "MF",
                "club": "Anderlecht",
                "league": "Belgian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Longueuil",
                    "country": "Canada",
                    "lat": 45.5141,
                    "lng": -73.438
                }
            },
            {
                "name": "Ali Ahmed",
                "position": "MF",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 25,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            },
            {
                "name": "Jonathan Osorio",
                "position": "MF",
                "club": "Toronto FC",
                "league": "MLS",
                "age": 33,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            },
            {
                "name": "Marcelo Flores",
                "position": "MF",
                "club": "UANL",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Georgetown",
                    "country": "Canada",
                    "lat": 43.6469,
                    "lng": -79.91
                }
            },
            {
                "name": "Jonathan David",
                "position": "FW",
                "club": "Juventus",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Brooklyn",
                    "country": "United States",
                    "lat": 40.6508,
                    "lng": -73.9497
                }
            },
            {
                "name": "Cyle Larin",
                "position": "FW",
                "club": "Southampton",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Brampton",
                    "country": "Canada",
                    "lat": 43.6833,
                    "lng": -79.7667
                }
            },
            {
                "name": "Tani Oluwaseyi",
                "position": "FW",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "Abuja",
                    "country": "Nigeria",
                    "lat": 9.0556,
                    "lng": 7.4914
                }
            },
            {
                "name": "Aribim Pepple",
                "position": "FW",
                "club": "Plymouth Argyle",
                "league": "EFL League One",
                "age": 23,
                "birthplace": {
                    "city": "Kettering",
                    "country": "United Kingdom",
                    "lat": 52.4,
                    "lng": -0.7333
                }
            },
            {
                "name": "Daniel Jebbison",
                "position": "FW",
                "club": "Preston North End",
                "league": "EFL Championship",
                "age": 22,
                "birthplace": {
                    "city": "Oakville",
                    "country": "Canada",
                    "lat": 43.45,
                    "lng": -79.6833
                }
            },
            {
                "name": "Jacen Russell-Rowe",
                "position": "FW",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6703,
                    "lng": -79.3867
                }
            }
        ]
    },
    "BIH": {
        "name": "Bosnia & Herz.",
        "flag": "🇧🇦",
        "confederation": "UEFA",
        "fifaRanking": 6,
        "players": [
            {
                "name": "Nikola Vasilj",
                "position": "GK",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Mostar",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.3436,
                    "lng": 17.8075
                }
            },
            {
                "name": "Osman Hadžikić",
                "position": "GK",
                "club": "Slaven Belupo",
                "league": "Croatian First League",
                "age": 30,
                "birthplace": {
                    "city": "Klosterneuburg",
                    "country": "Austria",
                    "lat": 48.3042,
                    "lng": 16.3167
                }
            },
            {
                "name": "Martin Zlomislić",
                "position": "GK",
                "club": "Rijeka",
                "league": "Croatian First League",
                "age": 27,
                "birthplace": {
                    "city": "Posušje",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.4722,
                    "lng": 17.3267
                }
            },
            {
                "name": "Nihad Mujakić",
                "position": "DF",
                "club": "Gaziantep",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "Sarajevo",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8564,
                    "lng": 18.4131
                }
            },
            {
                "name": "Nidal Čelik",
                "position": "DF",
                "club": "Lens",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Sarajevo",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8564,
                    "lng": 18.4131
                }
            },
            {
                "name": "Tarik Muharemović",
                "position": "DF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Ljubljana",
                    "country": "Slovenia",
                    "lat": 46.0514,
                    "lng": 14.5061
                }
            },
            {
                "name": "Sead Kolašinac",
                "position": "DF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Karlsruhe",
                    "country": "Germany",
                    "lat": 49.0167,
                    "lng": 8.4
                }
            },
            {
                "name": "Amar Dedić",
                "position": "DF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 23,
                "birthplace": {
                    "city": "Zell am See",
                    "country": "Austria",
                    "lat": 47.3233,
                    "lng": 12.7981
                }
            },
            {
                "name": "Nikola Katić",
                "position": "DF",
                "club": "Schalke 04",
                "league": "2. Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Ljubuški",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.1981,
                    "lng": 17.5467
                }
            },
            {
                "name": "Stjepan Radeljić",
                "position": "DF",
                "club": "Rijeka",
                "league": "Croatian First League",
                "age": 28,
                "birthplace": {
                    "city": "Travnik",
                    "country": "Bosnia and Herzegovina",
                    "lat": 44.2254,
                    "lng": 17.6669
                }
            },
            {
                "name": "Benjamin Tahirović",
                "position": "MF",
                "club": "Brøndby",
                "league": "Danish Superliga",
                "age": 23,
                "birthplace": {
                    "city": "Spånga-Tensta city district",
                    "country": "Sweden",
                    "lat": 59.3942,
                    "lng": 17.9011
                }
            },
            {
                "name": "Armin Gigović",
                "position": "MF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 23,
                "birthplace": {
                    "city": "Lund",
                    "country": "Sweden",
                    "lat": 55.7083,
                    "lng": 13.1992
                }
            },
            {
                "name": "Ivan Bašić",
                "position": "MF",
                "club": "Astana",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Imotski",
                    "country": "Croatia",
                    "lat": 43.45,
                    "lng": 17.2167
                }
            },
            {
                "name": "Ivan Šunjić",
                "position": "MF",
                "club": "Pafos",
                "league": "Cypriot First Division",
                "age": 29,
                "birthplace": {
                    "city": "Zenica",
                    "country": "Bosnia and Herzegovina",
                    "lat": 44.2017,
                    "lng": 17.9039
                }
            },
            {
                "name": "Amar Memić",
                "position": "MF",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Sarajevo",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8564,
                    "lng": 18.4131
                }
            },
            {
                "name": "Amir Hadžiahmetović",
                "position": "MF",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 29,
                "birthplace": {
                    "city": "Nexø",
                    "country": "Denmark",
                    "lat": 55.0625,
                    "lng": 15.1319
                }
            },
            {
                "name": "Dženis Burnić",
                "position": "MF",
                "club": "Karlsruher SC",
                "league": "2. Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Hamm",
                    "country": "Germany",
                    "lat": 51.6814,
                    "lng": 7.8192
                }
            },
            {
                "name": "Kerim Alajbegović",
                "position": "MF",
                "club": "Red Bull Salzburg",
                "league": "Austrian Bundesliga",
                "age": 18,
                "birthplace": {
                    "city": "Cologne",
                    "country": "Germany",
                    "lat": 50.9422,
                    "lng": 6.9578
                }
            },
            {
                "name": "Esmir Bajraktarević",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 21,
                "birthplace": {
                    "city": "Appleton",
                    "country": "United States",
                    "lat": 44.2822,
                    "lng": -88.4183
                }
            },
            {
                "name": "Samed Baždar",
                "position": "FW",
                "club": "Jagiellonia Białystok",
                "league": "Polish Ekstraklasa",
                "age": 22,
                "birthplace": {
                    "city": "Novi Pazar",
                    "country": "Serbia",
                    "lat": 43.15,
                    "lng": 20.5167
                }
            },
            {
                "name": "Ermedin Demirović",
                "position": "FW",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Edin Džeko",
                "position": "FW",
                "club": "Schalke 04",
                "league": "2. Bundesliga",
                "age": 40,
                "birthplace": {
                    "city": "Sarajevo",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8564,
                    "lng": 18.4131
                }
            },
            {
                "name": "Haris Tabaković",
                "position": "FW",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 31,
                "birthplace": {
                    "city": "Grenchen",
                    "country": "Switzerland",
                    "lat": 47.1931,
                    "lng": 7.3958
                }
            },
            {
                "name": "Jovo Lukić",
                "position": "FW",
                "club": "Universitatea Cluj",
                "league": "Romanian SuperLiga",
                "age": 27,
                "birthplace": {
                    "city": "Banja Luka",
                    "country": "Bosnia and Herzegovina",
                    "lat": 44.7725,
                    "lng": 17.1925
                }
            }
        ]
    },
    "QAT": {
        "name": "Qatar",
        "flag": "🇶🇦",
        "confederation": "AFC",
        "fifaRanking": 7,
        "players": [
            {
                "name": "Shehab Ellethy",
                "position": "GK",
                "club": "Al-Shahaniya",
                "league": "Qatar Stars League",
                "age": 25,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.3865,
                    "lng": 52.2402
                }
            },
            {
                "name": "Mahmud Abunada",
                "position": "GK",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Meshaal Barsham",
                "position": "GK",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 28,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Salah Zakaria",
                "position": "GK",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Issa Laye",
                "position": "DF",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 28,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.4289
                }
            },
            {
                "name": "Lucas Mendes",
                "position": "DF",
                "club": "Al-Wakrah",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Curitiba",
                    "country": "Brazil",
                    "lat": -25.4297,
                    "lng": -49.2719
                }
            },
            {
                "name": "Tarek Salman",
                "position": "DF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 28,
                "birthplace": {
                    "city": "Al Wakrah",
                    "country": "Qatar",
                    "lat": 25.18,
                    "lng": 51.61
                }
            },
            {
                "name": "Ayoub Al-Oui",
                "position": "DF",
                "club": "Al-Gharafa",
                "league": "Qatar Stars League",
                "age": 21,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 24.6449,
                    "lng": 51.296
                }
            },
            {
                "name": "Homam Ahmed",
                "position": "DF",
                "club": "Cultural Leonesa",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Yousef Aymen",
                "position": "DF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 27,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 24.9877,
                    "lng": 52.3077
                }
            },
            {
                "name": "Al-Hashmi Al-Hussain",
                "position": "DF",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 22,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.5395,
                    "lng": 52.2246
                }
            },
            {
                "name": "Sultan Al-Brake",
                "position": "DF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 29,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Boualem Khoukhi",
                "position": "DF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Bou Ismaïl",
                    "country": "Algeria",
                    "lat": 36.65,
                    "lng": 2.7
                }
            },
            {
                "name": "Pedro Miguel",
                "position": "DF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Algueirão - Mem Martins",
                    "country": "Portugal",
                    "lat": 38.7941,
                    "lng": -9.3451
                }
            },
            {
                "name": "Bassam Al-Rawi",
                "position": "DF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 28,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Niall Mason",
                "position": "DF",
                "club": "Qatar SC",
                "league": "Qatar Stars League",
                "age": 29,
                "birthplace": {
                    "city": "Bromley",
                    "country": "United Kingdom",
                    "lat": 51.4064,
                    "lng": 0.0183
                }
            },
            {
                "name": "Eisa Palangi",
                "position": "DF",
                "club": "Qatar SC",
                "league": "Qatar Stars League",
                "age": 27,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Marwan Sherif",
                "position": "DF",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 19,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 26.2853,
                    "lng": 50.7085
                }
            },
            {
                "name": "Mohammed Waad",
                "position": "MF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Abdulaziz Hatem",
                "position": "MF",
                "club": "Al-Rayyan",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Jassem Gaber",
                "position": "MF",
                "club": "Al-Rayyan",
                "league": "Qatar Stars League",
                "age": 24,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Khalid Ali Sabah",
                "position": "MF",
                "club": "Al-Sailiya",
                "league": "Qatar Stars League",
                "age": 24,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Mohamed Al-Mannai",
                "position": "MF",
                "club": "Al-Shamal",
                "league": "Qatar Stars League",
                "age": 22,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 24.6459,
                    "lng": 50.6266
                }
            },
            {
                "name": "Ahmed Fathy",
                "position": "MF",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 33,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Karim Boudiaf",
                "position": "MF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Rueil-Malmaison",
                    "country": "France",
                    "lat": 48.8778,
                    "lng": 2.1883
                }
            },
            {
                "name": "Assim Madibo",
                "position": "MF",
                "club": "Al-Wakrah",
                "league": "Qatar Stars League",
                "age": 29,
                "birthplace": {
                    "city": "Qatar",
                    "country": "Qatar",
                    "lat": 25.2695,
                    "lng": 51.2128
                }
            },
            {
                "name": "Mostafa Meshaal",
                "position": "MF",
                "club": "Eupen",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2861,
                    "lng": 51.5294
                }
            },
            {
                "name": "Ibrahim Al-Hassan",
                "position": "MF",
                "club": "Al-Rayyan",
                "league": "Qatar Stars League",
                "age": 20,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 26.2242,
                    "lng": 50.9243
                }
            },
            {
                "name": "Anas Abweny",
                "position": "MF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 21,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.4851,
                    "lng": 50.6374
                }
            },
            {
                "name": "Ahmed Alaaeldin",
                "position": "FW",
                "club": "Al-Rayyan",
                "league": "Qatar Stars League",
                "age": 33,
                "birthplace": {
                    "city": "Ismailia",
                    "country": "Egypt",
                    "lat": 30.5833,
                    "lng": 32.2667
                }
            }
        ]
    },
    "SUI": {
        "name": "Switzerland",
        "flag": "🇨🇭",
        "confederation": "UEFA",
        "fifaRanking": 8,
        "players": [
            {
                "name": "Gregor Kobel",
                "position": "GK",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Yvon Mvogo",
                "position": "GK",
                "club": "Lorient",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Yaoundé",
                    "country": "Cameroon",
                    "lat": 3.8578,
                    "lng": 11.5181
                }
            },
            {
                "name": "Marvin Keller",
                "position": "GK",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 23,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Miro Muheim",
                "position": "DF",
                "club": "Hamburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Silvan Widmer",
                "position": "DF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 33,
                "birthplace": {
                    "city": "Aarau",
                    "country": "Switzerland",
                    "lat": 47.3923,
                    "lng": 8.0446
                }
            },
            {
                "name": "Nico Elvedi",
                "position": "DF",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Manuel Akanji",
                "position": "DF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Neftenbach",
                    "country": "Switzerland",
                    "lat": 47.5283,
                    "lng": 8.6681
                }
            },
            {
                "name": "Ricardo Rodriguez",
                "position": "DF",
                "club": "Betis",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Eray Cömert",
                "position": "DF",
                "club": "Valencia",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Rheinfelden",
                    "country": "Switzerland",
                    "lat": 47.5539,
                    "lng": 7.7958
                }
            },
            {
                "name": "Luca Jaquez",
                "position": "DF",
                "club": "Stuttgart",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Lucerne",
                    "country": "Switzerland",
                    "lat": 47.0523,
                    "lng": 8.3059
                }
            },
            {
                "name": "Aurèle Amenda",
                "position": "DF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Biel/Bienne",
                    "country": "Switzerland",
                    "lat": 47.1372,
                    "lng": 7.2472
                }
            },
            {
                "name": "Denis Zakaria",
                "position": "MF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Geneva",
                    "country": "Switzerland",
                    "lat": 46.2,
                    "lng": 6.15
                }
            },
            {
                "name": "Remo Freuler",
                "position": "MF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 33,
                "birthplace": {
                    "city": "Ennenda",
                    "country": "Switzerland",
                    "lat": 47.0336,
                    "lng": 9.0775
                }
            },
            {
                "name": "Johan Manzambi",
                "position": "MF",
                "club": "Freiburg",
                "league": "Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Geneva",
                    "country": "Switzerland",
                    "lat": 46.2,
                    "lng": 6.15
                }
            },
            {
                "name": "Granit Xhaka",
                "position": "MF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Basel",
                    "country": "Switzerland",
                    "lat": 47.5606,
                    "lng": 7.5906
                }
            },
            {
                "name": "Ardon Jashari",
                "position": "MF",
                "club": "Milan",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Cham",
                    "country": "Switzerland",
                    "lat": 47.1803,
                    "lng": 8.4594
                }
            },
            {
                "name": "Djibril Sow",
                "position": "MF",
                "club": "Sevilla",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Vincent Sierro",
                "position": "MF",
                "club": "Al-Shabab",
                "league": "Saudi Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Sion",
                    "country": "Switzerland",
                    "lat": 46.2304,
                    "lng": 7.3661
                }
            },
            {
                "name": "Alvyn Sanches",
                "position": "MF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 23,
                "birthplace": {
                    "city": "Créteil",
                    "country": "France",
                    "lat": 48.7778,
                    "lng": 2.4531
                }
            },
            {
                "name": "Michel Aebischer",
                "position": "MF",
                "club": "Pisa",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Switzerland",
                    "country": "Switzerland",
                    "lat": 46.7986,
                    "lng": 8.232
                }
            },
            {
                "name": "Fabian Rieder",
                "position": "MF",
                "club": "Augsburg",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Koppigen",
                    "country": "Switzerland",
                    "lat": 47.1344,
                    "lng": 7.6042
                }
            },
            {
                "name": "Joël Monteiro",
                "position": "MF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 26,
                "birthplace": {
                    "city": "Sion",
                    "country": "Switzerland",
                    "lat": 46.2304,
                    "lng": 7.3661
                }
            },
            {
                "name": "Breel Embolo",
                "position": "FW",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Yaoundé",
                    "country": "Cameroon",
                    "lat": 3.8578,
                    "lng": 11.5181
                }
            },
            {
                "name": "Dan Ndoye",
                "position": "FW",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Nyon",
                    "country": "Switzerland",
                    "lat": 46.382,
                    "lng": 6.2389
                }
            },
            {
                "name": "Rubén Vargas",
                "position": "FW",
                "club": "Sevilla",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Adligenswil",
                    "country": "Switzerland",
                    "lat": 47.0706,
                    "lng": 8.365
                }
            },
            {
                "name": "Noah Okafor",
                "position": "FW",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Switzerland",
                    "country": "Switzerland",
                    "lat": 46.7986,
                    "lng": 8.232
                }
            }
        ]
    },
    "BRA": {
        "name": "Brazil",
        "flag": "🇧🇷",
        "confederation": "CONMEBOL",
        "fifaRanking": 9,
        "players": [
            {
                "name": "Hugo Souza",
                "position": "GK",
                "club": "Corinthians",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Duque de Caxias",
                    "country": "Brazil",
                    "lat": -22.7858,
                    "lng": -43.3119
                }
            },
            {
                "name": "Bento",
                "position": "GK",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Curitiba",
                    "country": "Brazil",
                    "lat": -25.4297,
                    "lng": -49.2719
                }
            },
            {
                "name": "Ederson",
                "position": "GK",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Osasco",
                    "country": "Brazil",
                    "lat": -23.5328,
                    "lng": -46.7919
                }
            },
            {
                "name": "Vitor Reis",
                "position": "DF",
                "club": "Girona",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "São José dos Campos",
                    "country": "Brazil",
                    "lat": -23.1789,
                    "lng": -45.8869
                }
            },
            {
                "name": "Marquinhos",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "São Paulo",
                    "country": "Brazil",
                    "lat": -23.5504,
                    "lng": -46.6339
                }
            },
            {
                "name": "Douglas Santos",
                "position": "DF",
                "club": "Zenit Saint Petersburg",
                "league": "Russian Premier League",
                "age": 32,
                "birthplace": {
                    "city": "João Pessoa",
                    "country": "Brazil",
                    "lat": -7.12,
                    "lng": -34.88
                }
            },
            {
                "name": "Danilo Luiz",
                "position": "DF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 34,
                "birthplace": {
                    "city": "Bicas",
                    "country": "Brazil",
                    "lat": -21.725,
                    "lng": -43.0589
                }
            },
            {
                "name": "Gleison Bremer",
                "position": "DF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Itapitanga",
                    "country": "Brazil",
                    "lat": -14.4228,
                    "lng": -39.565
                }
            },
            {
                "name": "Léo Pereira",
                "position": "DF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 30,
                "birthplace": {
                    "city": "Curitiba",
                    "country": "Brazil",
                    "lat": -25.4297,
                    "lng": -49.2719
                }
            },
            {
                "name": "Kaiki Bruno",
                "position": "DF",
                "club": "Cruzeiro",
                "league": "Brasileirão",
                "age": 23,
                "birthplace": {
                    "city": "Betim",
                    "country": "Brazil",
                    "lat": -19.9678,
                    "lng": -44.1978
                }
            },
            {
                "name": "Roger Ibañez",
                "position": "DF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Canela",
                    "country": "Brazil",
                    "lat": -29.3658,
                    "lng": -50.8158
                }
            },
            {
                "name": "Casemiro",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "São José dos Campos",
                    "country": "Brazil",
                    "lat": -23.1789,
                    "lng": -45.8869
                }
            },
            {
                "name": "Andrey Santos",
                "position": "MF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Rio de Janeiro",
                    "country": "Brazil",
                    "lat": -22.9111,
                    "lng": -43.2056
                }
            },
            {
                "name": "Fabinho",
                "position": "MF",
                "club": "Al-Ittihad",
                "league": "Saudi Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Campinas",
                    "country": "Brazil",
                    "lat": -22.9009,
                    "lng": -47.0573
                }
            },
            {
                "name": "Danilo Santos",
                "position": "MF",
                "club": "Botafogo",
                "league": "Brasileirão",
                "age": 24,
                "birthplace": {
                    "city": "Salvador",
                    "country": "Brazil",
                    "lat": -12.9831,
                    "lng": -38.4928
                }
            },
            {
                "name": "Gabriel Sara",
                "position": "MF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Joinville",
                    "country": "Brazil",
                    "lat": -26.3039,
                    "lng": -48.8458
                }
            },
            {
                "name": "Matheus Cunha",
                "position": "FW",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "João Pessoa",
                    "country": "Brazil",
                    "lat": -7.12,
                    "lng": -34.88
                }
            },
            {
                "name": "João Pedro",
                "position": "FW",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Ribeirão Preto",
                    "country": "Brazil",
                    "lat": -21.1776,
                    "lng": -47.8101
                }
            },
            {
                "name": "Vinícius Júnior",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "São Gonçalo",
                    "country": "Brazil",
                    "lat": -22.8269,
                    "lng": -43.0539
                }
            },
            {
                "name": "Endrick",
                "position": "FW",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Taguatinga",
                    "country": "Brazil",
                    "lat": -15.8333,
                    "lng": -48.0564
                }
            },
            {
                "name": "Luiz Henrique",
                "position": "FW",
                "club": "Zenit Saint Petersburg",
                "league": "Russian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Petrópolis",
                    "country": "Brazil",
                    "lat": -22.505,
                    "lng": -43.1789
                }
            },
            {
                "name": "Igor Thiago",
                "position": "FW",
                "club": "Brentford",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Gama",
                    "country": "Brazil",
                    "lat": -16.0194,
                    "lng": -48.0669
                }
            },
            {
                "name": "Gabriel Martinelli",
                "position": "FW",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Guarulhos",
                    "country": "Brazil",
                    "lat": -23.4667,
                    "lng": -46.5333
                }
            },
            {
                "name": "Rayan",
                "position": "FW",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 19,
                "birthplace": {
                    "city": "Rio de Janeiro",
                    "country": "Brazil",
                    "lat": -22.9111,
                    "lng": -43.2056
                }
            }
        ]
    },
    "MAR": {
        "name": "Morocco",
        "flag": "🇲🇦",
        "confederation": "CAF",
        "fifaRanking": 10,
        "players": [
            {
                "name": "Yassine Bounou",
                "position": "GK",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Montreal",
                    "country": "Canada",
                    "lat": 45.5033,
                    "lng": -73.5868
                }
            },
            {
                "name": "El Mehdi Al Harrar",
                "position": "GK",
                "club": "Raja Casablanca",
                "league": "Botola Pro",
                "age": 25,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Mehdi Benabid",
                "position": "GK",
                "club": "Wydad Casablanca",
                "league": "Botola Pro",
                "age": 28,
                "birthplace": {
                    "city": "Rabat",
                    "country": "Morocco",
                    "lat": 34.0211,
                    "lng": -6.8414
                }
            },
            {
                "name": "Achraf Hakimi",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.4169,
                    "lng": -3.7033
                }
            },
            {
                "name": "Noussair Mazraoui",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Leiderdorp",
                    "country": "Netherlands",
                    "lat": 52.1617,
                    "lng": 4.5283
                }
            },
            {
                "name": "Ismaël Baouf",
                "position": "DF",
                "club": "Cambuur",
                "league": "Eredivisie",
                "age": 19,
                "birthplace": {
                    "city": "Tubize",
                    "country": "Belgium",
                    "lat": 50.6928,
                    "lng": 4.205
                }
            },
            {
                "name": "Issa Diop",
                "position": "DF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Zakaria El Ouahdi",
                "position": "DF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Hoboken",
                    "country": "Belgium",
                    "lat": 51.1736,
                    "lng": 4.3483
                }
            },
            {
                "name": "Souffian El Karouani",
                "position": "DF",
                "club": "Utrecht",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "'s-Hertogenbosch",
                    "country": "Netherlands",
                    "lat": 51.7,
                    "lng": 5.3167
                }
            },
            {
                "name": "Chadi Riad",
                "position": "DF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Palma",
                    "country": "Spain",
                    "lat": 39.5667,
                    "lng": 2.6497
                }
            },
            {
                "name": "Redouane Halhal",
                "position": "DF",
                "club": "Mechelen",
                "league": "Belgian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Montpellier",
                    "country": "France",
                    "lat": 43.6109,
                    "lng": 3.8772
                }
            },
            {
                "name": "Anass Salah-Eddine",
                "position": "DF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Abdelhamid Aït Boudlal",
                "position": "DF",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Marrakesh",
                    "country": "Morocco",
                    "lat": 31.6295,
                    "lng": -7.9811
                }
            },
            {
                "name": "Mohamed Rabie Hrimat",
                "position": "MF",
                "club": "AS FAR",
                "league": "Botola Pro",
                "age": 31,
                "birthplace": {
                    "city": "Rabat",
                    "country": "Morocco",
                    "lat": 34.0211,
                    "lng": -6.8414
                }
            },
            {
                "name": "Azzedine Ounahi",
                "position": "MF",
                "club": "Girona",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Ismael Saibari",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "Terrassa",
                    "country": "Spain",
                    "lat": 41.5611,
                    "lng": 2.0081
                }
            },
            {
                "name": "Oussama Targhalline",
                "position": "MF",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Sidi Belyout",
                    "country": "Morocco",
                    "lat": 33.6146,
                    "lng": -7.5788
                }
            },
            {
                "name": "Bilal El Khannouss",
                "position": "MF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Strombeek-Bever",
                    "country": "Belgium",
                    "lat": 50.9103,
                    "lng": 4.3561
                }
            },
            {
                "name": "Neil El Aynaoui",
                "position": "MF",
                "club": "Roma",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Nancy",
                    "country": "France",
                    "lat": 48.6928,
                    "lng": 6.1836
                }
            },
            {
                "name": "Samir El Mourabet",
                "position": "MF",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Strasbourg",
                    "country": "France",
                    "lat": 48.5733,
                    "lng": 7.7522
                }
            },
            {
                "name": "Rayane Bounida",
                "position": "MF",
                "club": "Ajax",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5125,
                    "lng": -8.0564
                }
            },
            {
                "name": "Chemsdine Talbi",
                "position": "FW",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Sambreville",
                    "country": "Belgium",
                    "lat": 50.45,
                    "lng": 4.6
                }
            },
            {
                "name": "Soufiane Rahimi",
                "position": "FW",
                "club": "Al Ain",
                "league": "UAE Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Brahim Díaz",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Málaga",
                    "country": "Spain",
                    "lat": 36.7167,
                    "lng": -4.4167
                }
            },
            {
                "name": "Gessime Yassine",
                "position": "FW",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 20,
                "birthplace": {
                    "city": "Salon-de-Provence",
                    "country": "France",
                    "lat": 43.6406,
                    "lng": 5.0972
                }
            },
            {
                "name": "Abde Ezzalzouli",
                "position": "FW",
                "club": "Betis",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Beni Mellal",
                    "country": "Morocco",
                    "lat": 32.3394,
                    "lng": -6.3608
                }
            },
            {
                "name": "Yassir Zabiri",
                "position": "FW",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Marrakesh",
                    "country": "Morocco",
                    "lat": 31.6295,
                    "lng": -7.9811
                }
            },
            {
                "name": "Ayoub El Kaabi",
                "position": "FW",
                "club": "Olympiacos",
                "league": "Greek Super League",
                "age": 32,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Amine Adli",
                "position": "FW",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Béziers",
                    "country": "France",
                    "lat": 43.3433,
                    "lng": 3.2161
                }
            }
        ]
    },
    "HAI": {
        "name": "Haiti",
        "flag": "🇭🇹",
        "confederation": "CONCACAF",
        "fifaRanking": 11,
        "players": [
            {
                "name": "Alexandre Pierre",
                "position": "GK",
                "club": "Sochaux",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Aubervilliers",
                    "country": "France",
                    "lat": 48.9111,
                    "lng": 2.3825
                }
            },
            {
                "name": "Josué Duverger",
                "position": "GK",
                "club": "Cosmos Koblenz",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Montreal",
                    "country": "Canada",
                    "lat": 45.5033,
                    "lng": -73.5868
                }
            },
            {
                "name": "Johny Placide",
                "position": "GK",
                "club": "Bastia",
                "league": "Ligue 2",
                "age": 38,
                "birthplace": {
                    "city": "Montfermeil",
                    "country": "France",
                    "lat": 48.8983,
                    "lng": 2.5647
                }
            },
            {
                "name": "Wilguens Paugain",
                "position": "DF",
                "club": "Zulte Waregem",
                "league": "Belgian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Thomazeau",
                    "country": "Haiti",
                    "lat": 18.65,
                    "lng": -72.1
                }
            },
            {
                "name": "Delentz Pierre",
                "position": "DF",
                "club": "Tulsa",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Fort Lauderdale",
                    "country": "United States",
                    "lat": 26.1358,
                    "lng": -80.1419
                }
            },
            {
                "name": "Ricardo Adé",
                "position": "DF",
                "club": "LDU Quito",
                "league": "Ecuadorian Serie A",
                "age": 35,
                "birthplace": {
                    "city": "Saint-Marc",
                    "country": "Haiti",
                    "lat": 19.1167,
                    "lng": -72.7
                }
            },
            {
                "name": "Hannes Delcroix",
                "position": "DF",
                "club": "Lugano",
                "league": "Swiss Super League",
                "age": 27,
                "birthplace": {
                    "city": "Petite-Rivière-de-l'Artibonite",
                    "country": "Haiti",
                    "lat": 19.1333,
                    "lng": -72.4833
                }
            },
            {
                "name": "Martin Expérience",
                "position": "DF",
                "club": "Nancy",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Châteaubriant",
                    "country": "France",
                    "lat": 47.7169,
                    "lng": -1.3761
                }
            },
            {
                "name": "Duke Lacroix",
                "position": "DF",
                "club": "Colorado Springs Switchbacks",
                "league": "MLS",
                "age": 32,
                "birthplace": {
                    "city": "New Egypt",
                    "country": "United States",
                    "lat": 40.0651,
                    "lng": -74.527
                }
            },
            {
                "name": "Jean-Kévin Duverne",
                "position": "DF",
                "club": "Gent",
                "league": "Belgian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Carlens Arcus",
                "position": "DF",
                "club": "Angers",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 18.5469,
                    "lng": -72.3403
                }
            },
            {
                "name": "Carl Sainté",
                "position": "MF",
                "club": "El Paso Locomotive",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Grand-Goâve",
                    "country": "Haiti",
                    "lat": 18.4333,
                    "lng": -72.7667
                }
            },
            {
                "name": "Jean‐Ricner Bellegarde",
                "position": "MF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Colombes",
                    "country": "France",
                    "lat": 48.9236,
                    "lng": 2.2522
                }
            },
            {
                "name": "Leverton Pierre",
                "position": "MF",
                "club": "Vizela",
                "league": "Primeira Liga",
                "age": 28,
                "birthplace": {
                    "city": "Tabarre",
                    "country": "Haiti",
                    "lat": 18.5833,
                    "lng": -72.2667
                }
            },
            {
                "name": "Danley Jean Jacques",
                "position": "MF",
                "club": "Philadelphia Union",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Petit-Goâve",
                    "country": "Haiti",
                    "lat": 18.4314,
                    "lng": -72.8669
                }
            },
            {
                "name": "Woodensky Pierre",
                "position": "MF",
                "club": "Violette",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 19.0637,
                    "lng": -72.4838
                }
            },
            {
                "name": "Derrick Etienne Jr.",
                "position": "FW",
                "club": "Toronto",
                "league": "MLS",
                "age": 29,
                "birthplace": {
                    "city": "Richmond",
                    "country": "United States",
                    "lat": 37.5408,
                    "lng": -77.4367
                }
            },
            {
                "name": "Duckens Nazon",
                "position": "FW",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Châtenay-Malabry",
                    "country": "France",
                    "lat": 48.7653,
                    "lng": 2.2781
                }
            },
            {
                "name": "Don Deedson Louicius",
                "position": "FW",
                "club": "Dallas",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Tabarre",
                    "country": "Haiti",
                    "lat": 18.5833,
                    "lng": -72.2667
                }
            },
            {
                "name": "Ruben Providence",
                "position": "FW",
                "club": "Almere City",
                "league": "Eerste Divisie",
                "age": 24,
                "birthplace": {
                    "city": "Lagny-sur-Marne",
                    "country": "France",
                    "lat": 48.8781,
                    "lng": 2.7067
                }
            },
            {
                "name": "Woobens Pacius",
                "position": "FW",
                "club": "Nashville",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "Terrebonne",
                    "country": "Canada",
                    "lat": 45.7,
                    "lng": -73.6333
                }
            },
            {
                "name": "Wilson Isidor",
                "position": "FW",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Rennes",
                    "country": "France",
                    "lat": 48.1142,
                    "lng": -1.6808
                }
            },
            {
                "name": "Yassin Fortuné",
                "position": "FW",
                "club": "Vizela",
                "league": "Primeira Liga",
                "age": 27,
                "birthplace": {
                    "city": "Aubervilliers",
                    "country": "France",
                    "lat": 48.9111,
                    "lng": 2.3825
                }
            },
            {
                "name": "Frantzdy Pierrot",
                "position": "FW",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 18.5469,
                    "lng": -72.3403
                }
            },
            {
                "name": "Josué Casimir",
                "position": "FW",
                "club": "Auxerre",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Baie-Mahault",
                    "country": "France",
                    "lat": 16.2675,
                    "lng": -61.5869
                }
            }
        ]
    },
    "SCO": {
        "name": "Scotland",
        "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "confederation": "UEFA",
        "fifaRanking": 12,
        "players": [
            {
                "name": "Angus Gunn",
                "position": "GK",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Norwich",
                    "country": "United Kingdom",
                    "lat": 52.6286,
                    "lng": 1.2928
                }
            },
            {
                "name": "Liam Kelly",
                "position": "GK",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 30,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Scott Bain",
                "position": "GK",
                "club": "Falkirk",
                "league": "Scottish Premiership",
                "age": 34,
                "birthplace": {
                    "city": "Edinburgh",
                    "country": "United Kingdom",
                    "lat": 55.9533,
                    "lng": -3.1892
                }
            },
            {
                "name": "Nathan Patterson",
                "position": "DF",
                "club": "Everton",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Andy Robertson",
                "position": "DF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Grant Hanley",
                "position": "DF",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 34,
                "birthplace": {
                    "city": "Dumfries",
                    "country": "United Kingdom",
                    "lat": 55.0667,
                    "lng": -3.6167
                }
            },
            {
                "name": "Kieran Tierney",
                "position": "DF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 28,
                "birthplace": {
                    "city": "Douglas",
                    "country": "Isle of Man",
                    "lat": 54.15,
                    "lng": -4.4775
                }
            },
            {
                "name": "Jack Hendry",
                "position": "DF",
                "club": "Al-Ettifaq",
                "league": "Saudi Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "John Souttar",
                "position": "DF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 29,
                "birthplace": {
                    "city": "Aberdeen",
                    "country": "United Kingdom",
                    "lat": 57.15,
                    "lng": -2.1
                }
            },
            {
                "name": "Ross McCrorie",
                "position": "DF",
                "club": "Bristol City",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Dominic Hyam",
                "position": "DF",
                "club": "Wrexham",
                "league": "Welsh Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Leuchars",
                    "country": "United Kingdom",
                    "lat": 56.3814,
                    "lng": -2.8835
                }
            },
            {
                "name": "Anthony Ralston",
                "position": "DF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 27,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Scott McKenna",
                "position": "DF",
                "club": "Dinamo Zagreb",
                "league": "Croatian First League",
                "age": 29,
                "birthplace": {
                    "city": "Kirriemuir",
                    "country": "United Kingdom",
                    "lat": 56.6736,
                    "lng": -3.005
                }
            },
            {
                "name": "Scott McTominay",
                "position": "MF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Lancaster",
                    "country": "United Kingdom",
                    "lat": 54.0489,
                    "lng": -2.8014
                }
            },
            {
                "name": "John McGinn",
                "position": "MF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Billy Gilmour",
                "position": "MF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Irvine",
                    "country": "United Kingdom",
                    "lat": 55.6194,
                    "lng": -4.6611
                }
            },
            {
                "name": "Ryan Christie",
                "position": "MF",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Inverness",
                    "country": "United Kingdom",
                    "lat": 57.4839,
                    "lng": -4.2258
                }
            },
            {
                "name": "Lennon Miller",
                "position": "MF",
                "club": "Udinese",
                "league": "Serie A",
                "age": 19,
                "birthplace": {
                    "city": "Wishaw",
                    "country": "United Kingdom",
                    "lat": 55.7742,
                    "lng": -3.9183
                }
            },
            {
                "name": "Lewis Ferguson",
                "position": "MF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Hamilton",
                    "country": "United Kingdom",
                    "lat": 55.777,
                    "lng": -4.039
                }
            },
            {
                "name": "Kenny McLean",
                "position": "MF",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 34,
                "birthplace": {
                    "city": "Rutherglen",
                    "country": "United Kingdom",
                    "lat": 55.828,
                    "lng": -4.224
                }
            },
            {
                "name": "Andy Irving",
                "position": "MF",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Edinburgh",
                    "country": "United Kingdom",
                    "lat": 55.9533,
                    "lng": -3.1892
                }
            },
            {
                "name": "Lyndon Dykes",
                "position": "FW",
                "club": "Charlton Athletic",
                "league": "EFL League One",
                "age": 30,
                "birthplace": {
                    "city": "Gold Coast",
                    "country": "Australia",
                    "lat": -28.0167,
                    "lng": 153.4
                }
            },
            {
                "name": "Ché Adams",
                "position": "FW",
                "club": "Torino",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Leicester",
                    "country": "United Kingdom",
                    "lat": 52.6361,
                    "lng": -1.1331
                }
            },
            {
                "name": "George Hirst",
                "position": "FW",
                "club": "Ipswich Town",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Sheffield",
                    "country": "United Kingdom",
                    "lat": 53.3808,
                    "lng": -1.4703
                }
            },
            {
                "name": "Tommy Conway",
                "position": "FW",
                "club": "Middlesbrough",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Taunton",
                    "country": "United Kingdom",
                    "lat": 51.0192,
                    "lng": -3.1
                }
            },
            {
                "name": "Findlay Curtis",
                "position": "FW",
                "club": "Kilmarnock",
                "league": "Scottish Premiership",
                "age": 19,
                "birthplace": {
                    "city": "Edinburgh",
                    "country": "Scotland",
                    "lat": 56.7074,
                    "lng": -2.4429
                }
            }
        ]
    },
    "USA": {
        "name": "United States",
        "flag": "🇺🇸",
        "confederation": "CONCACAF",
        "fifaRanking": 13,
        "players": [
            {
                "name": "Matt Turner",
                "position": "GK",
                "club": "New England Revolution",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 40.5879,
                    "lng": -74.7749
                }
            },
            {
                "name": "Matt Freese",
                "position": "GK",
                "club": "New York City FC",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Wayne",
                    "country": "United States",
                    "lat": 40.0439,
                    "lng": -75.3878
                }
            },
            {
                "name": "Chris Brady",
                "position": "GK",
                "club": "Chicago Fire",
                "league": "MLS",
                "age": 22,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 41.2484,
                    "lng": -73.7393
                }
            },
            {
                "name": "Patrick Schulte",
                "position": "GK",
                "club": "Columbus Crew",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "St. Charles",
                    "country": "United States",
                    "lat": 38.7886,
                    "lng": -90.5117
                }
            },
            {
                "name": "Auston Trusty",
                "position": "DF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 27,
                "birthplace": {
                    "city": "Media",
                    "country": "United States",
                    "lat": 39.9189,
                    "lng": -75.3892
                }
            },
            {
                "name": "Chris Richards",
                "position": "DF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 40.0183,
                    "lng": -73.7442
                }
            },
            {
                "name": "Antonee Robinson",
                "position": "DF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Milton Keynes",
                    "country": "United Kingdom",
                    "lat": 52.0333,
                    "lng": -0.7667
                }
            },
            {
                "name": "Miles Robinson",
                "position": "DF",
                "club": "FC Cincinnati",
                "league": "MLS",
                "age": 29,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 40.202,
                    "lng": -74.8619
                }
            },
            {
                "name": "Tim Ream",
                "position": "DF",
                "club": "Charlotte FC",
                "league": "MLS",
                "age": 38,
                "birthplace": {
                    "city": "St. Louis",
                    "country": "United States",
                    "lat": 38.6264,
                    "lng": -90.1994
                }
            },
            {
                "name": "Alex Freeman",
                "position": "DF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 21,
                "birthplace": {
                    "city": "Fort Lauderdale",
                    "country": "United States",
                    "lat": 26.1358,
                    "lng": -80.1419
                }
            },
            {
                "name": "Maximilian Arfsten",
                "position": "DF",
                "club": "Columbus Crew",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "Fresno",
                    "country": "United States",
                    "lat": 29.5267,
                    "lng": -95.4597
                }
            },
            {
                "name": "Joe Scally",
                "position": "DF",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Lake Grove",
                    "country": "United States",
                    "lat": 40.8583,
                    "lng": -73.1167
                }
            },
            {
                "name": "Mark McKenzie",
                "position": "DF",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 41.4494,
                    "lng": -74.0976
                }
            },
            {
                "name": "Cristian Roldan",
                "position": "MF",
                "club": "Seattle Sounders",
                "league": "MLS",
                "age": 30,
                "birthplace": {
                    "city": "Pico Rivera",
                    "country": "United States",
                    "lat": 33.9889,
                    "lng": -118.0892
                }
            },
            {
                "name": "Tanner Tessmann",
                "position": "MF",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Birmingham",
                    "country": "United States",
                    "lat": 33.5175,
                    "lng": -86.8094
                }
            },
            {
                "name": "Giovanni Reyna",
                "position": "MF",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Sunderland",
                    "country": "United Kingdom",
                    "lat": 54.9,
                    "lng": -1.3803
                }
            },
            {
                "name": "Weston McKennie",
                "position": "MF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Little Elm",
                    "country": "United States",
                    "lat": 33.1639,
                    "lng": -96.9303
                }
            },
            {
                "name": "Sebastian Berhalter",
                "position": "MF",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Malik Tillman",
                "position": "MF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Nuremberg",
                    "country": "Germany",
                    "lat": 49.4539,
                    "lng": 11.0775
                }
            },
            {
                "name": "Aidan Morris",
                "position": "MF",
                "club": "Middlesbrough",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Fort Lauderdale",
                    "country": "United States",
                    "lat": 26.1358,
                    "lng": -80.1419
                }
            },
            {
                "name": "Ricardo Pepi",
                "position": "FW",
                "club": "PSV Eindhoven",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "El Paso",
                    "country": "United States",
                    "lat": 31.7592,
                    "lng": -106.4886
                }
            },
            {
                "name": "Christian Pulisic",
                "position": "FW",
                "club": "AC Milan",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Hershey",
                    "country": "United States",
                    "lat": 40.2783,
                    "lng": -76.6511
                }
            },
            {
                "name": "Brenden Aaronson",
                "position": "FW",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Medford",
                    "country": "United States",
                    "lat": 39.8643,
                    "lng": -74.8225
                }
            },
            {
                "name": "Folarin Balogun",
                "position": "FW",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "New York City",
                    "country": "United States",
                    "lat": 40.7128,
                    "lng": -74.0061
                }
            },
            {
                "name": "Timothy Weah",
                "position": "FW",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Brooklyn",
                    "country": "United States",
                    "lat": 40.6508,
                    "lng": -73.9497
                }
            },
            {
                "name": "Patrick Agyemang",
                "position": "FW",
                "club": "Derby County",
                "league": "EFL Championship",
                "age": 25,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 40.4518,
                    "lng": -73.987
                }
            }
        ]
    },
    "PAR": {
        "name": "Paraguay",
        "flag": "🇵🇾",
        "confederation": "CONMEBOL",
        "fifaRanking": 14,
        "players": [
            {
                "name": "Roberto Fernández",
                "position": "GK",
                "club": "Cerro Porteño",
                "league": "Paraguayan Primera",
                "age": 38,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Orlando Gill",
                "position": "GK",
                "club": "San Lorenzo",
                "league": "Argentine Primera",
                "age": 25,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Paraguay",
                    "lat": -25.3431,
                    "lng": -57.5094
                }
            },
            {
                "name": "Gastón Olveira",
                "position": "GK",
                "club": "Olimpia",
                "league": "Paraguayan Primera",
                "age": 32,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Gustavo Velázquez",
                "position": "DF",
                "club": "Cerro Porteño",
                "league": "Paraguayan Primera",
                "age": 34,
                "birthplace": {
                    "city": "Villa del Rosario",
                    "country": "Paraguay",
                    "lat": -24.45,
                    "lng": -57.05
                }
            },
            {
                "name": "Omar Alderete",
                "position": "DF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Juan José Cáceres",
                "position": "DF",
                "club": "Dynamo Moscow",
                "league": "Russian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Dock Sud",
                    "country": "Argentina",
                    "lat": -34.6417,
                    "lng": -58.3478
                }
            },
            {
                "name": "Fabián Balbuena",
                "position": "DF",
                "club": "Grêmio",
                "league": "Brasileirão",
                "age": 34,
                "birthplace": {
                    "city": "Ciudad del Este",
                    "country": "Paraguay",
                    "lat": -25.5167,
                    "lng": -54.6167
                }
            },
            {
                "name": "Júnior Alonso",
                "position": "DF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 33,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Alan Benítez",
                "position": "DF",
                "club": "Libertad",
                "league": "Paraguayan Primera",
                "age": 32,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Gustavo Gómez",
                "position": "DF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 32,
                "birthplace": {
                    "city": "San Juan Bautista",
                    "country": "Paraguay",
                    "lat": -26.6333,
                    "lng": -57.1667
                }
            },
            {
                "name": "José Canale",
                "position": "DF",
                "club": "Lanús",
                "league": "Argentine Primera",
                "age": 29,
                "birthplace": {
                    "city": "Villa monica alritmo",
                    "country": "Paraguay",
                    "lat": -25.3833,
                    "lng": -57.3333
                }
            },
            {
                "name": "Alexandro Maidana",
                "position": "DF",
                "club": "Talleres",
                "league": "Argentine Primera",
                "age": 20,
                "birthplace": {
                    "city": "Caacupé",
                    "country": "Paraguay",
                    "lat": -25.3861,
                    "lng": -57.1408
                }
            },
            {
                "name": "Ramón Sosa",
                "position": "MF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 26,
                "birthplace": {
                    "city": "Maracaná",
                    "country": "Paraguay",
                    "lat": -24.1437,
                    "lng": -56.0251
                }
            },
            {
                "name": "Diego Gómez",
                "position": "MF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "San Juan Bautista",
                    "country": "Paraguay",
                    "lat": -26.6333,
                    "lng": -57.1667
                }
            },
            {
                "name": "Miguel Almirón",
                "position": "MF",
                "club": "Atlanta United",
                "league": "MLS",
                "age": 32,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Maurício Magalhães",
                "position": "MF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 24,
                "birthplace": {
                    "city": "São Paulo",
                    "country": "Brazil",
                    "lat": -23.5504,
                    "lng": -46.6339
                }
            },
            {
                "name": "Lucas Romero",
                "position": "MF",
                "club": "Universidad de Chile",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -24.8553,
                    "lng": -56.7215
                }
            },
            {
                "name": "Damián Bobadilla",
                "position": "MF",
                "club": "São Paulo",
                "league": "Brasileirão",
                "age": 24,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Braian Ojeda",
                "position": "MF",
                "club": "Orlando City",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Villa monica alritmo",
                    "country": "Paraguay",
                    "lat": -25.3833,
                    "lng": -57.3333
                }
            },
            {
                "name": "Matías Galarza",
                "position": "MF",
                "club": "Atlanta United",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Antonio Sanabria",
                "position": "FW",
                "club": "Cremonese",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Paraguay",
                    "lat": -25.3431,
                    "lng": -57.5094
                }
            },
            {
                "name": "Álex Arce",
                "position": "FW",
                "club": "Independiente Rivadavia",
                "league": "Argentine Primera",
                "age": 30,
                "birthplace": {
                    "city": "Carapeguá",
                    "country": "Paraguay",
                    "lat": -25.769,
                    "lng": -57.247
                }
            },
            {
                "name": "Julio Enciso",
                "position": "FW",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 22,
                "birthplace": {
                    "city": "Paraguay",
                    "country": "Paraguay",
                    "lat": -23.5,
                    "lng": -58
                }
            },
            {
                "name": "Gabriel Ávalos",
                "position": "FW",
                "club": "Independiente",
                "league": "Argentine Primera",
                "age": 34,
                "birthplace": {
                    "city": "Edelira",
                    "country": "Paraguay",
                    "lat": -26.75,
                    "lng": -55.27
                }
            },
            {
                "name": "Gustavo Caballero",
                "position": "FW",
                "club": "Portsmouth",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Paraguay",
                    "lat": -25.3431,
                    "lng": -57.5094
                }
            }
        ]
    },
    "AUS": {
        "name": "Australia",
        "flag": "🇦🇺",
        "confederation": "AFC",
        "fifaRanking": 15,
        "players": [
            {
                "name": "Mathew Ryan",
                "position": "GK",
                "club": "Levante",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Plumpton",
                    "country": "Australia",
                    "lat": -33.7567,
                    "lng": 150.8428
                }
            },
            {
                "name": "Paul Izzo",
                "position": "GK",
                "club": "Randers",
                "league": "Danish Superliga",
                "age": 31,
                "birthplace": {
                    "city": "Adelaide",
                    "country": "Australia",
                    "lat": -34.9275,
                    "lng": 138.6
                }
            },
            {
                "name": "Patrick Beach",
                "position": "GK",
                "club": "Melbourne City",
                "league": "A-League",
                "age": 22,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.8678,
                    "lng": 151.21
                }
            },
            {
                "name": "Miloš Degenek",
                "position": "DF",
                "club": "APOEL",
                "league": "Cypriot First Division",
                "age": 31,
                "birthplace": {
                    "city": "Knin",
                    "country": "Croatia",
                    "lat": 44.0333,
                    "lng": 16.1833
                }
            },
            {
                "name": "Jacob Italiano",
                "position": "DF",
                "club": "Grazer AK",
                "league": "Austrian Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Australia",
                    "country": "Australia",
                    "lat": -25,
                    "lng": 133
                }
            },
            {
                "name": "Kye Rowles",
                "position": "DF",
                "club": "D.C. United",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Kiama",
                    "country": "Australia",
                    "lat": -34.665,
                    "lng": 150.8511
                }
            },
            {
                "name": "Jordan Bos",
                "position": "DF",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Point Cook",
                    "country": "Australia",
                    "lat": -37.909,
                    "lng": 144.752
                }
            },
            {
                "name": "Kai Trewin",
                "position": "DF",
                "club": "New York City",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "Canberra",
                    "country": "Australia",
                    "lat": -35.2931,
                    "lng": 149.1269
                }
            },
            {
                "name": "Aziz Behich",
                "position": "DF",
                "club": "Melbourne City",
                "league": "A-League",
                "age": 35,
                "birthplace": {
                    "city": "Moonee Ponds",
                    "country": "Australia",
                    "lat": -37.765,
                    "lng": 144.92
                }
            },
            {
                "name": "Jason Geria",
                "position": "DF",
                "club": "Albirex Niigata",
                "league": "J1 League",
                "age": 32,
                "birthplace": {
                    "city": "Canberra",
                    "country": "Australia",
                    "lat": -35.2931,
                    "lng": 149.1269
                }
            },
            {
                "name": "Cameron Burgess",
                "position": "DF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 30,
                "birthplace": {
                    "city": "Aberdeen",
                    "country": "United Kingdom",
                    "lat": 57.15,
                    "lng": -2.1
                }
            },
            {
                "name": "Alessandro Circati",
                "position": "DF",
                "club": "Parma",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Fidenza",
                    "country": "Italy",
                    "lat": 44.8664,
                    "lng": 10.0611
                }
            },
            {
                "name": "Lucas Herrington",
                "position": "DF",
                "club": "Colorado Rapids",
                "league": "MLS",
                "age": 18,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -34.3001,
                    "lng": 151.0377
                }
            },
            {
                "name": "Connor Metcalfe",
                "position": "MF",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Newcastle",
                    "country": "Australia",
                    "lat": -32.9167,
                    "lng": 151.75
                }
            },
            {
                "name": "Ajdin Hrustić",
                "position": "MF",
                "club": "Heracles Almelo",
                "league": "Eredivisie",
                "age": 29,
                "birthplace": {
                    "city": "Dandenong",
                    "country": "Australia",
                    "lat": -37.981,
                    "lng": 145.215
                }
            },
            {
                "name": "Aiden O'Neill",
                "position": "MF",
                "club": "New York City",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Brisbane",
                    "country": "Australia",
                    "lat": -27.4678,
                    "lng": 153.0278
                }
            },
            {
                "name": "Riley McGree",
                "position": "MF",
                "club": "Middlesbrough",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Adelaide",
                    "country": "Australia",
                    "lat": -34.9275,
                    "lng": 138.6
                }
            },
            {
                "name": "Patrick Yazbek",
                "position": "MF",
                "club": "Nashville SC",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Liverpool",
                    "country": "Australia",
                    "lat": -33.9231,
                    "lng": 150.915
                }
            },
            {
                "name": "Paul Okon-Engstler",
                "position": "MF",
                "club": "Sydney FC",
                "league": "A-League",
                "age": 21,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -34.4079,
                    "lng": 151.8439
                }
            },
            {
                "name": "Alex Robertson",
                "position": "MF",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 22,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.8802,
                    "lng": 151.3308
                }
            },
            {
                "name": "Martin Boyle",
                "position": "FW",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 32,
                "birthplace": {
                    "city": "Aberdeen",
                    "country": "United Kingdom",
                    "lat": 57.15,
                    "lng": -2.1
                }
            },
            {
                "name": "Nestory Irankunda",
                "position": "FW",
                "club": "Watford",
                "league": "EFL Championship",
                "age": 20,
                "birthplace": {
                    "city": "Kigoma",
                    "country": "Tanzania",
                    "lat": -4.8833,
                    "lng": 29.6333
                }
            },
            {
                "name": "Nishan Velupillay",
                "position": "FW",
                "club": "Melbourne Victory",
                "league": "A-League",
                "age": 24,
                "birthplace": {
                    "city": "Australia",
                    "country": "Australia",
                    "lat": -25,
                    "lng": 133
                }
            },
            {
                "name": "Awer Mabil",
                "position": "FW",
                "club": "Castellón",
                "league": "Segunda División",
                "age": 30,
                "birthplace": {
                    "city": "Kakuma",
                    "country": "Kenya",
                    "lat": 3.7086,
                    "lng": 34.865
                }
            },
            {
                "name": "Deni Jurić",
                "position": "FW",
                "club": "Wisła Płock",
                "league": "Polish Ekstraklasa",
                "age": 28,
                "birthplace": {
                    "city": "Kogarah",
                    "country": "Australia",
                    "lat": -33.965,
                    "lng": 151.1344
                }
            },
            {
                "name": "Ante Šuto",
                "position": "FW",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 25,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.9232,
                    "lng": 151.0673
                }
            }
        ]
    },
    "TUR": {
        "name": "Turkey",
        "flag": "🇹🇷",
        "confederation": "UEFA",
        "fifaRanking": 16,
        "players": [
            {
                "name": "Mert Günok",
                "position": "GK",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 37,
                "birthplace": {
                    "city": "Karabük",
                    "country": "Turkey",
                    "lat": 41.2,
                    "lng": 32.6333
                }
            },
            {
                "name": "Altay Bayındır",
                "position": "GK",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Osmangazi",
                    "country": "Turkey",
                    "lat": 40.2192,
                    "lng": 29.0414
                }
            },
            {
                "name": "Uğurcan Çakır",
                "position": "GK",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Antalya",
                    "country": "Turkey",
                    "lat": 37.8333,
                    "lng": 34.75
                }
            },
            {
                "name": "Muhammed Şengezer",
                "position": "GK",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Osmangazi",
                    "country": "Turkey",
                    "lat": 40.2192,
                    "lng": 29.0414
                }
            },
            {
                "name": "Zeki Çelik",
                "position": "DF",
                "club": "Roma",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Yıldırım district",
                    "country": "Turkey",
                    "lat": 40.1901,
                    "lng": 29.0977
                }
            },
            {
                "name": "Eren Elmalı",
                "position": "DF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Kartal",
                    "country": "Turkey",
                    "lat": 40.9064,
                    "lng": 29.2111
                }
            },
            {
                "name": "Samet Akaydin",
                "position": "DF",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Trabzon",
                    "country": "Turkey",
                    "lat": 41.005,
                    "lng": 39.7225
                }
            },
            {
                "name": "Abdülkerim Bardakcı",
                "position": "DF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Meram district",
                    "country": "Turkey",
                    "lat": 37.8364,
                    "lng": 32.4383
                }
            },
            {
                "name": "Ozan Kabak",
                "position": "DF",
                "club": "Hoffenheim",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Çankaya district",
                    "country": "Turkey",
                    "lat": 39.9083,
                    "lng": 32.8461
                }
            },
            {
                "name": "Mert Müldür",
                "position": "DF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Ferdi Kadıoğlu",
                "position": "DF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Arnhem",
                    "country": "Netherlands",
                    "lat": 51.9833,
                    "lng": 5.9167
                }
            },
            {
                "name": "Merih Demiral",
                "position": "DF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Karamürsel district",
                    "country": "Turkey",
                    "lat": 40.6914,
                    "lng": 29.6156
                }
            },
            {
                "name": "Mustafa Eskihellaç",
                "position": "DF",
                "club": "Trabzonspor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Trabzon",
                    "country": "Turkey",
                    "lat": 41.005,
                    "lng": 39.7225
                }
            },
            {
                "name": "Ahmetcan Kaplan",
                "position": "DF",
                "club": "NEC",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Trabzon",
                    "country": "Turkey",
                    "lat": 41.005,
                    "lng": 39.7225
                }
            },
            {
                "name": "Salih Özcan",
                "position": "MF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Cologne",
                    "country": "Germany",
                    "lat": 50.9422,
                    "lng": 6.9578
                }
            },
            {
                "name": "Orkun Kökçü",
                "position": "MF",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Haarlem",
                    "country": "Netherlands",
                    "lat": 52.3803,
                    "lng": 4.6406
                }
            },
            {
                "name": "Hakan Çalhanoğlu",
                "position": "MF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Mannheim",
                    "country": "Germany",
                    "lat": 49.4878,
                    "lng": 8.4661
                }
            },
            {
                "name": "İsmail Yüksek",
                "position": "MF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "İznik",
                    "country": "Turkey",
                    "lat": 40.4289,
                    "lng": 29.7194
                }
            },
            {
                "name": "Atakan Karazor",
                "position": "MF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Essen",
                    "country": "Germany",
                    "lat": 51.4508,
                    "lng": 7.0131
                }
            },
            {
                "name": "Kaan Ayhan",
                "position": "MF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Gelsenkirchen",
                    "country": "Germany",
                    "lat": 51.5103,
                    "lng": 7.0942
                }
            },
            {
                "name": "Kerem Aktürkoğlu",
                "position": "FW",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "İzmit",
                    "country": "Turkey",
                    "lat": 40.7719,
                    "lng": 29.9498
                }
            },
            {
                "name": "Arda Güler",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 21,
                "birthplace": {
                    "city": "Altındağ",
                    "country": "Turkey",
                    "lat": 39.9458,
                    "lng": 32.8561
                }
            },
            {
                "name": "Barış Alper Yılmaz",
                "position": "FW",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "İkizdere",
                    "country": "Turkey",
                    "lat": 40.7772,
                    "lng": 40.5608
                }
            },
            {
                "name": "Kenan Yıldız",
                "position": "FW",
                "club": "Juventus",
                "league": "Serie A",
                "age": 20,
                "birthplace": {
                    "city": "Regensburg",
                    "country": "Germany",
                    "lat": 49.0167,
                    "lng": 12.0833
                }
            },
            {
                "name": "Deniz Gül",
                "position": "FW",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 21,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "İrfan Can Kahveci",
                "position": "FW",
                "club": "Kasımpaşa",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Bayat",
                    "country": "Turkey",
                    "lat": 40.185,
                    "lng": 32.437
                }
            },
            {
                "name": "Yunus Akgün",
                "position": "FW",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Küçükçekmece",
                    "country": "Turkey",
                    "lat": 41.0219,
                    "lng": 28.7772
                }
            },
            {
                "name": "Oğuz Aydın",
                "position": "FW",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "The Hague",
                    "country": "Netherlands",
                    "lat": 52.08,
                    "lng": 4.31
                }
            },
            {
                "name": "Semih Kılıçsoy",
                "position": "FW",
                "club": "Cagliari",
                "league": "Serie A",
                "age": 20,
                "birthplace": {
                    "city": "Gaziosmanpaşa",
                    "country": "Turkey",
                    "lat": 41.0733,
                    "lng": 28.9047
                }
            }
        ]
    },
    "GER": {
        "name": "Germany",
        "flag": "🇩🇪",
        "confederation": "UEFA",
        "fifaRanking": 17,
        "players": [
            {
                "name": "Oliver Baumann",
                "position": "GK",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 35,
                "birthplace": {
                    "city": "Breisach",
                    "country": "Germany",
                    "lat": 48.0289,
                    "lng": 7.58
                }
            },
            {
                "name": "Alexander Nübel",
                "position": "GK",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Paderborn",
                    "country": "Germany",
                    "lat": 51.7167,
                    "lng": 8.7667
                }
            },
            {
                "name": "Finn Dahmen",
                "position": "GK",
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Wiesbaden",
                    "country": "Germany",
                    "lat": 50.0825,
                    "lng": 8.24
                }
            },
            {
                "name": "Antonio Rüdiger",
                "position": "DF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Berlin",
                    "country": "Germany",
                    "lat": 52.5167,
                    "lng": 13.3833
                }
            },
            {
                "name": "Waldemar Anton",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Olmaliq",
                    "country": "Uzbekistan",
                    "lat": 40.85,
                    "lng": 69.6
                }
            },
            {
                "name": "Jonathan Tah",
                "position": "DF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Nico Schlotterbeck",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Waiblingen",
                    "country": "Germany",
                    "lat": 48.8303,
                    "lng": 9.3169
                }
            },
            {
                "name": "Nathaniel Brown",
                "position": "DF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Amberg",
                    "country": "Germany",
                    "lat": 49.4444,
                    "lng": 11.8483
                }
            },
            {
                "name": "David Raum",
                "position": "DF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Nuremberg",
                    "country": "Germany",
                    "lat": 49.4539,
                    "lng": 11.0775
                }
            },
            {
                "name": "Josha Vagnoman",
                "position": "DF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Malick Thiaw",
                "position": "DF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Düsseldorf",
                    "country": "Germany",
                    "lat": 51.2256,
                    "lng": 6.7767
                }
            },
            {
                "name": "Pascal Groß",
                "position": "MF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Mannheim",
                    "country": "Germany",
                    "lat": 49.4878,
                    "lng": 8.4661
                }
            },
            {
                "name": "Joshua Kimmich",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 31,
                "birthplace": {
                    "city": "Rottweil",
                    "country": "Germany",
                    "lat": 48.1681,
                    "lng": 8.6247
                }
            },
            {
                "name": "Kai Havertz",
                "position": "MF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Aachen",
                    "country": "Germany",
                    "lat": 50.7762,
                    "lng": 6.0838
                }
            },
            {
                "name": "Leon Goretzka",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 31,
                "birthplace": {
                    "city": "Bochum",
                    "country": "Germany",
                    "lat": 51.4833,
                    "lng": 7.2167
                }
            },
            {
                "name": "Kevin Schade",
                "position": "MF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Potsdam",
                    "country": "Germany",
                    "lat": 52.4,
                    "lng": 13.0667
                }
            },
            {
                "name": "Chris Führich",
                "position": "MF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Castrop-Rauxel",
                    "country": "Germany",
                    "lat": 51.55,
                    "lng": 7.3167
                }
            },
            {
                "name": "Angelo Stiller",
                "position": "MF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Munich",
                    "country": "Germany",
                    "lat": 48.1375,
                    "lng": 11.575
                }
            },
            {
                "name": "Florian Wirtz",
                "position": "MF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Pulheim",
                    "country": "Germany",
                    "lat": 51,
                    "lng": 6.8
                }
            },
            {
                "name": "Leroy Sané",
                "position": "MF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Essen",
                    "country": "Germany",
                    "lat": 51.4508,
                    "lng": 7.0131
                }
            },
            {
                "name": "Serge Gnabry",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Stuttgart",
                    "country": "Germany",
                    "lat": 48.7775,
                    "lng": 9.18
                }
            },
            {
                "name": "Anton Stach",
                "position": "MF",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Buchholz in der Nordheide",
                    "country": "Germany",
                    "lat": 53.3285,
                    "lng": 9.8621
                }
            },
            {
                "name": "Lennart Karl",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 18,
                "birthplace": {
                    "city": "Frammersbach",
                    "country": "Germany",
                    "lat": 50.0667,
                    "lng": 9.4667
                }
            },
            {
                "name": "Nick Woltemade",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Bremen",
                    "country": "Germany",
                    "lat": 53.0758,
                    "lng": 8.8072
                }
            },
            {
                "name": "Deniz Undav",
                "position": "FW",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Varel",
                    "country": "Germany",
                    "lat": 53.3969,
                    "lng": 8.1361
                }
            }
        ]
    },
    "CUW": {
        "name": "Curaçao",
        "flag": "🇨🇼",
        "confederation": "CONCACAF",
        "fifaRanking": 18,
        "players": [
            {
                "name": "Eloy Room",
                "position": "GK",
                "club": "Miami FC",
                "league": "MLS",
                "age": 37,
                "birthplace": {
                    "city": "Nijmegen",
                    "country": "Netherlands",
                    "lat": 51.8475,
                    "lng": 5.8625
                }
            },
            {
                "name": "Tyrick Bodak",
                "position": "GK",
                "club": "Telstar",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Curaçao",
                    "country": "Kingdom of the Netherlands",
                    "lat": 12.2,
                    "lng": -69
                }
            },
            {
                "name": "Trevor Doornbusch",
                "position": "GK",
                "club": "VVV-Venlo",
                "league": "Eredivisie",
                "age": 26,
                "birthplace": {
                    "city": "Haarlem",
                    "country": "Netherlands",
                    "lat": 52.3803,
                    "lng": 4.6406
                }
            },
            {
                "name": "Shurandy Sambo",
                "position": "DF",
                "club": "Sparta Rotterdam",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Geldrop",
                    "country": "Netherlands",
                    "lat": 51.4222,
                    "lng": 5.5578
                }
            },
            {
                "name": "Juriën Gaari",
                "position": "DF",
                "club": "Abha",
                "league": "Saudi Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Kerkrade",
                    "country": "Netherlands",
                    "lat": 50.8667,
                    "lng": 6.0667
                }
            },
            {
                "name": "Roshon van Eijma",
                "position": "DF",
                "club": "RKC Waalwijk",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Tilburg",
                    "country": "Netherlands",
                    "lat": 51.5575,
                    "lng": 5.0906
                }
            },
            {
                "name": "Sherel Floranus",
                "position": "DF",
                "club": "PEC Zwolle",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Deveron Fonville",
                "position": "DF",
                "club": "NEC",
                "league": "Eredivisie",
                "age": 22,
                "birthplace": {
                    "city": "Willemstad",
                    "country": "Curaçao",
                    "lat": 11.2116,
                    "lng": -69.1019
                }
            },
            {
                "name": "Armando Obispo",
                "position": "DF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Boxtel",
                    "country": "Netherlands",
                    "lat": 51.5911,
                    "lng": 5.3275
                }
            },
            {
                "name": "Joshua Brenet",
                "position": "DF",
                "club": "Kayserispor",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Kerkrade",
                    "country": "Netherlands",
                    "lat": 50.8667,
                    "lng": 6.0667
                }
            },
            {
                "name": "Riechedly Bazoer",
                "position": "DF",
                "club": "Konyaspor",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Utrecht",
                    "country": "Netherlands",
                    "lat": 52.0908,
                    "lng": 5.1222
                }
            },
            {
                "name": "Godfried Roemeratoe",
                "position": "MF",
                "club": "RKC Waalwijk",
                "league": "Eredivisie",
                "age": 26,
                "birthplace": {
                    "city": "Oost-Souburg",
                    "country": "Netherlands",
                    "lat": 51.4636,
                    "lng": 3.6008
                }
            },
            {
                "name": "Juninho Bacuna",
                "position": "MF",
                "club": "Gaziantep",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Groningen",
                    "country": "Netherlands",
                    "lat": 53.2189,
                    "lng": 6.5675
                }
            },
            {
                "name": "Livano Comenencia",
                "position": "MF",
                "club": "Zürich",
                "league": "Swiss Super League",
                "age": 22,
                "birthplace": {
                    "city": "Breda",
                    "country": "Netherlands",
                    "lat": 51.5889,
                    "lng": 4.7758
                }
            },
            {
                "name": "Leandro Bacuna",
                "position": "MF",
                "club": "Iğdır",
                "league": "Turkish Super Lig",
                "age": 34,
                "birthplace": {
                    "city": "Groningen",
                    "country": "Netherlands",
                    "lat": 53.2189,
                    "lng": 6.5675
                }
            },
            {
                "name": "Ar'jany Martha",
                "position": "MF",
                "club": "Rotherham United",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Tyrese Noslin",
                "position": "MF",
                "club": "Telstar",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Willemstad",
                    "country": "Curaçao",
                    "lat": 12.8261,
                    "lng": -69.3441
                }
            },
            {
                "name": "Kevin Felida",
                "position": "MF",
                "club": "Den Bosch",
                "league": "Eredivisie",
                "age": 26,
                "birthplace": {
                    "city": "Spijkenisse",
                    "country": "Netherlands",
                    "lat": 51.8333,
                    "lng": 4.3167
                }
            },
            {
                "name": "Tahith Chong",
                "position": "MF",
                "club": "Sheffield United",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Willemstad",
                    "country": "Curaçao",
                    "lat": 12.108,
                    "lng": -68.935
                }
            },
            {
                "name": "Jürgen Locadia",
                "position": "FW",
                "club": "Miami FC",
                "league": "MLS",
                "age": 32,
                "birthplace": {
                    "city": "Emmen",
                    "country": "Netherlands",
                    "lat": 52.7833,
                    "lng": 6.9
                }
            },
            {
                "name": "Jeremy Antonisse",
                "position": "FW",
                "club": "Kifisia",
                "league": "Greek Super League",
                "age": 24,
                "birthplace": {
                    "city": "Rosmalen",
                    "country": "Netherlands",
                    "lat": 51.7167,
                    "lng": 5.3667
                }
            },
            {
                "name": "Sontje Hansen",
                "position": "FW",
                "club": "Middlesbrough",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Hoorn",
                    "country": "Netherlands",
                    "lat": 52.6533,
                    "lng": 5.0733
                }
            },
            {
                "name": "Kenji Gorré",
                "position": "FW",
                "club": "Maccabi Haifa",
                "league": "Israeli Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Spijkenisse",
                    "country": "Netherlands",
                    "lat": 51.8333,
                    "lng": 4.3167
                }
            },
            {
                "name": "Jearl Margaritha",
                "position": "FW",
                "club": "Beveren",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Groningen",
                    "country": "Netherlands",
                    "lat": 53.2189,
                    "lng": 6.5675
                }
            },
            {
                "name": "Brandley Kuwas",
                "position": "FW",
                "club": "Volendam",
                "league": "Eredivisie",
                "age": 33,
                "birthplace": {
                    "city": "Hoorn",
                    "country": "Netherlands",
                    "lat": 52.6533,
                    "lng": 5.0733
                }
            },
            {
                "name": "Gervane Kastaneer",
                "position": "FW",
                "club": "Terengganu",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            }
        ]
    },
    "CIV": {
        "name": "Ivory Coast",
        "flag": "🇨🇮",
        "confederation": "CAF",
        "fifaRanking": 19,
        "players": [
            {
                "name": "Yahia Fofana",
                "position": "GK",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Alban Lafont",
                "position": "GK",
                "club": "Panathinaikos",
                "league": "Greek Super League",
                "age": 27,
                "birthplace": {
                    "city": "Ouagadougou",
                    "country": "Burkina Faso",
                    "lat": 12.3686,
                    "lng": -1.5275
                }
            },
            {
                "name": "Mohamed Koné",
                "position": "GK",
                "club": "Charleroi",
                "league": "Belgian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Adjamé",
                    "country": "Ivory Coast",
                    "lat": 5.3648,
                    "lng": -4.0237
                }
            },
            {
                "name": "Ghislain Konan",
                "position": "DF",
                "club": "Gil Vicente",
                "league": "Primeira Liga",
                "age": 30,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Odilon Kossounou",
                "position": "DF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Wilfried Singo",
                "position": "DF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Ouragahio",
                    "country": "Ivory Coast",
                    "lat": 6.4167,
                    "lng": -5.9167
                }
            },
            {
                "name": "Evan Ndicka",
                "position": "DF",
                "club": "Roma",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "20th arrondissement of Paris",
                    "country": "France",
                    "lat": 48.8651,
                    "lng": 2.399
                }
            },
            {
                "name": "Emmanuel Agbadou",
                "position": "DF",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Ivory Coast",
                    "country": "Ivory Coast",
                    "lat": 8,
                    "lng": -6
                }
            },
            {
                "name": "Guéla Doué",
                "position": "DF",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Angers",
                    "country": "France",
                    "lat": 47.4728,
                    "lng": -0.5556
                }
            },
            {
                "name": "Ousmane Diomande",
                "position": "DF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Clément Akpa",
                "position": "DF",
                "club": "Auxerre",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Meudon",
                    "country": "France",
                    "lat": 48.8075,
                    "lng": 2.2403
                }
            },
            {
                "name": "Franck Kessié",
                "position": "MF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Ouragahio",
                    "country": "Ivory Coast",
                    "lat": 6.4167,
                    "lng": -5.9167
                }
            },
            {
                "name": "Jean Michaël Seri",
                "position": "MF",
                "club": "Maribor",
                "league": "Unknown",
                "age": 34,
                "birthplace": {
                    "city": "Grand-Béréby",
                    "country": "Ivory Coast",
                    "lat": 4.65,
                    "lng": -6.9333
                }
            },
            {
                "name": "Ibrahim Sangaré",
                "position": "MF",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Koumassi",
                    "country": "Ivory Coast",
                    "lat": 5.3,
                    "lng": -3.95
                }
            },
            {
                "name": "Seko Fofana",
                "position": "MF",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 30,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Christ Inao Oulaï",
                "position": "MF",
                "club": "Trabzonspor",
                "league": "Turkish Super Lig",
                "age": 19,
                "birthplace": {
                    "city": "Yopougon",
                    "country": "Ivory Coast",
                    "lat": 5.3347,
                    "lng": -4.07
                }
            },
            {
                "name": "Parfait Guiagon",
                "position": "MF",
                "club": "Charleroi",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Ivory Coast",
                    "country": "Ivory Coast",
                    "lat": 8,
                    "lng": -6
                }
            },
            {
                "name": "Nicolas Pépé",
                "position": "FW",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Mantes-la-Jolie",
                    "country": "France",
                    "lat": 48.9906,
                    "lng": 1.7167
                }
            },
            {
                "name": "Simon Adingra",
                "position": "FW",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Yamoussoukro",
                    "country": "Ivory Coast",
                    "lat": 6.8161,
                    "lng": -5.2742
                }
            },
            {
                "name": "Evann Guessand",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Ajaccio",
                    "country": "France",
                    "lat": 41.9256,
                    "lng": 8.7364
                }
            },
            {
                "name": "Amad Diallo",
                "position": "FW",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Bénie Traoré",
                "position": "FW",
                "club": "Basel",
                "league": "Swiss Super League",
                "age": 23,
                "birthplace": {
                    "city": "Ouragahio",
                    "country": "Ivory Coast",
                    "lat": 6.4167,
                    "lng": -5.9167
                }
            },
            {
                "name": "Bazoumana Touré",
                "position": "FW",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.7744,
                    "lng": -4.5582
                }
            },
            {
                "name": "Martial Godo",
                "position": "FW",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Elye Wahi",
                "position": "FW",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Courcouronnes",
                    "country": "France",
                    "lat": 48.6181,
                    "lng": 2.4069
                }
            }
        ]
    },
    "ECU": {
        "name": "Ecuador",
        "flag": "🇪🇨",
        "confederation": "CONMEBOL",
        "fifaRanking": 20,
        "players": [
            {
                "name": "Hernán Galíndez",
                "position": "GK",
                "club": "Huracán",
                "league": "Argentine Primera",
                "age": 39,
                "birthplace": {
                    "city": "Rosario",
                    "country": "Argentina",
                    "lat": -32.9575,
                    "lng": -60.6394
                }
            },
            {
                "name": "David Cabezas",
                "position": "GK",
                "club": "Libertad",
                "league": "Ecuadorian Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Quito",
                    "country": "Ecuador",
                    "lat": -0.4266,
                    "lng": -77.6407
                }
            },
            {
                "name": "Gonzalo Valle",
                "position": "GK",
                "club": "LDU Quito",
                "league": "Ecuadorian Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Riobamba",
                    "country": "Ecuador",
                    "lat": -1.6731,
                    "lng": -78.6483
                }
            },
            {
                "name": "Moisés Ramírez",
                "position": "GK",
                "club": "Kifisia",
                "league": "Greek Super League",
                "age": 25,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Félix Torres",
                "position": "DF",
                "club": "Internacional",
                "league": "Brasileirão",
                "age": 29,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Ecuador",
                    "lat": 1.2864,
                    "lng": -78.8353
                }
            },
            {
                "name": "José Hurtado",
                "position": "DF",
                "club": "Red Bull Bragantino",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Santo Domingo",
                    "country": "Ecuador",
                    "lat": -0.2542,
                    "lng": -79.1719
                }
            },
            {
                "name": "Joel Ordóñez",
                "position": "DF",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Willian Pacho",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Rosa Zárate",
                    "country": "Ecuador",
                    "lat": 0.3272,
                    "lng": -79.4689
                }
            },
            {
                "name": "Pervis Estupiñán",
                "position": "DF",
                "club": "Milan",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Esmeraldas",
                    "country": "Ecuador",
                    "lat": 0.95,
                    "lng": -79.6667
                }
            },
            {
                "name": "Ángelo Preciado",
                "position": "DF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 28,
                "birthplace": {
                    "city": "Shushufindi Canton",
                    "country": "Ecuador",
                    "lat": -0.1871,
                    "lng": -76.645
                }
            },
            {
                "name": "Jackson Porozo",
                "position": "DF",
                "club": "Tijuana",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Ecuador",
                    "lat": 1.2864,
                    "lng": -78.8353
                }
            },
            {
                "name": "Leonardo Realpe",
                "position": "DF",
                "club": "Famalicão",
                "league": "Primeira Liga",
                "age": 25,
                "birthplace": {
                    "city": "Rosa Zárate",
                    "country": "Ecuador",
                    "lat": 0.3272,
                    "lng": -79.4689
                }
            },
            {
                "name": "Jordy Alcívar",
                "position": "MF",
                "club": "Independiente del Valle",
                "league": "Ecuadorian Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Manta",
                    "country": "Ecuador",
                    "lat": -0.95,
                    "lng": -80.7162
                }
            },
            {
                "name": "John Yeboah",
                "position": "MF",
                "club": "Venezia",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Kendry Páez",
                "position": "MF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 18,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Alan Minda",
                "position": "MF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 22,
                "birthplace": {
                    "city": "Esmeraldas",
                    "country": "Ecuador",
                    "lat": 0.95,
                    "lng": -79.6667
                }
            },
            {
                "name": "Pedro Vite",
                "position": "MF",
                "club": "UNAM",
                "league": "Liga MX",
                "age": 24,
                "birthplace": {
                    "city": "Babahoyo",
                    "country": "Ecuador",
                    "lat": -1.8167,
                    "lng": -79.5167
                }
            },
            {
                "name": "Gonzalo Plata",
                "position": "MF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 25,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Alan Franco",
                "position": "MF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Alfredo Baquerizo Moreno",
                    "country": "Ecuador",
                    "lat": -1.8917,
                    "lng": -79.5575
                }
            },
            {
                "name": "Moisés Caicedo",
                "position": "MF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Santo Domingo",
                    "country": "Ecuador",
                    "lat": -0.2542,
                    "lng": -79.1719
                }
            },
            {
                "name": "Yaimar Medina",
                "position": "MF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Eloy Alfaro Canton",
                    "country": "Ecuador",
                    "lat": 1.2499,
                    "lng": -78.9842
                }
            },
            {
                "name": "Bryan Ramírez",
                "position": "MF",
                "club": "Cincinnati",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Esmeraldas",
                    "country": "Ecuador",
                    "lat": 0.95,
                    "lng": -79.6667
                }
            },
            {
                "name": "Anthony Valencia",
                "position": "FW",
                "club": "Antwerp",
                "league": "Belgian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Elías Legendre",
                "position": "FW",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 17,
                "birthplace": {
                    "city": "Quito",
                    "country": "Ecuador",
                    "lat": -0.9151,
                    "lng": -78.2334
                }
            },
            {
                "name": "Enner Valencia",
                "position": "FW",
                "club": "Pachuca",
                "league": "Liga MX",
                "age": 36,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Ecuador",
                    "lat": 1.2864,
                    "lng": -78.8353
                }
            },
            {
                "name": "Jordy Caicedo",
                "position": "FW",
                "club": "Huracán",
                "league": "Argentine Primera",
                "age": 28,
                "birthplace": {
                    "city": "Machala",
                    "country": "Ecuador",
                    "lat": -3.2667,
                    "lng": -79.9667
                }
            },
            {
                "name": "John Mercado",
                "position": "FW",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 23,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Janner Corozo",
                "position": "FW",
                "club": "LDU Quito",
                "league": "Ecuadorian Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
                }
            },
            {
                "name": "Jeremy Arévalo",
                "position": "FW",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Santander",
                    "country": "Spain",
                    "lat": 43.4667,
                    "lng": -3.8
                }
            },
            {
                "name": "Kevin Rodríguez",
                "position": "FW",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Ibarra",
                    "country": "Ecuador",
                    "lat": 0.3628,
                    "lng": -78.13
                }
            }
        ]
    },
    "NED": {
        "name": "Netherlands",
        "flag": "🇳🇱",
        "confederation": "UEFA",
        "fifaRanking": 21,
        "players": [
            {
                "name": "Bart Verbruggen",
                "position": "GK",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Breda",
                    "country": "Netherlands",
                    "lat": 51.5889,
                    "lng": 4.7758
                }
            },
            {
                "name": "Justin Bijlow",
                "position": "GK",
                "club": "Genoa",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Mark Flekken",
                "position": "GK",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Kerkrade",
                    "country": "Netherlands",
                    "lat": 50.8667,
                    "lng": 6.0667
                }
            },
            {
                "name": "Lutsharel Geertruida",
                "position": "DF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Jan Paul van Hecke",
                "position": "DF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Arnemuiden",
                    "country": "Netherlands",
                    "lat": 51.5,
                    "lng": 3.6667
                }
            },
            {
                "name": "Virgil van Dijk",
                "position": "DF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Breda",
                    "country": "Netherlands",
                    "lat": 51.5889,
                    "lng": 4.7758
                }
            },
            {
                "name": "Nathan Aké",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "The Hague",
                    "country": "Netherlands",
                    "lat": 52.08,
                    "lng": 4.31
                }
            },
            {
                "name": "Stefan de Vrij",
                "position": "DF",
                "club": "Internazionale",
                "league": "Serie A",
                "age": 34,
                "birthplace": {
                    "city": "Ouderkerk aan den IJssel",
                    "country": "Netherlands",
                    "lat": 51.9322,
                    "lng": 4.6361
                }
            },
            {
                "name": "Jeremie Frimpong",
                "position": "DF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Micky van de Ven",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Wormer",
                    "country": "Netherlands",
                    "lat": 52.4972,
                    "lng": 4.8089
                }
            },
            {
                "name": "Denzel Dumfries",
                "position": "DF",
                "club": "Internazionale",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Jorrel Hato",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Xavi Simons",
                "position": "MF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Ryan Gravenberch",
                "position": "MF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Luciano Valente",
                "position": "MF",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 22,
                "birthplace": {
                    "city": "Groningen",
                    "country": "Netherlands",
                    "lat": 53.2189,
                    "lng": 6.5675
                }
            },
            {
                "name": "Tijjani Reijnders",
                "position": "MF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Zwolle",
                    "country": "Netherlands",
                    "lat": 52.5167,
                    "lng": 6.1
                }
            },
            {
                "name": "Jerdy Schouten",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 29,
                "birthplace": {
                    "city": "Hellevoetsluis",
                    "country": "Netherlands",
                    "lat": 51.8333,
                    "lng": 4.1333
                }
            },
            {
                "name": "Teun Koopmeiners",
                "position": "MF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Castricum",
                    "country": "Netherlands",
                    "lat": 52.5517,
                    "lng": 4.6583
                }
            },
            {
                "name": "Kees Smit",
                "position": "MF",
                "club": "AZ",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Heiloo",
                    "country": "Netherlands",
                    "lat": 52.6011,
                    "lng": 4.7019
                }
            },
            {
                "name": "Quinten Timber",
                "position": "MF",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Utrecht",
                    "country": "Netherlands",
                    "lat": 52.0908,
                    "lng": 5.1217
                }
            },
            {
                "name": "Wout Weghorst",
                "position": "FW",
                "club": "Ajax",
                "league": "Eredivisie",
                "age": 33,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Cody Gakpo",
                "position": "FW",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Eindhoven",
                    "country": "Netherlands",
                    "lat": 51.4344,
                    "lng": 5.4842
                }
            },
            {
                "name": "Noa Lang",
                "position": "FW",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Capelle aan den IJssel",
                    "country": "Netherlands",
                    "lat": 51.9357,
                    "lng": 4.5782
                }
            },
            {
                "name": "Donyell Malen",
                "position": "FW",
                "club": "Roma",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Wieringen",
                    "country": "Netherlands",
                    "lat": 52.9,
                    "lng": 4.97
                }
            },
            {
                "name": "Brian Brobbey",
                "position": "FW",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Memphis Depay",
                "position": "FW",
                "club": "Corinthians",
                "league": "Brasileirão",
                "age": 32,
                "birthplace": {
                    "city": "Moordrecht",
                    "country": "Netherlands",
                    "lat": 51.9861,
                    "lng": 4.6681
                }
            }
        ]
    },
    "JPN": {
        "name": "Japan",
        "flag": "🇯🇵",
        "confederation": "AFC",
        "fifaRanking": 22,
        "players": [
            {
                "name": "Zion Suzuki",
                "position": "GK",
                "club": "Parma",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Newark",
                    "country": "United States",
                    "lat": 40.7356,
                    "lng": -74.1722
                }
            },
            {
                "name": "Keisuke Ōsako",
                "position": "GK",
                "club": "Sanfrecce Hiroshima",
                "league": "J1 League",
                "age": 26,
                "birthplace": {
                    "city": "Izumi",
                    "country": "Japan",
                    "lat": 32.0904,
                    "lng": 130.3527
                }
            },
            {
                "name": "Tomoki Hayakawa",
                "position": "GK",
                "club": "Kashima Antlers",
                "league": "J1 League",
                "age": 27,
                "birthplace": {
                    "city": "Kanagawa Prefecture",
                    "country": "Japan",
                    "lat": 35.4477,
                    "lng": 139.6425
                }
            },
            {
                "name": "Yukinari Sugawara",
                "position": "DF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Toyokawa",
                    "country": "Japan",
                    "lat": 34.8268,
                    "lng": 137.3759
                }
            },
            {
                "name": "Shōgo Taniguchi",
                "position": "DF",
                "club": "Sint-Truiden",
                "league": "Belgian Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Kumamoto",
                    "country": "Japan",
                    "lat": 32.803,
                    "lng": 130.7079
                }
            },
            {
                "name": "Ayumu Seko",
                "position": "DF",
                "club": "Le Havre",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Osaka",
                    "country": "Japan",
                    "lat": 34.6938,
                    "lng": 135.5021
                }
            },
            {
                "name": "Tsuyoshi Watanabe",
                "position": "DF",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 29,
                "birthplace": {
                    "city": "Saitama Prefecture",
                    "country": "Japan",
                    "lat": 35.8572,
                    "lng": 139.6492
                }
            },
            {
                "name": "Daiki Hashioka",
                "position": "DF",
                "club": "Gent",
                "league": "Belgian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Saitama",
                    "country": "Japan",
                    "lat": 35.8614,
                    "lng": 139.6456
                }
            },
            {
                "name": "Hiroki Itō",
                "position": "DF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Tokyo",
                    "country": "Japan",
                    "lat": 35.1934,
                    "lng": 140.6576
                }
            },
            {
                "name": "Junnosuke Suzuki",
                "position": "DF",
                "club": "Copenhagen",
                "league": "Danish Superliga",
                "age": 22,
                "birthplace": {
                    "city": "Gifu Prefecture",
                    "country": "Japan",
                    "lat": 35.3912,
                    "lng": 136.7222
                }
            },
            {
                "name": "Joel Chima Fujita",
                "position": "MF",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Tokyo",
                    "country": "Japan",
                    "lat": 35.6894,
                    "lng": 139.6917
                }
            },
            {
                "name": "Kaoru Mitoma",
                "position": "MF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Kawasaki",
                    "country": "Japan",
                    "lat": 35.5309,
                    "lng": 139.703
                }
            },
            {
                "name": "Ritsu Dōan",
                "position": "MF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Amagasaki",
                    "country": "Japan",
                    "lat": 34.7338,
                    "lng": 135.4063
                }
            },
            {
                "name": "Keito Nakamura",
                "position": "MF",
                "club": "Reims",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Abiko",
                    "country": "Japan",
                    "lat": 35.8642,
                    "lng": 140.0284
                }
            },
            {
                "name": "Junya Itō",
                "position": "MF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Yokosuka",
                    "country": "Japan",
                    "lat": 35.2813,
                    "lng": 139.6721
                }
            },
            {
                "name": "Daichi Kamada",
                "position": "MF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Ehime Prefecture",
                    "country": "Japan",
                    "lat": 33.8414,
                    "lng": 132.7656
                }
            },
            {
                "name": "Ao Tanaka",
                "position": "MF",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Miyamae-ku",
                    "country": "Japan",
                    "lat": 35.5892,
                    "lng": 139.5786
                }
            },
            {
                "name": "Kodai Sano",
                "position": "MF",
                "club": "NEC Nijmegen",
                "league": "Eredivisie",
                "age": 22,
                "birthplace": {
                    "city": "Tsuyama",
                    "country": "Japan",
                    "lat": 35.0691,
                    "lng": 134.0045
                }
            },
            {
                "name": "Kaishu Sano",
                "position": "MF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Tsuyama",
                    "country": "Japan",
                    "lat": 35.0691,
                    "lng": 134.0045
                }
            },
            {
                "name": "Ryūnosuke Satō",
                "position": "MF",
                "club": "FC Tokyo",
                "league": "J1 League",
                "age": 19,
                "birthplace": {
                    "city": "Nishitōkyō-shi",
                    "country": "Japan",
                    "lat": 35.7256,
                    "lng": 139.5383
                }
            },
            {
                "name": "Yuito Suzuki",
                "position": "FW",
                "club": "SC Freiburg",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Hayama",
                    "country": "Japan",
                    "lat": 35.2721,
                    "lng": 139.5863
                }
            },
            {
                "name": "Shūto Machino",
                "position": "FW",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Mie Prefecture",
                    "country": "Japan",
                    "lat": 34.7302,
                    "lng": 136.5087
                }
            },
            {
                "name": "Daizen Maeda",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 28,
                "birthplace": {
                    "city": "Taishi",
                    "country": "Japan",
                    "lat": 34.5187,
                    "lng": 135.6476
                }
            },
            {
                "name": "Ayase Ueda",
                "position": "FW",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Mito",
                    "country": "Japan",
                    "lat": 36.3658,
                    "lng": 140.4712
                }
            },
            {
                "name": "Kōki Ogawa",
                "position": "FW",
                "club": "NEC Nijmegen",
                "league": "Eredivisie",
                "age": 28,
                "birthplace": {
                    "city": "Yokohama",
                    "country": "Japan",
                    "lat": 35.4503,
                    "lng": 139.6342
                }
            },
            {
                "name": "Kento Shiogai",
                "position": "FW",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Tokyo",
                    "country": "Japan",
                    "lat": 35.6894,
                    "lng": 139.6917
                }
            },
            {
                "name": "Keisuke Gotō",
                "position": "FW",
                "club": "Sint-Truiden",
                "league": "Belgian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Tokyo",
                    "country": "Japan",
                    "lat": 35.8557,
                    "lng": 139.0268
                }
            }
        ]
    },
    "SWE": {
        "name": "Sweden",
        "flag": "🇸🇪",
        "confederation": "UEFA",
        "fifaRanking": 23,
        "players": [
            {
                "name": "Noel Törnqvist",
                "position": "GK",
                "club": "Como",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 60.2263,
                    "lng": 18.1984
                }
            },
            {
                "name": "Melker Ellborg",
                "position": "GK",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Kalmar",
                    "country": "Sweden",
                    "lat": 56.6643,
                    "lng": 16.3656
                }
            },
            {
                "name": "Kristoffer Nordfeldt",
                "position": "GK",
                "club": "AIK",
                "league": "Swedish Allsvenskan",
                "age": 36,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Gustaf Lagerbielke",
                "position": "DF",
                "club": "Braga",
                "league": "Primeira Liga",
                "age": 25,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Victor Lindelöf",
                "position": "DF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Västerås",
                    "country": "Sweden",
                    "lat": 59.6173,
                    "lng": 16.5422
                }
            },
            {
                "name": "Victor Eriksson",
                "position": "DF",
                "club": "Hammarby IF",
                "league": "Swedish Allsvenskan",
                "age": 25,
                "birthplace": {
                    "city": "Värnamo",
                    "country": "Sweden",
                    "lat": 57.1818,
                    "lng": 14.0585
                }
            },
            {
                "name": "Gabriel Gudmundsson",
                "position": "DF",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Malmö",
                    "country": "Sweden",
                    "lat": 55.5833,
                    "lng": 13
                }
            },
            {
                "name": "Daniel Svensson",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Elliot Stroud",
                "position": "DF",
                "club": "Mjällby AIF",
                "league": "Swedish Allsvenskan",
                "age": 23,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.8061,
                    "lng": 18.1391
                }
            },
            {
                "name": "Carl Starfelt",
                "position": "DF",
                "club": "Celta Vigo",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Herman Johansson",
                "position": "DF",
                "club": "FC Dallas",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Örnsköldsvik",
                    "country": "Sweden",
                    "lat": 63.2655,
                    "lng": 18.6762
                }
            },
            {
                "name": "Williot Swedberg",
                "position": "MF",
                "club": "Celta Vigo",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Lucas Bergvall",
                "position": "MF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Gustav Lundgren",
                "position": "MF",
                "club": "GAIS",
                "league": "Swedish Allsvenskan",
                "age": 30,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.0307,
                    "lng": 19.0782
                }
            },
            {
                "name": "Jesper Karlström",
                "position": "MF",
                "club": "Udinese",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Yasin Ayari",
                "position": "MF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Sweden",
                    "country": "Unknown",
                    "lat": 61,
                    "lng": 15
                }
            },
            {
                "name": "Mattias Svanberg",
                "position": "MF",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Malmö",
                    "country": "Sweden",
                    "lat": 55.5833,
                    "lng": 13
                }
            },
            {
                "name": "Hugo Larsson",
                "position": "MF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Svarte",
                    "country": "Sweden",
                    "lat": 55.4308,
                    "lng": 13.7137
                }
            },
            {
                "name": "Besfort Zeneli",
                "position": "MF",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 58.5965,
                    "lng": 18.1864
                }
            },
            {
                "name": "Gustaf Nilsson",
                "position": "FW",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Sweden",
                    "country": "Unknown",
                    "lat": 61,
                    "lng": 15
                }
            },
            {
                "name": "Benjamin Nygren",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 24,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 58.9138,
                    "lng": 17.1832
                }
            },
            {
                "name": "Anthony Elanga",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3092,
                    "lng": 17.695
                }
            },
            {
                "name": "Viktor Gyökeres",
                "position": "FW",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.2473,
                    "lng": 17.1189
                }
            },
            {
                "name": "Taha Ali",
                "position": "FW",
                "club": "Malmö FF",
                "league": "Swedish Allsvenskan",
                "age": 27,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.399,
                    "lng": 17.5831
                }
            },
            {
                "name": "Roony Bardghji",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.2772,
                    "lng": 18.3356
                }
            }
        ]
    },
    "TUN": {
        "name": "Tunisia",
        "flag": "🇹🇳",
        "confederation": "CAF",
        "fifaRanking": 24,
        "players": [
            {
                "name": "Noureddine Farhati",
                "position": "GK",
                "club": "Stade Tunisien",
                "league": "Tunisian Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.0668,
                    "lng": 9.4847
                }
            },
            {
                "name": "Aymen Dahmen",
                "position": "GK",
                "club": "CS Sfaxien",
                "league": "Tunisian Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.0451,
                    "lng": 10.0445
                }
            },
            {
                "name": "Mouhib Chamakh",
                "position": "GK",
                "club": "Club Africain",
                "league": "Tunisian Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.0149,
                    "lng": 11.1899
                }
            },
            {
                "name": "Sabri Ben Hessen",
                "position": "GK",
                "club": "Étoile du Sahel",
                "league": "Tunisian Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.2105,
                    "lng": 9.5031
                }
            },
            {
                "name": "Ali Abdi",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.9877,
                    "lng": 11.0038
                }
            },
            {
                "name": "Mohamed Amine Ben Hamida",
                "position": "DF",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.0217,
                    "lng": 9.6058
                }
            },
            {
                "name": "Omar Rekik",
                "position": "DF",
                "club": "Maribor",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.8217,
                    "lng": 9.5118
                }
            },
            {
                "name": "Adem Arous",
                "position": "DF",
                "club": "Kasımpaşa",
                "league": "Turkish Super Lig",
                "age": 21,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.4955,
                    "lng": 9.3439
                }
            },
            {
                "name": "Ghaith Zaalouni",
                "position": "DF",
                "club": "Club Africain",
                "league": "Tunisian Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.496,
                    "lng": 10.1536
                }
            },
            {
                "name": "Alaa Ghram",
                "position": "DF",
                "club": "Shakhta Donetsk",
                "league": "Ukrainian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.831,
                    "lng": 10.9667
                }
            },
            {
                "name": "Moutaz Neffati",
                "position": "DF",
                "club": "IFK Norrköping",
                "league": "Swedish Allsvenskan",
                "age": 21,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.8495,
                    "lng": 11.1724
                }
            },
            {
                "name": "Raed Chikhaoui",
                "position": "DF",
                "club": "US Monastir",
                "league": "Tunisian Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.3195,
                    "lng": 10.1607
                }
            },
            {
                "name": "Rani Khedira",
                "position": "MF",
                "club": "Union Berlin",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Stuttgart",
                    "country": "Germany",
                    "lat": 48.7775,
                    "lng": 9.18
                }
            },
            {
                "name": "Hadj Mahmoud",
                "position": "MF",
                "club": "Lugano",
                "league": "Swiss Super League",
                "age": 25,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.3186,
                    "lng": 10.7493
                }
            },
            {
                "name": "Ellyes Skhiri",
                "position": "MF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.76,
                    "lng": 9.6137
                }
            },
            {
                "name": "Anis Ben Slimane",
                "position": "MF",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 25,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.4058,
                    "lng": 11.174
                }
            },
            {
                "name": "Khalil Ayari",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.3967,
                    "lng": 9.3388
                }
            },
            {
                "name": "Elias Saad",
                "position": "FW",
                "club": "Hannover",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.9437,
                    "lng": 9.2883
                }
            },
            {
                "name": "Hazem Mastouri",
                "position": "FW",
                "club": "Dynamo Makhachkala",
                "league": "Russian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.0782,
                    "lng": 11.0049
                }
            },
            {
                "name": "Ismaël Gharbi",
                "position": "FW",
                "club": "Augsburg",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.8004,
                    "lng": 10.6239
                }
            },
            {
                "name": "Mortadha Ben Ouanes",
                "position": "FW",
                "club": "Kasımpaşa",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.2023,
                    "lng": 10.9288
                }
            },
            {
                "name": "Firas Chaouat",
                "position": "FW",
                "club": "Club Africain",
                "league": "Tunisian Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.9296,
                    "lng": 10.2514
                }
            },
            {
                "name": "Sayfallah Ltaief",
                "position": "FW",
                "club": "Greuther Fürth",
                "league": "2. Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.8956,
                    "lng": 11.1107
                }
            },
            {
                "name": "Sebastian Tounekti",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 23,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.55,
                    "lng": 10.0314
                }
            },
            {
                "name": "Rayan Elloumi",
                "position": "FW",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 18,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.4251,
                    "lng": 9.4526
                }
            },
            {
                "name": "Louey Ben Farhat",
                "position": "FW",
                "club": "Karlsruher",
                "league": "Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.8655,
                    "lng": 10.7765
                }
            },
            {
                "name": "Anisse Saidi",
                "position": "FW",
                "club": "San Diego",
                "league": "MLS",
                "age": 17,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 35.9845,
                    "lng": 10.0104
                }
            },
            {
                "name": "Omar Ben Ali",
                "position": "FW",
                "club": "CS Sfaxien",
                "league": "Tunisian Ligue 1",
                "age": 20,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 37.6103,
                    "lng": 10.0642
                }
            }
        ]
    },
    "BEL": {
        "name": "Belgium",
        "flag": "🇧🇪",
        "confederation": "UEFA",
        "fifaRanking": 25,
        "players": [
            {
                "name": "Senne Lammens",
                "position": "GK",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 51.0108,
                    "lng": 4.3285
                }
            },
            {
                "name": "Maarten Vandevoordt",
                "position": "GK",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.7228,
                    "lng": 3.9559
                }
            },
            {
                "name": "Matz Sels",
                "position": "GK",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Lint",
                    "country": "Belgium",
                    "lat": 51.1278,
                    "lng": 4.4943
                }
            },
            {
                "name": "Zeno Debast",
                "position": "DF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.9913,
                    "lng": 4.3695
                }
            },
            {
                "name": "Arthur Theate",
                "position": "DF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.0425,
                    "lng": 5.3483
                }
            },
            {
                "name": "Brandon Mechele",
                "position": "DF",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Bredene",
                    "country": "Belgium",
                    "lat": 51.2336,
                    "lng": 2.9756
                }
            },
            {
                "name": "Maxim De Cuyper",
                "position": "DF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.3675,
                    "lng": 3.6078
                }
            },
            {
                "name": "Thomas Meunier",
                "position": "DF",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 34,
                "birthplace": {
                    "city": "Sainte-Ode",
                    "country": "Belgium",
                    "lat": 50.027,
                    "lng": 5.5239
                }
            },
            {
                "name": "Koni De Winter",
                "position": "DF",
                "club": "Milan",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 51.7446,
                    "lng": 5.2368
                }
            },
            {
                "name": "Joaquin Seys",
                "position": "DF",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.6771,
                    "lng": 5.0258
                }
            },
            {
                "name": "Nathan Ngoy",
                "position": "DF",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 22,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 51.4371,
                    "lng": 3.681
                }
            },
            {
                "name": "Timothy Castagne",
                "position": "DF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Arlon",
                    "country": "Belgium",
                    "lat": 49.6836,
                    "lng": 5.8167
                }
            },
            {
                "name": "Axel Witsel",
                "position": "MF",
                "club": "Girona",
                "league": "La Liga",
                "age": 37,
                "birthplace": {
                    "city": "Liège",
                    "country": "Belgium",
                    "lat": 50.6397,
                    "lng": 5.5706
                }
            },
            {
                "name": "Kevin De Bruyne",
                "position": "MF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 34,
                "birthplace": {
                    "city": "Drongen",
                    "country": "Belgium",
                    "lat": 51.0528,
                    "lng": 3.6617
                }
            },
            {
                "name": "Youri Tielemans",
                "position": "MF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Sint-Pieters-Leeuw",
                    "country": "Belgium",
                    "lat": 50.7833,
                    "lng": 4.25
                }
            },
            {
                "name": "Charles De Ketelaere",
                "position": "MF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.3189,
                    "lng": 4.0315
                }
            },
            {
                "name": "Nicolas Raskin",
                "position": "MF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 25,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 49.9397,
                    "lng": 4.8497
                }
            },
            {
                "name": "Amadou Onana",
                "position": "MF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 51.295,
                    "lng": 4.6686
                }
            },
            {
                "name": "Nathan De Cat",
                "position": "MF",
                "club": "Anderlecht",
                "league": "Belgian Pro League",
                "age": 17,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.9465,
                    "lng": 4.4785
                }
            },
            {
                "name": "Loïs Openda",
                "position": "FW",
                "club": "Juventus",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 51.5981,
                    "lng": 5.0425
                }
            },
            {
                "name": "Jérémy Doku",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.7402,
                    "lng": 5.1488
                }
            },
            {
                "name": "Dodi Lukébakio",
                "position": "FW",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 28,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.1733,
                    "lng": 5.3218
                }
            },
            {
                "name": "Lucas Stassin",
                "position": "FW",
                "club": "Saint-Étienne",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.5361,
                    "lng": 3.4294
                }
            },
            {
                "name": "Alexis Saelemaekers",
                "position": "FW",
                "club": "Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.1093,
                    "lng": 3.5103
                }
            },
            {
                "name": "Mika Godts",
                "position": "FW",
                "club": "Ajax",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.594,
                    "lng": 4.0463
                }
            }
        ]
    },
    "EGY": {
        "name": "Egypt",
        "flag": "🇪🇬",
        "confederation": "CAF",
        "fifaRanking": 26,
        "players": [
            {
                "name": "Mohamed El Shenawy",
                "position": "GK",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 37,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.7391,
                    "lng": 31.3951
                }
            },
            {
                "name": "El Mahdy Soliman",
                "position": "GK",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 38,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.3312,
                    "lng": 30.5337
                }
            },
            {
                "name": "Mostafa Shobeir",
                "position": "GK",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.2355,
                    "lng": 31.1528
                }
            },
            {
                "name": "Mohamed Alaa",
                "position": "GK",
                "club": "El Gouna",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.9818,
                    "lng": 31.1721
                }
            },
            {
                "name": "Yasser Ibrahim",
                "position": "DF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.6555,
                    "lng": 32.1382
                }
            },
            {
                "name": "Mohamed Hany",
                "position": "DF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.0363,
                    "lng": 30.96
                }
            },
            {
                "name": "Hossam Abdelmaguid",
                "position": "DF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.6786,
                    "lng": 31.5799
                }
            },
            {
                "name": "Ramy Rabia",
                "position": "DF",
                "club": "Al Ain",
                "league": "UAE Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.2797,
                    "lng": 30.9961
                }
            },
            {
                "name": "Mohamed Abdelmonem",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.9732,
                    "lng": 31.5639
                }
            },
            {
                "name": "Ahmed Abou El Fotouh",
                "position": "DF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.835,
                    "lng": 30.8579
                }
            },
            {
                "name": "Khaled Sobhi",
                "position": "DF",
                "club": "Al Masry",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.4078,
                    "lng": 30.2895
                }
            },
            {
                "name": "Tarek Alaa",
                "position": "DF",
                "club": "ZED",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.8464,
                    "lng": 31.0749
                }
            },
            {
                "name": "Emam Ashour",
                "position": "MF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.2954,
                    "lng": 30.8245
                }
            },
            {
                "name": "Hamdy Fathy",
                "position": "MF",
                "club": "Al-Wakrah",
                "league": "Qatar Stars League",
                "age": 31,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.4508,
                    "lng": 30.4821
                }
            },
            {
                "name": "Ahmed Nabil Koka",
                "position": "MF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.1654,
                    "lng": 30.601
                }
            },
            {
                "name": "Mohanad Lasheen",
                "position": "MF",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.57,
                    "lng": 30.3002
                }
            },
            {
                "name": "Marwan Attia",
                "position": "MF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.7693,
                    "lng": 31.6594
                }
            },
            {
                "name": "Mahmoud Saber",
                "position": "MF",
                "club": "ZED",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.0103,
                    "lng": 30.934
                }
            },
            {
                "name": "Trézéguet",
                "position": "FW",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.8478,
                    "lng": 30.6317
                }
            },
            {
                "name": "Nasser Mansi",
                "position": "FW",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.5327,
                    "lng": 30.2515
                }
            },
            {
                "name": "Mostafa Mohamed",
                "position": "FW",
                "club": "Nantes",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.5957,
                    "lng": 30.3017
                }
            },
            {
                "name": "Haissem Hassan",
                "position": "FW",
                "club": "Oviedo",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.7337,
                    "lng": 31.3286
                }
            },
            {
                "name": "Islam Issa",
                "position": "FW",
                "club": "Ceramica Cleopatra",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.113,
                    "lng": 30.4969
                }
            },
            {
                "name": "Ibrahim Adel",
                "position": "FW",
                "club": "Nordsjælland",
                "league": "Danish Superliga",
                "age": 24,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.2755,
                    "lng": 31.7387
                }
            },
            {
                "name": "Omar Marmoush",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 29.3828,
                    "lng": 32.0787
                }
            },
            {
                "name": "Zizo",
                "position": "FW",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.868,
                    "lng": 31.2236
                }
            }
        ]
    },
    "IRN": {
        "name": "Iran",
        "flag": "🇮🇷",
        "confederation": "AFC",
        "fifaRanking": 27,
        "players": [
            {
                "name": "Alireza Beiranvand",
                "position": "GK",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.7083,
                    "lng": 52.3205
                }
            },
            {
                "name": "Payam Niazmand",
                "position": "GK",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.1639,
                    "lng": 50.7957
                }
            },
            {
                "name": "Hossein Hosseini",
                "position": "GK",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.9002,
                    "lng": 51.612
                }
            },
            {
                "name": "Mohammad Khalife",
                "position": "GK",
                "club": "Aluminium Arak",
                "league": "Iranian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.611,
                    "lng": 52.3722
                }
            },
            {
                "name": "Saleh Hardani",
                "position": "DF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.2568,
                    "lng": 51.1731
                }
            },
            {
                "name": "Ehsan Hajsafi",
                "position": "DF",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 36,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.4182,
                    "lng": 51.1114
                }
            },
            {
                "name": "Shojae Khalilzadeh",
                "position": "DF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 36,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.4946,
                    "lng": 50.6194
                }
            },
            {
                "name": "Milad Mohammadi",
                "position": "DF",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.0315,
                    "lng": 51.5303
                }
            },
            {
                "name": "Hossein Kanaanizadegan",
                "position": "DF",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.4391,
                    "lng": 51.767
                }
            },
            {
                "name": "Ali Nemati",
                "position": "DF",
                "club": "Foolad",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.3372,
                    "lng": 51.7187
                }
            },
            {
                "name": "Ramin Rezaeian",
                "position": "DF",
                "club": "Foolad",
                "league": "Iranian Pro League",
                "age": 36,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.9237,
                    "lng": 52.2688
                }
            },
            {
                "name": "Danial Esmaeilifar",
                "position": "DF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.1159,
                    "lng": 50.4609
                }
            },
            {
                "name": "Saman Fallah",
                "position": "DF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.4427,
                    "lng": 51.0698
                }
            },
            {
                "name": "Abolfazl Jalali",
                "position": "DF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.8217,
                    "lng": 51.0814
                }
            },
            {
                "name": "Aria Yousefi",
                "position": "DF",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.5168,
                    "lng": 51.3514
                }
            },
            {
                "name": "Hossein Abarghouei",
                "position": "DF",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.8294,
                    "lng": 51.7736
                }
            },
            {
                "name": "Mohammad Ghorbani",
                "position": "MF",
                "club": "Al Wahda",
                "league": "UAE Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.4614,
                    "lng": 50.6872
                }
            },
            {
                "name": "Alireza Jahanbakhsh",
                "position": "MF",
                "club": "Dender",
                "league": "Belgian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.3493,
                    "lng": 51.0823
                }
            },
            {
                "name": "Mohammad Mohebi",
                "position": "MF",
                "club": "Rostov",
                "league": "Russian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.443,
                    "lng": 51.7793
                }
            },
            {
                "name": "Ali Gholizadeh",
                "position": "MF",
                "club": "Lech Poznań",
                "league": "Polish Ekstraklasa",
                "age": 30,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.2523,
                    "lng": 52.0018
                }
            },
            {
                "name": "Saman Ghoddos",
                "position": "MF",
                "club": "Kalba",
                "league": "UAE Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.042,
                    "lng": 51.5821
                }
            },
            {
                "name": "Mahdi Torabi",
                "position": "MF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.3933,
                    "lng": 50.7477
                }
            },
            {
                "name": "Mehdi Hashemnejad",
                "position": "MF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.7011,
                    "lng": 52.2319
                }
            },
            {
                "name": "Omid Noorafkan",
                "position": "MF",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.827,
                    "lng": 51.6391
                }
            },
            {
                "name": "Hadi Habibinejad",
                "position": "MF",
                "club": "Chadormalou",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.807,
                    "lng": 52.2926
                }
            },
            {
                "name": "Amirmohammad Razzaghinia",
                "position": "MF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 19,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.9308,
                    "lng": 51.7716
                }
            },
            {
                "name": "Saeid Ezatolahi",
                "position": "MF",
                "club": "Shabab Al Ahli",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.477,
                    "lng": 51.2298
                }
            },
            {
                "name": "Mehdi Taremi",
                "position": "FW",
                "club": "Olympiacos",
                "league": "Greek Super League",
                "age": 33,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.5231,
                    "lng": 50.5005
                }
            },
            {
                "name": "Mehdi Ghayedi",
                "position": "FW",
                "club": "Al-Nasr",
                "league": "UAE Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.6223,
                    "lng": 51.219
                }
            },
            {
                "name": "Shahriyar Moghanlou",
                "position": "FW",
                "club": "Kalba",
                "league": "UAE Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 36.1462,
                    "lng": 51.7378
                }
            }
        ]
    },
    "NZL": {
        "name": "New Zealand",
        "flag": "🇳🇿",
        "confederation": "OFC",
        "fifaRanking": 28,
        "players": [
            {
                "name": "Max Crocombe",
                "position": "GK",
                "club": "Millwall",
                "league": "EFL Championship",
                "age": 32,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.3476,
                    "lng": 174.4797
                }
            },
            {
                "name": "Alex Paulsen",
                "position": "GK",
                "club": "Lechia Gdańsk",
                "league": "Polish Ekstraklasa",
                "age": 23,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.7311,
                    "lng": 174.8425
                }
            },
            {
                "name": "Michael Woud",
                "position": "GK",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.2216,
                    "lng": 175.7211
                }
            },
            {
                "name": "Tim Payne",
                "position": "DF",
                "club": "Wellington Phoenix",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.2425,
                    "lng": 174.7064
                }
            },
            {
                "name": "Francis de Vries",
                "position": "DF",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.8426,
                    "lng": 175.0315
                }
            },
            {
                "name": "Tyler Bindon",
                "position": "DF",
                "club": "Sheffield United",
                "league": "EFL Championship",
                "age": 21,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.5177,
                    "lng": 174.7271
                }
            },
            {
                "name": "James McGarry",
                "position": "DF",
                "club": "Brisbane Roar",
                "league": "A-League",
                "age": 27,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.2798,
                    "lng": 174.9848
                }
            },
            {
                "name": "Finn Surman",
                "position": "DF",
                "club": "Portland Timbers",
                "league": "MLS",
                "age": 22,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.452,
                    "lng": 175.3783
                }
            },
            {
                "name": "Bill Tuiloma",
                "position": "DF",
                "club": "Wellington Phoenix",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.7419,
                    "lng": 175.6751
                }
            },
            {
                "name": "Callan Elliot",
                "position": "DF",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.3643,
                    "lng": 175.5689
                }
            },
            {
                "name": "Joe Bell",
                "position": "MF",
                "club": "Viking",
                "league": "Norwegian Eliteserien",
                "age": 26,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.529,
                    "lng": 175.5264
                }
            },
            {
                "name": "Marko Stamenić",
                "position": "MF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.3789,
                    "lng": 175.6752
                }
            },
            {
                "name": "Lachlan Bayliss",
                "position": "MF",
                "club": "Newcastle Jets",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -35.9285,
                    "lng": 175.3205
                }
            },
            {
                "name": "Elijah Just",
                "position": "MF",
                "club": "Motherwell",
                "league": "Scottish Premiership",
                "age": 25,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.2538,
                    "lng": 174.3218
                }
            },
            {
                "name": "Alex Rufer",
                "position": "MF",
                "club": "Wellington Phoenix",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -35.8107,
                    "lng": 174.1693
                }
            },
            {
                "name": "Ben Old",
                "position": "MF",
                "club": "Saint-Étienne",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.3263,
                    "lng": 174.4453
                }
            },
            {
                "name": "Callum McCowatt",
                "position": "MF",
                "club": "Silkeborg",
                "league": "Danish Superliga",
                "age": 26,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.1835,
                    "lng": 174.1689
                }
            },
            {
                "name": "Ryan Thomas",
                "position": "MF",
                "club": "PEC Zwolle",
                "league": "Eredivisie",
                "age": 31,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.4255,
                    "lng": 174.6856
                }
            },
            {
                "name": "Logan Rogerson",
                "position": "FW",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.0573,
                    "lng": 175.0145
                }
            },
            {
                "name": "Jesse Randall",
                "position": "FW",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.5418,
                    "lng": 175.2124
                }
            },
            {
                "name": "Kosta Barbarouses",
                "position": "FW",
                "club": "Western Sydney Wanderers",
                "league": "A-League",
                "age": 36,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.5846,
                    "lng": 173.8652
                }
            },
            {
                "name": "Ben Waine",
                "position": "FW",
                "club": "Port Vale",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.0112,
                    "lng": 174.4555
                }
            },
            {
                "name": "Andre de Jong",
                "position": "FW",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -35.9803,
                    "lng": 174.9911
                }
            }
        ]
    },
    "ESP": {
        "name": "Spain",
        "flag": "🇪🇸",
        "confederation": "UEFA",
        "fifaRanking": 29,
        "players": [
            {
                "name": "David Raya",
                "position": "GK",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 41.3156,
                    "lng": -3.7293
                }
            },
            {
                "name": "Álex Remiro",
                "position": "GK",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.8446,
                    "lng": -3.729
                }
            },
            {
                "name": "Joan García",
                "position": "GK",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.9763,
                    "lng": -2.9492
                }
            },
            {
                "name": "Unai Simón",
                "position": "GK",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 41.3962,
                    "lng": -4.359
                }
            },
            {
                "name": "Cristhian Mosquera",
                "position": "DF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.7957,
                    "lng": -3.23
                }
            },
            {
                "name": "Álex Grimaldo",
                "position": "DF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.9191,
                    "lng": -3.2374
                }
            },
            {
                "name": "Pau Cubarsí",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 19,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 41.2997,
                    "lng": -3.2066
                }
            },
            {
                "name": "Marcos Llorente",
                "position": "DF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.8819,
                    "lng": -4.2872
                }
            },
            {
                "name": "Dean Huijsen",
                "position": "DF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.4484,
                    "lng": -2.9823
                }
            },
            {
                "name": "Pedro Porro",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.8792,
                    "lng": -4.4214
                }
            },
            {
                "name": "Aymeric Laporte",
                "position": "DF",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.5896,
                    "lng": -2.8407
                }
            },
            {
                "name": "Marc Cucurella",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.7789,
                    "lng": -3.257
                }
            },
            {
                "name": "Carlos Soler",
                "position": "MF",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.8045,
                    "lng": -4.2817
                }
            },
            {
                "name": "Dani Olmo",
                "position": "MF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.9296,
                    "lng": -4.1985
                }
            },
            {
                "name": "Rodri",
                "position": "MF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.1816,
                    "lng": -3.8393
                }
            },
            {
                "name": "Pablo Fornals",
                "position": "MF",
                "club": "Betis",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.5978,
                    "lng": -3.281
                }
            },
            {
                "name": "Pedri",
                "position": "MF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 23,
                "birthplace": {
                    "city": "Tegueste",
                    "country": "Spain",
                    "lat": 28.5233,
                    "lng": -16.3408
                }
            },
            {
                "name": "Fermín López",
                "position": "MF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "El Campillo",
                    "country": "Spain",
                    "lat": 37.6932,
                    "lng": -6.63
                }
            },
            {
                "name": "Ferran Torres",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.5385,
                    "lng": -3.0138
                }
            },
            {
                "name": "Borja Iglesias",
                "position": "FW",
                "club": "Celta Vigo",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 41.3936,
                    "lng": -3.772
                }
            },
            {
                "name": "Yéremy Pino",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Las Palmas de Gran Canaria",
                    "country": "Spain",
                    "lat": 28.1272,
                    "lng": -15.4314
                }
            },
            {
                "name": "Álex Baena",
                "position": "FW",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Roquetas de Mar",
                    "country": "Spain",
                    "lat": 36.7814,
                    "lng": -2.6147
                }
            },
            {
                "name": "Lamine Yamal",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 18,
                "birthplace": {
                    "city": "Esplugues de Llobregat",
                    "country": "Spain",
                    "lat": 41.3767,
                    "lng": 2.0858
                }
            },
            {
                "name": "Mikel Oyarzabal",
                "position": "FW",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.8491,
                    "lng": -4.5718
                }
            },
            {
                "name": "Víctor Muñoz",
                "position": "FW",
                "club": "Osasuna",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "Barcelona",
                    "country": "Spain",
                    "lat": 41.3825,
                    "lng": 2.1769
                }
            },
            {
                "name": "Ander Barrenetxea",
                "position": "FW",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "San Sebastián",
                    "country": "Spain",
                    "lat": 43.32,
                    "lng": -1.98
                }
            }
        ]
    },
    "CPV": {
        "name": "Cape Verde",
        "flag": "🇨🇻",
        "confederation": "CAF",
        "fifaRanking": 30,
        "players": [
            {
                "name": "Vozinha",
                "position": "GK",
                "club": "Chaves",
                "league": "Primeira Liga",
                "age": 39,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.4915,
                    "lng": -23.6677
                }
            },
            {
                "name": "Márcio Rosa",
                "position": "GK",
                "club": "Montana",
                "league": "Bulgarian First League",
                "age": 29,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
                }
            },
            {
                "name": "CJ dos Santos",
                "position": "GK",
                "club": "San Diego",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Philadelphia",
                    "country": "United States",
                    "lat": 39.9528,
                    "lng": -75.1636
                }
            },
            {
                "name": "Roberto Lopes",
                "position": "DF",
                "club": "Shamrock Rovers",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "Crumlin",
                    "country": "Ireland",
                    "lat": 53.324,
                    "lng": -6.329
                }
            },
            {
                "name": "Diney",
                "position": "DF",
                "club": "Al Bataeh",
                "league": "UAE Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.1489,
                    "lng": -24.2896
                }
            },
            {
                "name": "Steven Moreira",
                "position": "DF",
                "club": "Columbus Crew",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.3529,
                    "lng": -22.7211
                }
            },
            {
                "name": "Wagner Pina",
                "position": "DF",
                "club": "Trabzonspor",
                "league": "Turkish Super Lig",
                "age": 23,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Sidny Lopes Cabral",
                "position": "DF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.6232,
                    "lng": -24.0198
                }
            },
            {
                "name": "Kelvin Pires",
                "position": "DF",
                "club": "SJK",
                "league": "Finnish Veikkausliiga",
                "age": 25,
                "birthplace": {
                    "city": "Cape Verde",
                    "country": "Cape Verde",
                    "lat": 15.3,
                    "lng": -23.7
                }
            },
            {
                "name": "Jordan Mendes",
                "position": "DF",
                "club": "Rodez",
                "league": "Ligue 2",
                "age": 22,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.0822,
                    "lng": -23.4426
                }
            },
            {
                "name": "Jorginho Soares",
                "position": "DF",
                "club": "Montana",
                "league": "Bulgarian First League",
                "age": 26,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.751,
                    "lng": -23.6777
                }
            },
            {
                "name": "João Paulo Fernandes",
                "position": "MF",
                "club": "FCSB",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Ribeira Grande",
                    "country": "Cape Verde",
                    "lat": 17.1827,
                    "lng": -25.0655
                }
            },
            {
                "name": "Deroy Duarte",
                "position": "MF",
                "club": "Ludogorets Razgrad",
                "league": "Bulgarian First League",
                "age": 26,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.8481,
                    "lng": -23.1645
                }
            },
            {
                "name": "Kevin Pina Lenini",
                "position": "MF",
                "club": "Krasnodar",
                "league": "Russian Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
                }
            },
            {
                "name": "Telmo Arcanjo",
                "position": "MF",
                "club": "Vitória de Guimarães",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Laros Duarte",
                "position": "MF",
                "club": "Puskás Akadémia",
                "league": "Hungarian NB I",
                "age": 29,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.4122,
                    "lng": -23.7296
                }
            },
            {
                "name": "Yannick Semedo",
                "position": "MF",
                "club": "Farense",
                "league": "Primeira Liga",
                "age": 30,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.6059,
                    "lng": -23.8168
                }
            },
            {
                "name": "Ayoni Santos",
                "position": "MF",
                "club": "Sparta Rotterdam",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.6416,
                    "lng": -23.9936
                }
            },
            {
                "name": "Ryan Mendes",
                "position": "FW",
                "club": "Iğdır",
                "league": "Turkish Super Lig",
                "age": 36,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.1389,
                    "lng": -24.3862
                }
            },
            {
                "name": "Garry Rodrigues",
                "position": "FW",
                "club": "Apollon Limassol",
                "league": "Cypriot First Division",
                "age": 35,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.9248,
                    "lng": -22.9842
                }
            },
            {
                "name": "Willy Semedo",
                "position": "FW",
                "club": "Omonia",
                "league": "Cypriot First Division",
                "age": 31,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9044,
                    "lng": -23.1211
                }
            },
            {
                "name": "Jovane Cabral",
                "position": "FW",
                "club": "Estrela Amadora",
                "league": "Primeira Liga",
                "age": 27,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.4377,
                    "lng": -22.969
                }
            },
            {
                "name": "Dailon Livramento",
                "position": "FW",
                "club": "Casa Pia",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Nuno da Costa",
                "position": "FW",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 35,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.9836,
                    "lng": -23.0218
                }
            },
            {
                "name": "Ieltsin Camões",
                "position": "FW",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Luanda",
                    "country": "Angola",
                    "lat": -8.8383,
                    "lng": 13.2344
                }
            },
            {
                "name": "Fabio Domingos",
                "position": "FW",
                "club": "Paris Saint-Germain Youth",
                "league": "Ligue 1",
                "age": 18,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 15.5984,
                    "lng": -23.4837
                }
            }
        ]
    },
    "KSA": {
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "confederation": "AFC",
        "fifaRanking": 31,
        "players": [
            {
                "name": "Nawaf Al-Aqidi",
                "position": "GK",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Abdulrahman Al-Sanbi",
                "position": "GK",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Jeddah",
                    "country": "Saudi Arabia",
                    "lat": 21.5428,
                    "lng": 39.1728
                }
            },
            {
                "name": "Raghed Al-Najjar",
                "position": "GK",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
                }
            },
            {
                "name": "Ali Majrashi",
                "position": "DF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
                }
            },
            {
                "name": "Jehad Thakri",
                "position": "DF",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Khobar",
                    "country": "Saudi Arabia",
                    "lat": 26.3,
                    "lng": 50.2167
                }
            },
            {
                "name": "Abdulelah Al-Amri",
                "position": "DF",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Ta'if",
                    "country": "Saudi Arabia",
                    "lat": 21.2667,
                    "lng": 40.4167
                }
            },
            {
                "name": "Hassan Al-Tambakti",
                "position": "DF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Mohammed Abu Al-Shamat",
                "position": "DF",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 25.2406,
                    "lng": 45.7464
                }
            },
            {
                "name": "Nawaf Boushal",
                "position": "DF",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Qatif",
                    "country": "Saudi Arabia",
                    "lat": 26.5752,
                    "lng": 49.9969
                }
            },
            {
                "name": "Waleed Al-Ahmed",
                "position": "DF",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Mohammed Sulaiman",
                "position": "DF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.4383,
                    "lng": 47.2871
                }
            },
            {
                "name": "Nasser Al-Dawsari",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.8142,
                    "lng": 47.6945
                }
            },
            {
                "name": "Musab Al-Juwayr",
                "position": "MF",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Ayman Yahya",
                "position": "MF",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Salem Al-Dawsari",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Abdullah Al-Khaibari",
                "position": "MF",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
                }
            },
            {
                "name": "Murad Hawsawi",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 25.3506,
                    "lng": 46.6058
                }
            },
            {
                "name": "Saleh Abu Al-Shamat",
                "position": "MF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Jeddah",
                    "country": "Saudi Arabia",
                    "lat": 21.5428,
                    "lng": 39.1728
                }
            },
            {
                "name": "Abdulrahman Al-Aboud",
                "position": "MF",
                "club": "Al-Ittihad",
                "league": "Saudi Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
                }
            },
            {
                "name": "Mohamed Kanno",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
                }
            },
            {
                "name": "Firas Al-Buraikan",
                "position": "FW",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Saleh Al-Shehri",
                "position": "FW",
                "club": "Al-Ittihad",
                "league": "Saudi Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Jeddah",
                    "country": "Saudi Arabia",
                    "lat": 21.5428,
                    "lng": 39.1728
                }
            },
            {
                "name": "Abdullah Al-Hamdan",
                "position": "FW",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            }
        ]
    },
    "URU": {
        "name": "Uruguay",
        "flag": "🇺🇾",
        "confederation": "CONMEBOL",
        "fifaRanking": 32,
        "players": [
            {
                "name": "Sergio Rochet",
                "position": "GK",
                "club": "Internacional",
                "league": "Brasileirão",
                "age": 33,
                "birthplace": {
                    "city": "Nueva Palmira",
                    "country": "Uruguay",
                    "lat": -33.87,
                    "lng": -58.408
                }
            },
            {
                "name": "Santiago Mele",
                "position": "GK",
                "club": "Monterrey",
                "league": "Liga MX",
                "age": 28,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Fernando Muslera",
                "position": "GK",
                "club": "Estudiantes",
                "league": "Argentine Primera",
                "age": 39,
                "birthplace": {
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "lat": -34.5997,
                    "lng": -58.3819
                }
            },
            {
                "name": "José María Giménez",
                "position": "DF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Canelones",
                    "country": "Uruguay",
                    "lat": -34.5243,
                    "lng": -56.2818
                }
            },
            {
                "name": "Sebastián Cáceres",
                "position": "DF",
                "club": "América",
                "league": "Liga MX",
                "age": 26,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Ronald Araújo",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Rivera",
                    "country": "Uruguay",
                    "lat": -30.9001,
                    "lng": -55.5408
                }
            },
            {
                "name": "Guillermo Varela",
                "position": "DF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 33,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Mathías Olivera",
                "position": "DF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Matías Viña",
                "position": "DF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 28,
                "birthplace": {
                    "city": "Empalme Olmos",
                    "country": "Uruguay",
                    "lat": -34.6958,
                    "lng": -55.8936
                }
            },
            {
                "name": "Santiago Bueno",
                "position": "DF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "José Luis Rodríguez",
                "position": "DF",
                "club": "Vasco da Gama",
                "league": "Brasileirão",
                "age": 29,
                "birthplace": {
                    "city": "Canelones",
                    "country": "Uruguay",
                    "lat": -34.5243,
                    "lng": -56.2818
                }
            },
            {
                "name": "Joaquín Piquerez",
                "position": "DF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Manuel Ugarte",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Juan Manuel Sanabria",
                "position": "MF",
                "club": "Real Salt Lake",
                "league": "MLS",
                "age": 26,
                "birthplace": {
                    "city": "Florida",
                    "country": "United States",
                    "lat": 28.1333,
                    "lng": -81.6317
                }
            },
            {
                "name": "Nicolás de la Cruz",
                "position": "MF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 28,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Emiliano Martínez",
                "position": "MF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 26,
                "birthplace": {
                    "city": "Punta del Este",
                    "country": "Uruguay",
                    "lat": -34.9557,
                    "lng": -54.9381
                }
            },
            {
                "name": "Giorgian de Arrascaeta",
                "position": "MF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 31,
                "birthplace": {
                    "city": "Nuevo Berlín",
                    "country": "Uruguay",
                    "lat": -32.9792,
                    "lng": -58.0528
                }
            },
            {
                "name": "Federico Valverde",
                "position": "MF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Maximiliano Araújo",
                "position": "MF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Nicolás Fonseca",
                "position": "MF",
                "club": "Oviedo",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Naples",
                    "country": "Italy",
                    "lat": 40.8358,
                    "lng": 14.2486
                }
            },
            {
                "name": "Darwin Núñez",
                "position": "FW",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Artigas",
                    "country": "Uruguay",
                    "lat": -30.3984,
                    "lng": -56.4638
                }
            },
            {
                "name": "Facundo Pellistri",
                "position": "FW",
                "club": "Panathinaikos",
                "league": "Greek Super League",
                "age": 24,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Agustín Canobbio",
                "position": "FW",
                "club": "Fluminense",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Brian Rodríguez",
                "position": "FW",
                "club": "América",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Tranqueras",
                    "country": "Uruguay",
                    "lat": -31.1833,
                    "lng": -55.7667
                }
            },
            {
                "name": "Federico Viñas",
                "position": "FW",
                "club": "Oviedo",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Facundo Torres",
                "position": "FW",
                "club": "Austin FC",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            },
            {
                "name": "Agustín Álvarez",
                "position": "FW",
                "club": "Monza",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "San Bautista",
                    "country": "Uruguay",
                    "lat": -34.44,
                    "lng": -55.9597
                }
            },
            {
                "name": "Rodrigo Aguirre",
                "position": "FW",
                "club": "UANL",
                "league": "Liga MX",
                "age": 31,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
                }
            }
        ]
    },
    "FRA": {
        "name": "France",
        "flag": "🇫🇷",
        "confederation": "UEFA",
        "fifaRanking": 33,
        "players": [
            {
                "name": "Brice Samba",
                "position": "GK",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Linzolo",
                    "country": "Republic of the Congo",
                    "lat": -4.4136,
                    "lng": 15.1069
                }
            },
            {
                "name": "Mike Maignan",
                "position": "GK",
                "club": "AC Milan",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Cayenne",
                    "country": "France",
                    "lat": 4.9386,
                    "lng": -52.335
                }
            },
            {
                "name": "Lucas Chevalier",
                "position": "GK",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Calais",
                    "country": "France",
                    "lat": 50.9475,
                    "lng": 1.8556
                }
            },
            {
                "name": "Malo Gusto",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Décines-Charpieu",
                    "country": "France",
                    "lat": 45.7686,
                    "lng": 4.9589
                }
            },
            {
                "name": "Lucas Digne",
                "position": "DF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Meaux",
                    "country": "France",
                    "lat": 48.9594,
                    "lng": 2.8878
                }
            },
            {
                "name": "Dayot Upamecano",
                "position": "DF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Évreux",
                    "country": "France",
                    "lat": 49.0233,
                    "lng": 1.1525
                }
            },
            {
                "name": "Pierre Kalulu",
                "position": "DF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Lyon",
                    "country": "France",
                    "lat": 45.7675,
                    "lng": 4.835
                }
            },
            {
                "name": "Ibrahima Konaté",
                "position": "DF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "13th arrondissement of Paris",
                    "country": "France",
                    "lat": 48.8322,
                    "lng": 2.3556
                }
            },
            {
                "name": "Maxence Lacroix",
                "position": "DF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Villeneuve-Saint-Georges",
                    "country": "France",
                    "lat": 48.7325,
                    "lng": 2.4497
                }
            },
            {
                "name": "Théo Hernandez",
                "position": "DF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Lucas Hernandez",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Eduardo Camavinga",
                "position": "MF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 23,
                "birthplace": {
                    "city": "Cabinda",
                    "country": "Angola",
                    "lat": -5.5667,
                    "lng": 12.2
                }
            },
            {
                "name": "Aurélien Tchouaméni",
                "position": "MF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Rouen",
                    "country": "France",
                    "lat": 49.4431,
                    "lng": 1.1025
                }
            },
            {
                "name": "N'Golo Kanté",
                "position": "MF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 35,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Adrien Rabiot",
                "position": "MF",
                "club": "AC Milan",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Saint-Maurice",
                    "country": "France",
                    "lat": 48.8183,
                    "lng": 2.4347
                }
            },
            {
                "name": "Warren Zaïre-Emery",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 20,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Ousmane Dembélé",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Vernon",
                    "country": "France",
                    "lat": 49.0917,
                    "lng": 1.485
                }
            },
            {
                "name": "Marcus Thuram",
                "position": "FW",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Parma",
                    "country": "Italy",
                    "lat": 44.8015,
                    "lng": 10.328
                }
            },
            {
                "name": "Kylian Mbappé",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Michael Olise",
                "position": "FW",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "White City",
                    "country": "United Kingdom",
                    "lat": 51.5126,
                    "lng": -0.2245
                }
            },
            {
                "name": "Randal Kolo Muani",
                "position": "FW",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Bondy",
                    "country": "France",
                    "lat": 48.9028,
                    "lng": 2.4836
                }
            },
            {
                "name": "Désiré Doué",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 20,
                "birthplace": {
                    "city": "Angers",
                    "country": "France",
                    "lat": 47.4728,
                    "lng": -0.5556
                }
            },
            {
                "name": "Hugo Ekitike",
                "position": "FW",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Reims",
                    "country": "France",
                    "lat": 49.2653,
                    "lng": 4.0286
                }
            },
            {
                "name": "Rayan Cherki",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Lyon",
                    "country": "France",
                    "lat": 45.7675,
                    "lng": 4.835
                }
            },
            {
                "name": "Maghnes Akliouche",
                "position": "FW",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Tremblay-en-France",
                    "country": "France",
                    "lat": 48.9561,
                    "lng": 2.5764
                }
            }
        ]
    },
    "SEN": {
        "name": "Senegal",
        "flag": "🇸🇳",
        "confederation": "CAF",
        "fifaRanking": 34,
        "players": [
            {
                "name": "Yehvann Diouf",
                "position": "GK",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Mory Diaw",
                "position": "GK",
                "club": "Le Havre",
                "league": "Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Poissy",
                    "country": "France",
                    "lat": 48.9289,
                    "lng": 2.0447
                }
            },
            {
                "name": "Édouard Mendy",
                "position": "GK",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Montivilliers",
                    "country": "France",
                    "lat": 49.5461,
                    "lng": 0.1881
                }
            },
            {
                "name": "Mamadou Sarr",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Martigues",
                    "country": "France",
                    "lat": 43.4053,
                    "lng": 5.0475
                }
            },
            {
                "name": "Abdoulaye Seck",
                "position": "DF",
                "club": "Maccabi Haifa",
                "league": "Israeli Premier League",
                "age": 33,
                "birthplace": {
                    "city": "M'Bour",
                    "country": "Senegal",
                    "lat": 14.4104,
                    "lng": -16.9649
                }
            },
            {
                "name": "Ismail Jakobs",
                "position": "DF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Cologne",
                    "country": "Germany",
                    "lat": 50.9422,
                    "lng": 6.9578
                }
            },
            {
                "name": "Krépin Diatta",
                "position": "DF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Dakar",
                    "country": "Senegal",
                    "lat": 14.6726,
                    "lng": -17.432
                }
            },
            {
                "name": "Moussa Niakhaté",
                "position": "DF",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Roubaix",
                    "country": "France",
                    "lat": 50.69,
                    "lng": 3.1817
                }
            },
            {
                "name": "Antoine Mendy",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "El Hadji Malick Diouf",
                "position": "DF",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Ziguinchor",
                    "country": "Senegal",
                    "lat": 12.5861,
                    "lng": -16.2707
                }
            },
            {
                "name": "Nobel Mendy",
                "position": "DF",
                "club": "Rayo Vallecano",
                "league": "La Liga",
                "age": 21,
                "birthplace": {
                    "city": "Guédiawaye",
                    "country": "Senegal",
                    "lat": 14.7724,
                    "lng": -17.3884
                }
            },
            {
                "name": "Kalidou Koulibaly",
                "position": "DF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Saint-Dié-des-Vosges",
                    "country": "France",
                    "lat": 48.2842,
                    "lng": 6.9492
                }
            },
            {
                "name": "Idrissa Gueye",
                "position": "MF",
                "club": "Everton",
                "league": "Premier League",
                "age": 36,
                "birthplace": {
                    "city": "Dakar",
                    "country": "Senegal",
                    "lat": 14.6726,
                    "lng": -17.432
                }
            },
            {
                "name": "Pathé Ciss",
                "position": "MF",
                "club": "Rayo Vallecano",
                "league": "La Liga",
                "age": 32,
                "birthplace": {
                    "city": "Dakar",
                    "country": "Senegal",
                    "lat": 14.6726,
                    "lng": -17.432
                }
            },
            {
                "name": "Lamine Camara",
                "position": "MF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 22,
                "birthplace": {
                    "city": "Diouloulou",
                    "country": "Senegal",
                    "lat": 13.05,
                    "lng": -16.6
                }
            },
            {
                "name": "Pape Matar Sarr",
                "position": "MF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Thiaroye",
                    "country": "Senegal",
                    "lat": 14.7333,
                    "lng": -17.35
                }
            },
            {
                "name": "Habib Diarra",
                "position": "MF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Guédiawaye",
                    "country": "Senegal",
                    "lat": 14.7724,
                    "lng": -17.3884
                }
            },
            {
                "name": "Pape Gueye",
                "position": "MF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Assane Diao",
                "position": "FW",
                "club": "Como",
                "league": "Serie A",
                "age": 20,
                "birthplace": {
                    "city": "Ndangane",
                    "country": "Senegal",
                    "lat": 14.0747,
                    "lng": -16.6925
                }
            },
            {
                "name": "Boulaye Dia",
                "position": "FW",
                "club": "Lazio",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Oyonnax",
                    "country": "France",
                    "lat": 46.2556,
                    "lng": 5.655
                }
            },
            {
                "name": "Nicolas Jackson",
                "position": "FW",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Senegal",
                    "country": "Senegal",
                    "lat": 14.3667,
                    "lng": -14.2833
                }
            },
            {
                "name": "Cherif Ndiaye",
                "position": "FW",
                "club": "Samsunspor",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Dakar",
                    "country": "Senegal",
                    "lat": 14.6726,
                    "lng": -17.432
                }
            },
            {
                "name": "Ismaïla Sarr",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Saint-Louis",
                    "country": "Senegal",
                    "lat": 16.0333,
                    "lng": -16.5
                }
            },
            {
                "name": "Habib Diallo",
                "position": "FW",
                "club": "Metz",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Thiès",
                    "country": "Senegal",
                    "lat": 14.7916,
                    "lng": -16.9249
                }
            },
            {
                "name": "Ibrahim Mbaye",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 18,
                "birthplace": {
                    "city": "Trappes",
                    "country": "France",
                    "lat": 48.7767,
                    "lng": 2.0017
                }
            },
            {
                "name": "Bamba Dieng",
                "position": "FW",
                "club": "Lorient",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Pikine",
                    "country": "Senegal",
                    "lat": 14.744,
                    "lng": -17.4021
                }
            },
            {
                "name": "Iliman Ndiaye",
                "position": "FW",
                "club": "Everton",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Rouen",
                    "country": "France",
                    "lat": 49.4431,
                    "lng": 1.1025
                }
            },
            {
                "name": "Mamadou Diakhon",
                "position": "FW",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Strasbourg",
                    "country": "France",
                    "lat": 48.5733,
                    "lng": 7.7522
                }
            }
        ]
    },
    "IRQ": {
        "name": "Iraq",
        "flag": "🇮🇶",
        "confederation": "AFC",
        "fifaRanking": 35,
        "players": [
            {
                "name": "Fahad Talib",
                "position": "GK",
                "club": "Al-Talaba",
                "league": "Iraqi Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Ahmed Basil Fadhil",
                "position": "GK",
                "club": "Al-Shorta",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.1316,
                    "lng": 43.7276
                }
            },
            {
                "name": "Kumel Al-Rekabe",
                "position": "GK",
                "club": "Erbil",
                "league": "Iraqi Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 32.6727,
                    "lng": 44.4905
                }
            },
            {
                "name": "Rebin Sulaka",
                "position": "DF",
                "club": "Port",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "Ankawa",
                    "country": "Iraq",
                    "lat": 36.2292,
                    "lng": 43.9936
                }
            },
            {
                "name": "Manaf Younis",
                "position": "DF",
                "club": "Al-Shorta",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Tikrit",
                    "country": "Iraq",
                    "lat": 34.6,
                    "lng": 43.6833
                }
            },
            {
                "name": "Merchas Doski",
                "position": "DF",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 26,
                "birthplace": {
                    "city": "Hanover",
                    "country": "Germany",
                    "lat": 52.3744,
                    "lng": 9.7386
                }
            },
            {
                "name": "Frans Putros",
                "position": "DF",
                "club": "Persib",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "Aarhus",
                    "country": "Denmark",
                    "lat": 56.1564,
                    "lng": 10.2097
                }
            },
            {
                "name": "Hussein Ali",
                "position": "DF",
                "club": "Pogoń Szczecin",
                "league": "Polish Ekstraklasa",
                "age": 24,
                "birthplace": {
                    "city": "Malmö",
                    "country": "Sweden",
                    "lat": 55.5833,
                    "lng": 13
                }
            },
            {
                "name": "Zaid Tahseen",
                "position": "DF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Najaf",
                    "country": "Iraq",
                    "lat": 32.029,
                    "lng": 44.3396
                }
            },
            {
                "name": "Akam Hashim",
                "position": "DF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Erbil",
                    "country": "Iraq",
                    "lat": 36.1911,
                    "lng": 44.0094
                }
            },
            {
                "name": "Ahmed Maknzi",
                "position": "DF",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Ibrahim Bayesh",
                "position": "MF",
                "club": "Al-Dhafra",
                "league": "UAE Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Iraq",
                    "country": "Iraq",
                    "lat": 33,
                    "lng": 43
                }
            },
            {
                "name": "Amir Al-Ammari",
                "position": "MF",
                "club": "Cracovia",
                "league": "Polish Ekstraklasa",
                "age": 28,
                "birthplace": {
                    "city": "Jönköping",
                    "country": "Sweden",
                    "lat": 57.7833,
                    "lng": 14.1667
                }
            },
            {
                "name": "Ali Jasim",
                "position": "MF",
                "club": "Al-Najma",
                "league": "Saudi Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Youssef Amyn",
                "position": "MF",
                "club": "AEK Larnaca",
                "league": "Cypriot First Division",
                "age": 22,
                "birthplace": {
                    "city": "Essen",
                    "country": "Germany",
                    "lat": 51.4508,
                    "lng": 7.0131
                }
            },
            {
                "name": "Zidane Iqbal",
                "position": "MF",
                "club": "Utrecht",
                "league": "Eredivisie",
                "age": 22,
                "birthplace": {
                    "city": "Manchester",
                    "country": "United Kingdom",
                    "lat": 53.4667,
                    "lng": -2.2333
                }
            },
            {
                "name": "Hasan Abdulkareem",
                "position": "MF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Marko Farji",
                "position": "MF",
                "club": "Venezia",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Grimstad",
                    "country": "Norway",
                    "lat": 58.3519,
                    "lng": 8.5444
                }
            },
            {
                "name": "Kevin Yakob",
                "position": "MF",
                "club": "AGF",
                "league": "Danish Superliga",
                "age": 25,
                "birthplace": {
                    "city": "Gothenburg",
                    "country": "Sweden",
                    "lat": 57.7075,
                    "lng": 11.9675
                }
            },
            {
                "name": "Aimar Sher",
                "position": "MF",
                "club": "Sarpsborg",
                "league": "Norwegian Eliteserien",
                "age": 23,
                "birthplace": {
                    "city": "Iraq",
                    "country": "Iraq",
                    "lat": 33,
                    "lng": 43
                }
            },
            {
                "name": "Peter Gwargis",
                "position": "MF",
                "club": "Duhok",
                "league": "Iraqi Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.8678,
                    "lng": 151.21
                }
            },
            {
                "name": "Zaid Ismail",
                "position": "MF",
                "club": "Al-Talaba",
                "league": "Iraqi Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 32.9429,
                    "lng": 45.3259
                }
            },
            {
                "name": "Aymen Hussein",
                "position": "FW",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Hawija",
                    "country": "Iraq",
                    "lat": 35.3232,
                    "lng": 43.774
                }
            },
            {
                "name": "Mohanad Ali",
                "position": "FW",
                "club": "Dibba",
                "league": "UAE Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Ali Al-Hamadi",
                "position": "FW",
                "club": "Luton Town",
                "league": "EFL League One",
                "age": 24,
                "birthplace": {
                    "city": "Maysan Governorate",
                    "country": "Iraq",
                    "lat": 31.9,
                    "lng": 47.0333
                }
            },
            {
                "name": "Ali Yousif",
                "position": "FW",
                "club": "Al-Talaba",
                "league": "Iraqi Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Iraq",
                    "country": "Iraq",
                    "lat": 33,
                    "lng": 43
                }
            }
        ]
    },
    "NOR": {
        "name": "Norway",
        "flag": "🇳🇴",
        "confederation": "UEFA",
        "fifaRanking": 36,
        "players": [
            {
                "name": "Ørjan Nyland",
                "position": "GK",
                "club": "Sevilla",
                "league": "La Liga",
                "age": 35,
                "birthplace": {
                    "city": "Volda Municipality",
                    "country": "Norway",
                    "lat": 62.1468,
                    "lng": 6.068
                }
            },
            {
                "name": "Viljar Myhra",
                "position": "GK",
                "club": "OB",
                "league": "Danish Superliga",
                "age": 29,
                "birthplace": {
                    "city": "Skien",
                    "country": "Norway",
                    "lat": 59.2081,
                    "lng": 9.5528
                }
            },
            {
                "name": "Egil Selvik",
                "position": "GK",
                "club": "Watford",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Sandnes Municipality",
                    "country": "Norway",
                    "lat": 58.845,
                    "lng": 5.8294
                }
            },
            {
                "name": "Kristoffer Ajer",
                "position": "DF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Rælingen",
                    "country": "Norway",
                    "lat": 59.8892,
                    "lng": 11.0753
                }
            },
            {
                "name": "Leo Skiri Østigård",
                "position": "DF",
                "club": "Genoa",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Molde Municipality",
                    "country": "Norway",
                    "lat": 62.7333,
                    "lng": 7.1833
                }
            },
            {
                "name": "David Møller Wolfe",
                "position": "DF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Bergen",
                    "country": "Norway",
                    "lat": 60.3925,
                    "lng": 5.3233
                }
            },
            {
                "name": "Julian Ryerson",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Lyngdal Municipality",
                    "country": "Norway",
                    "lat": 58.1333,
                    "lng": 7.0833
                }
            },
            {
                "name": "Fredrik André Bjørkan",
                "position": "DF",
                "club": "Bodø/Glimt",
                "league": "Norwegian Eliteserien",
                "age": 27,
                "birthplace": {
                    "city": "Bodø Municipality",
                    "country": "Norway",
                    "lat": 67.2831,
                    "lng": 14.3831
                }
            },
            {
                "name": "Marcus Holmgren Pedersen",
                "position": "DF",
                "club": "Torino",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Hammerfest",
                    "country": "Norway",
                    "lat": 70.6634,
                    "lng": 23.6821
                }
            },
            {
                "name": "Torbjørn Heggem",
                "position": "DF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Trondheim",
                    "country": "Norway",
                    "lat": 63.44,
                    "lng": 10.4
                }
            },
            {
                "name": "Odin Bjørtuft",
                "position": "DF",
                "club": "Bodø/Glimt",
                "league": "Norwegian Eliteserien",
                "age": 27,
                "birthplace": {
                    "city": "Skien",
                    "country": "Norway",
                    "lat": 59.2081,
                    "lng": 9.5528
                }
            },
            {
                "name": "Henrik Falchener",
                "position": "DF",
                "club": "Viking",
                "league": "Norwegian Eliteserien",
                "age": 22,
                "birthplace": {
                    "city": "Oslo",
                    "country": "Norway",
                    "lat": 60.4383,
                    "lng": 10.3719
                }
            },
            {
                "name": "Morten Thorsby",
                "position": "MF",
                "club": "Cremonese",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Oslo",
                    "country": "Norway",
                    "lat": 59.9133,
                    "lng": 10.7389
                }
            },
            {
                "name": "Patrick Berg",
                "position": "MF",
                "club": "Bodø/Glimt",
                "league": "Norwegian Eliteserien",
                "age": 28,
                "birthplace": {
                    "city": "Bodø",
                    "country": "Norway",
                    "lat": 67.2827,
                    "lng": 14.3751
                }
            },
            {
                "name": "Sander Berge",
                "position": "MF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Bærum Municipality",
                    "country": "Norway",
                    "lat": 59.8904,
                    "lng": 10.526
                }
            },
            {
                "name": "Jens Petter Hauge",
                "position": "MF",
                "club": "Bodø/Glimt",
                "league": "Norwegian Eliteserien",
                "age": 26,
                "birthplace": {
                    "city": "Bodø",
                    "country": "Norway",
                    "lat": 67.2827,
                    "lng": 14.3751
                }
            },
            {
                "name": "Kristian Thorstvedt",
                "position": "MF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Stavanger",
                    "country": "Norway",
                    "lat": 58.97,
                    "lng": 5.7314
                }
            },
            {
                "name": "Felix Horn Myhre",
                "position": "MF",
                "club": "Brann",
                "league": "Norwegian Eliteserien",
                "age": 27,
                "birthplace": {
                    "city": "Norway",
                    "country": "Norway",
                    "lat": 59.9333,
                    "lng": 10.6833
                }
            },
            {
                "name": "Antonio Nusa",
                "position": "MF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Langhus",
                    "country": "Norway",
                    "lat": 59.75,
                    "lng": 10.8333
                }
            },
            {
                "name": "Andreas Schjelderup",
                "position": "MF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 21,
                "birthplace": {
                    "city": "Bodø Municipality",
                    "country": "Norway",
                    "lat": 67.2831,
                    "lng": 14.3831
                }
            },
            {
                "name": "Oscar Bobb",
                "position": "MF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Oslo",
                    "country": "Norway",
                    "lat": 59.9133,
                    "lng": 10.7389
                }
            },
            {
                "name": "Alexander Sørloth",
                "position": "FW",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Trondheim",
                    "country": "Norway",
                    "lat": 63.44,
                    "lng": 10.4
                }
            },
            {
                "name": "Erling Haaland",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Leeds",
                    "country": "United Kingdom",
                    "lat": 53.7975,
                    "lng": -1.5436
                }
            },
            {
                "name": "Jørgen Strand Larsen",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Halden",
                    "country": "Norway",
                    "lat": 59.1264,
                    "lng": 11.4828
                }
            }
        ]
    },
    "ARG": {
        "name": "Argentina",
        "flag": "🇦🇷",
        "confederation": "CONMEBOL",
        "fifaRanking": 37,
        "players": [
            {
                "name": "Juan Musso",
                "position": "GK",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "San Nicolás de los Arroyos",
                    "country": "Argentina",
                    "lat": -33.3333,
                    "lng": -60.2167
                }
            },
            {
                "name": "Gerónimo Rulli",
                "position": "GK",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 33,
                "birthplace": {
                    "city": "La Plata",
                    "country": "Argentina",
                    "lat": -34.9333,
                    "lng": -57.95
                }
            },
            {
                "name": "Emiliano Martínez",
                "position": "GK",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Mar del Plata",
                    "country": "Argentina",
                    "lat": -38,
                    "lng": -57.55
                }
            },
            {
                "name": "Lucas Martínez Quarta",
                "position": "DF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 29,
                "birthplace": {
                    "city": "Mar del Plata",
                    "country": "Argentina",
                    "lat": -38,
                    "lng": -57.55
                }
            },
            {
                "name": "Nicolás Tagliafico",
                "position": "DF",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 33,
                "birthplace": {
                    "city": "Rafael Calzada",
                    "country": "Argentina",
                    "lat": -34.7833,
                    "lng": -58.3667
                }
            },
            {
                "name": "Agustín Giay",
                "position": "DF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 22,
                "birthplace": {
                    "city": "San Carlos Centro",
                    "country": "Argentina",
                    "lat": -31.7333,
                    "lng": -61.1
                }
            },
            {
                "name": "Marcos Acuña",
                "position": "DF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 34,
                "birthplace": {
                    "city": "Zapala",
                    "country": "Argentina",
                    "lat": -38.9028,
                    "lng": -70.065
                }
            },
            {
                "name": "Cristian Romero",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Córdoba",
                    "country": "Argentina",
                    "lat": -31.4167,
                    "lng": -64.1833
                }
            },
            {
                "name": "Nicolás Otamendi",
                "position": "DF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 38,
                "birthplace": {
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "lat": -34.5997,
                    "lng": -58.3819
                }
            },
            {
                "name": "Nahuel Molina",
                "position": "DF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Embalse",
                    "country": "Argentina",
                    "lat": -32.2045,
                    "lng": -64.4005
                }
            },
            {
                "name": "Leandro Paredes",
                "position": "MF",
                "club": "Boca Juniors",
                "league": "Argentine Primera",
                "age": 31,
                "birthplace": {
                    "city": "San Justo",
                    "country": "Argentina",
                    "lat": -34.6833,
                    "lng": -58.55
                }
            },
            {
                "name": "Valentín Barco",
                "position": "MF",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "lat": -34.5997,
                    "lng": -58.3819
                }
            },
            {
                "name": "Rodrigo De Paul",
                "position": "MF",
                "club": "Inter Miami",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Sarandí",
                    "country": "Argentina",
                    "lat": -34.6833,
                    "lng": -58.3333
                }
            },
            {
                "name": "Thiago Almada",
                "position": "MF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Fuerte Apache",
                    "country": "Argentina",
                    "lat": -34.6206,
                    "lng": -58.5392
                }
            },
            {
                "name": "Exequiel Palacios",
                "position": "MF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Famaillá",
                    "country": "Argentina",
                    "lat": -27.05,
                    "lng": -65.4
                }
            },
            {
                "name": "Máximo Perrone",
                "position": "MF",
                "club": "Como",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "lat": -34.5997,
                    "lng": -58.3819
                }
            },
            {
                "name": "Nico Paz",
                "position": "MF",
                "club": "Como",
                "league": "Serie A",
                "age": 21,
                "birthplace": {
                    "city": "Santa Cruz de Tenerife",
                    "country": "Spain",
                    "lat": 28.4667,
                    "lng": -16.25
                }
            },
            {
                "name": "Alexis Mac Allister",
                "position": "MF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Santa Rosa",
                    "country": "Argentina",
                    "lat": -36.6203,
                    "lng": -64.2906
                }
            },
            {
                "name": "Enzo Fernández",
                "position": "MF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "General San Martín",
                    "country": "Argentina",
                    "lat": -34.5772,
                    "lng": -58.5376
                }
            },
            {
                "name": "Julián Alvarez",
                "position": "FW",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Calchín",
                    "country": "Argentina",
                    "lat": -31.6667,
                    "lng": -63.2
                }
            },
            {
                "name": "Lionel Messi",
                "position": "FW",
                "club": "Inter Miami",
                "league": "MLS",
                "age": 38,
                "birthplace": {
                    "city": "Rosario",
                    "country": "Argentina",
                    "lat": -32.9575,
                    "lng": -60.6394
                }
            },
            {
                "name": "Nicolás González",
                "position": "FW",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Belén de Escobar",
                    "country": "Argentina",
                    "lat": -34.3333,
                    "lng": -58.8167
                }
            },
            {
                "name": "Giuliano Simeone",
                "position": "FW",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 23,
                "birthplace": {
                    "city": "Rome",
                    "country": "Italy",
                    "lat": 41.8931,
                    "lng": 12.4828
                }
            },
            {
                "name": "José Manuel López",
                "position": "FW",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 25,
                "birthplace": {
                    "city": "San Lorenzo",
                    "country": "Argentina",
                    "lat": -32.75,
                    "lng": -60.7333
                }
            },
            {
                "name": "Franco Mastantuono",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 18,
                "birthplace": {
                    "city": "Azul",
                    "country": "Argentina",
                    "lat": -36.7833,
                    "lng": -59.85
                }
            },
            {
                "name": "Gianluca Prestianni",
                "position": "FW",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 20,
                "birthplace": {
                    "city": "Ciudadela",
                    "country": "Argentina",
                    "lat": -34.6333,
                    "lng": -58.5333
                }
            }
        ]
    },
    "ALG": {
        "name": "Algeria",
        "flag": "🇩🇿",
        "confederation": "CAF",
        "fifaRanking": 38,
        "players": [
            {
                "name": "Anthony Mandrea",
                "position": "GK",
                "club": "Caen",
                "league": "Ligue 2",
                "age": 29,
                "birthplace": {
                    "city": "Grasse",
                    "country": "France",
                    "lat": 43.6581,
                    "lng": 6.9253
                }
            },
            {
                "name": "Luca Zidane",
                "position": "GK",
                "club": "Granada",
                "league": "Segunda División",
                "age": 27,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Melvin Mastil",
                "position": "GK",
                "club": "Stade Nyonnais",
                "league": "Swiss Super League",
                "age": 26,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 37.6062,
                    "lng": 3.0972
                }
            },
            {
                "name": "Kilian Belazzoug",
                "position": "GK",
                "club": "Rennes B",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 37.6082,
                    "lng": 4.0491
                }
            },
            {
                "name": "Aïssa Mandi",
                "position": "DF",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 34,
                "birthplace": {
                    "city": "Châlons-en-Champagne",
                    "country": "France",
                    "lat": 48.9567,
                    "lng": 4.3644
                }
            },
            {
                "name": "Ramy Bensebaini",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Constantine",
                    "country": "Algeria",
                    "lat": 36.365,
                    "lng": 6.6147
                }
            },
            {
                "name": "Rayan Aït-Nouri",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Rafik Belghali",
                "position": "DF",
                "club": "Hellas Verona",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Leuven",
                    "country": "Belgium",
                    "lat": 50.8775,
                    "lng": 4.7044
                }
            },
            {
                "name": "Zineddine Belaïd",
                "position": "DF",
                "club": "JS Kabylie",
                "league": "Algerian Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Thénia",
                    "country": "Algeria",
                    "lat": 36.7278,
                    "lng": 3.5539
                }
            },
            {
                "name": "Achref Abada",
                "position": "DF",
                "club": "USM Alger",
                "league": "Algerian Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 37.2119,
                    "lng": 3.6
                }
            },
            {
                "name": "Mehdi Dorval",
                "position": "DF",
                "club": "Bari",
                "league": "Serie B",
                "age": 25,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Sohaib Naïr",
                "position": "DF",
                "club": "Guingamp",
                "league": "Ligue 2",
                "age": 23,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 37.3824,
                    "lng": 3.3153
                }
            },
            {
                "name": "Ramiz Zerrouki",
                "position": "MF",
                "club": "Twente",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Hicham Boudaoui",
                "position": "MF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Béchar",
                    "country": "Algeria",
                    "lat": 31.6164,
                    "lng": -2.2183
                }
            },
            {
                "name": "Farès Chaïbi",
                "position": "MF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "3rd arrondissement of Lyon",
                    "country": "France",
                    "lat": 45.7586,
                    "lng": 4.8558
                }
            },
            {
                "name": "Houssem Aouar",
                "position": "MF",
                "club": "Al-Ittihad",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Lyon",
                    "country": "France",
                    "lat": 45.7675,
                    "lng": 4.835
                }
            },
            {
                "name": "Ibrahim Maza",
                "position": "MF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Berlin",
                    "country": "Germany",
                    "lat": 52.5167,
                    "lng": 13.3833
                }
            },
            {
                "name": "Yacine Titraoui",
                "position": "MF",
                "club": "Charleroi",
                "league": "Belgian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Algeria",
                    "country": "Algeria",
                    "lat": 28,
                    "lng": 1
                }
            },
            {
                "name": "Adil Aouchiche",
                "position": "MF",
                "club": "Schalke 04",
                "league": "2. Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Le Blanc-Mesnil",
                    "country": "France",
                    "lat": 48.9386,
                    "lng": 2.4611
                }
            },
            {
                "name": "Riyad Mahrez",
                "position": "FW",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 35,
                "birthplace": {
                    "city": "Clichy",
                    "country": "France",
                    "lat": 48.9036,
                    "lng": 2.3056
                }
            },
            {
                "name": "Mohamed Amoura",
                "position": "FW",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Taher",
                    "country": "Algeria",
                    "lat": 36.772,
                    "lng": 5.8982
                }
            },
            {
                "name": "Amine Gouiri",
                "position": "FW",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Bourgoin-Jallieu",
                    "country": "France",
                    "lat": 45.5908,
                    "lng": 5.2792
                }
            },
            {
                "name": "Anis Hadj Moussa",
                "position": "FW",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Adil Boulbina",
                "position": "FW",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 22,
                "birthplace": {
                    "city": "El Milia",
                    "country": "Algeria",
                    "lat": 36.7514,
                    "lng": 6.2744
                }
            },
            {
                "name": "Amin Chiakha",
                "position": "FW",
                "club": "Rosenborg",
                "league": "Norwegian Eliteserien",
                "age": 20,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Nadhir Benbouali",
                "position": "FW",
                "club": "Győr",
                "league": "Hungarian NB I",
                "age": 25,
                "birthplace": {
                    "city": "Chlef",
                    "country": "Algeria",
                    "lat": 36.1647,
                    "lng": 1.3317
                }
            },
            {
                "name": "Farès Ghedjemis",
                "position": "FW",
                "club": "Frosinone",
                "league": "Serie B",
                "age": 23,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 36.1121,
                    "lng": 3.6606
                }
            }
        ]
    },
    "AUT": {
        "name": "Austria",
        "flag": "🇦🇹",
        "confederation": "UEFA",
        "fifaRanking": 39,
        "players": [
            {
                "name": "Alexander Schlager",
                "position": "GK",
                "club": "Red Bull Salzburg",
                "league": "Austrian Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Salzburg",
                    "country": "Austria",
                    "lat": 47.8,
                    "lng": 13.045
                }
            },
            {
                "name": "Tobias Lawal",
                "position": "GK",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Linz",
                    "country": "Austria",
                    "lat": 48.3058,
                    "lng": 14.2864
                }
            },
            {
                "name": "Patrick Pentz",
                "position": "GK",
                "club": "Brøndby",
                "league": "Danish Superliga",
                "age": 29,
                "birthplace": {
                    "city": "Salzburg",
                    "country": "Austria",
                    "lat": 47.8,
                    "lng": 13.045
                }
            },
            {
                "name": "Florian Wiegele",
                "position": "GK",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Graz",
                    "country": "Austria",
                    "lat": 47.0708,
                    "lng": 15.4386
                }
            },
            {
                "name": "David Affengruber",
                "position": "DF",
                "club": "Elche",
                "league": "Segunda División",
                "age": 25,
                "birthplace": {
                    "city": "Scheibbs",
                    "country": "Austria",
                    "lat": 48,
                    "lng": 15.1667
                }
            },
            {
                "name": "Kevin Danso",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Voitsberg",
                    "country": "Austria",
                    "lat": 47.0483,
                    "lng": 15.1503
                }
            },
            {
                "name": "Stefan Posch",
                "position": "DF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Judenburg",
                    "country": "Austria",
                    "lat": 47.1725,
                    "lng": 14.6603
                }
            },
            {
                "name": "David Alaba",
                "position": "DF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Philipp Lienhart",
                "position": "DF",
                "club": "SC Freiburg",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Lilienfeld",
                    "country": "Austria",
                    "lat": 48.0167,
                    "lng": 15.6
                }
            },
            {
                "name": "Phillipp Mwene",
                "position": "DF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Alexander Prass",
                "position": "DF",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Hellmonsödt",
                    "country": "Austria",
                    "lat": 48.4325,
                    "lng": 14.3003
                }
            },
            {
                "name": "Marco Friedl",
                "position": "DF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Kirchbichl",
                    "country": "Austria",
                    "lat": 47.5167,
                    "lng": 12.0667
                }
            },
            {
                "name": "Michael Svoboda",
                "position": "DF",
                "club": "Venezia",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Maximilian Wöber",
                "position": "DF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Xaver Schlager",
                "position": "MF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Linz",
                    "country": "Austria",
                    "lat": 48.3058,
                    "lng": 14.2864
                }
            },
            {
                "name": "Nicolas Seiwald",
                "position": "MF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Austria",
                    "country": "Austria",
                    "lat": 48,
                    "lng": 14
                }
            },
            {
                "name": "Marcel Sabitzer",
                "position": "MF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Wels",
                    "country": "Austria",
                    "lat": 48.15,
                    "lng": 14.0167
                }
            },
            {
                "name": "Florian Grillitsch",
                "position": "MF",
                "club": "Braga",
                "league": "Primeira Liga",
                "age": 30,
                "birthplace": {
                    "city": "Neunkirchen",
                    "country": "Austria",
                    "lat": 47.7269,
                    "lng": 16.0817
                }
            },
            {
                "name": "Carney Chukwuemeka",
                "position": "MF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Eisenstadt",
                    "country": "Austria",
                    "lat": 47.8456,
                    "lng": 16.5233
                }
            },
            {
                "name": "Romano Schmid",
                "position": "MF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Graz",
                    "country": "Austria",
                    "lat": 47.0708,
                    "lng": 15.4386
                }
            },
            {
                "name": "Christoph Baumgartner",
                "position": "MF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Horn",
                    "country": "Austria",
                    "lat": 48.6653,
                    "lng": 15.6558
                }
            },
            {
                "name": "Konrad Laimer",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Salzburg",
                    "country": "Austria",
                    "lat": 47.8,
                    "lng": 13.045
                }
            },
            {
                "name": "Patrick Wimmer",
                "position": "MF",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Tulln an der Donau",
                    "country": "Austria",
                    "lat": 48.3333,
                    "lng": 16.05
                }
            },
            {
                "name": "Paul Wanner",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Dornbirn",
                    "country": "Austria",
                    "lat": 47.4167,
                    "lng": 9.75
                }
            },
            {
                "name": "Alessandro Schöpf",
                "position": "MF",
                "club": "Wolfsberger AC",
                "league": "Austrian Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Umhausen",
                    "country": "Austria",
                    "lat": 47.1167,
                    "lng": 10.9167
                }
            },
            {
                "name": "Marko Arnautović",
                "position": "FW",
                "club": "Red Star Belgrade",
                "league": "Serbian SuperLiga",
                "age": 36,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Michael Gregoritsch",
                "position": "FW",
                "club": "Augsburg",
                "league": "Bundesliga",
                "age": 31,
                "birthplace": {
                    "city": "Graz",
                    "country": "Austria",
                    "lat": 47.0708,
                    "lng": 15.4386
                }
            },
            {
                "name": "Saša Kalajdžić",
                "position": "FW",
                "club": "LASK",
                "league": "Austrian Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Horn",
                    "country": "Austria",
                    "lat": 48.6653,
                    "lng": 15.6558
                }
            }
        ]
    },
    "JOR": {
        "name": "Jordan",
        "flag": "🇯🇴",
        "confederation": "AFC",
        "fifaRanking": 40,
        "players": [
            {
                "name": "Yazeed Abulaila",
                "position": "GK",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Zarqa",
                    "country": "Jordan",
                    "lat": 32.0833,
                    "lng": 36.1
                }
            },
            {
                "name": "Abdallah Al-Fakhouri",
                "position": "GK",
                "club": "Al-Wehdat",
                "league": "Jordanian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Russeifa",
                    "country": "Jordan",
                    "lat": 32.0178,
                    "lng": 36.0464
                }
            },
            {
                "name": "Abdel Rahman Al-Talalga",
                "position": "GK",
                "club": "Al-Faisaly",
                "league": "Jordanian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.64,
                    "lng": 35.6094
                }
            },
            {
                "name": "Abdallah Nasib",
                "position": "DF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Aqaba",
                    "country": "Jordan",
                    "lat": 29.5322,
                    "lng": 35.0061
                }
            },
            {
                "name": "Yazan Al-Arab",
                "position": "DF",
                "club": "FC Seoul",
                "league": "K League 1",
                "age": 30,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Husam Abu Dahab",
                "position": "DF",
                "club": "Al-Faisaly",
                "league": "Jordanian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Jordan",
                    "country": "Jordan",
                    "lat": 31.2,
                    "lng": 36.5
                }
            },
            {
                "name": "Mohammad Abualnadi",
                "position": "DF",
                "club": "Selangor",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.4273,
                    "lng": 36.1428
                }
            },
            {
                "name": "Yousef Abu Al-Jazar",
                "position": "DF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.5558,
                    "lng": 35.8065
                }
            },
            {
                "name": "Salim Obaid",
                "position": "DF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Ahmad Assaf",
                "position": "DF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.3826,
                    "lng": 36.825
                }
            },
            {
                "name": "Noor Al-Rawabdeh",
                "position": "MF",
                "club": "Selangor",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Ibrahim Sa'deh",
                "position": "MF",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 32.3002,
                    "lng": 36.0939
                }
            },
            {
                "name": "Mohammad Abu Hashish",
                "position": "MF",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Jordan",
                    "country": "Jordan",
                    "lat": 31.2,
                    "lng": 36.5
                }
            },
            {
                "name": "Nizar Al-Rashdan",
                "position": "MF",
                "club": "Qatar SC",
                "league": "Qatar Stars League",
                "age": 27,
                "birthplace": {
                    "city": "Irbid",
                    "country": "Jordan",
                    "lat": 32.5556,
                    "lng": 35.85
                }
            },
            {
                "name": "Mohannad Abu Taha",
                "position": "MF",
                "club": "Al-Quwa Al-Jawiya",
                "league": "Iraqi Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Amer Jamous",
                "position": "MF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Jordan",
                    "country": "Jordan",
                    "lat": 31.2,
                    "lng": 36.5
                }
            },
            {
                "name": "Mohammad Al-Dawoud",
                "position": "MF",
                "club": "Al-Wehdat",
                "league": "Jordanian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Ar Ramtha",
                    "country": "Jordan",
                    "lat": 32.5592,
                    "lng": 36.0069
                }
            },
            {
                "name": "Yousef Qashi",
                "position": "MF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 32.6796,
                    "lng": 36.1492
                }
            },
            {
                "name": "Mohammad Taha",
                "position": "MF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.1425,
                    "lng": 35.7612
                }
            },
            {
                "name": "Musa Al-Taamari",
                "position": "FW",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Mahmoud Al-Mardi",
                "position": "FW",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Aqaba",
                    "country": "Jordan",
                    "lat": 29.5322,
                    "lng": 35.0061
                }
            },
            {
                "name": "Baha' Faisal",
                "position": "FW",
                "club": "Al-Waab",
                "league": "Qatar Stars League",
                "age": 30,
                "birthplace": {
                    "city": "Zarqa",
                    "country": "Jordan",
                    "lat": 32.0833,
                    "lng": 36.1
                }
            },
            {
                "name": "Mohammad Abu Zrayq",
                "position": "FW",
                "club": "Raja Casablanca",
                "league": "Botola Pro",
                "age": 28,
                "birthplace": {
                    "city": "Ar Ramtha",
                    "country": "Jordan",
                    "lat": 32.5592,
                    "lng": 36.0069
                }
            },
            {
                "name": "Ibrahim Sabra",
                "position": "FW",
                "club": "Lokomotiva Zagreb",
                "league": "Croatian First League",
                "age": 20,
                "birthplace": {
                    "city": "Sahab",
                    "country": "Jordan",
                    "lat": 31.9158,
                    "lng": 36.2319
                }
            },
            {
                "name": "Odeh Al-Fakhouri",
                "position": "FW",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Ali Azaizeh",
                "position": "FW",
                "club": "Al-Shabab",
                "league": "Saudi Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Germany",
                    "country": "Germany",
                    "lat": 51,
                    "lng": 10
                }
            }
        ]
    },
    "POR": {
        "name": "Portugal",
        "flag": "🇵🇹",
        "confederation": "UEFA",
        "fifaRanking": 41,
        "players": [
            {
                "name": "Ricardo Velho",
                "position": "GK",
                "club": "Gençlerbirliği",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "Vila Nova de Famalicão",
                    "country": "Portugal",
                    "lat": 41.4167,
                    "lng": -8.5167
                }
            },
            {
                "name": "José Sá",
                "position": "GK",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Braga",
                    "country": "Portugal",
                    "lat": 41.5333,
                    "lng": -8.4167
                }
            },
            {
                "name": "Rui Silva",
                "position": "GK",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 32,
                "birthplace": {
                    "city": "Maia",
                    "country": "Portugal",
                    "lat": 41.2333,
                    "lng": -8.6167
                }
            },
            {
                "name": "Diogo Dalot",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Braga",
                    "country": "Portugal",
                    "lat": 41.5333,
                    "lng": -8.4167
                }
            },
            {
                "name": "Tomás Araújo",
                "position": "DF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 23,
                "birthplace": {
                    "city": "Vila Nova de Famalicão",
                    "country": "Portugal",
                    "lat": 41.4167,
                    "lng": -8.5167
                }
            },
            {
                "name": "António Silva",
                "position": "DF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Viseu",
                    "country": "Portugal",
                    "lat": 40.6575,
                    "lng": -7.9139
                }
            },
            {
                "name": "Renato Veiga",
                "position": "DF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Gonçalo Inácio",
                "position": "DF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Almada",
                    "country": "Portugal",
                    "lat": 38.6803,
                    "lng": -9.1583
                }
            },
            {
                "name": "João Cancelo",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Barreiro",
                    "country": "Portugal",
                    "lat": 38.6609,
                    "lng": -9.0733
                }
            },
            {
                "name": "Nuno Mendes",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Sintra",
                    "country": "Portugal",
                    "lat": 38.7974,
                    "lng": -9.3904
                }
            },
            {
                "name": "Samú Costa",
                "position": "MF",
                "club": "Mallorca",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "Aveiro",
                    "country": "Portugal",
                    "lat": 40.6389,
                    "lng": -8.6553
                }
            },
            {
                "name": "Matheus Nunes",
                "position": "MF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Rio de Janeiro",
                    "country": "Brazil",
                    "lat": -22.9111,
                    "lng": -43.2056
                }
            },
            {
                "name": "Bruno Fernandes",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Maia",
                    "country": "Portugal",
                    "lat": 41.2333,
                    "lng": -8.6167
                }
            },
            {
                "name": "Mateus Fernandes",
                "position": "MF",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Olhão",
                    "country": "Portugal",
                    "lat": 37.0278,
                    "lng": -7.8389
                }
            },
            {
                "name": "João Neves",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Tavira",
                    "country": "Portugal",
                    "lat": 37.1309,
                    "lng": -7.6506
                }
            },
            {
                "name": "Francisco Trincão",
                "position": "MF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Viana do Castelo",
                    "country": "Portugal",
                    "lat": 41.7,
                    "lng": -8.8333
                }
            },
            {
                "name": "Rúben Neves",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Mozelos",
                    "country": "Portugal",
                    "lat": 40.9992,
                    "lng": -8.5561
                }
            },
            {
                "name": "Vitinha",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Faro",
                    "country": "Portugal",
                    "lat": 37.0161,
                    "lng": -7.935
                }
            },
            {
                "name": "Gonçalo Guedes",
                "position": "FW",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Benavente",
                    "country": "Portugal",
                    "lat": 38.9833,
                    "lng": -8.8167
                }
            },
            {
                "name": "Gonçalo Ramos",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Olhão",
                    "country": "Portugal",
                    "lat": 37.0278,
                    "lng": -7.8389
                }
            },
            {
                "name": "João Félix",
                "position": "FW",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Viseu",
                    "country": "Portugal",
                    "lat": 40.6575,
                    "lng": -7.9139
                }
            },
            {
                "name": "Paulinho",
                "position": "FW",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 33,
                "birthplace": {
                    "city": "Barcelos",
                    "country": "Portugal",
                    "lat": 41.5333,
                    "lng": -8.6167
                }
            },
            {
                "name": "Pedro Neto",
                "position": "FW",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Viana do Castelo",
                    "country": "Portugal",
                    "lat": 41.7,
                    "lng": -8.8333
                }
            },
            {
                "name": "Pedro Gonçalves",
                "position": "FW",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 27,
                "birthplace": {
                    "city": "Chaves",
                    "country": "Portugal",
                    "lat": 41.7399,
                    "lng": -7.4707
                }
            },
            {
                "name": "Ricardo Horta",
                "position": "FW",
                "club": "Braga",
                "league": "Primeira Liga",
                "age": 31,
                "birthplace": {
                    "city": "Sobreda",
                    "country": "Portugal",
                    "lat": 38.6496,
                    "lng": -9.1898
                }
            },
            {
                "name": "Francisco Conceição",
                "position": "FW",
                "club": "Juventus",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Coimbra",
                    "country": "Portugal",
                    "lat": 40.2111,
                    "lng": -8.4289
                }
            }
        ]
    },
    "COD": {
        "name": "DR Congo",
        "flag": "🇨🇩",
        "confederation": "CAF",
        "fifaRanking": 42,
        "players": [
            {
                "name": "Lionel Mpasi",
                "position": "GK",
                "club": "Le Havre",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Meaux",
                    "country": "France",
                    "lat": 48.9594,
                    "lng": 2.8878
                }
            },
            {
                "name": "Timothy Fayulu",
                "position": "GK",
                "club": "Noah",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Geneva",
                    "country": "Switzerland",
                    "lat": 46.2,
                    "lng": 6.15
                }
            },
            {
                "name": "Matthieu Epolo",
                "position": "GK",
                "club": "Standard Liège",
                "league": "Belgian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.8467,
                    "lng": 4.3517
                }
            },
            {
                "name": "Chancel Mbemba",
                "position": "DF",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Kisangani",
                    "country": "Democratic Republic of the Congo",
                    "lat": 0.5153,
                    "lng": 25.1911
                }
            },
            {
                "name": "Arthur Masuaku",
                "position": "DF",
                "club": "Lens",
                "league": "Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Lille",
                    "country": "France",
                    "lat": 50.6319,
                    "lng": 3.0575
                }
            },
            {
                "name": "Joris Kayembe",
                "position": "DF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Brussels",
                    "country": "Belgium",
                    "lat": 50.8467,
                    "lng": 4.3517
                }
            },
            {
                "name": "Dylan Batubinsika",
                "position": "DF",
                "club": "AEL",
                "league": "Greek Super League",
                "age": 30,
                "birthplace": {
                    "city": "Cergy-Pontoise",
                    "country": "France",
                    "lat": 49.0361,
                    "lng": 2.0631
                }
            },
            {
                "name": "Axel Tuanzebe",
                "position": "DF",
                "club": "Burnley",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Bunia",
                    "country": "Democratic Republic of the Congo",
                    "lat": 1.5667,
                    "lng": 30.25
                }
            },
            {
                "name": "Aaron Wan-Bissaka",
                "position": "DF",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Croydon",
                    "country": "United Kingdom",
                    "lat": 51.3727,
                    "lng": -0.1099
                }
            },
            {
                "name": "Rocky Bushiri",
                "position": "DF",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 26,
                "birthplace": {
                    "city": "Democratic Republic of the Congo",
                    "country": "Democratic Republic of the Congo",
                    "lat": -2.88,
                    "lng": 23.6561
                }
            },
            {
                "name": "Brian Bayeye",
                "position": "DF",
                "club": "Villefranche",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Steve Kapuadi",
                "position": "DF",
                "club": "Widzew Łódź",
                "league": "Polish Ekstraklasa",
                "age": 27,
                "birthplace": {
                    "city": "Le Mans",
                    "country": "France",
                    "lat": 48.0042,
                    "lng": 0.1969
                }
            },
            {
                "name": "Meschak Elia",
                "position": "MF",
                "club": "Alanyaspor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Kinshasa",
                    "country": "Democratic Republic of the Congo",
                    "lat": -4.3219,
                    "lng": 15.3119
                }
            },
            {
                "name": "Samuel Moutoussamy",
                "position": "MF",
                "club": "Atromitos",
                "league": "Greek Super League",
                "age": 29,
                "birthplace": {
                    "city": "12th arrondissement of Paris",
                    "country": "France",
                    "lat": 48.8408,
                    "lng": 2.3882
                }
            },
            {
                "name": "Edo Kayembe",
                "position": "MF",
                "club": "Watford",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Kananga",
                    "country": "Democratic Republic of the Congo",
                    "lat": -5.8961,
                    "lng": 22.4167
                }
            },
            {
                "name": "Théo Bongonda",
                "position": "MF",
                "club": "Spartak Moscow",
                "league": "Russian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Charleroi",
                    "country": "Belgium",
                    "lat": 50.4167,
                    "lng": 4.4442
                }
            },
            {
                "name": "Charles Pickel",
                "position": "MF",
                "club": "Espanyol",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Solothurn",
                    "country": "Switzerland",
                    "lat": 47.2081,
                    "lng": 7.5375
                }
            },
            {
                "name": "Noah Sadiki",
                "position": "MF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Brussels-Capital Region",
                    "country": "Belgium",
                    "lat": 50.8467,
                    "lng": 4.3525
                }
            },
            {
                "name": "Nathanaël Mbuku",
                "position": "MF",
                "club": "Montpellier",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Villeneuve-Saint-Georges",
                    "country": "France",
                    "lat": 48.7325,
                    "lng": 2.4497
                }
            },
            {
                "name": "Ngal'ayel Mukau",
                "position": "MF",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Antwerp",
                    "country": "Belgium",
                    "lat": 51.2211,
                    "lng": 4.3997
                }
            },
            {
                "name": "Grady Diangana",
                "position": "MF",
                "club": "Elche",
                "league": "Segunda División",
                "age": 27,
                "birthplace": {
                    "city": "Kinshasa",
                    "country": "Democratic Republic of the Congo",
                    "lat": -4.3219,
                    "lng": 15.3119
                }
            },
            {
                "name": "Brian Cipenga",
                "position": "MF",
                "club": "Castellón",
                "league": "Segunda División",
                "age": 28,
                "birthplace": {
                    "city": "Kinshasa",
                    "country": "DR Congo",
                    "lat": -3.541,
                    "lng": 15.2106
                }
            },
            {
                "name": "Cédric Bakambu",
                "position": "FW",
                "club": "Betis",
                "league": "La Liga",
                "age": 34,
                "birthplace": {
                    "city": "Vitry-sur-Seine",
                    "country": "France",
                    "lat": 48.7875,
                    "lng": 2.3928
                }
            },
            {
                "name": "Fiston Mayele",
                "position": "FW",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Mbuji-Mayi",
                    "country": "Democratic Republic of the Congo",
                    "lat": -6.1209,
                    "lng": 23.5967
                }
            },
            {
                "name": "Yoane Wissa",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Épinay-sous-Sénart",
                    "country": "France",
                    "lat": 48.6931,
                    "lng": 2.5158
                }
            },
            {
                "name": "Simon Banza",
                "position": "FW",
                "club": "Al Jazira",
                "league": "UAE Pro League",
                "age": 29,
                "birthplace": {
                    "city": "France",
                    "country": "France",
                    "lat": 47,
                    "lng": 2
                }
            }
        ]
    },
    "UZB": {
        "name": "Uzbekistan",
        "flag": "🇺🇿",
        "confederation": "AFC",
        "fifaRanking": 43,
        "players": [
            {
                "name": "Utkir Yusupov",
                "position": "GK",
                "club": "Navbahor",
                "league": "Unknown",
                "age": 35,
                "birthplace": {
                    "city": "Sayram",
                    "country": "Kazakhstan",
                    "lat": 42.3019,
                    "lng": 69.7703
                }
            },
            {
                "name": "Abduvohid Nematov",
                "position": "GK",
                "club": "Nasaf",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Jizzakh",
                    "country": "Soviet Union",
                    "lat": 40.1167,
                    "lng": 67.85
                }
            },
            {
                "name": "Botirali Ergashev",
                "position": "GK",
                "club": "Neftchi",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Pap",
                    "country": "Uzbekistan",
                    "lat": 40.8736,
                    "lng": 71.1089
                }
            },
            {
                "name": "Abdukodir Khusanov",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Khojiakbar Alijonov",
                "position": "DF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Farrukh Sayfiev",
                "position": "DF",
                "club": "Neftchi",
                "league": "Unknown",
                "age": 35,
                "birthplace": {
                    "city": "Samarkand",
                    "country": "Uzbekistan",
                    "lat": 39.6547,
                    "lng": 66.9758
                }
            },
            {
                "name": "Rustam Ashurmatov",
                "position": "DF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Kokand",
                    "country": "Uzbekistan",
                    "lat": 40.5286,
                    "lng": 70.9425
                }
            },
            {
                "name": "Sherzod Nasrullaev",
                "position": "DF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Koson",
                    "country": "Uzbekistan",
                    "lat": 39.0375,
                    "lng": 65.585
                }
            },
            {
                "name": "Umar Eshmurodov",
                "position": "DF",
                "club": "Nasaf",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "Koson",
                    "country": "Uzbekistan",
                    "lat": 39.0375,
                    "lng": 65.585
                }
            },
            {
                "name": "Bekhruz Karimov",
                "position": "DF",
                "club": "Surkhon",
                "league": "Unknown",
                "age": 18,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 40.7093,
                    "lng": 68.8515
                }
            },
            {
                "name": "Mukhammadrasul Abdumazhidov",
                "position": "DF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3727,
                    "lng": 69.5005
                }
            },
            {
                "name": "Jakhongir Urozov",
                "position": "DF",
                "club": "Dinamo",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Jizzakh",
                    "country": "Soviet Union",
                    "lat": 40.1167,
                    "lng": 67.85
                }
            },
            {
                "name": "Mukhammadkodir Khamraliev",
                "position": "DF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Fergana",
                    "country": "Uzbekistan",
                    "lat": 40.3864,
                    "lng": 71.7864
                }
            },
            {
                "name": "Akmal Mozgovoy",
                "position": "MF",
                "club": "Baniyas",
                "league": "UAE Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Qarshi",
                    "country": "Uzbekistan",
                    "lat": 38.8667,
                    "lng": 65.8
                }
            },
            {
                "name": "Otabek Shukurov",
                "position": "MF",
                "club": "Baniyas",
                "league": "UAE Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Chirakchi",
                    "country": "Uzbekistan",
                    "lat": 39.0336,
                    "lng": 66.5739
                }
            },
            {
                "name": "Jamshid Iskanderov",
                "position": "MF",
                "club": "Neftchi",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Odiljon Hamrobekov",
                "position": "MF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Uzbekistan",
                    "country": "Uzbekistan",
                    "lat": 41,
                    "lng": 66
                }
            },
            {
                "name": "Azizjon Ganiev",
                "position": "MF",
                "club": "Al Bataeh",
                "league": "UAE Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Uzbekistan",
                    "country": "Uzbekistan",
                    "lat": 41,
                    "lng": 66
                }
            },
            {
                "name": "Oston Urunov",
                "position": "MF",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Navoiy",
                    "country": "Uzbekistan",
                    "lat": 40.0833,
                    "lng": 65.3833
                }
            },
            {
                "name": "Dostonbek Khamdamov",
                "position": "MF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Alisher Odilov",
                "position": "MF",
                "club": "Neftchi",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 40.9371,
                    "lng": 69.5152
                }
            },
            {
                "name": "Ibrokhim Ibragimov",
                "position": "MF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.8841,
                    "lng": 68.3827
                }
            },
            {
                "name": "Umarali Rakhmonaliev",
                "position": "MF",
                "club": "Sabah",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "Namangan",
                    "country": "Uzbekistan",
                    "lat": 40.9953,
                    "lng": 71.6725
                }
            },
            {
                "name": "Eldor Shomurodov",
                "position": "FW",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Jarkurghon",
                    "country": "Uzbekistan",
                    "lat": 37.5144,
                    "lng": 67.4206
                }
            },
            {
                "name": "Igor Sergeev",
                "position": "FW",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Sherzod Temirov",
                "position": "FW",
                "club": "Erbil",
                "league": "Iraqi Premier League",
                "age": 27,
                "birthplace": {
                    "city": "G‘uzor",
                    "country": "Uzbekistan",
                    "lat": 38.6208,
                    "lng": 66.2481
                }
            }
        ]
    },
    "COL": {
        "name": "Colombia",
        "flag": "🇨🇴",
        "confederation": "CONMEBOL",
        "fifaRanking": 44,
        "players": [
            {
                "name": "David Ospina",
                "position": "GK",
                "club": "Atlético Nacional",
                "league": "Colombian Primera A",
                "age": 37,
                "birthplace": {
                    "city": "Medellín",
                    "country": "Colombia",
                    "lat": 6.2502,
                    "lng": -75.5676
                }
            },
            {
                "name": "Camilo Vargas",
                "position": "GK",
                "club": "Atlas",
                "league": "Liga MX",
                "age": 37,
                "birthplace": {
                    "city": "Bogotá",
                    "country": "Colombia",
                    "lat": 4.6097,
                    "lng": -74.0817
                }
            },
            {
                "name": "Álvaro Montero",
                "position": "GK",
                "club": "Vélez Sarsfield",
                "league": "Argentine Primera",
                "age": 31,
                "birthplace": {
                    "city": "El Molino",
                    "country": "Colombia",
                    "lat": 10.6531,
                    "lng": -72.9256
                }
            },
            {
                "name": "Daniel Muñoz",
                "position": "DF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Amalfi",
                    "country": "Colombia",
                    "lat": 6.9092,
                    "lng": -75.0767
                }
            },
            {
                "name": "Jhon Lucumí",
                "position": "DF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Cali",
                    "country": "Colombia",
                    "lat": 3.44,
                    "lng": -76.5197
                }
            },
            {
                "name": "Santiago Arias",
                "position": "DF",
                "club": "Independiente",
                "league": "Argentine Primera",
                "age": 34,
                "birthplace": {
                    "city": "Medellín",
                    "country": "Colombia",
                    "lat": 6.2502,
                    "lng": -75.5676
                }
            },
            {
                "name": "Juan Cabal",
                "position": "DF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Cali",
                    "country": "Colombia",
                    "lat": 3.44,
                    "lng": -76.5197
                }
            },
            {
                "name": "Yerson Mosquera",
                "position": "DF",
                "club": "Wolverhampton Wanderers",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Apartadó",
                    "country": "Colombia",
                    "lat": 7.8847,
                    "lng": -76.635
                }
            },
            {
                "name": "Johan Mojica",
                "position": "DF",
                "club": "Mallorca",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Cali",
                    "country": "Colombia",
                    "lat": 3.44,
                    "lng": -76.5197
                }
            },
            {
                "name": "Deiver Machado",
                "position": "DF",
                "club": "Nantes",
                "league": "Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Tadó",
                    "country": "Colombia",
                    "lat": 5.2633,
                    "lng": -76.56
                }
            },
            {
                "name": "Davinson Sánchez",
                "position": "DF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Caloto",
                    "country": "Colombia",
                    "lat": 3.0356,
                    "lng": -76.4078
                }
            },
            {
                "name": "Kevin Castaño",
                "position": "MF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 25,
                "birthplace": {
                    "city": "Itagüí",
                    "country": "Colombia",
                    "lat": 6.1726,
                    "lng": -75.6096
                }
            },
            {
                "name": "Richard Ríos",
                "position": "MF",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 25,
                "birthplace": {
                    "city": "Vegachi",
                    "country": "Colombia",
                    "lat": 6.7731,
                    "lng": -74.7994
                }
            },
            {
                "name": "Jorge Carrascal",
                "position": "MF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Cartagena",
                    "country": "Colombia",
                    "lat": 10.4236,
                    "lng": -75.5253
                }
            },
            {
                "name": "James Rodríguez",
                "position": "MF",
                "club": "Minnesota United",
                "league": "MLS",
                "age": 34,
                "birthplace": {
                    "city": "Cúcuta",
                    "country": "Colombia",
                    "lat": 7.9075,
                    "lng": -72.5047
                }
            },
            {
                "name": "Jhon Arias",
                "position": "MF",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 28,
                "birthplace": {
                    "city": "Quibdó",
                    "country": "Colombia",
                    "lat": 5.6923,
                    "lng": -76.6582
                }
            },
            {
                "name": "Gustavo Puerta",
                "position": "MF",
                "club": "Racing de Santander",
                "league": "Segunda División",
                "age": 22,
                "birthplace": {
                    "city": "La Victoria",
                    "country": "Colombia",
                    "lat": 4.5214,
                    "lng": -76.0364
                }
            },
            {
                "name": "Jefferson Lerma",
                "position": "MF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "El Cerrito",
                    "country": "Colombia",
                    "lat": 3.6839,
                    "lng": -76.3111
                }
            },
            {
                "name": "Juan Fernando Quintero",
                "position": "MF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 33,
                "birthplace": {
                    "city": "Barranquilla",
                    "country": "Colombia",
                    "lat": 10.9833,
                    "lng": -74.8019
                }
            },
            {
                "name": "Jaminton Campaz",
                "position": "MF",
                "club": "Rosario Central",
                "league": "Argentine Primera",
                "age": 25,
                "birthplace": {
                    "city": "Tumaco",
                    "country": "Colombia",
                    "lat": 1.8067,
                    "lng": -78.7647
                }
            },
            {
                "name": "Luis Díaz",
                "position": "FW",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Barrancas",
                    "country": "Colombia",
                    "lat": 10.9558,
                    "lng": -72.7919
                }
            },
            {
                "name": "Jhon Córdoba",
                "position": "FW",
                "club": "Krasnodar",
                "league": "Russian Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Istmina",
                    "country": "Colombia",
                    "lat": 5.1633,
                    "lng": -76.6867
                }
            },
            {
                "name": "Johan Carbonero",
                "position": "FW",
                "club": "Internacional",
                "league": "Brasileirão",
                "age": 26,
                "birthplace": {
                    "city": "Santander de Quilichao",
                    "country": "Colombia",
                    "lat": 3.0083,
                    "lng": -76.4839
                }
            },
            {
                "name": "Rafael Santos Borré",
                "position": "FW",
                "club": "Internacional",
                "league": "Brasileirão",
                "age": 30,
                "birthplace": {
                    "city": "Barranquilla",
                    "country": "Colombia",
                    "lat": 10.9833,
                    "lng": -74.8019
                }
            },
            {
                "name": "Luis Suárez",
                "position": "FW",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 28,
                "birthplace": {
                    "city": "Santa Marta",
                    "country": "Colombia",
                    "lat": 11.2361,
                    "lng": -74.2017
                }
            },
            {
                "name": "Andrés Gómez",
                "position": "FW",
                "club": "Vasco da Gama",
                "league": "Brasileirão",
                "age": 23,
                "birthplace": {
                    "city": "Quibdó",
                    "country": "Colombia",
                    "lat": 5.6923,
                    "lng": -76.6582
                }
            }
        ]
    },
    "ENG": {
        "name": "England",
        "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        "confederation": "UEFA",
        "fifaRanking": 45,
        "players": [
            {
                "name": "Jordan Pickford",
                "position": "GK",
                "club": "Everton",
                "league": "Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Washington",
                    "country": "United Kingdom",
                    "lat": 54.9,
                    "lng": -1.52
                }
            },
            {
                "name": "Dean Henderson",
                "position": "GK",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Whitehaven",
                    "country": "United Kingdom",
                    "lat": 54.548,
                    "lng": -3.5855
                }
            },
            {
                "name": "James Trafford",
                "position": "GK",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Cockermouth",
                    "country": "United Kingdom",
                    "lat": 54.6613,
                    "lng": -3.362
                }
            },
            {
                "name": "Jason Steele",
                "position": "GK",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Newton Aycliffe",
                    "country": "United Kingdom",
                    "lat": 54.62,
                    "lng": -1.58
                }
            },
            {
                "name": "Ezri Konsa",
                "position": "DF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "London Borough of Newham",
                    "country": "United Kingdom",
                    "lat": 51.5167,
                    "lng": 0.0333
                }
            },
            {
                "name": "Nico O'Reilly",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Manchester",
                    "country": "United Kingdom",
                    "lat": 53.4667,
                    "lng": -2.2333
                }
            },
            {
                "name": "Marc Guéhi",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Harry Maguire",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Sheffield",
                    "country": "United Kingdom",
                    "lat": 53.3808,
                    "lng": -1.4703
                }
            },
            {
                "name": "Ben White",
                "position": "DF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Poole",
                    "country": "United Kingdom",
                    "lat": 50.7167,
                    "lng": -1.9833
                }
            },
            {
                "name": "Dan Burn",
                "position": "DF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Blyth",
                    "country": "United Kingdom",
                    "lat": 55.126,
                    "lng": -1.514
                }
            },
            {
                "name": "Djed Spence",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Tino Livramento",
                "position": "DF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Croydon",
                    "country": "United Kingdom",
                    "lat": 51.3727,
                    "lng": -0.1099
                }
            },
            {
                "name": "Lewis Hall",
                "position": "DF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Slough",
                    "country": "United Kingdom",
                    "lat": 51.5097,
                    "lng": -0.5931
                }
            },
            {
                "name": "Elliot Anderson",
                "position": "MF",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Whitley Bay",
                    "country": "United Kingdom",
                    "lat": 55.0456,
                    "lng": -1.4443
                }
            },
            {
                "name": "Cole Palmer",
                "position": "MF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Wythenshawe",
                    "country": "United Kingdom",
                    "lat": 53.3923,
                    "lng": -2.264
                }
            },
            {
                "name": "Kobbie Mainoo",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Stockport",
                    "country": "United Kingdom",
                    "lat": 53.4083,
                    "lng": -2.1494
                }
            },
            {
                "name": "Jude Bellingham",
                "position": "MF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "Stourbridge",
                    "country": "United Kingdom",
                    "lat": 52.458,
                    "lng": -2.148
                }
            },
            {
                "name": "Morgan Rogers",
                "position": "MF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Halesowen",
                    "country": "United Kingdom",
                    "lat": 52.4502,
                    "lng": -2.0509
                }
            },
            {
                "name": "James Garner",
                "position": "MF",
                "club": "Everton",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Birkenhead",
                    "country": "United Kingdom",
                    "lat": 53.3833,
                    "lng": -3.0167
                }
            },
            {
                "name": "Jordan Henderson",
                "position": "MF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Sunderland",
                    "country": "United Kingdom",
                    "lat": 54.9,
                    "lng": -1.3803
                }
            },
            {
                "name": "Phil Foden",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Stockport",
                    "country": "United Kingdom",
                    "lat": 53.4083,
                    "lng": -2.1494
                }
            },
            {
                "name": "Marcus Rashford",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Manchester",
                    "country": "United Kingdom",
                    "lat": 53.4667,
                    "lng": -2.2333
                }
            },
            {
                "name": "Anthony Gordon",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Liverpool",
                    "country": "United Kingdom",
                    "lat": 53.4072,
                    "lng": -2.9917
                }
            },
            {
                "name": "Dominic Solanke",
                "position": "FW",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Reading",
                    "country": "United Kingdom",
                    "lat": 51.4542,
                    "lng": -0.9731
                }
            },
            {
                "name": "Harvey Barnes",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Burnley",
                    "country": "United Kingdom",
                    "lat": 53.7889,
                    "lng": -2.2481
                }
            },
            {
                "name": "Jarrod Bowen",
                "position": "FW",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Leominster",
                    "country": "United Kingdom",
                    "lat": 52.2333,
                    "lng": -2.7333
                }
            },
            {
                "name": "Harry Kane",
                "position": "FW",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Walthamstow",
                    "country": "United Kingdom",
                    "lat": 51.584,
                    "lng": -0.0211
                }
            }
        ]
    },
    "CRO": {
        "name": "Croatia",
        "flag": "🇭🇷",
        "confederation": "UEFA",
        "fifaRanking": 46,
        "players": [
            {
                "name": "Dominik Livaković",
                "position": "GK",
                "club": "Dinamo Zagreb",
                "league": "Croatian First League",
                "age": 31,
                "birthplace": {
                    "city": "Zadar",
                    "country": "Croatia",
                    "lat": 44.1142,
                    "lng": 15.2275
                }
            },
            {
                "name": "Ivor Pandur",
                "position": "GK",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Rijeka",
                    "country": "Croatia",
                    "lat": 45.3333,
                    "lng": 14.4333
                }
            },
            {
                "name": "Karlo Letica",
                "position": "GK",
                "club": "Lausanne-Sport",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Josip Stanišić",
                "position": "DF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Munich",
                    "country": "Germany",
                    "lat": 48.1375,
                    "lng": 11.575
                }
            },
            {
                "name": "Marin Pongračić",
                "position": "DF",
                "club": "Fiorentina",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Landshut",
                    "country": "Germany",
                    "lat": 48.5397,
                    "lng": 12.1508
                }
            },
            {
                "name": "Ivan Smolčić",
                "position": "DF",
                "club": "Como",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Gospić",
                    "country": "Croatia",
                    "lat": 44.5469,
                    "lng": 15.3744
                }
            },
            {
                "name": "Duje Ćaleta-Car",
                "position": "DF",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Šibenik",
                    "country": "Croatia",
                    "lat": 43.7339,
                    "lng": 15.8956
                }
            },
            {
                "name": "Josip Šutalo",
                "position": "DF",
                "club": "Ajax",
                "league": "Eredivisie",
                "age": 26,
                "birthplace": {
                    "city": "Čapljina",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.11,
                    "lng": 17.7
                }
            },
            {
                "name": "Luka Vušković",
                "position": "DF",
                "club": "Hamburger SV",
                "league": "Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Martin Erlić",
                "position": "DF",
                "club": "Midtjylland",
                "league": "Danish Superliga",
                "age": 28,
                "birthplace": {
                    "city": "Zadar",
                    "country": "Croatia",
                    "lat": 44.1142,
                    "lng": 15.2275
                }
            },
            {
                "name": "Lovro Majer",
                "position": "MF",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
                }
            },
            {
                "name": "Nikola Moro",
                "position": "MF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Solin",
                    "country": "Croatia",
                    "lat": 43.5317,
                    "lng": 16.4947
                }
            },
            {
                "name": "Luka Modrić",
                "position": "MF",
                "club": "Milan",
                "league": "Serie A",
                "age": 40,
                "birthplace": {
                    "city": "Zadar",
                    "country": "Croatia",
                    "lat": 44.1142,
                    "lng": 15.2275
                }
            },
            {
                "name": "Nikola Vlašić",
                "position": "MF",
                "club": "Torino",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Mario Pašalić",
                "position": "MF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Mainz",
                    "country": "Germany",
                    "lat": 49.9994,
                    "lng": 8.2736
                }
            },
            {
                "name": "Martin Baturina",
                "position": "MF",
                "club": "Como",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Petar Sučić",
                "position": "MF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Livno",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8269,
                    "lng": 17.0081
                }
            },
            {
                "name": "Kristijan Jakić",
                "position": "MF",
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Toni Fruk",
                "position": "MF",
                "club": "Rijeka",
                "league": "Croatian First League",
                "age": 24,
                "birthplace": {
                    "city": "Našice",
                    "country": "Croatia",
                    "lat": 45.4833,
                    "lng": 18.1
                }
            },
            {
                "name": "Luka Sučić",
                "position": "MF",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 23,
                "birthplace": {
                    "city": "Linz",
                    "country": "Austria",
                    "lat": 48.3058,
                    "lng": 14.2864
                }
            },
            {
                "name": "Andrej Kramarić",
                "position": "FW",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 34,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
                }
            },
            {
                "name": "Ante Budimir",
                "position": "FW",
                "club": "Osasuna",
                "league": "La Liga",
                "age": 34,
                "birthplace": {
                    "city": "Zenica",
                    "country": "Bosnia and Herzegovina",
                    "lat": 44.2017,
                    "lng": 17.9039
                }
            },
            {
                "name": "Ivan Perišić",
                "position": "FW",
                "club": "PSV Eindhoven",
                "league": "Eredivisie",
                "age": 37,
                "birthplace": {
                    "city": "Split",
                    "country": "Croatia",
                    "lat": 43.51,
                    "lng": 16.44
                }
            },
            {
                "name": "Igor Matanović",
                "position": "FW",
                "club": "SC Freiburg",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Germany",
                    "country": "Germany",
                    "lat": 51,
                    "lng": 10
                }
            },
            {
                "name": "Marco Pašalić",
                "position": "FW",
                "club": "Orlando City",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Karlsruhe",
                    "country": "Germany",
                    "lat": 49.0167,
                    "lng": 8.4
                }
            },
            {
                "name": "Petar Musa",
                "position": "FW",
                "club": "FC Dallas",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
                }
            }
        ]
    },
    "GHA": {
        "name": "Ghana",
        "flag": "🇬🇭",
        "confederation": "CAF",
        "fifaRanking": 47,
        "players": [
            {
                "name": "Lawrence Ati-Zigi",
                "position": "GK",
                "club": "St. Gallen",
                "league": "Swiss Super League",
                "age": 29,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Joseph Anang",
                "position": "GK",
                "club": "St Patrick's Athletic",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Benjamin Asare",
                "position": "GK",
                "club": "Hearts of Oak",
                "league": "Ghanaian Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.5861,
                    "lng": -0.8306
                }
            },
            {
                "name": "Derrick Köhn",
                "position": "DF",
                "club": "Union Berlin",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Jonas Adjetey",
                "position": "DF",
                "club": "Wolfsburg",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.556,
                    "lng": -0.1969
                }
            },
            {
                "name": "Patric Pfeiffer",
                "position": "DF",
                "club": "Darmstadt 98",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
                }
            },
            {
                "name": "Gideon Mensah",
                "position": "DF",
                "club": "Auxerre",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Jerome Opoku",
                "position": "DF",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "Mitcham",
                    "country": "United Kingdom",
                    "lat": 51.4009,
                    "lng": -0.1517
                }
            },
            {
                "name": "Kojo Peprah Oppong",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.556,
                    "lng": -0.1969
                }
            },
            {
                "name": "Alexander Djiku",
                "position": "DF",
                "club": "Spartak Moscow",
                "league": "Russian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Montpellier",
                    "country": "France",
                    "lat": 43.6109,
                    "lng": 3.8772
                }
            },
            {
                "name": "Derrick Luckassen",
                "position": "DF",
                "club": "Pafos",
                "league": "Cypriot First Division",
                "age": 30,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Marvin Senaya",
                "position": "DF",
                "club": "Auxerre",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Saint-Maurice",
                    "country": "France",
                    "lat": 48.8183,
                    "lng": 2.4347
                }
            },
            {
                "name": "Caleb Yirenkyi",
                "position": "MF",
                "club": "Nordsjælland",
                "league": "Danish Superliga",
                "age": 20,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Thomas Partey",
                "position": "MF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 32,
                "birthplace": {
                    "city": "Odumase Krobo",
                    "country": "Ghana",
                    "lat": 7.5456,
                    "lng": -1.7378
                }
            },
            {
                "name": "Kwasi Sibo",
                "position": "MF",
                "club": "Oviedo",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Wa",
                    "country": "Ghana",
                    "lat": 10.0667,
                    "lng": -2.5
                }
            },
            {
                "name": "Ibrahim Sulemana",
                "position": "MF",
                "club": "Cagliari",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Sunyani",
                    "country": "Ghana",
                    "lat": 7.3399,
                    "lng": -2.3268
                }
            },
            {
                "name": "Elisha Owusu",
                "position": "MF",
                "club": "Auxerre",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Abdul Fatawu",
                "position": "FW",
                "club": "Leicester City",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Tamale",
                    "country": "Ghana",
                    "lat": 9.4075,
                    "lng": -0.8533
                }
            },
            {
                "name": "Jordan Ayew",
                "position": "FW",
                "club": "Leicester City",
                "league": "Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Antoine Semenyo",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Christopher Bonsu Baah",
                "position": "FW",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.556,
                    "lng": -0.1969
                }
            },
            {
                "name": "Prince Kwabena Adu",
                "position": "FW",
                "club": "Viktoria Plzeň",
                "league": "Czech First League",
                "age": 22,
                "birthplace": {
                    "city": "Sunyani",
                    "country": "Ghana",
                    "lat": 7.3399,
                    "lng": -2.3268
                }
            },
            {
                "name": "Kamaldeen Sulemana",
                "position": "FW",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Ransford-Yeboah Königsdörffer",
                "position": "FW",
                "club": "Hamburg",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Berlin",
                    "country": "Germany",
                    "lat": 52.5167,
                    "lng": 13.3833
                }
            },
            {
                "name": "Dan Agyei",
                "position": "FW",
                "club": "Kocaelispor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Royal Borough of Kingston upon Thames",
                    "country": "United Kingdom",
                    "lat": 51.4083,
                    "lng": -0.3053
                }
            },
            {
                "name": "Iñaki Williams",
                "position": "FW",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Bilbao",
                    "country": "Spain",
                    "lat": 43.2631,
                    "lng": -2.935
                }
            },
            {
                "name": "Brandon Thomas-Asante",
                "position": "FW",
                "club": "Coventry City",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Milton Keynes",
                    "country": "United Kingdom",
                    "lat": 52.0333,
                    "lng": -0.7667
                }
            }
        ]
    },
    "PAN": {
        "name": "Panama",
        "flag": "🇵🇦",
        "confederation": "CONCACAF",
        "fifaRanking": 48,
        "players": [
            {
                "name": "Luis Mejía",
                "position": "GK",
                "club": "Nacional",
                "league": "Uruguayan Primera",
                "age": 35,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "César Samudio",
                "position": "GK",
                "club": "Marathón",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Orlando Mosquera",
                "position": "GK",
                "club": "Al-Fayha",
                "league": "Saudi Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "César Blackman",
                "position": "DF",
                "club": "Slovan Bratislava",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "José Córdoba",
                "position": "DF",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Martín Krug",
                "position": "DF",
                "club": "Atlético Levante",
                "league": "La Liga",
                "age": 19,
                "birthplace": {
                    "city": "Chicago",
                    "country": "United States",
                    "lat": 41.8819,
                    "lng": -87.6278
                }
            },
            {
                "name": "Roderick Miller",
                "position": "DF",
                "club": "Turan Tovuz",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Jiovany Ramos",
                "position": "DF",
                "club": "Puerto Cabello",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Eric Davis",
                "position": "DF",
                "club": "Plaza Amador",
                "league": "Unknown",
                "age": 35,
                "birthplace": {
                    "city": "Colón City",
                    "country": "Panama",
                    "lat": 9.3598,
                    "lng": -79.9004
                }
            },
            {
                "name": "Andrés Andrade",
                "position": "DF",
                "club": "LASK",
                "league": "Austrian Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Jorge Gutiérrez",
                "position": "DF",
                "club": "Deportivo La Guaira",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Michael Amir Murillo",
                "position": "DF",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Cristian Martínez",
                "position": "MF",
                "club": "Ironi Kiryat Shmona",
                "league": "Israeli Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "José Luis Rodríguez",
                "position": "MF",
                "club": "Juárez",
                "league": "Liga MX",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Adalberto Carrasquilla",
                "position": "MF",
                "club": "UNAM",
                "league": "Liga MX",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Yoel Bárcenas",
                "position": "MF",
                "club": "Mazatlán",
                "league": "Liga MX",
                "age": 32,
                "birthplace": {
                    "city": "Colón City",
                    "country": "Panama",
                    "lat": 9.3598,
                    "lng": -79.9004
                }
            },
            {
                "name": "Carlos Harvey",
                "position": "MF",
                "club": "Minnesota United",
                "league": "MLS",
                "age": 26,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Aníbal Godoy",
                "position": "MF",
                "club": "San Diego",
                "league": "MLS",
                "age": 36,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "César Yanis",
                "position": "MF",
                "club": "Cobresal",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Kadir Barría",
                "position": "FW",
                "club": "Botafogo",
                "league": "Brasileirão",
                "age": 18,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.4181,
                    "lng": -79.6653
                }
            },
            {
                "name": "Ismael Díaz",
                "position": "FW",
                "club": "León",
                "league": "Liga MX",
                "age": 28,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "José Fajardo",
                "position": "FW",
                "club": "Universidad Católica",
                "league": "Ecuadorian Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Colón City",
                    "country": "Panama",
                    "lat": 9.3598,
                    "lng": -79.9004
                }
            },
            {
                "name": "Cecilio Waterman",
                "position": "FW",
                "club": "Universidad de Concepción",
                "league": "Unknown",
                "age": 34,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            }
        ]
    }
};

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
