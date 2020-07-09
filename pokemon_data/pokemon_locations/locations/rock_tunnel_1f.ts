import { PokeLocationDataExport } from "../../poke_locations";

export const rockTunnel1F: PokeLocationDataExport<"Rock Tunnel 1F"> = {
    pokeLocation: "Rock Tunnel 1F",
    catchMap: {
        Cave: {
            Geodude: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 17,
                rate: 35,
            },
            Zubat: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 15,
                maxLevel: 16,
                rate: 30,
            },
            Mankey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 16,
                maxLevel: 17,
                rate: 15,
            },
            Machop: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 16,
                maxLevel: 17,
                rate: 15,
            },
            Onix: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 13,
                maxLevel: 15,
                rate: 5,
            },
        }
    },
    connections: [
        "Route 10",
        "Rock Tunnel B1F",
    ],
};
