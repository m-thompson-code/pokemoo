import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonTower3F } from './pokemon_tower_3f';

export const pokemonTower1F: PokeLocationDataExport<"Pokemon Tower 1F"> = {
    pokeLocation: "Pokemon Tower 1F",
    catchMap: pokemonTower3F.catchMap,// First flour should actually have no pokemon, but because we aren't going to use the whole tower, let's just put pokemon here
    // catchMap: {
    // },
    connections: [
        "Lavender Town",
        // "Pokemon Tower 2F",// Disconnect because a long tower is silly :^)
    ],
};
