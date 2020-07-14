import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from './pokemon-routing.module';

// import { LineModule } from '@app/components/line';
// import { PokeLocationMapObjModule } from '@app/components/poke-location-map-obj';
import { PipeModule } from '@app/pipes';

@NgModule({
    declarations: [
        PokemonComponent
    ],
    imports: [
        CommonModule,
        PokemonRoutingModule,

        // LineModule,
        // PokeLocationMapObjModule,

        PipeModule,
    ]
})
export class PokemonModule { }
