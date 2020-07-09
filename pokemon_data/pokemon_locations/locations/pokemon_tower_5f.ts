import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower5F: PokeLocationDataExport<"Pokemon Tower 5F"> = {
    pokeLocation: "Pokemon Tower 5F",
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 4F",
        "Pokemon Tower 6F",
    ],
};
