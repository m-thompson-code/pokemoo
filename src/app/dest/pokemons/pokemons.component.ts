import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { PokemonData, pokemonDatas } from 'pokemon_data';

// import { pokeLocationDataMap, PokeLocation, PokeLocationData, pokeLocations, pokemonDatas } from 'pokemon_data';
// import { PokeLocationMapObjComponent } from '@app/components/poke-location-map-obj/poke-location-map-obj.component';

// import { LineComponent } from '@app/components/line/line.component';

@Component({
    selector: 'moo-pokemons',
    templateUrl: './pokemons.template.html',
    styleUrls: ['./pokemons.style.scss']
})
export class PokemonsComponent implements OnInit {
    // @ViewChildren('pokeLocationObjs') private pokeLocationObjsViewChildren!: QueryList<PokeLocationMapObjComponent>;
    // @ViewChildren('mooLines') private mooLineViewChildren!: QueryList<LineComponent>;

    // public pokeLocation?: PokeLocation;
    // public pokeLocationData?: PokeLocationData;

    // public pokeLocations: PokeLocation[] = [];

    // public pokeLocationMapObjs: PokeLocationMapObj[] = [];

    // public tileCol: number[] = [];
    // public tileRow: number[] = [];

    // public activeX: number = 0;
    // public activeY: number = 0;

    // public lines: MapLine[] = [];
    // public mooLines: LineComponent[] = [];

    // public showMap?: boolean;

    public pokemonDatas: PokemonData[] = [];

    constructor(private cdRef: ChangeDetectorRef) {
        // console.log(pokeLocationDataMap);
        // console.log(pokemonDatas);
    }

    public ngOnInit(): void {
        const _pokemonDatas = pokemonDatas.slice(0);
        this.pokemonDatas = _pokemonDatas;

        this.pokemonDatas.sort((a: PokemonData, b: PokemonData) => {
            if (a.pokedexEntry < b.pokedexEntry) {
                return -1;
            }

            return 1;
        });
    }

    public ngOnDestroy(): void {
    }
}
