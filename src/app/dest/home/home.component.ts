import { Component, OnInit } from '@angular/core';

import { pokemonList, pokemonLocationDataMap, Pokemon, PokemonLocation, PokemonLocationData, SpawnType } from 'pokemon_data';

// source: https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
// https://github.com/microsoft/TypeScript/issues/20503
export function keys<O>(o: O) {
    return Object.keys(o) as (keyof O)[];
  }

@Component({
    selector: 'moo-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.scss']
})
export class HomeComponent implements OnInit {
    public pokemonList: Pokemon[] = [];
    public pokemonLocation?: PokemonLocation;
    public pokemonLocationData?: PokemonLocationData;

    public pokemonLocations: PokemonLocation[] = [];
    public filteredSpawnTypes: SpawnType[] = [];

    constructor() {
    }

    public ngOnInit(): void {
        console.log("Hello Home");
        this.pokemonList = pokemonList;
    }

    public setPokemonLocation(pokemonLocation: PokemonLocation): void {
        this.pokemonLocation = pokemonLocation;
        this.pokemonLocationData = pokemonLocationDataMap[pokemonLocation];
        this.filteredSpawnTypes = [];

        for (let spawnType of keys(this.pokemonLocationData.catchMap)) {
            this.filteredSpawnTypes.push(spawnType);
        }
    }

    public ngOnDestroy(): void {
    }
}
