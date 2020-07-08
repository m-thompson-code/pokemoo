import { PokeLocationData } from "../../locations";

export const celadonCity: PokeLocationData<"Celadon City"> = {
    pokeLocation: "Celadon City",
    catchMap: {
        Surfing: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 5,
                maxLevel: 40,
                rate: 99,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 40,
                rate: 99,
            },
            Koffing: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
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
            }
        },
        "Good Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 5,
                maxLevel: 15,
                rate: 100,
            }
        },
        "Super Rod": {
            Magikarp: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 35,
                rate: 99,
            },
            Grimer: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 30,
                maxLevel: 40,
                rate: 1,
            },
        },
        "Special": {
            Bulbasaur: {
                inFireRed: false,
                inLeafGreen: false,
                minLevel: 10,
                maxLevel: 10,
                rate: 100,
                note: "Gift Pokemon. Limit one per visiting location",
            },
        }
    },
    connections: [
        "Route 16",
        "Route 7",
        "Celadon Condominiums",
    ],
};
