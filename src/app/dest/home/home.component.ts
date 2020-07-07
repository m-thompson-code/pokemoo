import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef, ElementRef } from '@angular/core';

import { pokemonList, Pokemon, pokeLocationDataMap, PokeLocation, PokeLocationData, pokeLocations, LocationPokemonData, SpawnType } from 'pokemon_data';
import { PokeLocationMapObjComponent } from '@app/components/poke-location-map-obj/poke-location-map-obj.component';

export type _LocationPokemonData = LocationPokemonData & {
    pokemon: Pokemon;
    mixRate: number;// Combined rate between both versions of the game
    mixRatePercent: number;// Decimal percent of mixRate
    totalRate: number;
};

export interface PokeLocationMapObj {
    pokeLocation: PokeLocation;
    top: string;
    left: string;
    connections: PokeLocation[];
    components: PokeLocationMapObjComponent[];
}

export interface MapLine {
    pointA: HTMLElement;
    pointB: HTMLElement;
}

// source: https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
// https://github.com/microsoft/TypeScript/issues/20503
export function keys<O>(o: O): (keyof O)[] {
    return Object.keys(o) as (keyof O)[];
}

@Component({
    selector: 'moo-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.scss']
})
export class HomeComponent implements OnInit {
    @ViewChildren('pokeLocationObjs') private pokeLocationObjsViewChildren!: QueryList<PokeLocationMapObjComponent>;

    public pokemonList: Pokemon[] = [];
    public pokeLocation?: PokeLocation;
    public pokeLocationData?: PokeLocationData;

    public pokeLocations: PokeLocation[] = [];
    public filteredSpawnTypes: SpawnType[] = [];
    public filteredSpawnPokemonMap: {
        [spawnType in SpawnType]?: _LocationPokemonData[];
    } = {};

    public filteredSpawnPokemonArrays: {
        spawnType: SpawnType;
        locationPokemonDatas: _LocationPokemonData[];
    }[] = [];

    public JSON: JSON;

    public pokeLocationMapObjs: PokeLocationMapObj[] = [];

    public tileCol: number[] = [];
    public tileRow: number[] = [];

    public activeX: number = 0;
    public activeY: number = 0;

    public lines: MapLine[] = [];

    public showMap?: boolean;

    constructor(private cdRef: ChangeDetectorRef) {
        this.JSON = JSON;
    }

    private setTiles(cols: number, rows: number): void {
        this.tileCol = [];
        this.tileRow = [];

        for (let i = 0; i < cols; i++) {
            this.tileCol.push(i);
        }
        
        for (let i = 0; i < rows; i++) {
            this.tileRow.push(i);
        }
    }

    public _consoleTile(x: number, y: number): void {
        this.activeX = x;
        this.activeY = y;

        console.log(x,y);
    }

    public ngOnInit(): void {
        this.setTiles(15,17);

        this.JSON = JSON;

        this.pokemonList = pokemonList;
        this.pokeLocations = pokeLocations;

        this.pokeLocationMapObjs = [];

        const leftMultiplier = 100/17;
        const _lm = leftMultiplier;
        const topMultipler = 100/15;
        const _tm = topMultipler;

        // this.pushPokeLocationMapObj("Altering Cave", `${_tm * 8}%`, `${_lm * 8}%`);// TODO: seven islands
        // this.pushPokeLocationMapObj("Berry Forest");// TODO: seven islands
        // this.pushPokeLocationMapObj("Bond Bridge");// TODO: seven islands
        // this.pushPokeLocationMapObj("Canyon Entrance");// TODO: seven islands
        // this.pushPokeLocationMapObj("Cape Brink");// TODO: seven islands
        this.pushPokeLocationMapObj("Celadon Condominiums", 9, 5 + .25);
        this.pushPokeLocationMapObj("Celadon City", 9, 5);
        this.pushPokeLocationMapObj("Cerulean Cave B1F", 12 - 1, 2 + .25);
        this.pushPokeLocationMapObj("Cerulean Cave 1F", 12 - 1, 2);
        this.pushPokeLocationMapObj("Cerulean Cave 2F", 12 - 1, 2 - .25);
        this.pushPokeLocationMapObj("Cerulean City", 12 - 1, 2 - .5);
        this.pushPokeLocationMapObj("Cinnabar Island", 3, 13);
        this.pushPokeLocationMapObj("Diglett's Cave (Route 2)", 4 + 1, 4 - .25);// TODO: handle that this shows up in two spots
        this.pushPokeLocationMapObj("Diglett's Cave (Route 11)", 13, 8 - 1);// TODO: handle that this shows up in two spots
        this.pushPokeLocationMapObj("Fighting Dojo", 12, 5 + .25);
        // this.pushPokeLocationMapObj("Five Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Five Isle Meadow");// TODO: seven islands
        // this.pushPokeLocationMapObj("Four Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Fuchsia City", 10, 11);
        // this.pushPokeLocationMapObj("Green Path");
        // this.pushPokeLocationMapObj("Indego Plateau", 1, 2);// TODO: Double check this position// TODO: We aren't doing Indeo Plateau for now
        // this.pushPokeLocationMapObj("Icefall Cave");// TODO: handle this
        // this.pushPokeLocationMapObj("Kindle Road");// TODO: seven islands
        this.pushPokeLocationMapObj("Lavender Town", 16, 5 + .5);
        // this.pushPokeLocationMapObj("Lost Cave");
        this.pushPokeLocationMapObj("Power Plant", 16 -.5, 3);
        // this.pushPokeLocationMapObj("Memorial Pillar");// TODO: seven islands
        // this.pushPokeLocationMapObj("Mt. Ember");// TODO: handle this
        this.pushPokeLocationMapObj("Mt. Moon 1F", 7, 2);
        this.pushPokeLocationMapObj("Mt. Moon B1F", 7, 2 + .25);
        this.pushPokeLocationMapObj("Mt. Moon B2F", 7, 2 + .5);
        // this.pushPokeLocationMapObj("One Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Outcast Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Pallet Town", 3, 10);
        this.pushPokeLocationMapObj("Pewter City", 3, 3 - 1);
        this.pushPokeLocationMapObj("Pokemon League Front Gate", 1, 8 - 1);
        this.pushPokeLocationMapObj("Pokemon Mansion 1F", 3 - 2, 13 + 0);
        this.pushPokeLocationMapObj("Pokemon Mansion 2F", 3 - 2, 13 - .25);
        this.pushPokeLocationMapObj("Pokemon Mansion 3F", 3 - 2, 13 - .5);
        this.pushPokeLocationMapObj("Pokemon Mansion B1F", 3 - 2, 13 + .25);
        this.pushPokeLocationMapObj("Pokemon Tower 1F", 16, 5 + .25);
        // this.pushPokeLocationMapObj("Pokemon Tower 2F", 16 + .5, 5 + 0);
        // this.pushPokeLocationMapObj("Pokemon Tower 3F", 16 + .5, 5 - .25);
        // this.pushPokeLocationMapObj("Pokemon Tower 4F", 16 + .5, 5 - .5);
        // this.pushPokeLocationMapObj("Pokemon Tower 5F", 16 + .5, 5 - .75);
        // this.pushPokeLocationMapObj("Pokemon Tower 6F", 16 + .5, 5 - 1);
        // this.pushPokeLocationMapObj("Pokemon Tower 7F", 16 + .5, 5 - 1.25);
        // this.pushPokeLocationMapObj("Resort Gorgeous");// TODO: seven islands
        this.pushPokeLocationMapObj("Rock Tunnel 1F", 16 - 2.5, 4);
        this.pushPokeLocationMapObj("Rock Tunnel B1F", 16 - 2.5, 4 + .25);
        this.pushPokeLocationMapObj("Route 1", 3, 9);
        this.pushPokeLocationMapObj("Route 10", 16, 2);
        this.pushPokeLocationMapObj("Route 11", 14, 8 + .25);
        this.pushPokeLocationMapObj("Route 12", 16, 6);
        this.pushPokeLocationMapObj("Route 13", 14, 10);
        this.pushPokeLocationMapObj("Route 14", 13, 10);
        this.pushPokeLocationMapObj("Route 15", 12, 11);
        this.pushPokeLocationMapObj("Route 16", 7, 5);
        this.pushPokeLocationMapObj("Route 17", 6, 8);
        this.pushPokeLocationMapObj("Route 18", 8, 11);
        this.pushPokeLocationMapObj("Route 19", 10, 13);
        this.pushPokeLocationMapObj("Route 2 (Viridian)", 3 + 1, 6);
        this.pushPokeLocationMapObj("Route 2 (Pewter)", 3, 4);
        this.pushPokeLocationMapObj("Route 20", 7, 13 - .5);
        this.pushPokeLocationMapObj("Route 21", 3, 12);
        this.pushPokeLocationMapObj("Route 22", 2, 8 + .25);
        this.pushPokeLocationMapObj("Route 23 (Victory Road)", 1, 6);
        this.pushPokeLocationMapObj("Route 23 (Indigo Plateau)", 1, 4 - 1);
        this.pushPokeLocationMapObj("Route 24", 12, 1);
        this.pushPokeLocationMapObj("Route 25", 13 + 1, 0 + 1 - .25);
        this.pushPokeLocationMapObj("Route 3", 5, 3 - 1 - .25);
        this.pushPokeLocationMapObj("Route 4", 9, 2 - .25);
        this.pushPokeLocationMapObj("Route 5", 12, 4 - .25);
        this.pushPokeLocationMapObj("Route 6", 12, 7 - .25);
        this.pushPokeLocationMapObj("Route 7", 11, 5 - .25);
        this.pushPokeLocationMapObj("Route 8", 14, 5 + .75);
        this.pushPokeLocationMapObj("Route 9", 14, 2);
        // this.pushPokeLocationMapObj("Ruin Valley");// TODO: seven islands
        this.pushPokeLocationMapObj("Saffron City", 12, 5);
        this.pushPokeLocationMapObj("Seafoam Islands 1F", 7, 13 - .25);
        this.pushPokeLocationMapObj("Seafoam Islands B1F", 7, 13 + 0);
        this.pushPokeLocationMapObj("Seafoam Islands B2F", 7, 13 + .25);
        this.pushPokeLocationMapObj("Seafoam Islands B3F", 7, 13 + .5);
        this.pushPokeLocationMapObj("Seafoam Islands B4F", 7, 13 + .75);
        // this.pushPokeLocationMapObj("Sevault Canyon");// TODO: seven islands
        // this.pushPokeLocationMapObj("Seven Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Silph Co.", 12, 5 - .25);
        // this.pushPokeLocationMapObj("Six Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Chambers");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Ruins");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Isle Port");// TODO: seven islands
        // this.pushPokeLocationMapObj("Treasure Beach");// TODO: seven islands
        // this.pushPokeLocationMapObj("Two Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Vermilion City", 12, 8);
        this.pushPokeLocationMapObj("Victory Road 1F", 1, 5);
        this.pushPokeLocationMapObj("Victory Road 2F", 1, 5 - .25);
        this.pushPokeLocationMapObj("Victory Road 3F", 1, 5 - .5);
        this.pushPokeLocationMapObj("Viridian City", 3, 8);
        this.pushPokeLocationMapObj("Viridian Forest", 3 + 1, 5);
        // this.pushPokeLocationMapObj("Water Labyrinth");// TODO: seven islands
        // this.pushPokeLocationMapObj("Water Path");// TODO: seven islands

        // if (!this.showMap) {
        //     this.toggleMap();
        // }

        this.setPokeLocation("Pallet Town");
    }

    public ngAfterViewInit(): void {
        const _p = this.pokeLocationObjsViewChildren.toArray();
        console.log(_p);
        for (const __p of _p) {
            if (__p.pokeLocationMapObj) {
                __p.pokeLocationMapObj.components.push(__p);
            }
        }

        this.lines = [];

        for (const _a of this.pokeLocationMapObjs) {
            for (const _b of this.pokeLocationMapObjs) {
                if (_a.connections.includes(_b.pokeLocation)) {
                    for (const __a of _a.components) {
                        for (const __b of _b.components) {
                            const pointA = __a.divContainer.nativeElement.parentElement;
                            const pointB = __b.divContainer.nativeElement.parentElement;

                            if (!pointA || !pointB) {
                                console.warn("Unexpected missing point");
                                debugger;
                                continue;
                            }

                            this.lines.push({
                                pointA: pointA,
                                pointB: pointB,
                            });
                        }
                    }
                }
            }
        }

        this.cdRef.detectChanges();
    }

    private pushPokeLocationMapObj(pokeLocation: PokeLocation, left: number, top: number): PokeLocationMapObj {
        const leftMultiplier = 100/17;
        const _lm = leftMultiplier;
        const topMultipler = 100/15;
        const _tm = topMultipler;

        const _p = {
            pokeLocation: pokeLocation,
            top: `${_tm * top}%`,
            left: `${_lm * left}%`,
            _top: top,
            _left: left,
            connections: pokeLocationDataMap[pokeLocation].connections,
            components: [],
        };

        this.pokeLocationMapObjs.push(_p);
        return _p;
    }

    public setPokeLocation(pokeLocation: PokeLocation): void {
        this.pokeLocationData = pokeLocationDataMap[pokeLocation];

        this.filteredSpawnTypes = [];
        this.filteredSpawnPokemonMap = {};
        this.filteredSpawnPokemonArrays = [];

        for (let spawnType of keys(this.pokeLocationData.catchMap)) {
            let totalRate = 0;

            const filteredSpawnPokemons: _LocationPokemonData[] = [];

            this.filteredSpawnPokemonMap[spawnType] = filteredSpawnPokemons;

            this.filteredSpawnTypes.push(spawnType);

            this.filteredSpawnPokemonArrays.push({
                spawnType: spawnType,
                locationPokemonDatas: filteredSpawnPokemons,
            });

            const _locationPokemonDataMap = this.pokeLocationData.catchMap[spawnType];

            if (!_locationPokemonDataMap) {
                console.warn("Unexpected _locationPokemonDataMap");
                return;
            }

            for (let pokemon of keys(_locationPokemonDataMap)) {
                const _p = _locationPokemonDataMap[pokemon];

                if (!_p) {
                    continue;
                }

                // Avoid mutating the source for LocationPokemonData (and we're going to be adding additional attributes)
                const _locationPokemonData: _LocationPokemonData = {
                    rate: _p.rate,
                    minLevel: _p.minLevel,
                    maxLevel: _p.maxLevel,
                    note: _p.note,
                    inFireRed: _p.inFireRed,
                    inLeafGreen: _p.inLeafGreen,
                    pokemon: pokemon,
                    mixRate: 0,
                    mixRatePercent: 0,
                    totalRate: 0,
                };

                if (_locationPokemonData.inFireRed) {
                    // totalRate += _locationPokemonData.rate;
                    _locationPokemonData.mixRate += _locationPokemonData.rate;
                }
                if (_locationPokemonData.inLeafGreen) {
                    // totalRate += _locationPokemonData.rate;
                    _locationPokemonData.mixRate += _locationPokemonData.rate;
                }

                totalRate += _locationPokemonData.mixRate;

                // const _locationPokemonData: LocationPokemonData & {pokemon?: Pokemon} = _p;
                // _locationPokemonData.pokemon = pokemon;

                filteredSpawnPokemons.push(_locationPokemonData);
            }

            if (!totalRate) {
                console.warn("Unexpected totalRate was 0");
                debugger;
            }

            for (const _locationPokemonData of filteredSpawnPokemons) {
                _locationPokemonData.mixRatePercent = _locationPokemonData.mixRate / totalRate;
                _locationPokemonData.totalRate = totalRate;
            }
        }

        this.pokeLocation = pokeLocation;
    }

    public toggleMap(): void {
        this.showMap = !this.showMap;
    }

    public ngOnDestroy(): void {
    }
}
