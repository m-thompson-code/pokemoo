import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';

import { pokeLocationDataMap, PokeLocation, PokeLocationData, pokeLocations, pokemonDatas } from 'pokemon_data';
import { PokeLocationMapObjComponent } from '@app/components/poke-location-map-obj/poke-location-map-obj.component';

import { LineComponent } from '@app/components/line/line.component';

export interface PokeLocationMapObj {
    pokeLocation: PokeLocation;
    top: string;
    _top: number;
    left: string;
    _left: number;
    connections: PokeLocation[];
    components: PokeLocationMapObjComponent[];
    lineComponents: [];
}

export interface MapLine {
    pointA: HTMLElement;
    pokeLocationMapObjA: PokeLocationMapObj;
    pointB: HTMLElement;
    pokeLocationMapObjB: PokeLocationMapObj;
}

export interface KeyValue<T=string, V=any> {
    key: T;
    value: V;
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
    @ViewChildren('mooLines') private mooLineViewChildren!: QueryList<LineComponent>;

    public pokeLocation?: PokeLocation;
    public pokeLocationData?: PokeLocationData;

    public pokeLocations: PokeLocation[] = [];

    public pokeLocationMapObjs: PokeLocationMapObj[] = [];

    public tileCol: number[] = [];
    public tileRow: number[] = [];

    public activeX: number = 0;
    public activeY: number = 0;

    public lines: MapLine[] = [];
    public mooLines: LineComponent[] = [];

    public showMap?: boolean;

    constructor(private cdRef: ChangeDetectorRef) {
        // console.log(pokeLocationDataMap);
        // console.log(pokemonDatas);
    }

    // private setTiles(cols: number, rows: number): void {
    //     this.tileCol = [];
    //     this.tileRow = [];

    //     for (let i = 0; i < cols; i++) {
    //         this.tileCol.push(i);
    //     }
        
    //     for (let i = 0; i < rows; i++) {
    //         this.tileRow.push(i);
    //     }
    // }

    // public _consoleTile(x: number, y: number): void {
    //     this.activeX = x;
    //     this.activeY = y;

    //     console.log(x,y);
    // }

    public ngOnInit(): void {
        // this.setTiles(15,17);

        this.pokeLocations = pokeLocations;

        this.pokeLocationMapObjs = [];

        // this.pushPokeLocationMapObj("Altering Cave", `${_tm * 8}%`, `${_lm * 8}%`);// TODO: seven islands
        // this.pushPokeLocationMapObj("Berry Forest");// TODO: seven islands
        // this.pushPokeLocationMapObj("Bond Bridge");// TODO: seven islands
        // this.pushPokeLocationMapObj("Canyon Entrance");// TODO: seven islands
        // this.pushPokeLocationMapObj("Cape Brink");// TODO: seven islands
        this.pushPokeLocationMapObj("Celadon Condominiums", 9 - 1, 5 - 1);
        this.pushPokeLocationMapObj("Celadon City", 9 - 1, 5 - 1 - - .7);
        this.pushPokeLocationMapObj("Cerulean City", 12 - 1, 2 - .5);
        this.pushPokeLocationMapObj("Cerulean Cave 2F", 12 - 1, 2 - .5 + .7);
        this.pushPokeLocationMapObj("Cerulean Cave 1F", 12 - 1, 2 - .5 + 1.4);
        this.pushPokeLocationMapObj("Cerulean Cave B1F", 12 - 1, 2 - .5 + 2.1);
        this.pushPokeLocationMapObj("Cinnabar Island", 3, 13 + 1);
        this.pushPokeLocationMapObj("Diglett's Cave (Route 2)", 4 + 1.25, 4 - .75);
        this.pushPokeLocationMapObj("Diglett's Cave (Route 11)", 13 - 1, 8);
        // this.pushPokeLocationMapObj("Five Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Five Isle Meadow");// TODO: seven islands
        // this.pushPokeLocationMapObj("Four Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Fuchsia City", 10, 11);
        // this.pushPokeLocationMapObj("Green Path");
        // this.pushPokeLocationMapObj("Indego Plateau", 1, 2);// TODO: Double check this position// TODO: We aren't doing Indeo Plateau for now
        // this.pushPokeLocationMapObj("Icefall Cave");// TODO: handle this
        // this.pushPokeLocationMapObj("Kindle Road");// TODO: seven islands
        this.pushPokeLocationMapObj("Lavender Town", 16 - .5, 5 + 3);
        // this.pushPokeLocationMapObj("Lost Cave");
        this.pushPokeLocationMapObj("Power Plant", 16 -.5, 3);
        // this.pushPokeLocationMapObj("Memorial Pillar");// TODO: seven islands
        // this.pushPokeLocationMapObj("Mt. Ember");// TODO: handle this
        this.pushPokeLocationMapObj("Mt. Moon 1F", 7, 2 - 1);
        this.pushPokeLocationMapObj("Mt. Moon B1F", 7, 2 - 1 + .7);
        this.pushPokeLocationMapObj("Mt. Moon B2F", 7, 2 - 1 + 1.4);
        // this.pushPokeLocationMapObj("One Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Outcast Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Pallet Town", 3 + 2, 10 + 1);
        this.pushPokeLocationMapObj("Pewter City", 3, 3 - 1);
        this.pushPokeLocationMapObj("Pokemon League Front Gate", 1 + 1, 8 + 1);
        this.pushPokeLocationMapObj("Pokemon Mansion 2F", 3 - 1.5, 13 + .25 - 2.1);
        this.pushPokeLocationMapObj("Pokemon Mansion 3F", 3 - 1.5, 13 + .25 - 1.4);
        this.pushPokeLocationMapObj("Pokemon Mansion 1F", 3 - 1.5, 13 + .25 - .7);
        this.pushPokeLocationMapObj("Pokemon Mansion B1F", 3 - 1.5, 13 + .25);
        this.pushPokeLocationMapObj("Pokemon Tower 1F", 16 - .5, 5 + 2.25);
        // this.pushPokeLocationMapObj("Pokemon Tower 2F", 16 + .5, 5 + 0);
        // this.pushPokeLocationMapObj("Pokemon Tower 3F", 16 + .5, 5 - .25);
        // this.pushPokeLocationMapObj("Pokemon Tower 4F", 16 + .5, 5 - .5);
        // this.pushPokeLocationMapObj("Pokemon Tower 5F", 16 + .5, 5 - .75);
        // this.pushPokeLocationMapObj("Pokemon Tower 6F", 16 + .5, 5 - 1);
        // this.pushPokeLocationMapObj("Pokemon Tower 7F", 16 + .5, 5 - 1.25);
        // this.pushPokeLocationMapObj("Resort Gorgeous");// TODO: seven islands
        this.pushPokeLocationMapObj("Rock Tunnel 1F", 16 - 2, 4 + .5 - .7);
        this.pushPokeLocationMapObj("Rock Tunnel B1F", 16 - 2, 4 + .5);
        this.pushPokeLocationMapObj("Route 1", 3 + 2, 9 + 1);
        this.pushPokeLocationMapObj("Route 10", 16, 2);
        this.pushPokeLocationMapObj("Route 11", 14 - 1, 8 + 1);
        this.pushPokeLocationMapObj("Route 12", 16 - .5, 6 + 2 + 1);
        this.pushPokeLocationMapObj("Route 13", 14 + 1, 10 - .5 + 1);
        this.pushPokeLocationMapObj("Route 14", 13, 10 + 1);
        this.pushPokeLocationMapObj("Route 15", 12 + 2, 11 + 1);
        this.pushPokeLocationMapObj("Route 16", 7, 5 + 1);
        this.pushPokeLocationMapObj("Route 17", 6 + 1, 8);
        this.pushPokeLocationMapObj("Route 18", 8 - .5, 11);
        this.pushPokeLocationMapObj("Route 19", 10 + 2, 13 - 1);
        this.pushPokeLocationMapObj("Route 2 (Viridian)", 3 + 2, 6 + 1);
        this.pushPokeLocationMapObj("Route 2 (Pewter)", 3 + 1, 4 + 1);
        this.pushPokeLocationMapObj("Route 20", 7 - .5, 13 - .5);
        this.pushPokeLocationMapObj("Route 21", 3 + 1.5, 12);
        this.pushPokeLocationMapObj("Route 22", 2, 10);
        this.pushPokeLocationMapObj("Route 23 (Victory Road)", 1 + 1, 6 + 2);
        this.pushPokeLocationMapObj("Route 23 (Indigo Plateau)", 1 + 1, 4);
        this.pushPokeLocationMapObj("Route 24", 12, 1 - .25);
        this.pushPokeLocationMapObj("Route 25", 13 + 1, 0 + 1 - .25);
        this.pushPokeLocationMapObj("Route 3", 5, 3 - 2.5);
        this.pushPokeLocationMapObj("Route 4", 9, 2 - 1 - .5);
        this.pushPokeLocationMapObj("Route 5", 12, 4 + .5);
        this.pushPokeLocationMapObj("Route 6", 12 - 2, 7 - .25 + .5);
        this.pushPokeLocationMapObj("Route 7", 11 - 1, 5 + 1);
        this.pushPokeLocationMapObj("Route 8", 14, 5 + .75);
        this.pushPokeLocationMapObj("Route 9", 14, 2);
        // this.pushPokeLocationMapObj("Ruin Valley");// TODO: seven islands
        this.pushPokeLocationMapObj("Seafoam Islands 1F", 7 + 2, 13 + 1.5 - 2.8);
        this.pushPokeLocationMapObj("Seafoam Islands B1F", 7 + 2, 13 + 1.5 - 2.1);
        this.pushPokeLocationMapObj("Seafoam Islands B2F", 7 + 2, 13 + 1.5 - 1.4);
        this.pushPokeLocationMapObj("Seafoam Islands B3F", 7 + 2, 13 + 1.5 - .7);
        this.pushPokeLocationMapObj("Seafoam Islands B4F", 7 + 2, 13 + 1.5);
        // this.pushPokeLocationMapObj("Sevault Canyon");// TODO: seven islands
        // this.pushPokeLocationMapObj("Seven Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Silph Co.", 12, 5 + 1.5 - .7);
        this.pushPokeLocationMapObj("Saffron City", 12, 5 + 1.5);
        this.pushPokeLocationMapObj("Fighting Dojo", 12, 5 + 1.5 + .7);
        // this.pushPokeLocationMapObj("Six Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Chambers");// TODO: seven islands
        // this.pushPokeLocationMapObj("Tanoby Ruins");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Island");// TODO: seven islands
        // this.pushPokeLocationMapObj("Three Isle Port");// TODO: seven islands
        // this.pushPokeLocationMapObj("Treasure Beach");// TODO: seven islands
        // this.pushPokeLocationMapObj("Two Island");// TODO: seven islands
        this.pushPokeLocationMapObj("Vermilion City", 12 - 2, 8 + 1);
        this.pushPokeLocationMapObj("Victory Road 1F", 1 + 1, 5 + 2);
        this.pushPokeLocationMapObj("Victory Road 2F", 1 + 1, 5 - .7 + 2);
        this.pushPokeLocationMapObj("Victory Road 3F", 1 + 1 - .5, 5 - 1.4 + 2);
        this.pushPokeLocationMapObj("Viridian City", 3 + 2, 8 + 1);
        this.pushPokeLocationMapObj("Viridian Forest", 3 + 1 + .5, 5 + 1);
        // this.pushPokeLocationMapObj("Water Labyrinth");// TODO: seven islands
        // this.pushPokeLocationMapObj("Water Path");// TODO: seven islands

        if (!this.showMap) {
            this.toggleMap();
        }

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
                                pokeLocationMapObjA: _a,
                                pointB: pointB,
                                pokeLocationMapObjB: _b,
                            });
                        }
                    }
                }
            }
        }

        this.cdRef.detectChanges();

        this.mooLines = this.mooLineViewChildren.toArray();
    }

    private pushPokeLocationMapObj(pokeLocation: PokeLocation, left: number, top: number): PokeLocationMapObj {
        const leftMultiplier = 100/17;
        const _lm = leftMultiplier;
        const topMultipler = 100/15;
        const _tm = topMultipler;

        const _p: PokeLocationMapObj = {
            pokeLocation: pokeLocation,
            top: `${_tm * top}%`,
            left: `${_lm * left}%`,
            _top: top,
            _left: left,
            connections: pokeLocationDataMap[pokeLocation].connections,
            components: [],
            lineComponents: [],
        };

        this.pokeLocationMapObjs.push(_p);
        return _p;
    }

    public setPokeLocation(pokeLocation: PokeLocation): void {
        this.pokeLocationData = pokeLocationDataMap[pokeLocation];
        this.pokeLocation = pokeLocation;

        this.updateLines();
    }

    public toggleMap(): void {
        this.showMap = !this.showMap;

        if (this.showMap) {
            // Delay so View updates
            window.setTimeout(() => {
                this.updateLines();
            }, 0);
        }
    }

    public updateLines(): void {
        for (const line of this.mooLines) {
            line.adjustLine();
            
            line.active = false;

            if (line.lineObj?.pokeLocationMapObjA.pokeLocation === this.pokeLocation) {
                line.active = true;
            } else if (line.lineObj?.pokeLocationMapObjB.pokeLocation === this.pokeLocation) {
                line.active = true;
            }
        }
    }

    public ngOnDestroy(): void {
    }
}
