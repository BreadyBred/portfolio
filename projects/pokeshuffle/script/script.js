const pokemons = {
	'1': {
        'id': 1,
        'name': 'Bulbasaur',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 45,
            'attack': 49,
            'defense': 49,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '1'
    },
    '2': {
        'id': 2,
        'name': 'Ivysaur',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 62,
            'defense': 63,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 60
        },
        'gen': '1'
    },
    '3': {
        'id': 3,
        'name': 'Venusaur',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 82,
            'defense': 83,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 80
        },
        'gen': '1'
    },
    '4': {
        'id': 4,
        'name': 'Charmander',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 39,
            'attack': 52,
            'defense': 43,
            'special-attack': 60,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '1'
    },
    '5': {
        'id': 5,
        'name': 'Charmeleon',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 58,
            'attack': 64,
            'defense': 58,
            'special-attack': 80,
            'special-defense': 65,
            'speed': 80
        },
        'gen': '1'
    },
    '6': {
        'id': 6,
        'name': 'Charizard',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 78,
            'attack': 84,
            'defense': 78,
            'special-attack': 109,
            'special-defense': 85,
            'speed': 100
        },
        'gen': '1'
    },
    '7': {
        'id': 7,
        'name': 'Squirtle',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 44,
            'attack': 48,
            'defense': 65,
            'special-attack': 50,
            'special-defense': 64,
            'speed': 43
        },
        'gen': '1'
    },
    '8': {
        'id': 8,
        'name': 'Wartortle',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 59,
            'attack': 63,
            'defense': 80,
            'special-attack': 65,
            'special-defense': 80,
            'speed': 58
        },
        'gen': '1'
    },
    '9': {
        'id': 9,
        'name': 'Blastoise',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 79,
            'attack': 83,
            'defense': 100,
            'special-attack': 85,
            'special-defense': 105,
            'speed': 78
        },
        'gen': '1'
    },
    '10': {
        'id': 10,
        'name': 'Caterpie',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 35,
            'special-attack': 20,
            'special-defense': 20,
            'speed': 45
        },
        'gen': '1'
    },
    '11': {
        'id': 11,
        'name': 'Metapod',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 20,
            'defense': 55,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 30
        },
        'gen': '1'
    },
    '12': {
        'id': 12,
        'name': 'Butterfree',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 45,
            'defense': 50,
            'special-attack': 90,
            'special-defense': 80,
            'speed': 70
        },
        'gen': '1'
    },
    '13': {
        'id': 13,
        'name': 'Weedle',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 35,
            'defense': 30,
            'special-attack': 20,
            'special-defense': 20,
            'speed': 50
        },
        'gen': '1'
    },
    '14': {
        'id': 14,
        'name': 'Kakuna',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 45,
            'attack': 25,
            'defense': 50,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 35
        },
        'gen': '1'
    },
    '15': {
        'id': 15,
        'name': 'Beedrill',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 40,
            'special-attack': 45,
            'special-defense': 80,
            'speed': 75
        },
        'gen': '1'
    },
    '16': {
        'id': 16,
        'name': 'Pidgey',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 40,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 56
        },
        'gen': '1'
    },
    '17': {
        'id': 17,
        'name': 'Pidgeotto',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 63,
            'attack': 60,
            'defense': 55,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 71
        },
        'gen': '1'
    },
    '18': {
        'id': 18,
        'name': 'Pidgeot',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 83,
            'attack': 80,
            'defense': 75,
            'special-attack': 70,
            'special-defense': 70,
            'speed': 101
        },
        'gen': '1'
    },
    '19': {
        'id': 19,
        'name': 'Rattata',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 30,
            'attack': 56,
            'defense': 35,
            'special-attack': 25,
            'special-defense': 35,
            'speed': 72
        },
        'gen': '1'
    },
    '20': {
        'id': 20,
        'name': 'Raticate',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 81,
            'defense': 60,
            'special-attack': 50,
            'special-defense': 70,
            'speed': 97
        },
        'gen': '1'
    },
    '21': {
        'id': 21,
        'name': 'Spearow',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 60,
            'defense': 30,
            'special-attack': 31,
            'special-defense': 31,
            'speed': 70
        },
        'gen': '1'
    },
    '22': {
        'id': 22,
        'name': 'Fearow',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 65,
            'special-attack': 61,
            'special-defense': 61,
            'speed': 100
        },
        'gen': '1'
    },
    '23': {
        'id': 23,
        'name': 'Ekans',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 35,
            'attack': 60,
            'defense': 44,
            'special-attack': 40,
            'special-defense': 54,
            'speed': 55
        },
        'gen': '1'
    },
    '24': {
        'id': 24,
        'name': 'Arbok',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 95,
            'defense': 69,
            'special-attack': 65,
            'special-defense': 79,
            'speed': 80
        },
        'gen': '1'
    },
    '25': {
        'id': 25,
        'name': 'Pikachu',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 35,
            'attack': 55,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 90
        },
        'gen': '1'
    },
    '26': {
        'id': 26,
        'name': 'Raichu',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 90,
            'defense': 55,
            'special-attack': 90,
            'special-defense': 80,
            'speed': 110
        },
        'gen': '1'
    },
    '27': {
        'id': 27,
        'name': 'Sandshrew',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 50,
            'attack': 75,
            'defense': 85,
            'special-attack': 20,
            'special-defense': 30,
            'speed': 40
        },
        'gen': '1'
    },
    '28': {
        'id': 28,
        'name': 'Sandslash',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 75,
            'attack': 100,
            'defense': 110,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 65
        },
        'gen': '1'
    },
    '29': {
        'id': 29,
        'name': 'Nidoran-f',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 55,
            'attack': 47,
            'defense': 52,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 41
        },
        'gen': '1'
    },
    '30': {
        'id': 30,
        'name': 'Nidorina',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 70,
            'attack': 62,
            'defense': 67,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 56
        },
        'gen': '1'
    },
    '31': {
        'id': 31,
        'name': 'Nidoqueen',
        'type': [
            'poison',
            'ground'
        ],
        'stats': {
            'hp': 90,
            'attack': 92,
            'defense': 87,
            'special-attack': 75,
            'special-defense': 85,
            'speed': 76
        },
        'gen': '1'
    },
    '32': {
        'id': 32,
        'name': 'Nidoran-m',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 46,
            'attack': 57,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 50
        },
        'gen': '1'
    },
    '33': {
        'id': 33,
        'name': 'Nidorino',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 61,
            'attack': 72,
            'defense': 57,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 65
        },
        'gen': '1'
    },
    '34': {
        'id': 34,
        'name': 'Nidoking',
        'type': [
            'poison',
            'ground'
        ],
        'stats': {
            'hp': 81,
            'attack': 102,
            'defense': 77,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 85
        },
        'gen': '1'
    },
    '35': {
        'id': 35,
        'name': 'Clefairy',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 45,
            'defense': 48,
            'special-attack': 60,
            'special-defense': 65,
            'speed': 35
        },
        'gen': '1'
    },
    '36': {
        'id': 36,
        'name': 'Clefable',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 95,
            'attack': 70,
            'defense': 73,
            'special-attack': 95,
            'special-defense': 90,
            'speed': 60
        },
        'gen': '1'
    },
    '37': {
        'id': 37,
        'name': 'Vulpix',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 38,
            'attack': 41,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 65,
            'speed': 65
        },
        'gen': '1'
    },
    '38': {
        'id': 38,
        'name': 'Ninetales',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 73,
            'attack': 76,
            'defense': 75,
            'special-attack': 81,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '1'
    },
    '39': {
        'id': 39,
        'name': 'Jigglypuff',
        'type': [
            'normal',
            'fairy'
        ],
        'stats': {
            'hp': 115,
            'attack': 45,
            'defense': 20,
            'special-attack': 45,
            'special-defense': 25,
            'speed': 20
        },
        'gen': '1'
    },
    '40': {
        'id': 40,
        'name': 'Wigglytuff',
        'type': [
            'normal',
            'fairy'
        ],
        'stats': {
            'hp': 140,
            'attack': 70,
            'defense': 45,
            'special-attack': 85,
            'special-defense': 50,
            'speed': 45
        },
        'gen': '1'
    },
    '41': {
        'id': 41,
        'name': 'Zubat',
        'type': [
            'poison',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 35,
            'special-attack': 30,
            'special-defense': 40,
            'speed': 55
        },
        'gen': '1'
    },
    '42': {
        'id': 42,
        'name': 'Golbat',
        'type': [
            'poison',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 70,
            'special-attack': 65,
            'special-defense': 75,
            'speed': 90
        },
        'gen': '1'
    },
    '43': {
        'id': 43,
        'name': 'Oddish',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 45,
            'attack': 50,
            'defense': 55,
            'special-attack': 75,
            'special-defense': 65,
            'speed': 30
        },
        'gen': '1'
    },
    '44': {
        'id': 44,
        'name': 'Gloom',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 65,
            'defense': 70,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 40
        },
        'gen': '1'
    },
    '45': {
        'id': 45,
        'name': 'Vileplume',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 85,
            'special-attack': 110,
            'special-defense': 90,
            'speed': 50
        },
        'gen': '1'
    },
    '46': {
        'id': 46,
        'name': 'Paras',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 35,
            'attack': 70,
            'defense': 55,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 25
        },
        'gen': '1'
    },
    '47': {
        'id': 47,
        'name': 'Parasect',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 95,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 80,
            'speed': 30
        },
        'gen': '1'
    },
    '48': {
        'id': 48,
        'name': 'Venonat',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 55,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 55,
            'speed': 45
        },
        'gen': '1'
    },
    '49': {
        'id': 49,
        'name': 'Venomoth',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 70,
            'attack': 65,
            'defense': 60,
            'special-attack': 90,
            'special-defense': 75,
            'speed': 90
        },
        'gen': '1'
    },
    '50': {
        'id': 50,
        'name': 'Diglett',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 10,
            'attack': 55,
            'defense': 25,
            'special-attack': 35,
            'special-defense': 45,
            'speed': 95
        },
        'gen': '1'
    },
    '51': {
        'id': 51,
        'name': 'Dugtrio',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 35,
            'attack': 100,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 70,
            'speed': 120
        },
        'gen': '1'
    },
    '52': {
        'id': 52,
        'name': 'Meowth',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 35,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 90
        },
        'gen': '1'
    },
    '53': {
        'id': 53,
        'name': 'Persian',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 65,
            'attack': 70,
            'defense': 60,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 115
        },
        'gen': '1'
    },
    '54': {
        'id': 54,
        'name': 'Psyduck',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 52,
            'defense': 48,
            'special-attack': 65,
            'special-defense': 50,
            'speed': 55
        },
        'gen': '1'
    },
    '55': {
        'id': 55,
        'name': 'Golduck',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 80,
            'attack': 82,
            'defense': 78,
            'special-attack': 95,
            'special-defense': 80,
            'speed': 85
        },
        'gen': '1'
    },
    '56': {
        'id': 56,
        'name': 'Mankey',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 40,
            'attack': 80,
            'defense': 35,
            'special-attack': 35,
            'special-defense': 45,
            'speed': 70
        },
        'gen': '1'
    },
    '57': {
        'id': 57,
        'name': 'Primeape',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 65,
            'attack': 105,
            'defense': 60,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 95
        },
        'gen': '1'
    },
    '58': {
        'id': 58,
        'name': 'Growlithe',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 55,
            'attack': 70,
            'defense': 45,
            'special-attack': 70,
            'special-defense': 50,
            'speed': 60
        },
        'gen': '1'
    },
    '59': {
        'id': 59,
        'name': 'Arcanine',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 90,
            'attack': 110,
            'defense': 80,
            'special-attack': 100,
            'special-defense': 80,
            'speed': 95
        },
        'gen': '1'
    },
    '60': {
        'id': 60,
        'name': 'Poliwag',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 40,
            'attack': 50,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 90
        },
        'gen': '1'
    },
    '61': {
        'id': 61,
        'name': 'Poliwhirl',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 65,
            'attack': 65,
            'defense': 65,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 90
        },
        'gen': '1'
    },
    '62': {
        'id': 62,
        'name': 'Poliwrath',
        'type': [
            'water',
            'fighting'
        ],
        'stats': {
            'hp': 90,
            'attack': 95,
            'defense': 95,
            'special-attack': 70,
            'special-defense': 90,
            'speed': 70
        },
        'gen': '1'
    },
    '63': {
        'id': 63,
        'name': 'Abra',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 25,
            'attack': 20,
            'defense': 15,
            'special-attack': 105,
            'special-defense': 55,
            'speed': 90
        },
        'gen': '1'
    },
    '64': {
        'id': 64,
        'name': 'Kadabra',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 40,
            'attack': 35,
            'defense': 30,
            'special-attack': 120,
            'special-defense': 70,
            'speed': 105
        },
        'gen': '1'
    },
    '65': {
        'id': 65,
        'name': 'Alakazam',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 55,
            'attack': 50,
            'defense': 45,
            'special-attack': 135,
            'special-defense': 95,
            'speed': 120
        },
        'gen': '1'
    },
    '66': {
        'id': 66,
        'name': 'Machop',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 70,
            'attack': 80,
            'defense': 50,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 35
        },
        'gen': '1'
    },
    '67': {
        'id': 67,
        'name': 'Machoke',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 80,
            'attack': 100,
            'defense': 70,
            'special-attack': 50,
            'special-defense': 60,
            'speed': 45
        },
        'gen': '1'
    },
    '68': {
        'id': 68,
        'name': 'Machamp',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 90,
            'attack': 130,
            'defense': 80,
            'special-attack': 65,
            'special-defense': 85,
            'speed': 55
        },
        'gen': '1'
    },
    '69': {
        'id': 69,
        'name': 'Bellsprout',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 50,
            'attack': 75,
            'defense': 35,
            'special-attack': 70,
            'special-defense': 30,
            'speed': 40
        },
        'gen': '1'
    },
    '70': {
        'id': 70,
        'name': 'Weepinbell',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 50,
            'special-attack': 85,
            'special-defense': 45,
            'speed': 55
        },
        'gen': '1'
    },
    '71': {
        'id': 71,
        'name': 'Victreebel',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 105,
            'defense': 65,
            'special-attack': 100,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '1'
    },
    '72': {
        'id': 72,
        'name': 'Tentacool',
        'type': [
            'water',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 35,
            'special-attack': 50,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '1'
    },
    '73': {
        'id': 73,
        'name': 'Tentacruel',
        'type': [
            'water',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 70,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 120,
            'speed': 100
        },
        'gen': '1'
    },
    '74': {
        'id': 74,
        'name': 'Geodude',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 40,
            'attack': 80,
            'defense': 100,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 20
        },
        'gen': '1'
    },
    '75': {
        'id': 75,
        'name': 'Graveler',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 55,
            'attack': 95,
            'defense': 115,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 35
        },
        'gen': '1'
    },
    '76': {
        'id': 76,
        'name': 'Golem',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 130,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '1'
    },
    '77': {
        'id': 77,
        'name': 'Ponyta',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 50,
            'attack': 85,
            'defense': 55,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 90
        },
        'gen': '1'
    },
    '78': {
        'id': 78,
        'name': 'Rapidash',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 100,
            'defense': 70,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 105
        },
        'gen': '1'
    },
    '79': {
        'id': 79,
        'name': 'Slowpoke',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 65,
            'defense': 65,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 15
        },
        'gen': '1'
    },
    '80': {
        'id': 80,
        'name': 'Slowbro',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 95,
            'attack': 75,
            'defense': 110,
            'special-attack': 100,
            'special-defense': 80,
            'speed': 30
        },
        'gen': '1'
    },
    '81': {
        'id': 81,
        'name': 'Magnemite',
        'type': [
            'electric',
            'steel'
        ],
        'stats': {
            'hp': 25,
            'attack': 35,
            'defense': 70,
            'special-attack': 95,
            'special-defense': 55,
            'speed': 45
        },
        'gen': '1'
    },
    '82': {
        'id': 82,
        'name': 'Magneton',
        'type': [
            'electric',
            'steel'
        ],
        'stats': {
            'hp': 50,
            'attack': 60,
            'defense': 95,
            'special-attack': 120,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '1'
    },
    '83': {
        'id': 83,
        'name': 'Farfetchd',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 52,
            'attack': 90,
            'defense': 55,
            'special-attack': 58,
            'special-defense': 62,
            'speed': 60
        },
        'gen': '1'
    },
    '84': {
        'id': 84,
        'name': 'Doduo',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 35,
            'attack': 85,
            'defense': 45,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 75
        },
        'gen': '1'
    },
    '85': {
        'id': 85,
        'name': 'Dodrio',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 110,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 110
        },
        'gen': '1'
    },
    '86': {
        'id': 86,
        'name': 'Seel',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 65,
            'attack': 45,
            'defense': 55,
            'special-attack': 45,
            'special-defense': 70,
            'speed': 45
        },
        'gen': '1'
    },
    '87': {
        'id': 87,
        'name': 'Dewgong',
        'type': [
            'water',
            'ice'
        ],
        'stats': {
            'hp': 90,
            'attack': 70,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 95,
            'speed': 70
        },
        'gen': '1'
    },
    '88': {
        'id': 88,
        'name': 'Grimer',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 25
        },
        'gen': '1'
    },
    '89': {
        'id': 89,
        'name': 'Muk',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 105,
            'attack': 105,
            'defense': 75,
            'special-attack': 65,
            'special-defense': 100,
            'speed': 50
        },
        'gen': '1'
    },
    '90': {
        'id': 90,
        'name': 'Shellder',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 30,
            'attack': 65,
            'defense': 100,
            'special-attack': 45,
            'special-defense': 25,
            'speed': 40
        },
        'gen': '1'
    },
    '91': {
        'id': 91,
        'name': 'Cloyster',
        'type': [
            'water',
            'ice'
        ],
        'stats': {
            'hp': 50,
            'attack': 95,
            'defense': 180,
            'special-attack': 85,
            'special-defense': 45,
            'speed': 70
        },
        'gen': '1'
    },
    '92': {
        'id': 92,
        'name': 'Gastly',
        'type': [
            'ghost',
            'poison'
        ],
        'stats': {
            'hp': 30,
            'attack': 35,
            'defense': 30,
            'special-attack': 100,
            'special-defense': 35,
            'speed': 80
        },
        'gen': '1'
    },
    '93': {
        'id': 93,
        'name': 'Haunter',
        'type': [
            'ghost',
            'poison'
        ],
        'stats': {
            'hp': 45,
            'attack': 50,
            'defense': 45,
            'special-attack': 115,
            'special-defense': 55,
            'speed': 95
        },
        'gen': '1'
    },
    '94': {
        'id': 94,
        'name': 'Gengar',
        'type': [
            'ghost',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 65,
            'defense': 60,
            'special-attack': 130,
            'special-defense': 75,
            'speed': 110
        },
        'gen': '1'
    },
    '95': {
        'id': 95,
        'name': 'Onix',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 35,
            'attack': 45,
            'defense': 160,
            'special-attack': 30,
            'special-defense': 45,
            'speed': 70
        },
        'gen': '1'
    },
    '96': {
        'id': 96,
        'name': 'Drowzee',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 48,
            'defense': 45,
            'special-attack': 43,
            'special-defense': 90,
            'speed': 42
        },
        'gen': '1'
    },
    '97': {
        'id': 97,
        'name': 'Hypno',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 85,
            'attack': 73,
            'defense': 70,
            'special-attack': 73,
            'special-defense': 115,
            'speed': 67
        },
        'gen': '1'
    },
    '98': {
        'id': 98,
        'name': 'Krabby',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 30,
            'attack': 105,
            'defense': 90,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 50
        },
        'gen': '1'
    },
    '99': {
        'id': 99,
        'name': 'Kingler',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 130,
            'defense': 115,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 75
        },
        'gen': '1'
    },
    '100': {
        'id': 100,
        'name': 'Voltorb',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 50,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 100
        },
        'gen': '1'
    },
    '101': {
        'id': 101,
        'name': 'Electrode',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 70,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 150
        },
        'gen': '1'
    },
    '102': {
        'id': 102,
        'name': 'Exeggcute',
        'type': [
            'grass',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 40,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 45,
            'speed': 40
        },
        'gen': '1'
    },
    '103': {
        'id': 103,
        'name': 'Exeggutor',
        'type': [
            'grass',
            'psychic'
        ],
        'stats': {
            'hp': 95,
            'attack': 95,
            'defense': 85,
            'special-attack': 125,
            'special-defense': 75,
            'speed': 55
        },
        'gen': '1'
    },
    '104': {
        'id': 104,
        'name': 'Cubone',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 95,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 35
        },
        'gen': '1'
    },
    '105': {
        'id': 105,
        'name': 'Marowak',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 60,
            'attack': 80,
            'defense': 110,
            'special-attack': 50,
            'special-defense': 80,
            'speed': 45
        },
        'gen': '1'
    },
    '106': {
        'id': 106,
        'name': 'Hitmonlee',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 50,
            'attack': 120,
            'defense': 53,
            'special-attack': 35,
            'special-defense': 110,
            'speed': 87
        },
        'gen': '1'
    },
    '107': {
        'id': 107,
        'name': 'Hitmonchan',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 50,
            'attack': 105,
            'defense': 79,
            'special-attack': 35,
            'special-defense': 110,
            'speed': 76
        },
        'gen': '1'
    },
    '108': {
        'id': 108,
        'name': 'Lickitung',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 90,
            'attack': 55,
            'defense': 75,
            'special-attack': 60,
            'special-defense': 75,
            'speed': 30
        },
        'gen': '1'
    },
    '109': {
        'id': 109,
        'name': 'Koffing',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 65,
            'defense': 95,
            'special-attack': 60,
            'special-defense': 45,
            'speed': 35
        },
        'gen': '1'
    },
    '110': {
        'id': 110,
        'name': 'Weezing',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 120,
            'special-attack': 85,
            'special-defense': 70,
            'speed': 60
        },
        'gen': '1'
    },
    '111': {
        'id': 111,
        'name': 'Rhyhorn',
        'type': [
            'ground',
            'rock'
        ],
        'stats': {
            'hp': 80,
            'attack': 85,
            'defense': 95,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 25
        },
        'gen': '1'
    },
    '112': {
        'id': 112,
        'name': 'Rhydon',
        'type': [
            'ground',
            'rock'
        ],
        'stats': {
            'hp': 105,
            'attack': 130,
            'defense': 120,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 40
        },
        'gen': '1'
    },
    '113': {
        'id': 113,
        'name': 'Chansey',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 250,
            'attack': 5,
            'defense': 5,
            'special-attack': 35,
            'special-defense': 105,
            'speed': 50
        },
        'gen': '1'
    },
    '114': {
        'id': 114,
        'name': 'Tangela',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 65,
            'attack': 55,
            'defense': 115,
            'special-attack': 100,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '1'
    },
    '115': {
        'id': 115,
        'name': 'Kangaskhan',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 105,
            'attack': 95,
            'defense': 80,
            'special-attack': 40,
            'special-defense': 80,
            'speed': 90
        },
        'gen': '1'
    },
    '116': {
        'id': 116,
        'name': 'Horsea',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 30,
            'attack': 40,
            'defense': 70,
            'special-attack': 70,
            'special-defense': 25,
            'speed': 60
        },
        'gen': '1'
    },
    '117': {
        'id': 117,
        'name': 'Seadra',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 65,
            'defense': 95,
            'special-attack': 95,
            'special-defense': 45,
            'speed': 85
        },
        'gen': '1'
    },
    '118': {
        'id': 118,
        'name': 'Goldeen',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 45,
            'attack': 67,
            'defense': 60,
            'special-attack': 35,
            'special-defense': 50,
            'speed': 63
        },
        'gen': '1'
    },
    '119': {
        'id': 119,
        'name': 'Seaking',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 80,
            'attack': 92,
            'defense': 65,
            'special-attack': 65,
            'special-defense': 80,
            'speed': 68
        },
        'gen': '1'
    },
    '120': {
        'id': 120,
        'name': 'Staryu',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 30,
            'attack': 45,
            'defense': 55,
            'special-attack': 70,
            'special-defense': 55,
            'speed': 85
        },
        'gen': '1'
    },
    '121': {
        'id': 121,
        'name': 'Starmie',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 75,
            'defense': 85,
            'special-attack': 100,
            'special-defense': 85,
            'speed': 115
        },
        'gen': '1'
    },
    '122': {
        'id': 122,
        'name': 'Mr-mime',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 65,
            'special-attack': 100,
            'special-defense': 120,
            'speed': 90
        },
        'gen': '1'
    },
    '123': {
        'id': 123,
        'name': 'Scyther',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 110,
            'defense': 80,
            'special-attack': 55,
            'special-defense': 80,
            'speed': 105
        },
        'gen': '1'
    },
    '124': {
        'id': 124,
        'name': 'Jynx',
        'type': [
            'ice',
            'psychic'
        ],
        'stats': {
            'hp': 65,
            'attack': 50,
            'defense': 35,
            'special-attack': 115,
            'special-defense': 95,
            'speed': 95
        },
        'gen': '1'
    },
    '125': {
        'id': 125,
        'name': 'Electabuzz',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 65,
            'attack': 83,
            'defense': 57,
            'special-attack': 95,
            'special-defense': 85,
            'speed': 105
        },
        'gen': '1'
    },
    '126': {
        'id': 126,
        'name': 'Magmar',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 95,
            'defense': 57,
            'special-attack': 100,
            'special-defense': 85,
            'speed': 93
        },
        'gen': '1'
    },
    '127': {
        'id': 127,
        'name': 'Pinsir',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 65,
            'attack': 125,
            'defense': 100,
            'special-attack': 55,
            'special-defense': 70,
            'speed': 85
        },
        'gen': '1'
    },
    '128': {
        'id': 128,
        'name': 'Tauros',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 75,
            'attack': 100,
            'defense': 95,
            'special-attack': 40,
            'special-defense': 70,
            'speed': 110
        },
        'gen': '1'
    },
    '129': {
        'id': 129,
        'name': 'Magikarp',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 20,
            'attack': 10,
            'defense': 55,
            'special-attack': 15,
            'special-defense': 20,
            'speed': 80
        },
        'gen': '1'
    },
    '130': {
        'id': 130,
        'name': 'Gyarados',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 95,
            'attack': 125,
            'defense': 79,
            'special-attack': 60,
            'special-defense': 100,
            'speed': 81
        },
        'gen': '1'
    },
    '131': {
        'id': 131,
        'name': 'Lapras',
        'type': [
            'water',
            'ice'
        ],
        'stats': {
            'hp': 130,
            'attack': 85,
            'defense': 80,
            'special-attack': 85,
            'special-defense': 95,
            'speed': 60
        },
        'gen': '1'
    },
    '132': {
        'id': 132,
        'name': 'Ditto',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 48,
            'attack': 48,
            'defense': 48,
            'special-attack': 48,
            'special-defense': 48,
            'speed': 48
        },
        'gen': '1'
    },
    '133': {
        'id': 133,
        'name': 'Eevee',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 50,
            'special-attack': 45,
            'special-defense': 65,
            'speed': 55
        },
        'gen': '1'
    },
    '134': {
        'id': 134,
        'name': 'Vaporeon',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 130,
            'attack': 65,
            'defense': 60,
            'special-attack': 110,
            'special-defense': 95,
            'speed': 65
        },
        'gen': '1'
    },
    '135': {
        'id': 135,
        'name': 'Jolteon',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 65,
            'attack': 65,
            'defense': 60,
            'special-attack': 110,
            'special-defense': 95,
            'speed': 130
        },
        'gen': '1'
    },
    '136': {
        'id': 136,
        'name': 'Flareon',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 130,
            'defense': 60,
            'special-attack': 95,
            'special-defense': 110,
            'speed': 65
        },
        'gen': '1'
    },
    '137': {
        'id': 137,
        'name': 'Porygon',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 65,
            'attack': 60,
            'defense': 70,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 40
        },
        'gen': '1'
    },
    '138': {
        'id': 138,
        'name': 'Omanyte',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 35,
            'attack': 40,
            'defense': 100,
            'special-attack': 90,
            'special-defense': 55,
            'speed': 35
        },
        'gen': '1'
    },
    '139': {
        'id': 139,
        'name': 'Omastar',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 60,
            'defense': 125,
            'special-attack': 115,
            'special-defense': 70,
            'speed': 55
        },
        'gen': '1'
    },
    '140': {
        'id': 140,
        'name': 'Kabuto',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 30,
            'attack': 80,
            'defense': 90,
            'special-attack': 55,
            'special-defense': 45,
            'speed': 55
        },
        'gen': '1'
    },
    '141': {
        'id': 141,
        'name': 'Kabutops',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 60,
            'attack': 115,
            'defense': 105,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 80
        },
        'gen': '1'
    },
    '142': {
        'id': 142,
        'name': 'Aerodactyl',
        'type': [
            'rock',
            'flying'
        ],
        'stats': {
            'hp': 80,
            'attack': 105,
            'defense': 65,
            'special-attack': 60,
            'special-defense': 75,
            'speed': 130
        },
        'gen': '1'
    },
    '143': {
        'id': 143,
        'name': 'Snorlax',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 160,
            'attack': 110,
            'defense': 65,
            'special-attack': 65,
            'special-defense': 110,
            'speed': 30
        },
        'gen': '1'
    },
    '144': {
        'id': 144,
        'name': 'Articuno',
        'type': [
            'ice',
            'flying'
        ],
        'stats': {
            'hp': 90,
            'attack': 85,
            'defense': 100,
            'special-attack': 95,
            'special-defense': 125,
            'speed': 85
        },
        'gen': '1'
    },
    '145': {
        'id': 145,
        'name': 'Zapdos',
        'type': [
            'electric',
            'flying'
        ],
        'stats': {
            'hp': 90,
            'attack': 90,
            'defense': 85,
            'special-attack': 125,
            'special-defense': 90,
            'speed': 100
        },
        'gen': '1'
    },
    '146': {
        'id': 146,
        'name': 'Moltres',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 90,
            'attack': 100,
            'defense': 90,
            'special-attack': 125,
            'special-defense': 85,
            'speed': 90
        },
        'gen': '1'
    },
    '147': {
        'id': 147,
        'name': 'Dratini',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 41,
            'attack': 64,
            'defense': 45,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 50
        },
        'gen': '1'
    },
    '148': {
        'id': 148,
        'name': 'Dragonair',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 61,
            'attack': 84,
            'defense': 65,
            'special-attack': 70,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '1'
    },
    '149': {
        'id': 149,
        'name': 'Dragonite',
        'type': [
            'dragon',
            'flying'
        ],
        'stats': {
            'hp': 91,
            'attack': 134,
            'defense': 95,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 80
        },
        'gen': '1'
    },
    '150': {
        'id': 150,
        'name': 'Mewtwo',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 106,
            'attack': 110,
            'defense': 90,
            'special-attack': 154,
            'special-defense': 90,
            'speed': 130
        },
        'gen': '1'
    },
    '151': {
        'id': 151,
        'name': 'Mew',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '1'
    },
    '152': {
        'id': 152,
        'name': 'Chikorita',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 45,
            'attack': 49,
            'defense': 65,
            'special-attack': 49,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '2'
    },
    '153': {
        'id': 153,
        'name': 'Bayleef',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 62,
            'defense': 80,
            'special-attack': 63,
            'special-defense': 80,
            'speed': 60
        },
        'gen': '2'
    },
    '154': {
        'id': 154,
        'name': 'Meganium',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 80,
            'attack': 82,
            'defense': 100,
            'special-attack': 83,
            'special-defense': 100,
            'speed': 80
        },
        'gen': '2'
    },
    '155': {
        'id': 155,
        'name': 'Cyndaquil',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 39,
            'attack': 52,
            'defense': 43,
            'special-attack': 60,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '2'
    },
    '156': {
        'id': 156,
        'name': 'Quilava',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 58,
            'attack': 64,
            'defense': 58,
            'special-attack': 80,
            'special-defense': 65,
            'speed': 80
        },
        'gen': '2'
    },
    '157': {
        'id': 157,
        'name': 'Typhlosion',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 78,
            'attack': 84,
            'defense': 78,
            'special-attack': 109,
            'special-defense': 85,
            'speed': 100
        },
        'gen': '2'
    },
    '158': {
        'id': 158,
        'name': 'Totodile',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 64,
            'special-attack': 44,
            'special-defense': 48,
            'speed': 43
        },
        'gen': '2'
    },
    '159': {
        'id': 159,
        'name': 'Croconaw',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 65,
            'attack': 80,
            'defense': 80,
            'special-attack': 59,
            'special-defense': 63,
            'speed': 58
        },
        'gen': '2'
    },
    '160': {
        'id': 160,
        'name': 'Feraligatr',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 85,
            'attack': 105,
            'defense': 100,
            'special-attack': 79,
            'special-defense': 83,
            'speed': 78
        },
        'gen': '2'
    },
    '161': {
        'id': 161,
        'name': 'Sentret',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 35,
            'attack': 46,
            'defense': 34,
            'special-attack': 35,
            'special-defense': 45,
            'speed': 20
        },
        'gen': '2'
    },
    '162': {
        'id': 162,
        'name': 'Furret',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 85,
            'attack': 76,
            'defense': 64,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 90
        },
        'gen': '2'
    },
    '163': {
        'id': 163,
        'name': 'Hoothoot',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 30,
            'defense': 30,
            'special-attack': 36,
            'special-defense': 56,
            'speed': 50
        },
        'gen': '2'
    },
    '164': {
        'id': 164,
        'name': 'Noctowl',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 100,
            'attack': 50,
            'defense': 50,
            'special-attack': 86,
            'special-defense': 96,
            'speed': 70
        },
        'gen': '2'
    },
    '165': {
        'id': 165,
        'name': 'Ledyba',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 20,
            'defense': 30,
            'special-attack': 40,
            'special-defense': 80,
            'speed': 55
        },
        'gen': '2'
    },
    '166': {
        'id': 166,
        'name': 'Ledian',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 35,
            'defense': 50,
            'special-attack': 55,
            'special-defense': 110,
            'speed': 85
        },
        'gen': '2'
    },
    '167': {
        'id': 167,
        'name': 'Spinarak',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 60,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 30
        },
        'gen': '2'
    },
    '168': {
        'id': 168,
        'name': 'Ariados',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 70,
            'attack': 90,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 40
        },
        'gen': '2'
    },
    '169': {
        'id': 169,
        'name': 'Crobat',
        'type': [
            'poison',
            'flying'
        ],
        'stats': {
            'hp': 85,
            'attack': 90,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 130
        },
        'gen': '2'
    },
    '170': {
        'id': 170,
        'name': 'Chinchou',
        'type': [
            'water',
            'electric'
        ],
        'stats': {
            'hp': 75,
            'attack': 38,
            'defense': 38,
            'special-attack': 56,
            'special-defense': 56,
            'speed': 67
        },
        'gen': '2'
    },
    '171': {
        'id': 171,
        'name': 'Lanturn',
        'type': [
            'water',
            'electric'
        ],
        'stats': {
            'hp': 125,
            'attack': 58,
            'defense': 58,
            'special-attack': 76,
            'special-defense': 76,
            'speed': 67
        },
        'gen': '2'
    },
    '172': {
        'id': 172,
        'name': 'Pichu',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 20,
            'attack': 40,
            'defense': 15,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 60
        },
        'gen': '2'
    },
    '173': {
        'id': 173,
        'name': 'Cleffa',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 50,
            'attack': 25,
            'defense': 28,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 15
        },
        'gen': '2'
    },
    '174': {
        'id': 174,
        'name': 'Igglybuff',
        'type': [
            'normal',
            'fairy'
        ],
        'stats': {
            'hp': 90,
            'attack': 30,
            'defense': 15,
            'special-attack': 40,
            'special-defense': 20,
            'speed': 15
        },
        'gen': '2'
    },
    '175': {
        'id': 175,
        'name': 'Togepi',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 35,
            'attack': 20,
            'defense': 65,
            'special-attack': 40,
            'special-defense': 65,
            'speed': 20
        },
        'gen': '2'
    },
    '176': {
        'id': 176,
        'name': 'Togetic',
        'type': [
            'fairy',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 40,
            'defense': 85,
            'special-attack': 80,
            'special-defense': 105,
            'speed': 40
        },
        'gen': '2'
    },
    '177': {
        'id': 177,
        'name': 'Natu',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 50,
            'defense': 45,
            'special-attack': 70,
            'special-defense': 45,
            'speed': 70
        },
        'gen': '2'
    },
    '178': {
        'id': 178,
        'name': 'Xatu',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 75,
            'defense': 70,
            'special-attack': 95,
            'special-defense': 70,
            'speed': 95
        },
        'gen': '2'
    },
    '179': {
        'id': 179,
        'name': 'Mareep',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 55,
            'attack': 40,
            'defense': 40,
            'special-attack': 65,
            'special-defense': 45,
            'speed': 35
        },
        'gen': '2'
    },
    '180': {
        'id': 180,
        'name': 'Flaaffy',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 70,
            'attack': 55,
            'defense': 55,
            'special-attack': 80,
            'special-defense': 60,
            'speed': 45
        },
        'gen': '2'
    },
    '181': {
        'id': 181,
        'name': 'Ampharos',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 90,
            'attack': 75,
            'defense': 85,
            'special-attack': 115,
            'special-defense': 90,
            'speed': 55
        },
        'gen': '2'
    },
    '182': {
        'id': 182,
        'name': 'Bellossom',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 95,
            'special-attack': 90,
            'special-defense': 100,
            'speed': 50
        },
        'gen': '2'
    },
    '183': {
        'id': 183,
        'name': 'Marill',
        'type': [
            'water',
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 20,
            'defense': 50,
            'special-attack': 20,
            'special-defense': 50,
            'speed': 40
        },
        'gen': '2'
    },
    '184': {
        'id': 184,
        'name': 'Azumarill',
        'type': [
            'water',
            'fairy'
        ],
        'stats': {
            'hp': 100,
            'attack': 50,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 80,
            'speed': 50
        },
        'gen': '2'
    },
    '185': {
        'id': 185,
        'name': 'Sudowoodo',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 100,
            'defense': 115,
            'special-attack': 30,
            'special-defense': 65,
            'speed': 30
        },
        'gen': '2'
    },
    '186': {
        'id': 186,
        'name': 'Politoed',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 90,
            'attack': 75,
            'defense': 75,
            'special-attack': 90,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '2'
    },
    '187': {
        'id': 187,
        'name': 'Hoppip',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 35,
            'attack': 35,
            'defense': 40,
            'special-attack': 35,
            'special-defense': 55,
            'speed': 50
        },
        'gen': '2'
    },
    '188': {
        'id': 188,
        'name': 'Skiploom',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 45,
            'defense': 50,
            'special-attack': 45,
            'special-defense': 65,
            'speed': 80
        },
        'gen': '2'
    },
    '189': {
        'id': 189,
        'name': 'Jumpluff',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 55,
            'defense': 70,
            'special-attack': 55,
            'special-defense': 95,
            'speed': 110
        },
        'gen': '2'
    },
    '190': {
        'id': 190,
        'name': 'Aipom',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 70,
            'defense': 55,
            'special-attack': 40,
            'special-defense': 55,
            'speed': 85
        },
        'gen': '2'
    },
    '191': {
        'id': 191,
        'name': 'Sunkern',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 30,
            'attack': 30,
            'defense': 30,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 30
        },
        'gen': '2'
    },
    '192': {
        'id': 192,
        'name': 'Sunflora',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 75,
            'defense': 55,
            'special-attack': 105,
            'special-defense': 85,
            'speed': 30
        },
        'gen': '2'
    },
    '193': {
        'id': 193,
        'name': 'Yanma',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 65,
            'defense': 45,
            'special-attack': 75,
            'special-defense': 45,
            'speed': 95
        },
        'gen': '2'
    },
    '194': {
        'id': 194,
        'name': 'Wooper',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 55,
            'attack': 45,
            'defense': 45,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 15
        },
        'gen': '2'
    },
    '195': {
        'id': 195,
        'name': 'Quagsire',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 95,
            'attack': 85,
            'defense': 85,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 35
        },
        'gen': '2'
    },
    '196': {
        'id': 196,
        'name': 'Espeon',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 65,
            'attack': 65,
            'defense': 60,
            'special-attack': 130,
            'special-defense': 95,
            'speed': 110
        },
        'gen': '2'
    },
    '197': {
        'id': 197,
        'name': 'Umbreon',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 95,
            'attack': 65,
            'defense': 110,
            'special-attack': 60,
            'special-defense': 130,
            'speed': 65
        },
        'gen': '2'
    },
    '198': {
        'id': 198,
        'name': 'Murkrow',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 42,
            'special-attack': 85,
            'special-defense': 42,
            'speed': 91
        },
        'gen': '2'
    },
    '199': {
        'id': 199,
        'name': 'Slowking',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 95,
            'attack': 75,
            'defense': 80,
            'special-attack': 100,
            'special-defense': 110,
            'speed': 30
        },
        'gen': '2'
    },
    '200': {
        'id': 200,
        'name': 'Misdreavus',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 60,
            'special-attack': 85,
            'special-defense': 85,
            'speed': 85
        },
        'gen': '2'
    },
    '201': {
        'id': 201,
        'name': 'Unown',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 48,
            'attack': 72,
            'defense': 48,
            'special-attack': 72,
            'special-defense': 48,
            'speed': 48
        },
        'gen': '2'
    },
    '202': {
        'id': 202,
        'name': 'Wobbuffet',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 190,
            'attack': 33,
            'defense': 58,
            'special-attack': 33,
            'special-defense': 58,
            'speed': 33
        },
        'gen': '2'
    },
    '203': {
        'id': 203,
        'name': 'Girafarig',
        'type': [
            'normal',
            'psychic'
        ],
        'stats': {
            'hp': 70,
            'attack': 80,
            'defense': 65,
            'special-attack': 90,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '2'
    },
    '204': {
        'id': 204,
        'name': 'Pineco',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 90,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 15
        },
        'gen': '2'
    },
    '205': {
        'id': 205,
        'name': 'Forretress',
        'type': [
            'bug',
            'steel'
        ],
        'stats': {
            'hp': 75,
            'attack': 90,
            'defense': 140,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 40
        },
        'gen': '2'
    },
    '206': {
        'id': 206,
        'name': 'Dunsparce',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 100,
            'attack': 70,
            'defense': 70,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '2'
    },
    '207': {
        'id': 207,
        'name': 'Gligar',
        'type': [
            'ground',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 75,
            'defense': 105,
            'special-attack': 35,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '2'
    },
    '208': {
        'id': 208,
        'name': 'Steelix',
        'type': [
            'steel',
            'ground'
        ],
        'stats': {
            'hp': 75,
            'attack': 85,
            'defense': 200,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 30
        },
        'gen': '2'
    },
    '209': {
        'id': 209,
        'name': 'Snubbull',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 60,
            'attack': 80,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 30
        },
        'gen': '2'
    },
    '210': {
        'id': 210,
        'name': 'Granbull',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 90,
            'attack': 120,
            'defense': 75,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 45
        },
        'gen': '2'
    },
    '211': {
        'id': 211,
        'name': 'Qwilfish',
        'type': [
            'water',
            'poison'
        ],
        'stats': {
            'hp': 65,
            'attack': 95,
            'defense': 85,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 85
        },
        'gen': '2'
    },
    '212': {
        'id': 212,
        'name': 'Scizor',
        'type': [
            'bug',
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 130,
            'defense': 100,
            'special-attack': 55,
            'special-defense': 80,
            'speed': 65
        },
        'gen': '2'
    },
    '213': {
        'id': 213,
        'name': 'Shuckle',
        'type': [
            'bug',
            'rock'
        ],
        'stats': {
            'hp': 20,
            'attack': 10,
            'defense': 230,
            'special-attack': 10,
            'special-defense': 230,
            'speed': 5
        },
        'gen': '2'
    },
    '214': {
        'id': 214,
        'name': 'Heracross',
        'type': [
            'bug',
            'fighting'
        ],
        'stats': {
            'hp': 80,
            'attack': 125,
            'defense': 75,
            'special-attack': 40,
            'special-defense': 95,
            'speed': 85
        },
        'gen': '2'
    },
    '215': {
        'id': 215,
        'name': 'Sneasel',
        'type': [
            'dark',
            'ice'
        ],
        'stats': {
            'hp': 55,
            'attack': 95,
            'defense': 55,
            'special-attack': 35,
            'special-defense': 75,
            'speed': 115
        },
        'gen': '2'
    },
    '216': {
        'id': 216,
        'name': 'Teddiursa',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 80,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 40
        },
        'gen': '2'
    },
    '217': {
        'id': 217,
        'name': 'Ursaring',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 90,
            'attack': 130,
            'defense': 75,
            'special-attack': 75,
            'special-defense': 75,
            'speed': 55
        },
        'gen': '2'
    },
    '218': {
        'id': 218,
        'name': 'Slugma',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 40,
            'special-attack': 70,
            'special-defense': 40,
            'speed': 20
        },
        'gen': '2'
    },
    '219': {
        'id': 219,
        'name': 'Magcargo',
        'type': [
            'fire',
            'rock'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 120,
            'special-attack': 90,
            'special-defense': 80,
            'speed': 30
        },
        'gen': '2'
    },
    '220': {
        'id': 220,
        'name': 'Swinub',
        'type': [
            'ice',
            'ground'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 40,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 50
        },
        'gen': '2'
    },
    '221': {
        'id': 221,
        'name': 'Piloswine',
        'type': [
            'ice',
            'ground'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 50
        },
        'gen': '2'
    },
    '222': {
        'id': 222,
        'name': 'Corsola',
        'type': [
            'water',
            'rock'
        ],
        'stats': {
            'hp': 65,
            'attack': 55,
            'defense': 95,
            'special-attack': 65,
            'special-defense': 95,
            'speed': 35
        },
        'gen': '2'
    },
    '223': {
        'id': 223,
        'name': 'Remoraid',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 35,
            'attack': 65,
            'defense': 35,
            'special-attack': 65,
            'special-defense': 35,
            'speed': 65
        },
        'gen': '2'
    },
    '224': {
        'id': 224,
        'name': 'Octillery',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 75,
            'attack': 105,
            'defense': 75,
            'special-attack': 105,
            'special-defense': 75,
            'speed': 45
        },
        'gen': '2'
    },
    '225': {
        'id': 225,
        'name': 'Delibird',
        'type': [
            'ice',
            'flying'
        ],
        'stats': {
            'hp': 45,
            'attack': 55,
            'defense': 45,
            'special-attack': 65,
            'special-defense': 45,
            'speed': 75
        },
        'gen': '2'
    },
    '226': {
        'id': 226,
        'name': 'Mantine',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 85,
            'attack': 40,
            'defense': 70,
            'special-attack': 80,
            'special-defense': 140,
            'speed': 70
        },
        'gen': '2'
    },
    '227': {
        'id': 227,
        'name': 'Skarmory',
        'type': [
            'steel',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 80,
            'defense': 140,
            'special-attack': 40,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '2'
    },
    '228': {
        'id': 228,
        'name': 'Houndour',
        'type': [
            'dark',
            'fire'
        ],
        'stats': {
            'hp': 45,
            'attack': 60,
            'defense': 30,
            'special-attack': 80,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '2'
    },
    '229': {
        'id': 229,
        'name': 'Houndoom',
        'type': [
            'dark',
            'fire'
        ],
        'stats': {
            'hp': 75,
            'attack': 90,
            'defense': 50,
            'special-attack': 110,
            'special-defense': 80,
            'speed': 95
        },
        'gen': '2'
    },
    '230': {
        'id': 230,
        'name': 'Kingdra',
        'type': [
            'water',
            'dragon'
        ],
        'stats': {
            'hp': 75,
            'attack': 95,
            'defense': 95,
            'special-attack': 95,
            'special-defense': 95,
            'speed': 85
        },
        'gen': '2'
    },
    '231': {
        'id': 231,
        'name': 'Phanpy',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 90,
            'attack': 60,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 40
        },
        'gen': '2'
    },
    '232': {
        'id': 232,
        'name': 'Donphan',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 90,
            'attack': 120,
            'defense': 120,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 50
        },
        'gen': '2'
    },
    '233': {
        'id': 233,
        'name': 'Porygon2',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 85,
            'attack': 80,
            'defense': 90,
            'special-attack': 105,
            'special-defense': 95,
            'speed': 60
        },
        'gen': '2'
    },
    '234': {
        'id': 234,
        'name': 'Stantler',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 73,
            'attack': 95,
            'defense': 62,
            'special-attack': 85,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '2'
    },
    '235': {
        'id': 235,
        'name': 'Smeargle',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 20,
            'defense': 35,
            'special-attack': 20,
            'special-defense': 45,
            'speed': 75
        },
        'gen': '2'
    },
    '236': {
        'id': 236,
        'name': 'Tyrogue',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 35,
            'attack': 35,
            'defense': 35,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 35
        },
        'gen': '2'
    },
    '237': {
        'id': 237,
        'name': 'Hitmontop',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 50,
            'attack': 95,
            'defense': 95,
            'special-attack': 35,
            'special-defense': 110,
            'speed': 70
        },
        'gen': '2'
    },
    '238': {
        'id': 238,
        'name': 'Smoochum',
        'type': [
            'ice',
            'psychic'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 15,
            'special-attack': 85,
            'special-defense': 65,
            'speed': 65
        },
        'gen': '2'
    },
    '239': {
        'id': 239,
        'name': 'Elekid',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 45,
            'attack': 63,
            'defense': 37,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 95
        },
        'gen': '2'
    },
    '240': {
        'id': 240,
        'name': 'Magby',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 45,
            'attack': 75,
            'defense': 37,
            'special-attack': 70,
            'special-defense': 55,
            'speed': 83
        },
        'gen': '2'
    },
    '241': {
        'id': 241,
        'name': 'Miltank',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 95,
            'attack': 80,
            'defense': 105,
            'special-attack': 40,
            'special-defense': 70,
            'speed': 100
        },
        'gen': '2'
    },
    '242': {
        'id': 242,
        'name': 'Blissey',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 255,
            'attack': 10,
            'defense': 10,
            'special-attack': 75,
            'special-defense': 135,
            'speed': 55
        },
        'gen': '2'
    },
    '243': {
        'id': 243,
        'name': 'Raikou',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 90,
            'attack': 85,
            'defense': 75,
            'special-attack': 115,
            'special-defense': 100,
            'speed': 115
        },
        'gen': '2'
    },
    '244': {
        'id': 244,
        'name': 'Entei',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 115,
            'attack': 115,
            'defense': 85,
            'special-attack': 90,
            'special-defense': 75,
            'speed': 100
        },
        'gen': '2'
    },
    '245': {
        'id': 245,
        'name': 'Suicune',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 100,
            'attack': 75,
            'defense': 115,
            'special-attack': 90,
            'special-defense': 115,
            'speed': 85
        },
        'gen': '2'
    },
    '246': {
        'id': 246,
        'name': 'Larvitar',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 50,
            'attack': 64,
            'defense': 50,
            'special-attack': 45,
            'special-defense': 50,
            'speed': 41
        },
        'gen': '2'
    },
    '247': {
        'id': 247,
        'name': 'Pupitar',
        'type': [
            'rock',
            'ground'
        ],
        'stats': {
            'hp': 70,
            'attack': 84,
            'defense': 70,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 51
        },
        'gen': '2'
    },
    '248': {
        'id': 248,
        'name': 'Tyranitar',
        'type': [
            'rock',
            'dark'
        ],
        'stats': {
            'hp': 100,
            'attack': 134,
            'defense': 110,
            'special-attack': 95,
            'special-defense': 100,
            'speed': 61
        },
        'gen': '2'
    },
    '249': {
        'id': 249,
        'name': 'Lugia',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 106,
            'attack': 90,
            'defense': 130,
            'special-attack': 90,
            'special-defense': 154,
            'speed': 110
        },
        'gen': '2'
    },
    '250': {
        'id': 250,
        'name': 'Ho-oh',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 106,
            'attack': 130,
            'defense': 90,
            'special-attack': 110,
            'special-defense': 154,
            'speed': 90
        },
        'gen': '2'
    },
	'251': {
        'id': 251,
        'name': 'Celebi',
        'type': [
            'psychic',
            'grass'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '2'
    },
    '252': {
        'id': 252,
        'name': 'Treecko',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 35,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 70
        },
        'gen': '3'
    },
    '253': {
        'id': 253,
        'name': 'Grovyle',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 45,
            'special-attack': 85,
            'special-defense': 65,
            'speed': 95
        },
        'gen': '3'
    },
    '254': {
        'id': 254,
        'name': 'Sceptile',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 65,
            'special-attack': 105,
            'special-defense': 85,
            'speed': 120
        },
        'gen': '3'
    },
    '255': {
        'id': 255,
        'name': 'Torchic',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 45,
            'attack': 60,
            'defense': 40,
            'special-attack': 70,
            'special-defense': 50,
            'speed': 45
        },
        'gen': '3'
    },
    '256': {
        'id': 256,
        'name': 'Combusken',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 60,
            'special-attack': 85,
            'special-defense': 60,
            'speed': 55
        },
        'gen': '3'
    },
    '257': {
        'id': 257,
        'name': 'Blaziken',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 70,
            'special-attack': 110,
            'special-defense': 70,
            'speed': 80
        },
        'gen': '3'
    },
    '258': {
        'id': 258,
        'name': 'Mudkip',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 70,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 40
        },
        'gen': '3'
    },
    '259': {
        'id': 259,
        'name': 'Marshtomp',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 50
        },
        'gen': '3'
    },
    '260': {
        'id': 260,
        'name': 'Swampert',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 100,
            'attack': 110,
            'defense': 90,
            'special-attack': 85,
            'special-defense': 90,
            'speed': 60
        },
        'gen': '3'
    },
    '261': {
        'id': 261,
        'name': 'Poochyena',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 35,
            'attack': 55,
            'defense': 35,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 35
        },
        'gen': '3'
    },
    '262': {
        'id': 262,
        'name': 'Mightyena',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 90,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 70
        },
        'gen': '3'
    },
    '263': {
        'id': 263,
        'name': 'Zigzagoon',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 38,
            'attack': 30,
            'defense': 41,
            'special-attack': 30,
            'special-defense': 41,
            'speed': 60
        },
        'gen': '3'
    },
    '264': {
        'id': 264,
        'name': 'Linoone',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 78,
            'attack': 70,
            'defense': 61,
            'special-attack': 50,
            'special-defense': 61,
            'speed': 100
        },
        'gen': '3'
    },
    '265': {
        'id': 265,
        'name': 'Wurmple',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 45,
            'attack': 45,
            'defense': 35,
            'special-attack': 20,
            'special-defense': 30,
            'speed': 20
        },
        'gen': '3'
    },
    '266': {
        'id': 266,
        'name': 'Silcoon',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 35,
            'defense': 55,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 15
        },
        'gen': '3'
    },
    '267': {
        'id': 267,
        'name': 'Beautifly',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 70,
            'defense': 50,
            'special-attack': 100,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '3'
    },
    '268': {
        'id': 268,
        'name': 'Cascoon',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 35,
            'defense': 55,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 15
        },
        'gen': '3'
    },
    '269': {
        'id': 269,
        'name': 'Dustox',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 70,
            'special-attack': 50,
            'special-defense': 90,
            'speed': 65
        },
        'gen': '3'
    },
    '270': {
        'id': 270,
        'name': 'Lotad',
        'type': [
            'water',
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 30,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 30
        },
        'gen': '3'
    },
    '271': {
        'id': 271,
        'name': 'Lombre',
        'type': [
            'water',
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 50,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 50
        },
        'gen': '3'
    },
    '272': {
        'id': 272,
        'name': 'Ludicolo',
        'type': [
            'water',
            'grass'
        ],
        'stats': {
            'hp': 80,
            'attack': 70,
            'defense': 70,
            'special-attack': 90,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '3'
    },
    '273': {
        'id': 273,
        'name': 'Seedot',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 50,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 30
        },
        'gen': '3'
    },
    '274': {
        'id': 274,
        'name': 'Nuzleaf',
        'type': [
            'grass',
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 70,
            'defense': 40,
            'special-attack': 60,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '3'
    },
    '275': {
        'id': 275,
        'name': 'Shiftry',
        'type': [
            'grass',
            'dark'
        ],
        'stats': {
            'hp': 90,
            'attack': 100,
            'defense': 60,
            'special-attack': 90,
            'special-defense': 60,
            'speed': 80
        },
        'gen': '3'
    },
    '276': {
        'id': 276,
        'name': 'Taillow',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 30,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 85
        },
        'gen': '3'
    },
    '277': {
        'id': 277,
        'name': 'Swellow',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 60,
            'special-attack': 75,
            'special-defense': 50,
            'speed': 125
        },
        'gen': '3'
    },
    '278': {
        'id': 278,
        'name': 'Wingull',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 30,
            'special-attack': 55,
            'special-defense': 30,
            'speed': 85
        },
        'gen': '3'
    },
    '279': {
        'id': 279,
        'name': 'Pelipper',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 100,
            'special-attack': 95,
            'special-defense': 70,
            'speed': 65
        },
        'gen': '3'
    },
    '280': {
        'id': 280,
        'name': 'Ralts',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 28,
            'attack': 25,
            'defense': 25,
            'special-attack': 45,
            'special-defense': 35,
            'speed': 40
        },
        'gen': '3'
    },
    '281': {
        'id': 281,
        'name': 'Kirlia',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 38,
            'attack': 35,
            'defense': 35,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 50
        },
        'gen': '3'
    },
    '282': {
        'id': 282,
        'name': 'Gardevoir',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 68,
            'attack': 65,
            'defense': 65,
            'special-attack': 125,
            'special-defense': 115,
            'speed': 80
        },
        'gen': '3'
    },
    '283': {
        'id': 283,
        'name': 'Surskit',
        'type': [
            'bug',
            'water'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 32,
            'special-attack': 50,
            'special-defense': 52,
            'speed': 65
        },
        'gen': '3'
    },
    '284': {
        'id': 284,
        'name': 'Masquerain',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 60,
            'defense': 62,
            'special-attack': 100,
            'special-defense': 82,
            'speed': 80
        },
        'gen': '3'
    },
    '285': {
        'id': 285,
        'name': 'Shroomish',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 40,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 60,
            'speed': 35
        },
        'gen': '3'
    },
    '286': {
        'id': 286,
        'name': 'Breloom',
        'type': [
            'grass',
            'fighting'
        ],
        'stats': {
            'hp': 60,
            'attack': 130,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 70
        },
        'gen': '3'
    },
    '287': {
        'id': 287,
        'name': 'Slakoth',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 60,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 30
        },
        'gen': '3'
    },
    '288': {
        'id': 288,
        'name': 'Vigoroth',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 80,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 90
        },
        'gen': '3'
    },
    '289': {
        'id': 289,
        'name': 'Slaking',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 150,
            'attack': 160,
            'defense': 100,
            'special-attack': 95,
            'special-defense': 65,
            'speed': 100
        },
        'gen': '3'
    },
    '290': {
        'id': 290,
        'name': 'Nincada',
        'type': [
            'bug',
            'ground'
        ],
        'stats': {
            'hp': 31,
            'attack': 45,
            'defense': 90,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 40
        },
        'gen': '3'
    },
    '291': {
        'id': 291,
        'name': 'Ninjask',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 61,
            'attack': 90,
            'defense': 45,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 160
        },
        'gen': '3'
    },
    '292': {
        'id': 292,
        'name': 'Shedinja',
        'type': [
            'bug',
            'ghost'
        ],
        'stats': {
            'hp': 1,
            'attack': 90,
            'defense': 45,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 40
        },
        'gen': '3'
    },
    '293': {
        'id': 293,
        'name': 'Whismur',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 64,
            'attack': 51,
            'defense': 23,
            'special-attack': 51,
            'special-defense': 23,
            'speed': 28
        },
        'gen': '3'
    },
    '294': {
        'id': 294,
        'name': 'Loudred',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 84,
            'attack': 71,
            'defense': 43,
            'special-attack': 71,
            'special-defense': 43,
            'speed': 48
        },
        'gen': '3'
    },
    '295': {
        'id': 295,
        'name': 'Exploud',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 104,
            'attack': 91,
            'defense': 63,
            'special-attack': 91,
            'special-defense': 73,
            'speed': 68
        },
        'gen': '3'
    },
    '296': {
        'id': 296,
        'name': 'Makuhita',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 72,
            'attack': 60,
            'defense': 30,
            'special-attack': 20,
            'special-defense': 30,
            'speed': 25
        },
        'gen': '3'
    },
    '297': {
        'id': 297,
        'name': 'Hariyama',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 144,
            'attack': 120,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 60,
            'speed': 50
        },
        'gen': '3'
    },
    '298': {
        'id': 298,
        'name': 'Azurill',
        'type': [
            'normal',
            'fairy'
        ],
        'stats': {
            'hp': 50,
            'attack': 20,
            'defense': 40,
            'special-attack': 20,
            'special-defense': 40,
            'speed': 20
        },
        'gen': '3'
    },
    '299': {
        'id': 299,
        'name': 'Nosepass',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 30,
            'attack': 45,
            'defense': 135,
            'special-attack': 45,
            'special-defense': 90,
            'speed': 30
        },
        'gen': '3'
    },
    '300': {
        'id': 300,
        'name': 'Skitty',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 50,
            'attack': 45,
            'defense': 45,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 50
        },
        'gen': '3'
    },
    '301': {
        'id': 301,
        'name': 'Delcatty',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 70,
            'attack': 65,
            'defense': 65,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 90
        },
        'gen': '3'
    },
    '302': {
        'id': 302,
        'name': 'Sableye',
        'type': [
            'dark',
            'ghost'
        ],
        'stats': {
            'hp': 50,
            'attack': 75,
            'defense': 75,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 50
        },
        'gen': '3'
    },
    '303': {
        'id': 303,
        'name': 'Mawile',
        'type': [
            'steel',
            'fairy'
        ],
        'stats': {
            'hp': 50,
            'attack': 85,
            'defense': 85,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 50
        },
        'gen': '3'
    },
    '304': {
        'id': 304,
        'name': 'Aron',
        'type': [
            'steel',
            'rock'
        ],
        'stats': {
            'hp': 50,
            'attack': 70,
            'defense': 100,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 30
        },
        'gen': '3'
    },
    '305': {
        'id': 305,
        'name': 'Lairon',
        'type': [
            'steel',
            'rock'
        ],
        'stats': {
            'hp': 60,
            'attack': 90,
            'defense': 140,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 40
        },
        'gen': '3'
    },
    '306': {
        'id': 306,
        'name': 'Aggron',
        'type': [
            'steel',
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 110,
            'defense': 180,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 50
        },
        'gen': '3'
    },
    '307': {
        'id': 307,
        'name': 'Meditite',
        'type': [
            'fighting',
            'psychic'
        ],
        'stats': {
            'hp': 30,
            'attack': 40,
            'defense': 55,
            'special-attack': 40,
            'special-defense': 55,
            'speed': 60
        },
        'gen': '3'
    },
    '308': {
        'id': 308,
        'name': 'Medicham',
        'type': [
            'fighting',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 75,
            'special-attack': 60,
            'special-defense': 75,
            'speed': 80
        },
        'gen': '3'
    },
    '309': {
        'id': 309,
        'name': 'Electrike',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 40,
            'special-attack': 65,
            'special-defense': 40,
            'speed': 65
        },
        'gen': '3'
    },
    '310': {
        'id': 310,
        'name': 'Manectric',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 70,
            'attack': 75,
            'defense': 60,
            'special-attack': 105,
            'special-defense': 60,
            'speed': 105
        },
        'gen': '3'
    },
    '311': {
        'id': 311,
        'name': 'Plusle',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 40,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 95
        },
        'gen': '3'
    },
    '312': {
        'id': 312,
        'name': 'Minun',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 40,
            'defense': 50,
            'special-attack': 75,
            'special-defense': 85,
            'speed': 95
        },
        'gen': '3'
    },
    '313': {
        'id': 313,
        'name': 'Volbeat',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 65,
            'attack': 73,
            'defense': 75,
            'special-attack': 47,
            'special-defense': 85,
            'speed': 85
        },
        'gen': '3'
    },
    '314': {
        'id': 314,
        'name': 'Illumise',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 65,
            'attack': 47,
            'defense': 75,
            'special-attack': 73,
            'special-defense': 85,
            'speed': 85
        },
        'gen': '3'
    },
    '315': {
        'id': 315,
        'name': 'Roselia',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 50,
            'attack': 60,
            'defense': 45,
            'special-attack': 100,
            'special-defense': 80,
            'speed': 65
        },
        'gen': '3'
    },
    '316': {
        'id': 316,
        'name': 'Gulpin',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 70,
            'attack': 43,
            'defense': 53,
            'special-attack': 43,
            'special-defense': 53,
            'speed': 40
        },
        'gen': '3'
    },
    '317': {
        'id': 317,
        'name': 'Swalot',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 100,
            'attack': 73,
            'defense': 83,
            'special-attack': 73,
            'special-defense': 83,
            'speed': 55
        },
        'gen': '3'
    },
    '318': {
        'id': 318,
        'name': 'Carvanha',
        'type': [
            'water',
            'dark'
        ],
        'stats': {
            'hp': 45,
            'attack': 90,
            'defense': 20,
            'special-attack': 65,
            'special-defense': 20,
            'speed': 65
        },
        'gen': '3'
    },
    '319': {
        'id': 319,
        'name': 'Sharpedo',
        'type': [
            'water',
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 120,
            'defense': 40,
            'special-attack': 95,
            'special-defense': 40,
            'speed': 95
        },
        'gen': '3'
    },
    '320': {
        'id': 320,
        'name': 'Wailmer',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 130,
            'attack': 70,
            'defense': 35,
            'special-attack': 70,
            'special-defense': 35,
            'speed': 60
        },
        'gen': '3'
    },
    '321': {
        'id': 321,
        'name': 'Wailord',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 170,
            'attack': 90,
            'defense': 45,
            'special-attack': 90,
            'special-defense': 45,
            'speed': 60
        },
        'gen': '3'
    },
    '322': {
        'id': 322,
        'name': 'Numel',
        'type': [
            'fire',
            'ground'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 40,
            'special-attack': 65,
            'special-defense': 45,
            'speed': 35
        },
        'gen': '3'
    },
    '323': {
        'id': 323,
        'name': 'Camerupt',
        'type': [
            'fire',
            'ground'
        ],
        'stats': {
            'hp': 70,
            'attack': 100,
            'defense': 70,
            'special-attack': 105,
            'special-defense': 75,
            'speed': 40
        },
        'gen': '3'
    },
    '324': {
        'id': 324,
        'name': 'Torkoal',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 140,
            'special-attack': 85,
            'special-defense': 70,
            'speed': 20
        },
        'gen': '3'
    },
    '325': {
        'id': 325,
        'name': 'Spoink',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 25,
            'defense': 35,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 60
        },
        'gen': '3'
    },
    '326': {
        'id': 326,
        'name': 'Grumpig',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 45,
            'defense': 65,
            'special-attack': 90,
            'special-defense': 110,
            'speed': 80
        },
        'gen': '3'
    },
    '327': {
        'id': 327,
        'name': 'Spinda',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 60,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 60
        },
        'gen': '3'
    },
    '328': {
        'id': 328,
        'name': 'Trapinch',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 45,
            'attack': 100,
            'defense': 45,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 10
        },
        'gen': '3'
    },
    '329': {
        'id': 329,
        'name': 'Vibrava',
        'type': [
            'ground',
            'dragon'
        ],
        'stats': {
            'hp': 50,
            'attack': 70,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 70
        },
        'gen': '3'
    },
    '330': {
        'id': 330,
        'name': 'Flygon',
        'type': [
            'ground',
            'dragon'
        ],
        'stats': {
            'hp': 80,
            'attack': 100,
            'defense': 80,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 100
        },
        'gen': '3'
    },
    '331': {
        'id': 331,
        'name': 'Cacnea',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 50,
            'attack': 85,
            'defense': 40,
            'special-attack': 85,
            'special-defense': 40,
            'speed': 35
        },
        'gen': '3'
    },
    '332': {
        'id': 332,
        'name': 'Cacturne',
        'type': [
            'grass',
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 115,
            'defense': 60,
            'special-attack': 115,
            'special-defense': 60,
            'speed': 55
        },
        'gen': '3'
    },
    '333': {
        'id': 333,
        'name': 'Swablu',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 45,
            'attack': 40,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 75,
            'speed': 50
        },
        'gen': '3'
    },
    '334': {
        'id': 334,
        'name': 'Altaria',
        'type': [
            'dragon',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 70,
            'defense': 90,
            'special-attack': 70,
            'special-defense': 105,
            'speed': 80
        },
        'gen': '3'
    },
    '335': {
        'id': 335,
        'name': 'Zangoose',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 73,
            'attack': 115,
            'defense': 60,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 90
        },
        'gen': '3'
    },
    '336': {
        'id': 336,
        'name': 'Seviper',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 73,
            'attack': 100,
            'defense': 60,
            'special-attack': 100,
            'special-defense': 60,
            'speed': 65
        },
        'gen': '3'
    },
    '337': {
        'id': 337,
        'name': 'Lunatone',
        'type': [
            'rock',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 55,
            'defense': 65,
            'special-attack': 95,
            'special-defense': 85,
            'speed': 70
        },
        'gen': '3'
    },
    '338': {
        'id': 338,
        'name': 'Solrock',
        'type': [
            'rock',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 95,
            'defense': 85,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 70
        },
        'gen': '3'
    },
    '339': {
        'id': 339,
        'name': 'Barboach',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 50,
            'attack': 48,
            'defense': 43,
            'special-attack': 46,
            'special-defense': 41,
            'speed': 60
        },
        'gen': '3'
    },
    '340': {
        'id': 340,
        'name': 'Whiscash',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 110,
            'attack': 78,
            'defense': 73,
            'special-attack': 76,
            'special-defense': 71,
            'speed': 60
        },
        'gen': '3'
    },
    '341': {
        'id': 341,
        'name': 'Corphish',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 43,
            'attack': 80,
            'defense': 65,
            'special-attack': 50,
            'special-defense': 35,
            'speed': 35
        },
        'gen': '3'
    },
    '342': {
        'id': 342,
        'name': 'Crawdaunt',
        'type': [
            'water',
            'dark'
        ],
        'stats': {
            'hp': 63,
            'attack': 120,
            'defense': 85,
            'special-attack': 90,
            'special-defense': 55,
            'speed': 55
        },
        'gen': '3'
    },
    '343': {
        'id': 343,
        'name': 'Baltoy',
        'type': [
            'ground',
            'psychic'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 55,
            'special-attack': 40,
            'special-defense': 70,
            'speed': 55
        },
        'gen': '3'
    },
    '344': {
        'id': 344,
        'name': 'Claydol',
        'type': [
            'ground',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 70,
            'defense': 105,
            'special-attack': 70,
            'special-defense': 120,
            'speed': 75
        },
        'gen': '3'
    },
    '345': {
        'id': 345,
        'name': 'Lileep',
        'type': [
            'rock',
            'grass'
        ],
        'stats': {
            'hp': 66,
            'attack': 41,
            'defense': 77,
            'special-attack': 61,
            'special-defense': 87,
            'speed': 23
        },
        'gen': '3'
    },
    '346': {
        'id': 346,
        'name': 'Cradily',
        'type': [
            'rock',
            'grass'
        ],
        'stats': {
            'hp': 86,
            'attack': 81,
            'defense': 97,
            'special-attack': 81,
            'special-defense': 107,
            'speed': 43
        },
        'gen': '3'
    },
    '347': {
        'id': 347,
        'name': 'Anorith',
        'type': [
            'rock',
            'bug'
        ],
        'stats': {
            'hp': 45,
            'attack': 95,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 75
        },
        'gen': '3'
    },
    '348': {
        'id': 348,
        'name': 'Armaldo',
        'type': [
            'rock',
            'bug'
        ],
        'stats': {
            'hp': 75,
            'attack': 125,
            'defense': 100,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 45
        },
        'gen': '3'
    },
    '349': {
        'id': 349,
        'name': 'Feebas',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 20,
            'attack': 15,
            'defense': 20,
            'special-attack': 10,
            'special-defense': 55,
            'speed': 80
        },
        'gen': '3'
    },
    '350': {
        'id': 350,
        'name': 'Milotic',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 95,
            'attack': 60,
            'defense': 79,
            'special-attack': 100,
            'special-defense': 125,
            'speed': 81
        },
        'gen': '3'
    },
    '351': {
        'id': 351,
        'name': 'Castform',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 70,
            'attack': 70,
            'defense': 70,
            'special-attack': 70,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '3'
    },
    '352': {
        'id': 352,
        'name': 'Kecleon',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 90,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 120,
            'speed': 40
        },
        'gen': '3'
    },
    '353': {
        'id': 353,
        'name': 'Shuppet',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 44,
            'attack': 75,
            'defense': 35,
            'special-attack': 63,
            'special-defense': 33,
            'speed': 45
        },
        'gen': '3'
    },
    '354': {
        'id': 354,
        'name': 'Banette',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 64,
            'attack': 115,
            'defense': 65,
            'special-attack': 83,
            'special-defense': 63,
            'speed': 65
        },
        'gen': '3'
    },
    '355': {
        'id': 355,
        'name': 'Duskull',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 20,
            'attack': 40,
            'defense': 90,
            'special-attack': 30,
            'special-defense': 90,
            'speed': 25
        },
        'gen': '3'
    },
    '356': {
        'id': 356,
        'name': 'Dusclops',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 40,
            'attack': 70,
            'defense': 130,
            'special-attack': 60,
            'special-defense': 130,
            'speed': 25
        },
        'gen': '3'
    },
    '357': {
        'id': 357,
        'name': 'Tropius',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 99,
            'attack': 68,
            'defense': 83,
            'special-attack': 72,
            'special-defense': 87,
            'speed': 51
        },
        'gen': '3'
    },
    '358': {
        'id': 358,
        'name': 'Chimecho',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 50,
            'defense': 80,
            'special-attack': 95,
            'special-defense': 90,
            'speed': 65
        },
        'gen': '3'
    },
    '359': {
        'id': 359,
        'name': 'Absol',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 65,
            'attack': 130,
            'defense': 60,
            'special-attack': 75,
            'special-defense': 60,
            'speed': 75
        },
        'gen': '3'
    },
    '360': {
        'id': 360,
        'name': 'Wynaut',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 95,
            'attack': 23,
            'defense': 48,
            'special-attack': 23,
            'special-defense': 48,
            'speed': 23
        },
        'gen': '3'
    },
    '361': {
        'id': 361,
        'name': 'Snorunt',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 50
        },
        'gen': '3'
    },
    '362': {
        'id': 362,
        'name': 'Glalie',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 80,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 80
        },
        'gen': '3'
    },
    '363': {
        'id': 363,
        'name': 'Spheal',
        'type': [
            'ice',
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 40,
            'defense': 50,
            'special-attack': 55,
            'special-defense': 50,
            'speed': 25
        },
        'gen': '3'
    },
    '364': {
        'id': 364,
        'name': 'Sealeo',
        'type': [
            'ice',
            'water'
        ],
        'stats': {
            'hp': 90,
            'attack': 60,
            'defense': 70,
            'special-attack': 75,
            'special-defense': 70,
            'speed': 45
        },
        'gen': '3'
    },
    '365': {
        'id': 365,
        'name': 'Walrein',
        'type': [
            'ice',
            'water'
        ],
        'stats': {
            'hp': 110,
            'attack': 80,
            'defense': 90,
            'special-attack': 95,
            'special-defense': 90,
            'speed': 65
        },
        'gen': '3'
    },
    '366': {
        'id': 366,
        'name': 'Clamperl',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 35,
            'attack': 64,
            'defense': 85,
            'special-attack': 74,
            'special-defense': 55,
            'speed': 32
        },
        'gen': '3'
    },
    '367': {
        'id': 367,
        'name': 'Huntail',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 104,
            'defense': 105,
            'special-attack': 94,
            'special-defense': 75,
            'speed': 52
        },
        'gen': '3'
    },
    '368': {
        'id': 368,
        'name': 'Gorebyss',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 84,
            'defense': 105,
            'special-attack': 114,
            'special-defense': 75,
            'speed': 52
        },
        'gen': '3'
    },
    '369': {
        'id': 369,
        'name': 'Relicanth',
        'type': [
            'water',
            'rock'
        ],
        'stats': {
            'hp': 100,
            'attack': 90,
            'defense': 130,
            'special-attack': 45,
            'special-defense': 65,
            'speed': 55
        },
        'gen': '3'
    },
    '370': {
        'id': 370,
        'name': 'Luvdisc',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 43,
            'attack': 30,
            'defense': 55,
            'special-attack': 40,
            'special-defense': 65,
            'speed': 97
        },
        'gen': '3'
    },
    '371': {
        'id': 371,
        'name': 'Bagon',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 45,
            'attack': 75,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 30,
            'speed': 50
        },
        'gen': '3'
    },
    '372': {
        'id': 372,
        'name': 'Shelgon',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 65,
            'attack': 95,
            'defense': 100,
            'special-attack': 60,
            'special-defense': 50,
            'speed': 50
        },
        'gen': '3'
    },
    '373': {
        'id': 373,
        'name': 'Salamence',
        'type': [
            'dragon',
            'flying'
        ],
        'stats': {
            'hp': 95,
            'attack': 135,
            'defense': 80,
            'special-attack': 110,
            'special-defense': 80,
            'speed': 100
        },
        'gen': '3'
    },
    '374': {
        'id': 374,
        'name': 'Beldum',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 80,
            'special-attack': 35,
            'special-defense': 60,
            'speed': 30
        },
        'gen': '3'
    },
    '375': {
        'id': 375,
        'name': 'Metang',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 75,
            'defense': 100,
            'special-attack': 55,
            'special-defense': 80,
            'speed': 50
        },
        'gen': '3'
    },
    '376': {
        'id': 376,
        'name': 'Metagross',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 135,
            'defense': 130,
            'special-attack': 95,
            'special-defense': 90,
            'speed': 70
        },
        'gen': '3'
    },
    '377': {
        'id': 377,
        'name': 'Regirock',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 80,
            'attack': 100,
            'defense': 200,
            'special-attack': 50,
            'special-defense': 100,
            'speed': 50
        },
        'gen': '3'
    },
    '378': {
        'id': 378,
        'name': 'Regice',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 80,
            'attack': 50,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 200,
            'speed': 50
        },
        'gen': '3'
    },
    '379': {
        'id': 379,
        'name': 'Registeel',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 80,
            'attack': 75,
            'defense': 150,
            'special-attack': 75,
            'special-defense': 150,
            'speed': 50
        },
        'gen': '3'
    },
    '380': {
        'id': 380,
        'name': 'Latias',
        'type': [
            'dragon',
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 90,
            'special-attack': 110,
            'special-defense': 130,
            'speed': 110
        },
        'gen': '3'
    },
    '381': {
        'id': 381,
        'name': 'Latios',
        'type': [
            'dragon',
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 90,
            'defense': 80,
            'special-attack': 130,
            'special-defense': 110,
            'speed': 110
        },
        'gen': '3'
    },
    '382': {
        'id': 382,
        'name': 'Kyogre',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 90,
            'special-attack': 150,
            'special-defense': 140,
            'speed': 90
        },
        'gen': '3'
    },
    '383': {
        'id': 383,
        'name': 'Groudon',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 100,
            'attack': 150,
            'defense': 140,
            'special-attack': 100,
            'special-defense': 90,
            'speed': 90
        },
        'gen': '3'
    },
    '384': {
        'id': 384,
        'name': 'Rayquaza',
        'type': [
            'dragon',
            'flying'
        ],
        'stats': {
            'hp': 105,
            'attack': 150,
            'defense': 90,
            'special-attack': 150,
            'special-defense': 90,
            'speed': 95
        },
        'gen': '3'
    },
    '385': {
        'id': 385,
        'name': 'Jirachi',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '3'
    },
    '386': {
        'id': 386,
        'name': 'Deoxys-normal',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 50,
            'attack': 150,
            'defense': 50,
            'special-attack': 150,
            'special-defense': 50,
            'speed': 150
        },
        'gen': '3'
    },
    '387': {
        'id': 387,
        'name': 'Turtwig',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 55,
            'attack': 68,
            'defense': 64,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 31
        },
        'gen': '4'
    },
    '388': {
        'id': 388,
        'name': 'Grotle',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 89,
            'defense': 85,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 36
        },
        'gen': '4'
    },
    '389': {
        'id': 389,
        'name': 'Torterra',
        'type': [
            'grass',
            'ground'
        ],
        'stats': {
            'hp': 95,
            'attack': 109,
            'defense': 105,
            'special-attack': 75,
            'special-defense': 85,
            'speed': 56
        },
        'gen': '4'
    },
    '390': {
        'id': 390,
        'name': 'Chimchar',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 44,
            'attack': 58,
            'defense': 44,
            'special-attack': 58,
            'special-defense': 44,
            'speed': 61
        },
        'gen': '4'
    },
    '391': {
        'id': 391,
        'name': 'Monferno',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 64,
            'attack': 78,
            'defense': 52,
            'special-attack': 78,
            'special-defense': 52,
            'speed': 81
        },
        'gen': '4'
    },
    '392': {
        'id': 392,
        'name': 'Infernape',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 76,
            'attack': 104,
            'defense': 71,
            'special-attack': 104,
            'special-defense': 71,
            'speed': 108
        },
        'gen': '4'
    },
    '393': {
        'id': 393,
        'name': 'Piplup',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 53,
            'attack': 51,
            'defense': 53,
            'special-attack': 61,
            'special-defense': 56,
            'speed': 40
        },
        'gen': '4'
    },
    '394': {
        'id': 394,
        'name': 'Prinplup',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 64,
            'attack': 66,
            'defense': 68,
            'special-attack': 81,
            'special-defense': 76,
            'speed': 50
        },
        'gen': '4'
    },
    '395': {
        'id': 395,
        'name': 'Empoleon',
        'type': [
            'water',
            'steel'
        ],
        'stats': {
            'hp': 84,
            'attack': 86,
            'defense': 88,
            'special-attack': 111,
            'special-defense': 101,
            'speed': 60
        },
        'gen': '4'
    },
    '396': {
        'id': 396,
        'name': 'Starly',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 30,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 60
        },
        'gen': '4'
    },
    '397': {
        'id': 397,
        'name': 'Staravia',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 75,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 80
        },
        'gen': '4'
    },
    '398': {
        'id': 398,
        'name': 'Staraptor',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 85,
            'attack': 120,
            'defense': 70,
            'special-attack': 50,
            'special-defense': 60,
            'speed': 100
        },
        'gen': '4'
    },
    '399': {
        'id': 399,
        'name': 'Bidoof',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 59,
            'attack': 45,
            'defense': 40,
            'special-attack': 35,
            'special-defense': 40,
            'speed': 31
        },
        'gen': '4'
    },
    '400': {
        'id': 400,
        'name': 'Bibarel',
        'type': [
            'normal',
            'water'
        ],
        'stats': {
            'hp': 79,
            'attack': 85,
            'defense': 60,
            'special-attack': 55,
            'special-defense': 60,
            'speed': 71
        },
        'gen': '4'
    },
    '401': {
        'id': 401,
        'name': 'Kricketot',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 37,
            'attack': 25,
            'defense': 41,
            'special-attack': 25,
            'special-defense': 41,
            'speed': 25
        },
        'gen': '4'
    },
    '402': {
        'id': 402,
        'name': 'Kricketune',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 77,
            'attack': 85,
            'defense': 51,
            'special-attack': 55,
            'special-defense': 51,
            'speed': 65
        },
        'gen': '4'
    },
    '403': {
        'id': 403,
        'name': 'Shinx',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 45,
            'attack': 65,
            'defense': 34,
            'special-attack': 40,
            'special-defense': 34,
            'speed': 45
        },
        'gen': '4'
    },
    '404': {
        'id': 404,
        'name': 'Luxio',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 49,
            'special-attack': 60,
            'special-defense': 49,
            'speed': 60
        },
        'gen': '4'
    },
    '405': {
        'id': 405,
        'name': 'Luxray',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 79,
            'special-attack': 95,
            'special-defense': 79,
            'speed': 70
        },
        'gen': '4'
    },
    '406': {
        'id': 406,
        'name': 'Budew',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 35,
            'special-attack': 50,
            'special-defense': 70,
            'speed': 55
        },
        'gen': '4'
    },
    '407': {
        'id': 407,
        'name': 'Roserade',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 70,
            'defense': 65,
            'special-attack': 125,
            'special-defense': 105,
            'speed': 90
        },
        'gen': '4'
    },
    '408': {
        'id': 408,
        'name': 'Cranidos',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 67,
            'attack': 125,
            'defense': 40,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 58
        },
        'gen': '4'
    },
    '409': {
        'id': 409,
        'name': 'Rampardos',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 97,
            'attack': 165,
            'defense': 60,
            'special-attack': 65,
            'special-defense': 50,
            'speed': 58
        },
        'gen': '4'
    },
    '410': {
        'id': 410,
        'name': 'Shieldon',
        'type': [
            'rock',
            'steel'
        ],
        'stats': {
            'hp': 30,
            'attack': 42,
            'defense': 118,
            'special-attack': 42,
            'special-defense': 88,
            'speed': 30
        },
        'gen': '4'
    },
    '411': {
        'id': 411,
        'name': 'Bastiodon',
        'type': [
            'rock',
            'steel'
        ],
        'stats': {
            'hp': 60,
            'attack': 52,
            'defense': 168,
            'special-attack': 47,
            'special-defense': 138,
            'speed': 30
        },
        'gen': '4'
    },
    '412': {
        'id': 412,
        'name': 'Burmy',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 40,
            'attack': 29,
            'defense': 45,
            'special-attack': 29,
            'special-defense': 45,
            'speed': 36
        },
        'gen': '4'
    },
    '413': {
        'id': 413,
        'name': 'Wormadam-plant',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 59,
            'defense': 85,
            'special-attack': 79,
            'special-defense': 105,
            'speed': 36
        },
        'gen': '4'
    },
    '414': {
        'id': 414,
        'name': 'Mothim',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 94,
            'defense': 50,
            'special-attack': 94,
            'special-defense': 50,
            'speed': 66
        },
        'gen': '4'
    },
    '415': {
        'id': 415,
        'name': 'Combee',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 30,
            'attack': 30,
            'defense': 42,
            'special-attack': 30,
            'special-defense': 42,
            'speed': 70
        },
        'gen': '4'
    },
    '416': {
        'id': 416,
        'name': 'Vespiquen',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 80,
            'defense': 102,
            'special-attack': 80,
            'special-defense': 102,
            'speed': 40
        },
        'gen': '4'
    },
    '417': {
        'id': 417,
        'name': 'Pachirisu',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 60,
            'attack': 45,
            'defense': 70,
            'special-attack': 45,
            'special-defense': 90,
            'speed': 95
        },
        'gen': '4'
    },
    '418': {
        'id': 418,
        'name': 'Buizel',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 65,
            'defense': 35,
            'special-attack': 60,
            'special-defense': 30,
            'speed': 85
        },
        'gen': '4'
    },
    '419': {
        'id': 419,
        'name': 'Floatzel',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 85,
            'attack': 105,
            'defense': 55,
            'special-attack': 85,
            'special-defense': 50,
            'speed': 115
        },
        'gen': '4'
    },
    '420': {
        'id': 420,
        'name': 'Cherubi',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 45,
            'attack': 35,
            'defense': 45,
            'special-attack': 62,
            'special-defense': 53,
            'speed': 35
        },
        'gen': '4'
    },
    '421': {
        'id': 421,
        'name': 'Cherrim',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 60,
            'defense': 70,
            'special-attack': 87,
            'special-defense': 78,
            'speed': 85
        },
        'gen': '4'
    },
    '422': {
        'id': 422,
        'name': 'Shellos',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 76,
            'attack': 48,
            'defense': 48,
            'special-attack': 57,
            'special-defense': 62,
            'speed': 34
        },
        'gen': '4'
    },
    '423': {
        'id': 423,
        'name': 'Gastrodon',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 111,
            'attack': 83,
            'defense': 68,
            'special-attack': 92,
            'special-defense': 82,
            'speed': 39
        },
        'gen': '4'
    },
    '424': {
        'id': 424,
        'name': 'Ambipom',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 75,
            'attack': 100,
            'defense': 66,
            'special-attack': 60,
            'special-defense': 66,
            'speed': 115
        },
        'gen': '4'
    },
    '425': {
        'id': 425,
        'name': 'Drifloon',
        'type': [
            'ghost',
            'flying'
        ],
        'stats': {
            'hp': 90,
            'attack': 50,
            'defense': 34,
            'special-attack': 60,
            'special-defense': 44,
            'speed': 70
        },
        'gen': '4'
    },
    '426': {
        'id': 426,
        'name': 'Drifblim',
        'type': [
            'ghost',
            'flying'
        ],
        'stats': {
            'hp': 150,
            'attack': 80,
            'defense': 44,
            'special-attack': 90,
            'special-defense': 54,
            'speed': 80
        },
        'gen': '4'
    },
    '427': {
        'id': 427,
        'name': 'Buneary',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 66,
            'defense': 44,
            'special-attack': 44,
            'special-defense': 56,
            'speed': 85
        },
        'gen': '4'
    },
    '428': {
        'id': 428,
        'name': 'Lopunny',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 65,
            'attack': 76,
            'defense': 84,
            'special-attack': 54,
            'special-defense': 96,
            'speed': 105
        },
        'gen': '4'
    },
    '429': {
        'id': 429,
        'name': 'Mismagius',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 60,
            'special-attack': 105,
            'special-defense': 105,
            'speed': 105
        },
        'gen': '4'
    },
    '430': {
        'id': 430,
        'name': 'Honchkrow',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 100,
            'attack': 125,
            'defense': 52,
            'special-attack': 105,
            'special-defense': 52,
            'speed': 71
        },
        'gen': '4'
    },
    '431': {
        'id': 431,
        'name': 'Glameow',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 49,
            'attack': 55,
            'defense': 42,
            'special-attack': 42,
            'special-defense': 37,
            'speed': 85
        },
        'gen': '4'
    },
    '432': {
        'id': 432,
        'name': 'Purugly',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 71,
            'attack': 82,
            'defense': 64,
            'special-attack': 64,
            'special-defense': 59,
            'speed': 112
        },
        'gen': '4'
    },
    '433': {
        'id': 433,
        'name': 'Chingling',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 50,
            'special-attack': 65,
            'special-defense': 50,
            'speed': 45
        },
        'gen': '4'
    },
    '434': {
        'id': 434,
        'name': 'Stunky',
        'type': [
            'poison',
            'dark'
        ],
        'stats': {
            'hp': 63,
            'attack': 63,
            'defense': 47,
            'special-attack': 41,
            'special-defense': 41,
            'speed': 74
        },
        'gen': '4'
    },
    '435': {
        'id': 435,
        'name': 'Skuntank',
        'type': [
            'poison',
            'dark'
        ],
        'stats': {
            'hp': 103,
            'attack': 93,
            'defense': 67,
            'special-attack': 71,
            'special-defense': 61,
            'speed': 84
        },
        'gen': '4'
    },
    '436': {
        'id': 436,
        'name': 'Bronzor',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 57,
            'attack': 24,
            'defense': 86,
            'special-attack': 24,
            'special-defense': 86,
            'speed': 23
        },
        'gen': '4'
    },
    '437': {
        'id': 437,
        'name': 'Bronzong',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 67,
            'attack': 89,
            'defense': 116,
            'special-attack': 79,
            'special-defense': 116,
            'speed': 33
        },
        'gen': '4'
    },
    '438': {
        'id': 438,
        'name': 'Bonsly',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 50,
            'attack': 80,
            'defense': 95,
            'special-attack': 10,
            'special-defense': 45,
            'speed': 10
        },
        'gen': '4'
    },
    '439': {
        'id': 439,
        'name': 'Mime-jr',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 20,
            'attack': 25,
            'defense': 45,
            'special-attack': 70,
            'special-defense': 90,
            'speed': 60
        },
        'gen': '4'
    },
    '440': {
        'id': 440,
        'name': 'Happiny',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 100,
            'attack': 5,
            'defense': 5,
            'special-attack': 15,
            'special-defense': 65,
            'speed': 30
        },
        'gen': '4'
    },
    '441': {
        'id': 441,
        'name': 'Chatot',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 76,
            'attack': 65,
            'defense': 45,
            'special-attack': 92,
            'special-defense': 42,
            'speed': 91
        },
        'gen': '4'
    },
    '442': {
        'id': 442,
        'name': 'Spiritomb',
        'type': [
            'ghost',
            'dark'
        ],
        'stats': {
            'hp': 50,
            'attack': 92,
            'defense': 108,
            'special-attack': 92,
            'special-defense': 108,
            'speed': 35
        },
        'gen': '4'
    },
    '443': {
        'id': 443,
        'name': 'Gible',
        'type': [
            'dragon',
            'ground'
        ],
        'stats': {
            'hp': 58,
            'attack': 70,
            'defense': 45,
            'special-attack': 40,
            'special-defense': 45,
            'speed': 42
        },
        'gen': '4'
    },
    '444': {
        'id': 444,
        'name': 'Gabite',
        'type': [
            'dragon',
            'ground'
        ],
        'stats': {
            'hp': 68,
            'attack': 90,
            'defense': 65,
            'special-attack': 50,
            'special-defense': 55,
            'speed': 82
        },
        'gen': '4'
    },
    '445': {
        'id': 445,
        'name': 'Garchomp',
        'type': [
            'dragon',
            'ground'
        ],
        'stats': {
            'hp': 108,
            'attack': 130,
            'defense': 95,
            'special-attack': 80,
            'special-defense': 85,
            'speed': 102
        },
        'gen': '4'
    },
    '446': {
        'id': 446,
        'name': 'Munchlax',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 135,
            'attack': 85,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 85,
            'speed': 5
        },
        'gen': '4'
    },
    '447': {
        'id': 447,
        'name': 'Riolu',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 40,
            'attack': 70,
            'defense': 40,
            'special-attack': 35,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '4'
    },
    '448': {
        'id': 448,
        'name': 'Lucario',
        'type': [
            'fighting',
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 110,
            'defense': 70,
            'special-attack': 115,
            'special-defense': 70,
            'speed': 90
        },
        'gen': '4'
    },
    '449': {
        'id': 449,
        'name': 'Hippopotas',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 68,
            'attack': 72,
            'defense': 78,
            'special-attack': 38,
            'special-defense': 42,
            'speed': 32
        },
        'gen': '4'
    },
    '450': {
        'id': 450,
        'name': 'Hippowdon',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 108,
            'attack': 112,
            'defense': 118,
            'special-attack': 68,
            'special-defense': 72,
            'speed': 47
        },
        'gen': '4'
    },
    '451': {
        'id': 451,
        'name': 'Skorupi',
        'type': [
            'poison',
            'bug'
        ],
        'stats': {
            'hp': 40,
            'attack': 50,
            'defense': 90,
            'special-attack': 30,
            'special-defense': 55,
            'speed': 65
        },
        'gen': '4'
    },
    '452': {
        'id': 452,
        'name': 'Drapion',
        'type': [
            'poison',
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 90,
            'defense': 110,
            'special-attack': 60,
            'special-defense': 75,
            'speed': 95
        },
        'gen': '4'
    },
    '453': {
        'id': 453,
        'name': 'Croagunk',
        'type': [
            'poison',
            'fighting'
        ],
        'stats': {
            'hp': 48,
            'attack': 61,
            'defense': 40,
            'special-attack': 61,
            'special-defense': 40,
            'speed': 50
        },
        'gen': '4'
    },
    '454': {
        'id': 454,
        'name': 'Toxicroak',
        'type': [
            'poison',
            'fighting'
        ],
        'stats': {
            'hp': 83,
            'attack': 106,
            'defense': 65,
            'special-attack': 86,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '4'
    },
    '455': {
        'id': 455,
        'name': 'Carnivine',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 74,
            'attack': 100,
            'defense': 72,
            'special-attack': 90,
            'special-defense': 72,
            'speed': 46
        },
        'gen': '4'
    },
    '456': {
        'id': 456,
        'name': 'Finneon',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 49,
            'attack': 49,
            'defense': 56,
            'special-attack': 49,
            'special-defense': 61,
            'speed': 66
        },
        'gen': '4'
    },
    '457': {
        'id': 457,
        'name': 'Lumineon',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 69,
            'attack': 69,
            'defense': 76,
            'special-attack': 69,
            'special-defense': 86,
            'speed': 91
        },
        'gen': '4'
    },
    '458': {
        'id': 458,
        'name': 'Mantyke',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 45,
            'attack': 20,
            'defense': 50,
            'special-attack': 60,
            'special-defense': 120,
            'speed': 50
        },
        'gen': '4'
    },
    '459': {
        'id': 459,
        'name': 'Snover',
        'type': [
            'grass',
            'ice'
        ],
        'stats': {
            'hp': 60,
            'attack': 62,
            'defense': 50,
            'special-attack': 62,
            'special-defense': 60,
            'speed': 40
        },
        'gen': '4'
    },
    '460': {
        'id': 460,
        'name': 'Abomasnow',
        'type': [
            'grass',
            'ice'
        ],
        'stats': {
            'hp': 90,
            'attack': 92,
            'defense': 75,
            'special-attack': 92,
            'special-defense': 85,
            'speed': 60
        },
        'gen': '4'
    },
    '461': {
        'id': 461,
        'name': 'Weavile',
        'type': [
            'dark',
            'ice'
        ],
        'stats': {
            'hp': 70,
            'attack': 120,
            'defense': 65,
            'special-attack': 45,
            'special-defense': 85,
            'speed': 125
        },
        'gen': '4'
    },
    '462': {
        'id': 462,
        'name': 'Magnezone',
        'type': [
            'electric',
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 70,
            'defense': 115,
            'special-attack': 130,
            'special-defense': 90,
            'speed': 60
        },
        'gen': '4'
    },
    '463': {
        'id': 463,
        'name': 'Lickilicky',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 110,
            'attack': 85,
            'defense': 95,
            'special-attack': 80,
            'special-defense': 95,
            'speed': 50
        },
        'gen': '4'
    },
    '464': {
        'id': 464,
        'name': 'Rhyperior',
        'type': [
            'ground',
            'rock'
        ],
        'stats': {
            'hp': 115,
            'attack': 140,
            'defense': 130,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 40
        },
        'gen': '4'
    },
    '465': {
        'id': 465,
        'name': 'Tangrowth',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 125,
            'special-attack': 110,
            'special-defense': 50,
            'speed': 50
        },
        'gen': '4'
    },
    '466': {
        'id': 466,
        'name': 'Electivire',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 75,
            'attack': 123,
            'defense': 67,
            'special-attack': 95,
            'special-defense': 85,
            'speed': 95
        },
        'gen': '4'
    },
    '467': {
        'id': 467,
        'name': 'Magmortar',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 75,
            'attack': 95,
            'defense': 67,
            'special-attack': 125,
            'special-defense': 95,
            'speed': 83
        },
        'gen': '4'
    },
    '468': {
        'id': 468,
        'name': 'Togekiss',
        'type': [
            'fairy',
            'flying'
        ],
        'stats': {
            'hp': 85,
            'attack': 50,
            'defense': 95,
            'special-attack': 120,
            'special-defense': 115,
            'speed': 80
        },
        'gen': '4'
    },
    '469': {
        'id': 469,
        'name': 'Yanmega',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 86,
            'attack': 76,
            'defense': 86,
            'special-attack': 116,
            'special-defense': 56,
            'speed': 95
        },
        'gen': '4'
    },
    '470': {
        'id': 470,
        'name': 'Leafeon',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 65,
            'attack': 110,
            'defense': 130,
            'special-attack': 60,
            'special-defense': 65,
            'speed': 95
        },
        'gen': '4'
    },
    '471': {
        'id': 471,
        'name': 'Glaceon',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 65,
            'attack': 60,
            'defense': 110,
            'special-attack': 130,
            'special-defense': 95,
            'speed': 65
        },
        'gen': '4'
    },
    '472': {
        'id': 472,
        'name': 'Gliscor',
        'type': [
            'ground',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 95,
            'defense': 125,
            'special-attack': 45,
            'special-defense': 75,
            'speed': 95
        },
        'gen': '4'
    },
    '473': {
        'id': 473,
        'name': 'Mamoswine',
        'type': [
            'ice',
            'ground'
        ],
        'stats': {
            'hp': 110,
            'attack': 130,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 60,
            'speed': 80
        },
        'gen': '4'
    },
    '474': {
        'id': 474,
        'name': 'Porygon-z',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 85,
            'attack': 80,
            'defense': 70,
            'special-attack': 135,
            'special-defense': 75,
            'speed': 90
        },
        'gen': '4'
    },
    '475': {
        'id': 475,
        'name': 'Gallade',
        'type': [
            'psychic',
            'fighting'
        ],
        'stats': {
            'hp': 68,
            'attack': 125,
            'defense': 65,
            'special-attack': 65,
            'special-defense': 115,
            'speed': 80
        },
        'gen': '4'
    },
    '476': {
        'id': 476,
        'name': 'Probopass',
        'type': [
            'rock',
            'steel'
        ],
        'stats': {
            'hp': 60,
            'attack': 55,
            'defense': 145,
            'special-attack': 75,
            'special-defense': 150,
            'speed': 40
        },
        'gen': '4'
    },
    '477': {
        'id': 477,
        'name': 'Dusknoir',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 45,
            'attack': 100,
            'defense': 135,
            'special-attack': 65,
            'special-defense': 135,
            'speed': 45
        },
        'gen': '4'
    },
    '478': {
        'id': 478,
        'name': 'Froslass',
        'type': [
            'ice',
            'ghost'
        ],
        'stats': {
            'hp': 70,
            'attack': 80,
            'defense': 70,
            'special-attack': 80,
            'special-defense': 70,
            'speed': 110
        },
        'gen': '4'
    },
    '479': {
        'id': 479,
        'name': 'Rotom',
        'type': [
            'electric',
            'ghost'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 77,
            'special-attack': 95,
            'special-defense': 77,
            'speed': 91
        },
        'gen': '4'
    },
    '480': {
        'id': 480,
        'name': 'Uxie',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 75,
            'defense': 130,
            'special-attack': 75,
            'special-defense': 130,
            'speed': 95
        },
        'gen': '4'
    },
    '481': {
        'id': 481,
        'name': 'Mesprit',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 105,
            'defense': 105,
            'special-attack': 105,
            'special-defense': 105,
            'speed': 80
        },
        'gen': '4'
    },
    '482': {
        'id': 482,
        'name': 'Azelf',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 125,
            'defense': 70,
            'special-attack': 125,
            'special-defense': 70,
            'speed': 115
        },
        'gen': '4'
    },
    '483': {
        'id': 483,
        'name': 'Dialga',
        'type': [
            'steel',
            'dragon'
        ],
        'stats': {
            'hp': 100,
            'attack': 120,
            'defense': 120,
            'special-attack': 150,
            'special-defense': 100,
            'speed': 90
        },
        'gen': '4'
    },
    '484': {
        'id': 484,
        'name': 'Palkia',
        'type': [
            'water',
            'dragon'
        ],
        'stats': {
            'hp': 90,
            'attack': 120,
            'defense': 100,
            'special-attack': 150,
            'special-defense': 120,
            'speed': 100
        },
        'gen': '4'
    },
    '485': {
        'id': 485,
        'name': 'Heatran',
        'type': [
            'fire',
            'steel'
        ],
        'stats': {
            'hp': 91,
            'attack': 90,
            'defense': 106,
            'special-attack': 130,
            'special-defense': 106,
            'speed': 77
        },
        'gen': '4'
    },
    '486': {
        'id': 486,
        'name': 'Regigigas',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 110,
            'attack': 160,
            'defense': 110,
            'special-attack': 80,
            'special-defense': 110,
            'speed': 100
        },
        'gen': '4'
    },
    '487': {
        'id': 487,
        'name': 'Giratina-altered',
        'type': [
            'ghost',
            'dragon'
        ],
        'stats': {
            'hp': 150,
            'attack': 100,
            'defense': 120,
            'special-attack': 100,
            'special-defense': 120,
            'speed': 90
        },
        'gen': '4'
    },
    '488': {
        'id': 488,
        'name': 'Cresselia',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 120,
            'attack': 70,
            'defense': 110,
            'special-attack': 75,
            'special-defense': 120,
            'speed': 85
        },
        'gen': '4'
    },
    '489': {
        'id': 489,
        'name': 'Phione',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 80,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 80
        },
        'gen': '4'
    },
    '490': {
        'id': 490,
        'name': 'Manaphy',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '4'
    },
    '491': {
        'id': 491,
        'name': 'Darkrai',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 90,
            'defense': 90,
            'special-attack': 135,
            'special-defense': 90,
            'speed': 125
        },
        'gen': '4'
    },
    '492': {
        'id': 492,
        'name': 'Shaymin-land',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '4'
    },
    '493': {
        'id': 493,
        'name': 'Arceus',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 120,
            'attack': 120,
            'defense': 120,
            'special-attack': 120,
            'special-defense': 120,
            'speed': 120
        },
        'gen': '4'
    },
    '494': {
        'id': 494,
        'name': 'Victini',
        'type': [
            'psychic',
            'fire'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 100,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 100
        },
        'gen': '5'
    },
    '495': {
        'id': 495,
        'name': 'Snivy',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 45,
            'attack': 45,
            'defense': 55,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 63
        },
        'gen': '5'
    },
    '496': {
        'id': 496,
        'name': 'Servine',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 75,
            'special-attack': 60,
            'special-defense': 75,
            'speed': 83
        },
        'gen': '5'
    },
    '497': {
        'id': 497,
        'name': 'Serperior',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 75,
            'defense': 95,
            'special-attack': 75,
            'special-defense': 95,
            'speed': 113
        },
        'gen': '5'
    },
    '498': {
        'id': 498,
        'name': 'Tepig',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 63,
            'defense': 45,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 45
        },
        'gen': '5'
    },
    '499': {
        'id': 499,
        'name': 'Pignite',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 90,
            'attack': 93,
            'defense': 55,
            'special-attack': 70,
            'special-defense': 55,
            'speed': 55
        },
        'gen': '5'
    },
    '500': {
        'id': 500,
        'name': 'Emboar',
        'type': [
            'fire',
            'fighting'
        ],
        'stats': {
            'hp': 110,
            'attack': 123,
            'defense': 65,
            'special-attack': 100,
            'special-defense': 65,
            'speed': 65
        },
        'gen': '5'
    },
    '501': {
        'id': 501,
        'name': 'Oshawott',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 45,
            'special-attack': 63,
            'special-defense': 45,
            'speed': 45
        },
        'gen': '5'
    },
    '502': {
        'id': 502,
        'name': 'Dewott',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 75,
            'attack': 75,
            'defense': 60,
            'special-attack': 83,
            'special-defense': 60,
            'speed': 60
        },
        'gen': '5'
    },
    '503': {
        'id': 503,
        'name': 'Samurott',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 95,
            'attack': 100,
            'defense': 85,
            'special-attack': 108,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '5'
    },
    '504': {
        'id': 504,
        'name': 'Patrat',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 45,
            'attack': 55,
            'defense': 39,
            'special-attack': 35,
            'special-defense': 39,
            'speed': 42
        },
        'gen': '5'
    },
    '505': {
        'id': 505,
        'name': 'Watchog',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 69,
            'special-attack': 60,
            'special-defense': 69,
            'speed': 77
        },
        'gen': '5'
    },
    '506': {
        'id': 506,
        'name': 'Lillipup',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 45,
            'attack': 60,
            'defense': 45,
            'special-attack': 25,
            'special-defense': 45,
            'speed': 55
        },
        'gen': '5'
    },
    '507': {
        'id': 507,
        'name': 'Herdier',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 65,
            'attack': 80,
            'defense': 65,
            'special-attack': 35,
            'special-defense': 65,
            'speed': 60
        },
        'gen': '5'
    },
    '508': {
        'id': 508,
        'name': 'Stoutland',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 85,
            'attack': 110,
            'defense': 90,
            'special-attack': 45,
            'special-defense': 90,
            'speed': 80
        },
        'gen': '5'
    },
    '509': {
        'id': 509,
        'name': 'Purrloin',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 41,
            'attack': 50,
            'defense': 37,
            'special-attack': 50,
            'special-defense': 37,
            'speed': 66
        },
        'gen': '5'
    },
    '510': {
        'id': 510,
        'name': 'Liepard',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 64,
            'attack': 88,
            'defense': 50,
            'special-attack': 88,
            'special-defense': 50,
            'speed': 106
        },
        'gen': '5'
    },
    '511': {
        'id': 511,
        'name': 'Pansage',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 50,
            'attack': 53,
            'defense': 48,
            'special-attack': 53,
            'special-defense': 48,
            'speed': 64
        },
        'gen': '5'
    },
    '512': {
        'id': 512,
        'name': 'Simisage',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 98,
            'defense': 63,
            'special-attack': 98,
            'special-defense': 63,
            'speed': 101
        },
        'gen': '5'
    },
    '513': {
        'id': 513,
        'name': 'Pansear',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 50,
            'attack': 53,
            'defense': 48,
            'special-attack': 53,
            'special-defense': 48,
            'speed': 64
        },
        'gen': '5'
    },
    '514': {
        'id': 514,
        'name': 'Simisear',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 75,
            'attack': 98,
            'defense': 63,
            'special-attack': 98,
            'special-defense': 63,
            'speed': 101
        },
        'gen': '5'
    },
    '515': {
        'id': 515,
        'name': 'Panpour',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 53,
            'defense': 48,
            'special-attack': 53,
            'special-defense': 48,
            'speed': 64
        },
        'gen': '5'
    },
    '516': {
        'id': 516,
        'name': 'Simipour',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 75,
            'attack': 98,
            'defense': 63,
            'special-attack': 98,
            'special-defense': 63,
            'speed': 101
        },
        'gen': '5'
    },
    '517': {
        'id': 517,
        'name': 'Munna',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 76,
            'attack': 25,
            'defense': 45,
            'special-attack': 67,
            'special-defense': 55,
            'speed': 24
        },
        'gen': '5'
    },
    '518': {
        'id': 518,
        'name': 'Musharna',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 116,
            'attack': 55,
            'defense': 85,
            'special-attack': 107,
            'special-defense': 95,
            'speed': 29
        },
        'gen': '5'
    },
    '519': {
        'id': 519,
        'name': 'Pidove',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 50,
            'attack': 55,
            'defense': 50,
            'special-attack': 36,
            'special-defense': 30,
            'speed': 43
        },
        'gen': '5'
    },
    '520': {
        'id': 520,
        'name': 'Tranquill',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 62,
            'attack': 77,
            'defense': 62,
            'special-attack': 50,
            'special-defense': 42,
            'speed': 65
        },
        'gen': '5'
    },
    '521': {
        'id': 521,
        'name': 'Unfezant',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 80,
            'attack': 115,
            'defense': 80,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 93
        },
        'gen': '5'
    },
    '522': {
        'id': 522,
        'name': 'Blitzle',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 45,
            'attack': 60,
            'defense': 32,
            'special-attack': 50,
            'special-defense': 32,
            'speed': 76
        },
        'gen': '5'
    },
    '523': {
        'id': 523,
        'name': 'Zebstrika',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 75,
            'attack': 100,
            'defense': 63,
            'special-attack': 80,
            'special-defense': 63,
            'speed': 116
        },
        'gen': '5'
    },
    '524': {
        'id': 524,
        'name': 'Roggenrola',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 55,
            'attack': 75,
            'defense': 85,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 15
        },
        'gen': '5'
    },
    '525': {
        'id': 525,
        'name': 'Boldore',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 105,
            'defense': 105,
            'special-attack': 50,
            'special-defense': 40,
            'speed': 20
        },
        'gen': '5'
    },
    '526': {
        'id': 526,
        'name': 'Gigalith',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 85,
            'attack': 135,
            'defense': 130,
            'special-attack': 60,
            'special-defense': 80,
            'speed': 25
        },
        'gen': '5'
    },
    '527': {
        'id': 527,
        'name': 'Woobat',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 65,
            'attack': 45,
            'defense': 43,
            'special-attack': 55,
            'special-defense': 43,
            'speed': 72
        },
        'gen': '5'
    },
    '528': {
        'id': 528,
        'name': 'Swoobat',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 67,
            'attack': 57,
            'defense': 55,
            'special-attack': 77,
            'special-defense': 55,
            'speed': 114
        },
        'gen': '5'
    },
    '529': {
        'id': 529,
        'name': 'Drilbur',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 60,
            'attack': 85,
            'defense': 40,
            'special-attack': 30,
            'special-defense': 45,
            'speed': 68
        },
        'gen': '5'
    },
    '530': {
        'id': 530,
        'name': 'Excadrill',
        'type': [
            'ground',
            'steel'
        ],
        'stats': {
            'hp': 110,
            'attack': 135,
            'defense': 60,
            'special-attack': 50,
            'special-defense': 65,
            'speed': 88
        },
        'gen': '5'
    },
    '531': {
        'id': 531,
        'name': 'Audino',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 103,
            'attack': 60,
            'defense': 86,
            'special-attack': 60,
            'special-defense': 86,
            'speed': 50
        },
        'gen': '5'
    },
    '532': {
        'id': 532,
        'name': 'Timburr',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 55,
            'special-attack': 25,
            'special-defense': 35,
            'speed': 35
        },
        'gen': '5'
    },
    '533': {
        'id': 533,
        'name': 'Gurdurr',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 85,
            'attack': 105,
            'defense': 85,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 40
        },
        'gen': '5'
    },
    '534': {
        'id': 534,
        'name': 'Conkeldurr',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 105,
            'attack': 140,
            'defense': 95,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '5'
    },
    '535': {
        'id': 535,
        'name': 'Tympole',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 40,
            'speed': 64
        },
        'gen': '5'
    },
    '536': {
        'id': 536,
        'name': 'Palpitoad',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 75,
            'attack': 65,
            'defense': 55,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 69
        },
        'gen': '5'
    },
    '537': {
        'id': 537,
        'name': 'Seismitoad',
        'type': [
            'water',
            'ground'
        ],
        'stats': {
            'hp': 105,
            'attack': 95,
            'defense': 75,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 74
        },
        'gen': '5'
    },
    '538': {
        'id': 538,
        'name': 'Throh',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 120,
            'attack': 100,
            'defense': 85,
            'special-attack': 30,
            'special-defense': 85,
            'speed': 45
        },
        'gen': '5'
    },
    '539': {
        'id': 539,
        'name': 'Sawk',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 75,
            'attack': 125,
            'defense': 75,
            'special-attack': 30,
            'special-defense': 75,
            'speed': 85
        },
        'gen': '5'
    },
    '540': {
        'id': 540,
        'name': 'Sewaddle',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 45,
            'attack': 53,
            'defense': 70,
            'special-attack': 40,
            'special-defense': 60,
            'speed': 42
        },
        'gen': '5'
    },
    '541': {
        'id': 541,
        'name': 'Swadloon',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 55,
            'attack': 63,
            'defense': 90,
            'special-attack': 50,
            'special-defense': 80,
            'speed': 42
        },
        'gen': '5'
    },
    '542': {
        'id': 542,
        'name': 'Leavanny',
        'type': [
            'bug',
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 103,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 92
        },
        'gen': '5'
    },
    '543': {
        'id': 543,
        'name': 'Venipede',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 30,
            'attack': 45,
            'defense': 59,
            'special-attack': 30,
            'special-defense': 39,
            'speed': 57
        },
        'gen': '5'
    },
    '544': {
        'id': 544,
        'name': 'Whirlipede',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 99,
            'special-attack': 40,
            'special-defense': 79,
            'speed': 47
        },
        'gen': '5'
    },
    '545': {
        'id': 545,
        'name': 'Scolipede',
        'type': [
            'bug',
            'poison'
        ],
        'stats': {
            'hp': 60,
            'attack': 100,
            'defense': 89,
            'special-attack': 55,
            'special-defense': 69,
            'speed': 112
        },
        'gen': '5'
    },
    '546': {
        'id': 546,
        'name': 'Cottonee',
        'type': [
            'grass',
            'fairy'
        ],
        'stats': {
            'hp': 40,
            'attack': 27,
            'defense': 60,
            'special-attack': 37,
            'special-defense': 50,
            'speed': 66
        },
        'gen': '5'
    },
    '547': {
        'id': 547,
        'name': 'Whimsicott',
        'type': [
            'grass',
            'fairy'
        ],
        'stats': {
            'hp': 60,
            'attack': 67,
            'defense': 85,
            'special-attack': 77,
            'special-defense': 75,
            'speed': 116
        },
        'gen': '5'
    },
    '548': {
        'id': 548,
        'name': 'Petilil',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 45,
            'attack': 35,
            'defense': 50,
            'special-attack': 70,
            'special-defense': 50,
            'speed': 30
        },
        'gen': '5'
    },
    '549': {
        'id': 549,
        'name': 'Lilligant',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 60,
            'defense': 75,
            'special-attack': 110,
            'special-defense': 75,
            'speed': 90
        },
        'gen': '5'
    },
    '550': {
        'id': 550,
        'name': 'Basculin-red-striped',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 92,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 55,
            'speed': 98
        },
        'gen': '5'
    },
    '551': {
        'id': 551,
        'name': 'Sandile',
        'type': [
            'ground',
            'dark'
        ],
        'stats': {
            'hp': 50,
            'attack': 72,
            'defense': 35,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 65
        },
        'gen': '5'
    },
    '552': {
        'id': 552,
        'name': 'Krokorok',
        'type': [
            'ground',
            'dark'
        ],
        'stats': {
            'hp': 60,
            'attack': 82,
            'defense': 45,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 74
        },
        'gen': '5'
    },
    '553': {
        'id': 553,
        'name': 'Krookodile',
        'type': [
            'ground',
            'dark'
        ],
        'stats': {
            'hp': 95,
            'attack': 117,
            'defense': 80,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 92
        },
        'gen': '5'
    },
    '554': {
        'id': 554,
        'name': 'Darumaka',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 70,
            'attack': 90,
            'defense': 45,
            'special-attack': 15,
            'special-defense': 45,
            'speed': 50
        },
        'gen': '5'
    },
    '555': {
        'id': 555,
        'name': 'Darmanitan-standard',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 105,
            'attack': 140,
            'defense': 55,
            'special-attack': 30,
            'special-defense': 55,
            'speed': 95
        },
        'gen': '5'
    },
    '556': {
        'id': 556,
        'name': 'Maractus',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 75,
            'attack': 86,
            'defense': 67,
            'special-attack': 106,
            'special-defense': 67,
            'speed': 60
        },
        'gen': '5'
    },
    '557': {
        'id': 557,
        'name': 'Dwebble',
        'type': [
            'bug',
            'rock'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 85,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 55
        },
        'gen': '5'
    },
    '558': {
        'id': 558,
        'name': 'Crustle',
        'type': [
            'bug',
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 105,
            'defense': 125,
            'special-attack': 65,
            'special-defense': 75,
            'speed': 45
        },
        'gen': '5'
    },
    '559': {
        'id': 559,
        'name': 'Scraggy',
        'type': [
            'dark',
            'fighting'
        ],
        'stats': {
            'hp': 50,
            'attack': 75,
            'defense': 70,
            'special-attack': 35,
            'special-defense': 70,
            'speed': 48
        },
        'gen': '5'
    },
    '560': {
        'id': 560,
        'name': 'Scrafty',
        'type': [
            'dark',
            'fighting'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 115,
            'special-attack': 45,
            'special-defense': 115,
            'speed': 58
        },
        'gen': '5'
    },
    '561': {
        'id': 561,
        'name': 'Sigilyph',
        'type': [
            'psychic',
            'flying'
        ],
        'stats': {
            'hp': 72,
            'attack': 58,
            'defense': 80,
            'special-attack': 103,
            'special-defense': 80,
            'speed': 97
        },
        'gen': '5'
    },
    '562': {
        'id': 562,
        'name': 'Yamask',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 38,
            'attack': 30,
            'defense': 85,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 30
        },
        'gen': '5'
    },
    '563': {
        'id': 563,
        'name': 'Cofagrigus',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 58,
            'attack': 50,
            'defense': 145,
            'special-attack': 95,
            'special-defense': 105,
            'speed': 30
        },
        'gen': '5'
    },
    '564': {
        'id': 564,
        'name': 'Tirtouga',
        'type': [
            'water',
            'rock'
        ],
        'stats': {
            'hp': 54,
            'attack': 78,
            'defense': 103,
            'special-attack': 53,
            'special-defense': 45,
            'speed': 22
        },
        'gen': '5'
    },
    '565': {
        'id': 565,
        'name': 'Carracosta',
        'type': [
            'water',
            'rock'
        ],
        'stats': {
            'hp': 74,
            'attack': 108,
            'defense': 133,
            'special-attack': 83,
            'special-defense': 65,
            'speed': 32
        },
        'gen': '5'
    },
    '566': {
        'id': 566,
        'name': 'Archen',
        'type': [
            'rock',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 112,
            'defense': 45,
            'special-attack': 74,
            'special-defense': 45,
            'speed': 70
        },
        'gen': '5'
    },
    '567': {
        'id': 567,
        'name': 'Archeops',
        'type': [
            'rock',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 140,
            'defense': 65,
            'special-attack': 112,
            'special-defense': 65,
            'speed': 110
        },
        'gen': '5'
    },
    '568': {
        'id': 568,
        'name': 'Trubbish',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 62,
            'special-attack': 40,
            'special-defense': 62,
            'speed': 65
        },
        'gen': '5'
    },
    '569': {
        'id': 569,
        'name': 'Garbodor',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 95,
            'defense': 82,
            'special-attack': 60,
            'special-defense': 82,
            'speed': 75
        },
        'gen': '5'
    },
    '570': {
        'id': 570,
        'name': 'Zorua',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 40,
            'attack': 65,
            'defense': 40,
            'special-attack': 80,
            'special-defense': 40,
            'speed': 65
        },
        'gen': '5'
    },
    '571': {
        'id': 571,
        'name': 'Zoroark',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 60,
            'attack': 105,
            'defense': 60,
            'special-attack': 120,
            'special-defense': 60,
            'speed': 105
        },
        'gen': '5'
    },
    '572': {
        'id': 572,
        'name': 'Minccino',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 55,
            'attack': 50,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 75
        },
        'gen': '5'
    },
    '573': {
        'id': 573,
        'name': 'Cinccino',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 75,
            'attack': 95,
            'defense': 60,
            'special-attack': 65,
            'special-defense': 60,
            'speed': 115
        },
        'gen': '5'
    },
    '574': {
        'id': 574,
        'name': 'Gothita',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 50,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 45
        },
        'gen': '5'
    },
    '575': {
        'id': 575,
        'name': 'Gothorita',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 45,
            'defense': 70,
            'special-attack': 75,
            'special-defense': 85,
            'speed': 55
        },
        'gen': '5'
    },
    '576': {
        'id': 576,
        'name': 'Gothitelle',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 70,
            'attack': 55,
            'defense': 95,
            'special-attack': 95,
            'special-defense': 110,
            'speed': 65
        },
        'gen': '5'
    },
    '577': {
        'id': 577,
        'name': 'Solosis',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 40,
            'special-attack': 105,
            'special-defense': 50,
            'speed': 20
        },
        'gen': '5'
    },
    '578': {
        'id': 578,
        'name': 'Duosion',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 65,
            'attack': 40,
            'defense': 50,
            'special-attack': 125,
            'special-defense': 60,
            'speed': 30
        },
        'gen': '5'
    },
    '579': {
        'id': 579,
        'name': 'Reuniclus',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 110,
            'attack': 65,
            'defense': 75,
            'special-attack': 125,
            'special-defense': 85,
            'speed': 30
        },
        'gen': '5'
    },
    '580': {
        'id': 580,
        'name': 'Ducklett',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 62,
            'attack': 44,
            'defense': 50,
            'special-attack': 44,
            'special-defense': 50,
            'speed': 55
        },
        'gen': '5'
    },
    '581': {
        'id': 581,
        'name': 'Swanna',
        'type': [
            'water',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 87,
            'defense': 63,
            'special-attack': 87,
            'special-defense': 63,
            'speed': 98
        },
        'gen': '5'
    },
    '582': {
        'id': 582,
        'name': 'Vanillite',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 36,
            'attack': 50,
            'defense': 50,
            'special-attack': 65,
            'special-defense': 60,
            'speed': 44
        },
        'gen': '5'
    },
    '583': {
        'id': 583,
        'name': 'Vanillish',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 51,
            'attack': 65,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 75,
            'speed': 59
        },
        'gen': '5'
    },
    '584': {
        'id': 584,
        'name': 'Vanilluxe',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 71,
            'attack': 95,
            'defense': 85,
            'special-attack': 110,
            'special-defense': 95,
            'speed': 79
        },
        'gen': '5'
    },
    '585': {
        'id': 585,
        'name': 'Deerling',
        'type': [
            'normal',
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 75
        },
        'gen': '5'
    },
    '586': {
        'id': 586,
        'name': 'Sawsbuck',
        'type': [
            'normal',
            'grass'
        ],
        'stats': {
            'hp': 80,
            'attack': 100,
            'defense': 70,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 95
        },
        'gen': '5'
    },
    '587': {
        'id': 587,
        'name': 'Emolga',
        'type': [
            'electric',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 75,
            'defense': 60,
            'special-attack': 75,
            'special-defense': 60,
            'speed': 103
        },
        'gen': '5'
    },
    '588': {
        'id': 588,
        'name': 'Karrablast',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 75,
            'defense': 45,
            'special-attack': 40,
            'special-defense': 45,
            'speed': 60
        },
        'gen': '5'
    },
    '589': {
        'id': 589,
        'name': 'Escavalier',
        'type': [
            'bug',
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 135,
            'defense': 105,
            'special-attack': 60,
            'special-defense': 105,
            'speed': 20
        },
        'gen': '5'
    },
    '590': {
        'id': 590,
        'name': 'Foongus',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 69,
            'attack': 55,
            'defense': 45,
            'special-attack': 55,
            'special-defense': 55,
            'speed': 15
        },
        'gen': '5'
    },
    '591': {
        'id': 591,
        'name': 'Amoonguss',
        'type': [
            'grass',
            'poison'
        ],
        'stats': {
            'hp': 114,
            'attack': 85,
            'defense': 70,
            'special-attack': 85,
            'special-defense': 80,
            'speed': 30
        },
        'gen': '5'
    },
    '592': {
        'id': 592,
        'name': 'Frillish',
        'type': [
            'water',
            'ghost'
        ],
        'stats': {
            'hp': 55,
            'attack': 40,
            'defense': 50,
            'special-attack': 65,
            'special-defense': 85,
            'speed': 40
        },
        'gen': '5'
    },
    '593': {
        'id': 593,
        'name': 'Jellicent',
        'type': [
            'water',
            'ghost'
        ],
        'stats': {
            'hp': 100,
            'attack': 60,
            'defense': 70,
            'special-attack': 85,
            'special-defense': 105,
            'speed': 60
        },
        'gen': '5'
    },
    '594': {
        'id': 594,
        'name': 'Alomomola',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 165,
            'attack': 75,
            'defense': 80,
            'special-attack': 40,
            'special-defense': 45,
            'speed': 65
        },
        'gen': '5'
    },
    '595': {
        'id': 595,
        'name': 'Joltik',
        'type': [
            'bug',
            'electric'
        ],
        'stats': {
            'hp': 50,
            'attack': 47,
            'defense': 50,
            'special-attack': 57,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '5'
    },
    '596': {
        'id': 596,
        'name': 'Galvantula',
        'type': [
            'bug',
            'electric'
        ],
        'stats': {
            'hp': 70,
            'attack': 77,
            'defense': 60,
            'special-attack': 97,
            'special-defense': 60,
            'speed': 108
        },
        'gen': '5'
    },
    '597': {
        'id': 597,
        'name': 'Ferroseed',
        'type': [
            'grass',
            'steel'
        ],
        'stats': {
            'hp': 44,
            'attack': 50,
            'defense': 91,
            'special-attack': 24,
            'special-defense': 86,
            'speed': 10
        },
        'gen': '5'
    },
    '598': {
        'id': 598,
        'name': 'Ferrothorn',
        'type': [
            'grass',
            'steel'
        ],
        'stats': {
            'hp': 74,
            'attack': 94,
            'defense': 131,
            'special-attack': 54,
            'special-defense': 116,
            'speed': 20
        },
        'gen': '5'
    },
    '599': {
        'id': 599,
        'name': 'Klink',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 70,
            'special-attack': 45,
            'special-defense': 60,
            'speed': 30
        },
        'gen': '5'
    },
    '600': {
        'id': 600,
        'name': 'Klang',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 60,
            'attack': 80,
            'defense': 95,
            'special-attack': 70,
            'special-defense': 85,
            'speed': 50
        },
        'gen': '5'
    },
    '601': {
        'id': 601,
        'name': 'Klinklang',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 60,
            'attack': 100,
            'defense': 115,
            'special-attack': 70,
            'special-defense': 85,
            'speed': 90
        },
        'gen': '5'
    },
    '602': {
        'id': 602,
        'name': 'Tynamo',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 35,
            'attack': 55,
            'defense': 40,
            'special-attack': 45,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '5'
    },
    '603': {
        'id': 603,
        'name': 'Eelektrik',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 65,
            'attack': 85,
            'defense': 70,
            'special-attack': 75,
            'special-defense': 70,
            'speed': 40
        },
        'gen': '5'
    },
    '604': {
        'id': 604,
        'name': 'Eelektross',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 85,
            'attack': 115,
            'defense': 80,
            'special-attack': 105,
            'special-defense': 80,
            'speed': 50
        },
        'gen': '5'
    },
    '605': {
        'id': 605,
        'name': 'Elgyem',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 55,
            'special-attack': 85,
            'special-defense': 55,
            'speed': 30
        },
        'gen': '5'
    },
    '606': {
        'id': 606,
        'name': 'Beheeyem',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 75,
            'defense': 75,
            'special-attack': 125,
            'special-defense': 95,
            'speed': 40
        },
        'gen': '5'
    },
    '607': {
        'id': 607,
        'name': 'Litwick',
        'type': [
            'ghost',
            'fire'
        ],
        'stats': {
            'hp': 50,
            'attack': 30,
            'defense': 55,
            'special-attack': 65,
            'special-defense': 55,
            'speed': 20
        },
        'gen': '5'
    },
    '608': {
        'id': 608,
        'name': 'Lampent',
        'type': [
            'ghost',
            'fire'
        ],
        'stats': {
            'hp': 60,
            'attack': 40,
            'defense': 60,
            'special-attack': 95,
            'special-defense': 60,
            'speed': 55
        },
        'gen': '5'
    },
    '609': {
        'id': 609,
        'name': 'Chandelure',
        'type': [
            'ghost',
            'fire'
        ],
        'stats': {
            'hp': 60,
            'attack': 55,
            'defense': 90,
            'special-attack': 145,
            'special-defense': 90,
            'speed': 80
        },
        'gen': '5'
    },
    '610': {
        'id': 610,
        'name': 'Axew',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 46,
            'attack': 87,
            'defense': 60,
            'special-attack': 30,
            'special-defense': 40,
            'speed': 57
        },
        'gen': '5'
    },
    '611': {
        'id': 611,
        'name': 'Fraxure',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 66,
            'attack': 117,
            'defense': 70,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 67
        },
        'gen': '5'
    },
    '612': {
        'id': 612,
        'name': 'Haxorus',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 76,
            'attack': 147,
            'defense': 90,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 97
        },
        'gen': '5'
    },
    '613': {
        'id': 613,
        'name': 'Cubchoo',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 55,
            'attack': 70,
            'defense': 40,
            'special-attack': 60,
            'special-defense': 40,
            'speed': 40
        },
        'gen': '5'
    },
    '614': {
        'id': 614,
        'name': 'Beartic',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 95,
            'attack': 130,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 50
        },
        'gen': '5'
    },
    '615': {
        'id': 615,
        'name': 'Cryogonal',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 80,
            'attack': 50,
            'defense': 50,
            'special-attack': 95,
            'special-defense': 135,
            'speed': 105
        },
        'gen': '5'
    },
    '616': {
        'id': 616,
        'name': 'Shelmet',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 40,
            'defense': 85,
            'special-attack': 40,
            'special-defense': 65,
            'speed': 25
        },
        'gen': '5'
    },
    '617': {
        'id': 617,
        'name': 'Accelgor',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 80,
            'attack': 70,
            'defense': 40,
            'special-attack': 100,
            'special-defense': 60,
            'speed': 145
        },
        'gen': '5'
    },
    '618': {
        'id': 618,
        'name': 'Stunfisk',
        'type': [
            'ground',
            'electric'
        ],
        'stats': {
            'hp': 109,
            'attack': 66,
            'defense': 84,
            'special-attack': 81,
            'special-defense': 99,
            'speed': 32
        },
        'gen': '5'
    },
    '619': {
        'id': 619,
        'name': 'Mienfoo',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 45,
            'attack': 85,
            'defense': 50,
            'special-attack': 55,
            'special-defense': 50,
            'speed': 65
        },
        'gen': '5'
    },
    '620': {
        'id': 620,
        'name': 'Mienshao',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 65,
            'attack': 125,
            'defense': 60,
            'special-attack': 95,
            'special-defense': 60,
            'speed': 105
        },
        'gen': '5'
    },
    '621': {
        'id': 621,
        'name': 'Druddigon',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 77,
            'attack': 120,
            'defense': 90,
            'special-attack': 60,
            'special-defense': 90,
            'speed': 48
        },
        'gen': '5'
    },
    '622': {
        'id': 622,
        'name': 'Golett',
        'type': [
            'ground',
            'ghost'
        ],
        'stats': {
            'hp': 59,
            'attack': 74,
            'defense': 50,
            'special-attack': 35,
            'special-defense': 50,
            'speed': 35
        },
        'gen': '5'
    },
    '623': {
        'id': 623,
        'name': 'Golurk',
        'type': [
            'ground',
            'ghost'
        ],
        'stats': {
            'hp': 89,
            'attack': 124,
            'defense': 80,
            'special-attack': 55,
            'special-defense': 80,
            'speed': 55
        },
        'gen': '5'
    },
    '624': {
        'id': 624,
        'name': 'Pawniard',
        'type': [
            'dark',
            'steel'
        ],
        'stats': {
            'hp': 45,
            'attack': 85,
            'defense': 70,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '5'
    },
    '625': {
        'id': 625,
        'name': 'Bisharp',
        'type': [
            'dark',
            'steel'
        ],
        'stats': {
            'hp': 65,
            'attack': 125,
            'defense': 100,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 70
        },
        'gen': '5'
    },
    '626': {
        'id': 626,
        'name': 'Bouffalant',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 95,
            'attack': 110,
            'defense': 95,
            'special-attack': 40,
            'special-defense': 95,
            'speed': 55
        },
        'gen': '5'
    },
    '627': {
        'id': 627,
        'name': 'Rufflet',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 83,
            'defense': 50,
            'special-attack': 37,
            'special-defense': 50,
            'speed': 60
        },
        'gen': '5'
    },
    '628': {
        'id': 628,
        'name': 'Braviary',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 100,
            'attack': 123,
            'defense': 75,
            'special-attack': 57,
            'special-defense': 75,
            'speed': 80
        },
        'gen': '5'
    },
    '629': {
        'id': 629,
        'name': 'Vullaby',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 55,
            'defense': 75,
            'special-attack': 45,
            'special-defense': 65,
            'speed': 60
        },
        'gen': '5'
    },
    '630': {
        'id': 630,
        'name': 'Mandibuzz',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 110,
            'attack': 65,
            'defense': 105,
            'special-attack': 55,
            'special-defense': 95,
            'speed': 80
        },
        'gen': '5'
    },
    '631': {
        'id': 631,
        'name': 'Heatmor',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 85,
            'attack': 97,
            'defense': 66,
            'special-attack': 105,
            'special-defense': 66,
            'speed': 65
        },
        'gen': '5'
    },
    '632': {
        'id': 632,
        'name': 'Durant',
        'type': [
            'bug',
            'steel'
        ],
        'stats': {
            'hp': 58,
            'attack': 109,
            'defense': 112,
            'special-attack': 48,
            'special-defense': 48,
            'speed': 109
        },
        'gen': '5'
    },
    '633': {
        'id': 633,
        'name': 'Deino',
        'type': [
            'dark',
            'dragon'
        ],
        'stats': {
            'hp': 52,
            'attack': 65,
            'defense': 50,
            'special-attack': 45,
            'special-defense': 50,
            'speed': 38
        },
        'gen': '5'
    },
    '634': {
        'id': 634,
        'name': 'Zweilous',
        'type': [
            'dark',
            'dragon'
        ],
        'stats': {
            'hp': 72,
            'attack': 85,
            'defense': 70,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 58
        },
        'gen': '5'
    },
    '635': {
        'id': 635,
        'name': 'Hydreigon',
        'type': [
            'dark',
            'dragon'
        ],
        'stats': {
            'hp': 92,
            'attack': 105,
            'defense': 90,
            'special-attack': 125,
            'special-defense': 90,
            'speed': 98
        },
        'gen': '5'
    },
    '636': {
        'id': 636,
        'name': 'Larvesta',
        'type': [
            'bug',
            'fire'
        ],
        'stats': {
            'hp': 55,
            'attack': 85,
            'defense': 55,
            'special-attack': 50,
            'special-defense': 55,
            'speed': 60
        },
        'gen': '5'
    },
    '637': {
        'id': 637,
        'name': 'Volcarona',
        'type': [
            'bug',
            'fire'
        ],
        'stats': {
            'hp': 85,
            'attack': 60,
            'defense': 65,
            'special-attack': 135,
            'special-defense': 105,
            'speed': 100
        },
        'gen': '5'
    },
    '638': {
        'id': 638,
        'name': 'Cobalion',
        'type': [
            'steel',
            'fighting'
        ],
        'stats': {
            'hp': 91,
            'attack': 90,
            'defense': 129,
            'special-attack': 90,
            'special-defense': 72,
            'speed': 108
        },
        'gen': '5'
    },
    '639': {
        'id': 639,
        'name': 'Terrakion',
        'type': [
            'rock',
            'fighting'
        ],
        'stats': {
            'hp': 91,
            'attack': 129,
            'defense': 90,
            'special-attack': 72,
            'special-defense': 90,
            'speed': 108
        },
        'gen': '5'
    },
    '640': {
        'id': 640,
        'name': 'Virizion',
        'type': [
            'grass',
            'fighting'
        ],
        'stats': {
            'hp': 91,
            'attack': 90,
            'defense': 72,
            'special-attack': 90,
            'special-defense': 129,
            'speed': 108
        },
        'gen': '5'
    },
    '641': {
        'id': 641,
        'name': 'Tornadus-incarnate',
        'type': [
            'flying'
        ],
        'stats': {
            'hp': 79,
            'attack': 115,
            'defense': 70,
            'special-attack': 125,
            'special-defense': 80,
            'speed': 111
        },
        'gen': '5'
    },
    '642': {
        'id': 642,
        'name': 'Thundurus-incarnate',
        'type': [
            'electric',
            'flying'
        ],
        'stats': {
            'hp': 79,
            'attack': 115,
            'defense': 70,
            'special-attack': 125,
            'special-defense': 80,
            'speed': 111
        },
        'gen': '5'
    },
    '643': {
        'id': 643,
        'name': 'Reshiram',
        'type': [
            'dragon',
            'fire'
        ],
        'stats': {
            'hp': 100,
            'attack': 120,
            'defense': 100,
            'special-attack': 150,
            'special-defense': 120,
            'speed': 90
        },
        'gen': '5'
    },
    '644': {
        'id': 644,
        'name': 'Zekrom',
        'type': [
            'dragon',
            'electric'
        ],
        'stats': {
            'hp': 100,
            'attack': 150,
            'defense': 120,
            'special-attack': 120,
            'special-defense': 100,
            'speed': 90
        },
        'gen': '5'
    },
    '645': {
        'id': 645,
        'name': 'Landorus-incarnate',
        'type': [
            'ground',
            'flying'
        ],
        'stats': {
            'hp': 89,
            'attack': 125,
            'defense': 90,
            'special-attack': 115,
            'special-defense': 80,
            'speed': 101
        },
        'gen': '5'
    },
    '646': {
        'id': 646,
        'name': 'Kyurem',
        'type': [
            'dragon',
            'ice'
        ],
        'stats': {
            'hp': 125,
            'attack': 130,
            'defense': 90,
            'special-attack': 130,
            'special-defense': 90,
            'speed': 95
        },
        'gen': '5'
    },
    '647': {
        'id': 647,
        'name': 'Keldeo-ordinary',
        'type': [
            'water',
            'fighting'
        ],
        'stats': {
            'hp': 91,
            'attack': 72,
            'defense': 90,
            'special-attack': 129,
            'special-defense': 90,
            'speed': 108
        },
        'gen': '5'
    },
    '648': {
        'id': 648,
        'name': 'Meloetta-aria',
        'type': [
            'normal',
            'psychic'
        ],
        'stats': {
            'hp': 100,
            'attack': 77,
            'defense': 77,
            'special-attack': 128,
            'special-defense': 128,
            'speed': 90
        },
        'gen': '5'
    },
    '649': {
        'id': 649,
        'name': 'Genesect',
        'type': [
            'bug',
            'steel'
        ],
        'stats': {
            'hp': 71,
            'attack': 120,
            'defense': 95,
            'special-attack': 120,
            'special-defense': 95,
            'speed': 99
        },
        'gen': '5'
    },
    '650': {
        'id': 650,
        'name': 'Chespin',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 56,
            'attack': 61,
            'defense': 65,
            'special-attack': 48,
            'special-defense': 45,
            'speed': 38
        },
        'gen': '6'
    },
    '651': {
        'id': 651,
        'name': 'Quilladin',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 61,
            'attack': 78,
            'defense': 95,
            'special-attack': 56,
            'special-defense': 58,
            'speed': 57
        },
        'gen': '6'
    },
    '652': {
        'id': 652,
        'name': 'Chesnaught',
        'type': [
            'grass',
            'fighting'
        ],
        'stats': {
            'hp': 88,
            'attack': 107,
            'defense': 122,
            'special-attack': 74,
            'special-defense': 75,
            'speed': 64
        },
        'gen': '6'
    },
    '653': {
        'id': 653,
        'name': 'Fennekin',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 40,
            'special-attack': 62,
            'special-defense': 60,
            'speed': 60
        },
        'gen': '6'
    },
    '654': {
        'id': 654,
        'name': 'Braixen',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 59,
            'attack': 59,
            'defense': 58,
            'special-attack': 90,
            'special-defense': 70,
            'speed': 73
        },
        'gen': '6'
    },
    '655': {
        'id': 655,
        'name': 'Delphox',
        'type': [
            'fire',
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 69,
            'defense': 72,
            'special-attack': 114,
            'special-defense': 100,
            'speed': 104
        },
        'gen': '6'
    },
    '656': {
        'id': 656,
        'name': 'Froakie',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 41,
            'attack': 56,
            'defense': 40,
            'special-attack': 62,
            'special-defense': 44,
            'speed': 71
        },
        'gen': '6'
    },
    '657': {
        'id': 657,
        'name': 'Frogadier',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 54,
            'attack': 63,
            'defense': 52,
            'special-attack': 83,
            'special-defense': 56,
            'speed': 97
        },
        'gen': '6'
    },
    '658': {
        'id': 658,
        'name': 'Greninja',
        'type': [
            'water',
            'dark'
        ],
        'stats': {
            'hp': 72,
            'attack': 95,
            'defense': 67,
            'special-attack': 103,
            'special-defense': 71,
            'speed': 122
        },
        'gen': '6'
    },
    '659': {
        'id': 659,
        'name': 'Bunnelby',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 38,
            'attack': 36,
            'defense': 38,
            'special-attack': 32,
            'special-defense': 36,
            'speed': 57
        },
        'gen': '6'
    },
    '660': {
        'id': 660,
        'name': 'Diggersby',
        'type': [
            'normal',
            'ground'
        ],
        'stats': {
            'hp': 85,
            'attack': 56,
            'defense': 77,
            'special-attack': 50,
            'special-defense': 77,
            'speed': 78
        },
        'gen': '6'
    },
    '661': {
        'id': 661,
        'name': 'Fletchling',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 45,
            'attack': 50,
            'defense': 43,
            'special-attack': 40,
            'special-defense': 38,
            'speed': 62
        },
        'gen': '6'
    },
    '662': {
        'id': 662,
        'name': 'Fletchinder',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 62,
            'attack': 73,
            'defense': 55,
            'special-attack': 56,
            'special-defense': 52,
            'speed': 84
        },
        'gen': '6'
    },
    '663': {
        'id': 663,
        'name': 'Talonflame',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 78,
            'attack': 81,
            'defense': 71,
            'special-attack': 74,
            'special-defense': 69,
            'speed': 126
        },
        'gen': '6'
    },
    '664': {
        'id': 664,
        'name': 'Scatterbug',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 38,
            'attack': 35,
            'defense': 40,
            'special-attack': 27,
            'special-defense': 25,
            'speed': 35
        },
        'gen': '6'
    },
    '665': {
        'id': 665,
        'name': 'Spewpa',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 45,
            'attack': 22,
            'defense': 60,
            'special-attack': 27,
            'special-defense': 30,
            'speed': 29
        },
        'gen': '6'
    },
    '666': {
        'id': 666,
        'name': 'Vivillon',
        'type': [
            'bug',
            'flying'
        ],
        'stats': {
            'hp': 80,
            'attack': 52,
            'defense': 50,
            'special-attack': 90,
            'special-defense': 50,
            'speed': 89
        },
        'gen': '6'
    },
    '667': {
        'id': 667,
        'name': 'Litleo',
        'type': [
            'fire',
            'normal'
        ],
        'stats': {
            'hp': 62,
            'attack': 50,
            'defense': 58,
            'special-attack': 73,
            'special-defense': 54,
            'speed': 72
        },
        'gen': '6'
    },
    '668': {
        'id': 668,
        'name': 'Pyroar',
        'type': [
            'fire',
            'normal'
        ],
        'stats': {
            'hp': 86,
            'attack': 68,
            'defense': 72,
            'special-attack': 109,
            'special-defense': 66,
            'speed': 106
        },
        'gen': '6'
    },
    '669': {
        'id': 669,
        'name': 'Flabebe',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 44,
            'attack': 38,
            'defense': 39,
            'special-attack': 61,
            'special-defense': 79,
            'speed': 42
        },
        'gen': '6'
    },
    '670': {
        'id': 670,
        'name': 'Floette',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 54,
            'attack': 45,
            'defense': 47,
            'special-attack': 75,
            'special-defense': 98,
            'speed': 52
        },
        'gen': '6'
    },
    '671': {
        'id': 671,
        'name': 'Florges',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 78,
            'attack': 65,
            'defense': 68,
            'special-attack': 112,
            'special-defense': 154,
            'speed': 75
        },
        'gen': '6'
    },
    '672': {
        'id': 672,
        'name': 'Skiddo',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 66,
            'attack': 65,
            'defense': 48,
            'special-attack': 62,
            'special-defense': 57,
            'speed': 52
        },
        'gen': '6'
    },
    '673': {
        'id': 673,
        'name': 'Gogoat',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 123,
            'attack': 100,
            'defense': 62,
            'special-attack': 97,
            'special-defense': 81,
            'speed': 68
        },
        'gen': '6'
    },
    '674': {
        'id': 674,
        'name': 'Pancham',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 67,
            'attack': 82,
            'defense': 62,
            'special-attack': 46,
            'special-defense': 48,
            'speed': 43
        },
        'gen': '6'
    },
    '675': {
        'id': 675,
        'name': 'Pangoro',
        'type': [
            'fighting',
            'dark'
        ],
        'stats': {
            'hp': 95,
            'attack': 124,
            'defense': 78,
            'special-attack': 69,
            'special-defense': 71,
            'speed': 58
        },
        'gen': '6'
    },
    '676': {
        'id': 676,
        'name': 'Furfrou',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 60,
            'special-attack': 65,
            'special-defense': 90,
            'speed': 102
        },
        'gen': '6'
    },
    '677': {
        'id': 677,
        'name': 'Espurr',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 62,
            'attack': 48,
            'defense': 54,
            'special-attack': 63,
            'special-defense': 60,
            'speed': 68
        },
        'gen': '6'
    },
    '678': {
        'id': 678,
        'name': 'Meowstic-male',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 74,
            'attack': 48,
            'defense': 76,
            'special-attack': 83,
            'special-defense': 81,
            'speed': 104
        },
        'gen': '6'
    },
    '679': {
        'id': 679,
        'name': 'Honedge',
        'type': [
            'steel',
            'ghost'
        ],
        'stats': {
            'hp': 45,
            'attack': 80,
            'defense': 100,
            'special-attack': 35,
            'special-defense': 37,
            'speed': 28
        },
        'gen': '6'
    },
    '680': {
        'id': 680,
        'name': 'Doublade',
        'type': [
            'steel',
            'ghost'
        ],
        'stats': {
            'hp': 59,
            'attack': 110,
            'defense': 150,
            'special-attack': 45,
            'special-defense': 49,
            'speed': 35
        },
        'gen': '6'
    },
    '681': {
        'id': 681,
        'name': 'Aegislash-shield',
        'type': [
            'steel',
            'ghost'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 140,
            'special-attack': 50,
            'special-defense': 140,
            'speed': 60
        },
        'gen': '6'
    },
    '682': {
        'id': 682,
        'name': 'Spritzee',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 78,
            'attack': 52,
            'defense': 60,
            'special-attack': 63,
            'special-defense': 65,
            'speed': 23
        },
        'gen': '6'
    },
    '683': {
        'id': 683,
        'name': 'Aromatisse',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 101,
            'attack': 72,
            'defense': 72,
            'special-attack': 99,
            'special-defense': 89,
            'speed': 29
        },
        'gen': '6'
    },
    '684': {
        'id': 684,
        'name': 'Swirlix',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 62,
            'attack': 48,
            'defense': 66,
            'special-attack': 59,
            'special-defense': 57,
            'speed': 49
        },
        'gen': '6'
    },
    '685': {
        'id': 685,
        'name': 'Slurpuff',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 82,
            'attack': 80,
            'defense': 86,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 72
        },
        'gen': '6'
    },
    '686': {
        'id': 686,
        'name': 'Inkay',
        'type': [
            'dark',
            'psychic'
        ],
        'stats': {
            'hp': 53,
            'attack': 54,
            'defense': 53,
            'special-attack': 37,
            'special-defense': 46,
            'speed': 45
        },
        'gen': '6'
    },
    '687': {
        'id': 687,
        'name': 'Malamar',
        'type': [
            'dark',
            'psychic'
        ],
        'stats': {
            'hp': 86,
            'attack': 92,
            'defense': 88,
            'special-attack': 68,
            'special-defense': 75,
            'speed': 73
        },
        'gen': '6'
    },
    '688': {
        'id': 688,
        'name': 'Binacle',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 42,
            'attack': 52,
            'defense': 67,
            'special-attack': 39,
            'special-defense': 56,
            'speed': 50
        },
        'gen': '6'
    },
    '689': {
        'id': 689,
        'name': 'Barbaracle',
        'type': [
            'rock',
            'water'
        ],
        'stats': {
            'hp': 72,
            'attack': 105,
            'defense': 115,
            'special-attack': 54,
            'special-defense': 86,
            'speed': 68
        },
        'gen': '6'
    },
    '690': {
        'id': 690,
        'name': 'Skrelp',
        'type': [
            'poison',
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 60,
            'defense': 60,
            'special-attack': 60,
            'special-defense': 60,
            'speed': 30
        },
        'gen': '6'
    },
    '691': {
        'id': 691,
        'name': 'Dragalge',
        'type': [
            'poison',
            'dragon'
        ],
        'stats': {
            'hp': 65,
            'attack': 75,
            'defense': 90,
            'special-attack': 97,
            'special-defense': 123,
            'speed': 44
        },
        'gen': '6'
    },
    '692': {
        'id': 692,
        'name': 'Clauncher',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 53,
            'defense': 62,
            'special-attack': 58,
            'special-defense': 63,
            'speed': 44
        },
        'gen': '6'
    },
    '693': {
        'id': 693,
        'name': 'Clawitzer',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 71,
            'attack': 73,
            'defense': 88,
            'special-attack': 120,
            'special-defense': 89,
            'speed': 59
        },
        'gen': '6'
    },
    '694': {
        'id': 694,
        'name': 'Helioptile',
        'type': [
            'electric',
            'normal'
        ],
        'stats': {
            'hp': 44,
            'attack': 38,
            'defense': 33,
            'special-attack': 61,
            'special-defense': 43,
            'speed': 70
        },
        'gen': '6'
    },
    '695': {
        'id': 695,
        'name': 'Heliolisk',
        'type': [
            'electric',
            'normal'
        ],
        'stats': {
            'hp': 62,
            'attack': 55,
            'defense': 52,
            'special-attack': 109,
            'special-defense': 94,
            'speed': 109
        },
        'gen': '6'
    },
    '696': {
        'id': 696,
        'name': 'Tyrunt',
        'type': [
            'rock',
            'dragon'
        ],
        'stats': {
            'hp': 58,
            'attack': 89,
            'defense': 77,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 48
        },
        'gen': '6'
    },
    '697': {
        'id': 697,
        'name': 'Tyrantrum',
        'type': [
            'rock',
            'dragon'
        ],
        'stats': {
            'hp': 82,
            'attack': 121,
            'defense': 119,
            'special-attack': 69,
            'special-defense': 59,
            'speed': 71
        },
        'gen': '6'
    },
    '698': {
        'id': 698,
        'name': 'Amaura',
        'type': [
            'rock',
            'ice'
        ],
        'stats': {
            'hp': 77,
            'attack': 59,
            'defense': 50,
            'special-attack': 67,
            'special-defense': 63,
            'speed': 46
        },
        'gen': '6'
    },
    '699': {
        'id': 699,
        'name': 'Aurorus',
        'type': [
            'rock',
            'ice'
        ],
        'stats': {
            'hp': 123,
            'attack': 77,
            'defense': 72,
            'special-attack': 99,
            'special-defense': 92,
            'speed': 58
        },
        'gen': '6'
    },
    '700': {
        'id': 700,
        'name': 'Sylveon',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 95,
            'attack': 65,
            'defense': 65,
            'special-attack': 110,
            'special-defense': 130,
            'speed': 60
        },
        'gen': '6'
    },
    '701': {
        'id': 701,
        'name': 'Hawlucha',
        'type': [
            'fighting',
            'flying'
        ],
        'stats': {
            'hp': 78,
            'attack': 92,
            'defense': 75,
            'special-attack': 74,
            'special-defense': 63,
            'speed': 118
        },
        'gen': '6'
    },
    '702': {
        'id': 702,
        'name': 'Dedenne',
        'type': [
            'electric',
            'fairy'
        ],
        'stats': {
            'hp': 67,
            'attack': 58,
            'defense': 57,
            'special-attack': 81,
            'special-defense': 67,
            'speed': 101
        },
        'gen': '6'
    },
    '703': {
        'id': 703,
        'name': 'Carbink',
        'type': [
            'rock',
            'fairy'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 150,
            'special-attack': 50,
            'special-defense': 150,
            'speed': 50
        },
        'gen': '6'
    },
    '704': {
        'id': 704,
        'name': 'Goomy',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 45,
            'attack': 50,
            'defense': 35,
            'special-attack': 55,
            'special-defense': 75,
            'speed': 40
        },
        'gen': '6'
    },
    '705': {
        'id': 705,
        'name': 'Sliggoo',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 68,
            'attack': 75,
            'defense': 53,
            'special-attack': 83,
            'special-defense': 113,
            'speed': 60
        },
        'gen': '6'
    },
    '706': {
        'id': 706,
        'name': 'Goodra',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 90,
            'attack': 100,
            'defense': 70,
            'special-attack': 110,
            'special-defense': 150,
            'speed': 80
        },
        'gen': '6'
    },
    '707': {
        'id': 707,
        'name': 'Klefki',
        'type': [
            'steel',
            'fairy'
        ],
        'stats': {
            'hp': 57,
            'attack': 80,
            'defense': 91,
            'special-attack': 80,
            'special-defense': 87,
            'speed': 75
        },
        'gen': '6'
    },
    '708': {
        'id': 708,
        'name': 'Phantump',
        'type': [
            'ghost',
            'grass'
        ],
        'stats': {
            'hp': 43,
            'attack': 70,
            'defense': 48,
            'special-attack': 50,
            'special-defense': 60,
            'speed': 38
        },
        'gen': '6'
    },
    '709': {
        'id': 709,
        'name': 'Trevenant',
        'type': [
            'ghost',
            'grass'
        ],
        'stats': {
            'hp': 85,
            'attack': 110,
            'defense': 76,
            'special-attack': 65,
            'special-defense': 82,
            'speed': 56
        },
        'gen': '6'
    },
    '710': {
        'id': 710,
        'name': 'Pumpkaboo-average',
        'type': [
            'ghost',
            'grass'
        ],
        'stats': {
            'hp': 49,
            'attack': 66,
            'defense': 70,
            'special-attack': 44,
            'special-defense': 55,
            'speed': 51
        },
        'gen': '6'
    },
    '711': {
        'id': 711,
        'name': 'Gourgeist-average',
        'type': [
            'ghost',
            'grass'
        ],
        'stats': {
            'hp': 65,
            'attack': 90,
            'defense': 122,
            'special-attack': 58,
            'special-defense': 75,
            'speed': 84
        },
        'gen': '6'
    },
    '712': {
        'id': 712,
        'name': 'Bergmite',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 55,
            'attack': 69,
            'defense': 85,
            'special-attack': 32,
            'special-defense': 35,
            'speed': 28
        },
        'gen': '6'
    },
    '713': {
        'id': 713,
        'name': 'Avalugg',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 95,
            'attack': 117,
            'defense': 184,
            'special-attack': 44,
            'special-defense': 46,
            'speed': 28
        },
        'gen': '6'
    },
    '714': {
        'id': 714,
        'name': 'Noibat',
        'type': [
            'flying',
            'dragon'
        ],
        'stats': {
            'hp': 40,
            'attack': 30,
            'defense': 35,
            'special-attack': 45,
            'special-defense': 40,
            'speed': 55
        },
        'gen': '6'
    },
    '715': {
        'id': 715,
        'name': 'Noivern',
        'type': [
            'flying',
            'dragon'
        ],
        'stats': {
            'hp': 85,
            'attack': 70,
            'defense': 80,
            'special-attack': 97,
            'special-defense': 80,
            'speed': 123
        },
        'gen': '6'
    },
    '716': {
        'id': 716,
        'name': 'Xerneas',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 126,
            'attack': 131,
            'defense': 95,
            'special-attack': 131,
            'special-defense': 98,
            'speed': 99
        },
        'gen': '6'
    },
    '717': {
        'id': 717,
        'name': 'Yveltal',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 126,
            'attack': 131,
            'defense': 95,
            'special-attack': 131,
            'special-defense': 98,
            'speed': 99
        },
        'gen': '6'
    },
    '718': {
        'id': 718,
        'name': 'Zygarde-50',
        'type': [
            'dragon',
            'ground'
        ],
        'stats': {
            'hp': 108,
            'attack': 100,
            'defense': 121,
            'special-attack': 81,
            'special-defense': 95,
            'speed': 95
        },
        'gen': '6'
    },
    '719': {
        'id': 719,
        'name': 'Diancie',
        'type': [
            'rock',
            'fairy'
        ],
        'stats': {
            'hp': 50,
            'attack': 100,
            'defense': 150,
            'special-attack': 100,
            'special-defense': 150,
            'speed': 50
        },
        'gen': '6'
    },
    '720': {
        'id': 720,
        'name': 'Hoopa',
        'type': [
            'psychic',
            'ghost'
        ],
        'stats': {
            'hp': 80,
            'attack': 110,
            'defense': 60,
            'special-attack': 150,
            'special-defense': 130,
            'speed': 70
        },
        'gen': '6'
    },
    '721': {
        'id': 721,
        'name': 'Volcanion',
        'type': [
            'fire',
            'water'
        ],
        'stats': {
            'hp': 80,
            'attack': 110,
            'defense': 120,
            'special-attack': 130,
            'special-defense': 90,
            'speed': 70
        },
        'gen': '6'
    },
    '722': {
        'id': 722,
        'name': 'Rowlet',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 68,
            'attack': 55,
            'defense': 55,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 42
        },
        'gen': '7'
    },
    '723': {
        'id': 723,
        'name': 'Dartrix',
        'type': [
            'grass',
            'flying'
        ],
        'stats': {
            'hp': 78,
            'attack': 75,
            'defense': 75,
            'special-attack': 70,
            'special-defense': 70,
            'speed': 52
        },
        'gen': '7'
    },
    '724': {
        'id': 724,
        'name': 'Decidueye',
        'type': [
            'grass',
            'ghost'
        ],
        'stats': {
            'hp': 78,
            'attack': 107,
            'defense': 75,
            'special-attack': 100,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '7'
    },
    '725': {
        'id': 725,
        'name': 'Litten',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 45,
            'attack': 65,
            'defense': 40,
            'special-attack': 60,
            'special-defense': 40,
            'speed': 70
        },
        'gen': '7'
    },
    '726': {
        'id': 726,
        'name': 'Torracat',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 85,
            'defense': 50,
            'special-attack': 80,
            'special-defense': 50,
            'speed': 90
        },
        'gen': '7'
    },
    '727': {
        'id': 727,
        'name': 'Incineroar',
        'type': [
            'fire',
            'dark'
        ],
        'stats': {
            'hp': 95,
            'attack': 115,
            'defense': 90,
            'special-attack': 80,
            'special-defense': 90,
            'speed': 60
        },
        'gen': '7'
    },
    '728': {
        'id': 728,
        'name': 'Popplio',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 54,
            'defense': 54,
            'special-attack': 66,
            'special-defense': 56,
            'speed': 40
        },
        'gen': '7'
    },
    '729': {
        'id': 729,
        'name': 'Brionne',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 60,
            'attack': 69,
            'defense': 69,
            'special-attack': 91,
            'special-defense': 81,
            'speed': 50
        },
        'gen': '7'
    },
    '730': {
        'id': 730,
        'name': 'Primarina',
        'type': [
            'water',
            'fairy'
        ],
        'stats': {
            'hp': 80,
            'attack': 74,
            'defense': 74,
            'special-attack': 126,
            'special-defense': 116,
            'speed': 60
        },
        'gen': '7'
    },
    '731': {
        'id': 731,
        'name': 'Pikipek',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 35,
            'attack': 75,
            'defense': 30,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 65
        },
        'gen': '7'
    },
    '732': {
        'id': 732,
        'name': 'Trumbeak',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 55,
            'attack': 85,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 75
        },
        'gen': '7'
    },
    '733': {
        'id': 733,
        'name': 'Toucannon',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 75,
            'special-attack': 75,
            'special-defense': 75,
            'speed': 60
        },
        'gen': '7'
    },
    '734': {
        'id': 734,
        'name': 'Yungoos',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 48,
            'attack': 70,
            'defense': 30,
            'special-attack': 30,
            'special-defense': 30,
            'speed': 45
        },
        'gen': '7'
    },
    '735': {
        'id': 735,
        'name': 'Gumshoos',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 88,
            'attack': 110,
            'defense': 60,
            'special-attack': 55,
            'special-defense': 60,
            'speed': 45
        },
        'gen': '7'
    },
    '736': {
        'id': 736,
        'name': 'Grubbin',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 47,
            'attack': 62,
            'defense': 45,
            'special-attack': 55,
            'special-defense': 45,
            'speed': 46
        },
        'gen': '7'
    },
    '737': {
        'id': 737,
        'name': 'Charjabug',
        'type': [
            'bug',
            'electric'
        ],
        'stats': {
            'hp': 57,
            'attack': 82,
            'defense': 95,
            'special-attack': 55,
            'special-defense': 75,
            'speed': 36
        },
        'gen': '7'
    },
    '738': {
        'id': 738,
        'name': 'Vikavolt',
        'type': [
            'bug',
            'electric'
        ],
        'stats': {
            'hp': 77,
            'attack': 70,
            'defense': 90,
            'special-attack': 145,
            'special-defense': 75,
            'speed': 43
        },
        'gen': '7'
    },
    '739': {
        'id': 739,
        'name': 'Crabrawler',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 47,
            'attack': 82,
            'defense': 57,
            'special-attack': 42,
            'special-defense': 47,
            'speed': 63
        },
        'gen': '7'
    },
    '740': {
        'id': 740,
        'name': 'Crabominable',
        'type': [
            'fighting',
            'ice'
        ],
        'stats': {
            'hp': 97,
            'attack': 132,
            'defense': 77,
            'special-attack': 62,
            'special-defense': 67,
            'speed': 43
        },
        'gen': '7'
    },
    '741': {
        'id': 741,
        'name': 'Oricorio-baile',
        'type': [
            'fire',
            'flying'
        ],
        'stats': {
            'hp': 75,
            'attack': 70,
            'defense': 70,
            'special-attack': 98,
            'special-defense': 70,
            'speed': 93
        },
        'gen': '7'
    },
    '742': {
        'id': 742,
        'name': 'Cutiefly',
        'type': [
            'bug',
            'fairy'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 40,
            'special-attack': 55,
            'special-defense': 40,
            'speed': 84
        },
        'gen': '7'
    },
    '743': {
        'id': 743,
        'name': 'Ribombee',
        'type': [
            'bug',
            'fairy'
        ],
        'stats': {
            'hp': 60,
            'attack': 55,
            'defense': 60,
            'special-attack': 95,
            'special-defense': 70,
            'speed': 124
        },
        'gen': '7'
    },
    '744': {
        'id': 744,
        'name': 'Rockruff',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 45,
            'attack': 65,
            'defense': 40,
            'special-attack': 30,
            'special-defense': 40,
            'speed': 60
        },
        'gen': '7'
    },
    '745': {
        'id': 745,
        'name': 'Lycanroc-midday',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 75,
            'attack': 115,
            'defense': 65,
            'special-attack': 55,
            'special-defense': 65,
            'speed': 112
        },
        'gen': '7'
    },
    '746': {
        'id': 746,
        'name': 'Wishiwashi-solo',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 45,
            'attack': 20,
            'defense': 20,
            'special-attack': 25,
            'special-defense': 25,
            'speed': 40
        },
        'gen': '7'
    },
    '747': {
        'id': 747,
        'name': 'Mareanie',
        'type': [
            'poison',
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 53,
            'defense': 62,
            'special-attack': 43,
            'special-defense': 52,
            'speed': 45
        },
        'gen': '7'
    },
    '748': {
        'id': 748,
        'name': 'Toxapex',
        'type': [
            'poison',
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 63,
            'defense': 152,
            'special-attack': 53,
            'special-defense': 142,
            'speed': 35
        },
        'gen': '7'
    },
    '749': {
        'id': 749,
        'name': 'Mudbray',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 70,
            'attack': 100,
            'defense': 70,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 45
        },
        'gen': '7'
    },
    '750': {
        'id': 750,
        'name': 'Mudsdale',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 100,
            'attack': 125,
            'defense': 100,
            'special-attack': 55,
            'special-defense': 85,
            'speed': 35
        },
        'gen': '7'
    },
    '751': {
        'id': 751,
        'name': 'Dewpider',
        'type': [
            'water',
            'bug'
        ],
        'stats': {
            'hp': 38,
            'attack': 40,
            'defense': 52,
            'special-attack': 40,
            'special-defense': 72,
            'speed': 27
        },
        'gen': '7'
    },
    '752': {
        'id': 752,
        'name': 'Araquanid',
        'type': [
            'water',
            'bug'
        ],
        'stats': {
            'hp': 68,
            'attack': 70,
            'defense': 92,
            'special-attack': 50,
            'special-defense': 132,
            'speed': 42
        },
        'gen': '7'
    },
    '753': {
        'id': 753,
        'name': 'Fomantis',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 55,
            'defense': 35,
            'special-attack': 50,
            'special-defense': 35,
            'speed': 35
        },
        'gen': '7'
    },
    '754': {
        'id': 754,
        'name': 'Lurantis',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 105,
            'defense': 90,
            'special-attack': 80,
            'special-defense': 90,
            'speed': 45
        },
        'gen': '7'
    },
    '755': {
        'id': 755,
        'name': 'Morelull',
        'type': [
            'grass',
            'fairy'
        ],
        'stats': {
            'hp': 40,
            'attack': 35,
            'defense': 55,
            'special-attack': 65,
            'special-defense': 75,
            'speed': 15
        },
        'gen': '7'
    },
    '756': {
        'id': 756,
        'name': 'Shiinotic',
        'type': [
            'grass',
            'fairy'
        ],
        'stats': {
            'hp': 60,
            'attack': 45,
            'defense': 80,
            'special-attack': 90,
            'special-defense': 100,
            'speed': 30
        },
        'gen': '7'
    },
    '757': {
        'id': 757,
        'name': 'Salandit',
        'type': [
            'poison',
            'fire'
        ],
        'stats': {
            'hp': 48,
            'attack': 44,
            'defense': 40,
            'special-attack': 71,
            'special-defense': 40,
            'speed': 77
        },
        'gen': '7'
    },
    '758': {
        'id': 758,
        'name': 'Salazzle',
        'type': [
            'poison',
            'fire'
        ],
        'stats': {
            'hp': 68,
            'attack': 64,
            'defense': 60,
            'special-attack': 111,
            'special-defense': 60,
            'speed': 117
        },
        'gen': '7'
    },
    '759': {
        'id': 759,
        'name': 'Stufful',
        'type': [
            'normal',
            'fighting'
        ],
        'stats': {
            'hp': 70,
            'attack': 75,
            'defense': 50,
            'special-attack': 45,
            'special-defense': 50,
            'speed': 50
        },
        'gen': '7'
    },
    '760': {
        'id': 760,
        'name': 'Bewear',
        'type': [
            'normal',
            'fighting'
        ],
        'stats': {
            'hp': 120,
            'attack': 125,
            'defense': 80,
            'special-attack': 55,
            'special-defense': 60,
            'speed': 60
        },
        'gen': '7'
    },
    '761': {
        'id': 761,
        'name': 'Bounsweet',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 42,
            'attack': 30,
            'defense': 38,
            'special-attack': 30,
            'special-defense': 38,
            'speed': 32
        },
        'gen': '7'
    },
    '762': {
        'id': 762,
        'name': 'Steenee',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 52,
            'attack': 40,
            'defense': 48,
            'special-attack': 40,
            'special-defense': 48,
            'speed': 62
        },
        'gen': '7'
    },
    '763': {
        'id': 763,
        'name': 'Tsareena',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 72,
            'attack': 120,
            'defense': 98,
            'special-attack': 50,
            'special-defense': 98,
            'speed': 72
        },
        'gen': '7'
    },
    '764': {
        'id': 764,
        'name': 'Comfey',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 51,
            'attack': 52,
            'defense': 90,
            'special-attack': 82,
            'special-defense': 110,
            'speed': 100
        },
        'gen': '7'
    },
    '765': {
        'id': 765,
        'name': 'Oranguru',
        'type': [
            'normal',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 60,
            'defense': 80,
            'special-attack': 90,
            'special-defense': 110,
            'speed': 60
        },
        'gen': '7'
    },
    '766': {
        'id': 766,
        'name': 'Passimian',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 100,
            'attack': 120,
            'defense': 90,
            'special-attack': 40,
            'special-defense': 60,
            'speed': 80
        },
        'gen': '7'
    },
    '767': {
        'id': 767,
        'name': 'Wimpod',
        'type': [
            'bug',
            'water'
        ],
        'stats': {
            'hp': 25,
            'attack': 35,
            'defense': 40,
            'special-attack': 20,
            'special-defense': 30,
            'speed': 80
        },
        'gen': '7'
    },
    '768': {
        'id': 768,
        'name': 'Golisopod',
        'type': [
            'bug',
            'water'
        ],
        'stats': {
            'hp': 75,
            'attack': 125,
            'defense': 140,
            'special-attack': 60,
            'special-defense': 90,
            'speed': 40
        },
        'gen': '7'
    },
    '769': {
        'id': 769,
        'name': 'Sandygast',
        'type': [
            'ghost',
            'ground'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 80,
            'special-attack': 70,
            'special-defense': 45,
            'speed': 15
        },
        'gen': '7'
    },
    '770': {
        'id': 770,
        'name': 'Palossand',
        'type': [
            'ghost',
            'ground'
        ],
        'stats': {
            'hp': 85,
            'attack': 75,
            'defense': 110,
            'special-attack': 100,
            'special-defense': 75,
            'speed': 35
        },
        'gen': '7'
    },
    '771': {
        'id': 771,
        'name': 'Pyukumuku',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 60,
            'defense': 130,
            'special-attack': 30,
            'special-defense': 130,
            'speed': 5
        },
        'gen': '7'
    },
    '772': {
        'id': 772,
        'name': 'Type-null',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 95,
            'attack': 95,
            'defense': 95,
            'special-attack': 95,
            'special-defense': 95,
            'speed': 59
        },
        'gen': '7'
    },
    '773': {
        'id': 773,
        'name': 'Silvally',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 95,
            'attack': 95,
            'defense': 95,
            'special-attack': 95,
            'special-defense': 95,
            'speed': 95
        },
        'gen': '7'
    },
    '774': {
        'id': 774,
        'name': 'Minior-red-meteor',
        'type': [
            'rock',
            'flying'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 100,
            'special-attack': 60,
            'special-defense': 100,
            'speed': 60
        },
        'gen': '7'
    },
    '775': {
        'id': 775,
        'name': 'Komala',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 65,
            'attack': 115,
            'defense': 65,
            'special-attack': 75,
            'special-defense': 95,
            'speed': 65
        },
        'gen': '7'
    },
    '776': {
        'id': 776,
        'name': 'Turtonator',
        'type': [
            'fire',
            'dragon'
        ],
        'stats': {
            'hp': 60,
            'attack': 78,
            'defense': 135,
            'special-attack': 91,
            'special-defense': 85,
            'speed': 36
        },
        'gen': '7'
    },
    '777': {
        'id': 777,
        'name': 'Togedemaru',
        'type': [
            'electric',
            'steel'
        ],
        'stats': {
            'hp': 65,
            'attack': 98,
            'defense': 63,
            'special-attack': 40,
            'special-defense': 73,
            'speed': 96
        },
        'gen': '7'
    },
    '778': {
        'id': 778,
        'name': 'Mimikyu-disguised',
        'type': [
            'ghost',
            'fairy'
        ],
        'stats': {
            'hp': 55,
            'attack': 90,
            'defense': 80,
            'special-attack': 50,
            'special-defense': 105,
            'speed': 96
        },
        'gen': '7'
    },
    '779': {
        'id': 779,
        'name': 'Bruxish',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 68,
            'attack': 105,
            'defense': 70,
            'special-attack': 70,
            'special-defense': 70,
            'speed': 92
        },
        'gen': '7'
    },
    '780': {
        'id': 780,
        'name': 'Drampa',
        'type': [
            'normal',
            'dragon'
        ],
        'stats': {
            'hp': 78,
            'attack': 60,
            'defense': 85,
            'special-attack': 135,
            'special-defense': 91,
            'speed': 36
        },
        'gen': '7'
    },
    '781': {
        'id': 781,
        'name': 'Dhelmise',
        'type': [
            'ghost',
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 131,
            'defense': 100,
            'special-attack': 86,
            'special-defense': 90,
            'speed': 40
        },
        'gen': '7'
    },
    '782': {
        'id': 782,
        'name': 'Jangmo-o',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 45,
            'attack': 55,
            'defense': 65,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 45
        },
        'gen': '7'
    },
    '783': {
        'id': 783,
        'name': 'Hakamo-o',
        'type': [
            'dragon',
            'fighting'
        ],
        'stats': {
            'hp': 55,
            'attack': 75,
            'defense': 90,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 65
        },
        'gen': '7'
    },
    '784': {
        'id': 784,
        'name': 'Kommo-o',
        'type': [
            'dragon',
            'fighting'
        ],
        'stats': {
            'hp': 75,
            'attack': 110,
            'defense': 125,
            'special-attack': 100,
            'special-defense': 105,
            'speed': 85
        },
        'gen': '7'
    },
    '785': {
        'id': 785,
        'name': 'Tapu-koko',
        'type': [
            'electric',
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 115,
            'defense': 85,
            'special-attack': 95,
            'special-defense': 75,
            'speed': 130
        },
        'gen': '7'
    },
    '786': {
        'id': 786,
        'name': 'Tapu-lele',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 75,
            'special-attack': 130,
            'special-defense': 115,
            'speed': 95
        },
        'gen': '7'
    },
    '787': {
        'id': 787,
        'name': 'Tapu-bulu',
        'type': [
            'grass',
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 130,
            'defense': 115,
            'special-attack': 85,
            'special-defense': 95,
            'speed': 75
        },
        'gen': '7'
    },
    '788': {
        'id': 788,
        'name': 'Tapu-fini',
        'type': [
            'water',
            'fairy'
        ],
        'stats': {
            'hp': 70,
            'attack': 75,
            'defense': 115,
            'special-attack': 95,
            'special-defense': 130,
            'speed': 85
        },
        'gen': '7'
    },
    '789': {
        'id': 789,
        'name': 'Cosmog',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 43,
            'attack': 29,
            'defense': 31,
            'special-attack': 29,
            'special-defense': 31,
            'speed': 37
        },
        'gen': '7'
    },
    '790': {
        'id': 790,
        'name': 'Cosmoem',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 43,
            'attack': 29,
            'defense': 131,
            'special-attack': 29,
            'special-defense': 131,
            'speed': 37
        },
        'gen': '7'
    },
    '791': {
        'id': 791,
        'name': 'Solgaleo',
        'type': [
            'psychic',
            'steel'
        ],
        'stats': {
            'hp': 137,
            'attack': 137,
            'defense': 107,
            'special-attack': 113,
            'special-defense': 89,
            'speed': 97
        },
        'gen': '7'
    },
    '792': {
        'id': 792,
        'name': 'Lunala',
        'type': [
            'psychic',
            'ghost'
        ],
        'stats': {
            'hp': 137,
            'attack': 113,
            'defense': 89,
            'special-attack': 137,
            'special-defense': 107,
            'speed': 97
        },
        'gen': '7'
    },
    '793': {
        'id': 793,
        'name': 'Nihilego',
        'type': [
            'rock',
            'poison'
        ],
        'stats': {
            'hp': 109,
            'attack': 53,
            'defense': 47,
            'special-attack': 127,
            'special-defense': 131,
            'speed': 103
        },
        'gen': '7'
    },
    '794': {
        'id': 794,
        'name': 'Buzzwole',
        'type': [
            'bug',
            'fighting'
        ],
        'stats': {
            'hp': 107,
            'attack': 139,
            'defense': 139,
            'special-attack': 53,
            'special-defense': 53,
            'speed': 79
        },
        'gen': '7'
    },
    '795': {
        'id': 795,
        'name': 'Pheromosa',
        'type': [
            'bug',
            'fighting'
        ],
        'stats': {
            'hp': 71,
            'attack': 137,
            'defense': 37,
            'special-attack': 137,
            'special-defense': 37,
            'speed': 151
        },
        'gen': '7'
    },
    '796': {
        'id': 796,
        'name': 'Xurkitree',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 83,
            'attack': 89,
            'defense': 71,
            'special-attack': 173,
            'special-defense': 71,
            'speed': 83
        },
        'gen': '7'
    },
    '797': {
        'id': 797,
        'name': 'Celesteela',
        'type': [
            'steel',
            'flying'
        ],
        'stats': {
            'hp': 97,
            'attack': 101,
            'defense': 103,
            'special-attack': 107,
            'special-defense': 101,
            'speed': 61
        },
        'gen': '7'
    },
    '798': {
        'id': 798,
        'name': 'Kartana',
        'type': [
            'grass',
            'steel'
        ],
        'stats': {
            'hp': 59,
            'attack': 181,
            'defense': 131,
            'special-attack': 59,
            'special-defense': 31,
            'speed': 109
        },
        'gen': '7'
    },
    '799': {
        'id': 799,
        'name': 'Guzzlord',
        'type': [
            'dark',
            'dragon'
        ],
        'stats': {
            'hp': 223,
            'attack': 101,
            'defense': 53,
            'special-attack': 97,
            'special-defense': 53,
            'speed': 43
        },
        'gen': '7'
    },
    '800': {
        'id': 800,
        'name': 'Necrozma',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 97,
            'attack': 107,
            'defense': 101,
            'special-attack': 127,
            'special-defense': 89,
            'speed': 79
        },
        'gen': '7'
    },
    '801': {
        'id': 801,
        'name': 'Magearna',
        'type': [
            'steel',
            'fairy'
        ],
        'stats': {
            'hp': 80,
            'attack': 95,
            'defense': 115,
            'special-attack': 130,
            'special-defense': 115,
            'speed': 65
        },
        'gen': '7'
    },
    '802': {
        'id': 802,
        'name': 'Marshadow',
        'type': [
            'fighting',
            'ghost'
        ],
        'stats': {
            'hp': 90,
            'attack': 125,
            'defense': 80,
            'special-attack': 90,
            'special-defense': 90,
            'speed': 125
        },
        'gen': '7'
    },
    '803': {
        'id': 803,
        'name': 'Poipole',
        'type': [
            'poison'
        ],
        'stats': {
            'hp': 67,
            'attack': 73,
            'defense': 67,
            'special-attack': 73,
            'special-defense': 67,
            'speed': 73
        },
        'gen': '7'
    },
    '804': {
        'id': 804,
        'name': 'Naganadel',
        'type': [
            'poison',
            'dragon'
        ],
        'stats': {
            'hp': 73,
            'attack': 73,
            'defense': 73,
            'special-attack': 127,
            'special-defense': 73,
            'speed': 121
        },
        'gen': '7'
    },
    '805': {
        'id': 805,
        'name': 'Stakataka',
        'type': [
            'rock',
            'steel'
        ],
        'stats': {
            'hp': 61,
            'attack': 131,
            'defense': 211,
            'special-attack': 53,
            'special-defense': 101,
            'speed': 13
        },
        'gen': '7'
    },
    '806': {
        'id': 806,
        'name': 'Blacephalon',
        'type': [
            'fire',
            'ghost'
        ],
        'stats': {
            'hp': 53,
            'attack': 127,
            'defense': 53,
            'special-attack': 151,
            'special-defense': 79,
            'speed': 107
        },
        'gen': '7'
    },
    '807': {
        'id': 807,
        'name': 'Zeraora',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 88,
            'attack': 112,
            'defense': 75,
            'special-attack': 102,
            'special-defense': 80,
            'speed': 143
        },
        'gen': '7'
    },
    '808': {
        'id': 808,
        'name': 'Meltan',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 46,
            'attack': 65,
            'defense': 65,
            'special-attack': 55,
            'special-defense': 35,
            'speed': 34
        },
        'gen': '7'
    },
    '809': {
        'id': 809,
        'name': 'Melmetal',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 135,
            'attack': 143,
            'defense': 143,
            'special-attack': 80,
            'special-defense': 65,
            'speed': 34
        },
        'gen': '7'
    },
    '810': {
        'id': 810,
        'name': 'Grookey',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 65
        },
        'gen': '8'
    },
    '811': {
        'id': 811,
        'name': 'Thwackey',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 70,
            'special-attack': 55,
            'special-defense': 60,
            'speed': 80
        },
        'gen': '8'
    },
    '812': {
        'id': 812,
        'name': 'Rillaboom',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 100,
            'attack': 125,
            'defense': 90,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 85
        },
        'gen': '8'
    },
    '813': {
        'id': 813,
        'name': 'Scorbunny',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 50,
            'attack': 71,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 69
        },
        'gen': '8'
    },
    '814': {
        'id': 814,
        'name': 'Raboot',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 86,
            'defense': 60,
            'special-attack': 55,
            'special-defense': 60,
            'speed': 94
        },
        'gen': '8'
    },
    '815': {
        'id': 815,
        'name': 'Cinderace',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 80,
            'attack': 116,
            'defense': 75,
            'special-attack': 65,
            'special-defense': 75,
            'speed': 119
        },
        'gen': '8'
    },
    '816': {
        'id': 816,
        'name': 'Sobble',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 40,
            'defense': 40,
            'special-attack': 70,
            'special-defense': 40,
            'speed': 70
        },
        'gen': '8'
    },
    '817': {
        'id': 817,
        'name': 'Drizzile',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 65,
            'attack': 60,
            'defense': 55,
            'special-attack': 95,
            'special-defense': 55,
            'speed': 90
        },
        'gen': '8'
    },
    '818': {
        'id': 818,
        'name': 'Inteleon',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 65,
            'special-attack': 125,
            'special-defense': 65,
            'speed': 120
        },
        'gen': '8'
    },
    '819': {
        'id': 819,
        'name': 'Skwovet',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 70,
            'attack': 55,
            'defense': 55,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 25
        },
        'gen': '8'
    },
    '820': {
        'id': 820,
        'name': 'Greedent',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 120,
            'attack': 95,
            'defense': 95,
            'special-attack': 55,
            'special-defense': 75,
            'speed': 20
        },
        'gen': '8'
    },
    '821': {
        'id': 821,
        'name': 'Rookidee',
        'type': [
            'flying'
        ],
        'stats': {
            'hp': 38,
            'attack': 47,
            'defense': 35,
            'special-attack': 33,
            'special-defense': 35,
            'speed': 57
        },
        'gen': '8'
    },
    '822': {
        'id': 822,
        'name': 'Corvisquire',
        'type': [
            'flying'
        ],
        'stats': {
            'hp': 68,
            'attack': 67,
            'defense': 55,
            'special-attack': 43,
            'special-defense': 55,
            'speed': 77
        },
        'gen': '8'
    },
    '823': {
        'id': 823,
        'name': 'Corviknight',
        'type': [
            'flying',
            'steel'
        ],
        'stats': {
            'hp': 98,
            'attack': 87,
            'defense': 105,
            'special-attack': 53,
            'special-defense': 85,
            'speed': 67
        },
        'gen': '8'
    },
    '824': {
        'id': 824,
        'name': 'Blipbug',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 25,
            'attack': 20,
            'defense': 20,
            'special-attack': 25,
            'special-defense': 45,
            'speed': 45
        },
        'gen': '8'
    },
    '825': {
        'id': 825,
        'name': 'Dottler',
        'type': [
            'bug',
            'psychic'
        ],
        'stats': {
            'hp': 50,
            'attack': 35,
            'defense': 80,
            'special-attack': 50,
            'special-defense': 90,
            'speed': 30
        },
        'gen': '8'
    },
    '826': {
        'id': 826,
        'name': 'Orbeetle',
        'type': [
            'bug',
            'psychic'
        ],
        'stats': {
            'hp': 60,
            'attack': 45,
            'defense': 110,
            'special-attack': 80,
            'special-defense': 120,
            'speed': 90
        },
        'gen': '8'
    },
    '827': {
        'id': 827,
        'name': 'Nickit',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 40,
            'attack': 28,
            'defense': 28,
            'special-attack': 47,
            'special-defense': 52,
            'speed': 50
        },
        'gen': '8'
    },
    '828': {
        'id': 828,
        'name': 'Thievul',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 58,
            'defense': 58,
            'special-attack': 87,
            'special-defense': 92,
            'speed': 90
        },
        'gen': '8'
    },
    '829': {
        'id': 829,
        'name': 'Gossifleur',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 60,
            'speed': 10
        },
        'gen': '8'
    },
    '830': {
        'id': 830,
        'name': 'Eldegoss',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 60,
            'attack': 50,
            'defense': 90,
            'special-attack': 80,
            'special-defense': 120,
            'speed': 60
        },
        'gen': '8'
    },
    '831': {
        'id': 831,
        'name': 'Wooloo',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 42,
            'attack': 40,
            'defense': 55,
            'special-attack': 40,
            'special-defense': 45,
            'speed': 48
        },
        'gen': '8'
    },
    '832': {
        'id': 832,
        'name': 'Dubwool',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 72,
            'attack': 80,
            'defense': 100,
            'special-attack': 60,
            'special-defense': 90,
            'speed': 88
        },
        'gen': '8'
    },
    '833': {
        'id': 833,
        'name': 'Chewtle',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 50,
            'attack': 64,
            'defense': 50,
            'special-attack': 38,
            'special-defense': 38,
            'speed': 44
        },
        'gen': '8'
    },
    '834': {
        'id': 834,
        'name': 'Drednaw',
        'type': [
            'water',
            'rock'
        ],
        'stats': {
            'hp': 90,
            'attack': 115,
            'defense': 90,
            'special-attack': 48,
            'special-defense': 68,
            'speed': 74
        },
        'gen': '8'
    },
    '835': {
        'id': 835,
        'name': 'Yamper',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 59,
            'attack': 45,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 26
        },
        'gen': '8'
    },
    '836': {
        'id': 836,
        'name': 'Boltund',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 69,
            'attack': 90,
            'defense': 60,
            'special-attack': 90,
            'special-defense': 60,
            'speed': 121
        },
        'gen': '8'
    },
    '837': {
        'id': 837,
        'name': 'Rolycoly',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 30,
            'attack': 40,
            'defense': 50,
            'special-attack': 40,
            'special-defense': 50,
            'speed': 30
        },
        'gen': '8'
    },
    '838': {
        'id': 838,
        'name': 'Carkol',
        'type': [
            'rock',
            'fire'
        ],
        'stats': {
            'hp': 80,
            'attack': 60,
            'defense': 90,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 50
        },
        'gen': '8'
    },
    '839': {
        'id': 839,
        'name': 'Coalossal',
        'type': [
            'rock',
            'fire'
        ],
        'stats': {
            'hp': 110,
            'attack': 80,
            'defense': 120,
            'special-attack': 80,
            'special-defense': 90,
            'speed': 30
        },
        'gen': '8'
    },
    '840': {
        'id': 840,
        'name': 'Applin',
        'type': [
            'grass',
            'dragon'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 80,
            'special-attack': 40,
            'special-defense': 40,
            'speed': 20
        },
        'gen': '8'
    },
    '841': {
        'id': 841,
        'name': 'Flapple',
        'type': [
            'grass',
            'dragon'
        ],
        'stats': {
            'hp': 70,
            'attack': 110,
            'defense': 80,
            'special-attack': 95,
            'special-defense': 60,
            'speed': 70
        },
        'gen': '8'
    },
    '842': {
        'id': 842,
        'name': 'Appletun',
        'type': [
            'grass',
            'dragon'
        ],
        'stats': {
            'hp': 110,
            'attack': 85,
            'defense': 80,
            'special-attack': 100,
            'special-defense': 80,
            'speed': 30
        },
        'gen': '8'
    },
    '843': {
        'id': 843,
        'name': 'Silicobra',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 52,
            'attack': 57,
            'defense': 75,
            'special-attack': 35,
            'special-defense': 50,
            'speed': 46
        },
        'gen': '8'
    },
    '844': {
        'id': 844,
        'name': 'Sandaconda',
        'type': [
            'ground'
        ],
        'stats': {
            'hp': 72,
            'attack': 107,
            'defense': 125,
            'special-attack': 65,
            'special-defense': 70,
            'speed': 71
        },
        'gen': '8'
    },
    '845': {
        'id': 845,
        'name': 'Cramorant',
        'type': [
            'flying',
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 55,
            'special-attack': 85,
            'special-defense': 95,
            'speed': 85
        },
        'gen': '8'
    },
    '846': {
        'id': 846,
        'name': 'Arrokuda',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 41,
            'attack': 63,
            'defense': 40,
            'special-attack': 40,
            'special-defense': 30,
            'speed': 66
        },
        'gen': '8'
    },
    '847': {
        'id': 847,
        'name': 'Barraskewda',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 61,
            'attack': 123,
            'defense': 60,
            'special-attack': 60,
            'special-defense': 50,
            'speed': 136
        },
        'gen': '8'
    },
    '848': {
        'id': 848,
        'name': 'Toxel',
        'type': [
            'electric',
            'poison'
        ],
        'stats': {
            'hp': 40,
            'attack': 38,
            'defense': 35,
            'special-attack': 54,
            'special-defense': 35,
            'speed': 40
        },
        'gen': '8'
    },
    '849': {
        'id': 849,
        'name': 'Toxtricity-amped',
        'type': [
            'electric',
            'poison'
        ],
        'stats': {
            'hp': 75,
            'attack': 98,
            'defense': 70,
            'special-attack': 114,
            'special-defense': 70,
            'speed': 75
        },
        'gen': '8'
    },
    '850': {
        'id': 850,
        'name': 'Sizzlipede',
        'type': [
            'fire',
            'bug'
        ],
        'stats': {
            'hp': 50,
            'attack': 65,
            'defense': 45,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 45
        },
        'gen': '8'
    },
    '851': {
        'id': 851,
        'name': 'Centiskorch',
        'type': [
            'fire',
            'bug'
        ],
        'stats': {
            'hp': 100,
            'attack': 115,
            'defense': 65,
            'special-attack': 90,
            'special-defense': 90,
            'speed': 65
        },
        'gen': '8'
    },
    '852': {
        'id': 852,
        'name': 'Clobbopus',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 50,
            'attack': 68,
            'defense': 60,
            'special-attack': 50,
            'special-defense': 50,
            'speed': 32
        },
        'gen': '8'
    },
    '853': {
        'id': 853,
        'name': 'Grapploct',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 80,
            'attack': 118,
            'defense': 90,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 42
        },
        'gen': '8'
    },
    '854': {
        'id': 854,
        'name': 'Sinistea',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 45,
            'special-attack': 74,
            'special-defense': 54,
            'speed': 50
        },
        'gen': '8'
    },
    '855': {
        'id': 855,
        'name': 'Polteageist',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 60,
            'attack': 65,
            'defense': 65,
            'special-attack': 134,
            'special-defense': 114,
            'speed': 70
        },
        'gen': '8'
    },
    '856': {
        'id': 856,
        'name': 'Hatenna',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 42,
            'attack': 30,
            'defense': 45,
            'special-attack': 56,
            'special-defense': 53,
            'speed': 39
        },
        'gen': '8'
    },
    '857': {
        'id': 857,
        'name': 'Hattrem',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 57,
            'attack': 40,
            'defense': 65,
            'special-attack': 86,
            'special-defense': 73,
            'speed': 49
        },
        'gen': '8'
    },
    '858': {
        'id': 858,
        'name': 'Hatterene',
        'type': [
            'psychic',
            'fairy'
        ],
        'stats': {
            'hp': 57,
            'attack': 90,
            'defense': 95,
            'special-attack': 136,
            'special-defense': 103,
            'speed': 29
        },
        'gen': '8'
    },
    '859': {
        'id': 859,
        'name': 'Impidimp',
        'type': [
            'dark',
            'fairy'
        ],
        'stats': {
            'hp': 45,
            'attack': 45,
            'defense': 30,
            'special-attack': 55,
            'special-defense': 40,
            'speed': 50
        },
        'gen': '8'
    },
    '860': {
        'id': 860,
        'name': 'Morgrem',
        'type': [
            'dark',
            'fairy'
        ],
        'stats': {
            'hp': 65,
            'attack': 60,
            'defense': 45,
            'special-attack': 75,
            'special-defense': 55,
            'speed': 70
        },
        'gen': '8'
    },
    '861': {
        'id': 861,
        'name': 'Grimmsnarl',
        'type': [
            'dark',
            'fairy'
        ],
        'stats': {
            'hp': 95,
            'attack': 120,
            'defense': 65,
            'special-attack': 95,
            'special-defense': 75,
            'speed': 60
        },
        'gen': '8'
    },
    '862': {
        'id': 862,
        'name': 'Obstagoon',
        'type': [
            'dark',
            'normal'
        ],
        'stats': {
            'hp': 93,
            'attack': 90,
            'defense': 101,
            'special-attack': 60,
            'special-defense': 81,
            'speed': 95
        },
        'gen': '8'
    },
    '863': {
        'id': 863,
        'name': 'Perrserker',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 110,
            'defense': 100,
            'special-attack': 50,
            'special-defense': 60,
            'speed': 50
        },
        'gen': '8'
    },
    '864': {
        'id': 864,
        'name': 'Cursola',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 60,
            'attack': 95,
            'defense': 50,
            'special-attack': 145,
            'special-defense': 130,
            'speed': 30
        },
        'gen': '8'
    },
    '865': {
        'id': 865,
        'name': 'Sirfetchd',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 62,
            'attack': 135,
            'defense': 95,
            'special-attack': 68,
            'special-defense': 82,
            'speed': 65
        },
        'gen': '8'
    },
    '866': {
        'id': 866,
        'name': 'Mr-rime',
        'type': [
            'ice',
            'psychic'
        ],
        'stats': {
            'hp': 80,
            'attack': 85,
            'defense': 75,
            'special-attack': 110,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '8'
    },
    '867': {
        'id': 867,
        'name': 'Runerigus',
        'type': [
            'ground',
            'ghost'
        ],
        'stats': {
            'hp': 58,
            'attack': 95,
            'defense': 145,
            'special-attack': 50,
            'special-defense': 105,
            'speed': 30
        },
        'gen': '8'
    },
    '868': {
        'id': 868,
        'name': 'Milcery',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 45,
            'attack': 40,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 61,
            'speed': 34
        },
        'gen': '8'
    },
    '869': {
        'id': 869,
        'name': 'Alcremie',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 65,
            'attack': 60,
            'defense': 75,
            'special-attack': 110,
            'special-defense': 121,
            'speed': 64
        },
        'gen': '8'
    },
    '870': {
        'id': 870,
        'name': 'Falinks',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 65,
            'attack': 100,
            'defense': 100,
            'special-attack': 70,
            'special-defense': 60,
            'speed': 75
        },
        'gen': '8'
    },
    '871': {
        'id': 871,
        'name': 'Pincurchin',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 48,
            'attack': 101,
            'defense': 95,
            'special-attack': 91,
            'special-defense': 85,
            'speed': 15
        },
        'gen': '8'
    },
    '872': {
        'id': 872,
        'name': 'Snom',
        'type': [
            'ice',
            'bug'
        ],
        'stats': {
            'hp': 30,
            'attack': 25,
            'defense': 35,
            'special-attack': 45,
            'special-defense': 30,
            'speed': 20
        },
        'gen': '8'
    },
    '873': {
        'id': 873,
        'name': 'Frosmoth',
        'type': [
            'ice',
            'bug'
        ],
        'stats': {
            'hp': 70,
            'attack': 65,
            'defense': 60,
            'special-attack': 125,
            'special-defense': 90,
            'speed': 65
        },
        'gen': '8'
    },
    '874': {
        'id': 874,
        'name': 'Stonjourner',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 100,
            'attack': 125,
            'defense': 135,
            'special-attack': 20,
            'special-defense': 20,
            'speed': 70
        },
        'gen': '8'
    },
    '875': {
        'id': 875,
        'name': 'Eiscue-ice',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 75,
            'attack': 80,
            'defense': 110,
            'special-attack': 65,
            'special-defense': 90,
            'speed': 50
        },
        'gen': '8'
    },
    '876': {
        'id': 876,
        'name': 'Indeedee-male',
        'type': [
            'psychic',
            'normal'
        ],
        'stats': {
            'hp': 60,
            'attack': 65,
            'defense': 55,
            'special-attack': 105,
            'special-defense': 95,
            'speed': 95
        },
        'gen': '8'
    },
    '877': {
        'id': 877,
        'name': 'Morpeko-full-belly',
        'type': [
            'electric',
            'dark'
        ],
        'stats': {
            'hp': 58,
            'attack': 95,
            'defense': 58,
            'special-attack': 70,
            'special-defense': 58,
            'speed': 97
        },
        'gen': '8'
    },
    '878': {
        'id': 878,
        'name': 'Cufant',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 72,
            'attack': 80,
            'defense': 49,
            'special-attack': 40,
            'special-defense': 49,
            'speed': 40
        },
        'gen': '8'
    },
    '879': {
        'id': 879,
        'name': 'Copperajah',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 122,
            'attack': 130,
            'defense': 69,
            'special-attack': 80,
            'special-defense': 69,
            'speed': 30
        },
        'gen': '8'
    },
    '880': {
        'id': 880,
        'name': 'Dracozolt',
        'type': [
            'electric',
            'dragon'
        ],
        'stats': {
            'hp': 90,
            'attack': 100,
            'defense': 90,
            'special-attack': 80,
            'special-defense': 70,
            'speed': 75
        },
        'gen': '8'
    },
    '881': {
        'id': 881,
        'name': 'Arctozolt',
        'type': [
            'electric',
            'ice'
        ],
        'stats': {
            'hp': 90,
            'attack': 100,
            'defense': 90,
            'special-attack': 90,
            'special-defense': 80,
            'speed': 55
        },
        'gen': '8'
    },
    '882': {
        'id': 882,
        'name': 'Dracovish',
        'type': [
            'water',
            'dragon'
        ],
        'stats': {
            'hp': 90,
            'attack': 90,
            'defense': 100,
            'special-attack': 70,
            'special-defense': 80,
            'speed': 75
        },
        'gen': '8'
    },
    '883': {
        'id': 883,
        'name': 'Arctovish',
        'type': [
            'water',
            'ice'
        ],
        'stats': {
            'hp': 90,
            'attack': 90,
            'defense': 100,
            'special-attack': 80,
            'special-defense': 90,
            'speed': 55
        },
        'gen': '8'
    },
    '884': {
        'id': 884,
        'name': 'Duraludon',
        'type': [
            'steel',
            'dragon'
        ],
        'stats': {
            'hp': 70,
            'attack': 95,
            'defense': 115,
            'special-attack': 120,
            'special-defense': 50,
            'speed': 85
        },
        'gen': '8'
    },
    '885': {
        'id': 885,
        'name': 'Dreepy',
        'type': [
            'dragon',
            'ghost'
        ],
        'stats': {
            'hp': 28,
            'attack': 60,
            'defense': 30,
            'special-attack': 40,
            'special-defense': 30,
            'speed': 82
        },
        'gen': '8'
    },
    '886': {
        'id': 886,
        'name': 'Drakloak',
        'type': [
            'dragon',
            'ghost'
        ],
        'stats': {
            'hp': 68,
            'attack': 80,
            'defense': 50,
            'special-attack': 60,
            'special-defense': 50,
            'speed': 102
        },
        'gen': '8'
    },
    '887': {
        'id': 887,
        'name': 'Dragapult',
        'type': [
            'dragon',
            'ghost'
        ],
        'stats': {
            'hp': 88,
            'attack': 120,
            'defense': 75,
            'special-attack': 100,
            'special-defense': 75,
            'speed': 142
        },
        'gen': '8'
    },
    '888': {
        'id': 888,
        'name': 'Zacian',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 92,
            'attack': 120,
            'defense': 115,
            'special-attack': 80,
            'special-defense': 115,
            'speed': 138
        },
        'gen': '8'
    },
    '889': {
        'id': 889,
        'name': 'Zamazenta',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 92,
            'attack': 120,
            'defense': 115,
            'special-attack': 80,
            'special-defense': 115,
            'speed': 138
        },
        'gen': '8'
    },
    '890': {
        'id': 890,
        'name': 'Eternatus',
        'type': [
            'poison',
            'dragon'
        ],
        'stats': {
            'hp': 140,
            'attack': 85,
            'defense': 95,
            'special-attack': 145,
            'special-defense': 95,
            'speed': 130
        },
        'gen': '8'
    },
    '891': {
        'id': 891,
        'name': 'Kubfu',
        'type': [
            'fighting'
        ],
        'stats': {
            'hp': 60,
            'attack': 90,
            'defense': 60,
            'special-attack': 53,
            'special-defense': 50,
            'speed': 72
        },
        'gen': '8'
    },
    '892': {
        'id': 892,
        'name': 'Urshifu-single-strike',
        'type': [
            'fighting',
            'dark'
        ],
        'stats': {
            'hp': 100,
            'attack': 130,
            'defense': 100,
            'special-attack': 63,
            'special-defense': 60,
            'speed': 97
        },
        'gen': '8'
    },
    '893': {
        'id': 893,
        'name': 'Zarude',
        'type': [
            'dark',
            'grass'
        ],
        'stats': {
            'hp': 105,
            'attack': 120,
            'defense': 105,
            'special-attack': 70,
            'special-defense': 95,
            'speed': 105
        },
        'gen': '8'
    },
    '894': {
        'id': 894,
        'name': 'Regieleki',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 80,
            'attack': 100,
            'defense': 50,
            'special-attack': 100,
            'special-defense': 50,
            'speed': 200
        },
        'gen': '8'
    },
    '895': {
        'id': 895,
        'name': 'Regidrago',
        'type': [
            'dragon'
        ],
        'stats': {
            'hp': 200,
            'attack': 100,
            'defense': 50,
            'special-attack': 100,
            'special-defense': 50,
            'speed': 80
        },
        'gen': '8'
    },
    '896': {
        'id': 896,
        'name': 'Glastrier',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 100,
            'attack': 145,
            'defense': 130,
            'special-attack': 65,
            'special-defense': 110,
            'speed': 30
        },
        'gen': '8'
    },
    '897': {
        'id': 897,
        'name': 'Spectrier',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 100,
            'attack': 65,
            'defense': 60,
            'special-attack': 145,
            'special-defense': 80,
            'speed': 130
        },
        'gen': '8'
    },
    '898': {
        'id': 898,
        'name': 'Calyrex',
        'type': [
            'psychic',
            'grass'
        ],
        'stats': {
            'hp': 100,
            'attack': 80,
            'defense': 80,
            'special-attack': 80,
            'special-defense': 80,
            'speed': 80
        },
        'gen': '8'
    },
    '899': {
        'id': 899,
        'name': 'Wyrdeer',
        'type': [
            'normal',
            'psychic'
        ],
        'stats': {
            'hp': 103,
            'attack': 105,
            'defense': 72,
            'special-attack': 105,
            'special-defense': 75,
            'speed': 65
        },
        'gen': '8'
    },
    '900': {
        'id': 900,
        'name': 'Kleavor',
        'type': [
            'bug',
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 135,
            'defense': 95,
            'special-attack': 45,
            'special-defense': 70,
            'speed': 85
        },
        'gen': '8'
    },
    '901': {
        'id': 901,
        'name': 'Ursaluna',
        'type': [
            'ground',
            'normal'
        ],
        'stats': {
            'hp': 130,
            'attack': 140,
            'defense': 105,
            'special-attack': 45,
            'special-defense': 80,
            'speed': 50
        },
        'gen': '8'
    },
    '902': {
        'id': 902,
        'name': 'Basculegion-male',
        'type': [
            'water',
            'ghost'
        ],
        'stats': {
            'hp': 120,
            'attack': 112,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 75,
            'speed': 78
        },
        'gen': '8'
    },
    '903': {
        'id': 903,
        'name': 'Sneasler',
        'type': [
            'fighting',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 130,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 80,
            'speed': 120
        },
        'gen': '8'
    },
    '904': {
        'id': 904,
        'name': 'Overqwil',
        'type': [
            'dark',
            'poison'
        ],
        'stats': {
            'hp': 85,
            'attack': 115,
            'defense': 95,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '8'
    },
    '905': {
        'id': 905,
        'name': 'Enamorus-incarnate',
        'type': [
            'fairy',
            'flying'
        ],
        'stats': {
            'hp': 74,
            'attack': 115,
            'defense': 70,
            'special-attack': 135,
            'special-defense': 80,
            'speed': 106
        },
        'gen': '8'
    },
    '906': {
        'id': 906,
        'name': 'Sprigatito',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 61,
            'defense': 54,
            'special-attack': 45,
            'special-defense': 45,
            'speed': 65
        },
        'gen': '9'
    },
    '907': {
        'id': 907,
        'name': 'Floragato',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 61,
            'attack': 80,
            'defense': 63,
            'special-attack': 60,
            'special-defense': 63,
            'speed': 83
        },
        'gen': '9'
    },
    '908': {
        'id': 908,
        'name': 'Meowscarada',
        'type': [
            'grass',
            'dark'
        ],
        'stats': {
            'hp': 76,
            'attack': 110,
            'defense': 70,
            'special-attack': 81,
            'special-defense': 70,
            'speed': 123
        },
        'gen': '9'
    },
    '909': {
        'id': 909,
        'name': 'Fuecoco',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 67,
            'attack': 45,
            'defense': 59,
            'special-attack': 63,
            'special-defense': 40,
            'speed': 36
        },
        'gen': '9'
    },
    '910': {
        'id': 910,
        'name': 'Crocalor',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 81,
            'attack': 55,
            'defense': 78,
            'special-attack': 90,
            'special-defense': 58,
            'speed': 49
        },
        'gen': '9'
    },
    '911': {
        'id': 911,
        'name': 'Skeledirge',
        'type': [
            'fire',
            'ghost'
        ],
        'stats': {
            'hp': 104,
            'attack': 75,
            'defense': 100,
            'special-attack': 110,
            'special-defense': 75,
            'speed': 66
        },
        'gen': '9'
    },
    '912': {
        'id': 912,
        'name': 'Quaxly',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 55,
            'attack': 65,
            'defense': 45,
            'special-attack': 50,
            'special-defense': 45,
            'speed': 50
        },
        'gen': '9'
    },
    '913': {
        'id': 913,
        'name': 'Quaxwell',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 65,
            'special-attack': 65,
            'special-defense': 60,
            'speed': 65
        },
        'gen': '9'
    },
    '914': {
        'id': 914,
        'name': 'Quaquaval',
        'type': [
            'water',
            'fighting'
        ],
        'stats': {
            'hp': 85,
            'attack': 120,
            'defense': 80,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 85
        },
        'gen': '9'
    },
    '915': {
        'id': 915,
        'name': 'Lechonk',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 54,
            'attack': 45,
            'defense': 40,
            'special-attack': 35,
            'special-defense': 45,
            'speed': 35
        },
        'gen': '9'
    },
    '916': {
        'id': 916,
        'name': 'Oinkologne',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 110,
            'attack': 100,
            'defense': 75,
            'special-attack': 59,
            'special-defense': 80,
            'speed': 65
        },
        'gen': '9'
    },
    '917': {
        'id': 917,
        'name': 'Tarountula',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 35,
            'attack': 41,
            'defense': 45,
            'special-attack': 29,
            'special-defense': 40,
            'speed': 20
        },
        'gen': '9'
    },
    '918': {
        'id': 918,
        'name': 'Spidops',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 60,
            'attack': 79,
            'defense': 92,
            'special-attack': 52,
            'special-defense': 86,
            'speed': 35
        },
        'gen': '9'
    },
    '919': {
        'id': 919,
        'name': 'Nymble',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 33,
            'attack': 46,
            'defense': 40,
            'special-attack': 21,
            'special-defense': 25,
            'speed': 45
        },
        'gen': '9'
    },
    '920': {
        'id': 920,
        'name': 'Lokix',
        'type': [
            'bug',
            'dark'
        ],
        'stats': {
            'hp': 71,
            'attack': 102,
            'defense': 78,
            'special-attack': 52,
            'special-defense': 55,
            'speed': 92
        },
        'gen': '9'
    },
    '921': {
        'id': 921,
        'name': 'Pawmi',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 45,
            'attack': 50,
            'defense': 20,
            'special-attack': 40,
            'special-defense': 25,
            'speed': 60
        },
        'gen': '9'
    },
    '922': {
        'id': 922,
        'name': 'Pawmo',
        'type': [
            'electric',
            'fighting'
        ],
        'stats': {
            'hp': 60,
            'attack': 75,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 40,
            'speed': 85
        },
        'gen': '9'
    },
    '923': {
        'id': 923,
        'name': 'Pawmot',
        'type': [
            'electric',
            'fighting'
        ],
        'stats': {
            'hp': 70,
            'attack': 115,
            'defense': 70,
            'special-attack': 70,
            'special-defense': 60,
            'speed': 105
        },
        'gen': '9'
    },
    '924': {
        'id': 924,
        'name': 'Tandemaus',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 50,
            'attack': 50,
            'defense': 45,
            'special-attack': 40,
            'special-defense': 45,
            'speed': 75
        },
        'gen': '9'
    },
    '925': {
        'id': 925,
        'name': 'Maushold',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 74,
            'attack': 75,
            'defense': 70,
            'special-attack': 65,
            'special-defense': 75,
            'speed': 111
        },
        'gen': '9'
    },
    '926': {
        'id': 926,
        'name': 'Fidough',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 37,
            'attack': 55,
            'defense': 70,
            'special-attack': 30,
            'special-defense': 55,
            'speed': 65
        },
        'gen': '9'
    },
    '927': {
        'id': 927,
        'name': 'Dachsbun',
        'type': [
            'fairy'
        ],
        'stats': {
            'hp': 57,
            'attack': 80,
            'defense': 115,
            'special-attack': 50,
            'special-defense': 80,
            'speed': 95
        },
        'gen': '9'
    },
    '928': {
        'id': 928,
        'name': 'Smoliv',
        'type': [
            'grass',
            'normal'
        ],
        'stats': {
            'hp': 41,
            'attack': 35,
            'defense': 45,
            'special-attack': 58,
            'special-defense': 51,
            'speed': 30
        },
        'gen': '9'
    },
    '929': {
        'id': 929,
        'name': 'Dolliv',
        'type': [
            'grass',
            'normal'
        ],
        'stats': {
            'hp': 52,
            'attack': 53,
            'defense': 60,
            'special-attack': 78,
            'special-defense': 78,
            'speed': 33
        },
        'gen': '9'
    },
    '930': {
        'id': 930,
        'name': 'Arboliva',
        'type': [
            'grass',
            'normal'
        ],
        'stats': {
            'hp': 78,
            'attack': 69,
            'defense': 90,
            'special-attack': 125,
            'special-defense': 109,
            'speed': 39
        },
        'gen': '9'
    },
    '931': {
        'id': 931,
        'name': 'Squawkabilly',
        'type': [
            'normal',
            'flying'
        ],
        'stats': {
            'hp': 82,
            'attack': 96,
            'defense': 51,
            'special-attack': 45,
            'special-defense': 51,
            'speed': 92
        },
        'gen': '9'
    },
    '932': {
        'id': 932,
        'name': 'Nacli',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 75,
            'special-attack': 35,
            'special-defense': 35,
            'speed': 25
        },
        'gen': '9'
    },
    '933': {
        'id': 933,
        'name': 'Naclstack',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 60,
            'attack': 60,
            'defense': 100,
            'special-attack': 35,
            'special-defense': 65,
            'speed': 35
        },
        'gen': '9'
    },
    '934': {
        'id': 934,
        'name': 'Garganacl',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 100,
            'attack': 100,
            'defense': 130,
            'special-attack': 45,
            'special-defense': 90,
            'speed': 35
        },
        'gen': '9'
    },
    '935': {
        'id': 935,
        'name': 'Charcadet',
        'type': [
            'fire'
        ],
        'stats': {
            'hp': 40,
            'attack': 50,
            'defense': 40,
            'special-attack': 50,
            'special-defense': 40,
            'speed': 35
        },
        'gen': '9'
    },
    '936': {
        'id': 936,
        'name': 'Armarouge',
        'type': [
            'fire',
            'psychic'
        ],
        'stats': {
            'hp': 85,
            'attack': 60,
            'defense': 100,
            'special-attack': 125,
            'special-defense': 80,
            'speed': 75
        },
        'gen': '9'
    },
    '937': {
        'id': 937,
        'name': 'Ceruledge',
        'type': [
            'fire',
            'ghost'
        ],
        'stats': {
            'hp': 75,
            'attack': 125,
            'defense': 80,
            'special-attack': 60,
            'special-defense': 100,
            'speed': 85
        },
        'gen': '9'
    },
    '938': {
        'id': 938,
        'name': 'Tadbulb',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 61,
            'attack': 31,
            'defense': 41,
            'special-attack': 59,
            'special-defense': 35,
            'speed': 45
        },
        'gen': '9'
    },
    '939': {
        'id': 939,
        'name': 'Bellibolt',
        'type': [
            'electric'
        ],
        'stats': {
            'hp': 109,
            'attack': 64,
            'defense': 91,
            'special-attack': 103,
            'special-defense': 83,
            'speed': 45
        },
        'gen': '9'
    },
    '940': {
        'id': 940,
        'name': 'Wattrel',
        'type': [
            'electric',
            'flying'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 35,
            'special-attack': 55,
            'special-defense': 40,
            'speed': 70
        },
        'gen': '9'
    },
    '941': {
        'id': 941,
        'name': 'Kilowattrel',
        'type': [
            'electric',
            'flying'
        ],
        'stats': {
            'hp': 70,
            'attack': 70,
            'defense': 60,
            'special-attack': 105,
            'special-defense': 60,
            'speed': 125
        },
        'gen': '9'
    },
    '942': {
        'id': 942,
        'name': 'Maschiff',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 60,
            'attack': 78,
            'defense': 60,
            'special-attack': 40,
            'special-defense': 51,
            'speed': 51
        },
        'gen': '9'
    },
    '943': {
        'id': 943,
        'name': 'Mabosstiff',
        'type': [
            'dark'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 90,
            'special-attack': 60,
            'special-defense': 70,
            'speed': 85
        },
        'gen': '9'
    },
    '944': {
        'id': 944,
        'name': 'Shroodle',
        'type': [
            'poison',
            'normal'
        ],
        'stats': {
            'hp': 40,
            'attack': 65,
            'defense': 35,
            'special-attack': 40,
            'special-defense': 35,
            'speed': 75
        },
        'gen': '9'
    },
    '945': {
        'id': 945,
        'name': 'Grafaiai',
        'type': [
            'poison',
            'normal'
        ],
        'stats': {
            'hp': 63,
            'attack': 95,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 72,
            'speed': 110
        },
        'gen': '9'
    },
    '946': {
        'id': 946,
        'name': 'Bramblin',
        'type': [
            'grass',
            'ghost'
        ],
        'stats': {
            'hp': 40,
            'attack': 65,
            'defense': 30,
            'special-attack': 45,
            'special-defense': 35,
            'speed': 60
        },
        'gen': '9'
    },
    '947': {
        'id': 947,
        'name': 'Brambleghast',
        'type': [
            'grass',
            'ghost'
        ],
        'stats': {
            'hp': 55,
            'attack': 115,
            'defense': 70,
            'special-attack': 80,
            'special-defense': 70,
            'speed': 90
        },
        'gen': '9'
    },
    '948': {
        'id': 948,
        'name': 'Toedscool',
        'type': [
            'ground',
            'grass'
        ],
        'stats': {
            'hp': 40,
            'attack': 40,
            'defense': 35,
            'special-attack': 50,
            'special-defense': 100,
            'speed': 70
        },
        'gen': '9'
    },
    '949': {
        'id': 949,
        'name': 'Toedscruel',
        'type': [
            'ground',
            'grass'
        ],
        'stats': {
            'hp': 80,
            'attack': 70,
            'defense': 65,
            'special-attack': 80,
            'special-defense': 120,
            'speed': 100
        },
        'gen': '9'
    },
    '950': {
        'id': 950,
        'name': 'Klawf',
        'type': [
            'rock'
        ],
        'stats': {
            'hp': 70,
            'attack': 100,
            'defense': 115,
            'special-attack': 35,
            'special-defense': 55,
            'speed': 75
        },
        'gen': '9'
    },
    '951': {
        'id': 951,
        'name': 'Capsakid',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 50,
            'attack': 62,
            'defense': 40,
            'special-attack': 62,
            'special-defense': 40,
            'speed': 50
        },
        'gen': '9'
    },
    '952': {
        'id': 952,
        'name': 'Scovillain',
        'type': [
            'grass',
            'fire'
        ],
        'stats': {
            'hp': 65,
            'attack': 108,
            'defense': 65,
            'special-attack': 108,
            'special-defense': 65,
            'speed': 75
        },
        'gen': '9'
    },
    '953': {
        'id': 953,
        'name': 'Rellor',
        'type': [
            'bug'
        ],
        'stats': {
            'hp': 41,
            'attack': 50,
            'defense': 60,
            'special-attack': 31,
            'special-defense': 58,
            'speed': 30
        },
        'gen': '9'
    },
    '954': {
        'id': 954,
        'name': 'Rabsca',
        'type': [
            'bug',
            'psychic'
        ],
        'stats': {
            'hp': 75,
            'attack': 50,
            'defense': 85,
            'special-attack': 115,
            'special-defense': 100,
            'speed': 45
        },
        'gen': '9'
    },
    '955': {
        'id': 955,
        'name': 'Flittle',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 30,
            'attack': 35,
            'defense': 30,
            'special-attack': 55,
            'special-defense': 30,
            'speed': 75
        },
        'gen': '9'
    },
    '956': {
        'id': 956,
        'name': 'Espathra',
        'type': [
            'psychic'
        ],
        'stats': {
            'hp': 95,
            'attack': 60,
            'defense': 60,
            'special-attack': 101,
            'special-defense': 60,
            'speed': 105
        },
        'gen': '9'
    },
    '957': {
        'id': 957,
        'name': 'Tinkatink',
        'type': [
            'fairy',
            'steel'
        ],
        'stats': {
            'hp': 50,
            'attack': 45,
            'defense': 45,
            'special-attack': 35,
            'special-defense': 64,
            'speed': 58
        },
        'gen': '9'
    },
    '958': {
        'id': 958,
        'name': 'Tinkatuff',
        'type': [
            'fairy',
            'steel'
        ],
        'stats': {
            'hp': 65,
            'attack': 55,
            'defense': 55,
            'special-attack': 45,
            'special-defense': 82,
            'speed': 78
        },
        'gen': '9'
    },
    '959': {
        'id': 959,
        'name': 'Tinkaton',
        'type': [
            'fairy',
            'steel'
        ],
        'stats': {
            'hp': 85,
            'attack': 75,
            'defense': 77,
            'special-attack': 70,
            'special-defense': 105,
            'speed': 94
        },
        'gen': '9'
    },
    '960': {
        'id': 960,
        'name': 'Wiglett',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 10,
            'attack': 55,
            'defense': 25,
            'special-attack': 35,
            'special-defense': 25,
            'speed': 95
        },
        'gen': '9'
    },
    '961': {
        'id': 961,
        'name': 'Wugtrio',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 35,
            'attack': 100,
            'defense': 50,
            'special-attack': 50,
            'special-defense': 70,
            'speed': 120
        },
        'gen': '9'
    },
    '962': {
        'id': 962,
        'name': 'Bombirdier',
        'type': [
            'flying',
            'dark'
        ],
        'stats': {
            'hp': 70,
            'attack': 103,
            'defense': 85,
            'special-attack': 60,
            'special-defense': 85,
            'speed': 82
        },
        'gen': '9'
    },
    '963': {
        'id': 963,
        'name': 'Finizen',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 70,
            'attack': 45,
            'defense': 40,
            'special-attack': 45,
            'special-defense': 40,
            'speed': 75
        },
        'gen': '9'
    },
    '964': {
        'id': 964,
        'name': 'Palafin',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 100,
            'attack': 70,
            'defense': 72,
            'special-attack': 53,
            'special-defense': 62,
            'speed': 100
        },
        'gen': '9'
    },
    '965': {
        'id': 965,
        'name': 'Varoom',
        'type': [
            'steel',
            'poison'
        ],
        'stats': {
            'hp': 45,
            'attack': 70,
            'defense': 63,
            'special-attack': 30,
            'special-defense': 45,
            'speed': 47
        },
        'gen': '9'
    },
    '966': {
        'id': 966,
        'name': 'Revavroom',
        'type': [
            'steel',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 119,
            'defense': 90,
            'special-attack': 54,
            'special-defense': 67,
            'speed': 90
        },
        'gen': '9'
    },
    '967': {
        'id': 967,
        'name': 'Cyclizar',
        'type': [
            'dragon',
            'normal'
        ],
        'stats': {
            'hp': 70,
            'attack': 95,
            'defense': 65,
            'special-attack': 85,
            'special-defense': 65,
            'speed': 121
        },
        'gen': '9'
    },
    '968': {
        'id': 968,
        'name': 'Orthworm',
        'type': [
            'steel'
        ],
        'stats': {
            'hp': 70,
            'attack': 85,
            'defense': 145,
            'special-attack': 60,
            'special-defense': 55,
            'speed': 65
        },
        'gen': '9'
    },
    '969': {
        'id': 969,
        'name': 'Glimmet',
        'type': [
            'rock',
            'poison'
        ],
        'stats': {
            'hp': 48,
            'attack': 35,
            'defense': 42,
            'special-attack': 105,
            'special-defense': 60,
            'speed': 60
        },
        'gen': '9'
    },
    '970': {
        'id': 970,
        'name': 'Glimmora',
        'type': [
            'rock',
            'poison'
        ],
        'stats': {
            'hp': 83,
            'attack': 55,
            'defense': 90,
            'special-attack': 130,
            'special-defense': 81,
            'speed': 86
        },
        'gen': '9'
    },
    '971': {
        'id': 971,
        'name': 'Greavard',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 50,
            'attack': 61,
            'defense': 60,
            'special-attack': 30,
            'special-defense': 55,
            'speed': 34
        },
        'gen': '9'
    },
    '972': {
        'id': 972,
        'name': 'Houndstone',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 72,
            'attack': 101,
            'defense': 100,
            'special-attack': 50,
            'special-defense': 97,
            'speed': 68
        },
        'gen': '9'
    },
    '973': {
        'id': 973,
        'name': 'Flamigo',
        'type': [
            'flying',
            'fighting'
        ],
        'stats': {
            'hp': 82,
            'attack': 115,
            'defense': 74,
            'special-attack': 75,
            'special-defense': 64,
            'speed': 90
        },
        'gen': '9'
    },
    '974': {
        'id': 974,
        'name': 'Cetoddle',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 108,
            'attack': 68,
            'defense': 45,
            'special-attack': 30,
            'special-defense': 40,
            'speed': 43
        },
        'gen': '9'
    },
    '975': {
        'id': 975,
        'name': 'Cetitan',
        'type': [
            'ice'
        ],
        'stats': {
            'hp': 170,
            'attack': 113,
            'defense': 65,
            'special-attack': 45,
            'special-defense': 55,
            'speed': 73
        },
        'gen': '9'
    },
    '976': {
        'id': 976,
        'name': 'Veluza',
        'type': [
            'water',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 102,
            'defense': 73,
            'special-attack': 78,
            'special-defense': 65,
            'speed': 70
        },
        'gen': '9'
    },
    '977': {
        'id': 977,
        'name': 'Dondozo',
        'type': [
            'water'
        ],
        'stats': {
            'hp': 150,
            'attack': 100,
            'defense': 115,
            'special-attack': 65,
            'special-defense': 65,
            'speed': 35
        },
        'gen': '9'
    },
    '978': {
        'id': 978,
        'name': 'Tatsugiri',
        'type': [
            'dragon',
            'water'
        ],
        'stats': {
            'hp': 68,
            'attack': 50,
            'defense': 60,
            'special-attack': 120,
            'special-defense': 95,
            'speed': 82
        },
        'gen': '9'
    },
    '979': {
        'id': 979,
        'name': 'Annihilape',
        'type': [
            'fighting',
            'ghost'
        ],
        'stats': {
            'hp': 110,
            'attack': 115,
            'defense': 80,
            'special-attack': 50,
            'special-defense': 90,
            'speed': 90
        },
        'gen': '9'
    },
    '980': {
        'id': 980,
        'name': 'Clodsire',
        'type': [
            'poison',
            'ground'
        ],
        'stats': {
            'hp': 130,
            'attack': 75,
            'defense': 60,
            'special-attack': 45,
            'special-defense': 100,
            'speed': 20
        },
        'gen': '9'
    },
    '981': {
        'id': 981,
        'name': 'Farigiraf',
        'type': [
            'normal',
            'psychic'
        ],
        'stats': {
            'hp': 120,
            'attack': 90,
            'defense': 70,
            'special-attack': 110,
            'special-defense': 70,
            'speed': 60
        },
        'gen': '9'
    },
    '982': {
        'id': 982,
        'name': 'Dudunsparce',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 125,
            'attack': 100,
            'defense': 80,
            'special-attack': 85,
            'special-defense': 75,
            'speed': 55
        },
        'gen': '9'
    },
    '983': {
        'id': 983,
        'name': 'Kingambit',
        'type': [
            'dark',
            'steel'
        ],
        'stats': {
            'hp': 100,
            'attack': 135,
            'defense': 120,
            'special-attack': 60,
            'special-defense': 85,
            'speed': 50
        },
        'gen': '9'
    },
    '984': {
        'id': 984,
        'name': 'Great-tusk',
        'type': [
            'ground',
            'fighting'
        ],
        'stats': {
            'hp': 115,
            'attack': 131,
            'defense': 131,
            'special-attack': 53,
            'special-defense': 53,
            'speed': 87
        },
        'gen': '9'
    },
    '985': {
        'id': 985,
        'name': 'Scream-tail',
        'type': [
            'fairy',
            'psychic'
        ],
        'stats': {
            'hp': 115,
            'attack': 65,
            'defense': 99,
            'special-attack': 65,
            'special-defense': 115,
            'speed': 111
        },
        'gen': '9'
    },
    '986': {
        'id': 986,
        'name': 'Brute-bonnet',
        'type': [
            'grass',
            'dark'
        ],
        'stats': {
            'hp': 111,
            'attack': 127,
            'defense': 99,
            'special-attack': 79,
            'special-defense': 99,
            'speed': 55
        },
        'gen': '9'
    },
    '987': {
        'id': 987,
        'name': 'Flutter-mane',
        'type': [
            'ghost',
            'fairy'
        ],
        'stats': {
            'hp': 55,
            'attack': 55,
            'defense': 55,
            'special-attack': 135,
            'special-defense': 135,
            'speed': 135
        },
        'gen': '9'
    },
    '988': {
        'id': 988,
        'name': 'Slither-wing',
        'type': [
            'bug',
            'fighting'
        ],
        'stats': {
            'hp': 85,
            'attack': 135,
            'defense': 79,
            'special-attack': 85,
            'special-defense': 105,
            'speed': 81
        },
        'gen': '9'
    },
    '989': {
        'id': 989,
        'name': 'Sandy-shocks',
        'type': [
            'electric',
            'ground'
        ],
        'stats': {
            'hp': 85,
            'attack': 81,
            'defense': 97,
            'special-attack': 121,
            'special-defense': 85,
            'speed': 101
        },
        'gen': '9'
    },
    '990': {
        'id': 990,
        'name': 'Iron-treads',
        'type': [
            'ground',
            'steel'
        ],
        'stats': {
            'hp': 90,
            'attack': 112,
            'defense': 120,
            'special-attack': 72,
            'special-defense': 70,
            'speed': 106
        },
        'gen': '9'
    },
    '991': {
        'id': 991,
        'name': 'Iron-bundle',
        'type': [
            'ice',
            'water'
        ],
        'stats': {
            'hp': 56,
            'attack': 80,
            'defense': 114,
            'special-attack': 124,
            'special-defense': 60,
            'speed': 136
        },
        'gen': '9'
    },
    '992': {
        'id': 992,
        'name': 'Iron-hands',
        'type': [
            'fighting',
            'electric'
        ],
        'stats': {
            'hp': 154,
            'attack': 140,
            'defense': 108,
            'special-attack': 50,
            'special-defense': 68,
            'speed': 50
        },
        'gen': '9'
    },
    '993': {
        'id': 993,
        'name': 'Iron-jugulis',
        'type': [
            'dark',
            'flying'
        ],
        'stats': {
            'hp': 94,
            'attack': 80,
            'defense': 86,
            'special-attack': 122,
            'special-defense': 80,
            'speed': 108
        },
        'gen': '9'
    },
    '994': {
        'id': 994,
        'name': 'Iron-moth',
        'type': [
            'fire',
            'poison'
        ],
        'stats': {
            'hp': 80,
            'attack': 70,
            'defense': 60,
            'special-attack': 140,
            'special-defense': 110,
            'speed': 110
        },
        'gen': '9'
    },
    '995': {
        'id': 995,
        'name': 'Iron-thorns',
        'type': [
            'rock',
            'electric'
        ],
        'stats': {
            'hp': 100,
            'attack': 134,
            'defense': 110,
            'special-attack': 70,
            'special-defense': 84,
            'speed': 72
        },
        'gen': '9'
    },
    '996': {
        'id': 996,
        'name': 'Frigibax',
        'type': [
            'dragon',
            'ice'
        ],
        'stats': {
            'hp': 65,
            'attack': 75,
            'defense': 45,
            'special-attack': 35,
            'special-defense': 45,
            'speed': 55
        },
        'gen': '9'
    },
    '997': {
        'id': 997,
        'name': 'Arctibax',
        'type': [
            'dragon',
            'ice'
        ],
        'stats': {
            'hp': 90,
            'attack': 95,
            'defense': 66,
            'special-attack': 45,
            'special-defense': 65,
            'speed': 62
        },
        'gen': '9'
    },
    '998': {
        'id': 998,
        'name': 'Baxcalibur',
        'type': [
            'dragon',
            'ice'
        ],
        'stats': {
            'hp': 115,
            'attack': 145,
            'defense': 92,
            'special-attack': 75,
            'special-defense': 86,
            'speed': 87
        },
        'gen': '9'
    },
    '999': {
        'id': 999,
        'name': 'Gimmighoul',
        'type': [
            'ghost'
        ],
        'stats': {
            'hp': 45,
            'attack': 30,
            'defense': 70,
            'special-attack': 75,
            'special-defense': 70,
            'speed': 10
        },
        'gen': '9'
    },
    '1000': {
        'id': 1000,
        'name': 'Gholdengo',
        'type': [
            'steel',
            'ghost'
        ],
        'stats': {
            'hp': 87,
            'attack': 60,
            'defense': 95,
            'special-attack': 133,
            'special-defense': 91,
            'speed': 84
        },
        'gen': '9'
    },
    '1001': {
        'id': 1001,
        'name': 'Wo-chien',
        'type': [
            'dark',
            'grass'
        ],
        'stats': {
            'hp': 85,
            'attack': 85,
            'defense': 100,
            'special-attack': 95,
            'special-defense': 135,
            'speed': 70
        },
        'gen': '9'
    },
    '1002': {
        'id': 1002,
        'name': 'Chien-pao',
        'type': [
            'dark',
            'ice'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 80,
            'special-attack': 90,
            'special-defense': 65,
            'speed': 135
        },
        'gen': '9'
    },
    '1003': {
        'id': 1003,
        'name': 'Ting-lu',
        'type': [
            'dark',
            'ground'
        ],
        'stats': {
            'hp': 155,
            'attack': 110,
            'defense': 125,
            'special-attack': 55,
            'special-defense': 80,
            'speed': 45
        },
        'gen': '9'
    },
    '1004': {
        'id': 1004,
        'name': 'Chi-yu',
        'type': [
            'dark',
            'fire'
        ],
        'stats': {
            'hp': 55,
            'attack': 80,
            'defense': 80,
            'special-attack': 135,
            'special-defense': 120,
            'speed': 100
        },
        'gen': '9'
    },
    '1005': {
        'id': 1005,
        'name': 'Roaring-moon',
        'type': [
            'dragon',
            'dark'
        ],
        'stats': {
            'hp': 105,
            'attack': 139,
            'defense': 71,
            'special-attack': 55,
            'special-defense': 101,
            'speed': 119
        },
        'gen': '9'
    },
    '1006': {
        'id': 1006,
        'name': 'Iron-valiant',
        'type': [
            'fairy',
            'fighting'
        ],
        'stats': {
            'hp': 74,
            'attack': 130,
            'defense': 90,
            'special-attack': 120,
            'special-defense': 60,
            'speed': 116
        },
        'gen': '9'
    },
    '1007': {
        'id': 1007,
        'name': 'Koraidon',
        'type': [
            'fighting',
            'dragon'
        ],
        'stats': {
            'hp': 100,
            'attack': 135,
            'defense': 115,
            'special-attack': 85,
            'special-defense': 100,
            'speed': 135
        },
        'gen': '9'
    },
    '1008': {
        'id': 1008,
        'name': 'Miraidon',
        'type': [
            'electric',
            'dragon'
        ],
        'stats': {
            'hp': 100,
            'attack': 85,
            'defense': 100,
            'special-attack': 135,
            'special-defense': 115,
            'speed': 135
        },
        'gen': '9'
    },
    '1009': {
        'id': 1009,
        'name': 'Walking-wake',
        'type': [
            'water',
            'dragon'
        ],
        'stats': {
            'hp': 99,
            'attack': 83,
            'defense': 91,
            'special-attack': 125,
            'special-defense': 83,
            'speed': 109
        },
        'gen': '9'
    },
    '1010': {
        'id': 1010,
        'name': 'Iron-leaves',
        'type': [
            'grass',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 130,
            'defense': 88,
            'special-attack': 70,
            'special-defense': 108,
            'speed': 104
        },
        'gen': '9'
    },
    '1011': {
        'id': 1011,
        'name': 'Dipplin',
        'type': [
            'grass',
            'dragon'
        ],
        'stats': {
            'hp': 80,
            'attack': 80,
            'defense': 110,
            'special-attack': 95,
            'special-defense': 80,
            'speed': 40
        },
        'gen': '9'
    },
    '1012': {
        'id': 1012,
        'name': 'Poltchageist',
        'type': [
            'grass',
            'ghost'
        ],
        'stats': {
            'hp': 40,
            'attack': 45,
            'defense': 45,
            'special-attack': 74,
            'special-defense': 54,
            'speed': 50
        },
        'gen': '9'
    },
    '1013': {
        'id': 1013,
        'name': 'Sinistcha',
        'type': [
            'grass',
            'ghost'
        ],
        'stats': {
            'hp': 71,
            'attack': 60,
            'defense': 106,
            'special-attack': 121,
            'special-defense': 80,
            'speed': 70
        },
        'gen': '9'
    },
    '1014': {
        'id': 1014,
        'name': 'Okidogi',
        'type': [
            'poison',
            'fighting'
        ],
        'stats': {
            'hp': 88,
            'attack': 128,
            'defense': 115,
            'special-attack': 58,
            'special-defense': 86,
            'speed': 80
        },
        'gen': '9'
    },
    '1015': {
        'id': 1015,
        'name': 'Munkidori',
        'type': [
            'poison',
            'psychic'
        ],
        'stats': {
            'hp': 88,
            'attack': 75,
            'defense': 66,
            'special-attack': 130,
            'special-defense': 90,
            'speed': 106
        },
        'gen': '9'
    },
    '1016': {
        'id': 1016,
        'name': 'Fezandipiti',
        'type': [
            'poison',
            'fairy'
        ],
        'stats': {
            'hp': 88,
            'attack': 91,
            'defense': 82,
            'special-attack': 70,
            'special-defense': 125,
            'speed': 99
        },
        'gen': '9'
    },
    '1017': {
        'id': 1017,
        'name': 'Ogerpon',
        'type': [
            'grass'
        ],
        'stats': {
            'hp': 80,
            'attack': 120,
            'defense': 84,
            'special-attack': 60,
            'special-defense': 96,
            'speed': 110
        },
        'gen': '9'
    },
    '1018': {
        'id': 1018,
        'name': 'Archaludon',
        'type': [
            'steel',
            'dragon'
        ],
        'stats': {
            'hp': 90,
            'attack': 105,
            'defense': 130,
            'special-attack': 125,
            'special-defense': 65,
            'speed': 85
        },
        'gen': '9'
    },
    '1019': {
        'id': 1019,
        'name': 'Hydrapple',
        'type': [
            'grass',
            'dragon'
        ],
        'stats': {
            'hp': 106,
            'attack': 80,
            'defense': 110,
            'special-attack': 120,
            'special-defense': 80,
            'speed': 44
        },
        'gen': '9'
    },
    '1020': {
        'id': 1020,
        'name': 'Gouging-fire',
        'type': [
            'fire',
            'dragon'
        ],
        'stats': {
            'hp': 105,
            'attack': 115,
            'defense': 121,
            'special-attack': 65,
            'special-defense': 93,
            'speed': 91
        },
        'gen': '9'
    },
    '1021': {
        'id': 1021,
        'name': 'Raging-bolt',
        'type': [
            'electric',
            'dragon'
        ],
        'stats': {
            'hp': 125,
            'attack': 73,
            'defense': 91,
            'special-attack': 137,
            'special-defense': 89,
            'speed': 75
        },
        'gen': '9'
    },
    '1022': {
        'id': 1022,
        'name': 'Iron-boulder',
        'type': [
            'rock',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 120,
            'defense': 80,
            'special-attack': 68,
            'special-defense': 108,
            'speed': 124
        },
        'gen': '9'
    },
    '1023': {
        'id': 1023,
        'name': 'Iron-crown',
        'type': [
            'steel',
            'psychic'
        ],
        'stats': {
            'hp': 90,
            'attack': 72,
            'defense': 100,
            'special-attack': 122,
            'special-defense': 108,
            'speed': 98
        },
        'gen': '9'
    },
    '1024': {
        'id': 1024,
        'name': 'Terapagos',
        'type': [
            'normal'
        ],
        'stats': {
            'hp': 90,
            'attack': 65,
            'defense': 85,
            'special-attack': 65,
            'special-defense': 85,
            'speed': 60
        },
        'gen': '9'
    },
    '1025': {
        'id': 1025,
        'name': 'Pecharunt',
        'type': [
            'poison',
            'ghost'
        ],
        'stats': {
            'hp': 88,
            'attack': 88,
            'defense': 160,
            'special-attack': 88,
            'special-defense': 88,
            'speed': 88
        },
        'gen': '9'
    }
};

const all_types = ['water', 'fire', 'grass', 'poison', 'steel', 'ground', 'rock', 'fairy', 'electric', 'bug', 'dark', 'flying', 'fighting', 'ghost', 'dragon', 'normal', 'ice', 'psychic'];

const all_gens = {1: ['0','151'], 2: ['152','251'], 3: ['252','386'], 4: ['387','493'], 5: ['494','649'], 6: ['650','721'], 7: ['722','807'], 8: ['808','898'], 9: ['899','1025']}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.reroll-button').addEventListener('mouseenter', () => {
		document.querySelector('.reroll-button').src = 'medias/images/content/button_hover.png';
	});
	
	document.querySelector('.reroll-button').addEventListener('mouseleave', () => {
		document.querySelector('.reroll-button').src = 'medias/images/content/button_background.png';
	});
});

function enable_single_reroll() {
	document.querySelectorAll('.pokemon-case').forEach(element => {
		element.addEventListener('click', reroll_single_pokemon);
	});
}

function reroll_pokemon_choice() {
	document.querySelector('.reroll-button').disabled = true;

	const pokemon_ids = get_random_team_ids();
	let i = 0;

	document.querySelectorAll('.pokemon-case').forEach(pokemon_case => {
		const pokemon_sprite = `<img src='${get_pokemon_sprite(pokemon_ids[i])}' id='${i}' class='pokemon-sprites'>`;
		pokemon_case.innerHTML = pokemon_sprite;
		display_pokemon_details(pokemon_ids[i], i);
		i++;
	});

	setTimeout(() => {
		document.querySelector('.reroll-button').disabled = false;
		enable_single_reroll();
	}, 500);
}

function reroll_single_pokemon(event) {
	const gen = get_gen();
	const pokemon_id = get_random_id(gen);
	const single_case = document.querySelector(`#case-${event.target.id}`);

	const pokemon_sprite = `<img src='${get_pokemon_sprite(pokemon_id)}' id='${event.target.id}' class='pokemon-sprites'>`;
	single_case.innerHTML = pokemon_sprite;
	display_pokemon_details(pokemon_id, event.target.id);
}

function display_pokemon_details(pokemon_id, case_id) {
	function format_pokemon_name(name) {
		switch (name) {
			case 'mr-mime':
				return 'Mr Mime';
			case 'mime-jr':
				return 'Mime Jr';
			case 'jangmo-o':
				return 'Jangmo O';
			case 'hakamo-o':
				return 'Hakamo O';
			case 'kommo-o':
				return 'Kommo O';
			case 'tapu-koko':
				return 'Tapu Koko';
			case 'tapu-lele':
				return 'Tapu Lele';
			case 'tapu-lulu':
				return 'Tapu Lulu';
			case 'tapu-fini':
				return 'Tapu Fini';
			case 'great-tusk':
				return 'Great Tusk';
			case 'scream-tail':
				return 'Scream Tail';
			case 'brute-bonnet':
				return 'Brute Bonnet';
			case 'flutter-mane':
				return 'Flutter Mane';
			case 'slither-wing':
				return 'Slither Wing';
			case 'sandy-shocks':
				return 'Sandy Shocks';
			case 'iron-treads':
				return 'Iron Treads';
			case 'iron-bundle':
				return 'Iron Bundle';
			case 'iron-hands':
				return 'Iron Hands';
			case 'iron-jugulis':
				return 'Iron Jugulis';
			case 'iron-moth':
				return 'Iron Moth';
			case 'iron-thorns':
				return 'Iron Thorns';
			case 'wo-chien':
				return 'Wo Chien';
			case 'chien-pao':
				return 'Chien Pao';
			case 'ting-lu':
				return 'Ting Lu';
			case 'chi-yu':
				return 'Chi Yu';
			case 'roaring-moon':
				return 'Roaring Moon';
			case 'iron-valiant':
				return 'Iron Valiant';
			case 'walking-wake':
				return 'Walking Wake';
			case 'iron-leaves':
				return 'Iron Leaves';
			case 'gouging-fire':
				return 'Gouging Fire';
			case 'raging-bolt':
				return 'Raging Bolt';
			case 'iron-boulder':
				return 'Iron Boulder';
			case 'iron-crown':
				return 'Iron Crown';
			default:
				const index = name.indexOf('-');
				if (index !== -1)
					return name.substring(0, index);
				return name;
		}
	}

	function capitalize_first_letter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	function stat_checker(stats) {
		const highest_value = Math.max(...stats.map(stat => stat.value));
		const lowest_value = Math.min(...stats.map(stat => stat.value));

		const highest_stats = stats
			.filter(stat => stat.value === highest_value)
			.map(stat => stat.name);

		const lowest_stats = stats
			.filter(stat => stat.value === lowest_value)
			.map(stat => stat.name);
	
		return {
			'lowest': lowest_stats,
			'highest': highest_stats
		};
	}

	function format_stat_name(stat_name) {
		switch(stat_name) {
			case 'hp':
				return 'HP';

			case 'attack':
				return 'Atk';

			case 'defense':
				return 'Def';

			case 'special-attack':
				return 'SpAtk';

			case 'special-defense':
				return 'SpDef';

			case 'speed':
				return 'SpD';

			default:
				return stat_name;
		}
	}

	const pokemon_detail_element = document.querySelector(`#detail-${case_id}`);
	pokemon_detail_element.style.opacity = 0;

	setTimeout(() => {
		const pokemon_infos = get_pokemon_infos(pokemon_id);
		
		const stat_check = stat_checker(pokemon_infos.stats);
		const highest = stat_check['highest'];
		const lowest = stat_check['lowest'];
	
		const pokemon_details = `
			<span class='header'>
				<span class='pokedex-info'>
					<h2>${capitalize_first_letter(format_pokemon_name(pokemon_infos.name))}</h2>
					<p><strong>No.:</strong> ${pokemon_infos.id}</p>
				</span>
				<img src='${get_pokemon_sprite(pokemon_infos.id)}' id='${pokemon_infos.id}' alt='${capitalize_first_letter(pokemon_infos.name)}' title='${capitalize_first_letter(pokemon_infos.name)}' class='pokemon-sprites'>
			</span>
			<span class='infos'>
				<span class='type'>
					${pokemon_infos.types.map(type => `<img src='medias/images/types/${type}.png' class='type-sprites' alt='${type}'>`).join('')}
				</span>
				<table>
					${pokemon_infos.stats.map(stat => {
						let class_name = '';
	
						if (highest.includes(stat.name))
							class_name = 'highest';
						else if (lowest.includes(stat.name))
							class_name = 'lowest';

						const real_stat_percent = stat.value * 100 / 180;

						let color = '';
						if (stat.value <= 30)
							color = 'low';
						else if (stat.value <= 60)
							color = 'mid';
						else if (stat.value <= 80)
							color = 'good';
						else
							color = 'better';

						return `
						<tr>
							<td class='${class_name}'>${format_stat_name(stat.name)}:</td>
							<td>
								<span class='progress-container'>
									<span class='progress-bar ${color}' style='width:${real_stat_percent}%' id='progress-bar'></span>
								</span>
							</td>
						</tr>
						`;
					}).join('')}
				</table>
			</span>
		`;
	
		if(pokemon_detail_element.classList.contains('unused')) {
			pokemon_detail_element.classList.remove('unused');
			pokemon_detail_element.classList.add('used');
		}
	
		all_types.forEach(function(type) {
			pokemon_detail_element.classList.remove(type);
		});
	
		pokemon_detail_element.classList.add(pokemon_infos.types[0]);
	
		setTimeout(() => {
			pokemon_detail_element.style.opacity = '1';
		}, 300);
	
		pokemon_detail_element.innerHTML = pokemon_details;
	}, 300);
}

function get_pokemon_sprite(pokemon_id) {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png`;
}

function get_pokemon_infos(pokemon_id) {
	const pokemon = pokemons[pokemon_id];
    return {
        name: pokemon.name,
        id: pokemon.id,
        types: pokemon.type,
        stats: Object.entries(pokemon.stats).map(([name, value]) => ({
            name,
            value
        }))
    };
}

function get_gen() {
	return document.getElementById('gen_getter').getAttribute('data-id');
}

function change_gen() {
	const selected_element = document.getElementById('gen_setter');
	const gen_getter = document.getElementById('gen_getter');
	gen_getter.setAttribute('data-id', selected_element.value);

}

function get_random_team_ids() {
    const ids = [];
    for (let i = 0; i < 6; i++)
        ids.push(get_random_id(get_gen()));

    return ids;
}

function get_random_id(gen) {
	if(gen < 1 || gen > 9)
		return Math.floor(Math.random() * 1025) + 1;

	min = parseInt(all_gens[gen][0]);
	max = parseInt(all_gens[gen][1]);
	return Math.floor(Math.random() * (max - min + 1) + min);
}