import { PokeLocationData } from "../../locations";
import { pokemonMansion1F } from "./pokemon_mansion_1f";

export const pokemonMansion2F: PokeLocationData = {
    catchMap: pokemonMansion1F.catchMap,
    connections: [
        "Pokemon Mansion 1F",
        "Pokemon Mansion 3F",
    ],
};
