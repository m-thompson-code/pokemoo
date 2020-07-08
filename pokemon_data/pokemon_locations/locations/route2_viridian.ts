import { PokeLocationData } from "../../locations";
import { route2 } from "./route2";

export const route2Viridian: PokeLocationData<"Route 2 (Viridian)"> = {
    pokeLocation: "Route 2 (Viridian)",
    catchMap: route2.catchMap,
    connections: [
        "Viridian City",
        "Diglett's Cave (Route 2)",
        "Viridian Forest",
    ],
};
