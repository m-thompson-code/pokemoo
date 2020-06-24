import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '@app/dest/home/home.component';
import { HomeRoutingModule } from '@app/dest/home/home-routing.module';

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
