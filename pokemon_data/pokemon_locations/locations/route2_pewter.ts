import { PokeLocationData } from "../../locations";
import { route2 } from "./route2";

export const route2Pewter: PokeLocationData<"Route 2 (Pewter)"> = {
    pokeLocation: "Route 2 (Pewter)",
    catchMap: route2.catchMap,
    connections: [
        "Pewter City",
        "Diglett's Cave (Route 2)",
        "Viridian Forest",
    ],
};
