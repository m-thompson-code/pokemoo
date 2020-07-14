import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonData, pokemonDatas, SpecialEvolution, EvolutionStone, PokemonName } from 'pokemon_data';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'moo-pokemon',
    templateUrl: './pokemon.template.html',
    styleUrls: ['./pokemon.style.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {
    private paramSubscription?: Subscription;

    public pokemonDatas: PokemonData[] = [];
    public pokemonData?: PokemonData;

    public evolutions: {
        pokemonName: PokemonName;
        atLevel?: number;
        withMethod?: EvolutionStone | SpecialEvolution;
    }[] = [];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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

        this.paramSubscription = this.activatedRoute.params.subscribe(params => {
            const _index = +(params['pokedexEntry'] || 0) || 0;

            if (_index < 0 || _index > pokemonDatas.length) {
                this.router.navigate(['error-404'], {
                    skipLocationChange: true,
                });
                return;
            }

            this.setPokemonData(_index);
        });
    }

    public setPokemonData(pokedexEntry: number): void {
        this.pokemonData = this.pokemonDatas[pokedexEntry - 1];

        this.evolutions = [];

        if (this.pokemonData.evolution) {
            this._addEvolution(this.pokemonData.evolution, this.pokemonData.evolutionMethod);
        }

        if (this.pokemonData.evolutions) {
            for (let i = 0; i < this.pokemonData.evolutions.length; i++) {
                this._addEvolution(this.pokemonData.evolutions[i], this.pokemonData.evolutionMethods[i]);
            }
        }
    }

    private _addEvolution(pokemonName: PokemonName, evolutionMethod: number | EvolutionStone | SpecialEvolution): void {
        let atLevel: undefined | number;
        let withMethod: undefined | EvolutionStone | SpecialEvolution;

        if (typeof evolutionMethod === 'number') {
            atLevel = evolutionMethod;
            withMethod = undefined;
        } else {
            atLevel = undefined;
            withMethod = evolutionMethod;
        }

        this.evolutions.push({
            pokemonName: pokemonName,
            atLevel: atLevel,
            withMethod: withMethod,
        });
    }

    public ngOnDestroy(): void {
        this.paramSubscription && this.paramSubscription.unsubscribe();
    }
}
