import { PokeLocationDataExport } from "../../poke_locations";

export const route9: PokeLocationDataExport<"Route 9"> = {
    pokeLocation: "Route 9",
    catchMap: {
        Grass: {
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 14,
                maxLevel: 17,
                rate: 40,
            },
            Spearow: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 17,
                rate: 35,
            },
            Ekans: {
                inFireRed: true,
                inLeafGreen: false,
                minLevel: 11,
                maxLevel: 17,
                rate: 25,
            },
            Sandshrew: {
                inFireRed: false,
                inLeafGreen: true,
                minLevel: 11,
                maxLevel: 17,
                rate: 25,
            },
        }
    },
    connections: [
        "Cerulean City",
        "Route 10",
    ],
};
