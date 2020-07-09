import { PokeLocationDataExport } from "../../poke_locations";

export const fightingDojo: PokeLocationDataExport<"Fighting Dojo"> = {
    pokeLocation: "Fighting Dojo",
    catchMap: {
        Special: {
            Hitmonchan: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 25,
                rate: 100,
                note: "You only get one (One Hitmonlee or one Hitmonchan)"
            },
            Hitmonlee: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 25,
                rate: 100,
                note: "You only get one (One Hitmonlee or one Hitmonchan)"
            },
        }
    },
    connections: [
        "Saffron City",
    ],
};
