import { PokemonName } from './pokemon';

import { keys } from './helpers';

import * as _pokeLocationDataExportMap from './pokemon_locations/locations';

export type FishingRod = "Old Rod" | "Good Rod" | "Super Rod";

export type SpecialSpawnType = "Rock Smash";

export type NormalSpawnType = "Grass" | "Cave" | "Walking";

export type SpawnType = NormalSpawnType | "Surfing" | "Special" | FishingRod | SpecialSpawnType;


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

export interface _LocationPokemonDataExport {
    rate: number;
    minLevel: number;
    maxLevel: number;
    note?: string;
    inFireRed: boolean;
    inLeafGreen: boolean;
}

export type LocationPokemonDataExport = _LocationPokemonDataExport & ({
    inFireRed: true;
} | {
    inLeafGreen: true;
});

export type LocationPokemonData<P extends PokemonName = PokemonName, S extends SpawnType = SpawnType> = {
    pokemonName: P;
    spawnType: S;

    mixRate: number;
    mixRatePercent: number;
    totalRate: number;
} & LocationPokemonDataExport;

// Used for PokeLocationDataExport-like objects that are imported to be used in parts (example is Route 2 -> Route 2 (Viridian) / Route 2 (Pewter))
export interface _PokeLocationDataExport {
    catchMap: {
        [spawnType in SpawnType]?: {
            [pokemonName in PokemonName]?: LocationPokemonDataExport;// Thought about adding <pokemon> Generic to LocationPokemonDataExport here, but it doesn't matter since these objects aren't going to be used anyway (we use objects based on these objects for PokeLocationDataMap)
        }
    };

    connections: PokeLocation[];
}

export interface PokeLocationDataExport<P extends PokeLocation = PokeLocation> extends _PokeLocationDataExport  {
    pokeLocation: P;
}

export interface SpawnPokemonData<S extends SpawnType = SpawnType> {
    spawnType: S;
    locationPokemonDatas: LocationPokemonData<PokemonName, S>[];
    locationPokemonDataMap: {
        [pokemonName in PokemonName]?: LocationPokemonData<pokemonName, S>;
    }
}

export interface PokeLocationData<P extends PokeLocation = PokeLocation> {
    pokeLocation: P;

    catchMap: {
        [spawnType in SpawnType]?: SpawnPokemonData<spawnType>;
    };

    catchs: SpawnPokemonData[];

    connections: PokeLocation[];
}

export type PokeLocationDataExportMap = {
    [pokeLocation in PokeLocation]: PokeLocationDataExport<pokeLocation>
};

export type PokeLocationDataMap = {
    [pokeLocation in PokeLocation]: PokeLocationData<pokeLocation>
}

const pokeLocationDataExportMap: PokeLocationDataExportMap = {
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

export const pokeLocationDataMap: PokeLocationDataMap = {} as PokeLocationDataMap;

export const pokeLocationDatas: PokeLocationData[] = [];

for (const pokeLocation of pokeLocations) {
    const _catchMapExport = pokeLocationDataExportMap[pokeLocation].catchMap;

    const connections = pokeLocationDataExportMap[pokeLocation].connections;

    const catchMap: {
        [spawnType in SpawnType]?: {
            spawnType: spawnType;
            locationPokemonDatas: LocationPokemonData<PokemonName, spawnType>[];
            locationPokemonDataMap: {
                [pokemonName in PokemonName]?: LocationPokemonData<pokemonName, spawnType>;
            }
        }
    } = {
        Grass: {
            spawnType: "Grass",
            locationPokemonDataMap: {},
            locationPokemonDatas: [],
        }
    };

    const catchs: SpawnPokemonData[] = [];

    // We are forcing the pokeLocation type as the literal "Route 1"
    // Explaination is below where we add pokeLocationData to pokeLocationDataMap
    const pokeLocationData: PokeLocationData & {pokeLocation: "Route 1"} = {
        pokeLocation: pokeLocation as "Route 1",
        catchMap: catchMap,
        catchs: catchs,

        connections: connections,
    };

    for (const spawnType of keys(_catchMapExport)) {
        const spawnExportMap = _catchMapExport[spawnType];

        if (spawnExportMap) {
            // ! Dangerous workaround

            // We have to work around the fact that typescript doesn't like the fact the spawnType as a variable is of type SpawnType and not a specific typeof
            // Let's assume the value is 'Grass' for now

            // Dynamic type check to make sure assuming 'Grass' is safe
            // This will give us a Type error if 'Grass' no long is of type SpawnType
            const grassIsSpawnTypeCheck: SpawnType = 'Grass';
            grassIsSpawnTypeCheck;

            const spawnTypeLocationPokemonData: {
                spawnType: 'Grass';
                locationPokemonDatas: LocationPokemonData<PokemonName, 'Grass'>[];
                locationPokemonDataMap: {
                    [pokemonName in PokemonName]?: LocationPokemonData<pokemonName, 'Grass'>;
                }
            } = {
                spawnType: spawnType as 'Grass',
                locationPokemonDataMap: {},
                locationPokemonDatas: [],
            };

            catchMap[spawnType as "Grass"] = spawnTypeLocationPokemonData;
            catchs.push(spawnTypeLocationPokemonData);
            // END ! Dangerous workaround

            // Sum total of the rates of all pokemon at location
            let totalRate = 0;
            for (const pokemonName of keys(spawnExportMap)) {
                const pokemonLocationDataExport: LocationPokemonDataExport | undefined = spawnExportMap[pokemonName];

                if (!pokemonLocationDataExport) {
                    continue;
                }

                // ! Dangerous workaround

                // We have to work around the fact that typescript doesn't like the fact the pokemonName as a variable is of type PokemonName and not a specific typeof
                // Let's assume the value is 'Pikachu' for now

                // Dynamic type check to make sure assuming 'Pikachu' is safe
                // This will give us a Type error if 'Pikachu' no long is of type SpawnType
                const pikachuIsPokemonNameTypeCheck: PokemonName = 'Pikachu';
                pikachuIsPokemonNameTypeCheck;

                if (!pokemonLocationDataExport.inFireRed && !pokemonLocationDataExport.inLeafGreen) {
                    console.warn("Unexpected pokemonLocationDataExport not in FireRed or LeafGreen");
                    debugger;
                    continue;
                }

                // Assuming SpawnType is Grass for the same reason above
                const pokemonLocationData: LocationPokemonData<"Pikachu", "Grass"> = {
                    pokemonName: pokemonName as "Pikachu",
                    spawnType: spawnType as 'Grass',

                    mixRate: 0,
                    mixRatePercent: 0,
                    totalRate: 0,

                    rate: pokemonLocationDataExport.rate,
                    minLevel: pokemonLocationDataExport.minLevel,
                    maxLevel: pokemonLocationDataExport.maxLevel,
                    note: pokemonLocationDataExport.note,
                    inFireRed: pokemonLocationDataExport.inFireRed as true, // Bypass type check since validation above confirms at least one is true
                    inLeafGreen: pokemonLocationDataExport.inLeafGreen as true, // Bypass type check since validation above confirms at least one is true
                };

                spawnTypeLocationPokemonData.locationPokemonDataMap[pokemonName as 'Pikachu'] = pokemonLocationData;
                spawnTypeLocationPokemonData.locationPokemonDatas.push(pokemonLocationData);

                // END ! Dangerous workaround

                if (!pokemonLocationData.inFireRed && !pokemonLocationData.inLeafGreen) {
                    console.error("Unexpected pokemon isn't from Fire Red or Leaf Green");
                    debugger;
                }

                if (pokemonLocationData.inFireRed) {
                    pokemonLocationData.mixRate += pokemonLocationData.rate;
                }
                if (pokemonLocationData.inLeafGreen) {
                    pokemonLocationData.mixRate += pokemonLocationData.rate;
                }

                totalRate += pokemonLocationData.mixRate;
            }

            if (!totalRate) {
                console.error("Unexpected totalRate was 0");
                debugger;
            }

            for (const _locationPokemonData of spawnTypeLocationPokemonData.locationPokemonDatas) {
                _locationPokemonData.mixRatePercent = _locationPokemonData.mixRate / totalRate;
                _locationPokemonData.totalRate = totalRate;
            }
        }
    }

    // ! Dangerous workaround

    // We have to work around the fact that typescript doesn't like the fact the pokeLocation as a variable is of type PokeLocation and not a specific typeof
    // Let's assume the value is 'Route 1' for now

    // Dynamic type check to make sure assuming 'Route 1' is safe
    // This will give us a Type error if 'Route 1' no long is of type SpawnType
    const route1IsPokeLocationTypeCheck: PokeLocation = 'Route 1';
    route1IsPokeLocationTypeCheck;

    pokeLocationDataMap[pokeLocation as "Route 1"] = pokeLocationData;
    pokeLocationDatas.push(pokeLocationData);

    // END ! Dangerous workaround
}
