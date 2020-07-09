import { PokemonName } from './pokemon';

import * as _pokeLocationDataExportMap from './pokemon_locations/locations';

export type FishingRod = "Old Rod" | "Good Rod" | "Super Rod";

export type SpecialSpawnType = "Rock Smash";

export type NormalSpawnType = "Grass" | "Cave" | "Walking";

export type SpawnType = NormalSpawnType | "Surfing" | "Special" | FishingRod | SpecialSpawnType;

export interface LocationPokemonData<P extends PokemonName = PokemonName> {
    pokemonName: P;
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

export interface PokeLocationDataExport<P extends PokeLocation = PokeLocation> extends _PokeLocationData  {
    pokeLocation: P;
    // catchs: {
    //     spawnType: SpawnType;
    //     locationPokemonDatas: LocationPokemonData[];
    // };
}

export interface PokeLocationData<P extends PokeLocation = PokeLocation> extends PokeLocationDataExport<P> {

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

export type PokeLocationDataExportMap = {
    [pokeLocation in PokeLocation]: _PokeLocationData & {
        pokeLocation: pokeLocation;
    };
};

export const pokeLocationDataExportMap: PokeLocationDataExportMap = {
    "Altering Cave": _pokeLocationDataExportMap.alteringCave,
    "Berry Forest": _pokeLocationDataExportMap.berryForest,
    // "Birth Island": // Skip since only Deoxys can be found here
    "Bond Bridge": _pokeLocationDataExportMap.bondBridge,
    "Canyon Entrance": _pokeLocationDataExportMap.canyonEntrance,
    "Cape Brink": _pokeLocationDataExportMap.capeBrink,
    "Celadon Condominiums": _pokeLocationDataExportMap.celdadonCondominiums,
    // Celadon Department Store: // Skip since there's no pokemon here
    // Celadon Game Corner: // TODO: Skip for now since this would be specific since all pokemon are prizes
    "Celadon City": _pokeLocationDataExportMap.celadonCity,
    "Cerulean Cave B1F": _pokeLocationDataExportMap.ceruleanCaveB1F,
    "Cerulean Cave 1F": _pokeLocationDataExportMap.ceruleanCave1F,
    "Cerulean Cave 2F": _pokeLocationDataExportMap.ceruleanCave2F,
    "Cerulean City": _pokeLocationDataExportMap.ceruleanCity,
    "Cinnabar Island": _pokeLocationDataExportMap.cinnabarIsland,
    "Diglett's Cave (Route 2)": _pokeLocationDataExportMap.diglettsCaveRoute2,
    "Diglett's Cave (Route 11)": _pokeLocationDataExportMap.diglettsCaveRoute11,
    "Fighting Dojo": _pokeLocationDataExportMap.fightingDojo,
    "Five Island": _pokeLocationDataExportMap.fiveIsland,
    "Five Isle Meadow": _pokeLocationDataExportMap.fiveIsleMeadow,
    // "Cinnabar Lab":// TODO: Skip for now as fossil pokemon require special handling
    "Four Island": _pokeLocationDataExportMap.fourIsland,
    "Fuchsia City": _pokeLocationDataExportMap.fuchsiaCity,
    "Green Path": _pokeLocationDataExportMap.greenPath,
    "Indego Plateau": _pokeLocationDataExportMap.indigoPlateau,
    "Icefall Cave": _pokeLocationDataExportMap.icefallCave,
    "Kindle Road": _pokeLocationDataExportMap.kindleRoad,
    "Lavender Town": _pokeLocationDataExportMap.lavenderTown,
    "Lost Cave": _pokeLocationDataExportMap.lostCave,
    "Power Plant": _pokeLocationDataExportMap.powerPlant,
    "Memorial Pillar": _pokeLocationDataExportMap.memorialPillar,
    "Mt. Ember": _pokeLocationDataExportMap.mtEmber,
    "Mt. Moon 1F": _pokeLocationDataExportMap.mtMoon1F,
    "Mt. Moon B1F": _pokeLocationDataExportMap.mtMoonB1F,
    "Mt. Moon B2F": _pokeLocationDataExportMap.mtMoonB2F,
    "One Island": _pokeLocationDataExportMap.oneIsland,
    "Outcast Island": _pokeLocationDataExportMap.outcastIsland,
    // "Pal Park": // TODO: what is Pal Park lol?
    "Pallet Town": _pokeLocationDataExportMap.palletTown,
    "Pewter City": _pokeLocationDataExportMap.pewterCity,
    "Pokemon League Front Gate": _pokeLocationDataExportMap.pokemonLeagueFrontGate,
    "Pokemon Mansion 1F": _pokeLocationDataExportMap.pokemonMansion1F,
    "Pokemon Mansion 2F": _pokeLocationDataExportMap.pokemonMansion2F,
    "Pokemon Mansion 3F": _pokeLocationDataExportMap.pokemonMansion3F,
    "Pokemon Mansion B1F": _pokeLocationDataExportMap.pokemonMansionB1F,
    "Pokemon Tower 1F": _pokeLocationDataExportMap.pokemonTower1F,
    "Pokemon Tower 2F": _pokeLocationDataExportMap.pokemonTower2F,
    "Pokemon Tower 3F": _pokeLocationDataExportMap.pokemonTower3F,
    "Pokemon Tower 4F": _pokeLocationDataExportMap.pokemonTower4F,
    "Pokemon Tower 5F": _pokeLocationDataExportMap.pokemonTower5F,
    "Pokemon Tower 6F": _pokeLocationDataExportMap.pokemonTower6F,
    "Pokemon Tower 7F": _pokeLocationDataExportMap.pokemonTower7F,
    "Resort Gorgeous": _pokeLocationDataExportMap.resortGorgeous,
    // Pewter Museum of Science // Skipping for now
    "Rock Tunnel 1F": _pokeLocationDataExportMap.rockTunnel1F,
    "Rock Tunnel B1F": _pokeLocationDataExportMap.rockTunnelB1F,
    "Route 1": _pokeLocationDataExportMap.route1,
    "Route 10": _pokeLocationDataExportMap.route10,
    "Route 11": _pokeLocationDataExportMap.route11,
    "Route 12": _pokeLocationDataExportMap.route12,
    "Route 13": _pokeLocationDataExportMap.route13,
    "Route 14": _pokeLocationDataExportMap.route14,
    "Route 15": _pokeLocationDataExportMap.route15,
    "Route 16": _pokeLocationDataExportMap.route16,
    "Route 17": _pokeLocationDataExportMap.route17,
    "Route 18": _pokeLocationDataExportMap.route18,
    "Route 19": _pokeLocationDataExportMap.route19,
    "Route 2 (Pewter)": _pokeLocationDataExportMap.route2Pewter,
    "Route 2 (Viridian)": _pokeLocationDataExportMap.route2Viridian,
    "Route 20": _pokeLocationDataExportMap.route20,
    "Route 21": _pokeLocationDataExportMap.route21,
    "Route 22": _pokeLocationDataExportMap.route22,
    "Route 23 (Victory Road)": _pokeLocationDataExportMap.route23VictoryRoad,
    "Route 23 (Indigo Plateau)": _pokeLocationDataExportMap.route23IndigoPlateau,
    "Route 24": _pokeLocationDataExportMap.route24,
    "Route 25": _pokeLocationDataExportMap.route25,
    "Route 3": _pokeLocationDataExportMap.route3,
    "Route 4": _pokeLocationDataExportMap.route4,
    "Route 5": _pokeLocationDataExportMap.route5,
    "Route 6": _pokeLocationDataExportMap.route6,
    "Route 7": _pokeLocationDataExportMap.route7,
    "Route 8": _pokeLocationDataExportMap.route8,
    "Route 9": _pokeLocationDataExportMap.route9,
    "Ruin Valley": _pokeLocationDataExportMap.ruinValley,
    "Saffron City": _pokeLocationDataExportMap.saffronCity,
    // "Safari Zone": // TODO: dunno how we would handle safari zone yet
    "Seafoam Islands 1F": _pokeLocationDataExportMap.seafoamIslands1F,
    "Seafoam Islands B1F": _pokeLocationDataExportMap.seafoamIslandsB1F,
    "Seafoam Islands B2F": _pokeLocationDataExportMap.seafoamIslandsB2F,
    "Seafoam Islands B3F": _pokeLocationDataExportMap.seafoamIslandsB3F,
    "Seafoam Islands B4F": _pokeLocationDataExportMap.seafoamIslandsB4F,
    "Sevault Canyon": _pokeLocationDataExportMap.sevaultCanyon,
    // Sea_Cottage - We  could use this for some easy stones by showing pokemon
    "Seven Island": _pokeLocationDataExportMap.sevenIsland,
    "Silph Co.": _pokeLocationDataExportMap.silphCo,
    "Six Island": _pokeLocationDataExportMap.sixIsland,
    "Tanoby Chambers": _pokeLocationDataExportMap.tanobyChambers,
    "Tanoby Ruins": _pokeLocationDataExportMap.tanobyRuins,
    "Three Island": _pokeLocationDataExportMap.threeIsland,
    "Three Isle Port": _pokeLocationDataExportMap.threeIslePort,
    // "Trainer Tower": // TODO: there are pokemon here, but they're just common ones
    "Treasure Beach": _pokeLocationDataExportMap.treasureBeach,
    "Two Island": _pokeLocationDataExportMap.twoIsland,
    // TODO: Handle Underground Path 5-6
    // TODO: Handle Underground Path 7-8
    "Vermilion City": _pokeLocationDataExportMap.vermilionCity,
    "Victory Road 1F":_pokeLocationDataExportMap.victoryRoad1F,
    "Victory Road 2F":_pokeLocationDataExportMap.victoryRoad2F,
    "Victory Road 3F":_pokeLocationDataExportMap.victoryRoad3F,
    "Viridian City": _pokeLocationDataExportMap.viridianCity,
    "Viridian Forest": _pokeLocationDataExportMap.viridianForest,
    "Water Labyrinth": _pokeLocationDataExportMap.waterLabyrinth,
    "Water Path": _pokeLocationDataExportMap.waterPath,
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

// catchMap: {
//     [spawnType in SpawnType]?: {
//         [pokemonName in PokemonName]?: LocationPokemonData;
//     }
// };
// connections: PokeLocation[];
// }

// export interface PokeLocationData<P extends PokeLocation = PokeLocation> extends _PokeLocationData  {
// pokeLocation: P;
// catchs: {
//     spawnType: SpawnType;
//     locationPokemonDatas: LocationPokemonData[];
// };

// export const pokeLocationDatas: PokeLocationData[] = [];

// for (const pokeLocation of pokeLocations) {
//     const _pokeLocationData: _PokeLocationData = _pokeLocationDataMap[pokeLocation];
//     const pokeLocationData: PokeLocationData = {
//         catchMap: p,
//     }

    

//     pokeLocationDatas.push(pokeLocationData);
// }
