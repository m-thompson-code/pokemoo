import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower4F: PokeLocationDataExport<"Pokemon Tower 4F"> = {
    pokeLocation: "Pokemon Tower 4F",
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 3F",
        "Pokemon Tower 5F",
    ],
};
