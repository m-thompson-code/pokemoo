import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./dest/home/home.module').then(m => m.HomeModule),
        // // This guard needs to be at this level so that it comes before any other guard
        // canActivate: [
        //     HasValidNameAndCountryGuard,
        // ],
        // runGuardsAndResolvers: 'always',
    },
    {
        path: 'pokemon/:pokedexEntry',
        loadChildren: () => import('./dest/pokemon/pokemon.module').then(m => m.PokemonModule),
        // // This guard needs to be at this level so that it comes before any other guard
        // canActivate: [
        //     HasValidNameAndCountryGuard,
        // ],
        // runGuardsAndResolvers: 'always',
    },
    {
        path: 'pokemon',
        loadChildren: () => import('./dest/pokemons/pokemons.module').then(m => m.PokemonsModule),
        // // This guard needs to be at this level so that it comes before any other guard
        // canActivate: [
        //     HasValidNameAndCountryGuard,
        // ],
        // runGuardsAndResolvers: 'always',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
