import { PokeLocationDataExport } from "../../poke_locations";

export const route1: PokeLocationDataExport<"Route 1"> = {
    pokeLocation: "Route 1",
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 50,
            },
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 4,
                rate: 50,
            },
        }
    },
    connections: [
        "Viridian City",
        "Pallet Town",
    ],
};
