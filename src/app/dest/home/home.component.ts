import { Component, OnInit } from '@angular/core';

import { pokemonList, Pokemon } from 'pokemon_data';

@Component({
    selector: 'moo-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.style.scss']
})
export class HomeComponent implements OnInit {
    public pokemonList: Pokemon[] = [];

    constructor() {
    }

    public ngOnInit(): void {
        console.log("Hello Home");
        this.pokemonList = pokemonList;
    }

    public ngOnDestroy(): void {
    }
}
