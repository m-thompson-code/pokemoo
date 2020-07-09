import { PokeLocationDataExport } from "../../poke_locations";

export const powerPlant: PokeLocationDataExport<"Power Plant"> = {
    pokeLocation: "Power Plant",
    catchMap: {
        Walking: {
            Pikachu: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 22,
                maxLevel: 26,
                rate: 25,
            },
            Magnemite: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 31,
                maxLevel: 34,
                rate: 10,
            },
            Magneton: {// This isn't exactly correct for FR vs LG, but it breaks my types, so whatever. Taking FR's spawn rates and treating both versions the same
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 31,
                maxLevel: 34,
                rate: 10,
            },
            Electabuzz: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 32,
                maxLevel: 35,
                rate: 10,// Increased it since Grimer is extra and the rate of Electabuzz is pretty bad as it is
            },
            Grimer: {// Based on Pokemon Yellow since Grimer is hard to get
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 33,
                maxLevel: 37,
                rate: 10,
            },
            Muk: {// Based on Pokemon Yellow since Muk is hard to get
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 33,
                maxLevel: 37,
                rate: 5,
            },
            Voltorb: {// Based on Pokemon Red/Blue since Voltorb is hard to get
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 33,
                maxLevel: 37,
                rate: 10,
            },
        },
        Special: {
            // Eletrodes too
            Zapdos: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 50,
                maxLevel: 50,
                rate: 100,
                note: "Only one encounter",
            },
        }
    },
    connections: [
        "Route 10",
    ],
};
