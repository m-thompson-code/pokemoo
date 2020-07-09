import { PokeLocationDataExport } from "../../poke_locations";

export const alteringCave: PokeLocationDataExport<"Altering Cave"> = {
    pokeLocation: "Altering Cave",
    catchMap: {
        Cave: {
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 6,
                maxLevel: 16,
                rate: 100,
            },
        }
    },
    connections: [
        "Outcast Island",
    ],
};
