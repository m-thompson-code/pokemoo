import { PokeLocationData } from "../../locations";
import { pokemonTower3F } from './pokemon_tower_3f';

export const pokemonTower1F: PokeLocationData = {
    catchMap: pokemonTower3F.catchMap,// First flour should actually have no pokemon, but because we aren't going to use the whole tower, let's just put pokemon here
    // catchMap: {
    // },
    connections: [
        "Lavender Town",
        // "Pokemon Tower 2F",// Disconnect because a long tower is silly :^)
    ],
};
