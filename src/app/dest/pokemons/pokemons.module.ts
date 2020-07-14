import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsComponent } from './pokemons.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';

// import { LineModule } from '@app/components/line';
// import { PokeLocationMapObjModule } from '@app/components/poke-location-map-obj';
import { PipeModule } from '@app/pipes';

@NgModule({
    declarations: [
        PokemonsComponent
    ],
    imports: [
        CommonModule,
        PokemonsRoutingModule,

        // LineModule,
        // PokeLocationMapObjModule,

        PipeModule,
    ]
})
export class PokemonsModule { }
