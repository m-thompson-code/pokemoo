import { PokeLocation, SpawnType, LocationPokemonData, pokeLocationDatas } from './poke_locations';

export type PokemonName = "Bulbasaur" | "Ivysaur" | "Venusaur" | "Charmander" | "Charmeleon" | "Charizard" | "Squirtle" | "Wartortle" | "Blastoise" | "Caterpie" | "Metapod" | "Butterfree" | "Weedle" | "Kakuna" | "Beedrill" | "Pidgey" | "Pidgeotto" | "Pidgeot" | "Rattata" | "Raticate" | "Spearow" | "Fearow" | "Ekans" | "Arbok" | "Pikachu" | "Raichu" | "Sandshrew" | "Sandslash" | "Nidoran [Female]" | "Nidorina" | "Nidoqueen" | "Nidoran [Male]" | "Nidorino" | "Nidoking" | "Clefairy" | "Clefable" | "Vulpix" | "Ninetales" | "Jigglypuff" | "Wigglytuff" | "Zubat" | "Golbat" | "Oddish" | "Gloom" | "Vileplume" | "Paras" | "Parasect" | "Venonat" | "Venomoth" | "Diglett" | "Dugtrio" | "Meowth" | "Persian" | "Psyduck" | "Golduck" | "Mankey" | "Primeape" | "Growlithe" | "Arcanine" | "Poliwag" | "Poliwhirl" | "Poliwrath" | "Abra" | "Kadabra" | "Alakazam" | "Machop" | "Machoke" | "Machamp" | "Bellsprout" | "Weepinbell" | "Victreebel" | "Tentacool" | "Tentacruel" | "Geodude" | "Graveler" | "Golem" | "Ponyta" | "Rapidash" | "Slowpoke" | "Slowbro" | "Magnemite" | "Magneton" | "Farfetch'd" | "Doduo" | "Dodrio" | "Seel" | "Dewgong" | "Grimer" | "Muk" | "Shellder" | "Cloyster" | "Gastly" | "Haunter" | "Gengar" | "Onix" | "Drowzee" | "Hypno" | "Krabby" | "Kingler" | "Voltorb" | "Electrode" | "Exeggcute" | "Exeggutor" | "Cubone" | "Marowak" | "Hitmonlee" | "Hitmonchan" | "Lickitung" | "Koffing" | "Weezing" | "Rhyhorn" | "Rhydon" | "Chansey" | "Tangela" | "Kangaskhan" | "Horsea" | "Seadra" | "Goldeen" | "Seaking" | "Staryu" | "Starmie" | "Mr. Mime" | "Scyther" | "Jynx" | "Electabuzz" | "Magmar" | "Pinsir" | "Tauros" | "Magikarp" | "Gyarados" | "Lapras" | "Ditto" | "Eevee" | "Vaporeon" | "Jolteon" | "Flareon" | "Porygon" | "Omanyte" | "Omastar" | "Kabuto" | "Kabutops" | "Aerodactyl" | "Snorlax" | "Articuno" | "Zapdos" | "Moltres" | "Dratini" | "Dragonair" | "Dragonite" | "Mewtwo" | "Mew"

export type EvolutionStone = 'Leaf Stone' | 'Thunder Stone' | 'Fire Stone' | 'Water Stone' | 'Moon Stone';

export type SpecialEvolution = 'Trade Back Disc';

export type ExpGrowthText = 'Slow' | 'Medium Slow' | 'Medium Fast' | 'Fast';
export type ExpGrowth = 1250000 | 1059860 | 1000000 | 800000;

export interface SlowExpGrowth {
    expGrowth: 1250000;
    expGrowthText: 'Slow';
}

export interface MediumSlowExpGrowth {
    expGrowth: 1059860;
    expGrowthText: 'Medium Slow';
}

export interface MediumFastExpGrowth {
    expGrowth: 1000000;
    expGrowthText: 'Medium Fast';
}

export interface FastExpGrowth {
    expGrowth: 800000;
    expGrowthText: 'Fast';
}

export type HasExpGrowth = SlowExpGrowth | MediumSlowExpGrowth | MediumFastExpGrowth | FastExpGrowth;

export interface CanEvolve {
    evolutionMethod: number | EvolutionStone | SpecialEvolution;
    evolution: PokemonName;
    evolutionMethods?: never;
    evolutions?: never;
}

export interface CannotEvolve {
    evolutionMethod?: never;
    evolution?: never;
    evolutionMethods?: never;
    evolutions?: never;
}

// Order matters for evolutionMethods/evolutions
export interface HasEvolutions {
    evolutionMethod?: never;
    evolution?: never;
    evolutionMethods: (number | EvolutionStone | SpecialEvolution)[];
    evolutions: PokemonName[];
}

export interface __PokemonData {
    pokemonName: PokemonName;
    expGrowth: ExpGrowth;
    expGrowthText: ExpGrowthText;
    evolutionMethod?: number | EvolutionStone | SpecialEvolution;
    evolution?: PokemonName;
    evolutionMethods?: (number | EvolutionStone | SpecialEvolution)[];
    evolutions?: PokemonName[];
    pokedexEntry: number;
    captureRate: number;
}

// Mainly __PokemonData, the rest of this type is to validate pairing attributes (expGrowth / expGrowthText, etc)
export type _PokemonData = __PokemonData & HasExpGrowth & (CanEvolve | CannotEvolve | HasEvolutions);

export interface PokemonSpecificLocationData<P extends PokemonName = PokemonName> {
    pokeLocation: PokeLocation;
    catchMap: {
        [spawnType in SpawnType]?: LocationPokemonData<P>;
    };
    catchs: LocationPokemonData<P, SpawnType>[];
}

export type PokemonSpecificLocationDataMap<P extends PokemonName = PokemonName> = {
    [pokeLocation in PokeLocation]?: PokemonSpecificLocationData<P>;
}

// These value is populated below where _pokemonDatas is initalized
export type PokemonData<P extends PokemonName = PokemonName> = _PokemonData & {
    pokemonName: P;
    evolvedFrom?: PokemonName;
    pokeLocations: PokemonSpecificLocationData<P>[],
    pokeLocationMap: PokemonSpecificLocationDataMap<P>;
}

export type PokemonDataMap = {
    [pokemonName in PokemonName]: PokemonData;
}

export const _pokemonDatas: _PokemonData[] = [
    {
        pokemonName: "Bulbasaur",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 16,
        evolution: "Ivysaur",
        pokedexEntry: 1,
        captureRate: 45,
    },
    {
        pokemonName: "Ivysaur",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 32,
        evolution: "Venusaur",
        pokedexEntry: 2,
        captureRate: 45,
    },
    {
        pokemonName: "Venusaur",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: undefined,
        evolution: undefined,
        pokedexEntry: 3,
        captureRate: 45,
    },
    {
        pokemonName: "Charmander",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 16,
        evolution: "Charmeleon",
        pokedexEntry: 4,
        captureRate: 45,
    },
    {
        pokemonName: "Charmeleon",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 36,
        evolution: "Charizard",
        pokedexEntry: 5,
        captureRate: 45,
    },
    {
        pokemonName: "Charizard",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 6,
        captureRate: 45,
    },
    {
        pokemonName: "Squirtle",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 16,
        evolution: "Wartortle",
        pokedexEntry: 7,
        captureRate: 45,
    },
    {
        pokemonName: "Wartortle",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 36,
        evolution: "Blastoise",
        pokedexEntry: 8,
        captureRate: 45,
    },
    {
        pokemonName: "Blastoise",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 9,
        captureRate: 45,
    },
    {
        pokemonName: "Caterpie",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 7,
        evolution: "Metapod",
        pokedexEntry: 10,
        captureRate: 255,
    },
    {
        pokemonName: "Metapod",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 10,
        evolution: "Butterfree",
        pokedexEntry: 11,
        captureRate: 120,
    },
    {
        pokemonName: "Butterfree",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 12,
        captureRate: 45,
    },
    {
        pokemonName: "Weedle",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 7,
        evolution: "Kakuna",
        pokedexEntry: 13,
        captureRate: 255,
    },
    {
        pokemonName: "Kakuna",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 10,
        evolution: "Beedrill",
        pokedexEntry: 14,
        captureRate: 120,
    },
    {
        pokemonName: "Beedrill",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 15,
        captureRate: 45,
    },
    {
        pokemonName: "Pidgey",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 18,
        evolution: "Pidgeotto",
        pokedexEntry: 16,
        captureRate: 255,
    },
    {
        pokemonName: "Pidgeotto",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 10,
        evolution: "Pidgeot",
        pokedexEntry: 17,
        captureRate: 120,
    },
    {
        pokemonName: "Pidgeot",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 18,
        captureRate: 45,
    },
    {
        pokemonName: "Rattata",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 20,
        evolution: "Raticate",
        pokedexEntry: 19,
        captureRate: 255,
    },
    {
        pokemonName: "Raticate",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 20,
        captureRate: 127,
    },
    {
        pokemonName: "Spearow",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 20,
        evolution: "Fearow",
        pokedexEntry: 21,
        captureRate: 255,
    },
    {
        pokemonName: "Fearow",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 22,
        captureRate: 90,
    },
    {
        pokemonName: "Ekans",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 22,
        evolution: "Arbok",
        pokedexEntry: 23,
        captureRate: 255,
    },
    {
        pokemonName: "Arbok",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 24,
        captureRate: 90,
    },
    {
        pokemonName: "Pikachu",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 'Thunder Stone',
        evolution: "Raichu",
        pokedexEntry: 25,
        captureRate: 190,
    },
    {
        pokemonName: "Raichu",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 26,
        captureRate: 75,
    },
    {
        pokemonName: "Sandshrew",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 22,
        evolution: "Sandslash",
        pokedexEntry: 27,
        captureRate: 255,
    },
    {
        pokemonName: "Sandslash",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 28,
        captureRate: 90,
    },
    {
        pokemonName: "Nidoran [Female]",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 16,
        evolution: "Nidorina",
        pokedexEntry: 29,
        captureRate: 235,
    },
    {
        pokemonName: "Nidorina",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Moon Stone',
        evolution: "Nidoqueen",
        pokedexEntry: 30,
        captureRate: 120,
    },
    {
        pokemonName: "Nidoqueen",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 31,
        captureRate: 45,
    },
    {
        pokemonName: "Nidoran [Male]",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 16,
        evolution: "Nidorino",
        pokedexEntry: 32,
        captureRate: 235,
    },
    {
        pokemonName: "Nidorino",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Moon Stone',
        evolution: "Nidoking",
        pokedexEntry: 33,
        captureRate: 120,
    },
    {
        pokemonName: "Nidoking",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 34,
        captureRate: 45,
    },
    {
        pokemonName: "Clefairy",
        expGrowth: 800000,
        expGrowthText: 'Fast',
        evolutionMethod: 'Moon Stone',
        evolution: "Clefable",
        pokedexEntry: 35,
        captureRate: 150,
    },
    {
        pokemonName: "Clefable",
        expGrowth: 800000,
        expGrowthText: 'Fast',
        pokedexEntry: 36,
        captureRate: 25,
    },
    {
        pokemonName: "Vulpix",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 'Fire Stone',
        evolution: "Ninetales",
        pokedexEntry: 37,
        captureRate: 190,
    },
    {
        pokemonName: "Ninetales",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 38,
        captureRate: 75,
    },
    {
        pokemonName: "Jigglypuff",
        expGrowth: 800000,
        expGrowthText: 'Fast',
        evolutionMethod: 'Moon Stone',
        evolution: "Wigglytuff",
        pokedexEntry: 39,
        captureRate: 170,
    },
    {
        pokemonName: "Wigglytuff",
        expGrowth: 800000,
        expGrowthText: 'Fast',
        pokedexEntry: 40,
        captureRate: 50,
    },
    {
        pokemonName: "Zubat",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 22,
        evolution: "Golbat",
        pokedexEntry: 41,
        captureRate: 255,
    },
    {
        pokemonName: "Golbat",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 42,
        captureRate: 90,
    },
    {
        pokemonName: "Oddish",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 21,
        evolution: "Gloom",
        pokedexEntry: 43,
        captureRate: 255,
    },
    {
        pokemonName: "Gloom",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Leaf Stone',
        evolution: "Vileplume",
        pokedexEntry: 44,
        captureRate: 120,
    },
    {
        pokemonName: "Vileplume",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 45,
        captureRate: 45,
    },
    {
        pokemonName: "Paras",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 24,
        evolution: "Parasect",
        pokedexEntry: 46,
        captureRate: 190,
    },
    {
        pokemonName: "Parasect",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: undefined,
        pokedexEntry: 47,
        captureRate: 75,
    },
    {
        pokemonName: "Venonat",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 31,
        evolution: "Venomoth",
        pokedexEntry: 48,
        captureRate: 190,
    },
    {
        pokemonName: "Venomoth",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 49,
        captureRate: 75,
    },
    {
        pokemonName: "Diglett",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 26,
        evolution: "Dugtrio",
        pokedexEntry: 50,
        captureRate: 255,
    },
    {
        pokemonName: "Dugtrio",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 51,
        captureRate: 50,
    },
    {
        pokemonName: "Meowth",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 28,
        evolution: "Persian",
        pokedexEntry: 52,
        captureRate: 255,
    },
    {
        pokemonName: "Persian",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 53,
        captureRate: 50,
    },
    {
        pokemonName: "Psyduck",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 33,
        evolution: "Golduck",
        pokedexEntry: 54,
        captureRate: 190,
    },
    {
        pokemonName: "Golduck",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 55,
        captureRate: 75,
    },
    {
        pokemonName: "Mankey",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 33,
        evolution: "Primeape",
        pokedexEntry: 56,
        captureRate: 190,
    },
    {
        pokemonName: "Primeape",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 57,
        captureRate: 75,
    },
    {
        pokemonName: "Growlithe",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 'Fire Stone',
        evolution: "Arcanine",
        pokedexEntry: 58,
        captureRate: 190,
    },
    {
        pokemonName: "Arcanine",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 59,
        captureRate: 75,
    },
    {
        pokemonName: "Poliwag",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 25,
        evolution: "Poliwhirl",
        pokedexEntry: 60,
        captureRate: 255,
    },
    {
        pokemonName: "Poliwhirl",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Water Stone',
        evolution: "Poliwrath",
        pokedexEntry: 61,
        captureRate: 120,
    },
    {
        pokemonName: "Poliwrath",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 62,
        captureRate: 45,
    },
    {
        pokemonName: "Abra",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 25,
        evolution: "Kadabra",
        pokedexEntry: 63,
        captureRate: 200,
    },
    {
        pokemonName: "Kadabra",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Trade Back Disc',
        evolution: "Alakazam",
        pokedexEntry: 64,
        captureRate: 100,
    },
    {
        pokemonName: "Alakazam",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 65,
        captureRate: 50,
    },
    {
        pokemonName: "Machop",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 28,
        evolution: "Machoke",
        pokedexEntry: 66,
        captureRate: 180,
    },
    {
        pokemonName: "Machoke",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Trade Back Disc',
        evolution: "Machamp",
        pokedexEntry: 67,
        captureRate: 90,
    },
    {
        pokemonName: "Machamp",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 68,
        captureRate: 50,
    },
    {
        pokemonName: "Bellsprout",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 21,
        evolution: "Weepinbell",
        pokedexEntry: 69,
        captureRate: 255,
    },
    {
        pokemonName: "Weepinbell",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Leaf Stone',
        evolution: "Victreebel",
        pokedexEntry: 70,
        captureRate: 120,
    },
    {
        pokemonName: "Victreebel",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 71,
        captureRate: 45,
    },
    {
        pokemonName: "Tentacool",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 30,
        evolution: "Tentacruel",
        pokedexEntry: 72,
        captureRate: 190,
    },
    {
        pokemonName: "Tentacruel",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 73,
        captureRate: 60,
    },
    {
        pokemonName: "Geodude",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 25,
        evolution: "Graveler",
        pokedexEntry: 74,
        captureRate: 255,
    },
    {
        pokemonName: "Graveler",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Trade Back Disc',
        evolution: "Golem",
        pokedexEntry: 75,
        captureRate: 120,
    },
    {
        pokemonName: "Golem",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 76,
        captureRate: 45,
    },
    {
        pokemonName: "Ponyta",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 40,
        evolution: "Rapidash",
        pokedexEntry: 77,
        captureRate: 190,
    },
    {
        pokemonName: "Rapidash",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 78,
        captureRate: 60,
    },
    {
        pokemonName: "Slowpoke",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 37,
        evolution: "Slowbro",
        pokedexEntry: 79,
        captureRate: 190,
    },
    {
        pokemonName: "Slowbro",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 80,
        captureRate: 75,
    },
    {
        pokemonName: "Magnemite",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 30,
        evolution: "Magneton",
        pokedexEntry: 81,
        captureRate: 190,
    },
    {
        pokemonName: "Magneton",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 82,
        captureRate: 75,
    },
    {
        pokemonName: "Farfetch'd",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 83,
        captureRate: 45,
    },
    {
        pokemonName: "Doduo",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 31,
        evolution: "Dodrio",
        pokedexEntry: 84,
        captureRate: 190,
    },
    {
        pokemonName: "Dodrio",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 85,
        captureRate: 45,
    },
    {
        pokemonName: "Seel",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 34,
        evolution: "Dewgong",
        pokedexEntry: 86,
        captureRate: 190,
    },
    {
        pokemonName: "Dewgong",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 87,
        captureRate: 75,
    },
    {
        pokemonName: "Grimer",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 38,
        evolution: "Muk",
        pokedexEntry: 88,
        captureRate: 190,
    },
    {
        pokemonName: "Muk",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 89,
        captureRate: 75,
    },
    {
        pokemonName: "Shellder",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 'Water Stone',
        evolution: "Cloyster",
        pokedexEntry: 90,
        captureRate: 190,
    },
    {
        pokemonName: "Cloyster",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 91,
        captureRate: 60,
    },
    {
        pokemonName: "Gastly",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 25,
        evolution: "Haunter",
        pokedexEntry: 92,
        captureRate: 190,
    },
    {
        pokemonName: "Haunter",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        evolutionMethod: 'Trade Back Disc',
        evolution: "Gengar",
        pokedexEntry: 93,
        captureRate: 90,
    },
    {
        pokemonName: "Gengar",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 94,
        captureRate: 45,
    },
    {
        pokemonName: "Onix",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 95,
        captureRate: 45,
    },
    {
        pokemonName: "Drowzee",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 26,
        evolution: "Hypno",
        pokedexEntry: 96,
        captureRate: 190,
    },
    {
        pokemonName: "Hypno",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 97,
        captureRate: 75,
    },
    {
        pokemonName: "Krabby",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 28,
        evolution: "Kingler",
        pokedexEntry: 98,
        captureRate: 225,
    },
    {
        pokemonName: "Kingler",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 99,
        captureRate: 60,
    },
    {
        pokemonName: "Voltorb",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 30,
        evolution: "Electrode",
        pokedexEntry: 100,
        captureRate: 190,
    },
    {
        pokemonName: "Electrode",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 101,
        captureRate: 60,
    },
    {
        pokemonName: "Exeggcute",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: "Leaf Stone",
        evolution: "Exeggutor",
        pokedexEntry: 102,
        captureRate: 90,
    },
    {
        pokemonName: "Exeggutor",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 103,
        captureRate: 45,
    },
    {
        pokemonName: "Cubone",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 28,
        evolution: "Marowak",
        pokedexEntry: 104,
        captureRate: 190,
    },
    {
        pokemonName: "Marowak",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 105,
        captureRate: 75,
    },
    {
        pokemonName: "Hitmonlee",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 106,
        captureRate: 45,
    },
    {
        pokemonName: "Hitmonchan",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 107,
        captureRate: 45,
    },
    {
        pokemonName: "Lickitung",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 108,
        captureRate: 45,
    },
    {
        pokemonName: "Koffing",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 35,
        evolution: "Weezing",
        pokedexEntry: 109,
        captureRate: 190,
    },
    {
        pokemonName: "Weezing",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 110,
        captureRate: 60,
    },
    {
        pokemonName: "Rhyhorn",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 42,
        evolution: "Rhydon",
        pokedexEntry: 111,
        captureRate: 120,
    },
    {
        pokemonName: "Rhydon",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 112,
        captureRate: 60,
    },
    {
        pokemonName: "Chansey",
        expGrowth: 800000,
        expGrowthText: 'Fast',
        pokedexEntry: 113,
        captureRate: 30,
    },
    {
        pokemonName: "Tangela",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 114,
        captureRate: 45,
    },
    {
        pokemonName: "Kangaskhan",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 115,
        captureRate: 45,
    },
    {
        pokemonName: "Horsea",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 32,
        evolution: "Seadra",
        pokedexEntry: 116,
        captureRate: 225,
    },
    {
        pokemonName: "Seadra",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 117,
        captureRate: 75,
    },
    {
        pokemonName: "Goldeen",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 33,
        evolution: "Seaking",
        pokedexEntry: 118,
        captureRate: 225,
    },
    {
        pokemonName: "Seaking",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 119,
        captureRate: 60,
    },
    {
        pokemonName: "Staryu",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 'Water Stone',
        evolution: "Starmie",
        pokedexEntry: 120,
        captureRate: 225,
    },
    {
        pokemonName: "Starmie",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 121,
        captureRate: 60,
    },
    {
        pokemonName: "Mr. Mime",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 122,
        captureRate: 45,
    },
    {
        pokemonName: "Scyther",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 123,
        captureRate: 45,
    },
    {
        pokemonName: "Jynx",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 124,
        captureRate: 45,
    },
    {
        pokemonName: "Electabuzz",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 125,
        captureRate: 45,
    },
    {
        pokemonName: "Magmar",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 126,
        captureRate: 45,
    },
    {
        pokemonName: "Pinsir",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 127,
        captureRate: 45,
    },
    {
        pokemonName: "Tauros",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 128,
        captureRate: 45,
    },
    {
        pokemonName: "Magikarp",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 20,
        evolution: "Gyarados",
        pokedexEntry: 129,
        captureRate: 255,
    },
    {
        pokemonName: "Gyarados",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 130,
        captureRate: 45,
    },
    {
        pokemonName: "Lapras",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 131,
        captureRate: 45,
    },
    {
        pokemonName: "Ditto",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 132,
        captureRate: 35,
    },
    {
        pokemonName: "Eevee",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethods: ['Water Stone', 'Thunder Stone', 'Fire Stone'],
        evolutions: ["Vaporeon", "Jolteon", "Flareon"],
        pokedexEntry: 133,
        captureRate: 45,
    },
    {
        pokemonName: "Vaporeon",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 134,
        captureRate: 45,
    },
    {
        pokemonName: "Jolteon",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 135,
        captureRate: 45,
    },
    {
        pokemonName: "Flareon",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 136,
        captureRate: 45,
    },
    {
        pokemonName: "Porygon",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 137,
        captureRate: 45,
    },
    {
        pokemonName: "Omanyte",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 40,
        evolution: "Omastar",
        pokedexEntry: 138,
        captureRate: 45,
    },
    {
        pokemonName: "Omastar",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 139,
        captureRate: 45,
    },
    {
        pokemonName: "Kabuto",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        evolutionMethod: 40,
        evolution: "Kabutops",
        pokedexEntry: 140,
        captureRate: 45,
    },
    {
        pokemonName: "Kabutops",
        expGrowth: 1000000,
        expGrowthText: 'Medium Fast',
        pokedexEntry: 141,
        captureRate: 45,
    },
    {
        pokemonName: "Aerodactyl",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 142,
        captureRate: 45,
    },
    {
        pokemonName: "Snorlax",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 143,
        captureRate: 25,
    },
    {
        pokemonName: "Articuno",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 144,
        captureRate: 3,
    },
    {
        pokemonName: "Zapdos",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 145,
        captureRate: 3,
    },
    {
        pokemonName: "Moltres",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 146,
        captureRate: 3,
    },
    {
        pokemonName: "Dratini",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 30,
        evolution: "Dragonair",
        pokedexEntry: 147,
        captureRate: 45,
    },
    {
        pokemonName: "Dragonair",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        evolutionMethod: 55,
        evolution: "Dragonite",
        pokedexEntry: 148,
        captureRate: 90,
    },
    {
        pokemonName: "Dragonite",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 149,
        captureRate: 45,
    },
    {
        pokemonName: "Mewtwo",
        expGrowth: 1250000,
        expGrowthText: 'Slow',
        pokedexEntry: 150,
        captureRate: 3,
    },
    {
        pokemonName: "Mew",
        expGrowth: 1059860,
        expGrowthText: 'Medium Slow',
        pokedexEntry: 151,
        captureRate: 100,// normally is 45, but for the sake of this game and how it's globally random to encounter, let's make it 100% :)
    },
];

export const pokemonNames: PokemonName[] = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran [Female]",
    "Nidorina",
    "Nidoqueen",
    "Nidoran [Male]",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch'd",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
];

export const pokemonDatas: PokemonData[] = [];
// We are going to cast it since we will be validating that there is everything pokemonName as its attributes dynamically
export const pokemonDataMap: PokemonDataMap = {} as PokemonDataMap;

// evolvedFrom?: PokemonName;// This value is populated below where _pokeDatas is initalized
//     pokeLocations: PokemonSpecificLocationData[],
//     pokeLocationMap: {
//         [pokeLocation in PokeLocation]?: PokemonSpecificLocationData;
//     };

// Assuming every pokemon is in the pokemonDatas (Validation of this being true is done in test.sepc.ts for pokemon_data)
for (const _pokemonData of _pokemonDatas) {
    const pokeLocations: PokemonSpecificLocationData[] = [];
    const pokeLocationMap: PokemonSpecificLocationDataMap = {};

    const pokemonData: PokemonData = {
        pokemonName: _pokemonData.pokemonName,
        expGrowth: _pokemonData.expGrowth as any,// These values are validated above when populating the _PokemonData array
        expGrowthText: _pokemonData.expGrowthText as any,// These values are validated above when populating the _PokemonData array
        evolutionMethod: _pokemonData.evolutionMethod as any,// These values are validated above when populating the _PokemonData array
        evolution: _pokemonData.evolution as any,// These values are validated above when populating the _PokemonData array
        evolutionMethods: _pokemonData.evolutionMethods as any,// These values are validated above when populating the _PokemonData array
        evolutions: _pokemonData.evolutions as any,// These values are validated above when populating the _PokemonData array
        pokedexEntry: _pokemonData.pokedexEntry,
        captureRate: _pokemonData.captureRate,

        evolvedFrom: undefined,// Values are empty / undefined / 0 and should be populated below
        pokeLocations: pokeLocations,// Values are empty / undefined / 0 and should be populated below
        pokeLocationMap: pokeLocationMap,// Values are empty / undefined / 0 and should be populated below
    };

    pokemonDataMap[_pokemonData.pokemonName] = pokemonData;
    pokemonDatas.push(pokemonData);
}

for (const pokeLocationData of pokeLocationDatas) {
    const pokeLocation = pokeLocationData.pokeLocation;

    const catchs = pokeLocationData.catchs;

    for (const spawnPokemonData of catchs) {
        const spawnType = spawnPokemonData.spawnType;
        const locationPokemonDatas = spawnPokemonData.locationPokemonDatas;

        for (const locationPokemonData of locationPokemonDatas) {
            const pokemonName = locationPokemonData.pokemonName;

            const pokemonData = pokemonDataMap[pokemonName];

            let pokemonSpecificLocationData: PokemonSpecificLocationData = pokemonData.pokeLocationMap[pokeLocation] || {
                pokeLocation: pokeLocation,
                catchMap: {},
                catchs: [],
            };

            if (!pokemonData.pokeLocationMap[pokeLocation]) {
                pokemonData.pokeLocationMap[pokeLocation] = pokemonSpecificLocationData;
                pokemonData.pokeLocations.push(pokemonSpecificLocationData);
            }
            
            pokemonSpecificLocationData.catchMap[spawnType] = locationPokemonData;
            pokemonSpecificLocationData.catchs.push(locationPokemonData);
        }
    }
}

const assignEvolvedFrom = (evolutionData: PokemonData, evolvedFrom: PokemonName): void => {
    if (evolutionData.evolvedFrom) {
        console.warn("envolvedFrom already defined");
        debugger;
    }

    evolutionData.evolvedFrom = evolvedFrom;
}

for (const pokemonName of pokemonNames) {
    const pokemonData = pokemonDataMap[pokemonName];

    // Populate evolvedFrom for evolutions
    if (pokemonData.evolution) {
        const evolutionData = pokemonDataMap[pokemonData.evolution];

        assignEvolvedFrom(evolutionData, pokemonName);
    }

    if (pokemonData.evolutions) {
        for (const evolutionName of pokemonData.evolutions) {
            const evolutionData = pokemonDataMap[evolutionName];

            assignEvolvedFrom(evolutionData, pokemonName);
        }
    }
}
