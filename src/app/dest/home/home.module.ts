import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';

// import { ButtonModule } from '@app/components/button';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,

        // ButtonModule,
    ]
})
export class HomeModule { }
