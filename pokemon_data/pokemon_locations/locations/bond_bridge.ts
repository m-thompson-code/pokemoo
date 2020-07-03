import { PokeLocationData } from "../../locations";

export const bondBridge: PokeLocationData = {
    catchMap: {
        "Grass": {
            Pidgey: {
                rate: 30,
                minLevel: 29,
                maxLevel: 32,
                inFireRed: true,
                inLeafGreen: true,
            },
            Oddish: {
                rate: 20,
                minLevel: 31,
                maxLevel: 31,
                inFireRed: true,
                inLeafGreen: false,
            },
            Bellsprout: {
                rate: 20,
                minLevel: 31,
                maxLevel: 31,
                inFireRed: false,
                inLeafGreen: true,
            },
            Pidgeotto: {
                rate: 15,
                minLevel: 34,
                maxLevel: 40,
                inFireRed: true,
                inLeafGreen: true,
            },
            Gloom: {
                rate: 10,
                minLevel: 36,
                maxLevel: 36,
                inFireRed: true,
                inLeafGreen: false,
            },
            Weepinbell: {
                rate: 10,
                minLevel: 36,
                maxLevel: 36,
                inFireRed: false,
                inLeafGreen: true,
            },
            Meowth: {
                rate: 10,
                minLevel: 31,
                maxLevel: 31,
                inFireRed: true,
                inLeafGreen: true,
            },
            Venonat: {
                rate: 5,
                minLevel: 34,
                maxLevel: 34,
                inFireRed: true,
                inLeafGreen: true,
            },
            Persian: {
                rate: 5,
                minLevel: 37,
                maxLevel: 40,
                inFireRed: true,
                inLeafGreen: true,
            },
            Psyduck: {
                rate: 5,
                minLevel: 31,
                maxLevel: 31,
                inFireRed: true,
                inLeafGreen: false,
            },
            Slowpoke: {
                rate: 5,
                minLevel: 31,
                maxLevel: 31,
                inFireRed: false,
                inLeafGreen: true,
            },
        },
        Surfing: {
            Tentacool: {
                rate: 95,
                minLevel: 5,
                maxLevel: 40,
                inFireRed: true,
                inLeafGreen: true,
            },
            Tentacruel: {
                rate: 5,
                minLevel: 35,
                maxLevel: 40,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Old Rod": {
            Magikarp: {
                rate: 100,
                minLevel: 5,
                maxLevel: 5,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Good Rod": {
            Horsea: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: true,
                inLeafGreen: false,
            },
            Krabby: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: false,
                inLeafGreen: true,
            },
            Magikarp: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: true,
                inLeafGreen: true,
            },
        },
        "Super Rod": {
            Horsea: {
                rate: 80,
                minLevel: 15,
                maxLevel: 20,
                inFireRed: true,
                inLeafGreen: false,
            },
            Krabby: {
                rate: 80,
                minLevel: 5,
                maxLevel: 15,
                inFireRed: false,
                inLeafGreen: true,
            },
            Gyarados: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 25,
                rate: 15,
            },
            Seadra: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
            },
            Kingler: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 35,
                rate: 4,
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
        }
    },
    connections: [
        "Berry Forest",
        "Three Island",
    ],
};
