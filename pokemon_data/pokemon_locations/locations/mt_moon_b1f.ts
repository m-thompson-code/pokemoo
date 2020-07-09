import { PokeLocationDataExport } from "../../poke_locations";

export const mtMoonB1F: PokeLocationDataExport<"Mt. Moon B1F"> = {
    pokeLocation: "Mt. Moon B1F",
    catchMap: {
        Cave: {
            Paras: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 10,
                rate: 100,
            }
        }
    },
    connections: [
        "Mt. Moon 1F",
        "Mt. Moon B2F",
    ],
};
