import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonTower3F } from "./pokemon_tower_3f";

export const pokemonTower7F: PokeLocationDataExport<"Pokemon Tower 7F"> = {
    pokeLocation: "Pokemon Tower 7F",
    catchMap: pokemonTower3F.catchMap,
    connections: [
        "Pokemon Tower 6F",
    ],
};
