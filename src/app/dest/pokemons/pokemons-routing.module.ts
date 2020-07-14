import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonsComponent } from './pokemons.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonsComponent,
        // resolve: {
        //     preload: PreloadResolver,
        // },
        // canActivate: [
        //     TopNavChapterGuard,
        // ],
        // data: {
        //     routerID: 'home',
        // },
        // runGuardsAndResolvers: 'always',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonsRoutingModule { }
