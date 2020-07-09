import { PokeLocationDataExport } from "../../poke_locations";
import { route2 } from "./route2";

export const route2Viridian: PokeLocationDataExport<"Route 2 (Viridian)"> = {
    pokeLocation: "Route 2 (Viridian)",
    catchMap: route2.catchMap,
    connections: [
        "Viridian City",
        "Diglett's Cave (Route 2)",
        "Viridian Forest",
    ],
};
