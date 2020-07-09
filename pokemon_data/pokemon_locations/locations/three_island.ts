import { PokeLocationDataExport } from "../../poke_locations";

export const threeIsland: PokeLocationDataExport<"Three Island"> = {
    pokeLocation: "Three Island",
    catchMap: {
    },
    connections: [
        "One Island",
        "Two Island",
        "Vermilion City",
        // "Three Isle Port",// Unlinked since we don't have any Dunsparce since we only do gen 1
        "Bond Bridge",
        "Water Path",
    ],
};
