import { PokeLocationDataExport } from "../../poke_locations";

export const sixIsland: PokeLocationDataExport<"Six Island"> = {
    pokeLocation: "Six Island",
    catchMap: {
    },
    connections: [
        // "Bond Bridge",// TODO: verify this. This seems incorrect
        // "Three Isle Port",// Unlink since we don't support gen 2 Dunsparce
        "Water Path",
        "Vermilion City",
        "Seven Island",
    ],
};
