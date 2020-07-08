import { PokemonName } from './pokemon';

import * as pokeLocationDatas from './pokemon_locations/locations';

export type FishingRod = "Old Rod" | "Good Rod" | "Super Rod";

export type SpecialSpawnType = "Rock Smash";

export type NormalSpawnType = "Grass" | "Cave" | "Walking";

export type SpawnType = NormalSpawnType | "Surfing" | "Special" | FishingRod | SpecialSpawnType;

export interface LocationPokemonData {
    rate: number;
    minLevel: number;
    maxLevel: number;
    note?: string;
    inFireRed: boolean;
    inLeafGreen: boolean;
}

// Used for "PokeLocationData" that are imported to be used in parts (example is Route 2 -> Route 2 (Viridian) / Route 2 (Pewter))
export interface _PokeLocationData {
    catchMap: {
        [spawnType in SpawnType]?: {
            [pokemonName in PokemonName]?: LocationPokemonData;
        }
    };
    connections: PokeLocation[];
}

export interface PokeLocationData<P extends PokeLocation = PokeLocation> extends _PokeLocationData  {
    pokeLocation: P;
}

export type SegiiIslands = "Berry Forest" | "Bond Bridge" | "Canyon Entrance" | "Cape Brink" | "Five Island" | "Five Isle Meadow" | "Four Island" | "Green Path" | "Icefall Cave" | "Kindle Road" | "Lost Cave" | "Memorial Pillar" | "Mt. Ember" | "One Island" | "Outcast Island" | "Resort Gorgeous" | "Ruin Valley" | "Sevault Canyon" | "Seven Island" | "Six Island" | "Tanoby Ruins" | "Tanoby Chambers" | "Three Island" | "Three Isle Port" | "Treasure Beach" | "Two Island" | "Water Labyrinth" | "Water Path";
export type Celadon = "Celadon City" | "Celadon Condominiums" | "Mt. Moon 1F" | "Mt. Moon B1F" | "Mt. Moon B2F" | "Route 16" | "Route 3" | "Route 4" | "Route 7";
export type Cerulean = "Cerulean City" | "Cerulean Cave 1F" | "Cerulean Cave B1F" | "Cerulean Cave 2F" | "Route 24";
export type Cinnabar = "Cinnabar Island" | "Pokemon Mansion 1F" | "Pokemon Mansion 2F" | "Pokemon Mansion 3F" | "Pokemon Mansion B1F" | "Route 20" | "Route 21";
export type Fuchsia = "Fuchsia City" | "Route 15" | "Route 18" | "Route 19";// Safari Zone and Pal Park
export type Lavender = "Lavender Town" | "Pokemon Tower 1F" | "Pokemon Tower 2F" | "Pokemon Tower 3F" | "Pokemon Tower 4F" | "Pokemon Tower 5F" | "Pokemon Tower 6F" | "Pokemon Tower 7F";
export type Pewter = "Pewter City" | "Route 2 (Pewter)" | "Route 3";
export type Saffron = "Saffron City" | "Silph Co." | "Fighting Dojo";
export type SeafoamIslands = "Seafoam Islands 1F" | "Seafoam Islands B1F" | "Seafoam Islands B2F" | "Seafoam Islands B3F" | "Seafoam Islands B4F";
export type Vermilion = "Vermilion City";
export type Viridian = "Viridian City" | "Viridian Forest" | "Route 2 (Viridian)";

export type PokemonRoutes = "Route 1" | "Route 8" | "Route 10" | "Route 11" | "Route 12" | "Route 13" | "Route 14" | "Route 15" | "Route 16" | "Route 17" | "Route 22" | "Route 23 (Victory Road)" | "Route 23 (Indigo Plateau)" | "Route 24" | "Route 5" | "Route 6" | "Route 9" | "Route 25";

export type PokeLocation = "Altering Cave" | "Diglett's Cave (Route 2)" | "Diglett's Cave (Route 11)" | "Indego Plateau" | "Pallet Town" | "Pokemon League Front Gate" | "Power Plant" | "Rock Tunnel 1F" | "Rock Tunnel B1F" | "Victory Road 1F" | "Victory Road 2F" | "Victory Road 3F" | "Viridian City" | SegiiIslands | Celadon | Cerulean | Cinnabar | Fuchsia | Lavender | Pewter | Saffron | SeafoamIslands | Vermilion | Viridian | PokemonRoutes;

export type PokeLocationDataMap = {
    [pokeLocation in PokeLocation]: PokeLocationData & {
        pokeLocation: pokeLocation;
    };
}

export const pokeLocationDataMap: PokeLocationDataMap = {
    "Altering Cave": pokeLocationDatas.alteringCave,
    "Berry Forest": pokeLocationDatas.berryForest,
    // "Birth Island": // Skip since only Deoxys can be found here
    "Bond Bridge": pokeLocationDatas.bondBridge,
    "Canyon Entrance": pokeLocationDatas.canyonEntrance,
    "Cape Brink": pokeLocationDatas.capeBrink,
    "Celadon Condominiums": pokeLocationDatas.celdadonCondominiums,
    // Celadon Department Store: // Skip since there's no pokemon here
    // Celadon Game Corner: // TODO: Skip for now since this would be specific since all pokemon are prizes
    "Celadon City": pokeLocationDatas.celadonCity,
    "Cerulean Cave B1F": pokeLocationDatas.ceruleanCaveB1F,
    "Cerulean Cave 1F": pokeLocationDatas.ceruleanCave1F,
    "Cerulean Cave 2F": pokeLocationDatas.ceruleanCave2F,
    "Cerulean City": pokeLocationDatas.ceruleanCity,
    "Cinnabar Island": pokeLocationDatas.cinnabarIsland,
    "Diglett's Cave (Route 2)": pokeLocationDatas.diglettsCaveRoute2,
    "Diglett's Cave (Route 11)": pokeLocationDatas.diglettsCaveRoute11,
    "Fighting Dojo": pokeLocationDatas.fightingDojo,
    "Five Island": pokeLocationDatas.fiveIsland,
    "Five Isle Meadow": pokeLocationDatas.fiveIsleMeadow,
    // "Cinnabar Lab":// TODO: Skip for now as fossil pokemon require special handling
    "Four Island": pokeLocationDatas.fourIsland,
    "Fuchsia City": pokeLocationDatas.fuchsiaCity,
    "Green Path": pokeLocationDatas.greenPath,
    "Indego Plateau": pokeLocationDatas.indigoPlateau,
    "Icefall Cave": pokeLocationDatas.icefallCave,
    "Kindle Road": pokeLocationDatas.kindleRoad,
    "Lavender Town": pokeLocationDatas.lavenderTown,
    "Lost Cave": pokeLocationDatas.lostCave,
    "Power Plant": pokeLocationDatas.powerPlant,
    "Memorial Pillar": pokeLocationDatas.memorialPillar,
    "Mt. Ember": pokeLocationDatas.mtEmber,
    "Mt. Moon 1F": pokeLocationDatas.mtMoon1F,
    "Mt. Moon B1F": pokeLocationDatas.mtMoonB1F,
    "Mt. Moon B2F": pokeLocationDatas.mtMoonB2F,
    "One Island": pokeLocationDatas.oneIsland,
    "Outcast Island": pokeLocationDatas.outcastIsland,
    // "Pal Park": // TODO: what is Pal Park lol?
    "Pallet Town": pokeLocationDatas.palletTown,
    "Pewter City": pokeLocationDatas.pewterCity,
    "Pokemon League Front Gate": pokeLocationDatas.pokemonLeagueFrontGate,
    "Pokemon Mansion 1F": pokeLocationDatas.pokemonMansion1F,
    "Pokemon Mansion 2F": pokeLocationDatas.pokemonMansion2F,
    "Pokemon Mansion 3F": pokeLocationDatas.pokemonMansion3F,
    "Pokemon Mansion B1F": pokeLocationDatas.pokemonMansionB1F,
    "Pokemon Tower 1F": pokeLocationDatas.pokemonTower1F,
    "Pokemon Tower 2F": pokeLocationDatas.pokemonTower2F,
    "Pokemon Tower 3F": pokeLocationDatas.pokemonTower3F,
    "Pokemon Tower 4F": pokeLocationDatas.pokemonTower4F,
    "Pokemon Tower 5F": pokeLocationDatas.pokemonTower5F,
    "Pokemon Tower 6F": pokeLocationDatas.pokemonTower6F,
    "Pokemon Tower 7F": pokeLocationDatas.pokemonTower7F,
    "Resort Gorgeous": pokeLocationDatas.resortGorgeous,
    // Pewter Museum of Science // Skipping for now
    "Rock Tunnel 1F": pokeLocationDatas.rockTunnel1F,
    "Rock Tunnel B1F": pokeLocationDatas.rockTunnelB1F,
    "Route 1": pokeLocationDatas.route1,
    "Route 10": pokeLocationDatas.route10,
    "Route 11": pokeLocationDatas.route11,
    "Route 12": pokeLocationDatas.route12,
    "Route 13": pokeLocationDatas.route13,
    "Route 14": pokeLocationDatas.route14,
    "Route 15": pokeLocationDatas.route15,
    "Route 16": pokeLocationDatas.route16,
    "Route 17": pokeLocationDatas.route17,
    "Route 18": pokeLocationDatas.route18,
    "Route 19": pokeLocationDatas.route19,
    "Route 2 (Pewter)": pokeLocationDatas.route2Pewter,
    "Route 2 (Viridian)": pokeLocationDatas.route2Viridian,
    "Route 20": pokeLocationDatas.route20,
    "Route 21": pokeLocationDatas.route21,
    "Route 22": pokeLocationDatas.route22,
    "Route 23 (Victory Road)": pokeLocationDatas.route23VictoryRoad,
    "Route 23 (Indigo Plateau)": pokeLocationDatas.route23IndigoPlateau,
    "Route 24": pokeLocationDatas.route24,
    "Route 25": pokeLocationDatas.route25,
    "Route 3": pokeLocationDatas.route3,
    "Route 4": pokeLocationDatas.route4,
    "Route 5": pokeLocationDatas.route5,
    "Route 6": pokeLocationDatas.route6,
    "Route 7": pokeLocationDatas.route7,
    "Route 8": pokeLocationDatas.route8,
    "Route 9": pokeLocationDatas.route9,
    "Ruin Valley": pokeLocationDatas.ruinValley,
    "Saffron City": pokeLocationDatas.saffronCity,
    // "Safari Zone": // TODO: dunno how we would handle safari zone yet
    "Seafoam Islands 1F": pokeLocationDatas.seafoamIslands1F,
    "Seafoam Islands B1F": pokeLocationDatas.seafoamIslandsB1F,
    "Seafoam Islands B2F": pokeLocationDatas.seafoamIslandsB2F,
    "Seafoam Islands B3F": pokeLocationDatas.seafoamIslandsB3F,
    "Seafoam Islands B4F": pokeLocationDatas.seafoamIslandsB4F,
    "Sevault Canyon": pokeLocationDatas.sevaultCanyon,
    // Sea_Cottage - We  could use this for some easy stones by showing pokemon
    "Seven Island": pokeLocationDatas.sevenIsland,
    "Silph Co.": pokeLocationDatas.silphCo,
    "Six Island": pokeLocationDatas.sixIsland,
    "Tanoby Chambers": pokeLocationDatas.tanobyChambers,
    "Tanoby Ruins": pokeLocationDatas.tanobyRuins,
    "Three Island": pokeLocationDatas.threeIsland,
    "Three Isle Port": pokeLocationDatas.threeIslePort,
    // "Trainer Tower": // TODO: there are pokemon here, but they're just common ones
    "Treasure Beach": pokeLocationDatas.treasureBeach,
    "Two Island": pokeLocationDatas.twoIsland,
    // TODO: Handle Underground Path 5-6
    // TODO: Handle Underground Path 7-8
    "Vermilion City": pokeLocationDatas.vermilionCity,
    "Victory Road 1F":pokeLocationDatas.victoryRoad1F,
    "Victory Road 2F":pokeLocationDatas.victoryRoad2F,
    "Victory Road 3F":pokeLocationDatas.victoryRoad3F,
    "Viridian City": pokeLocationDatas.viridianCity,
    "Viridian Forest": pokeLocationDatas.viridianForest,
    "Water Labyrinth": pokeLocationDatas.waterLabyrinth,
    "Water Path": pokeLocationDatas.waterPath,
}

export const pokeLocations: PokeLocation[] = [
    "Altering Cave",
    "Berry Forest",
    "Bond Bridge",
    "Canyon Entrance",
    "Cape Brink",
    "Celadon Condominiums",
    "Celadon City",
    "Cerulean Cave B1F",
    "Cerulean Cave 1F",
    "Cerulean Cave 2F",
    "Cerulean City",
    "Cinnabar Island",
    "Diglett's Cave (Route 2)",
    "Diglett's Cave (Route 11)",
    "Fighting Dojo",
    "Five Island",
    "Five Isle Meadow",
    "Four Island",
    "Fuchsia City",
    "Green Path",
    "Indego Plateau",
    "Icefall Cave",
    "Kindle Road",
    "Lavender Town",
    "Lost Cave",
    "Power Plant",
    "Memorial Pillar",
    "Mt. Ember",
    "Mt. Moon 1F",
    "Mt. Moon B1F",
    "Mt. Moon B2F",
    "One Island",
    "Outcast Island",
    "Pallet Town",
    "Pewter City",
    "Pokemon League Front Gate",
    "Pokemon Mansion 1F",
    "Pokemon Mansion 2F",
    "Pokemon Mansion 3F",
    "Pokemon Mansion B1F",
    "Pokemon Tower 1F",
    "Pokemon Tower 2F",
    "Pokemon Tower 3F",
    "Pokemon Tower 4F",
    "Pokemon Tower 5F",
    "Pokemon Tower 6F",
    "Pokemon Tower 7F",
    "Resort Gorgeous",
    "Rock Tunnel 1F",
    "Rock Tunnel B1F",
    "Route 1",
    "Route 10",
    "Route 11",
    "Route 12",
    "Route 13",
    "Route 14",
    "Route 15",
    "Route 16",
    "Route 17",
    "Route 18",
    "Route 19",
    "Route 2 (Pewter)",
    "Route 2 (Viridian)",
    "Route 20",
    "Route 21",
    "Route 22",
    "Route 23 (Victory Road)",
    "Route 23 (Indigo Plateau)",
    "Route 24",
    "Route 25",
    "Route 3",
    "Route 4",
    "Route 5",
    "Route 6",
    "Route 7",
    "Route 8",
    "Route 9",
    "Ruin Valley",
    "Saffron City",
    "Seafoam Islands 1F",
    "Seafoam Islands B1F",
    "Seafoam Islands B2F",
    "Seafoam Islands B3F",
    "Seafoam Islands B4F",
    "Sevault Canyon",
    "Seven Island",
    "Silph Co.",
    "Six Island",
    "Tanoby Chambers",
    "Tanoby Ruins",
    "Three Island",
    "Three Isle Port",
    "Treasure Beach",
    "Two Island",
    "Vermilion City",
    "Victory Road 1F",
    "Victory Road 2F",
    "Victory Road 3F",
    "Viridian City",
    "Viridian Forest",
    "Water Labyrinth",
    "Water Path"
];
