import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeLocationMapObjComponent } from './poke-location-map-obj.component';

@NgModule({
    declarations: [
        PokeLocationMapObjComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [PokeLocationMapObjComponent]
})
export class PokeLocationMapObjModule { }
