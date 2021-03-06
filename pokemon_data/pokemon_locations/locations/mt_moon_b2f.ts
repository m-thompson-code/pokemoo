import { PokeLocationDataExport } from "../../poke_locations";

export const mtMoonB2F: PokeLocationDataExport<"Mt. Moon B2F"> = {
    pokeLocation: "Mt. Moon B2F",
    catchMap: {
        Cave: {
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 11,
                rate: 49,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 9,
                maxLevel: 10,
                rate: 30,
            },
            Paras: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 12,
                rate: 15,
            },
            Clefairy: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 12,
                rate: 6,
            },
        }
    },
    connections: [
        "Mt. Moon B1F",
    ],
};
