import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonComponent } from './pokemon.component';

const routes: Routes = [
    {
        path: '',
        component: PokemonComponent,
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
export class PokemonRoutingModule { }
