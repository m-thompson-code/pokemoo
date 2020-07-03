import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef, ElementRef } from '@angular/core';

import { pokemonList, Pokemon, pokeLocationDataMap, PokeLocation, PokeLocationData, pokeLocations, LocationPokemonData, SpawnType } from 'pokemon_data';
import { PokeLocationMapObjComponent } from '@app/components/poke-location-map-obj/poke-location-map-obj.component';

export type _LocationPokemonData = LocationPokemonData & {pokemon: Pokemon};

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
    public pokemonLocation?: PokeLocation;
    public pokeLocationData?: PokeLocationData;

    public pokeLocations: PokeLocation[] = [];
    public filteredSpawnTypes: SpawnType[] = [];
    public filteredSpawnPokemonMap: {
        [spawnType in SpawnType]?: _LocationPokemonData[];
    } = {};

    public JSON: JSON;

    public pokeLocationMapObjs: PokeLocationMapObj[] = [];

    public tileCol: number[] = [];
    public tileRow: number[] = [];

    public activeX: number = 0;
    public activeY: number = 0;

    public lines: MapLine[] = [];

    constructor(private cdRef: ChangeDetectorRef) {
        this.JSON = JSON;
    }

    private setTiles(cols: number, rows: number): void {
        this.tileCol = [];/////////////////
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
        this.setTiles(15,18);

        this.JSON = JSON;

        this.pokemonList = pokemonList;
        this.pokeLocations = pokeLocations;

        this.pokeLocationMapObjs = [];

        const leftMultiplier = 100/18;
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
        this.pushPokeLocationMapObj("Cerulean Cave B1F", 12, 2 + .25);
        this.pushPokeLocationMapObj("Cerulean Cave 1F", 12, 2);
        this.pushPokeLocationMapObj("Cerulean Cave 2F", 12, 2 - .25);
        this.pushPokeLocationMapObj("Cerulean City", 12, 2 - .5);
        this.pushPokeLocationMapObj("Cinnabar Island", 3, 13);
        this.pushPokeLocationMapObj("Diglett's Cave", 3, 4);// TODO: handle that this shows up in two spots
        this.pushPokeLocationMapObj("Diglett's Cave", 13, 8);// TODO: handle that this shows up in two spots
        this.pushPokeLocationMapObj("Fighting Dojo", 12, 5);
        // this.pushPokeLocationMapObj("Five Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Five Isle Meadow");// TODO: seven islands
        // this.pushPokeLocationMapObj("Four Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Fuchsia City", 12, 8);
        // this.pushPokeLocationMapObj("Green Path");
        this.pushPokeLocationMapObj("Indego Plateau", 1, 2);// TODO: Double check this position
        // this.pushPokeLocationMapObj("Icefall Cave");// TODO: handle this
        // this.pushPokeLocationMapObj("Kindle Road");// TODO: seven islands
        this.pushPokeLocationMapObj("Lavender Town", 16, 5);
        // this.pushPokeLocationMapObj("Lost Cave");
        this.pushPokeLocationMapObj("Power Plant", 16, 3);
        // this.pushPokeLocationMapObj("Memorial Pillar");// TODO: seven islands
        // this.pushPokeLocationMapObj("Mt. Ember");// TODO: handle this
        this.pushPokeLocationMapObj("Mt. Moon 1F", 7, 2);
        this.pushPokeLocationMapObj("Mt. Moon B1F", 7, 2 + .25);
        this.pushPokeLocationMapObj("Mt. Moon B2F", 7, 2 + .5);
        // this.pushPokeLocationMapObj("One Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Outcast Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Pallet Town", 3, 10);
        this.pushPokeLocationMapObj("Pewter City", 3, 3);
        this.pushPokeLocationMapObj("Pokemon League Front Gate", 1, 7 - .25);
        // this.pushPokeLocationMapObj("Pokemon Mansion 1F");
        // this.pushPokeLocationMapObj("Pokemon Mansion 2F");
        // this.pushPokeLocationMapObj("Pokemon Mansion 3F");
        // this.pushPokeLocationMapObj("Pokemon Mansion B1F");
        // this.pushPokeLocationMapObj("Pokemon Tower 1F");
        // this.pushPokeLocationMapObj("Pokemon Tower 2F");
        // this.pushPokeLocationMapObj("Pokemon Tower 3F");
        // this.pushPokeLocationMapObj("Pokemon Tower 4F");
        // this.pushPokeLocationMapObj("Pokemon Tower 5F");
        // this.pushPokeLocationMapObj("Pokemon Tower 6F");
        // this.pushPokeLocationMapObj("Pokemon Tower 7F");
        // this.pushPokeLocationMapObj("Resort Gorgeous");
        // this.pushPokeLocationMapObj("Rock Tunnel 1F");
        // this.pushPokeLocationMapObj("Rock Tunnel B1F");
        // this.pushPokeLocationMapObj("Route 1");
        // this.pushPokeLocationMapObj("Route 10");
        // this.pushPokeLocationMapObj("Route 11");
        // this.pushPokeLocationMapObj("Route 12");
        // this.pushPokeLocationMapObj("Route 13");
        // this.pushPokeLocationMapObj("Route 14");
        // this.pushPokeLocationMapObj("Route 15");
        // this.pushPokeLocationMapObj("Route 16");
        // this.pushPokeLocationMapObj("Route 17");
        // this.pushPokeLocationMapObj("Route 18");
        // this.pushPokeLocationMapObj("Route 19");
        // this.pushPokeLocationMapObj("Route 2 (Pewter)");
        // this.pushPokeLocationMapObj("Route 2 (Viridian)");
        // this.pushPokeLocationMapObj("Route 20");
        // this.pushPokeLocationMapObj("Route 21");
        this.pushPokeLocationMapObj("Route 22", 2, 7);
        this.pushPokeLocationMapObj("Route 23", 1, 5);
        // this.pushPokeLocationMapObj("Route 24");
        // this.pushPokeLocationMapObj("Route 25");
        // this.pushPokeLocationMapObj("Route 3");
        // this.pushPokeLocationMapObj("Route 4");
        // this.pushPokeLocationMapObj("Route 5");
        // this.pushPokeLocationMapObj("Route 6");
        // this.pushPokeLocationMapObj("Route 7");
        // this.pushPokeLocationMapObj("Route 8");
        // this.pushPokeLocationMapObj("Route 9");
        // this.pushPokeLocationMapObj("Ruin Valley");
        // this.pushPokeLocationMapObj("Saffron City");
        // this.pushPokeLocationMapObj("Seafoam Islands 1F");
        // this.pushPokeLocationMapObj("Seafoam Islands B1F");
        // this.pushPokeLocationMapObj("Seafoam Islands B2F");
        // this.pushPokeLocationMapObj("Seafoam Islands B3F");
        // this.pushPokeLocationMapObj("Seafoam Islands B4F");
        // this.pushPokeLocationMapObj("Sevault Canyon");// TODO: seven islands
        // this.pushPokeLocationMapObj("Seven Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Silph Co.");
        // this.pushPokeLocationMapObj("Six Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Chambers");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Ruins");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Isle Port");// TODO: seven islands
        // this.pushPokeLocationMapObj("Treasure Beach");// TODO: seven islands
        // this.pushPokeLocationMapObj("Two Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Vermilion City");
        // this.pushPokeLocationMapObj("Victory Road 1F");
        // this.pushPokeLocationMapObj("Victory Road 2F");
        // this.pushPokeLocationMapObj("Victory Road 3F");
        // this.pushPokeLocationMapObj("Viridian City");
        // this.pushPokeLocationMapObj("Viridian Forest");
        // this.pushPokeLocationMapObj("Water Labyrinth");// TODO: seven islands
        // this.pushPokeLocationMapObj("Water Path");// TODO: seven islands
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
                                // pointA: __a.divContainer.nativeElement.parentElement,
                                // pointB: __b.divContainer.nativeElement.parentElement,
                                // pointA: (__a as any).nativeElement as HTMLElement,
                                // pointB: (__b as any).nativeElement as HTMLElement,
                            });
                        }
                    }
                }
            }
        }

        this.cdRef.detectChanges();
    }

    private pushPokeLocationMapObj(pokeLocation: PokeLocation, left: number, top: number): PokeLocationMapObj {
        const leftMultiplier = 100/18;
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

    public setPokeLocation(pokemonLocation: PokeLocation): void {
        this.pokemonLocation = pokemonLocation;
        this.pokeLocationData = pokeLocationDataMap[pokemonLocation];
        this.filteredSpawnTypes = [];
        this.filteredSpawnPokemonMap = {};

        for (let spawnType of keys(this.pokeLocationData.catchMap)) {
            this.filteredSpawnTypes.push(spawnType);
            this.filteredSpawnPokemonMap[spawnType] = [];

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

                const _locationPokemonData: LocationPokemonData & {pokemon?: Pokemon} = _p;
                _locationPokemonData.pokemon = pokemon;

                if (_locationPokemonData.pokemon) {
                    this.filteredSpawnPokemonMap[spawnType]?.push(_locationPokemonData as _LocationPokemonData);
                }
            }
        }
    }

    public ngOnDestroy(): void {
    }
}
