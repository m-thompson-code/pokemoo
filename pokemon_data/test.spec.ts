import { pokeLocationDataMap as _pokeLocationDataMap } from '../pokemon_data';
import { PokeLocationDataMap, pokeLocationDataMap } from './locations';

// source: https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
// https://github.com/microsoft/TypeScript/issues/20503
export function keys<O>(o: O): (keyof O)[] {
    return Object.keys(o) as (keyof O)[];
}

export interface _Error {
    message: string;
    [other: string]: any;
}

const validatePokeLocationDataMap: (pokeLocationDataMap: PokeLocationDataMap) => _Error[] = (pokeLocationDataMap: PokeLocationDataMap) => {
    const pokeLocations = keys(pokeLocationDataMap);

    const errors: _Error[] = [];

    for (const pokeLocation of pokeLocations) {
        const pokeLocationData = pokeLocationDataMap[pokeLocation];

        if (!pokeLocationData.connections || !Array.isArray(pokeLocationData.connections)) {
            errors.push({
                message: "Unexpected PokeLocation has missing or invalid connections",
                pokeLocation: pokeLocation,
            });

            continue;
        }

        if (!pokeLocationData.catchMap) {
            errors.push({
                message: "Unexpected PokeLocation has missing catchMap",
                pokeLocation: pokeLocation,
            });

            continue;
        }

        for (const connection of pokeLocationData.connections) {
            if (connection === pokeLocation) {
                errors.push({
                    message: "Unexpected self connected PokeLocation",
                    pokeLocation: pokeLocation,
                });

                break;
            }

            const other = pokeLocationDataMap[connection];

            if (!other.connections.includes(pokeLocation)) {
                errors.push({
                    message: "Unexpected one way connection",
                    from: pokeLocation,
                    to: connection,
                });
            }
        }
    }

    return errors;
}

export const test: () => number = () => {
    const errors: _Error[] = [];

    const _p = validatePokeLocationDataMap(pokeLocationDataMap);

    errors.push(..._p);

    if (errors.length) {
        console.error(errors[0].message);

        if (errors.length > 1) {
            console.error(`${errors.length - 1} errors`);
        }

        console.error(JSON.stringify(errors[0], null, 4));

        throw errors[0];
    }

    console.log(" ~ pokemon_data passes tests");

    return 1;
}

console.log(" ~ testing pokemon_data...");

test();