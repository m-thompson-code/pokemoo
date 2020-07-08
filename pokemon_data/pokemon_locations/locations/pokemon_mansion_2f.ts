import { PokeLocationData } from "../../locations";
import { pokemonMansion1F } from "./pokemon_mansion_1f";

export const pokemonMansion2F: PokeLocationData<"Pokemon Mansion 2F"> = {
    pokeLocation: "Pokemon Mansion 2F",
    catchMap: pokemonMansion1F.catchMap,
    connections: [
        "Pokemon Mansion 1F",
        "Pokemon Mansion 3F",
    ],
};
