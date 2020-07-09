import { PokeLocationDataExport } from "../../poke_locations";
import { pokemonMansion1F } from "./pokemon_mansion_1f";

export const pokemonMansion3F: PokeLocationDataExport<"Pokemon Mansion 3F"> = {
    pokeLocation: "Pokemon Mansion 3F",
    catchMap: pokemonMansion1F.catchMap,
    connections: [
        "Pokemon Mansion 2F",
    ],
};
