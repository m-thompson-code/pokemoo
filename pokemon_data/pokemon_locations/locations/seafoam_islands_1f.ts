import { PokeLocationDataExport } from "../../poke_locations";

export const seafoamIslands1F: PokeLocationDataExport<"Seafoam Islands 1F"> = {
    pokeLocation: "Seafoam Islands 1F",
    catchMap: {
        Cave: {
            Psyduck: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 26,
                maxLevel: 33,
                rate: 55,
            },
            Slowpoke: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 33,
                rate: 55,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 34,
            },
            Golbat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 11,
            },
            Jynx: {// Included since Jynx is ingame trade only (based on jp blue)
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 26,
                maxLevel: 30,
                rate: 10,
            }
        }
    },
    connections: [
        "Route 20",
        "Seafoam Islands B1F",
    ],
};
