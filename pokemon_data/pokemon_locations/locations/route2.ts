import { _PokeLocationDataExport } from "../../poke_locations";

// Note that this PokemonData is not used directly
// It is imported by route2Pewter and route2Viridian
// This is because Viridian Forest seperates route 2
export const route2: _PokeLocationDataExport = {
    catchMap: {
        Grass: {
            Pidgey: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Rattata: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 2,
                maxLevel: 5,
                rate: 45,
            },
            Caterpie: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 4,
                maxLevel: 5,
                rate: 5,
            },
            Weedle: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 4,
                maxLevel: 5,
                rate: 5,
            },
        },
        Special: {
            "Mr. Mime": {// Added here as a gift pokemon since we don't support ingame trades
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 10,
                maxLevel: 10,
                rate: 100,
                note: "Gift Pokemon. Only once per visiting location."
            }
        }
    },
    connections: [
        "Viridian City",
        "Pewter City",
        "Diglett's Cave (Route 2)",
        "Viridian Forest",
    ],
};
