import { PokeLocationData } from "../../locations";

export const pokemonTower2F: PokeLocationData<"Pokemon Tower 2F"> = {
    pokeLocation: "Pokemon Tower 2F",
    catchMap: {
    },
    connections: [
        // "Pokemon Tower 1F",// Disconnect because a long tower is silly :^)
        "Pokemon Tower 3F",
    ],
};
