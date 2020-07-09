import { PokeLocationDataExport } from "../../poke_locations";

export const victoryRoad1F: PokeLocationDataExport<"Victory Road 1F"> = {
    pokeLocation: "Victory Road 1F",
    catchMap: {
        Cave: {
            Arbok: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 44,
                maxLevel: 44,
                rate: 5,
            },
            Sandslash: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 44,
                rate: 5,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 32,
                rate: 10,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 44,
                rate: 5,
            },
            Machop: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 32,
                rate: 20,
            },
            Machoke: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 46,
                rate: 5,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 32,
                rate: 20,
            },
            Onix: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 40,
                maxLevel: 46,
                rate: 30,
            },
            Marowak: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 46,
                rate: 5,
            },
        },
    },
    connections: [
        "Route 23 (Victory Road)",
        "Victory Road 2F",
    ],
};
