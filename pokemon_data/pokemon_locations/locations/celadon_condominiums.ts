import { PokeLocationData } from "../../locations";

export const celdadonCondominiums: PokeLocationData<"Celadon Condominiums"> = {
    pokeLocation: "Celadon Condominiums",
    catchMap: {
        Special: {
            Eevee: {
                inFireRed: true,
                inLeafGreen: true,
                minLevel: 25,
                maxLevel: 25,
                rate: 100,
                note: "Gift Pokemon (limit 1)"
            }
        }
    },
    connections: [
        "Celadon City",
    ],
};
