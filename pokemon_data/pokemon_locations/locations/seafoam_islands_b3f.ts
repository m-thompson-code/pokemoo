import { PokeLocationDataExport } from "../../poke_locations";

export const seafoamIslandsB3F: PokeLocationDataExport<"Seafoam Islands B3F"> = {
    pokeLocation: "Seafoam Islands B3F",
    catchMap: {
        Cave: {
            Seel: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 40,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 32,
                rate: 20,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 20,
            },
            Golduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 32,
                rate: 15,
            },
            Slowbro: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 32,
                rate: 15,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 24,
                maxLevel: 24,
                rate: 20,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 10,
            },
            Dewgong: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 34,
                rate: 5,
            },
            Jynx: {// Included since Jynx is ingame trade only (based on jp blue)
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 10,
            }
        },
        Surfing: {
            Seel: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 60,
            },
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 30,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 30,
            },
            Dewgong: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 40,
                rate: 5,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 30,
                maxLevel: 40,
                rate: 4,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 40,
                rate: 4,
            },
            Golduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 35,
                maxLevel: 40,
                rate: 1,
            },
            Slowbro: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 35,
                maxLevel: 40,
                rate: 1,
            },
        },
        "Old Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
            },
        },
        "Good Rod": {// Mixing versions
            Horsea: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Krabby: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 40,
            },
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 20,
            },
        },
        "Super Rod": {
            Horsea: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 30,
                rate: 80,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 30,
                rate: 80,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 16,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 15,
                maxLevel: 25,
                rate: 4,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 4,
            },
        }
    },
    connections: [
        "Seafoam Islands B2F",
        "Seafoam Islands B4F",
    ],
};
