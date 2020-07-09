import { PokeLocationDataExport } from "../../poke_locations";

export const route4: PokeLocationDataExport<"Route 4"> = {
    pokeLocation: "Route 4",
    catchMap: {
        Grass: {
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 12,
                rate: 35,
            },
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 8,
                maxLevel: 12,
                rate: 35,
            },
            Ekans: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 6,
                maxLevel: 12,
                rate: 25,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 12,
                rate: 25,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 12,
                rate: 5,
            },
        },
        Surfing: {
            Tentacool: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 100,
            }
        },
        "Old Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 5,
                rate: 100,
            }
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
                maxLevel: 35,
                rate: 84,
            },
            Krabby: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 84,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
            },
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 1,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 1,
            },
        },
    },
    connections: [
        "Mt. Moon 1F",
        "Route 3",
        "Cerulean City",
    ],
};
