import { PokeLocationData } from "../../locations";

export const threeIsland: PokeLocationData<"Three Island"> = {
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
