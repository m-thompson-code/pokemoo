import { PokeLocationData } from "../../locations";

export const victoryRoad2F: PokeLocationData<"Victory Road 2F"> = {
    pokeLocation: "Victory Road 2F",
    catchMap: {
        Cave: {
            Arbok: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 46,
                maxLevel: 46,
                rate: 5,
            },
            Sandslash: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 46,
                rate: 5,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 34,
                maxLevel: 34,
                rate: 10,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 46,
                rate: 5,
            },
            Primeape: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 42,
                maxLevel: 42,
                rate: 10,
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
                minLevel: 46,
                maxLevel: 48,
                rate: 5,
            },
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 34,
                maxLevel: 34,
                rate: 20,
            },
            Onix: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 48,
                rate: 20,
            },
            Marowak: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 46,
                maxLevel: 48,
                rate: 5,
            },
        },
    },
    connections: [
        "Victory Road 1F",
        "Route 23 (Indigo Plateau)",
        "Victory Road 3F",
    ],
};
