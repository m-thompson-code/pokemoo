import { PokeLocationDataExport } from "../../poke_locations";

export const lostCave: PokeLocationDataExport<"Lost Cave"> = {
    pokeLocation: "Lost Cave",
    catchMap: {
        Cave: {
            Haunter: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 44,
                maxLevel: 52,
                rate: 30,
            },
            Gastly: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 38,
                maxLevel: 40,
                rate: 25,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 41,
                maxLevel: 43,
                rate: 20,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 41,
                maxLevel: 43,
                rate: 20,
            },
        }
    },
    connections: [
        "Five Island",
        "Resort Gorgeous",
    ],
};
