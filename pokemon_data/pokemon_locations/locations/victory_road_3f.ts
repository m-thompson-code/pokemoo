import { PokeLocationData } from "../../locations";
import { victoryRoad1F } from "./victory_road_1f";

export const victoryRoad3F: PokeLocationData<"Victory Road 3F"> = {
    pokeLocation: "Victory Road 3F",
    catchMap: victoryRoad1F.catchMap,
    connections: [
        "Victory Road 2F",
    ],
};
