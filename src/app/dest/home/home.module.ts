import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { LineModule } from '@app/components/line';
import { PokeLocationMapObjModule } from '@app/components/poke-location-map-obj';
import { PipeModule } from '@app/pipes';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,

        LineModule,
        PokeLocationMapObjModule,

        PipeModule,
    ]
})
export class HomeModule { }
