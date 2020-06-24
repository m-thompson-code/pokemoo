import { PokemonLocationData } from "../../locations";

export const alteringCave: PokemonLocationData = {
    catchMap: {
        Cave: {
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 16,
                rate: 100,
            },
        }
    },
    connections: [
        "Outcast Island",
    ],
};
