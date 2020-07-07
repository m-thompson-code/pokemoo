import { PokeLocationData } from "../../locations";

export const waterPath: PokeLocationData = {
    catchMap: {
        "Grass": {
            Spearow: {
                rate: 20,
                minLevel: 44,
                maxLevel: 44,
                inFireRed: true,
                inLeafGreen: true,
            },
            Fearow: {
                rate: 15,
                minLevel: 48,
                maxLevel: 50,
                inFireRed: true,
                inLeafGreen: true,
            },
            Oddish: {
                rate: 10,
                minLevel: 44,
                maxLevel: 44,
                inFireRed: true,
                inLeafGreen: false,
            },
            Gloom: {
                rate: 5,
                minLevel: 48,
                maxLevel: 48,
                inFireRed: true,
                inLeafGreen: false,
            },
            Meowth: {
                rate: 10,
                minLevel: 41,
                maxLevel: 41,
                inFireRed: true,
                inLeafGreen: true,
            },
            Persian: {
                rate: 5,
                minLevel: 47,
                maxLevel: 50,
                inFireRed: true,
                inLeafGreen: true,
            },
            Psyduck: {
                rate: 5,
                minLevel: 41,
                maxLevel: 41,
                inFireRed: true,
                inLeafGreen: false,
            },
            Bellsprout: {
                rate: 10,
                minLevel: 44,
                maxLevel: 44,
                inFireRed: false,
                inLeafGreen: true,
            },
            Weepinbell: {
                rate: 5,
                minLevel: 48,
                maxLevel: 48,
                inFireRed: false,
                inLeafGreen: true,
            },
            Slowpoke: {
                rate: 5,
                minLevel: 41,
                maxLevel: 41,
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
        "Three Island",
        "Six Island",
        "Ruin Valley",
        "Green Path",
    ],
};
