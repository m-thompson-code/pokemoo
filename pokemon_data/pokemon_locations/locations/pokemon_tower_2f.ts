import { PokeLocationDataExport } from "../../poke_locations";

export const pokemonTower2F: PokeLocationDataExport<"Pokemon Tower 2F"> = {
    pokeLocation: "Pokemon Tower 2F",
    catchMap: {
    },
    connections: [
        // "Pokemon Tower 1F",// Disconnect because a long tower is silly :^)
        "Pokemon Tower 3F",
    ],
};
