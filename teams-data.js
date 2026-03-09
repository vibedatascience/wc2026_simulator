// FIFA World Cup 2026 - Teams Data
// Auto-generated from Wikipedia on 2026-02-08
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
    "Russian Premier League": { tier: 3, weight: 45 },
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
                "name": "Luis Malagón",
                "position": "GK",
                "club": "América",
                "league": "Liga MX",
                "age": 28,
                "birthplace": {
                    "city": "Zamora de Hidalgo",
                    "country": "Mexico",
                    "lat": 19.9833,
                    "lng": -102.2833
                }
            },
            {
                "name": "Raúl Rangel",
                "position": "GK",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 25,
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
                "name": "Víctor Guzmán",
                "position": "DF",
                "club": "Monterrey",
                "league": "Liga MX",
                "age": 23,
                "birthplace": {
                    "city": "Tijuana",
                    "country": "Mexico",
                    "lat": 32.5364,
                    "lng": -117.0372
                }
            },
            {
                "name": "Denzell García",
                "position": "DF",
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
                "name": "Ramón Juárez",
                "position": "DF",
                "club": "América",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Rioverde",
                    "country": "Mexico",
                    "lat": 21.9303,
                    "lng": -99.9917
                }
            },
            {
                "name": "Eduardo Águila",
                "position": "DF",
                "club": "Atlético San Luis",
                "league": "Liga MX",
                "age": 23,
                "birthplace": {
                    "city": "Mexico City",
                    "country": "Mexico",
                    "lat": 19.7915,
                    "lng": -99.2894
                }
            },
            {
                "name": "Everardo López",
                "position": "DF",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 20,
                "birthplace": {
                    "city": "Mexico City",
                    "country": "Mexico",
                    "lat": 20.0098,
                    "lng": -99.3061
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
                "name": "Bryan González",
                "position": "DF",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Juárez Municipality",
                    "country": "Mexico",
                    "lat": 17.7,
                    "lng": -93.2
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
                "name": "Luis Romo",
                "position": "MF",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 30,
                "birthplace": {
                    "city": "Ahome",
                    "country": "Mexico",
                    "lat": 25.8333,
                    "lng": -109.05
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
                "name": "Alexis Gutiérrez",
                "position": "MF",
                "club": "América",
                "league": "Liga MX",
                "age": 24,
                "birthplace": {
                    "city": "León de Los Aldama",
                    "country": "Mexico",
                    "lat": 21.1219,
                    "lng": -101.6833
                }
            },
            {
                "name": "Marcel Ruiz",
                "position": "MF",
                "club": "Toluca",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Mérida",
                    "country": "Mexico",
                    "lat": 20.97,
                    "lng": -89.62
                }
            },
            {
                "name": "Diego Lainez",
                "position": "MF",
                "club": "UANL",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Villahermosa",
                    "country": "Mexico",
                    "lat": 17.9878,
                    "lng": -92.9194
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
                "name": "Kevin Castañeda",
                "position": "MF",
                "club": "Tijuana",
                "league": "Liga MX",
                "age": 26,
                "birthplace": {
                    "city": "Guadalajara",
                    "country": "Mexico",
                    "lat": 20.6764,
                    "lng": -103.3422
                }
            },
            {
                "name": "Iker Fimbres",
                "position": "MF",
                "club": "Monterrey",
                "league": "Liga MX",
                "age": 20,
                "birthplace": {
                    "city": "Hermosillo",
                    "country": "Mexico",
                    "lat": 29.075,
                    "lng": -110.9583
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
                "name": "Roberto Alvarado",
                "position": "MF",
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
                "name": "Ángel Sepúlveda",
                "position": "FW",
                "club": "Guadalajara",
                "league": "Liga MX",
                "age": 34,
                "birthplace": {
                    "city": "Apatzingán de la Constitución",
                    "country": "Mexico",
                    "lat": 19.0886,
                    "lng": -102.3508
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
                    "lat": 19.1858,
                    "lng": -99.6441
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
                "name": "Sipho Chaine",
                "position": "GK",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -27.0944,
                    "lng": 27.0421
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
                "name": "Tylon Smith",
                "position": "DF",
                "club": "Queens Park Rangers",
                "league": "EFL Championship",
                "age": 20,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.325,
                    "lng": 27.3053
                }
            },
            {
                "name": "Khulumani Ndamane",
                "position": "DF",
                "club": "TS Galaxy",
                "league": "South African Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -25.2727,
                    "lng": 27.9999
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
                "club": "Chicago Fire",
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
                "age": 21,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.8973,
                    "lng": 27.6305
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
                "name": "Siyabonga Ngezana",
                "position": "DF",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 28,
                "birthplace": {
                    "city": "Sebokeng",
                    "country": "South Africa",
                    "lat": -26.5769,
                    "lng": 27.8406
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
                    "lat": -26.6762,
                    "lng": 27.7646
                }
            },
            {
                "name": "Thabo Moloisane",
                "position": "DF",
                "club": "Stellenbosch",
                "league": "South African Premier League",
                "age": 26,
                "birthplace": {
                    "city": "City of Tshwane Metropolitan Municipality",
                    "country": "South Africa",
                    "lat": -25.6667,
                    "lng": 28.3333
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
                "age": 25,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -27.1429,
                    "lng": 28.8673
                }
            },
            {
                "name": "Sphephelo Sithole",
                "position": "MF",
                "club": "Tondela",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Durban",
                    "country": "South Africa",
                    "lat": -29.8583,
                    "lng": 31.025
                }
            },
            {
                "name": "Bathusi Aubaas",
                "position": "MF",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Kuruman",
                    "country": "South Africa",
                    "lat": -27.4597,
                    "lng": 23.4125
                }
            },
            {
                "name": "Sipho Mbule",
                "position": "MF",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Bethlehem",
                    "country": "South Africa",
                    "lat": -28.2333,
                    "lng": 28.3
                }
            },
            {
                "name": "Mduduzi Shabalala",
                "position": "MF",
                "club": "Kaizer Chiefs",
                "league": "South African Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Soweto",
                    "country": "South Africa",
                    "lat": -26.2678,
                    "lng": 27.8586
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
                "name": "Mohau Nkota",
                "position": "FW",
                "club": "Al-Ettifaq",
                "league": "Saudi Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Kimberley",
                    "country": "South Africa",
                    "lat": -28.7383,
                    "lng": 24.7639
                }
            },
            {
                "name": "Elias Mokwana",
                "position": "FW",
                "club": "Al-Hazem",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "KwaMhlanga",
                    "country": "South Africa",
                    "lat": -25.432,
                    "lng": 28.708
                }
            },
            {
                "name": "Evidence Makgopa",
                "position": "FW",
                "club": "Orlando Pirates",
                "league": "South African Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.4178,
                    "lng": 28.0988
                }
            },
            {
                "name": "Shandre Campbell",
                "position": "FW",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Johannesburg",
                    "country": "South Africa",
                    "lat": -26.2044,
                    "lng": 28.0416
                }
            },
            {
                "name": "Iqraam Rayners",
                "position": "FW",
                "club": "Mamelodi Sundowns",
                "league": "South African Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cape Town",
                    "country": "South Africa",
                    "lat": -33.9253,
                    "lng": 18.4239
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
                "name": "Lee Myung-jae",
                "position": "DF",
                "club": "Daejeon Hana Citizen",
                "league": "K League 1",
                "age": 32,
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
                "name": "Park Jin-seob",
                "position": "DF",
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
                "name": "Won Du-jae",
                "position": "MF",
                "club": "Khor Fakkan",
                "league": "UAE Pro League",
                "age": 28,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Seo Min-woo",
                "position": "MF",
                "club": "Gangwon FC",
                "league": "K League 1",
                "age": 27,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
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
                "age": 24,
                "birthplace": {
                    "city": "Incheon",
                    "country": "South Korea",
                    "lat": 37.4639,
                    "lng": 126.6486
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
                "name": "Jens Castrop",
                "position": "MF",
                "club": "Borussia Mönchengladbach",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Düsseldorf",
                    "country": "Germany",
                    "lat": 51.2256,
                    "lng": 6.7767
                }
            },
            {
                "name": "Kim Jin-gyu",
                "position": "MF",
                "club": "Jeonbuk Hyundai Motors",
                "league": "K League 1",
                "age": 28,
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
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "South Korea",
                    "country": "South Korea",
                    "lat": 36,
                    "lng": 128
                }
            },
            {
                "name": "Yang Min-hyeok",
                "position": "MF",
                "club": "Coventry City",
                "league": "EFL Championship",
                "age": 19,
                "birthplace": {
                    "city": "Gwangju",
                    "country": "South Korea",
                    "lat": 35.1667,
                    "lng": 126.9167
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
    "CAN": {
        "name": "Canada",
        "flag": "🇨🇦",
        "confederation": "CONCACAF",
        "fifaRanking": 4,
        "players": [
            {
                "name": "James Pantemis",
                "position": "GK",
                "club": "Portland Timbers",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "Kirkland",
                    "country": "Canada",
                    "lat": 45.45,
                    "lng": -73.8667
                }
            },
            {
                "name": "Luka Gavran",
                "position": "GK",
                "club": "Toronto FC",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Hamilton",
                    "country": "Canada",
                    "lat": 43.2567,
                    "lng": -79.8692
                }
            },
            {
                "name": "Jahkeele Marshall-Rutty",
                "position": "DF",
                "club": "CF Montréal",
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
                "name": "Zorhan Bassong",
                "position": "DF",
                "club": "Sporting Kansas City",
                "league": "Primeira Liga",
                "age": 26,
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
                "name": "Matteo de Brienne",
                "position": "DF",
                "club": "GAIS",
                "league": "Swedish Allsvenskan",
                "age": 23,
                "birthplace": {
                    "city": "Ottawa",
                    "country": "Canada",
                    "lat": 45.4247,
                    "lng": -75.695
                }
            },
            {
                "name": "Noah Abatneh",
                "position": "DF",
                "club": "Atlético Ottawa",
                "league": "MLS",
                "age": 21,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6624,
                    "lng": -79.1801
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
                "name": "Jayden Nelson",
                "position": "MF",
                "club": "Austin FC",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Brampton",
                    "country": "Canada",
                    "lat": 43.6833,
                    "lng": -79.7667
                }
            },
            {
                "name": "Jeevan Badwal",
                "position": "MF",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 19,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.7687,
                    "lng": -79.119
                }
            },
            {
                "name": "Shola Jimoh",
                "position": "MF",
                "club": "Inter Toronto",
                "league": "MLS",
                "age": 17,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.3907,
                    "lng": -80.395
                }
            },
            {
                "name": "Malik Henry",
                "position": "MF",
                "club": "Toronto FC",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.163,
                    "lng": -80.076
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
            },
            {
                "name": "Rayan Elloumi",
                "position": "FW",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 18,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.2799,
                    "lng": -79.9985
                }
            },
            {
                "name": "Tiago Coimbra",
                "position": "FW",
                "club": "IFK Göteborg",
                "league": "Swedish Allsvenskan",
                "age": 22,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.6775,
                    "lng": -79.5596
                }
            },
            {
                "name": "Marius Aiyenero",
                "position": "FW",
                "club": "Los Angeles FC 2",
                "league": "MLS",
                "age": 17,
                "birthplace": {
                    "city": "Toronto",
                    "country": "Canada",
                    "lat": 43.716,
                    "lng": -79.3031
                }
            }
        ]
    },
    "QAT": {
        "name": "Qatar",
        "flag": "🇶🇦",
        "confederation": "AFC",
        "fifaRanking": 5,
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
                    "lat": 24.8926,
                    "lng": 51.3858
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
                "age": 27,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2862,
                    "lng": 51.5294
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
                    "lat": 25.9089,
                    "lng": 52.2528
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
                "age": 20,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.8026,
                    "lng": 51.5661
                }
            },
            {
                "name": "Homam Ahmed",
                "position": "DF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2862,
                    "lng": 51.5294
                }
            },
            {
                "name": "Yousef Aymen",
                "position": "DF",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 26.1133,
                    "lng": 52.3615
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
                    "lat": 24.4156,
                    "lng": 51.4809
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
                    "lat": 25.2862,
                    "lng": 51.5294
                }
            },
            {
                "name": "Jassem Gaber",
                "position": "MF",
                "club": "Al-Rayyan",
                "league": "Qatar Stars League",
                "age": 23,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2862,
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
                    "lat": 24.7021,
                    "lng": 51.4797
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
                    "lat": 25.2862,
                    "lng": 51.5294
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
            },
            {
                "name": "Mohammed Muntari",
                "position": "FW",
                "club": "Al-Gharafa",
                "league": "Qatar Stars League",
                "age": 32,
                "birthplace": {
                    "city": "Kumasi",
                    "country": "Ghana",
                    "lat": 6.7,
                    "lng": -1.625
                }
            },
            {
                "name": "Akram Afif",
                "position": "FW",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 29,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 25.2862,
                    "lng": 51.5294
                }
            },
            {
                "name": "Edmilson Junior",
                "position": "FW",
                "club": "Al-Duhail",
                "league": "Qatar Stars League",
                "age": 31,
                "birthplace": {
                    "city": "Liège",
                    "country": "Belgium",
                    "lat": 50.6397,
                    "lng": 5.5706
                }
            },
            {
                "name": "Mohamed Khaled Gouda",
                "position": "FW",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 21,
                "birthplace": {
                    "city": "Doha",
                    "country": "Qatar",
                    "lat": 24.8891,
                    "lng": 50.6061
                }
            }
        ]
    },
    "SUI": {
        "name": "Switzerland",
        "flag": "🇨🇭",
        "confederation": "UEFA",
        "fifaRanking": 6,
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
                "club": "Hamburger SV",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Flüelen",
                    "country": "Switzerland",
                    "lat": 46.9123,
                    "lng": 8.6432
                }
            },
            {
                "name": "Silvan Widmer",
                "position": "DF",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 32,
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
                "name": "Bećir Omeragić",
                "position": "DF",
                "club": "Montpellier",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Geneva",
                    "country": "Switzerland",
                    "lat": 46.2,
                    "lng": 6.15
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
                "name": "Adrian Bajrami",
                "position": "DF",
                "club": "Luzern",
                "league": "Swiss Super League",
                "age": 23,
                "birthplace": {
                    "city": "Langenthal",
                    "country": "Switzerland",
                    "lat": 47.2153,
                    "lng": 7.7889
                }
            },
            {
                "name": "Isaac Schmidt",
                "position": "DF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Lausanne",
                    "country": "Switzerland",
                    "lat": 46.5333,
                    "lng": 6.6333
                }
            },
            {
                "name": "Luca Jaquez",
                "position": "DF",
                "club": "VfB Stuttgart",
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
                "name": "Simon Sohm",
                "position": "MF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Johan Manzambi",
                "position": "MF",
                "club": "SC Freiburg",
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
                "name": "Christian Fassnacht",
                "position": "MF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 32,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
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
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Koppigen",
                    "country": "Switzerland",
                    "lat": 47.1344,
                    "lng": 7.6042
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
                "name": "Breel Embolo",
                "position": "FW",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 28,
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
                "name": "Andi Zeqiri",
                "position": "FW",
                "club": "Widzew Łódź",
                "league": "Polish Ekstraklasa",
                "age": 26,
                "birthplace": {
                    "city": "Lausanne",
                    "country": "Switzerland",
                    "lat": 46.5333,
                    "lng": 6.6333
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
                "name": "Cedric Itten",
                "position": "FW",
                "club": "Fortuna Düsseldorf",
                "league": "2. Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Basel",
                    "country": "Switzerland",
                    "lat": 47.5606,
                    "lng": 7.5906
                }
            }
        ]
    },
    "BRA": {
        "name": "Brazil",
        "flag": "🇧🇷",
        "confederation": "CONMEBOL",
        "fifaRanking": 7,
        "players": [
            {
                "name": "John Victor",
                "position": "GK",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Diadema",
                    "country": "Brazil",
                    "lat": -23.6858,
                    "lng": -46.6228
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
                "name": "Éder Militão",
                "position": "DF",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Sertãozinho",
                    "country": "Brazil",
                    "lat": -21.1378,
                    "lng": -47.99
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
                "name": "Alex Sandro",
                "position": "DF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 35,
                "birthplace": {
                    "city": "Catanduva",
                    "country": "Brazil",
                    "lat": -21.1378,
                    "lng": -48.9728
                }
            },
            {
                "name": "Danilo",
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
                "name": "Wesley França",
                "position": "DF",
                "club": "Roma",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Açailândia",
                    "country": "Brazil",
                    "lat": -4.9469,
                    "lng": -47.505
                }
            },
            {
                "name": "Fabrício Bruno",
                "position": "DF",
                "club": "Cruzeiro",
                "league": "Brasileirão",
                "age": 29,
                "birthplace": {
                    "city": "Ibirité",
                    "country": "Brazil",
                    "lat": -20.0219,
                    "lng": -44.0589
                }
            },
            {
                "name": "Caio Henrique",
                "position": "DF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Santos",
                    "country": "Brazil",
                    "lat": -23.9336,
                    "lng": -46.3286
                }
            },
            {
                "name": "Luciano Juba",
                "position": "DF",
                "club": "Bahia",
                "league": "Brasileirão",
                "age": 26,
                "birthplace": {
                    "city": "Serra Talhada",
                    "country": "Brazil",
                    "lat": -7.9858,
                    "lng": -38.2958
                }
            },
            {
                "name": "Paulo Henrique",
                "position": "DF",
                "club": "Vasco da Gama",
                "league": "Brasileirão",
                "age": 29,
                "birthplace": {
                    "city": "Sete Barras",
                    "country": "Brazil",
                    "lat": -24.3878,
                    "lng": -47.9258
                }
            },
            {
                "name": "Casemiro",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "São José dos Campos",
                    "country": "Brazil",
                    "lat": -23.1789,
                    "lng": -45.8869
                }
            },
            {
                "name": "Bruno Guimarães",
                "position": "MF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Rio de Janeiro",
                    "country": "Brazil",
                    "lat": -22.9111,
                    "lng": -43.2056
                }
            },
            {
                "name": "Lucas Paquetá",
                "position": "MF",
                "club": "Flamengo",
                "league": "Brasileirão",
                "age": 28,
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
                "name": "Richarlison",
                "position": "FW",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Nova Venécia",
                    "country": "Brazil",
                    "lat": -18.7108,
                    "lng": -40.4008
                }
            },
            {
                "name": "Rodrygo",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "Osasco",
                    "country": "Brazil",
                    "lat": -23.5328,
                    "lng": -46.7919
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
                "name": "Estêvão Willian",
                "position": "FW",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 18,
                "birthplace": {
                    "city": "Franca",
                    "country": "Brazil",
                    "lat": -20.5389,
                    "lng": -47.4008
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
                "name": "Vitor Roque",
                "position": "FW",
                "club": "Palmeiras",
                "league": "Brasileirão",
                "age": 20,
                "birthplace": {
                    "city": "Timóteo",
                    "country": "Brazil",
                    "lat": -19.5828,
                    "lng": -42.6439
                }
            }
        ]
    },
    "MAR": {
        "name": "Morocco",
        "flag": "🇲🇦",
        "confederation": "CAF",
        "fifaRanking": 8,
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
                "name": "Munir Mohamedi",
                "position": "GK",
                "club": "RS Berkane",
                "league": "Botola Pro",
                "age": 36,
                "birthplace": {
                    "city": "Melilla",
                    "country": "Spain",
                    "lat": 35.2825,
                    "lng": -2.9475
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
                "name": "Nayef Aguerd",
                "position": "DF",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Kenitra",
                    "country": "Morocco",
                    "lat": 34.25,
                    "lng": -6.5833
                }
            },
            {
                "name": "Romain Saïss",
                "position": "DF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 35,
                "birthplace": {
                    "city": "Bourg-de-Péage",
                    "country": "France",
                    "lat": 45.0378,
                    "lng": 5.05
                }
            },
            {
                "name": "Mohamed Chibi",
                "position": "DF",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Jawad El Yamiq",
                "position": "DF",
                "club": "Zaragoza",
                "league": "Segunda División",
                "age": 33,
                "birthplace": {
                    "city": "Khouribga",
                    "country": "Morocco",
                    "lat": 32.88,
                    "lng": -6.9
                }
            },
            {
                "name": "Adam Masina",
                "position": "DF",
                "club": "Torino",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Khouribga",
                    "country": "Morocco",
                    "lat": 32.88,
                    "lng": -6.9
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
                "name": "Youssef Belammari",
                "position": "DF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Casablanca",
                    "country": "Morocco",
                    "lat": 33.5992,
                    "lng": -7.62
                }
            },
            {
                "name": "Sofyan Amrabat",
                "position": "MF",
                "club": "Betis",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Huizen",
                    "country": "Netherlands",
                    "lat": 52.2994,
                    "lng": 5.2531
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
                "name": "Hamza Igamane",
                "position": "FW",
                "club": "Lille",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Temara",
                    "country": "Morocco",
                    "lat": 33.9234,
                    "lng": -6.9076
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
                "name": "Eliesse Ben Seghir",
                "position": "FW",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Saint-Tropez",
                    "country": "France",
                    "lat": 43.2697,
                    "lng": 6.6386
                }
            },
            {
                "name": "Ilias Akhomach",
                "position": "FW",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 21,
                "birthplace": {
                    "city": "Igualada",
                    "country": "Spain",
                    "lat": 41.5814,
                    "lng": 1.6208
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
                "name": "Youssef En-Nesyri",
                "position": "FW",
                "club": "Al-Ittihad",
                "league": "Saudi Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Fez",
                    "country": "Morocco",
                    "lat": 34.0433,
                    "lng": -5.0033
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
            }
        ]
    },
    "HAI": {
        "name": "Haiti",
        "flag": "🇭🇹",
        "confederation": "CONCACAF",
        "fifaRanking": 9,
        "players": [
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
                "name": "Alexandre Pierre",
                "position": "GK",
                "club": "Sochaux",
                "league": "Ligue 1",
                "age": 24,
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
                "name": "Keeto Thermoncy",
                "position": "DF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 19,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 19.0302,
                    "lng": -71.8208
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
                "age": 26,
                "birthplace": {
                    "city": "Petite-Rivière-de-l'Artibonite",
                    "country": "Haiti",
                    "lat": 19.1333,
                    "lng": -72.4833
                }
            },
            {
                "name": "Garven Metusala",
                "position": "DF",
                "club": "Colorado Springs Switchbacks",
                "league": "MLS",
                "age": 26,
                "birthplace": {
                    "city": "Terrebonne",
                    "country": "Canada",
                    "lat": 45.7,
                    "lng": -73.6333
                }
            },
            {
                "name": "Martin Expérience",
                "position": "DF",
                "club": "Nancy",
                "league": "Ligue 1",
                "age": 26,
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
                "name": "Stéphane Lambese",
                "position": "DF",
                "club": "Fleury",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Nogent-sur-Marne",
                    "country": "France",
                    "lat": 48.8367,
                    "lng": 2.4825
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
                "age": 27,
                "birthplace": {
                    "city": "Tabarre",
                    "country": "Haiti",
                    "lat": 18.5833,
                    "lng": -72.2667
                }
            },
            {
                "name": "Carl Fred Sainté",
                "position": "MF",
                "club": "Phoenix Rising",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 18.9727,
                    "lng": -73.2293
                }
            },
            {
                "name": "Christopher Attys",
                "position": "MF",
                "club": "Triestina",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Saint-Maurice",
                    "country": "France",
                    "lat": 48.8183,
                    "lng": 2.4347
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
                "name": "Derrick Etienne Jr.",
                "position": "FW",
                "club": "Toronto FC",
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
                "club": "FC Dallas",
                "league": "MLS",
                "age": 24,
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
                "club": "Tampa Bay Rowdies",
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
            },
            {
                "name": "Frantzdy Pierrot",
                "position": "FW",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Port-au-Prince",
                    "country": "Haiti",
                    "lat": 18.5469,
                    "lng": -72.3403
                }
            }
        ]
    },
    "SCO": {
        "name": "Scotland",
        "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
        "confederation": "UEFA",
        "fifaRanking": 10,
        "players": [
            {
                "name": "Craig Gordon",
                "position": "GK",
                "club": "Heart of Midlothian",
                "league": "Scottish Premiership",
                "age": 43,
                "birthplace": {
                    "city": "Edinburgh",
                    "country": "United Kingdom",
                    "lat": 55.9533,
                    "lng": -3.1892
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
                "name": "Aaron Hickey",
                "position": "DF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Scotland",
                    "country": "United Kingdom",
                    "lat": 57,
                    "lng": -5
                }
            },
            {
                "name": "Andy Robertson",
                "position": "DF",
                "club": "Liverpool",
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
                "name": "Josh Doig",
                "position": "DF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Edinburgh",
                    "country": "United Kingdom",
                    "lat": 55.9533,
                    "lng": -3.1892
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
                "name": "Ryan Christie",
                "position": "MF",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Inverness",
                    "country": "United Kingdom",
                    "lat": 57.4839,
                    "lng": -4.2258
                }
            },
            {
                "name": "Connor Barron",
                "position": "MF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 23,
                "birthplace": {
                    "city": "Kintore",
                    "country": "United Kingdom",
                    "lat": 57.236,
                    "lng": -2.3462
                }
            },
            {
                "name": "Ben Gannon-Doak",
                "position": "MF",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Dalry",
                    "country": "United Kingdom",
                    "lat": 55.711,
                    "lng": -4.723
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
                "name": "Lyndon Dykes",
                "position": "FW",
                "club": "Charlton Athletic",
                "league": "Premier League",
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
                "age": 26,
                "birthplace": {
                    "city": "Sheffield",
                    "country": "United Kingdom",
                    "lat": 53.3808,
                    "lng": -1.4703
                }
            },
            {
                "name": "Lawrence Shankland",
                "position": "FW",
                "club": "Heart of Midlothian",
                "league": "Scottish Premiership",
                "age": 30,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            }
        ]
    },
    "USA": {
        "name": "United States",
        "flag": "🇺🇸",
        "confederation": "CONCACAF",
        "fifaRanking": 11,
        "players": [
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
                "name": "Jonathan Klinsmann",
                "position": "GK",
                "club": "Cesena",
                "league": "Serie B",
                "age": 28,
                "birthplace": {
                    "city": "Newport Beach",
                    "country": "United States",
                    "lat": 33.6167,
                    "lng": -117.8975
                }
            },
            {
                "name": "Roman Celentano",
                "position": "GK",
                "club": "FC Cincinnati",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Naperville",
                    "country": "United States",
                    "lat": 41.7483,
                    "lng": -88.1659
                }
            },
            {
                "name": "Patrick Schulte",
                "position": "GK",
                "club": "Columbus Crew",
                "league": "MLS",
                "age": 24,
                "birthplace": {
                    "city": "St. Charles",
                    "country": "United States",
                    "lat": 38.7886,
                    "lng": -90.5117
                }
            },
            {
                "name": "Sergiño Dest",
                "position": "DF",
                "club": "PSV Eindhoven",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "Almere",
                    "country": "Netherlands",
                    "lat": 52.3758,
                    "lng": 5.2256
                }
            },
            {
                "name": "John Tolkin",
                "position": "DF",
                "club": "Holstein Kiel",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Chatham",
                    "country": "United States",
                    "lat": 40.7407,
                    "lng": -74.3845
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
                "name": "Miles Robinson",
                "position": "DF",
                "club": "FC Cincinnati",
                "league": "MLS",
                "age": 28,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 41.2943,
                    "lng": -73.1355
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
                "name": "Mark McKenzie",
                "position": "DF",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "New York",
                    "country": "USA",
                    "lat": 39.7293,
                    "lng": -73.4253
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
                "name": "Timothy Tillman",
                "position": "MF",
                "club": "Los Angeles FC",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Nuremberg",
                    "country": "Germany",
                    "lat": 49.4539,
                    "lng": 11.0775
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
                "name": "Diego Luna",
                "position": "FW",
                "club": "Real Salt Lake",
                "league": "MLS",
                "age": 22,
                "birthplace": {
                    "city": "Toluca de Lerdo",
                    "country": "Mexico",
                    "lat": 19.2922,
                    "lng": -99.6539
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
                "name": "Haji Wright",
                "position": "FW",
                "club": "Coventry City",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Los Angeles",
                    "country": "United States",
                    "lat": 34.0522,
                    "lng": -118.2437
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
            }
        ]
    },
    "PAR": {
        "name": "Paraguay",
        "flag": "🇵🇾",
        "confederation": "CONMEBOL",
        "fifaRanking": 12,
        "players": [
            {
                "name": "Roberto Fernández",
                "position": "GK",
                "club": "Cerro Porteño",
                "league": "Paraguayan Primera",
                "age": 37,
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
                "name": "Aldo Pérez",
                "position": "GK",
                "club": "Guaraní",
                "league": "Paraguayan Primera",
                "age": 25,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -24.7236,
                    "lng": -57.4222
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
                "name": "Alexis Duarte",
                "position": "DF",
                "club": "Santos",
                "league": "Brasileirão",
                "age": 25,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Júnior Alonso",
                "position": "DF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 32,
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
                "club": "Internacional",
                "league": "Brasileirão",
                "age": 32,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Blas Riveros",
                "position": "DF",
                "club": "Cerro Porteño",
                "league": "Paraguayan Primera",
                "age": 28,
                "birthplace": {
                    "city": "Itauguá",
                    "country": "Paraguay",
                    "lat": -25.3833,
                    "lng": -57.3333
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
                "name": "Agustín Sández",
                "position": "DF",
                "club": "Rosario Central",
                "league": "Argentine Primera",
                "age": 25,
                "birthplace": {
                    "city": "Lanús",
                    "country": "Argentina",
                    "lat": -34.7,
                    "lng": -58.4
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
                "age": 22,
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
                "age": 31,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Diego González",
                "position": "MF",
                "club": "Atlas",
                "league": "Liga MX",
                "age": 23,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.1325,
                    "lng": -57.8874
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
                "name": "Alejandro Romero Gamarra",
                "position": "MF",
                "club": "Al Ain",
                "league": "UAE Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Ciudadela",
                    "country": "Argentina",
                    "lat": -34.6333,
                    "lng": -58.5333
                }
            },
            {
                "name": "Braian Ojeda",
                "position": "MF",
                "club": "Orlando City",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Itauguá",
                    "country": "Paraguay",
                    "lat": -25.3833,
                    "lng": -57.3333
                }
            },
            {
                "name": "Matías Galarza",
                "position": "MF",
                "club": "River Plate",
                "league": "Argentine Primera",
                "age": 23,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -25.28,
                    "lng": -57.6344
                }
            },
            {
                "name": "Diego León",
                "position": "MF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 18,
                "birthplace": {
                    "city": "Asunción",
                    "country": "Paraguay",
                    "lat": -26.1489,
                    "lng": -56.8276
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
                    "lat": -25.2415,
                    "lng": -58.5507
                }
            },
            {
                "name": "Hugo Cuenca",
                "position": "MF",
                "club": "Burgos CF",
                "league": "La Liga",
                "age": 21,
                "birthplace": {
                    "city": "Coronel Oviedo",
                    "country": "Paraguay",
                    "lat": -25.4481,
                    "lng": -56.4411
                }
            },
            {
                "name": "Antonio Sanabria",
                "position": "FW",
                "club": "Cremonese",
                "league": "Serie A",
                "age": 29,
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
                "name": "Ronaldo Martínez",
                "position": "FW",
                "club": "Talleres",
                "league": "Argentine Primera",
                "age": 29,
                "birthplace": {
                    "city": "Eusebio Ayala",
                    "country": "Paraguay",
                    "lat": -25.3818,
                    "lng": -56.9608
                }
            }
        ]
    },
    "AUS": {
        "name": "Australia",
        "flag": "🇦🇺",
        "confederation": "AFC",
        "fifaRanking": 13,
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
                "name": "Lewis Miller",
                "position": "DF",
                "club": "Blackburn Rovers",
                "league": "EFL Championship",
                "age": 25,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.6332,
                    "lng": 151.4779
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
                "name": "Callum Elder",
                "position": "DF",
                "club": "Derby County",
                "league": "EFL Championship",
                "age": 31,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.8678,
                    "lng": 151.21
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
                "name": "James Overy",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 18,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.9805,
                    "lng": 151.5244
                }
            },
            {
                "name": "Jack Iredale",
                "position": "DF",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 29,
                "birthplace": {
                    "city": "Greenock",
                    "country": "United Kingdom",
                    "lat": 55.95,
                    "lng": -4.7667
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
                "name": "Max Balard",
                "position": "MF",
                "club": "NAC Breda",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.8678,
                    "lng": 151.21
                }
            },
            {
                "name": "Cameron Devlin",
                "position": "MF",
                "club": "Heart of Midlothian",
                "league": "Scottish Premiership",
                "age": 27,
                "birthplace": {
                    "city": "Australia",
                    "country": "Australia",
                    "lat": -25,
                    "lng": 133
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
                    "lat": -34.7553,
                    "lng": 151.4541
                }
            },
            {
                "name": "Jackson Irvine",
                "position": "MF",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 32,
                "birthplace": {
                    "city": "Melbourne",
                    "country": "Australia",
                    "lat": -37.8142,
                    "lng": 144.9631
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
                "age": 19,
                "birthplace": {
                    "city": "Kigoma",
                    "country": "Tanzania",
                    "lat": -4.8833,
                    "lng": 29.6333
                }
            },
            {
                "name": "Mohamed Toure",
                "position": "FW",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 21,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -33.7654,
                    "lng": 150.4272
                }
            },
            {
                "name": "Al Hassan Toure",
                "position": "FW",
                "club": "Sydney FC",
                "league": "A-League",
                "age": 25,
                "birthplace": {
                    "city": "Guinea",
                    "country": "Guinea",
                    "lat": 10,
                    "lng": -11
                }
            },
            {
                "name": "Craig Goodwin",
                "position": "FW",
                "club": "Adelaide United",
                "league": "A-League",
                "age": 34,
                "birthplace": {
                    "city": "Adelaide",
                    "country": "Australia",
                    "lat": -34.9275,
                    "lng": 138.6
                }
            },
            {
                "name": "Nicholas D'Agostino",
                "position": "FW",
                "club": "Brisbane Roar",
                "league": "A-League",
                "age": 27,
                "birthplace": {
                    "city": "Sydney",
                    "country": "Australia",
                    "lat": -32.9203,
                    "lng": 151.5912
                }
            }
        ]
    },
    "GER": {
        "name": "Germany",
        "flag": "🇩🇪",
        "confederation": "UEFA",
        "fifaRanking": 14,
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
                "age": 27,
                "birthplace": {
                    "city": "Wiesbaden",
                    "country": "Germany",
                    "lat": 50.0825,
                    "lng": 8.24
                }
            },
            {
                "name": "Noah Atubolu",
                "position": "GK",
                "club": "SC Freiburg",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Freiburg im Breisgau",
                    "country": "Germany",
                    "lat": 47.995,
                    "lng": 7.85
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
                "age": 29,
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
                "name": "Ridle Baku",
                "position": "DF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Mainz",
                    "country": "Germany",
                    "lat": 49.9994,
                    "lng": 8.2736
                }
            },
            {
                "name": "Aleksandar Pavlović",
                "position": "MF",
                "club": "Bayern Munich",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Munich",
                    "country": "Germany",
                    "lat": 48.1375,
                    "lng": 11.575
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
                "name": "Jamie Leweling",
                "position": "MF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 24,
                "birthplace": {
                    "city": "Germany",
                    "country": "Germany",
                    "lat": 51,
                    "lng": 10
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
                "name": "Assan Ouédraogo",
                "position": "MF",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Mülheim an der Ruhr",
                    "country": "Germany",
                    "lat": 51.4275,
                    "lng": 6.8825
                }
            },
            {
                "name": "Felix Nmecha",
                "position": "MF",
                "club": "Borussia Dortmund",
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
                "name": "Karim Adeyemi",
                "position": "MF",
                "club": "Borussia Dortmund",
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
                "name": "Jonathan Burkardt",
                "position": "FW",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Darmstadt",
                    "country": "Germany",
                    "lat": 49.8667,
                    "lng": 8.65
                }
            },
            {
                "name": "Nick Woltemade",
                "position": "FW",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Bremen",
                    "country": "Germany",
                    "lat": 53.0758,
                    "lng": 8.8072
                }
            }
        ]
    },
    "CUW": {
        "name": "Curaçao",
        "flag": "🇨🇼",
        "confederation": "CONCACAF",
        "fifaRanking": 15,
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
                    "lat": 12.5691,
                    "lng": -69.2122
                }
            },
            {
                "name": "Armando Obispo",
                "position": "DF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 26,
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
                "age": 31,
                "birthplace": {
                    "city": "Kerkrade",
                    "country": "Netherlands",
                    "lat": 50.8667,
                    "lng": 6.0667
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
                "club": "Iğdır F.K.",
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
                    "lat": 12.4626,
                    "lng": -68.1459
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
                "age": 23,
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
                "name": "Jordi Paulina",
                "position": "FW",
                "club": "Fortuna Dusseldorf",
                "league": "2. Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Willemstad",
                    "country": "Curaçao",
                    "lat": 13.1629,
                    "lng": -68.441
                }
            },
            {
                "name": "Gervane Kastaneer",
                "position": "FW",
                "club": "Terengganu FC",
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
        "fifaRanking": 16,
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
                "name": "Mohamed Koné",
                "position": "GK",
                "club": "Charleroi",
                "league": "Belgian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Adjamé",
                    "country": "Ivory Coast",
                    "lat": 5.3648,
                    "lng": -4.0237
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
                "name": "Armel Zohouri",
                "position": "DF",
                "club": "Iberia 1999",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Divo",
                    "country": "Ivory Coast",
                    "lat": 5.8372,
                    "lng": -5.3572
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
                "name": "Willy Boly",
                "position": "DF",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Melun",
                    "country": "France",
                    "lat": 48.5397,
                    "lng": 2.6592
                }
            },
            {
                "name": "Christopher Opéri",
                "position": "DF",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
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
                "name": "Jean-Philippe Gbamin",
                "position": "DF",
                "club": "Metz",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "San-Pédro",
                    "country": "Ivory Coast",
                    "lat": 4.7333,
                    "lng": -6.6333
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
                "name": "Vakoun Issouf Bayo",
                "position": "FW",
                "club": "Udinese",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Daloa",
                    "country": "Ivory Coast",
                    "lat": 6.8667,
                    "lng": -6.45
                }
            },
            {
                "name": "Wilfried Zaha",
                "position": "FW",
                "club": "Charlotte FC",
                "league": "MLS",
                "age": 33,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            },
            {
                "name": "Jean-Philippe Krasso",
                "position": "FW",
                "club": "Paris FC",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Stuttgart",
                    "country": "Germany",
                    "lat": 48.7775,
                    "lng": 9.18
                }
            },
            {
                "name": "Oumar Diakité",
                "position": "FW",
                "club": "Cercle Brugge",
                "league": "Belgian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Bingerville",
                    "country": "Ivory Coast",
                    "lat": 5.35,
                    "lng": -3.9
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
                "name": "Evann Guessand",
                "position": "FW",
                "club": "Aston Villa",
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
                "name": "Bazoumana Touré",
                "position": "FW",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 6.0752,
                    "lng": -3.6523
                }
            },
            {
                "name": "Yan Diomande",
                "position": "FW",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Abidjan",
                    "country": "Ivory Coast",
                    "lat": 5.3364,
                    "lng": -4.0267
                }
            }
        ]
    },
    "ECU": {
        "name": "Ecuador",
        "flag": "🇪🇨",
        "confederation": "CONMEBOL",
        "fifaRanking": 17,
        "players": [
            {
                "name": "Hernán Galíndez",
                "position": "GK",
                "club": "Huracán",
                "league": "Argentine Primera",
                "age": 38,
                "birthplace": {
                    "city": "Rosario",
                    "country": "Argentina",
                    "lat": -32.9575,
                    "lng": -60.6394
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
                "name": "Cristhian Loor",
                "position": "GK",
                "club": "Botafogo",
                "league": "Brasileirão",
                "age": 19,
                "birthplace": {
                    "city": "Quito",
                    "country": "Ecuador",
                    "lat": -0.2342,
                    "lng": -77.6407
                }
            },
            {
                "name": "Félix Torres",
                "position": "DF",
                "club": "Corinthians",
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
                "name": "Piero Hincapié",
                "position": "DF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Esmeraldas",
                    "country": "Ecuador",
                    "lat": 0.95,
                    "lng": -79.6667
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
                "name": "Cristian Ramírez",
                "position": "DF",
                "club": "Lokomotiv Moscow",
                "league": "Russian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Santo Domingo",
                    "country": "Ecuador",
                    "lat": -0.2542,
                    "lng": -79.1719
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
                "name": "Ángelo Preciado",
                "position": "DF",
                "club": "Atlético Mineiro",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Shushufindi Canton",
                    "country": "Ecuador",
                    "lat": -0.1871,
                    "lng": -76.645
                }
            },
            {
                "name": "Leonardo Realpe",
                "position": "DF",
                "club": "Famalicão",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Rosa Zárate",
                    "country": "Ecuador",
                    "lat": 0.3272,
                    "lng": -79.4689
                }
            },
            {
                "name": "Jhoanner Chávez",
                "position": "DF",
                "club": "Lens",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Coca",
                    "country": "Ecuador",
                    "lat": -0.4625,
                    "lng": -76.9842
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
                "name": "Denil Castillo",
                "position": "MF",
                "club": "Midtjylland",
                "league": "Danish Superliga",
                "age": 21,
                "birthplace": {
                    "city": "Eloy Alfaro Canton",
                    "country": "Ecuador",
                    "lat": 1.2499,
                    "lng": -78.9842
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
                "age": 23,
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
                "name": "Patrik Mercado",
                "position": "MF",
                "club": "Independiente del Valle",
                "league": "Ecuadorian Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Tena",
                    "country": "Ecuador",
                    "lat": -0.989,
                    "lng": -77.8159
                }
            },
            {
                "name": "Jeremy Arévalo",
                "position": "FW",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 20,
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
                "age": 25,
                "birthplace": {
                    "city": "Ibarra",
                    "country": "Ecuador",
                    "lat": 0.3628,
                    "lng": -78.13
                }
            },
            {
                "name": "Leonardo Campana",
                "position": "FW",
                "club": "New England Revolution",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Guayaquil",
                    "country": "Ecuador",
                    "lat": -2.19,
                    "lng": -79.8875
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
                "name": "Nilson Angulo",
                "position": "FW",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Quito",
                    "country": "Ecuador",
                    "lat": -0.22,
                    "lng": -78.5125
                }
            }
        ]
    },
    "NED": {
        "name": "Netherlands",
        "flag": "🇳🇱",
        "confederation": "UEFA",
        "fifaRanking": 18,
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
                "name": "Robin Roefs",
                "position": "GK",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Heeswijk-Dinther",
                    "country": "Netherlands",
                    "lat": 51.6503,
                    "lng": 5.475
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
                "name": "Jurriën Timber",
                "position": "DF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Utrecht",
                    "country": "Netherlands",
                    "lat": 52.0908,
                    "lng": 5.1222
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
                "age": 30,
                "birthplace": {
                    "city": "The Hague",
                    "country": "Netherlands",
                    "lat": 52.08,
                    "lng": 4.31
                }
            },
            {
                "name": "Matthijs de Ligt",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Leiderdorp",
                    "country": "Netherlands",
                    "lat": 52.1617,
                    "lng": 4.5283
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
                "name": "Frenkie de Jong",
                "position": "MF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Arkel",
                    "country": "Netherlands",
                    "lat": 51.8642,
                    "lng": 4.9944
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
                "name": "Emmanuel Emegha",
                "position": "FW",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "The Hague",
                    "country": "Netherlands",
                    "lat": 52.08,
                    "lng": 4.31
                }
            },
            {
                "name": "Memphis Depay",
                "position": "FW",
                "club": "Corinthians",
                "league": "Brasileirão",
                "age": 31,
                "birthplace": {
                    "city": "Moordrecht",
                    "country": "Netherlands",
                    "lat": 51.9861,
                    "lng": 4.6681
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
            }
        ]
    },
    "JPN": {
        "name": "Japan",
        "flag": "🇯🇵",
        "confederation": "AFC",
        "fifaRanking": 19,
        "players": [
            {
                "name": "Tomoki Hayakawa",
                "position": "GK",
                "club": "Kashima Antlers",
                "league": "J1 League",
                "age": 26,
                "birthplace": {
                    "city": "Kanagawa Prefecture",
                    "country": "Japan",
                    "lat": 35.4477,
                    "lng": 139.6425
                }
            },
            {
                "name": "Leo Kokubo",
                "position": "GK",
                "club": "Sint-Truiden",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Chiba Prefecture",
                    "country": "Japan",
                    "lat": 35.6046,
                    "lng": 140.1232
                }
            },
            {
                "name": "Taishi Brandon Nozawa",
                "position": "GK",
                "club": "Antwerp",
                "league": "Belgian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Ginowan",
                    "country": "Japan",
                    "lat": 26.2815,
                    "lng": 127.7785
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
                "name": "Ko Itakura",
                "position": "DF",
                "club": "Ajax",
                "league": "Eredivisie",
                "age": 29,
                "birthplace": {
                    "city": "Yokohama",
                    "country": "Japan",
                    "lat": 35.4333,
                    "lng": 139.65
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
                "name": "Tomoya Ando",
                "position": "DF",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Toyota",
                    "country": "Japan",
                    "lat": 35.0824,
                    "lng": 137.1563
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
                "name": "Wataru Endo",
                "position": "MF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Yokohama",
                    "country": "Japan",
                    "lat": 35.4333,
                    "lng": 139.65
                }
            },
            {
                "name": "Joel Chima Fujita",
                "position": "MF",
                "club": "FC St. Pauli",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Tokyo",
                    "country": "Japan",
                    "lat": 35.6894,
                    "lng": 139.6917
                }
            },
            {
                "name": "Takumi Minamino",
                "position": "MF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Izumisano",
                    "country": "Japan",
                    "lat": 34.4069,
                    "lng": 135.3275
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
                "name": "Takefusa Kubo",
                "position": "MF",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Kawasaki",
                    "country": "Japan",
                    "lat": 35.5309,
                    "lng": 139.703
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
                "name": "Sōta Kitano",
                "position": "MF",
                "club": "Red Bull Salzburg",
                "league": "Austrian Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Wakayama Prefecture",
                    "country": "Japan",
                    "lat": 34.226,
                    "lng": 135.1675
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
                    "lat": 35.4333,
                    "lng": 139.65
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
                    "lat": 35.8503,
                    "lng": 139.168
                }
            }
        ]
    },
    "TUN": {
        "name": "Tunisia",
        "flag": "🇹🇳",
        "confederation": "CAF",
        "fifaRanking": 20,
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
                    "lat": 37.3284,
                    "lng": 9.7324
                }
            },
            {
                "name": "Aymen Dahmen",
                "position": "GK",
                "club": "CS Sfaxien",
                "league": "Tunisian Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Sfax",
                    "country": "Tunisia",
                    "lat": 34.74,
                    "lng": 10.76
                }
            },
            {
                "name": "Bechir Ben Saïd",
                "position": "GK",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Gabès",
                    "country": "Tunisia",
                    "lat": 33.8814,
                    "lng": 10.0983
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
                    "lat": 36.7521,
                    "lng": 10.9585
                }
            },
            {
                "name": "Ali Abdi",
                "position": "DF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Sfax",
                    "country": "Tunisia",
                    "lat": 34.74,
                    "lng": 10.76
                }
            },
            {
                "name": "Montassar Talbi",
                "position": "DF",
                "club": "Lorient",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Yassine Meriah",
                "position": "DF",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 32,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.8008,
                    "lng": 10.18
                }
            },
            {
                "name": "Dylan Bronn",
                "position": "DF",
                "club": "Servette",
                "league": "Swiss Super League",
                "age": 30,
                "birthplace": {
                    "city": "Cannes",
                    "country": "France",
                    "lat": 43.5525,
                    "lng": 7.0214
                }
            },
            {
                "name": "Ali Maâloul",
                "position": "DF",
                "club": "CS Sfaxien",
                "league": "Tunisian Ligue 1",
                "age": 36,
                "birthplace": {
                    "city": "Sfax",
                    "country": "Tunisia",
                    "lat": 34.74,
                    "lng": 10.76
                }
            },
            {
                "name": "Mohamed Ben Ali",
                "position": "DF",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Aryanah",
                    "country": "Tunisia",
                    "lat": 36.8625,
                    "lng": 10.1956
                }
            },
            {
                "name": "Nader Ghandri",
                "position": "DF",
                "club": "Akhmat Grozny",
                "league": "Russian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Aubervilliers",
                    "country": "France",
                    "lat": 48.9111,
                    "lng": 2.3825
                }
            },
            {
                "name": "Yan Valery",
                "position": "DF",
                "club": "Sheffield Wednesday",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Champigny-sur-Marne",
                    "country": "France",
                    "lat": 48.8172,
                    "lng": 2.5156
                }
            },
            {
                "name": "Mortadha Ben Ouanes",
                "position": "DF",
                "club": "Kasımpaşa",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Sousse",
                    "country": "Tunisia",
                    "lat": 35.8333,
                    "lng": 10.6333
                }
            },
            {
                "name": "Adem Arous",
                "position": "DF",
                "club": "Kasımpaşa",
                "league": "Turkish Super Lig",
                "age": 21,
                "birthplace": {
                    "city": "Medina",
                    "country": "Saudi Arabia",
                    "lat": 24.47,
                    "lng": 39.61
                }
            },
            {
                "name": "Mohamed Ali Ben Romdhane",
                "position": "MF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.8008,
                    "lng": 10.18
                }
            },
            {
                "name": "Hannibal Mejbri",
                "position": "MF",
                "club": "Burnley",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Ivry-sur-Seine",
                    "country": "France",
                    "lat": 48.8139,
                    "lng": 2.3878
                }
            },
            {
                "name": "Ismaël Gharbi",
                "position": "MF",
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Ferjani Sassi",
                "position": "MF",
                "club": "Al-Gharafa",
                "league": "Qatar Stars League",
                "age": 33,
                "birthplace": {
                    "city": "Aryanah",
                    "country": "Tunisia",
                    "lat": 36.8625,
                    "lng": 10.1956
                }
            },
            {
                "name": "Hadj Mahmoud",
                "position": "MF",
                "club": "Lugano",
                "league": "Swiss Super League",
                "age": 25,
                "birthplace": {
                    "city": "Sousse",
                    "country": "Tunisia",
                    "lat": 35.8333,
                    "lng": 10.6333
                }
            },
            {
                "name": "Ellyes Skhiri",
                "position": "MF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Lunel",
                    "country": "France",
                    "lat": 43.6769,
                    "lng": 4.1353
                }
            },
            {
                "name": "Houssem Tka",
                "position": "MF",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Monastir",
                    "country": "Tunisia",
                    "lat": 35.778,
                    "lng": 10.8262
                }
            },
            {
                "name": "Elias Achouri",
                "position": "FW",
                "club": "Copenhagen",
                "league": "Danish Superliga",
                "age": 26,
                "birthplace": {
                    "city": "Saint-Denis",
                    "country": "France",
                    "lat": -20.8789,
                    "lng": 55.4481
                }
            },
            {
                "name": "Elias Saad",
                "position": "FW",
                "club": "Hannover 96",
                "league": "2. Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Hamburg",
                    "country": "Germany",
                    "lat": 53.55,
                    "lng": 10
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
                    "lat": 36.8008,
                    "lng": 10.18
                }
            },
            {
                "name": "Firas Chaouat",
                "position": "FW",
                "club": "Club Africain",
                "league": "Tunisian Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Sfax",
                    "country": "Tunisia",
                    "lat": 34.74,
                    "lng": 10.76
                }
            },
            {
                "name": "Naïm Sliti",
                "position": "FW",
                "club": "Al-Shamal",
                "league": "Qatar Stars League",
                "age": 33,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Sebastian Tounekti",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 23,
                "birthplace": {
                    "city": "Tromsø Municipality",
                    "country": "Norway",
                    "lat": 69.6496,
                    "lng": 18.957
                }
            },
            {
                "name": "Seifeddine Jaziri",
                "position": "FW",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Tunis",
                    "country": "Tunisia",
                    "lat": 36.8008,
                    "lng": 10.18
                }
            }
        ]
    },
    "BEL": {
        "name": "Belgium",
        "flag": "🇧🇪",
        "confederation": "UEFA",
        "fifaRanking": 21,
        "players": [
            {
                "name": "Senne Lammens",
                "position": "GK",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Aaigem",
                    "country": "Belgium",
                    "lat": 50.8892,
                    "lng": 3.9372
                }
            },
            {
                "name": "Mike Penders",
                "position": "GK",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 20,
                "birthplace": {
                    "city": "Maasmechelen",
                    "country": "Belgium",
                    "lat": 50.9967,
                    "lng": 5.7025
                }
            },
            {
                "name": "Matz Sels",
                "position": "GK",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Lint",
                    "country": "Belgium",
                    "lat": 51.1278,
                    "lng": 4.4943
                }
            },
            {
                "name": "Maarten Vandevoordt",
                "position": "GK",
                "club": "RB Leipzig",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Sint-Truiden",
                    "country": "Belgium",
                    "lat": 50.8167,
                    "lng": 5.1833
                }
            },
            {
                "name": "Joaquin Seys",
                "position": "DF",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Ostend",
                    "country": "Belgium",
                    "lat": 51.2258,
                    "lng": 2.9194
                }
            },
            {
                "name": "Arthur Theate",
                "position": "DF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Liège",
                    "country": "Belgium",
                    "lat": 50.6397,
                    "lng": 5.5706
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
                    "city": "Knokke-Heist",
                    "country": "Belgium",
                    "lat": 51.3414,
                    "lng": 3.2869
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
                    "city": "Antwerp",
                    "country": "Belgium",
                    "lat": 51.2211,
                    "lng": 4.3997
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
                "name": "Diego Moreira",
                "position": "MF",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Liège",
                    "country": "Belgium",
                    "lat": 50.6397,
                    "lng": 5.5706
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
                "name": "Charles Vanhoutte",
                "position": "MF",
                "club": "Nice",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Kortrijk",
                    "country": "Belgium",
                    "lat": 50.8275,
                    "lng": 3.2658
                }
            },
            {
                "name": "Hans Vanaken",
                "position": "MF",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Neerpelt",
                    "country": "Belgium",
                    "lat": 51.2278,
                    "lng": 5.4422
                }
            },
            {
                "name": "Nicolas Raskin",
                "position": "MF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 24,
                "birthplace": {
                    "city": "Waregem",
                    "country": "Belgium",
                    "lat": 50.8811,
                    "lng": 3.4001
                }
            },
            {
                "name": "Loïs Openda",
                "position": "FW",
                "club": "Juventus",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Liège",
                    "country": "Belgium",
                    "lat": 50.6397,
                    "lng": 5.5706
                }
            },
            {
                "name": "Leandro Trossard",
                "position": "FW",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Maasmechelen",
                    "country": "Belgium",
                    "lat": 50.9967,
                    "lng": 5.7025
                }
            },
            {
                "name": "Jérémy Doku",
                "position": "FW",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Antwerp",
                    "country": "Belgium",
                    "lat": 51.2211,
                    "lng": 4.3997
                }
            },
            {
                "name": "Dodi Lukébakio",
                "position": "FW",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 28,
                "birthplace": {
                    "city": "Asse",
                    "country": "Belgium",
                    "lat": 50.9,
                    "lng": 4.2
                }
            },
            {
                "name": "Charles De Ketelaere",
                "position": "FW",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Bruges",
                    "country": "Belgium",
                    "lat": 51.2089,
                    "lng": 3.2242
                }
            },
            {
                "name": "Romeo Vermant",
                "position": "FW",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 22,
                "birthplace": {
                    "city": "Belgium",
                    "country": "Belgium",
                    "lat": 50.6411,
                    "lng": 4.6681
                }
            },
            {
                "name": "Alexis Saelemaekers",
                "position": "FW",
                "club": "Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Berchem-Sainte-Agathe",
                    "country": "Belgium",
                    "lat": 50.865,
                    "lng": 4.2947
                }
            }
        ]
    },
    "EGY": {
        "name": "Egypt",
        "flag": "🇪🇬",
        "confederation": "CAF",
        "fifaRanking": 22,
        "players": [
            {
                "name": "Ahmed El Shenawy",
                "position": "GK",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Port Said",
                    "country": "Egypt",
                    "lat": 31.2625,
                    "lng": 32.3061
                }
            },
            {
                "name": "Mohamed Sobhy",
                "position": "GK",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Egypt",
                    "country": "Egypt",
                    "lat": 27,
                    "lng": 29
                }
            },
            {
                "name": "Mohamed El Shenawy",
                "position": "GK",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 37,
                "birthplace": {
                    "city": "Kafr el-Sheikh",
                    "country": "Egypt",
                    "lat": 31.1143,
                    "lng": 30.9401
                }
            },
            {
                "name": "Mostafa Shobeir",
                "position": "GK",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Giza",
                    "country": "Egypt",
                    "lat": 29.987,
                    "lng": 31.2118
                }
            },
            {
                "name": "Khaled Sobhi",
                "position": "DF",
                "club": "Al Masry",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Ismailia",
                    "country": "Egypt",
                    "lat": 30.5833,
                    "lng": 32.2667
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
                    "lat": 30.0444,
                    "lng": 31.2358
                }
            },
            {
                "name": "Hossam Abdelmaguid",
                "position": "DF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Egypt",
                    "country": "Egypt",
                    "lat": 27,
                    "lng": 29
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
                    "lat": 30.0444,
                    "lng": 31.2358
                }
            },
            {
                "name": "Yasser Ibrahim",
                "position": "DF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Mansoura",
                    "country": "Egypt",
                    "lat": 31.05,
                    "lng": 31.3833
                }
            },
            {
                "name": "Mohamed Hamdy",
                "position": "DF",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.0444,
                    "lng": 31.2358
                }
            },
            {
                "name": "Ahmed Abou El Fotouh",
                "position": "DF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.0444,
                    "lng": 31.2358
                }
            },
            {
                "name": "Ahmed Eid",
                "position": "DF",
                "club": "Al Masry",
                "league": "Egyptian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Faiyum",
                    "country": "Egypt",
                    "lat": 29.3,
                    "lng": 30.8333
                }
            },
            {
                "name": "Mohamed Ismail",
                "position": "DF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.644,
                    "lng": 30.7804
                }
            },
            {
                "name": "Emam Ashour",
                "position": "MF",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "El Senbellawein",
                    "country": "Egypt",
                    "lat": 30.8814,
                    "lng": 31.4603
                }
            },
            {
                "name": "Hamdy Fathy",
                "position": "MF",
                "club": "Al-Wakrah",
                "league": "Qatar Stars League",
                "age": 31,
                "birthplace": {
                    "city": "Beheira Governorate",
                    "country": "Egypt",
                    "lat": 30.61,
                    "lng": 30.43
                }
            },
            {
                "name": "Mohamed Shehata",
                "position": "MF",
                "club": "Zamalek",
                "league": "Egyptian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.0444,
                    "lng": 31.2358
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
                    "lat": 30.7055,
                    "lng": 31.7269
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
                    "lat": 30.4158,
                    "lng": 30.9163
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
                    "lat": 30.4422,
                    "lng": 30.226
                }
            },
            {
                "name": "Trézéguet",
                "position": "FW",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Kafr el-Sheikh",
                    "country": "Egypt",
                    "lat": 31.1143,
                    "lng": 30.9401
                }
            },
            {
                "name": "Salah Mohsen",
                "position": "FW",
                "club": "Al Masry",
                "league": "Egyptian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Zagazig",
                    "country": "Egypt",
                    "lat": 30.5667,
                    "lng": 31.5
                }
            },
            {
                "name": "Mohamed Salah",
                "position": "FW",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Nagrig",
                    "country": "Egypt",
                    "lat": 30.9725,
                    "lng": 30.8669
                }
            },
            {
                "name": "Mostafa Mohamed",
                "position": "FW",
                "club": "Nantes",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Giza",
                    "country": "Egypt",
                    "lat": 29.987,
                    "lng": 31.2118
                }
            },
            {
                "name": "Mostafa Fathi",
                "position": "FW",
                "club": "Pyramids",
                "league": "Egyptian Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Mansoura",
                    "country": "Egypt",
                    "lat": 31.05,
                    "lng": 31.3833
                }
            },
            {
                "name": "Ibrahim Adel",
                "position": "FW",
                "club": "Nordsjælland",
                "league": "Danish Superliga",
                "age": 24,
                "birthplace": {
                    "city": "Port Said",
                    "country": "Egypt",
                    "lat": 31.2625,
                    "lng": 32.3061
                }
            },
            {
                "name": "Osama Faisal",
                "position": "FW",
                "club": "National Bank of Egypt",
                "league": "Egyptian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Cairo",
                    "country": "Egypt",
                    "lat": 30.0444,
                    "lng": 31.2358
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
                    "lat": 30.0444,
                    "lng": 31.2358
                }
            },
            {
                "name": "Zizo",
                "position": "FW",
                "club": "Al Ahly",
                "league": "Egyptian Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Egypt",
                    "country": "Egypt",
                    "lat": 27,
                    "lng": 29
                }
            }
        ]
    },
    "IRN": {
        "name": "Iran",
        "flag": "🇮🇷",
        "confederation": "AFC",
        "fifaRanking": 23,
        "players": [
            {
                "name": "Alireza Beiranvand",
                "position": "GK",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Sarab-e Yas",
                    "country": "Iran",
                    "lat": 33.4308,
                    "lng": 48.3431
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
                    "lat": 35.6889,
                    "lng": 51.3897
                }
            },
            {
                "name": "Hossein Hosseini",
                "position": "GK",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Shiraz",
                    "country": "Iran",
                    "lat": 29.61,
                    "lng": 52.5425
                }
            },
            {
                "name": "Mohammad Reza Akhbari",
                "position": "GK",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Isfahan",
                    "country": "Iran",
                    "lat": 32.6525,
                    "lng": 51.675
                }
            },
            {
                "name": "Ali Nemati",
                "position": "DF",
                "club": "Foolad",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Nishapur",
                    "country": "Iran",
                    "lat": 36.2133,
                    "lng": 58.7958
                }
            },
            {
                "name": "Saleh Hardani",
                "position": "DF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Bahmai County",
                    "country": "Iran",
                    "lat": 31.05,
                    "lng": 50.0833
                }
            },
            {
                "name": "Shojae Khalilzadeh",
                "position": "DF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 36,
                "birthplace": {
                    "city": "Bahnemir",
                    "country": "Iran",
                    "lat": 36.6683,
                    "lng": 52.7617
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
                    "lat": 35.6889,
                    "lng": 51.3897
                }
            },
            {
                "name": "Hossein Kanaanizadegan",
                "position": "DF",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Mahshahr",
                    "country": "Iran",
                    "lat": 30.5567,
                    "lng": 49.1886
                }
            },
            {
                "name": "Majid Hosseini",
                "position": "DF",
                "club": "Kayserispor",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Karaj",
                    "country": "Iran",
                    "lat": 35.8328,
                    "lng": 50.9917
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
                    "lat": 36.4033,
                    "lng": 50.728
                }
            },
            {
                "name": "Danial Esmaeilifar",
                "position": "DF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Sari",
                    "country": "Iran",
                    "lat": 36.5658,
                    "lng": 53.0597
                }
            },
            {
                "name": "Saeid Ezatolahi",
                "position": "MF",
                "club": "Shabab Al Ahli",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Bandar-e Anzali",
                    "country": "Iran",
                    "lat": 37.4731,
                    "lng": 49.4578
                }
            },
            {
                "name": "Saman Ghoddos",
                "position": "MF",
                "club": "Ittihad Kalba",
                "league": "UAE Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.1399,
                    "lng": 51.6344
                }
            },
            {
                "name": "Mohammad Ghorbani",
                "position": "MF",
                "club": "Al Wahda",
                "league": "UAE Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Arak",
                    "country": "Iran",
                    "lat": 34.095,
                    "lng": 49.6981
                }
            },
            {
                "name": "Mehdi Hashemnejad",
                "position": "MF",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Bandar-e Anzali",
                    "country": "Iran",
                    "lat": 37.4731,
                    "lng": 49.4578
                }
            },
            {
                "name": "Mehdi Tikdari",
                "position": "MF",
                "club": "Gol Gohar",
                "league": "Iranian Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Kerman",
                    "country": "Iran",
                    "lat": 30.2911,
                    "lng": 57.0678
                }
            },
            {
                "name": "Omid Noorafkan",
                "position": "MF",
                "club": "Sepahan",
                "league": "Iranian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Ray",
                    "country": "Iran",
                    "lat": 35.5975,
                    "lng": 51.4344
                }
            },
            {
                "name": "Alireza Koushki",
                "position": "MF",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Gachsaran County",
                    "country": "Iran",
                    "lat": 30.3333,
                    "lng": 50.75
                }
            },
            {
                "name": "Hadi Habibinejad",
                "position": "MF",
                "club": "Chadormalou",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Bagh-e Malek",
                    "country": "Iran",
                    "lat": 31.5236,
                    "lng": 49.8894
                }
            },
            {
                "name": "Mohammad Mehdi Mohebi",
                "position": "MF",
                "club": "Ittihad Kalba",
                "league": "UAE Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Iran",
                    "country": "Iran",
                    "lat": 32,
                    "lng": 53
                }
            },
            {
                "name": "Mehdi Taremi",
                "position": "FW",
                "club": "Olympiacos",
                "league": "Greek Super League",
                "age": 33,
                "birthplace": {
                    "city": "Bushehr",
                    "country": "Iran",
                    "lat": 28.9689,
                    "lng": 50.8367
                }
            },
            {
                "name": "Amirhossein Hosseinzadeh",
                "position": "FW",
                "club": "Tractor",
                "league": "Iranian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 35.6889,
                    "lng": 51.3897
                }
            },
            {
                "name": "Ali Alipour",
                "position": "FW",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Qaem Shahr",
                    "country": "Iran",
                    "lat": 36.4631,
                    "lng": 52.86
                }
            },
            {
                "name": "Mohammad Omri",
                "position": "FW",
                "club": "Persepolis",
                "league": "Iranian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Tehran",
                    "country": "Iran",
                    "lat": 34.8319,
                    "lng": 51.6967
                }
            },
            {
                "name": "Mehdi Ghayedi",
                "position": "FW",
                "club": "Al-Nasr",
                "league": "UAE Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Bushehr",
                    "country": "Iran",
                    "lat": 28.9689,
                    "lng": 50.8367
                }
            }
        ]
    },
    "NZL": {
        "name": "New Zealand",
        "flag": "🇳🇿",
        "confederation": "OFC",
        "fifaRanking": 24,
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
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "Nik Tzanev",
                "position": "GK",
                "club": "Newport County",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
                }
            },
            {
                "name": "Kees Sims",
                "position": "GK",
                "club": "GAIS",
                "league": "Swedish Allsvenskan",
                "age": 22,
                "birthplace": {
                    "city": "Bracknell",
                    "country": "United Kingdom",
                    "lat": 51.416,
                    "lng": -0.749
                }
            },
            {
                "name": "Storm Roux",
                "position": "DF",
                "club": "Central Coast Mariners",
                "league": "A-League",
                "age": 33,
                "birthplace": {
                    "city": "Somerset West",
                    "country": "South Africa",
                    "lat": -34.0972,
                    "lng": 18.8639
                }
            },
            {
                "name": "Francis de Vries",
                "position": "DF",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Christchurch",
                    "country": "New Zealand",
                    "lat": -43.5311,
                    "lng": 172.6361
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
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "Michael Boxall",
                "position": "DF",
                "club": "Minnesota United",
                "league": "MLS",
                "age": 37,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "James McGarry",
                "position": "DF",
                "club": "Brisbane Roar",
                "league": "A-League",
                "age": 27,
                "birthplace": {
                    "city": "New Zealand",
                    "country": "New Zealand",
                    "lat": -41.2,
                    "lng": 174
                }
            },
            {
                "name": "Finn Surman",
                "position": "DF",
                "club": "Portland Timbers",
                "league": "MLS",
                "age": 22,
                "birthplace": {
                    "city": "Christchurch",
                    "country": "New Zealand",
                    "lat": -43.5311,
                    "lng": 172.6361
                }
            },
            {
                "name": "George Stanger",
                "position": "DF",
                "club": "Kilmarnock",
                "league": "Scottish Premiership",
                "age": 25,
                "birthplace": {
                    "city": "Melrose",
                    "country": "United Kingdom",
                    "lat": 55.5833,
                    "lng": -2.7167
                }
            },
            {
                "name": "Bill Tuiloma",
                "position": "DF",
                "club": "Charlotte FC",
                "league": "MLS",
                "age": 30,
                "birthplace": {
                    "city": "Christchurch",
                    "country": "New Zealand",
                    "lat": -43.5311,
                    "lng": 172.6361
                }
            },
            {
                "name": "Tommy Smith",
                "position": "DF",
                "club": "Braintree Town",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Macclesfield",
                    "country": "United Kingdom",
                    "lat": 53.2581,
                    "lng": -2.1274
                }
            },
            {
                "name": "Joe Bell",
                "position": "MF",
                "club": "Viking",
                "league": "Norwegian Eliteserien",
                "age": 26,
                "birthplace": {
                    "city": "Bristol",
                    "country": "United Kingdom",
                    "lat": 51.4536,
                    "lng": -2.5975
                }
            },
            {
                "name": "Matthew Garbett",
                "position": "MF",
                "club": "Peterborough United",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Marko Stamenić",
                "position": "MF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
                }
            },
            {
                "name": "Sarpreet Singh",
                "position": "MF",
                "club": "TSC",
                "league": "Serbian SuperLiga",
                "age": 26,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "Elijah Just",
                "position": "MF",
                "club": "Motherwell",
                "league": "Scottish Premiership",
                "age": 25,
                "birthplace": {
                    "city": "Palmerston North",
                    "country": "New Zealand",
                    "lat": -40.3549,
                    "lng": 175.6095
                }
            },
            {
                "name": "Alex Rufer",
                "position": "MF",
                "club": "Wellington Phoenix",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
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
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "Owen Parker-Price",
                "position": "MF",
                "club": "Örgryte",
                "league": "Swedish Allsvenskan",
                "age": 27,
                "birthplace": {
                    "city": "Auckland",
                    "country": "New Zealand",
                    "lat": -37.0448,
                    "lng": 175.7991
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
                    "lat": -36.8492,
                    "lng": 174.7653
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
                    "lat": -36.8492,
                    "lng": 174.7653
                }
            },
            {
                "name": "Kosta Barbarouses",
                "position": "FW",
                "club": "Western Sydney Wanderers",
                "league": "A-League",
                "age": 35,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
                }
            },
            {
                "name": "Ben Waine",
                "position": "FW",
                "club": "Port Vale",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
                }
            },
            {
                "name": "Jesse Randall",
                "position": "FW",
                "club": "Auckland FC",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Wellington",
                    "country": "New Zealand",
                    "lat": -41.2889,
                    "lng": 174.7772
                }
            }
        ]
    },
    "ESP": {
        "name": "Spain",
        "flag": "🇪🇸",
        "confederation": "UEFA",
        "fifaRanking": 25,
        "players": [
            {
                "name": "David Raya",
                "position": "GK",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Barcelona",
                    "country": "Spain",
                    "lat": 41.3825,
                    "lng": 2.1769
                }
            },
            {
                "name": "Álex Remiro",
                "position": "GK",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Cascante",
                    "country": "Spain",
                    "lat": 41.9992,
                    "lng": -1.6789
                }
            },
            {
                "name": "Unai Simón",
                "position": "GK",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Vitoria-Gasteiz",
                    "country": "Spain",
                    "lat": 42.8467,
                    "lng": -2.6731
                }
            },
            {
                "name": "Daniel Vivian",
                "position": "DF",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 26,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 39.9684,
                    "lng": -3.1189
                }
            },
            {
                "name": "Marcos Llorente",
                "position": "DF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Barcelona",
                    "country": "Spain",
                    "lat": 41.3825,
                    "lng": 2.1769
                }
            },
            {
                "name": "Pedro Porro",
                "position": "DF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Don Benito",
                    "country": "Spain",
                    "lat": 38.95,
                    "lng": -5.85
                }
            },
            {
                "name": "Aymeric Laporte",
                "position": "DF",
                "club": "Athletic Bilbao",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Agen",
                    "country": "France",
                    "lat": 44.2031,
                    "lng": 0.6186
                }
            },
            {
                "name": "Pau Cubarsí",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 19,
                "birthplace": {
                    "city": "Estanyol",
                    "country": "Spain",
                    "lat": 41.9411,
                    "lng": 2.7406
                }
            },
            {
                "name": "Marc Cucurella",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Alella",
                    "country": "Spain",
                    "lat": 41.4953,
                    "lng": 2.2958
                }
            },
            {
                "name": "Álex Grimaldo",
                "position": "DF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Valencia",
                    "country": "Spain",
                    "lat": 39.47,
                    "lng": -0.3764
                }
            },
            {
                "name": "Pablo Barrios",
                "position": "MF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 22,
                "birthplace": {
                    "city": "Madrid",
                    "country": "Spain",
                    "lat": 40.4169,
                    "lng": -3.7033
                }
            },
            {
                "name": "Mikel Merino",
                "position": "MF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Pamplona",
                    "country": "Spain",
                    "lat": 42.8167,
                    "lng": -1.65
                }
            },
            {
                "name": "Fabián Ruiz",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Los Palacios y Villafranca",
                    "country": "Spain",
                    "lat": 37.16,
                    "lng": -5.9236
                }
            },
            {
                "name": "Álex Baena",
                "position": "MF",
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
                "name": "Pablo Fornals",
                "position": "MF",
                "club": "Betis",
                "league": "La Liga",
                "age": 30,
                "birthplace": {
                    "city": "Castellón de la Plana",
                    "country": "Spain",
                    "lat": 39.986,
                    "lng": -0.0374
                }
            },
            {
                "name": "Martín Zubimendi",
                "position": "MF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "San Sebastián",
                    "country": "Spain",
                    "lat": 43.32,
                    "lng": -1.98
                }
            },
            {
                "name": "Aleix García",
                "position": "MF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Ulldecona",
                    "country": "Spain",
                    "lat": 40.5981,
                    "lng": 0.4482
                }
            },
            {
                "name": "Samu Aghehowa",
                "position": "FW",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 21,
                "birthplace": {
                    "city": "Melilla",
                    "country": "Spain",
                    "lat": 35.2825,
                    "lng": -2.9475
                }
            },
            {
                "name": "Ferran Torres",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 25,
                "birthplace": {
                    "city": "Foios",
                    "country": "Spain",
                    "lat": 39.5386,
                    "lng": -0.3567
                }
            },
            {
                "name": "Borja Iglesias",
                "position": "FW",
                "club": "Celta Vigo",
                "league": "La Liga",
                "age": 33,
                "birthplace": {
                    "city": "Santiago de Compostela",
                    "country": "Spain",
                    "lat": 42.8833,
                    "lng": -8.5333
                }
            },
            {
                "name": "Dani Olmo",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Terrassa",
                    "country": "Spain",
                    "lat": 41.5611,
                    "lng": 2.0081
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
                "name": "Fermín López",
                "position": "FW",
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
                "name": "Mikel Oyarzabal",
                "position": "FW",
                "club": "Real Sociedad",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Eibar",
                    "country": "Spain",
                    "lat": 43.1843,
                    "lng": -2.4733
                }
            },
            {
                "name": "Jorge de Frutos",
                "position": "FW",
                "club": "Rayo Vallecano",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Navares de Enmedio",
                    "country": "Spain",
                    "lat": 41.3811,
                    "lng": -3.7231
                }
            }
        ]
    },
    "CPV": {
        "name": "Cape Verde",
        "flag": "🇨🇻",
        "confederation": "CAF",
        "fifaRanking": 26,
        "players": [
            {
                "name": "Vozinha",
                "position": "GK",
                "club": "Chaves",
                "league": "Primeira Liga",
                "age": 39,
                "birthplace": {
                    "city": "Mindelo",
                    "country": "Cape Verde",
                    "lat": 16.8914,
                    "lng": -24.988
                }
            },
            {
                "name": "Márcio Rosa",
                "position": "GK",
                "club": "Montana",
                "league": "Bulgarian First League",
                "age": 28,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
                }
            },
            {
                "name": "Bruno Varela",
                "position": "GK",
                "club": "Al-Hazem",
                "league": "Saudi Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Stopira",
                "position": "DF",
                "club": "Torreense",
                "league": "Primeira Liga",
                "age": 37,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
                }
            },
            {
                "name": "Diney",
                "position": "DF",
                "club": "Al Bataeh",
                "league": "UAE Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Tarrafal",
                    "country": "Cape Verde",
                    "lat": 15.2667,
                    "lng": -23.75
                }
            },
            {
                "name": "Ricardo Santos",
                "position": "DF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 30,
                "birthplace": {
                    "city": "Almada",
                    "country": "Portugal",
                    "lat": 38.6803,
                    "lng": -9.1583
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
                "club": "Estrela da Amadora",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.7256,
                    "lng": -24.5079
                }
            },
            {
                "name": "Jójó",
                "position": "DF",
                "club": "Vizela",
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
                "name": "David Moreira",
                "position": "DF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 21,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Kevin Pina",
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
                "name": "Jamiro Monteiro",
                "position": "MF",
                "club": "PEC Zwolle",
                "league": "Eredivisie",
                "age": 32,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Deroy Duarte",
                "position": "MF",
                "club": "Ludogorets Razgrad",
                "league": "Bulgarian First League",
                "age": 26,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Laros Duarte",
                "position": "MF",
                "club": "Puskás Akadémia",
                "league": "Hungarian NB I",
                "age": 28,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
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
                "name": "Aílson Tavares",
                "position": "MF",
                "club": "Beitar Jerusalem",
                "league": "Israeli Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
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
                "name": "Garry Rodrigues",
                "position": "FW",
                "club": "Apollon Limassol",
                "league": "Cypriot First Division",
                "age": 35,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Alessio da Cruz",
                "position": "FW",
                "club": "Athletic",
                "league": "Brasileirão",
                "age": 29,
                "birthplace": {
                    "city": "Almere",
                    "country": "Netherlands",
                    "lat": 52.3758,
                    "lng": 5.2256
                }
            },
            {
                "name": "Willy Semedo",
                "position": "FW",
                "club": "Omonia",
                "league": "Cypriot First Division",
                "age": 31,
                "birthplace": {
                    "city": "Montfermeil",
                    "country": "France",
                    "lat": 48.8983,
                    "lng": 2.5647
                }
            },
            {
                "name": "Hélio Varela",
                "position": "FW",
                "club": "Maccabi Tel Aviv",
                "league": "Israeli Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Almada",
                    "country": "Portugal",
                    "lat": 38.6803,
                    "lng": -9.1583
                }
            },
            {
                "name": "Ryan Mendes",
                "position": "FW",
                "club": "Iğdır",
                "league": "Turkish Super Lig",
                "age": 36,
                "birthplace": {
                    "city": "Mindelo",
                    "country": "Cape Verde",
                    "lat": 16.8914,
                    "lng": -24.988
                }
            },
            {
                "name": "Nuno da Costa",
                "position": "FW",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 34,
                "birthplace": {
                    "city": "Praia",
                    "country": "Cape Verde",
                    "lat": 14.9177,
                    "lng": -23.5092
                }
            },
            {
                "name": "Heriberto Tavares",
                "position": "FW",
                "club": "Maccabi Netanya",
                "league": "Israeli Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Amadora",
                    "country": "Portugal",
                    "lat": 38.75,
                    "lng": -9.2333
                }
            }
        ]
    },
    "KSA": {
        "name": "Saudi Arabia",
        "flag": "🇸🇦",
        "confederation": "AFC",
        "fifaRanking": 27,
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
                "age": 26,
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
                    "lat": 24.7969,
                    "lng": 46.485
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
                "club": "Al-Taawoun",
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
                    "lat": 24.3585,
                    "lng": 47.0652
                }
            },
            {
                "name": "Nasser Al-Dawsari",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Saudi Arabia",
                    "country": "Saudi Arabia",
                    "lat": 23.7167,
                    "lng": 44.1167
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
                "club": "Al-Khaleej",
                "league": "Saudi Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.1987,
                    "lng": 46.6582
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
                "club": "Al-Hilal",
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
        "fifaRanking": 28,
        "players": [
            {
                "name": "Cristopher Fiermarin",
                "position": "GK",
                "club": "Defensa y Justicia",
                "league": "Argentine Primera",
                "age": 28,
                "birthplace": {
                    "city": "Rosario",
                    "country": "Uruguay",
                    "lat": -34.3139,
                    "lng": -57.3525
                }
            },
            {
                "name": "Kevin Martínez",
                "position": "GK",
                "club": "Danubio",
                "league": "Uruguayan Primera",
                "age": 21,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.1762,
                    "lng": -56.1704
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
                "name": "Ronald Araújo",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 26,
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
                "age": 32,
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
                "name": "José Luis Rodríguez",
                "position": "DF",
                "club": "Vasco da Gama",
                "league": "Brasileirão",
                "age": 28,
                "birthplace": {
                    "city": "Canelones",
                    "country": "Uruguay",
                    "lat": -34.5243,
                    "lng": -56.2818
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
                "name": "Rodrigo Bentancur",
                "position": "MF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Colonia del Sacramento",
                    "country": "Uruguay",
                    "lat": -34.4699,
                    "lng": -57.8434
                }
            },
            {
                "name": "Nahitan Nández",
                "position": "MF",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 30,
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
                "name": "Rodrigo Zalazar",
                "position": "MF",
                "club": "Braga",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Albacete",
                    "country": "Spain",
                    "lat": 38.9956,
                    "lng": -1.8558
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
                "name": "Maximiliano Araújo",
                "position": "MF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 25,
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
                "club": "Atlético San Luis",
                "league": "Liga MX",
                "age": 25,
                "birthplace": {
                    "city": "Florida",
                    "country": "United States",
                    "lat": 28.1333,
                    "lng": -81.6317
                }
            },
            {
                "name": "Santiago Homenchenko",
                "position": "MF",
                "club": "Querétaro",
                "league": "Liga MX",
                "age": 22,
                "birthplace": {
                    "city": "Mercedes",
                    "country": "Uruguay",
                    "lat": -33.2484,
                    "lng": -58.0299
                }
            },
            {
                "name": "Rodrigo Aguirre",
                "position": "FW",
                "club": "América",
                "league": "Liga MX",
                "age": 31,
                "birthplace": {
                    "city": "Montevideo",
                    "country": "Uruguay",
                    "lat": -34.9059,
                    "lng": -56.1913
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
                "name": "Luciano Rodríguez",
                "position": "FW",
                "club": "Neom",
                "league": "Saudi Pro League",
                "age": 22,
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
                "name": "Ignacio Laquintana",
                "position": "FW",
                "club": "Huesca",
                "league": "Segunda División",
                "age": 27,
                "birthplace": {
                    "city": "Paysandú",
                    "country": "Uruguay",
                    "lat": -32.3218,
                    "lng": -58.0892
                }
            }
        ]
    },
    "FRA": {
        "name": "France",
        "flag": "🇫🇷",
        "confederation": "UEFA",
        "fifaRanking": 29,
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
                "club": "Milan",
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
                "name": "Jules Koundé",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "14th arrondissement of Paris",
                    "country": "France",
                    "lat": 48.833,
                    "lng": 2.3269
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
                "name": "William Saliba",
                "position": "DF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Bondy",
                    "country": "France",
                    "lat": 48.9028,
                    "lng": 2.4836
                }
            },
            {
                "name": "Lucas Hernandez",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
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
                "name": "Khéphren Thuram",
                "position": "MF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Reggio Emilia",
                    "country": "Italy",
                    "lat": 44.7,
                    "lng": 10.6333
                }
            },
            {
                "name": "Michael Olise",
                "position": "MF",
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
                "name": "N'Golo Kanté",
                "position": "MF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 34,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Warren Zaïre-Emery",
                "position": "MF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Montreuil",
                    "country": "France",
                    "lat": 48.8603,
                    "lng": 2.4431
                }
            },
            {
                "name": "Christopher Nkunku",
                "position": "FW",
                "club": "Milan",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Lagny-sur-Marne",
                    "country": "France",
                    "lat": 48.8781,
                    "lng": 2.7067
                }
            },
            {
                "name": "Florian Thauvin",
                "position": "FW",
                "club": "Lens",
                "league": "Ligue 1",
                "age": 33,
                "birthplace": {
                    "city": "Orléans",
                    "country": "France",
                    "lat": 47.9022,
                    "lng": 1.9042
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
                "name": "Maghnes Akliouche",
                "position": "FW",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Tremblay-en-France",
                    "country": "France",
                    "lat": 48.9561,
                    "lng": 2.5764
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
                "name": "Jean-Philippe Mateta",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Sevran",
                    "country": "France",
                    "lat": 48.9414,
                    "lng": 2.5228
                }
            },
            {
                "name": "Bradley Barcola",
                "position": "FW",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Villeurbanne",
                    "country": "France",
                    "lat": 45.7661,
                    "lng": 4.8794
                }
            }
        ]
    },
    "SEN": {
        "name": "Senegal",
        "flag": "🇸🇳",
        "confederation": "CAF",
        "fifaRanking": 30,
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
                "name": "Édouard Mendy",
                "position": "GK",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Montivilliers",
                    "country": "France",
                    "lat": 49.5461,
                    "lng": 0.1881
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
                "age": 26,
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
                "age": 29,
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
                "age": 31,
                "birthplace": {
                    "city": "Dakar",
                    "country": "Senegal",
                    "lat": 14.6726,
                    "lng": -17.432
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
                "name": "Ousseynou Niang",
                "position": "MF",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Ziguinchor",
                    "country": "Senegal",
                    "lat": 12.5861,
                    "lng": -16.2707
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
                "name": "Mamadou Camara",
                "position": "MF",
                "club": "Nahdat Berkane",
                "league": "Botola Pro",
                "age": 23,
                "birthplace": {
                    "city": "Tivaouane",
                    "country": "Senegal",
                    "lat": 14.9543,
                    "lng": -16.8132
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
                "name": "Sadio Mané",
                "position": "FW",
                "club": "Al-Nassr",
                "league": "Saudi Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Bambali",
                    "country": "Senegal",
                    "lat": 12.6042,
                    "lng": -15.6614
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
                "name": "Iliman Ndiaye",
                "position": "FW",
                "club": "Everton",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Rouen",
                    "country": "France",
                    "lat": 49.4431,
                    "lng": 1.1025
                }
            },
            {
                "name": "Ismaïla Sarr",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 27,
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
                "name": "Cheikh Sabaly",
                "position": "FW",
                "club": "Vancouver Whitecaps",
                "league": "MLS",
                "age": 26,
                "birthplace": {
                    "city": "Kolda",
                    "country": "Senegal",
                    "lat": 12.8958,
                    "lng": -14.9408
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
            }
        ]
    },
    "NOR": {
        "name": "Norway",
        "flag": "🇳🇴",
        "confederation": "UEFA",
        "fifaRanking": 31,
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
                "name": "Mathias Dyngeland",
                "position": "GK",
                "club": "Brann",
                "league": "Norwegian Eliteserien",
                "age": 30,
                "birthplace": {
                    "city": "Fana",
                    "country": "Norway",
                    "lat": 60.3111,
                    "lng": 5.3914
                }
            },
            {
                "name": "Sander Tangvik",
                "position": "GK",
                "club": "Hamburg",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Trondheim",
                    "country": "Norway",
                    "lat": 63.44,
                    "lng": 10.4
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
                "name": "Sondre Langås",
                "position": "DF",
                "club": "Derby County",
                "league": "EFL Championship",
                "age": 25,
                "birthplace": {
                    "city": "Namsos",
                    "country": "Norway",
                    "lat": 64.467,
                    "lng": 11.494
                }
            },
            {
                "name": "Morten Thorsby",
                "position": "MF",
                "club": "Genoa",
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
                "age": 27,
                "birthplace": {
                    "city": "Bærum Municipality",
                    "country": "Norway",
                    "lat": 59.8904,
                    "lng": 10.526
                }
            },
            {
                "name": "Kristian Thorstvedt",
                "position": "MF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Stavanger",
                    "country": "Norway",
                    "lat": 58.97,
                    "lng": 5.7314
                }
            },
            {
                "name": "Kristian Arnstad",
                "position": "MF",
                "club": "AGF",
                "league": "Danish Superliga",
                "age": 22,
                "birthplace": {
                    "city": "Oslo",
                    "country": "Norway",
                    "lat": 59.9133,
                    "lng": 10.7389
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
                "name": "Thelo Aasgaard",
                "position": "MF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 23,
                "birthplace": {
                    "city": "Liverpool",
                    "country": "United Kingdom",
                    "lat": 53.4072,
                    "lng": -2.9917
                }
            },
            {
                "name": "Aron Dønnum",
                "position": "MF",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Eidsvoll Municipality",
                    "country": "Norway",
                    "lat": 60.3475,
                    "lng": 11.2508
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
                "name": "Andreas Schjelderup",
                "position": "FW",
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
        "fifaRanking": 32,
        "players": [
            {
                "name": "Walter Benítez",
                "position": "GK",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "General José de San Martín",
                    "country": "Argentina",
                    "lat": -26.5375,
                    "lng": -59.3417
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
                "name": "Juan Foyth",
                "position": "DF",
                "club": "Villarreal",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "La Plata",
                    "country": "Argentina",
                    "lat": -34.9333,
                    "lng": -57.95
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
                "name": "Kevin Mac Allister",
                "position": "DF",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Buenos Aires",
                    "country": "Argentina",
                    "lat": -34.5997,
                    "lng": -58.3819
                }
            },
            {
                "name": "Valentín Barco",
                "position": "DF",
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
                "name": "Marcos Senesi",
                "position": "DF",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Concordia",
                    "country": "Argentina",
                    "lat": -31.3922,
                    "lng": -58.0169
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
                "age": 37,
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
                "name": "Giovani Lo Celso",
                "position": "MF",
                "club": "Betis",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Rosario",
                    "country": "Argentina",
                    "lat": -32.9575,
                    "lng": -60.6394
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
                "name": "Emiliano Buendía",
                "position": "MF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Mar del Plata",
                    "country": "Argentina",
                    "lat": -38,
                    "lng": -57.55
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
                "name": "Lautaro Martínez",
                "position": "FW",
                "club": "Internazionale",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Bahía Blanca",
                    "country": "Argentina",
                    "lat": -38.7167,
                    "lng": -62.2667
                }
            },
            {
                "name": "Joaquín Panichelli",
                "position": "FW",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Córdoba",
                    "country": "Argentina",
                    "lat": -31.4167,
                    "lng": -64.1833
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
        "fifaRanking": 33,
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
                "name": "Oussama Benbot",
                "position": "GK",
                "club": "USM Alger",
                "league": "Algerian Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Aïn M'lila",
                    "country": "Algeria",
                    "lat": 36.0367,
                    "lng": 6.5719
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
                "name": "Mehdi Dorval",
                "position": "DF",
                "club": "Bari",
                "league": "Serie B",
                "age": 24,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Mohamed Amine Tougai",
                "position": "DF",
                "club": "Espérance de Tunis",
                "league": "Tunisian Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Bourouba",
                    "country": "Algeria",
                    "lat": 36.7147,
                    "lng": 3.1064
                }
            },
            {
                "name": "Zineddine Belaïd",
                "position": "DF",
                "club": "JS Kabylie",
                "league": "Algerian Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Thénia",
                    "country": "Algeria",
                    "lat": 36.7278,
                    "lng": 3.5539
                }
            },
            {
                "name": "Jaouen Hadjam",
                "position": "DF",
                "club": "Young Boys",
                "league": "Swiss Super League",
                "age": 22,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
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
                "name": "Youcef Atal",
                "position": "DF",
                "club": "Al-Sadd",
                "league": "Qatar Stars League",
                "age": 29,
                "birthplace": {
                    "city": "Boghni",
                    "country": "Algeria",
                    "lat": 36.5437,
                    "lng": 3.9523
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
                "name": "Samir Chergui",
                "position": "DF",
                "club": "Paris",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Arpajon",
                    "country": "France",
                    "lat": 48.5903,
                    "lng": 2.2478
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
                "name": "Himad Abdelli",
                "position": "MF",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Montivilliers",
                    "country": "France",
                    "lat": 49.5461,
                    "lng": 0.1881
                }
            },
            {
                "name": "Ismaël Bennacer",
                "position": "MF",
                "club": "Dinamo Zagreb",
                "league": "Croatian First League",
                "age": 28,
                "birthplace": {
                    "city": "Arles",
                    "country": "France",
                    "lat": 43.6769,
                    "lng": 4.6286
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
                "name": "Adem Zorgane",
                "position": "MF",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Sétif",
                    "country": "Algeria",
                    "lat": 36.19,
                    "lng": 5.41
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
                "name": "Ilan Kebbal",
                "position": "MF",
                "club": "Paris",
                "league": "Ligue 1",
                "age": 27,
                "birthplace": {
                    "city": "Marseille",
                    "country": "France",
                    "lat": 43.2967,
                    "lng": 5.3764
                }
            },
            {
                "name": "Riyad Mahrez",
                "position": "FW",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 34,
                "birthplace": {
                    "city": "Clichy",
                    "country": "France",
                    "lat": 48.9036,
                    "lng": 2.3056
                }
            },
            {
                "name": "Baghdad Bounedjah",
                "position": "FW",
                "club": "Al-Shamal",
                "league": "Qatar Stars League",
                "age": 34,
                "birthplace": {
                    "city": "Oran",
                    "country": "Algeria",
                    "lat": 35.6969,
                    "lng": -0.6331
                }
            },
            {
                "name": "Anis Hadj Moussa",
                "position": "FW",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 23,
                "birthplace": {
                    "city": "Paris",
                    "country": "France",
                    "lat": 48.8567,
                    "lng": 2.3522
                }
            },
            {
                "name": "Monsef Bakrar",
                "position": "FW",
                "club": "Dinamo Zagreb",
                "league": "Croatian First League",
                "age": 25,
                "birthplace": {
                    "city": "Sétif",
                    "country": "Algeria",
                    "lat": 36.19,
                    "lng": 5.41
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
                "name": "Redouane Berkane",
                "position": "FW",
                "club": "Al-Wakrah",
                "league": "Qatar Stars League",
                "age": 22,
                "birthplace": {
                    "city": "Algiers",
                    "country": "Algeria",
                    "lat": 36.9326,
                    "lng": 2.4063
                }
            }
        ]
    },
    "AUT": {
        "name": "Austria",
        "flag": "🇦🇹",
        "confederation": "UEFA",
        "fifaRanking": 34,
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
                "name": "Nikolas Polster",
                "position": "GK",
                "club": "Wolfsberger AC",
                "league": "Austrian Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 47.4617,
                    "lng": 16.6111
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
                "name": "Nicolas Kristof",
                "position": "GK",
                "club": "SV Elversberg",
                "league": "Bundesliga",
                "age": 26,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 49.1125,
                    "lng": 17.1685
                }
            },
            {
                "name": "Marco Friedl",
                "position": "DF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Kirchbichl",
                    "country": "Austria",
                    "lat": 47.5167,
                    "lng": 12.0667
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
                "club": "Como",
                "league": "Serie A",
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
                "name": "Leopold Querfeld",
                "position": "DF",
                "club": "Union Berlin",
                "league": "Bundesliga",
                "age": 22,
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
                "age": 31,
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
                "name": "Marco Grüll",
                "position": "MF",
                "club": "Werder Bremen",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Schwarzach im Pongau",
                    "country": "Austria",
                    "lat": 47.3222,
                    "lng": 13.15
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
                "club": "Brøndby",
                "league": "Danish Superliga",
                "age": 31,
                "birthplace": {
                    "city": "Graz",
                    "country": "Austria",
                    "lat": 47.0708,
                    "lng": 15.4386
                }
            },
            {
                "name": "Nikolaus Wurmbrand",
                "position": "FW",
                "club": "Rapid Wien",
                "league": "Austrian Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            },
            {
                "name": "Raul Florucz",
                "position": "FW",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 24,
                "birthplace": {
                    "city": "Vienna",
                    "country": "Austria",
                    "lat": 48.2083,
                    "lng": 16.3725
                }
            }
        ]
    },
    "JOR": {
        "name": "Jordan",
        "flag": "🇯🇴",
        "confederation": "AFC",
        "fifaRanking": 35,
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
                "name": "Malek Shalabiya",
                "position": "GK",
                "club": "Al-Ramtha",
                "league": "Jordanian Pro League",
                "age": 37,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Nour Bani Attiah",
                "position": "GK",
                "club": "Al-Faisaly",
                "league": "Jordanian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Abdallah Nasib",
                "position": "DF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Aqaba",
                    "country": "Jordan",
                    "lat": 29.5322,
                    "lng": 35.0061
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
                "name": "Hadi Al-Hourani",
                "position": "DF",
                "club": "Al-Faisaly",
                "league": "Jordanian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 32.5572,
                    "lng": 36.0819
                }
            },
            {
                "name": "Ali Hajabi",
                "position": "DF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 32.1802,
                    "lng": 35.414
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
                "name": "Saed Al-Rosan",
                "position": "DF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.3844,
                    "lng": 35.7851
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
                "name": "Rajaei Ayed",
                "position": "MF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 32,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Ibrahim Sadeh",
                "position": "MF",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Zarqa",
                    "country": "Jordan",
                    "lat": 32.0833,
                    "lng": 36.1
                }
            },
            {
                "name": "Issam Smeeri",
                "position": "MF",
                "club": "Al-Salt",
                "league": "Jordanian Pro League",
                "age": 26,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.9723,
                    "lng": 35.6594
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
                "name": "Nizar Al-Rashdan",
                "position": "MF",
                "club": "Qatar",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Irbid",
                    "country": "Jordan",
                    "lat": 32.5556,
                    "lng": 35.85
                }
            },
            {
                "name": "Adham Al-Quraishi",
                "position": "MF",
                "club": "Al-Hussein",
                "league": "Jordanian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.2753,
                    "lng": 34.933
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
                "name": "Ali Olwan",
                "position": "FW",
                "club": "Al-Sailiya",
                "league": "Qatar Stars League",
                "age": 25,
                "birthplace": {
                    "city": "Amman",
                    "country": "Jordan",
                    "lat": 31.95,
                    "lng": 35.9333
                }
            },
            {
                "name": "Ahmad Ersan",
                "position": "FW",
                "club": "Al-Faisaly",
                "league": "Jordanian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Irbid",
                    "country": "Jordan",
                    "lat": 32.5556,
                    "lng": 35.85
                }
            },
            {
                "name": "Yazan Al-Naimat",
                "position": "FW",
                "club": "Al-Arabi",
                "league": "Qatar Stars League",
                "age": 26,
                "birthplace": {
                    "city": "Wadi Al-Seer",
                    "country": "Jordan",
                    "lat": 31.9545,
                    "lng": 35.8183
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
            }
        ]
    },
    "POR": {
        "name": "Portugal",
        "flag": "🇵🇹",
        "confederation": "UEFA",
        "fifaRanking": 36,
        "players": [
            {
                "name": "Diogo Costa",
                "position": "GK",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Rothrist",
                    "country": "Switzerland",
                    "lat": 47.3028,
                    "lng": 7.8833
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
                "name": "Nélson Semedo",
                "position": "DF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
                }
            },
            {
                "name": "Rúben Dias",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Amadora",
                    "country": "Portugal",
                    "lat": 38.75,
                    "lng": -9.2333
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
                "name": "Diogo Dalot",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Braga",
                    "country": "Portugal",
                    "lat": 41.5333,
                    "lng": -8.4167
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
                "name": "João Palhinha",
                "position": "MF",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
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
                "name": "Bernardo Silva",
                "position": "MF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Lisbon",
                    "country": "Portugal",
                    "lat": 38.708,
                    "lng": -9.139
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
                "name": "Rúben Neves",
                "position": "MF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 28,
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
                "age": 25,
                "birthplace": {
                    "city": "Faro",
                    "country": "Portugal",
                    "lat": 37.0161,
                    "lng": -7.935
                }
            },
            {
                "name": "Carlos Forbs",
                "position": "FW",
                "club": "Club Brugge",
                "league": "Belgian Pro League",
                "age": 21,
                "birthplace": {
                    "city": "Sintra",
                    "country": "Portugal",
                    "lat": 38.7974,
                    "lng": -9.3904
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
                "name": "Francisco Trincão",
                "position": "FW",
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
                "name": "Rafael Leão",
                "position": "FW",
                "club": "Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Almada",
                    "country": "Portugal",
                    "lat": 38.6803,
                    "lng": -9.1583
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
    "UZB": {
        "name": "Uzbekistan",
        "flag": "🇺🇿",
        "confederation": "AFC",
        "fifaRanking": 37,
        "players": [
            {
                "name": "Vladimir Nazarov",
                "position": "GK",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Abduvohid Nematov",
                "position": "GK",
                "club": "Nasaf",
                "league": "Unknown",
                "age": 24,
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
                "age": 21,
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
                "club": "Nasaf",
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
                "name": "Abdulla Abdullaev",
                "position": "DF",
                "club": "Dibba",
                "league": "UAE Pro League",
                "age": 28,
                "birthplace": {
                    "city": "Ķürgontepa",
                    "country": "Uzbekistan",
                    "lat": 40.7333,
                    "lng": 72.7667
                }
            },
            {
                "name": "Husniddin Aliqulov",
                "position": "DF",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Kitab",
                    "country": "Uzbekistan",
                    "lat": 39.1336,
                    "lng": 66.8819
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
                "age": 29,
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
                "age": 27,
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
                "name": "Azizbek Turgunboev",
                "position": "MF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Namangan",
                    "country": "Uzbekistan",
                    "lat": 40.9953,
                    "lng": 71.6725
                }
            },
            {
                "name": "Khojimat Erkinov",
                "position": "MF",
                "club": "Pakhtakor",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Ruslanbek Jiyanov",
                "position": "MF",
                "club": "Navbahor",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 41.3111,
                    "lng": 69.2797
                }
            },
            {
                "name": "Sardorbek Bakhromov",
                "position": "MF",
                "club": "Nasaf",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "Tashkent",
                    "country": "Uzbekistan",
                    "lat": 40.862,
                    "lng": 69.5069
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
                "name": "Khusayin Norchaev",
                "position": "FW",
                "club": "Nasaf",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Yakkabog",
                    "country": "Uzbekistan",
                    "lat": 38.98,
                    "lng": 66.68
                }
            }
        ]
    },
    "COL": {
        "name": "Colombia",
        "flag": "🇨🇴",
        "confederation": "CONMEBOL",
        "fifaRanking": 38,
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
                "age": 36,
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
                "club": "Velez Sarsfield",
                "league": "Argentine Primera",
                "age": 30,
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
                "name": "Yerry Mina",
                "position": "DF",
                "club": "Cagliari",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Guachené",
                    "country": "Colombia",
                    "lat": 3.1336,
                    "lng": -76.3925
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
                "name": "Carlos Cuesta",
                "position": "DF",
                "club": "Vasco da Gama",
                "league": "Brasileirão",
                "age": 26,
                "birthplace": {
                    "city": "Quibdó",
                    "country": "Colombia",
                    "lat": 5.6923,
                    "lng": -76.6582
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
                "name": "Álvaro Angulo",
                "position": "DF",
                "club": "UNAM",
                "league": "Liga MX",
                "age": 27,
                "birthplace": {
                    "city": "Tumaco",
                    "country": "Colombia",
                    "lat": 1.8067,
                    "lng": -78.7647
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
                "name": "Juan Portilla",
                "position": "MF",
                "club": "Paranaense",
                "league": "Brasileirão",
                "age": 27,
                "birthplace": {
                    "city": "Cali",
                    "country": "Colombia",
                    "lat": 3.44,
                    "lng": -76.5197
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
                "name": "Yáser Asprilla",
                "position": "MF",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 22,
                "birthplace": {
                    "city": "Bajo Baudó",
                    "country": "Colombia",
                    "lat": 4.9542,
                    "lng": -77.3636
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
        "fifaRanking": 39,
        "players": [
            {
                "name": "Jordan Pickford",
                "position": "GK",
                "club": "Everton",
                "league": "Premier League",
                "age": 31,
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
                "age": 28,
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
                "name": "Jarell Quansah",
                "position": "DF",
                "club": "Bayer Leverkusen",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Warrington",
                    "country": "United Kingdom",
                    "lat": 53.3873,
                    "lng": -2.6029
                }
            },
            {
                "name": "Reece James",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Redbridge",
                    "country": "United Kingdom",
                    "lat": 51.576,
                    "lng": 0.052
                }
            },
            {
                "name": "John Stones",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Barnsley",
                    "country": "United Kingdom",
                    "lat": 53.5536,
                    "lng": -1.4789
                }
            },
            {
                "name": "Trevoh Chalobah",
                "position": "DF",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Freetown",
                    "country": "Sierra Leone",
                    "lat": 8.4872,
                    "lng": -13.2356
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
                "name": "Nico O'Reilly",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Manchester",
                    "country": "United Kingdom",
                    "lat": 53.4667,
                    "lng": -2.2333
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
                "name": "Declan Rice",
                "position": "MF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Kingston upon Thames",
                    "country": "United Kingdom",
                    "lat": 51.4103,
                    "lng": -0.2995
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
                "name": "Adam Wharton",
                "position": "MF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Blackburn",
                    "country": "United Kingdom",
                    "lat": 53.7449,
                    "lng": -2.4769
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
                "name": "Alex Scott",
                "position": "MF",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Guernsey",
                    "country": "Guernsey",
                    "lat": 49.4558,
                    "lng": -2.5775
                }
            },
            {
                "name": "Bukayo Saka",
                "position": "FW",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Ealing",
                    "country": "United Kingdom",
                    "lat": 51.5111,
                    "lng": -0.3058
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
                "name": "Eberechi Eze",
                "position": "FW",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Greenwich",
                    "country": "United Kingdom",
                    "lat": 51.48,
                    "lng": 0
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
            }
        ]
    },
    "CRO": {
        "name": "Croatia",
        "flag": "🇭🇷",
        "confederation": "UEFA",
        "fifaRanking": 40,
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
                "age": 25,
                "birthplace": {
                    "city": "Rijeka",
                    "country": "Croatia",
                    "lat": 45.3333,
                    "lng": 14.4333
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
                "name": "Joško Gvardiol",
                "position": "DF",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
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
                "age": 25,
                "birthplace": {
                    "city": "Čapljina",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.11,
                    "lng": 17.7
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
                "name": "Nikola Moro",
                "position": "MF",
                "club": "Bologna",
                "league": "Serie A",
                "age": 27,
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
                "age": 30,
                "birthplace": {
                    "city": "Mainz",
                    "country": "Germany",
                    "lat": 49.9994,
                    "lng": 8.2736
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
                "name": "Petar Musa",
                "position": "FW",
                "club": "FC Dallas",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
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
                "name": "Mislav Oršić",
                "position": "FW",
                "club": "Pafos",
                "league": "Cypriot First Division",
                "age": 33,
                "birthplace": {
                    "city": "Zagreb",
                    "country": "Croatia",
                    "lat": 45.8131,
                    "lng": 15.9772
                }
            },
            {
                "name": "Franjo Ivanović",
                "position": "FW",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 22,
                "birthplace": {
                    "city": "Schwaz",
                    "country": "Austria",
                    "lat": 47.35,
                    "lng": 11.7
                }
            },
            {
                "name": "Igor Matanović",
                "position": "FW",
                "club": "SC Freiburg",
                "league": "Bundesliga",
                "age": 22,
                "birthplace": {
                    "city": "Germany",
                    "country": "Germany",
                    "lat": 51,
                    "lng": 10
                }
            }
        ]
    },
    "GHA": {
        "name": "Ghana",
        "flag": "🇬🇭",
        "confederation": "CAF",
        "fifaRanking": 41,
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
                    "lat": 5.1498,
                    "lng": -0.0929
                }
            },
            {
                "name": "Alidu Seidu",
                "position": "DF",
                "club": "Rennes",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.556,
                    "lng": -0.1969
                }
            },
            {
                "name": "Caleb Yirenkyi",
                "position": "DF",
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
                "name": "Jonas Adjetey",
                "position": "DF",
                "club": "VfL Wolfsburg",
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
                "name": "Mohammed Salisu",
                "position": "DF",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 5.556,
                    "lng": -0.1969
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
                "name": "Ebenezer Annan",
                "position": "DF",
                "club": "Saint-Étienne",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 6.39,
                    "lng": -0.3621
                }
            },
            {
                "name": "Kelvin Nkrumah",
                "position": "MF",
                "club": "Medeama",
                "league": "Ghanaian Premier League",
                "age": 18,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 6.4816,
                    "lng": -1.009
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
                "name": "Christopher Bonsu Baah",
                "position": "MF",
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
                "name": "Abu Francis",
                "position": "MF",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Kamaldeen Sulemana",
                "position": "MF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Ghana",
                    "country": "Ghana",
                    "lat": 7.9465,
                    "lng": -1.0232
                }
            },
            {
                "name": "Prince Kwabena Adu",
                "position": "MF",
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
                "name": "Prince Owusu",
                "position": "MF",
                "club": "Medeama",
                "league": "Ghanaian Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Accra",
                    "country": "Ghana",
                    "lat": 6.4853,
                    "lng": -1.0306
                }
            },
            {
                "name": "Prince Osei Owusu",
                "position": "FW",
                "club": "Montréal",
                "league": "MLS",
                "age": 29,
                "birthplace": {
                    "city": "Wertheim",
                    "country": "Germany",
                    "lat": 49.75,
                    "lng": 9.5167
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
            }
        ]
    },
    "PAN": {
        "name": "Panama",
        "flag": "🇵🇦",
        "confederation": "CONCACAF",
        "fifaRanking": 42,
        "players": [
            {
                "name": "Eddie Roberts",
                "position": "GK",
                "club": "Estudiantes",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.1115,
                    "lng": -79.4898
                }
            },
            {
                "name": "John Gunn",
                "position": "GK",
                "club": "New England Revolution",
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
                "name": "Richard Peralta",
                "position": "DF",
                "club": "Monagas",
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
                "name": "Omar Córdoba",
                "position": "DF",
                "club": "Plaza Amador",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Kevin Galván",
                "position": "DF",
                "club": "San Francisco",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.1776,
                    "lng": -79.597
                }
            },
            {
                "name": "Luis Asprilla",
                "position": "DF",
                "club": "Tauro",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.6643,
                    "lng": -79.0657
                }
            },
            {
                "name": "Orman Davis",
                "position": "DF",
                "club": "Independiente",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.2878,
                    "lng": -80.3259
                }
            },
            {
                "name": "Javier Rivera",
                "position": "DF",
                "club": "Marathón",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.2774,
                    "lng": -80.11
                }
            },
            {
                "name": "Daniel Aparicio",
                "position": "DF",
                "club": "Real España",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.2309,
                    "lng": -79.9029
                }
            },
            {
                "name": "Ariel Arroyo",
                "position": "DF",
                "club": "Árabe Unido",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.3483,
                    "lng": -79.8294
                }
            },
            {
                "name": "Aimar Sánchez",
                "position": "DF",
                "club": "New York Red Bulls II",
                "league": "MLS",
                "age": 20,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.0245,
                    "lng": -78.8336
                }
            },
            {
                "name": "Juan Carlos Hall",
                "position": "DF",
                "club": "Sporting San Miguelito",
                "league": "Primeira Liga",
                "age": 19,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.6,
                    "lng": -79.8908
                }
            },
            {
                "name": "Jovani Welch",
                "position": "MF",
                "club": "Monagas",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "José Murillo",
                "position": "MF",
                "club": "Plaza Amador",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Panama",
                    "country": "Panama",
                    "lat": 8.6167,
                    "lng": -80.3667
                }
            },
            {
                "name": "Kahiser Lenis",
                "position": "MF",
                "club": "Jaguares",
                "league": "Colombian Primera A",
                "age": 25,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Ricardo Phillips",
                "position": "MF",
                "club": "Plaza Amador",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            },
            {
                "name": "Giovany Herbert",
                "position": "MF",
                "club": "Árabe Unido",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "Colón City",
                    "country": "Panama",
                    "lat": 9.3598,
                    "lng": -79.9004
                }
            },
            {
                "name": "Ángel Caicedo",
                "position": "MF",
                "club": "Independiente",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.7558,
                    "lng": -78.9749
                }
            },
            {
                "name": "Abdul Knight",
                "position": "MF",
                "club": "Plaza Amador",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.5111,
                    "lng": -79.0411
                }
            },
            {
                "name": "Héctor Hurtado",
                "position": "MF",
                "club": "Sporting San Miguelito",
                "league": "Primeira Liga",
                "age": 27,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 9.933,
                    "lng": -79.9341
                }
            },
            {
                "name": "Gustavo Herrera",
                "position": "FW",
                "club": "Sporting San Miguelito",
                "league": "Primeira Liga",
                "age": 20,
                "birthplace": {
                    "city": "Colón City",
                    "country": "Panama",
                    "lat": 9.3598,
                    "lng": -79.9004
                }
            },
            {
                "name": "Kadir Barría",
                "position": "FW",
                "club": "Botafogo U20",
                "league": "Brasileirão",
                "age": 18,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.333,
                    "lng": -79.443
                }
            },
            {
                "name": "Saed Díaz",
                "position": "FW",
                "club": "Tauro",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Panama City",
                    "country": "Panama",
                    "lat": 8.9711,
                    "lng": -79.5347
                }
            }
        ]
    },
    "ITA": {
        "name": "Italy",
        "flag": "🇮🇹",
        "confederation": "UEFA",
        "fifaRanking": 43,
        "players": [
            {
                "name": "Gianluigi Donnarumma",
                "position": "GK",
                "club": "Manchester City",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Castellammare di Stabia",
                    "country": "Italy",
                    "lat": 40.6947,
                    "lng": 14.4803
                }
            },
            {
                "name": "Marco Carnesecchi",
                "position": "GK",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Rimini",
                    "country": "Italy",
                    "lat": 44.0594,
                    "lng": 12.5683
                }
            },
            {
                "name": "Guglielmo Vicario",
                "position": "GK",
                "club": "Tottenham Hotspur",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Udine",
                    "country": "Italy",
                    "lat": 46.0667,
                    "lng": 13.2333
                }
            },
            {
                "name": "Elia Caprile",
                "position": "GK",
                "club": "Cagliari",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Verona",
                    "country": "Italy",
                    "lat": 45.4386,
                    "lng": 10.9928
                }
            },
            {
                "name": "Raoul Bellanova",
                "position": "DF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Rho",
                    "country": "Italy",
                    "lat": 45.5333,
                    "lng": 9.0333
                }
            },
            {
                "name": "Federico Dimarco",
                "position": "DF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Milan",
                    "country": "Italy",
                    "lat": 45.4669,
                    "lng": 9.19
                }
            },
            {
                "name": "Alessandro Buongiorno",
                "position": "DF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Turin",
                    "country": "Italy",
                    "lat": 45.0792,
                    "lng": 7.6761
                }
            },
            {
                "name": "Matteo Gabbia",
                "position": "DF",
                "club": "AC Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Busto Arsizio",
                    "country": "Italy",
                    "lat": 45.612,
                    "lng": 8.8518
                }
            },
            {
                "name": "Andrea Cambiaso",
                "position": "DF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Genoa",
                    "country": "Italy",
                    "lat": 44.4072,
                    "lng": 8.934
                }
            },
            {
                "name": "Alessandro Bastoni",
                "position": "DF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Casalmaggiore",
                    "country": "Italy",
                    "lat": 44.9858,
                    "lng": 10.4147
                }
            },
            {
                "name": "Giovanni Di Lorenzo",
                "position": "DF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Castelnuovo di Garfagnana",
                    "country": "Italy",
                    "lat": 44.1219,
                    "lng": 10.4056
                }
            },
            {
                "name": "Gianluca Mancini",
                "position": "DF",
                "club": "Roma",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Pontedera",
                    "country": "Italy",
                    "lat": 43.6625,
                    "lng": 10.6328
                }
            },
            {
                "name": "Manuel Locatelli",
                "position": "MF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 28,
                "birthplace": {
                    "city": "Lecco",
                    "country": "Italy",
                    "lat": 45.8533,
                    "lng": 9.3905
                }
            },
            {
                "name": "Samuele Ricci",
                "position": "MF",
                "club": "AC Milan",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Pisa",
                    "country": "Italy",
                    "lat": 43.7167,
                    "lng": 10.4
                }
            },
            {
                "name": "Davide Frattesi",
                "position": "MF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Rome",
                    "country": "Italy",
                    "lat": 41.8931,
                    "lng": 12.4828
                }
            },
            {
                "name": "Bryan Cristante",
                "position": "MF",
                "club": "Roma",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "San Vito al Tagliamento",
                    "country": "Italy",
                    "lat": 45.9153,
                    "lng": 12.8556
                }
            },
            {
                "name": "Nicolò Barella",
                "position": "MF",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Cagliari",
                    "country": "Italy",
                    "lat": 39.2167,
                    "lng": 9.1167
                }
            },
            {
                "name": "Sandro Tonali",
                "position": "MF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Lodi",
                    "country": "Italy",
                    "lat": 45.3167,
                    "lng": 9.5
                }
            },
            {
                "name": "Matteo Politano",
                "position": "FW",
                "club": "Napoli",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Rome",
                    "country": "Italy",
                    "lat": 41.8931,
                    "lng": 12.4828
                }
            },
            {
                "name": "Mateo Retegui",
                "position": "FW",
                "club": "Al-Qadsiah",
                "league": "Saudi Pro League",
                "age": 26,
                "birthplace": {
                    "city": "San Fernando",
                    "country": "Argentina",
                    "lat": -34.4407,
                    "lng": -58.5575
                }
            },
            {
                "name": "Giacomo Raspadori",
                "position": "FW",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 25,
                "birthplace": {
                    "city": "Bentivoglio",
                    "country": "Italy",
                    "lat": 44.6353,
                    "lng": 11.4189
                }
            },
            {
                "name": "Gianluca Scamacca",
                "position": "FW",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Rome",
                    "country": "Italy",
                    "lat": 41.8931,
                    "lng": 12.4828
                }
            },
            {
                "name": "Pio Esposito",
                "position": "FW",
                "club": "Inter Milan",
                "league": "Serie A",
                "age": 20,
                "birthplace": {
                    "city": "Castellammare di Stabia",
                    "country": "Italy",
                    "lat": 40.6947,
                    "lng": 14.4803
                }
            },
            {
                "name": "Riccardo Orsolini",
                "position": "FW",
                "club": "Bologna",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Ascoli Piceno",
                    "country": "Italy",
                    "lat": 42.8547,
                    "lng": 13.5753
                }
            },
            {
                "name": "Mattia Zaccagni",
                "position": "FW",
                "club": "Lazio",
                "league": "Serie A",
                "age": 30,
                "birthplace": {
                    "city": "Cesena",
                    "country": "Italy",
                    "lat": 44.1333,
                    "lng": 12.2333
                }
            }
        ]
    },
    "WAL": {
        "name": "Wales",
        "flag": "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
        "confederation": "UEFA",
        "fifaRanking": 44,
        "players": [
            {
                "name": "Karl Darlow",
                "position": "GK",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Northampton",
                    "country": "United Kingdom",
                    "lat": 52.2333,
                    "lng": -0.9
                }
            },
            {
                "name": "Adam Davies",
                "position": "GK",
                "club": "Sheffield United",
                "league": "EFL Championship",
                "age": 33,
                "birthplace": {
                    "city": "Rinteln",
                    "country": "Germany",
                    "lat": 52.186,
                    "lng": 9.0792
                }
            },
            {
                "name": "Tom King",
                "position": "GK",
                "club": "Everton",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Plymouth",
                    "country": "United Kingdom",
                    "lat": 50.3714,
                    "lng": -4.1422
                }
            },
            {
                "name": "Joe Rodon",
                "position": "DF",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Swansea",
                    "country": "United Kingdom",
                    "lat": 51.6167,
                    "lng": -3.95
                }
            },
            {
                "name": "Chris Mepham",
                "position": "DF",
                "club": "West Bromwich Albion",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Hammersmith",
                    "country": "United Kingdom",
                    "lat": 51.4928,
                    "lng": -0.2229
                }
            },
            {
                "name": "Neco Williams",
                "position": "DF",
                "club": "Nottingham Forest",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Wrexham",
                    "country": "United Kingdom",
                    "lat": 53.0467,
                    "lng": -2.9936
                }
            },
            {
                "name": "Rhys Norrington-Davies",
                "position": "DF",
                "club": "Queens Park Rangers",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Riyadh",
                    "country": "Saudi Arabia",
                    "lat": 24.65,
                    "lng": 46.71
                }
            },
            {
                "name": "Jay Dasilva",
                "position": "DF",
                "club": "Coventry City",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Luton",
                    "country": "United Kingdom",
                    "lat": 51.8783,
                    "lng": -0.4147
                }
            },
            {
                "name": "Ronan Kpakio",
                "position": "DF",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 18,
                "birthplace": {
                    "city": "Cardiff",
                    "country": "United Kingdom",
                    "lat": 51.4817,
                    "lng": -3.1792
                }
            },
            {
                "name": "Dylan Lawlor",
                "position": "DF",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 20,
                "birthplace": {
                    "city": "Caerphilly",
                    "country": "United Kingdom",
                    "lat": 51.578,
                    "lng": -3.218
                }
            },
            {
                "name": "Josh Sheehan",
                "position": "MF",
                "club": "Bolton Wanderers",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Llanelli",
                    "country": "United Kingdom",
                    "lat": 51.6833,
                    "lng": -4.15
                }
            },
            {
                "name": "Liam Cullen",
                "position": "MF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Swansea",
                    "country": "United Kingdom",
                    "lat": 51.6167,
                    "lng": -3.95
                }
            },
            {
                "name": "Rubin Colwill",
                "position": "MF",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 23,
                "birthplace": {
                    "city": "Neath",
                    "country": "United Kingdom",
                    "lat": 51.66,
                    "lng": -3.81
                }
            },
            {
                "name": "Joel Colwill",
                "position": "MF",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 21,
                "birthplace": {
                    "city": "Cardiff",
                    "country": "Wales",
                    "lat": 50.7727,
                    "lng": -3.8174
                }
            },
            {
                "name": "Harry Wilson",
                "position": "FW",
                "club": "Fulham",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Wrexham",
                    "country": "United Kingdom",
                    "lat": 53.0467,
                    "lng": -2.9936
                }
            },
            {
                "name": "Daniel James",
                "position": "FW",
                "club": "Leeds United",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Kingston upon Hull",
                    "country": "Kingdom of England",
                    "lat": 53.7444,
                    "lng": -0.3325
                }
            },
            {
                "name": "Brennan Johnson",
                "position": "FW",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Nottingham",
                    "country": "United Kingdom",
                    "lat": 52.955,
                    "lng": -1.1492
                }
            },
            {
                "name": "David Brooks",
                "position": "FW",
                "club": "Bournemouth",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Warrington",
                    "country": "United Kingdom",
                    "lat": 53.3873,
                    "lng": -2.6029
                }
            },
            {
                "name": "Sorba Thomas",
                "position": "FW",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "London Borough of Newham",
                    "country": "United Kingdom",
                    "lat": 51.5167,
                    "lng": 0.0333
                }
            },
            {
                "name": "Nathan Broadhead",
                "position": "FW",
                "club": "Wrexham",
                "league": "Welsh Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Bangor",
                    "country": "United Kingdom",
                    "lat": 53.228,
                    "lng": -4.128
                }
            },
            {
                "name": "Mark Harris",
                "position": "FW",
                "club": "Oxford United",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Swansea",
                    "country": "United Kingdom",
                    "lat": 51.6167,
                    "lng": -3.95
                }
            },
            {
                "name": "Lewis Koumas",
                "position": "FW",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 20,
                "birthplace": {
                    "city": "Chester",
                    "country": "United Kingdom",
                    "lat": 53.2,
                    "lng": -2.8833
                }
            },
            {
                "name": "Isaak Davies",
                "position": "FW",
                "club": "Cardiff City",
                "league": "EFL League One",
                "age": 24,
                "birthplace": {
                    "city": "Aberdare",
                    "country": "United Kingdom",
                    "lat": 51.7131,
                    "lng": -3.445
                }
            }
        ]
    },
    "BIH": {
        "name": "Bosnia & Herz.",
        "flag": "🇧🇦",
        "confederation": "UEFA",
        "fifaRanking": 45,
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
                "age": 29,
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
                "name": "Dennis Hadžikadunić",
                "position": "DF",
                "club": "Sampdoria",
                "league": "Serie B",
                "age": 27,
                "birthplace": {
                    "city": "Malmö",
                    "country": "Sweden",
                    "lat": 55.5833,
                    "lng": 13
                }
            },
            {
                "name": "Tarik Muharemović",
                "position": "DF",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 22,
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
                "name": "Emir Karić",
                "position": "DF",
                "club": "Sturm Graz",
                "league": "Austrian Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Linz",
                    "country": "Austria",
                    "lat": 48.3058,
                    "lng": 14.2864
                }
            },
            {
                "name": "Arjan Malić",
                "position": "DF",
                "club": "Sturm Graz",
                "league": "Austrian Bundesliga",
                "age": 20,
                "birthplace": {
                    "city": "Jesenice",
                    "country": "Slovenia",
                    "lat": 46.4366,
                    "lng": 14.0602
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
                "name": "Benjamin Tahirović",
                "position": "MF",
                "club": "Brøndby",
                "league": "Danish Superliga",
                "age": 22,
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
                "age": 28,
                "birthplace": {
                    "city": "Nexø",
                    "country": "Denmark",
                    "lat": 55.0625,
                    "lng": 15.1319
                }
            },
            {
                "name": "Dario Šarić",
                "position": "MF",
                "club": "Antalyaspor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Cento",
                    "country": "Italy",
                    "lat": 44.7333,
                    "lng": 11.2833
                }
            },
            {
                "name": "Esmir Bajraktarević",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Appleton",
                    "country": "United States",
                    "lat": 44.2822,
                    "lng": -88.4183
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
                "name": "Dženis Burnić",
                "position": "MF",
                "club": "Karlsruher SC",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Hamm",
                    "country": "Germany",
                    "lat": 51.6814,
                    "lng": 7.8192
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
                "name": "Edin Džeko",
                "position": "FW",
                "club": "Schalke 04",
                "league": "2. Bundesliga",
                "age": 39,
                "birthplace": {
                    "city": "Sarajevo",
                    "country": "Bosnia and Herzegovina",
                    "lat": 43.8564,
                    "lng": 18.4131
                }
            }
        ]
    },
    "NIR": {
        "name": "N. Ireland",
        "flag": "🇬🇧",
        "confederation": "UEFA",
        "fifaRanking": 46,
        "players": [
            {
                "name": "Josh Clarke",
                "position": "GK",
                "club": "Partick Thistle",
                "league": "Scottish Premiership",
                "age": 21,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Conor Hazard",
                "position": "GK",
                "club": "Plymouth Argyle",
                "league": "EFL League One",
                "age": 27,
                "birthplace": {
                    "city": "Downpatrick",
                    "country": "United Kingdom",
                    "lat": 54.322,
                    "lng": -5.703
                }
            },
            {
                "name": "Luke Southwood",
                "position": "GK",
                "club": "Bristol Rovers",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Oxford",
                    "country": "United Kingdom",
                    "lat": 51.7519,
                    "lng": -1.2578
                }
            },
            {
                "name": "Bailey Peacock-Farrell",
                "position": "GK",
                "club": "Blackpool",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Darlington",
                    "country": "United Kingdom",
                    "lat": 54.5228,
                    "lng": -1.5572
                }
            },
            {
                "name": "Conor Bradley",
                "position": "DF",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Castlederg",
                    "country": "United Kingdom",
                    "lat": 54.7083,
                    "lng": -7.5934
                }
            },
            {
                "name": "Jamal Lewis",
                "position": "DF",
                "club": "Preston North End",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Luton",
                    "country": "United Kingdom",
                    "lat": 51.8783,
                    "lng": -0.4147
                }
            },
            {
                "name": "Eoin Toal",
                "position": "DF",
                "club": "Bolton Wanderers",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Armagh",
                    "country": "United Kingdom",
                    "lat": 54.3494,
                    "lng": -6.6544
                }
            },
            {
                "name": "Ryan Johnson",
                "position": "DF",
                "club": "AFC Wimbledon",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Birmingham",
                    "country": "United Kingdom",
                    "lat": 52.48,
                    "lng": -1.9025
                }
            },
            {
                "name": "Terry Devlin",
                "position": "DF",
                "club": "Portsmouth",
                "league": "EFL Championship",
                "age": 22,
                "birthplace": {
                    "city": "Cookstown",
                    "country": "United Kingdom",
                    "lat": 54.647,
                    "lng": -6.745
                }
            },
            {
                "name": "Ruairi McConville",
                "position": "DF",
                "club": "Norwich City",
                "league": "EFL Championship",
                "age": 20,
                "birthplace": {
                    "city": "Belfast",
                    "country": "United Kingdom",
                    "lat": 54.5967,
                    "lng": -5.93
                }
            },
            {
                "name": "Paddy McNair",
                "position": "DF",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 30,
                "birthplace": {
                    "city": "Ballyclare",
                    "country": "United Kingdom",
                    "lat": 54.751,
                    "lng": -5.999
                }
            },
            {
                "name": "Ciaron Brown",
                "position": "DF",
                "club": "Oxford United",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "England",
                    "country": "United Kingdom",
                    "lat": 53,
                    "lng": -1
                }
            },
            {
                "name": "Daniel Ballard",
                "position": "DF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Stevenage",
                    "country": "United Kingdom",
                    "lat": 51.9017,
                    "lng": -0.2019
                }
            },
            {
                "name": "Trai Hume",
                "position": "DF",
                "club": "Sunderland",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Ballymena",
                    "country": "United Kingdom",
                    "lat": 54.862,
                    "lng": -6.268
                }
            },
            {
                "name": "Ethan Galbraith",
                "position": "MF",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Belfast",
                    "country": "United Kingdom",
                    "lat": 54.5967,
                    "lng": -5.93
                }
            },
            {
                "name": "Jamie Donley",
                "position": "MF",
                "club": "Oxford United",
                "league": "EFL Championship",
                "age": 21,
                "birthplace": {
                    "city": "Antrim",
                    "country": "United Kingdom",
                    "lat": 54.7173,
                    "lng": -6.2055
                }
            },
            {
                "name": "Paul Smyth",
                "position": "MF",
                "club": "Queens Park Rangers",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Belfast",
                    "country": "United Kingdom",
                    "lat": 54.5967,
                    "lng": -5.93
                }
            },
            {
                "name": "Isaac Price",
                "position": "MF",
                "club": "West Bromwich Albion",
                "league": "EFL Championship",
                "age": 22,
                "birthplace": {
                    "city": "Pontefract",
                    "country": "Kingdom of England",
                    "lat": 53.691,
                    "lng": -1.312
                }
            },
            {
                "name": "Justin Devenny",
                "position": "MF",
                "club": "Crystal Palace",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Irvine",
                    "country": "United Kingdom",
                    "lat": 55.6194,
                    "lng": -4.6611
                }
            },
            {
                "name": "Brad Lyons",
                "position": "MF",
                "club": "Kilmarnock",
                "league": "Scottish Premiership",
                "age": 28,
                "birthplace": {
                    "city": "Ballymoney",
                    "country": "United Kingdom",
                    "lat": 55.071,
                    "lng": -6.508
                }
            },
            {
                "name": "Ross McCausland",
                "position": "MF",
                "club": "Aris Limassol",
                "league": "Cypriot First Division",
                "age": 22,
                "birthplace": {
                    "city": "County Antrim",
                    "country": "United Kingdom",
                    "lat": 54.865,
                    "lng": -6.28
                }
            },
            {
                "name": "Patrick Kelly",
                "position": "MF",
                "club": "Barnsley",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Belfast",
                    "country": "Northern Ireland",
                    "lat": 53.8728,
                    "lng": -6.4765
                }
            },
            {
                "name": "Jamie McDonnell",
                "position": "MF",
                "club": "Oxford United",
                "league": "EFL Championship",
                "age": 21,
                "birthplace": {
                    "city": "Belfast",
                    "country": "Northern Ireland",
                    "lat": 54.4335,
                    "lng": -5.193
                }
            },
            {
                "name": "George Saville",
                "position": "MF",
                "club": "Luton Town",
                "league": "EFL League One",
                "age": 32,
                "birthplace": {
                    "city": "Camberley",
                    "country": "United Kingdom",
                    "lat": 51.335,
                    "lng": -0.742
                }
            },
            {
                "name": "Callum Marshall",
                "position": "FW",
                "club": "VfL Bochum",
                "league": "Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Belfast",
                    "country": "Northern Ireland",
                    "lat": 54.6216,
                    "lng": -5.2438
                }
            },
            {
                "name": "Dion Charles",
                "position": "FW",
                "club": "Huddersfield Town",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Preston",
                    "country": "United Kingdom",
                    "lat": 53.7594,
                    "lng": -2.6981
                }
            },
            {
                "name": "Josh Magennis",
                "position": "FW",
                "club": "Exeter City",
                "league": "Premier League",
                "age": 35,
                "birthplace": {
                    "city": "Bangor",
                    "country": "United Kingdom",
                    "lat": 54.66,
                    "lng": -5.67
                }
            },
            {
                "name": "Jamie Reid",
                "position": "FW",
                "club": "Stevenage",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Torquay",
                    "country": "United Kingdom",
                    "lat": 50.4625,
                    "lng": -3.5281
                }
            }
        ]
    },
    "UKR": {
        "name": "Ukraine",
        "flag": "🇺🇦",
        "confederation": "UEFA",
        "fifaRanking": 47,
        "players": [
            {
                "name": "Yevhen Volynets",
                "position": "GK",
                "club": "Polissya Zhytomyr",
                "league": "Ukrainian Premier League",
                "age": 32,
                "birthplace": {
                    "city": "Kaniv",
                    "country": "Ukraine",
                    "lat": 49.7447,
                    "lng": 31.4558
                }
            },
            {
                "name": "Anatoliy Trubin",
                "position": "GK",
                "club": "Benfica",
                "league": "Primeira Liga",
                "age": 24,
                "birthplace": {
                    "city": "Donetsk",
                    "country": "Ukraine",
                    "lat": 48.0158,
                    "lng": 37.8028
                }
            },
            {
                "name": "Dmytro Riznyk",
                "position": "GK",
                "club": "Shakhtar Donetsk",
                "league": "Ukrainian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Poltava",
                    "country": "Ukraine",
                    "lat": 49.5894,
                    "lng": 34.5514
                }
            },
            {
                "name": "Yukhym Konoplya",
                "position": "DF",
                "club": "Shakhtar Donetsk",
                "league": "Ukrainian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Donetsk",
                    "country": "Ukraine",
                    "lat": 48.0158,
                    "lng": 37.8028
                }
            },
            {
                "name": "Bohdan Mykhaylichenko",
                "position": "DF",
                "club": "Polissya Zhytomyr",
                "league": "Ukrainian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Boryspil",
                    "country": "Ukraine",
                    "lat": 50.35,
                    "lng": 30.95
                }
            },
            {
                "name": "Oleksandr Svatok",
                "position": "DF",
                "club": "Austin FC",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Kamyanske",
                    "country": "Ukraine",
                    "lat": 48.5167,
                    "lng": 34.6133
                }
            },
            {
                "name": "Valeriy Bondar",
                "position": "DF",
                "club": "Shakhtar Donetsk",
                "league": "Ukrainian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Kharkiv",
                    "country": "Ukraine",
                    "lat": 49.9925,
                    "lng": 36.2311
                }
            },
            {
                "name": "Illia Zabarnyi",
                "position": "DF",
                "club": "Paris Saint-Germain",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Kyiv",
                    "country": "Ukraine",
                    "lat": 50.45,
                    "lng": 30.5236
                }
            },
            {
                "name": "Taras Mykhavko",
                "position": "DF",
                "club": "Dynamo Kyiv",
                "league": "Ukrainian Premier League",
                "age": 20,
                "birthplace": {
                    "city": "Dobrohostiv",
                    "country": "Austrian Empire",
                    "lat": 49.2569,
                    "lng": 23.5925
                }
            },
            {
                "name": "Vitaliy Mykolenko",
                "position": "DF",
                "club": "Everton",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Cherkasy",
                    "country": "Ukraine",
                    "lat": 49.4444,
                    "lng": 32.0597
                }
            },
            {
                "name": "Oleksandr Karavayev",
                "position": "DF",
                "club": "Dynamo Kyiv",
                "league": "Ukrainian Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Kherson",
                    "country": "Ukraine",
                    "lat": 46.6425,
                    "lng": 32.625
                }
            },
            {
                "name": "Mykola Matviyenko",
                "position": "DF",
                "club": "Shakhtar Donetsk",
                "league": "Ukrainian Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Saky",
                    "country": "Ukraine",
                    "lat": 45.1336,
                    "lng": 33.5772
                }
            },
            {
                "name": "Ivan Kalyuzhnyi",
                "position": "MF",
                "club": "Metalist 1925 Kharkiv",
                "league": "Ukrainian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Dovzhyk",
                    "country": "Ukraine",
                    "lat": 50.2097,
                    "lng": 35.9697
                }
            },
            {
                "name": "Ruslan Malinovskyi",
                "position": "MF",
                "club": "Genoa",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Zhytomyr",
                    "country": "Ukraine",
                    "lat": 50.2544,
                    "lng": 28.6578
                }
            },
            {
                "name": "Mykola Shaparenko",
                "position": "MF",
                "club": "Dynamo Kyiv",
                "league": "Ukrainian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Rozdolne",
                    "country": "Ukraine",
                    "lat": 47.9039,
                    "lng": 36.9136
                }
            },
            {
                "name": "Oleksiy Hutsulyak",
                "position": "MF",
                "club": "Polissya Zhytomyr",
                "league": "Ukrainian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Krasyliv",
                    "country": "Ukraine",
                    "lat": 49.65,
                    "lng": 26.9667
                }
            },
            {
                "name": "Viktor Tsyhankov",
                "position": "MF",
                "club": "Girona",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Nahariya",
                    "country": "Israel",
                    "lat": 33.0036,
                    "lng": 35.0925
                }
            },
            {
                "name": "Yehor Nazaryna",
                "position": "MF",
                "club": "Shakhtar Donetsk",
                "league": "Ukrainian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Pryluky",
                    "country": "Ukraine",
                    "lat": 50.6,
                    "lng": 32.4
                }
            },
            {
                "name": "Yehor Yarmolyuk",
                "position": "MF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Verkhnodniprovsk",
                    "country": "Ukraine",
                    "lat": 48.6561,
                    "lng": 34.3283
                }
            },
            {
                "name": "Nazar Voloshyn",
                "position": "MF",
                "club": "Dynamo Kyiv",
                "league": "Ukrainian Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Kremenchuk",
                    "country": "Ukraine",
                    "lat": 49.0631,
                    "lng": 33.4039
                }
            },
            {
                "name": "Oleksandr Zubkov",
                "position": "MF",
                "club": "Trabzonspor",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Makiivka",
                    "country": "Ukraine",
                    "lat": 48.0556,
                    "lng": 37.9611
                }
            },
            {
                "name": "Vladyslav Vanat",
                "position": "FW",
                "club": "Girona",
                "league": "La Liga",
                "age": 24,
                "birthplace": {
                    "city": "Kamianets-Podilskyi",
                    "country": "Ukraine",
                    "lat": 48.6806,
                    "lng": 26.5806
                }
            },
            {
                "name": "Roman Yaremchuk",
                "position": "FW",
                "club": "Lyon",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Lviv",
                    "country": "Ukraine",
                    "lat": 49.8425,
                    "lng": 24.0322
                }
            }
        ]
    },
    "SWE": {
        "name": "Sweden",
        "flag": "🇸🇪",
        "confederation": "UEFA",
        "fifaRanking": 48,
        "players": [
            {
                "name": "Jacob Widell Zetterström",
                "position": "GK",
                "club": "Derby County",
                "league": "EFL Championship",
                "age": 27,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Noel Törnqvist",
                "position": "GK",
                "club": "Como",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 58.4264,
                    "lng": 18.8133
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
                "name": "Viktor Johansson",
                "position": "GK",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 27,
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
                "name": "Isak Hien",
                "position": "DF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Kista",
                    "country": "Sweden",
                    "lat": 59.4014,
                    "lng": 17.9425
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
                "name": "Daniel Svensson",
                "position": "DF",
                "club": "Borussia Dortmund",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Ken Sema",
                "position": "DF",
                "club": "Pafos",
                "league": "Cypriot First Division",
                "age": 32,
                "birthplace": {
                    "city": "Norrköping Matteus church parish",
                    "country": "Sweden",
                    "lat": 58.5931,
                    "lng": 16.1719
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
                "name": "Emil Krafth",
                "position": "DF",
                "club": "Newcastle United",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Ljungby",
                    "country": "Sweden",
                    "lat": 56.8354,
                    "lng": 13.941
                }
            },
            {
                "name": "Emil Forsberg",
                "position": "MF",
                "club": "New York Red Bulls",
                "league": "MLS",
                "age": 34,
                "birthplace": {
                    "city": "Sundsvall",
                    "country": "Sweden",
                    "lat": 62.3955,
                    "lng": 17.286
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
                    "lat": 58.5333,
                    "lng": 18.0372
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
                "name": "Besfort Zeneli",
                "position": "MF",
                "club": "Union Saint-Gilloise",
                "league": "Belgian Pro League",
                "age": 23,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3986,
                    "lng": 18.1331
                }
            },
            {
                "name": "Benjamin Nygren",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 24,
                "birthplace": {
                    "city": "Gothenburg",
                    "country": "Sweden",
                    "lat": 57.7075,
                    "lng": 11.9675
                }
            },
            {
                "name": "Alexander Isak",
                "position": "FW",
                "club": "Liverpool",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Solna Municipality",
                    "country": "Sweden",
                    "lat": 59.3667,
                    "lng": 18.0167
                }
            },
            {
                "name": "Roony Bardghji",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "Kuwait City",
                    "country": "Kuwait",
                    "lat": 29.375,
                    "lng": 47.98
                }
            },
            {
                "name": "Isac Lidberg",
                "position": "FW",
                "club": "Darmstadt 98",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
                }
            },
            {
                "name": "Alexander Bernhardsson",
                "position": "FW",
                "club": "Holstein Kiel",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Gothenburg",
                    "country": "Sweden",
                    "lat": 57.7075,
                    "lng": 11.9675
                }
            }
        ]
    },
    "POL": {
        "name": "Poland",
        "flag": "🇵🇱",
        "confederation": "UEFA",
        "fifaRanking": 49,
        "players": [
            {
                "name": "Mateusz Kochalski",
                "position": "GK",
                "club": "Qarabağ",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Świdnik",
                    "country": "Poland",
                    "lat": 51.2333,
                    "lng": 22.7
                }
            },
            {
                "name": "Kamil Grabara",
                "position": "GK",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Ruda Śląska",
                    "country": "Poland",
                    "lat": 50.2701,
                    "lng": 18.8742
                }
            },
            {
                "name": "Bartłomiej Drągowski",
                "position": "GK",
                "club": "Widzew Łódź",
                "league": "Polish Ekstraklasa",
                "age": 28,
                "birthplace": {
                    "city": "Białystok",
                    "country": "Poland",
                    "lat": 53.1324,
                    "lng": 23.1687
                }
            },
            {
                "name": "Kacper Tobiasz",
                "position": "GK",
                "club": "Legia Warsaw",
                "league": "Polish Ekstraklasa",
                "age": 23,
                "birthplace": {
                    "city": "Płock",
                    "country": "Poland",
                    "lat": 52.55,
                    "lng": 19.7
                }
            },
            {
                "name": "Matty Cash",
                "position": "DF",
                "club": "Aston Villa",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Slough",
                    "country": "United Kingdom",
                    "lat": 51.5097,
                    "lng": -0.5931
                }
            },
            {
                "name": "Przemysław Wiśniewski",
                "position": "DF",
                "club": "Widzew Łódź",
                "league": "Polish Ekstraklasa",
                "age": 27,
                "birthplace": {
                    "city": "Zabrze",
                    "country": "Poland",
                    "lat": 50.3,
                    "lng": 18.7833
                }
            },
            {
                "name": "Tomasz Kędziora",
                "position": "DF",
                "club": "PAOK",
                "league": "Greek Super League",
                "age": 31,
                "birthplace": {
                    "city": "Sulechów",
                    "country": "Poland",
                    "lat": 52.0833,
                    "lng": 15.6167
                }
            },
            {
                "name": "Jan Ziółkowski",
                "position": "DF",
                "club": "Roma",
                "league": "Serie A",
                "age": 20,
                "birthplace": {
                    "city": "Warsaw",
                    "country": "Poland",
                    "lat": 52.23,
                    "lng": 21.0111
                }
            },
            {
                "name": "Kryspin Szcześniak",
                "position": "DF",
                "club": "Górnik Zabrze",
                "league": "Polish Ekstraklasa",
                "age": 25,
                "birthplace": {
                    "city": "Gorzów Wielkopolski",
                    "country": "Poland",
                    "lat": 52.7333,
                    "lng": 15.25
                }
            },
            {
                "name": "Jakub Kiwior",
                "position": "DF",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 25,
                "birthplace": {
                    "city": "Tychy",
                    "country": "Poland",
                    "lat": 50.1236,
                    "lng": 18.9867
                }
            },
            {
                "name": "Paweł Wszołek",
                "position": "DF",
                "club": "Legia Warsaw",
                "league": "Polish Ekstraklasa",
                "age": 33,
                "birthplace": {
                    "city": "Tczew",
                    "country": "Poland",
                    "lat": 54.0911,
                    "lng": 18.7864
                }
            },
            {
                "name": "Bartosz Bereszyński",
                "position": "DF",
                "club": "Palermo",
                "league": "Serie B",
                "age": 33,
                "birthplace": {
                    "city": "Poznań",
                    "country": "Poland",
                    "lat": 52.4083,
                    "lng": 16.9336
                }
            },
            {
                "name": "Bartosz Kapustka",
                "position": "MF",
                "club": "Legia Warsaw",
                "league": "Polish Ekstraklasa",
                "age": 29,
                "birthplace": {
                    "city": "Tarnów",
                    "country": "Poland",
                    "lat": 50.0125,
                    "lng": 20.9883
                }
            },
            {
                "name": "Piotr Zieliński",
                "position": "MF",
                "club": "Internazionale",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Ząbkowice Śląskie",
                    "country": "Poland",
                    "lat": 50.5897,
                    "lng": 16.8124
                }
            },
            {
                "name": "Kamil Grosicki",
                "position": "MF",
                "club": "Pogoń Szczecin",
                "league": "Polish Ekstraklasa",
                "age": 37,
                "birthplace": {
                    "city": "Szczecin",
                    "country": "Poland",
                    "lat": 53.4247,
                    "lng": 14.5553
                }
            },
            {
                "name": "Jakub Kamiński",
                "position": "MF",
                "club": "1. FC Köln",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Ruda Śląska",
                    "country": "Poland",
                    "lat": 50.2701,
                    "lng": 18.8742
                }
            },
            {
                "name": "Bartosz Slisz",
                "position": "MF",
                "club": "Brøndby",
                "league": "Danish Superliga",
                "age": 26,
                "birthplace": {
                    "city": "Rybnik",
                    "country": "Poland",
                    "lat": 50.0833,
                    "lng": 18.5
                }
            },
            {
                "name": "Michał Skóraś",
                "position": "MF",
                "club": "Gent",
                "league": "Belgian Pro League",
                "age": 25,
                "birthplace": {
                    "city": "Jastrzębie-Zdrój",
                    "country": "Poland",
                    "lat": 49.95,
                    "lng": 18.5833
                }
            },
            {
                "name": "Filip Rózga",
                "position": "MF",
                "club": "Sturm Graz",
                "league": "Austrian Bundesliga",
                "age": 19,
                "birthplace": {
                    "city": "Skawina",
                    "country": "Poland",
                    "lat": 49.9753,
                    "lng": 19.8275
                }
            },
            {
                "name": "Nicola Zalewski",
                "position": "MF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Tivoli",
                    "country": "Italy",
                    "lat": 41.9667,
                    "lng": 12.8
                }
            },
            {
                "name": "Kacper Kozłowski",
                "position": "MF",
                "club": "Gaziantep",
                "league": "Turkish Super Lig",
                "age": 22,
                "birthplace": {
                    "city": "Koszalin",
                    "country": "Poland",
                    "lat": 54.1903,
                    "lng": 16.1817
                }
            },
            {
                "name": "Karol Świderski",
                "position": "FW",
                "club": "Panathinaikos",
                "league": "Greek Super League",
                "age": 29,
                "birthplace": {
                    "city": "Rawicz",
                    "country": "Poland",
                    "lat": 51.6092,
                    "lng": 16.8575
                }
            },
            {
                "name": "Robert Lewandowski",
                "position": "FW",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 37,
                "birthplace": {
                    "city": "Warsaw",
                    "country": "Poland",
                    "lat": 52.23,
                    "lng": 21.0111
                }
            },
            {
                "name": "Adam Buksa",
                "position": "FW",
                "club": "Udinese",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Kraków",
                    "country": "Poland",
                    "lat": 50.0614,
                    "lng": 19.9372
                }
            }
        ]
    },
    "ALB": {
        "name": "Albania",
        "flag": "🇦🇱",
        "confederation": "UEFA",
        "fifaRanking": 50,
        "players": [
            {
                "name": "Thomas Strakosha",
                "position": "GK",
                "club": "AEK Athens",
                "league": "Greek Super League",
                "age": 30,
                "birthplace": {
                    "city": "Athens",
                    "country": "Greece",
                    "lat": 37.9842,
                    "lng": 23.7281
                }
            },
            {
                "name": "Mario Dajsinani",
                "position": "GK",
                "club": "Egnatia",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Durrës",
                    "country": "Albania",
                    "lat": 41.3133,
                    "lng": 19.4458
                }
            },
            {
                "name": "Simon Simoni",
                "position": "GK",
                "club": "1. FC Kaiserslautern",
                "league": "2. Bundesliga",
                "age": 21,
                "birthplace": {
                    "city": "Lezhë",
                    "country": "Albania",
                    "lat": 41.7805,
                    "lng": 19.6434
                }
            },
            {
                "name": "Iván Balliu",
                "position": "DF",
                "club": "Rayo Vallecano",
                "league": "La Liga",
                "age": 34,
                "birthplace": {
                    "city": "Caldes de Malavella",
                    "country": "Spain",
                    "lat": 41.8387,
                    "lng": 2.8089
                }
            },
            {
                "name": "Klisman Cake",
                "position": "DF",
                "club": "Akhmat Grozny",
                "league": "Russian Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Pogradec",
                    "country": "Albania",
                    "lat": 40.9,
                    "lng": 20.65
                }
            },
            {
                "name": "Elseid Hysaj",
                "position": "DF",
                "club": "Lazio",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Shkodër",
                    "country": "Albania",
                    "lat": 42.0681,
                    "lng": 19.5121
                }
            },
            {
                "name": "Arlind Ajeti",
                "position": "DF",
                "club": "Bodrum",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Basel",
                    "country": "Switzerland",
                    "lat": 47.5606,
                    "lng": 7.5906
                }
            },
            {
                "name": "Berat Gjimshiti",
                "position": "DF",
                "club": "Atalanta",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Zurich",
                    "country": "Switzerland",
                    "lat": 47.3744,
                    "lng": 8.5411
                }
            },
            {
                "name": "Naser Aliji",
                "position": "DF",
                "club": "Dinamo City",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "Kumanovo",
                    "country": "North Macedonia",
                    "lat": 42.1322,
                    "lng": 21.7144
                }
            },
            {
                "name": "Ardian Ismajli",
                "position": "DF",
                "club": "Torino",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Majac",
                    "country": "Kosovo",
                    "lat": 42.8133,
                    "lng": 21.1347
                }
            },
            {
                "name": "Kristjan Asllani",
                "position": "MF",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 23,
                "birthplace": {
                    "city": "Elbasan",
                    "country": "Albania",
                    "lat": 41.1131,
                    "lng": 20.0818
                }
            },
            {
                "name": "Nedim Bajrami",
                "position": "MF",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 26,
                "birthplace": {
                    "city": "Tetovo",
                    "country": "North Macedonia",
                    "lat": 42.0103,
                    "lng": 20.9714
                }
            },
            {
                "name": "Qazim Laçi",
                "position": "MF",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Peshkopi",
                    "country": "Albania",
                    "lat": 41.6831,
                    "lng": 20.4289
                }
            },
            {
                "name": "Adrion Pajaziti",
                "position": "MF",
                "club": "Hajduk Split",
                "league": "Croatian First League",
                "age": 23,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            },
            {
                "name": "Medon Berisha",
                "position": "MF",
                "club": "Lecce",
                "league": "Serie A",
                "age": 22,
                "birthplace": {
                    "city": "Münsingen",
                    "country": "Switzerland",
                    "lat": 46.873,
                    "lng": 7.561
                }
            },
            {
                "name": "Ylber Ramadani",
                "position": "MF",
                "club": "Lecce",
                "league": "Serie A",
                "age": 29,
                "birthplace": {
                    "city": "Starnberg",
                    "country": "Germany",
                    "lat": 47.9972,
                    "lng": 11.3406
                }
            },
            {
                "name": "Arbër Hoxha",
                "position": "MF",
                "club": "Dinamo Zagreb",
                "league": "Croatian First League",
                "age": 27,
                "birthplace": {
                    "city": "Heidelberg",
                    "country": "Germany",
                    "lat": 49.4122,
                    "lng": 8.71
                }
            },
            {
                "name": "Rey Manaj",
                "position": "FW",
                "club": "Sivasspor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Lushnjë",
                    "country": "Albania",
                    "lat": 40.9333,
                    "lng": 19.7
                }
            },
            {
                "name": "Jasir Asani",
                "position": "FW",
                "club": "Esteghlal",
                "league": "Iranian Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Myrto Uzuni",
                "position": "FW",
                "club": "Austin FC",
                "league": "MLS",
                "age": 30,
                "birthplace": {
                    "city": "Berat",
                    "country": "Albania",
                    "lat": 40.7049,
                    "lng": 19.9497
                }
            },
            {
                "name": "Indrit Tuci",
                "position": "FW",
                "club": "Kayserispor",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Lezhë",
                    "country": "Albania",
                    "lat": 41.7805,
                    "lng": 19.6434
                }
            },
            {
                "name": "Mirlind Daku",
                "position": "FW",
                "club": "Rubin Kazan",
                "league": "Russian Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Gjilan",
                    "country": "Kosovo",
                    "lat": 42.4667,
                    "lng": 21.4667
                }
            },
            {
                "name": "Armando Broja",
                "position": "FW",
                "club": "Burnley",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Slough",
                    "country": "United Kingdom",
                    "lat": 51.5097,
                    "lng": -0.5931
                }
            }
        ]
    },
    "TUR": {
        "name": "Turkey",
        "flag": "🇹🇷",
        "confederation": "UEFA",
        "fifaRanking": 51,
        "players": [
            {
                "name": "Mert Günok",
                "position": "GK",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 36,
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
                    "lat": 36.9081,
                    "lng": 30.6956
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
                "age": 28,
                "birthplace": {
                    "city": "Yıldırım district",
                    "country": "Turkey",
                    "lat": 40.1901,
                    "lng": 29.0977
                }
            },
            {
                "name": "Merih Demiral",
                "position": "DF",
                "club": "Al-Ahli",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Karamürsel district",
                    "country": "Turkey",
                    "lat": 40.6914,
                    "lng": 29.6156
                }
            },
            {
                "name": "Çağlar Söyüncü",
                "position": "DF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "İzmir",
                    "country": "Turkey",
                    "lat": 38.4127,
                    "lng": 27.1384
                }
            },
            {
                "name": "Yusuf Akçiçek",
                "position": "DF",
                "club": "Al-Hilal",
                "league": "Saudi Pro League",
                "age": 20,
                "birthplace": {
                    "city": "Bakırköy",
                    "country": "Turkey",
                    "lat": 40.9831,
                    "lng": 28.8536
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
                "name": "Emirhan Topçu",
                "position": "DF",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Bandırma",
                    "country": "Turkey",
                    "lat": 40.3542,
                    "lng": 27.9725
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
                "name": "İsak Vural",
                "position": "MF",
                "club": "Pisa",
                "league": "Serie A",
                "age": 19,
                "birthplace": {
                    "city": "Stockholm",
                    "country": "Sweden",
                    "lat": 59.3294,
                    "lng": 18.0686
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
                "name": "Yusuf Sarı",
                "position": "FW",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "Martigues",
                    "country": "France",
                    "lat": 43.4053,
                    "lng": 5.0475
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
                "name": "Arda Güler",
                "position": "FW",
                "club": "Real Madrid",
                "league": "La Liga",
                "age": 20,
                "birthplace": {
                    "city": "Altındağ",
                    "country": "Turkey",
                    "lat": 39.9458,
                    "lng": 32.8561
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
                "name": "Ahmed Kutucu",
                "position": "FW",
                "club": "Galatasaray",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Gelsenkirchen",
                    "country": "Germany",
                    "lat": 51.5103,
                    "lng": 7.0942
                }
            },
            {
                "name": "İrfan Can Kahveci",
                "position": "FW",
                "club": "Fenerbahçe",
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
            }
        ]
    },
    "ROU": {
        "name": "Romania",
        "flag": "🇷🇴",
        "confederation": "UEFA",
        "fifaRanking": 52,
        "players": [
            {
                "name": "Ionuț Radu",
                "position": "GK",
                "club": "Celta Vigo",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Bucharest",
                    "country": "Romania",
                    "lat": 44.4134,
                    "lng": 26.0978
                }
            },
            {
                "name": "Ștefan Târnovanu",
                "position": "GK",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 25,
                "birthplace": {
                    "city": "Iași",
                    "country": "Romania",
                    "lat": 47.1622,
                    "lng": 27.5889
                }
            },
            {
                "name": "Marian Aioani",
                "position": "GK",
                "club": "Rapid București",
                "league": "Romanian SuperLiga",
                "age": 26,
                "birthplace": {
                    "city": "Buftea",
                    "country": "Romania",
                    "lat": 44.57,
                    "lng": 25.95
                }
            },
            {
                "name": "Andrei Rațiu",
                "position": "DF",
                "club": "Rayo Vallecano",
                "league": "La Liga",
                "age": 27,
                "birthplace": {
                    "city": "Aiud",
                    "country": "Romania",
                    "lat": 46.3103,
                    "lng": 23.7167
                }
            },
            {
                "name": "Bogdan Racovițan",
                "position": "DF",
                "club": "Raków Częstochowa",
                "league": "Polish Ekstraklasa",
                "age": 25,
                "birthplace": {
                    "city": "Dijon",
                    "country": "France",
                    "lat": 47.3231,
                    "lng": 5.0419
                }
            },
            {
                "name": "Adrian Rus",
                "position": "DF",
                "club": "Universitatea Craiova",
                "league": "Romanian SuperLiga",
                "age": 29,
                "birthplace": {
                    "city": "Satu Mare",
                    "country": "Romania",
                    "lat": 47.79,
                    "lng": 22.89
                }
            },
            {
                "name": "Virgil Ghiță",
                "position": "DF",
                "club": "Hannover 96",
                "league": "2. Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Pitești",
                    "country": "Romania",
                    "lat": 44.8667,
                    "lng": 24.8833
                }
            },
            {
                "name": "Vladimir Screciu",
                "position": "DF",
                "club": "Universitatea Craiova",
                "league": "Romanian SuperLiga",
                "age": 26,
                "birthplace": {
                    "city": "Corabia",
                    "country": "Romania",
                    "lat": 43.7736,
                    "lng": 24.5033
                }
            },
            {
                "name": "Alexandru Chipciu",
                "position": "DF",
                "club": "Universitatea Cluj",
                "league": "Romanian SuperLiga",
                "age": 36,
                "birthplace": {
                    "city": "Brăila",
                    "country": "Romania",
                    "lat": 45.2692,
                    "lng": 27.9575
                }
            },
            {
                "name": "Nicușor Bancu",
                "position": "DF",
                "club": "Universitatea Craiova",
                "league": "Romanian SuperLiga",
                "age": 33,
                "birthplace": {
                    "city": "Crâmpoia",
                    "country": "Romania",
                    "lat": 44.2958,
                    "lng": 24.7252
                }
            },
            {
                "name": "Lisav Eissat",
                "position": "DF",
                "club": "Maccabi Haifa",
                "league": "Israeli Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Haifa",
                    "country": "Israel",
                    "lat": 32.8192,
                    "lng": 34.9992
                }
            },
            {
                "name": "Deian Sorescu",
                "position": "DF",
                "club": "Gaziantep",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Moldova Nouă",
                    "country": "Romania",
                    "lat": 44.7347,
                    "lng": 21.6664
                }
            },
            {
                "name": "Ștefan Baiaram",
                "position": "MF",
                "club": "Universitatea Craiova",
                "league": "Romanian SuperLiga",
                "age": 23,
                "birthplace": {
                    "city": "Craiova",
                    "country": "Romania",
                    "lat": 44.3333,
                    "lng": 23.8167
                }
            },
            {
                "name": "Ianis Hagi",
                "position": "MF",
                "club": "Alanyaspor",
                "league": "Turkish Super Lig",
                "age": 27,
                "birthplace": {
                    "city": "Istanbul",
                    "country": "Turkey",
                    "lat": 41.01,
                    "lng": 28.9603
                }
            },
            {
                "name": "Darius Olaru",
                "position": "MF",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 27,
                "birthplace": {
                    "city": "Mediaș",
                    "country": "Romania",
                    "lat": 46.1639,
                    "lng": 24.3508
                }
            },
            {
                "name": "David Miculescu",
                "position": "MF",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 24,
                "birthplace": {
                    "city": "Arad",
                    "country": "Romania",
                    "lat": 46.1667,
                    "lng": 21.3167
                }
            },
            {
                "name": "Răzvan Marin",
                "position": "MF",
                "club": "AEK Athens",
                "league": "Greek Super League",
                "age": 29,
                "birthplace": {
                    "city": "Bucharest",
                    "country": "Romania",
                    "lat": 44.4134,
                    "lng": 26.0978
                }
            },
            {
                "name": "Florin Tănase",
                "position": "MF",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 31,
                "birthplace": {
                    "city": "Găești",
                    "country": "Romania",
                    "lat": 44.7208,
                    "lng": 25.3147
                }
            },
            {
                "name": "Dennis Man",
                "position": "MF",
                "club": "PSV",
                "league": "Eredivisie",
                "age": 27,
                "birthplace": {
                    "city": "Vladimirescu",
                    "country": "Romania",
                    "lat": 46.1674,
                    "lng": 21.4616
                }
            },
            {
                "name": "Claudiu Petrila",
                "position": "MF",
                "club": "Rapid București",
                "league": "Romanian SuperLiga",
                "age": 25,
                "birthplace": {
                    "city": "Sânnicolau Român",
                    "country": "Romania",
                    "lat": 46.95,
                    "lng": 21.7333
                }
            },
            {
                "name": "Vlad Dragomir",
                "position": "MF",
                "club": "Pafos",
                "league": "Cypriot First Division",
                "age": 26,
                "birthplace": {
                    "city": "Timișoara",
                    "country": "Romania",
                    "lat": 45.7597,
                    "lng": 21.23
                }
            },
            {
                "name": "Marius Marin",
                "position": "MF",
                "club": "Pisa",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Timișoara",
                    "country": "Romania",
                    "lat": 45.7597,
                    "lng": 21.23
                }
            },
            {
                "name": "Valentin Mihăilă",
                "position": "MF",
                "club": "Çaykur Rizespor",
                "league": "Turkish Super Lig",
                "age": 26,
                "birthplace": {
                    "city": "Finta",
                    "country": "Romania",
                    "lat": 44.7903,
                    "lng": 25.795
                }
            },
            {
                "name": "Daniel Bîrligea",
                "position": "FW",
                "club": "FCSB",
                "league": "Romanian SuperLiga",
                "age": 25,
                "birthplace": {
                    "city": "Brăila",
                    "country": "Romania",
                    "lat": 45.2692,
                    "lng": 27.9575
                }
            },
            {
                "name": "Louis Munteanu",
                "position": "FW",
                "club": "D.C. United",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Vaslui",
                    "country": "Romania",
                    "lat": 46.6383,
                    "lng": 27.7292
                }
            }
        ]
    },
    "SVK": {
        "name": "Slovakia",
        "flag": "🇸🇰",
        "confederation": "UEFA",
        "fifaRanking": 53,
        "players": [
            {
                "name": "Martin Dúbravka",
                "position": "GK",
                "club": "Burnley",
                "league": "Premier League",
                "age": 37,
                "birthplace": {
                    "city": "Žilina",
                    "country": "Slovakia",
                    "lat": 49.2167,
                    "lng": 18.7333
                }
            },
            {
                "name": "Marek Rodák",
                "position": "GK",
                "club": "Al-Ettifaq",
                "league": "Saudi Pro League",
                "age": 29,
                "birthplace": {
                    "city": "Košice",
                    "country": "Slovakia",
                    "lat": 48.7167,
                    "lng": 21.25
                }
            },
            {
                "name": "Dominik Takáč",
                "position": "GK",
                "club": "Slovan Bratislava",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Galanta",
                    "country": "Slovakia",
                    "lat": 48.1914,
                    "lng": 17.7308
                }
            },
            {
                "name": "Peter Pekarík",
                "position": "DF",
                "club": "Hertha BSC II",
                "league": "Regionalliga",
                "age": 39,
                "birthplace": {
                    "city": "Žilina",
                    "country": "Slovakia",
                    "lat": 49.2167,
                    "lng": 18.7333
                }
            },
            {
                "name": "Denis Vavro",
                "position": "DF",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 29,
                "birthplace": {
                    "city": "Partizánske",
                    "country": "Slovakia",
                    "lat": 48.6333,
                    "lng": 18.3667
                }
            },
            {
                "name": "Adam Obert",
                "position": "DF",
                "club": "Cagliari",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Bratislava",
                    "country": "Slovakia",
                    "lat": 48.1447,
                    "lng": 17.1128
                }
            },
            {
                "name": "Ľubomír Šatka",
                "position": "DF",
                "club": "Samsunspor",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Ilava",
                    "country": "Slovakia",
                    "lat": 48.9994,
                    "lng": 18.2361
                }
            },
            {
                "name": "Norbert Gyömbér",
                "position": "DF",
                "club": "Al-Kholood",
                "league": "Saudi Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Revúca",
                    "country": "Slovakia",
                    "lat": 48.6833,
                    "lng": 20.1167
                }
            },
            {
                "name": "Milan Škriniar",
                "position": "DF",
                "club": "Fenerbahçe",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Žiar nad Hronom",
                    "country": "Slovakia",
                    "lat": 48.5919,
                    "lng": 18.8533
                }
            },
            {
                "name": "Dávid Hancko",
                "position": "DF",
                "club": "Atlético Madrid",
                "league": "La Liga",
                "age": 28,
                "birthplace": {
                    "city": "Prievidza",
                    "country": "Slovakia",
                    "lat": 48.7714,
                    "lng": 18.6242
                }
            },
            {
                "name": "Ivan Mesík",
                "position": "DF",
                "club": "Heracles Almelo",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Banská Bystrica",
                    "country": "Slovakia",
                    "lat": 48.7353,
                    "lng": 19.1453
                }
            },
            {
                "name": "Ondrej Duda",
                "position": "MF",
                "club": "Al-Ettifaq",
                "league": "Saudi Pro League",
                "age": 31,
                "birthplace": {
                    "city": "Snina",
                    "country": "Slovakia",
                    "lat": 48.9881,
                    "lng": 22.1567
                }
            },
            {
                "name": "László Bénes",
                "position": "MF",
                "club": "Kayserispor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Dunajská Streda",
                    "country": "Slovakia",
                    "lat": 47.9961,
                    "lng": 17.6147
                }
            },
            {
                "name": "Patrik Hrošovský",
                "position": "MF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Prievidza",
                    "country": "Slovakia",
                    "lat": 48.7714,
                    "lng": 18.6242
                }
            },
            {
                "name": "Tomáš Rigo",
                "position": "MF",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Poprad",
                    "country": "Slovakia",
                    "lat": 49.05,
                    "lng": 20.3
                }
            },
            {
                "name": "Matúš Bero",
                "position": "MF",
                "club": "VfL Bochum",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Ilava",
                    "country": "Slovakia",
                    "lat": 48.9994,
                    "lng": 18.2361
                }
            },
            {
                "name": "Stanislav Lobotka",
                "position": "MF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Messina",
                    "country": "Italy",
                    "lat": 38.1936,
                    "lng": 15.5542
                }
            },
            {
                "name": "Mário Sauer",
                "position": "MF",
                "club": "Toulouse",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Slovakia",
                    "country": "Slovakia",
                    "lat": 48.7,
                    "lng": 19.7
                }
            },
            {
                "name": "Leo Sauer",
                "position": "FW",
                "club": "Feyenoord",
                "league": "Eredivisie",
                "age": 20,
                "birthplace": {
                    "city": "Bratislava",
                    "country": "Slovakia",
                    "lat": 48.1447,
                    "lng": 17.1128
                }
            },
            {
                "name": "Róbert Boženík",
                "position": "FW",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Terchová",
                    "country": "Slovakia",
                    "lat": 49.2575,
                    "lng": 19.0311
                }
            },
            {
                "name": "Tomáš Bobček",
                "position": "FW",
                "club": "Lechia Gdańsk",
                "league": "Polish Ekstraklasa",
                "age": 24,
                "birthplace": {
                    "city": "Ružomberok",
                    "country": "Slovakia",
                    "lat": 49.0786,
                    "lng": 19.3083
                }
            },
            {
                "name": "David Strelec",
                "position": "FW",
                "club": "Middlesbrough",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Nové Zámky",
                    "country": "Slovakia",
                    "lat": 47.986,
                    "lng": 18.1632
                }
            },
            {
                "name": "Lukáš Haraslín",
                "position": "FW",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 29,
                "birthplace": {
                    "city": "Bratislava",
                    "country": "Slovakia",
                    "lat": 48.1447,
                    "lng": 17.1128
                }
            },
            {
                "name": "Ivan Schranz",
                "position": "FW",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 32,
                "birthplace": {
                    "city": "Bratislava",
                    "country": "Slovakia",
                    "lat": 48.1447,
                    "lng": 17.1128
                }
            },
            {
                "name": "Dávid Ďuriš",
                "position": "FW",
                "club": "Rosenborg",
                "league": "Norwegian Eliteserien",
                "age": 26,
                "birthplace": {
                    "city": "Žilina",
                    "country": "Slovakia",
                    "lat": 49.2167,
                    "lng": 18.7333
                }
            },
            {
                "name": "Adrián Kaprálik",
                "position": "FW",
                "club": "Holstein Kiel",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Trstená",
                    "country": "Slovakia",
                    "lat": 49.3667,
                    "lng": 19.6167
                }
            },
            {
                "name": "Ľubomír Tupta",
                "position": "FW",
                "club": "AEL",
                "league": "Greek Super League",
                "age": 27,
                "birthplace": {
                    "city": "Prešov",
                    "country": "Slovakia",
                    "lat": 49,
                    "lng": 21.2333
                }
            }
        ]
    },
    "KOS": {
        "name": "Kosovo",
        "flag": "🇽🇰",
        "confederation": "UEFA",
        "fifaRanking": 54,
        "players": [
            {
                "name": "Arijanet Muric",
                "position": "GK",
                "club": "Sassuolo",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Schlieren",
                    "country": "Switzerland",
                    "lat": 47.3989,
                    "lng": 8.4497
                }
            },
            {
                "name": "Visar Bekaj",
                "position": "GK",
                "club": "Tirana",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Pristina",
                    "country": "Kosovo",
                    "lat": 42.6667,
                    "lng": 21.1667
                }
            },
            {
                "name": "Amir Saipi",
                "position": "GK",
                "club": "Lugano",
                "league": "Swiss Super League",
                "age": 25,
                "birthplace": {
                    "city": "Schaffhausen",
                    "country": "Switzerland",
                    "lat": 47.6965,
                    "lng": 8.6339
                }
            },
            {
                "name": "Kreshnik Hajrizi",
                "position": "DF",
                "club": "Sion",
                "league": "Swiss Super League",
                "age": 26,
                "birthplace": {
                    "city": "Sierre",
                    "country": "Switzerland",
                    "lat": 46.2918,
                    "lng": 7.532
                }
            },
            {
                "name": "Fidan Aliti",
                "position": "DF",
                "club": "Alanyaspor",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Preševo",
                    "country": "Serbia",
                    "lat": 42.3067,
                    "lng": 21.65
                }
            },
            {
                "name": "Ilir Krasniqi",
                "position": "DF",
                "club": "Polissya Zhytomyr",
                "league": "Ukrainian Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Bocholt",
                    "country": "Germany",
                    "lat": 51.8333,
                    "lng": 6.6167
                }
            },
            {
                "name": "Lumbardh Dellova",
                "position": "DF",
                "club": "CSKA Sofia",
                "league": "Bulgarian First League",
                "age": 27,
                "birthplace": {
                    "city": "Krushë e Madhe",
                    "country": "Kosovo",
                    "lat": 42.3181,
                    "lng": 20.6361
                }
            },
            {
                "name": "Amir Rrahmani",
                "position": "DF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Pristina",
                    "country": "Kosovo",
                    "lat": 42.6667,
                    "lng": 21.1667
                }
            },
            {
                "name": "Mërgim Vojvoda",
                "position": "DF",
                "club": "Como",
                "league": "Serie A",
                "age": 31,
                "birthplace": {
                    "city": "Hof",
                    "country": "Germany",
                    "lat": 50.3167,
                    "lng": 11.9167
                }
            },
            {
                "name": "Dion Gallapeni",
                "position": "DF",
                "club": "Widzew Łódź",
                "league": "Polish Ekstraklasa",
                "age": 21,
                "birthplace": {
                    "city": "Pristina",
                    "country": "Kosovo",
                    "lat": 43.5813,
                    "lng": 20.4203
                }
            },
            {
                "name": "Elvis Rexhbeçaj",
                "position": "MF",
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Prizren",
                    "country": "Kosovo",
                    "lat": 42.23,
                    "lng": 20.74
                }
            },
            {
                "name": "Florent Muslija",
                "position": "MF",
                "club": "Fortuna Düsseldorf",
                "league": "2. Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Achern",
                    "country": "Germany",
                    "lat": 48.6314,
                    "lng": 8.0739
                }
            },
            {
                "name": "Edon Zhegrova",
                "position": "MF",
                "club": "Juventus",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Herford",
                    "country": "Germany",
                    "lat": 52.1146,
                    "lng": 8.6734
                }
            },
            {
                "name": "Valon Berisha",
                "position": "MF",
                "club": "LASK",
                "league": "Austrian Bundesliga",
                "age": 33,
                "birthplace": {
                    "city": "Malmö",
                    "country": "Sweden",
                    "lat": 55.5833,
                    "lng": 13
                }
            },
            {
                "name": "Veldin Hodža",
                "position": "MF",
                "club": "Rubin Kazan",
                "league": "Russian Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Rijeka",
                    "country": "Croatia",
                    "lat": 45.3333,
                    "lng": 14.4333
                }
            },
            {
                "name": "Lindon Emërllahu",
                "position": "MF",
                "club": "Polissya Zhytomyr",
                "league": "Ukrainian Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Suva Reka",
                    "country": "Kosovo",
                    "lat": 42.38,
                    "lng": 20.8219
                }
            },
            {
                "name": "Muharrem Jashari",
                "position": "MF",
                "club": "LNZ Cherkasy",
                "league": "Ukrainian Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Mitrovica",
                    "country": "Kosovo",
                    "lat": 42.8833,
                    "lng": 20.8667
                }
            },
            {
                "name": "Milot Rashica",
                "position": "FW",
                "club": "Beşiktaş",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Vushtrri",
                    "country": "Kosovo",
                    "lat": 42.8222,
                    "lng": 20.9667
                }
            },
            {
                "name": "Albion Rrahmani",
                "position": "FW",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Podujeva",
                    "country": "Kosovo",
                    "lat": 42.9117,
                    "lng": 21.1917
                }
            },
            {
                "name": "Fisnik Asllani",
                "position": "FW",
                "club": "TSG Hoffenheim",
                "league": "Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Berlin",
                    "country": "Germany",
                    "lat": 52.5167,
                    "lng": 13.3833
                }
            },
            {
                "name": "Ermal Krasniqi",
                "position": "FW",
                "club": "Legia Warsaw",
                "league": "Polish Ekstraklasa",
                "age": 27,
                "birthplace": {
                    "city": "Malisheva",
                    "country": "Federal Republic of Yugoslavia",
                    "lat": 42.4828,
                    "lng": 20.7461
                }
            },
            {
                "name": "Vedat Muriqi",
                "position": "FW",
                "club": "Mallorca",
                "league": "La Liga",
                "age": 31,
                "birthplace": {
                    "city": "Prizren",
                    "country": "Kosovo",
                    "lat": 42.23,
                    "lng": 20.74
                }
            },
            {
                "name": "Baton Zabërgja",
                "position": "FW",
                "club": "Metalist 1925 Kharkiv",
                "league": "Ukrainian Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Pristina",
                    "country": "Kosovo",
                    "lat": 42.4312,
                    "lng": 21.1146
                }
            }
        ]
    },
    "DEN": {
        "name": "Denmark",
        "flag": "🇩🇰",
        "confederation": "UEFA",
        "fifaRanking": 55,
        "players": [
            {
                "name": "Kasper Schmeichel",
                "position": "GK",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 39,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Mads Hermansen",
                "position": "GK",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Odense",
                    "country": "Denmark",
                    "lat": 55.4,
                    "lng": 10.3833
                }
            },
            {
                "name": "Filip Jörgensen",
                "position": "GK",
                "club": "Chelsea",
                "league": "Premier League",
                "age": 23,
                "birthplace": {
                    "city": "Lomma",
                    "country": "Sweden",
                    "lat": 55.6747,
                    "lng": 13.0801
                }
            },
            {
                "name": "Joachim Andersen",
                "position": "DF",
                "club": "Fulham",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Frederiksberg",
                    "country": "Denmark",
                    "lat": 55.6779,
                    "lng": 12.5327
                }
            },
            {
                "name": "Jannik Vestergaard",
                "position": "DF",
                "club": "Leicester City",
                "league": "Premier League",
                "age": 33,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Lucas Høgsberg",
                "position": "DF",
                "club": "Strasbourg",
                "league": "Ligue 1",
                "age": 19,
                "birthplace": {
                    "city": "Farum",
                    "country": "Denmark",
                    "lat": 55.8083,
                    "lng": 12.3581
                }
            },
            {
                "name": "Nikolas Nartey",
                "position": "DF",
                "club": "VfB Stuttgart",
                "league": "Bundesliga",
                "age": 25,
                "birthplace": {
                    "city": "Bagsværd",
                    "country": "Denmark",
                    "lat": 55.76,
                    "lng": 12.455
                }
            },
            {
                "name": "Andreas Christensen",
                "position": "DF",
                "club": "Barcelona",
                "league": "La Liga",
                "age": 29,
                "birthplace": {
                    "city": "Lillerød",
                    "country": "Denmark",
                    "lat": 55.8708,
                    "lng": 12.356
                }
            },
            {
                "name": "Rasmus Kristensen",
                "position": "DF",
                "club": "Eintracht Frankfurt",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Brande",
                    "country": "Denmark",
                    "lat": 55.9439,
                    "lng": 9.1236
                }
            },
            {
                "name": "Patrick Dorgu",
                "position": "DF",
                "club": "Manchester United",
                "league": "Premier League",
                "age": 21,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Victor Nelsson",
                "position": "DF",
                "club": "Hellas Verona",
                "league": "Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Hornbæk",
                    "country": "Denmark",
                    "lat": 56.0875,
                    "lng": 12.4587
                }
            },
            {
                "name": "Matt O'Riley",
                "position": "MF",
                "club": "Brighton & Hove Albion",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "London Borough of Hounslow",
                    "country": "United Kingdom",
                    "lat": 51.4736,
                    "lng": -0.3656
                }
            },
            {
                "name": "Christian Eriksen",
                "position": "MF",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 33,
                "birthplace": {
                    "city": "Middelfart",
                    "country": "Denmark",
                    "lat": 55.5058,
                    "lng": 9.7306
                }
            },
            {
                "name": "Victor Froholdt",
                "position": "MF",
                "club": "Porto",
                "league": "Primeira Liga",
                "age": 19,
                "birthplace": {
                    "city": "Vallensbæk",
                    "country": "Denmark",
                    "lat": 55.6239,
                    "lng": 12.3869
                }
            },
            {
                "name": "Mikkel Damsgaard",
                "position": "MF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Jyllinge",
                    "country": "Denmark",
                    "lat": 55.7514,
                    "lng": 12.1039
                }
            },
            {
                "name": "Christian Nørgaard",
                "position": "MF",
                "club": "Arsenal",
                "league": "Premier League",
                "age": 31,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Philip Billing",
                "position": "MF",
                "club": "Midtjylland",
                "league": "Danish Superliga",
                "age": 29,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Morten Hjulmand",
                "position": "MF",
                "club": "Sporting CP",
                "league": "Primeira Liga",
                "age": 26,
                "birthplace": {
                    "city": "Kastrup",
                    "country": "Denmark",
                    "lat": 55.6375,
                    "lng": 12.6417
                }
            },
            {
                "name": "Pierre-Emile Højbjerg",
                "position": "MF",
                "club": "Marseille",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Gustav Isaksen",
                "position": "FW",
                "club": "Lazio",
                "league": "Serie A",
                "age": 24,
                "birthplace": {
                    "city": "Over Hjerk",
                    "country": "Denmark",
                    "lat": 56.6916,
                    "lng": 8.9207
                }
            },
            {
                "name": "Rasmus Højlund",
                "position": "FW",
                "club": "Napoli",
                "league": "Serie A",
                "age": 23,
                "birthplace": {
                    "city": "Copenhagen",
                    "country": "Denmark",
                    "lat": 55.6761,
                    "lng": 12.5689
                }
            },
            {
                "name": "Jacob Bruun Larsen",
                "position": "FW",
                "club": "Burnley",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Kongens Lyngby",
                    "country": "Denmark",
                    "lat": 55.77,
                    "lng": 12.5
                }
            },
            {
                "name": "Jonas Wind",
                "position": "FW",
                "club": "VfL Wolfsburg",
                "league": "Bundesliga",
                "age": 27,
                "birthplace": {
                    "city": "Hvidovre",
                    "country": "Denmark",
                    "lat": 55.6564,
                    "lng": 12.4686
                }
            },
            {
                "name": "Mika Biereth",
                "position": "FW",
                "club": "Monaco",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "London",
                    "country": "United Kingdom",
                    "lat": 51.5072,
                    "lng": -0.1275
                }
            }
        ]
    },
    "CZE": {
        "name": "Czechia",
        "flag": "🇨🇿",
        "confederation": "UEFA",
        "fifaRanking": 56,
        "players": [
            {
                "name": "Matěj Kovář",
                "position": "GK",
                "club": "PSV Eindhoven",
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
                "name": "Jakub Markovič",
                "position": "GK",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 24,
                "birthplace": {
                    "city": "Přerov",
                    "country": "Czech Republic",
                    "lat": 49.4556,
                    "lng": 17.4511
                }
            },
            {
                "name": "Štěpán Chaloupek",
                "position": "DF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 22,
                "birthplace": {
                    "city": "Meziboří",
                    "country": "Czech Republic",
                    "lat": 50.6212,
                    "lng": 13.5988
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
                "name": "David Douděra",
                "position": "DF",
                "club": "Slavia Prague",
                "league": "Czech First League",
                "age": 27,
                "birthplace": {
                    "city": "Brandýs nad Labem-Stará Boleslav",
                    "country": "Czech Republic",
                    "lat": 50.1872,
                    "lng": 14.6633
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
                "name": "Matěj Ryneš",
                "position": "MF",
                "club": "Sparta Prague",
                "league": "Czech First League",
                "age": 24,
                "birthplace": {
                    "city": "Horní Planá",
                    "country": "Czech Republic",
                    "lat": 48.7674,
                    "lng": 14.0326
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
                "name": "Patrik Hellebrand",
                "position": "MF",
                "club": "Górnik Zabrze",
                "league": "Polish Ekstraklasa",
                "age": 26,
                "birthplace": {
                    "city": "Czech Republic",
                    "country": "Czech Republic",
                    "lat": 50,
                    "lng": 15
                }
            },
            {
                "name": "Kryštof Daněk",
                "position": "MF",
                "club": "LASK",
                "league": "Austrian Bundesliga",
                "age": 23,
                "birthplace": {
                    "city": "Olomouc",
                    "country": "Czech Republic",
                    "lat": 49.5939,
                    "lng": 17.2508
                }
            },
            {
                "name": "Michal Beran",
                "position": "MF",
                "club": "Sigma Olomouc",
                "league": "Czech First League",
                "age": 25,
                "birthplace": {
                    "city": "Czech Republic",
                    "country": "Czech Republic",
                    "lat": 50,
                    "lng": 15
                }
            },
            {
                "name": "Tomáš Souček",
                "position": "MF",
                "club": "West Ham United",
                "league": "Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Havlíčkův Brod",
                    "country": "Czech Republic",
                    "lat": 49.6079,
                    "lng": 15.5807
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
                "name": "Václav Sejk",
                "position": "FW",
                "club": "Sigma Olomouc",
                "league": "Czech First League",
                "age": 23,
                "birthplace": {
                    "city": "Děčín",
                    "country": "Czech Republic",
                    "lat": 50.7736,
                    "lng": 14.1961
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
            }
        ]
    },
    "IRL": {
        "name": "Rep. of Ireland",
        "flag": "🇮🇪",
        "confederation": "UEFA",
        "fifaRanking": 57,
        "players": [
            {
                "name": "Caoimhín Kelleher",
                "position": "GK",
                "club": "Brentford",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Cork",
                    "country": "Ireland",
                    "lat": 51.9,
                    "lng": -8.4731
                }
            },
            {
                "name": "Gavin Bazunu",
                "position": "GK",
                "club": "Stoke City",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Dublin",
                    "country": "Ireland",
                    "lat": 53.3497,
                    "lng": -6.2603
                }
            },
            {
                "name": "Mark Travers",
                "position": "GK",
                "club": "Everton",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "West Yorkshire",
                    "country": "United Kingdom",
                    "lat": 53.75,
                    "lng": -1.6667
                }
            },
            {
                "name": "Séamus Coleman",
                "position": "DF",
                "club": "Everton",
                "league": "Premier League",
                "age": 37,
                "birthplace": {
                    "city": "Donegal",
                    "country": "Ireland",
                    "lat": 54.65,
                    "lng": -8.117
                }
            },
            {
                "name": "Liam Scales",
                "position": "DF",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 27,
                "birthplace": {
                    "city": "Dublin",
                    "country": "Ireland",
                    "lat": 53.3497,
                    "lng": -6.2603
                }
            },
            {
                "name": "Dara O'Shea",
                "position": "DF",
                "club": "Ipswich Town",
                "league": "Premier League",
                "age": 26,
                "birthplace": {
                    "city": "Dublin",
                    "country": "Ireland",
                    "lat": 53.3497,
                    "lng": -6.2603
                }
            },
            {
                "name": "Jake O'Brien",
                "position": "DF",
                "club": "Everton",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "County Cork",
                    "country": "Ireland",
                    "lat": 52,
                    "lng": -8.75
                }
            },
            {
                "name": "Jimmy Dunne",
                "position": "DF",
                "club": "Queens Park Rangers",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Drogheda",
                    "country": "Ireland",
                    "lat": 53.715,
                    "lng": -6.3525
                }
            },
            {
                "name": "John Egan",
                "position": "DF",
                "club": "Hull City",
                "league": "EFL Championship",
                "age": 33,
                "birthplace": {
                    "city": "Cork",
                    "country": "Ireland",
                    "lat": 51.9,
                    "lng": -8.4731
                }
            },
            {
                "name": "Ryan Manning",
                "position": "DF",
                "club": "Southampton",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Galway",
                    "country": "Ireland",
                    "lat": 53.2719,
                    "lng": -9.0488
                }
            },
            {
                "name": "Festy Ebosele",
                "position": "DF",
                "club": "İstanbul Başakşehir",
                "league": "Turkish Super Lig",
                "age": 23,
                "birthplace": {
                    "city": "Enniscorthy",
                    "country": "Ireland",
                    "lat": 52.5021,
                    "lng": -6.5659
                }
            },
            {
                "name": "Nathan Collins",
                "position": "DF",
                "club": "Brentford",
                "league": "Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Leixlip",
                    "country": "Ireland",
                    "lat": 53.3636,
                    "lng": -6.4864
                }
            },
            {
                "name": "Josh Cullen",
                "position": "MF",
                "club": "Burnley",
                "league": "Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Southend-on-Sea",
                    "country": "United Kingdom",
                    "lat": 51.5379,
                    "lng": 0.7138
                }
            },
            {
                "name": "Jayson Molumby",
                "position": "MF",
                "club": "West Bromwich Albion",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Cappoquin",
                    "country": "Ireland",
                    "lat": 52.15,
                    "lng": -7.95
                }
            },
            {
                "name": "Finn Azaz",
                "position": "MF",
                "club": "Southampton",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Westminster",
                    "country": "United Kingdom",
                    "lat": 51.4995,
                    "lng": -0.1333
                }
            },
            {
                "name": "Conor Coventry",
                "position": "MF",
                "club": "Charlton Athletic",
                "league": "Premier League",
                "age": 25,
                "birthplace": {
                    "city": "London Borough of Waltham Forest",
                    "country": "United Kingdom",
                    "lat": 51.5912,
                    "lng": -0.0135
                }
            },
            {
                "name": "Jack Taylor",
                "position": "MF",
                "club": "Ipswich Town",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Hammersmith",
                    "country": "United Kingdom",
                    "lat": 51.4928,
                    "lng": -0.2229
                }
            },
            {
                "name": "Jamie McGrath",
                "position": "MF",
                "club": "Hibernian",
                "league": "Scottish Premiership",
                "age": 29,
                "birthplace": {
                    "city": "Athboy",
                    "country": "Ireland",
                    "lat": 53.6167,
                    "lng": -6.9167
                }
            },
            {
                "name": "Troy Parrott",
                "position": "FW",
                "club": "AZ",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Dublin",
                    "country": "Ireland",
                    "lat": 53.3497,
                    "lng": -6.2603
                }
            },
            {
                "name": "Johnny Kenny",
                "position": "FW",
                "club": "Bolton Wanderers",
                "league": "Premier League",
                "age": 22,
                "birthplace": {
                    "city": "Riverstown",
                    "country": "Ireland",
                    "lat": 54.1317,
                    "lng": -8.3944
                }
            },
            {
                "name": "Adam Idah",
                "position": "FW",
                "club": "Swansea City",
                "league": "EFL Championship",
                "age": 24,
                "birthplace": {
                    "city": "Cork",
                    "country": "Ireland",
                    "lat": 51.9,
                    "lng": -8.4731
                }
            },
            {
                "name": "Mikey Johnston",
                "position": "FW",
                "club": "West Bromwich Albion",
                "league": "EFL Championship",
                "age": 26,
                "birthplace": {
                    "city": "Glasgow",
                    "country": "United Kingdom",
                    "lat": 55.8611,
                    "lng": -4.25
                }
            },
            {
                "name": "Chiedozie Ogbene",
                "position": "FW",
                "club": "Sheffield United",
                "league": "EFL Championship",
                "age": 28,
                "birthplace": {
                    "city": "Lagos",
                    "country": "Nigeria",
                    "lat": 6.4561,
                    "lng": 3.3936
                }
            }
        ]
    },
    "MKD": {
        "name": "N. Macedonia",
        "flag": "🇲🇰",
        "confederation": "UEFA",
        "fifaRanking": 58,
        "players": [
            {
                "name": "Dejan Iliev",
                "position": "GK",
                "club": "Rapid",
                "league": "Romanian SuperLiga",
                "age": 30,
                "birthplace": {
                    "city": "Strumica",
                    "country": "North Macedonia",
                    "lat": 41.4375,
                    "lng": 22.6431
                }
            },
            {
                "name": "Igor Aleksovski",
                "position": "GK",
                "club": "Flamurtari",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Stole Dimitrievski",
                "position": "GK",
                "club": "Valencia",
                "league": "La Liga",
                "age": 32,
                "birthplace": {
                    "city": "Kumanovo",
                    "country": "North Macedonia",
                    "lat": 42.1322,
                    "lng": 21.7144
                }
            },
            {
                "name": "Damjan Shishkovski",
                "position": "GK",
                "club": "Borac",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Bojan Ilievski",
                "position": "DF",
                "club": "Struga",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.6553,
                    "lng": 20.5589
                }
            },
            {
                "name": "Stefan Ashkovski",
                "position": "DF",
                "club": "Mes Rafsanjan",
                "league": "Iranian Pro League",
                "age": 33,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Nikola Serafimov",
                "position": "DF",
                "club": "Levski",
                "league": "Bulgarian First League",
                "age": 26,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Gjoko Zajkov",
                "position": "DF",
                "club": "Ajman",
                "league": "UAE Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Andrej Stojchevski",
                "position": "DF",
                "club": "Slovácko",
                "league": "Czech First League",
                "age": 22,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Stefan Despotovski",
                "position": "DF",
                "club": "Beograd",
                "league": "Serbian SuperLiga",
                "age": 23,
                "birthplace": {
                    "city": "Serbia and Montenegro",
                    "country": "Serbia and Montenegro",
                    "lat": 43.15,
                    "lng": 19.78
                }
            },
            {
                "name": "Darko Velkovski",
                "position": "DF",
                "club": "Vardar",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Bojan Dimoski",
                "position": "DF",
                "club": "TSC",
                "league": "Serbian SuperLiga",
                "age": 24,
                "birthplace": {
                    "city": "Prilep",
                    "country": "North Macedonia",
                    "lat": 41.3464,
                    "lng": 21.5542
                }
            },
            {
                "name": "Eljif Elmas",
                "position": "MF",
                "club": "Napoli",
                "league": "Serie A",
                "age": 26,
                "birthplace": {
                    "city": "Čair Municipality",
                    "country": "North Macedonia",
                    "lat": 42.0019,
                    "lng": 21.4381
                }
            },
            {
                "name": "David Babunski",
                "position": "MF",
                "club": "Vardar",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Enis Bardhi",
                "position": "MF",
                "club": "Konyaspor",
                "league": "Turkish Super Lig",
                "age": 30,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Isnik Alimi",
                "position": "MF",
                "club": "Dalian Yingbo",
                "league": "Chinese Super League",
                "age": 32,
                "birthplace": {
                    "city": "Delogoždi",
                    "country": "North Macedonia",
                    "lat": 41.2579,
                    "lng": 20.7227
                }
            },
            {
                "name": "Tihomir Kostadinov",
                "position": "MF",
                "club": "Sigma",
                "league": "Czech First League",
                "age": 29,
                "birthplace": {
                    "city": "Valandovo",
                    "country": "North Macedonia",
                    "lat": 41.3169,
                    "lng": 22.5611
                }
            },
            {
                "name": "Jani Atanasov",
                "position": "MF",
                "club": "AEL",
                "league": "Greek Super League",
                "age": 26,
                "birthplace": {
                    "city": "Strumica",
                    "country": "North Macedonia",
                    "lat": 41.4375,
                    "lng": 22.6431
                }
            },
            {
                "name": "Reshat Ramadani",
                "position": "MF",
                "club": "Shkëndija",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 42.961,
                    "lng": 22.1307
                }
            },
            {
                "name": "Luka Stankovski",
                "position": "MF",
                "club": "Radnički 1923",
                "league": "Serbian SuperLiga",
                "age": 23,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Aleksandar Trajkovski",
                "position": "FW",
                "club": "Lokomotiva",
                "league": "Croatian First League",
                "age": 33,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Darko Churlinov",
                "position": "FW",
                "club": "Kocaelispor",
                "league": "Turkish Super Lig",
                "age": 25,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Elmin Rastoder",
                "position": "FW",
                "club": "Thun",
                "league": "Swiss Super League",
                "age": 24,
                "birthplace": {
                    "city": "Wetzikon",
                    "country": "Switzerland",
                    "lat": 47.3208,
                    "lng": 8.7931
                }
            },
            {
                "name": "Lirim Qamili",
                "position": "FW",
                "club": "Sønderjyske",
                "league": "Danish Superliga",
                "age": 27,
                "birthplace": {
                    "city": "Glostrup",
                    "country": "Denmark",
                    "lat": 55.6628,
                    "lng": 12.3972
                }
            },
            {
                "name": "Milan Ristovski",
                "position": "FW",
                "club": "Bohemians",
                "league": "Czech First League",
                "age": 27,
                "birthplace": {
                    "city": "Skopje",
                    "country": "North Macedonia",
                    "lat": 41.9961,
                    "lng": 21.4317
                }
            },
            {
                "name": "Bojan Miovski",
                "position": "FW",
                "club": "Rangers",
                "league": "Scottish Premiership",
                "age": 26,
                "birthplace": {
                    "city": "Štip",
                    "country": "North Macedonia",
                    "lat": 41.7358,
                    "lng": 22.1914
                }
            },
            {
                "name": "Kristijan Trapanovski",
                "position": "FW",
                "club": "Dundee United",
                "league": "Scottish Premiership",
                "age": 26,
                "birthplace": {
                    "city": "Bitola",
                    "country": "North Macedonia",
                    "lat": 41.0319,
                    "lng": 21.3347
                }
            }
        ]
    },
    "COD": {
        "name": "DR Congo",
        "flag": "🇨🇩",
        "confederation": "CAF",
        "fifaRanking": 59,
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
                    "city": "City of Brussels",
                    "country": "Belgium",
                    "lat": 50.8467,
                    "lng": 4.3517
                }
            },
            {
                "name": "Dimitry Bertaud",
                "position": "GK",
                "club": "Forge",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Montpellier",
                    "country": "France",
                    "lat": 43.6109,
                    "lng": 3.8772
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
                "name": "Steve Kapuadi",
                "position": "DF",
                "club": "Legia Warsaw",
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
                "name": "Dylan Batubinsika",
                "position": "DF",
                "club": "AEL",
                "league": "Greek Super League",
                "age": 29,
                "birthplace": {
                    "city": "Cergy-Pontoise",
                    "country": "France",
                    "lat": 49.0361,
                    "lng": 2.0631
                }
            },
            {
                "name": "Joris Kayembe",
                "position": "DF",
                "club": "Genk",
                "league": "Belgian Pro League",
                "age": 31,
                "birthplace": {
                    "city": "City of Brussels",
                    "country": "Belgium",
                    "lat": 50.8467,
                    "lng": 4.3517
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
                "name": "Gédéon Kalulu",
                "position": "DF",
                "club": "Aris Limassol",
                "league": "Cypriot First Division",
                "age": 28,
                "birthplace": {
                    "city": "8th arrondissement of Lyon",
                    "country": "France",
                    "lat": 45.7348,
                    "lng": 4.8681
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
                "name": "Gaël Kakuta",
                "position": "MF",
                "club": "Sakaryaspor",
                "league": "Turkish Super Lig",
                "age": 34,
                "birthplace": {
                    "city": "Lille",
                    "country": "France",
                    "lat": 50.6319,
                    "lng": 3.0575
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
                "name": "Nathanaël Mbuku",
                "position": "FW",
                "club": "Montpellier",
                "league": "Ligue 1",
                "age": 23,
                "birthplace": {
                    "city": "Villeneuve-Saint-Georges",
                    "country": "France",
                    "lat": 48.7325,
                    "lng": 2.4497
                }
            },
            {
                "name": "Samuel Essende",
                "position": "FW",
                "club": "FC Augsburg",
                "league": "Bundesliga",
                "age": 28,
                "birthplace": {
                    "city": "Montfermeil",
                    "country": "France",
                    "lat": 48.8983,
                    "lng": 2.5647
                }
            },
            {
                "name": "Théo Bongonda",
                "position": "FW",
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
                "name": "Meschak Elia",
                "position": "FW",
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
                "name": "Brian Cipenga",
                "position": "FW",
                "club": "Castellón",
                "league": "Segunda División",
                "age": 27,
                "birthplace": {
                    "city": "Kinshasa",
                    "country": "DR Congo",
                    "lat": -4.8225,
                    "lng": 15.1578
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
            },
            {
                "name": "Michel-Ange Balikwisha",
                "position": "FW",
                "club": "Celtic",
                "league": "Scottish Premiership",
                "age": 24,
                "birthplace": {
                    "city": "Ghent",
                    "country": "Belgium",
                    "lat": 51.0536,
                    "lng": 3.7253
                }
            }
        ]
    },
    "JAM": {
        "name": "Jamaica",
        "flag": "🇯🇲",
        "confederation": "CONCACAF",
        "fifaRanking": 60,
        "players": [
            {
                "name": "Kemar Foster",
                "position": "GK",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 18.4423,
                    "lng": -76.5793
                }
            },
            {
                "name": "Daniel Russell",
                "position": "GK",
                "club": "Portmore United",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.4715,
                    "lng": -76.5332
                }
            },
            {
                "name": "Tafari Chambers",
                "position": "GK",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.7313,
                    "lng": -76.5733
                }
            },
            {
                "name": "Damion Lowe",
                "position": "DF",
                "club": "Houston Dynamo",
                "league": "MLS",
                "age": 32,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9714,
                    "lng": -76.7931
                }
            },
            {
                "name": "Javain Brown",
                "position": "DF",
                "club": "Real Salt Lake",
                "league": "MLS",
                "age": 26,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9714,
                    "lng": -76.7931
                }
            },
            {
                "name": "Kyle Ming",
                "position": "DF",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 18.5967,
                    "lng": -76.1051
                }
            },
            {
                "name": "Ronaldo Webster",
                "position": "DF",
                "club": "Shkëndija",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.2346,
                    "lng": -76.3074
                }
            },
            {
                "name": "Christopher Ainsworth",
                "position": "DF",
                "club": "Cavalier",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.691,
                    "lng": -76.6761
                }
            },
            {
                "name": "Fitzroy Cummings",
                "position": "DF",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.0159,
                    "lng": -76.0688
                }
            },
            {
                "name": "Robinho Gordon",
                "position": "DF",
                "club": "Chapelton Maroons",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.6311,
                    "lng": -76.2858
                }
            },
            {
                "name": "Stephen Young",
                "position": "DF",
                "club": "Portmore United",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.8577,
                    "lng": -75.8197
                }
            },
            {
                "name": "Tyreek Magee",
                "position": "MF",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9714,
                    "lng": -76.7931
                }
            },
            {
                "name": "Jahshaun Anglin",
                "position": "MF",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9714,
                    "lng": -76.7931
                }
            },
            {
                "name": "Dwayne Atkinson",
                "position": "MF",
                "club": "Rhode Island FC",
                "league": "MLS",
                "age": 23,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9714,
                    "lng": -76.7931
                }
            },
            {
                "name": "Andre Lewis",
                "position": "MF",
                "club": "Spokane Velocity",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Spanish Town",
                    "country": "Jamaica",
                    "lat": 17.9961,
                    "lng": -76.9547
                }
            },
            {
                "name": "Nickyle Ellis",
                "position": "MF",
                "club": "Racing United",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.2459,
                    "lng": -76.5769
                }
            },
            {
                "name": "Adrian Reid",
                "position": "MF",
                "club": "Cavalier",
                "league": "Unknown",
                "age": 19,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9681,
                    "lng": -76.2382
                }
            },
            {
                "name": "Jaheim Thomas",
                "position": "MF",
                "club": "Arnett Gardens",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.6141,
                    "lng": -76.6346
                }
            },
            {
                "name": "Shamar Watson",
                "position": "MF",
                "club": "Cavalier",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.5307,
                    "lng": -77.3118
                }
            },
            {
                "name": "Romario Williams",
                "position": "FW",
                "club": "Indy Eleven",
                "league": "MLS",
                "age": 31,
                "birthplace": {
                    "city": "Portmore",
                    "country": "Jamaica",
                    "lat": 17.9667,
                    "lng": -76.8667
                }
            },
            {
                "name": "Warner Brown",
                "position": "FW",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Jamaica",
                    "country": "Jamaica",
                    "lat": 18.18,
                    "lng": -77.4
                }
            },
            {
                "name": "Jourdaine Fletcher",
                "position": "FW",
                "club": "Montego Bay United",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Saint James Parish",
                    "country": "Jamaica",
                    "lat": 18.3833,
                    "lng": -77.8833
                }
            },
            {
                "name": "Daniel Green",
                "position": "FW",
                "club": "Mount Pleasant",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.4724,
                    "lng": -75.9415
                }
            },
            {
                "name": "Trayvone Reid",
                "position": "FW",
                "club": "Oakland Roots SC",
                "league": "MLS",
                "age": 25,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 18.011,
                    "lng": -75.9906
                }
            },
            {
                "name": "Nickalia Fuller",
                "position": "FW",
                "club": "Tivoli Gardens FC",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.9822,
                    "lng": -75.967
                }
            },
            {
                "name": "Andre Blake",
                "position": "GK",
                "club": "Philadelphia Union",
                "league": "MLS",
                "age": 35,
                "birthplace": {
                    "city": "May Pen",
                    "country": "Jamaica",
                    "lat": 17.95,
                    "lng": -77.25
                }
            },
            {
                "name": "Jahmali Waite",
                "position": "GK",
                "club": "Tampa Bay Rowdies",
                "league": "MLS",
                "age": 27,
                "birthplace": {
                    "city": "Jamaica",
                    "country": "Jamaica",
                    "lat": 18.18,
                    "lng": -77.4
                }
            },
            {
                "name": "Amal Knight",
                "position": "GK",
                "club": "Charlotte Independence",
                "league": "MLS",
                "age": 32,
                "birthplace": {
                    "city": "Jamaica",
                    "country": "Jamaica",
                    "lat": 18.18,
                    "lng": -77.4
                }
            },
            {
                "name": "Jayden Hibbert",
                "position": "GK",
                "club": "Atlanta United FC",
                "league": "MLS",
                "age": 21,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 17.4611,
                    "lng": -77.1254
                }
            },
            {
                "name": "Corey Addai",
                "position": "GK",
                "club": "Stockport County",
                "league": "Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Kingston",
                    "country": "Jamaica",
                    "lat": 18.3964,
                    "lng": -77.0827
                }
            }
        ]
    },
    "NCL": {
        "name": "New Caledonia",
        "flag": "🇳🇨",
        "confederation": "OFC",
        "fifaRanking": 61,
        "players": [
            {
                "name": "Rocky Nyikeine",
                "position": "GK",
                "club": "Gaïca",
                "league": "Unknown",
                "age": 33,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "Thomas Schmidt",
                "position": "GK",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "Warren Hlupa",
                "position": "GK",
                "club": "Vertou",
                "league": "Ligue 1",
                "age": 21,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.5465,
                    "lng": 166.1422
                }
            },
            {
                "name": "Morgan Mathelon",
                "position": "DF",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 34,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.3372,
                    "lng": 166.8177
                }
            },
            {
                "name": "Bernard Iwa",
                "position": "DF",
                "club": "Lössi",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -22.9181,
                    "lng": 166.9616
                }
            },
            {
                "name": "Fonzy Ranchain",
                "position": "DF",
                "club": "Vertou",
                "league": "Ligue 1",
                "age": 31,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -22.6024,
                    "lng": 166.2769
                }
            },
            {
                "name": "Didier Simane",
                "position": "DF",
                "club": "ASPTT Dijon",
                "league": "Ligue 1",
                "age": 29,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "William Rokuad",
                "position": "DF",
                "club": "Magenta",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.3633,
                    "lng": 165.7938
                }
            },
            {
                "name": "Henry Wélépane",
                "position": "DF",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -22.1088,
                    "lng": 166.7727
                }
            },
            {
                "name": "César Zeoula",
                "position": "MF",
                "club": "Chauvigny",
                "league": "Ligue 1",
                "age": 36,
                "birthplace": {
                    "city": "Lifou",
                    "country": "France",
                    "lat": -20.9,
                    "lng": 167.2667
                }
            },
            {
                "name": "Shene Wélépane",
                "position": "MF",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "Joseph Athale",
                "position": "MF",
                "club": "Olympique Saint-Quentin",
                "league": "Ligue 1",
                "age": 30,
                "birthplace": {
                    "city": "Ouvéa Island",
                    "country": "France",
                    "lat": -20.6522,
                    "lng": 166.562
                }
            },
            {
                "name": "Jekob Jeno",
                "position": "MF",
                "club": "Unirea Slobozia",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "Joris Kenon",
                "position": "MF",
                "club": "Saint-Philbert-de-Grand-Lieu",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "New Caledonia",
                    "country": "France",
                    "lat": -21.25,
                    "lng": 165.3
                }
            },
            {
                "name": "Titouan Richard",
                "position": "MF",
                "club": "Olympique Salaise Rhodia",
                "league": "Ligue 1",
                "age": 25,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -23.0865,
                    "lng": 167.4935
                }
            },
            {
                "name": "Pierre Bako",
                "position": "MF",
                "club": "Vertou",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -22.6035,
                    "lng": 166.3981
                }
            },
            {
                "name": "Yoan Béaruné",
                "position": "MF",
                "club": "Horizon Patho",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -22.414,
                    "lng": 165.6311
                }
            },
            {
                "name": "Jean-Jacques Katrawa",
                "position": "FW",
                "club": "Lucciana",
                "league": "Ligue 1",
                "age": 26,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.8823,
                    "lng": 167.1547
                }
            },
            {
                "name": "Gérard Waia",
                "position": "FW",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.8181,
                    "lng": 166.8229
                }
            },
            {
                "name": "Lues Waya",
                "position": "FW",
                "club": "Vertou",
                "league": "Ligue 1",
                "age": 24,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.9917,
                    "lng": 166.0001
                }
            },
            {
                "name": "Germain Haewegene",
                "position": "FW",
                "club": "Tahiti United",
                "league": "Unknown",
                "age": 29,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -23.0222,
                    "lng": 166.926
                }
            },
            {
                "name": "Bryan Ausu",
                "position": "FW",
                "club": "Sud",
                "league": "Ligue 1",
                "age": 28,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.7523,
                    "lng": 166.7888
                }
            },
            {
                "name": "Pierre Iékawé",
                "position": "FW",
                "club": "Tiga Sport",
                "league": "Unknown",
                "age": 28,
                "birthplace": {
                    "city": "Nouméa",
                    "country": "New Caledonia",
                    "lat": -21.778,
                    "lng": 167.0604
                }
            }
        ]
    },
    "IRQ": {
        "name": "Iraq",
        "flag": "🇮🇶",
        "confederation": "AFC",
        "fifaRanking": 62,
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
                "name": "Jalal Hassan",
                "position": "GK",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 34,
                "birthplace": {
                    "city": "Al Diwaniyah",
                    "country": "Iraq",
                    "lat": 31.9892,
                    "lng": 44.9247
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
                    "lat": 33.4863,
                    "lng": 43.5123
                }
            },
            {
                "name": "Maitham Jabbar",
                "position": "DF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 25,
                "birthplace": {
                    "city": "Nasiriyah",
                    "country": "Iraq",
                    "lat": 31.0439,
                    "lng": 46.2575
                }
            },
            {
                "name": "Mustafa Saadoon",
                "position": "DF",
                "club": "Al-Shorta",
                "league": "Iraqi Premier League",
                "age": 24,
                "birthplace": {
                    "city": "Iraq",
                    "country": "Iraq",
                    "lat": 33,
                    "lng": 43
                }
            },
            {
                "name": "Saad Natiq",
                "position": "DF",
                "club": "Duhok",
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
                "name": "Ahmed Yahya",
                "position": "DF",
                "club": "Al-Shorta",
                "league": "Iraqi Premier League",
                "age": 30,
                "birthplace": {
                    "city": "Basra",
                    "country": "Iraq",
                    "lat": 30.515,
                    "lng": 47.81
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
                "name": "Hussein Ali Al-Saedi",
                "position": "MF",
                "club": "Al-Shorta",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 33.3153,
                    "lng": 44.3661
                }
            },
            {
                "name": "Amjad Attwan",
                "position": "MF",
                "club": "Zakho",
                "league": "Iraqi Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Karbala",
                    "country": "Iraq",
                    "lat": 32.6167,
                    "lng": 44.0333
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
                "name": "Sajjad Jassim",
                "position": "MF",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Iraq",
                    "country": "Iraq",
                    "lat": 33,
                    "lng": 43
                }
            },
            {
                "name": "Sherko Karim",
                "position": "MF",
                "club": "Zakho",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Kirkuk",
                    "country": "Iraq",
                    "lat": 35.4667,
                    "lng": 44.4
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
                "name": "Karrar Nabeel",
                "position": "MF",
                "club": "Al-Zawraa",
                "league": "Iraqi Premier League",
                "age": 28,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 34.144,
                    "lng": 44.9403
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
                    "lat": 32.8749,
                    "lng": 43.6154
                }
            },
            {
                "name": "Marko Farji",
                "position": "MF",
                "club": "Venezia",
                "league": "Serie A",
                "age": 21,
                "birthplace": {
                    "city": "Grimstad",
                    "country": "Norway",
                    "lat": 58.3519,
                    "lng": 8.5444
                }
            },
            {
                "name": "Mohammed Jawad",
                "position": "FW",
                "club": "Al-Quwa Al-Jawiya",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Baghdad",
                    "country": "Iraq",
                    "lat": 32.6244,
                    "lng": 45.3101
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
                "name": "Amar Muhsin",
                "position": "FW",
                "club": "Gimpo",
                "league": "K League 1",
                "age": 28,
                "birthplace": {
                    "city": "Gothenburg",
                    "country": "Sweden",
                    "lat": 57.7075,
                    "lng": 11.9675
                }
            },
            {
                "name": "Aymen Hussein",
                "position": "FW",
                "club": "Al-Karma",
                "league": "Iraqi Premier League",
                "age": 29,
                "birthplace": {
                    "city": "Hawija",
                    "country": "Iraq",
                    "lat": 35.3232,
                    "lng": 43.774
                }
            }
        ]
    },
    "BOL": {
        "name": "Bolivia",
        "flag": "🇧🇴",
        "confederation": "CONMEBOL",
        "fifaRanking": 63,
        "players": [
            {
                "name": "Carlos Lampe",
                "position": "GK",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 38,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Gerónimo Govea",
                "position": "GK",
                "club": "Montevideo Wanderers",
                "league": "Uruguayan Primera",
                "age": 17,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -15.8148,
                    "lng": -68.9398
                }
            },
            {
                "name": "Bruno Poveda",
                "position": "GK",
                "club": "Universitario de Vinto",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.1056,
                    "lng": -68.1537
                }
            },
            {
                "name": "Luis Paz",
                "position": "DF",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -15.7507,
                    "lng": -69.008
                }
            },
            {
                "name": "Leonardo Zabala",
                "position": "DF",
                "club": "Cancún",
                "league": "Liga MX",
                "age": 23,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Marcelo Torrez",
                "position": "DF",
                "club": "Santos U20",
                "league": "Brasileirão",
                "age": 19,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -17.3729,
                    "lng": -67.7976
                }
            },
            {
                "name": "Richet Gómez",
                "position": "DF",
                "club": "Always Ready",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -17.0906,
                    "lng": -67.9431
                }
            },
            {
                "name": "Lucas Macazaga",
                "position": "DF",
                "club": "Leganés B",
                "league": "La Liga",
                "age": 19,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -17.0914,
                    "lng": -67.5042
                }
            },
            {
                "name": "Leonardo Justiniano",
                "position": "DF",
                "club": "Rayong",
                "league": "Unknown",
                "age": 24,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.7434,
                    "lng": -68.6854
                }
            },
            {
                "name": "Escleizon Freita",
                "position": "DF",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 19,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -15.6421,
                    "lng": -67.5701
                }
            },
            {
                "name": "Dieguito Rodríguez",
                "position": "DF",
                "club": "Always Ready",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -17.4667,
                    "lng": -67.4934
                }
            },
            {
                "name": "Nicolás Villarroel",
                "position": "DF",
                "club": "Always Ready",
                "league": "Unknown",
                "age": 18,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.4091,
                    "lng": -69.0482
                }
            },
            {
                "name": "Ramiro Vaca",
                "position": "MF",
                "club": "Wydad Casablanca",
                "league": "Botola Pro",
                "age": 26,
                "birthplace": {
                    "city": "Tarija",
                    "country": "Bolivia",
                    "lat": -21.5339,
                    "lng": -64.7342
                }
            },
            {
                "name": "Moisés Villarroel",
                "position": "MF",
                "club": "Blooming",
                "league": "Unknown",
                "age": 27,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Robson Matheus",
                "position": "MF",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 23,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Ervin Vaca",
                "position": "MF",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.4958,
                    "lng": -68.1333
                }
            },
            {
                "name": "Carlos Melgar",
                "position": "MF",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 31,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Julio Herrera",
                "position": "MF",
                "club": "San Antonio Bulo Bulo",
                "league": "Unknown",
                "age": 26,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.8453,
                    "lng": -67.6953
                }
            },
            {
                "name": "Bruno Miranda",
                "position": "FW",
                "club": "Aucas",
                "league": "Ecuadorian Serie A",
                "age": 27,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Lucas Chávez",
                "position": "FW",
                "club": "Bolívar",
                "league": "Unknown",
                "age": 22,
                "birthplace": {
                    "city": "Santa Cruz de la Sierra",
                    "country": "Bolivia",
                    "lat": -17.7892,
                    "lng": -63.1975
                }
            },
            {
                "name": "Fernando Nava",
                "position": "FW",
                "club": "Oriente Petrolero",
                "league": "Unknown",
                "age": 21,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -15.9128,
                    "lng": -67.2278
                }
            },
            {
                "name": "William Álvarez",
                "position": "FW",
                "club": "Nacional Potosí",
                "league": "Unknown",
                "age": 30,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.197,
                    "lng": -68.4445
                }
            },
            {
                "name": "Máximo Mamani",
                "position": "FW",
                "club": "Always Ready",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -17.0838,
                    "lng": -67.7542
                }
            },
            {
                "name": "Juan Godoy",
                "position": "FW",
                "club": "Always Ready",
                "league": "Unknown",
                "age": 32,
                "birthplace": {
                    "city": "La Paz",
                    "country": "Bolivia",
                    "lat": -16.3248,
                    "lng": -67.9004
                }
            }
        ]
    },
    "SUR": {
        "name": "Suriname",
        "flag": "🇸🇷",
        "confederation": "CONMEBOL",
        "fifaRanking": 64,
        "players": [
            {
                "name": "Warner Hahn",
                "position": "GK",
                "club": "Hammarby",
                "league": "Swedish Allsvenskan",
                "age": 33,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Jonathan Fonkel",
                "position": "GK",
                "club": "Robinhood",
                "league": "Unknown",
                "age": 20,
                "birthplace": {
                    "city": "Paramaribo",
                    "country": "Suriname",
                    "lat": 5.9429,
                    "lng": -54.9365
                }
            },
            {
                "name": "Etienne Vaessen",
                "position": "GK",
                "club": "Groningen",
                "league": "Eredivisie",
                "age": 30,
                "birthplace": {
                    "city": "Breda",
                    "country": "Netherlands",
                    "lat": 51.5889,
                    "lng": 4.7758
                }
            },
            {
                "name": "Anfernee Dijksteel",
                "position": "DF",
                "club": "Kocaelispor",
                "league": "Turkish Super Lig",
                "age": 29,
                "birthplace": {
                    "city": "Netherlands",
                    "country": "Kingdom of the Netherlands",
                    "lat": 52.3167,
                    "lng": 5.55
                }
            },
            {
                "name": "Radinio Balker",
                "position": "DF",
                "club": "Huddersfield Town",
                "league": "Premier League",
                "age": 27,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Stefano Denswil",
                "position": "DF",
                "club": "Kayserispor",
                "league": "Turkish Super Lig",
                "age": 32,
                "birthplace": {
                    "city": "Zaandam",
                    "country": "Netherlands",
                    "lat": 52.4417,
                    "lng": 4.8422
                }
            },
            {
                "name": "Ridgeciano Haps",
                "position": "DF",
                "club": "Venezia",
                "league": "Serie A",
                "age": 32,
                "birthplace": {
                    "city": "Utrecht",
                    "country": "Netherlands",
                    "lat": 52.0908,
                    "lng": 5.1217
                }
            },
            {
                "name": "Myenty Abena",
                "position": "DF",
                "club": "Gaziantep",
                "league": "Turkish Super Lig",
                "age": 31,
                "birthplace": {
                    "city": "Paramaribo",
                    "country": "Suriname",
                    "lat": 5.8667,
                    "lng": -55.1667
                }
            },
            {
                "name": "Djavan Anderson",
                "position": "DF",
                "club": "Al-Ittifaq",
                "league": "UAE Pro League",
                "age": 30,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Djevencio van der Kust",
                "position": "DF",
                "club": "Heracles Almelo",
                "league": "Eredivisie",
                "age": 24,
                "birthplace": {
                    "city": "Netherlands",
                    "country": "Kingdom of the Netherlands",
                    "lat": 52.3167,
                    "lng": 5.55
                }
            },
            {
                "name": "Shaquille Pinas",
                "position": "DF",
                "club": "Al-Kholood",
                "league": "Saudi Pro League",
                "age": 27,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Dion Malone",
                "position": "DF",
                "club": "Telstar",
                "league": "Eredivisie",
                "age": 36,
                "birthplace": {
                    "city": "Paramaribo",
                    "country": "Suriname",
                    "lat": 5.8667,
                    "lng": -55.1667
                }
            },
            {
                "name": "Dhoraso Klas",
                "position": "MF",
                "club": "Sheriff Tiraspol",
                "league": "Unknown",
                "age": 25,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Justin Lonwijk",
                "position": "MF",
                "club": "Fortuna Sittard",
                "league": "Eredivisie",
                "age": 26,
                "birthplace": {
                    "city": "Tilburg",
                    "country": "Netherlands",
                    "lat": 51.5572,
                    "lng": 5.0911
                }
            },
            {
                "name": "Denzel Jubitana",
                "position": "MF",
                "club": "Atromitos",
                "league": "Greek Super League",
                "age": 26,
                "birthplace": {
                    "city": "Namur",
                    "country": "Belgium",
                    "lat": 50.4667,
                    "lng": 4.8667
                }
            },
            {
                "name": "Jean-Paul Boëtius",
                "position": "MF",
                "club": "Darmstadt 98",
                "league": "Bundesliga",
                "age": 31,
                "birthplace": {
                    "city": "Rotterdam",
                    "country": "Netherlands",
                    "lat": 51.92,
                    "lng": 4.48
                }
            },
            {
                "name": "Tjaronn Chery",
                "position": "MF",
                "club": "NEC",
                "league": "Eredivisie",
                "age": 37,
                "birthplace": {
                    "city": "Enschede",
                    "country": "Netherlands",
                    "lat": 52.2225,
                    "lng": 6.8925
                }
            },
            {
                "name": "Kenneth Paal",
                "position": "MF",
                "club": "Antalyaspor",
                "league": "Turkish Super Lig",
                "age": 28,
                "birthplace": {
                    "city": "Netherlands",
                    "country": "Kingdom of the Netherlands",
                    "lat": 52.3167,
                    "lng": 5.55
                }
            },
            {
                "name": "Virgil Misidjan",
                "position": "FW",
                "club": "NEC",
                "league": "Eredivisie",
                "age": 32,
                "birthplace": {
                    "city": "Goirle",
                    "country": "Netherlands",
                    "lat": 51.5203,
                    "lng": 5.0671
                }
            },
            {
                "name": "Richonell Margaret",
                "position": "FW",
                "club": "Go Ahead Eagles",
                "league": "Eredivisie",
                "age": 25,
                "birthplace": {
                    "city": "Heerhugowaard",
                    "country": "Netherlands",
                    "lat": 52.668,
                    "lng": 4.841
                }
            },
            {
                "name": "Sheraldo Becker",
                "position": "FW",
                "club": "Mainz 05",
                "league": "Bundesliga",
                "age": 30,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Jaden Montnor",
                "position": "FW",
                "club": "Aris Limassol",
                "league": "Cypriot First Division",
                "age": 23,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
                }
            },
            {
                "name": "Gleofilo Vlijter",
                "position": "FW",
                "club": "Újpest",
                "league": "Hungarian NB I",
                "age": 26,
                "birthplace": {
                    "city": "Paramaribo",
                    "country": "Suriname",
                    "lat": 5.8667,
                    "lng": -55.1667
                }
            },
            {
                "name": "Jay-Roy Grot",
                "position": "FW",
                "club": "OB",
                "league": "Danish Superliga",
                "age": 27,
                "birthplace": {
                    "city": "Arnhem",
                    "country": "Netherlands",
                    "lat": 51.9833,
                    "lng": 5.9167
                }
            },
            {
                "name": "Jahnoah Markelo",
                "position": "FW",
                "club": "Coventry City",
                "league": "EFL Championship",
                "age": 23,
                "birthplace": {
                    "city": "Amsterdam",
                    "country": "Netherlands",
                    "lat": 52.3667,
                    "lng": 4.8833
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
