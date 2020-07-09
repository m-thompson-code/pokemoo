import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower6F: PokeLocationDataExport<"Pokemon Tower 6F"> = {
    pokeLocation: "Pokemon Tower 6F",
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 5F",
        "Pokemon Tower 7F",
    ],
};
