import { pokeLocationDataMap as _pokeLocationDataMap, PokemonDataMap, PokemonName } from '../pokemon_data';
import { PokeLocationDataMap, pokeLocationDataMap, pokeLocationDatas as _pokeLocationDatas, PokeLocationData } from './poke_locations';
import { keys } from './helpers';
import { PokemonData, pokemonDatas, pokemonDataMap } from './pokemon';

export interface _Error {
    message: string;
    [other: string]: any;
}

const validatePokeLocation = (pokeLocationData: PokeLocationData, errors: _Error[]) => {
    if (!pokeLocationData.connections || !Array.isArray(pokeLocationData.connections)) {
        errors.push({
            message: "Unexpected PokeLocation has missing or invalid connections",
            pokeLocation: pokeLocationData.pokeLocation,
        });

        return;
    }

    if (!pokeLocationData.catchMap) {
        errors.push({
            message: "Unexpected PokeLocation has missing catchMap",
            pokeLocation: pokeLocationData.pokeLocation,
        });

        return;
    }

    for (const spawnType of keys(pokeLocationData.catchMap)) {// [POKETEST1]
        const _spawnTypePokeLocationData = pokeLocationData.catchMap[spawnType];

        if (!keys(_spawnTypePokeLocationData).length) {
            errors.push({
                message: "Unexpected no pokemon in SpawnType for PokeLocationData",
                pokeLocation: pokeLocationData.pokeLocation,
                spawnType: spawnType,
            });
        }
    }

    for (const connection of pokeLocationData.connections) {
        if (connection === pokeLocationData.pokeLocation) {
            errors.push({
                message: "Unexpected self connected PokeLocation",
                pokeLocation: pokeLocationData.pokeLocation,
            });

            break;
        }

        const other = pokeLocationDataMap[connection];

        if (!other.connections.includes(pokeLocationData.pokeLocation)) {
            errors.push({
                message: "Unexpected one way connection",
                from: pokeLocationData.pokeLocation,
                to: connection,
            });
        }
    }
}

const validatePokeLocationDataMap = (pokeLocationDataMap: PokeLocationDataMap, errors: _Error[]): _Error[] => {
    const pokeLocations = keys(pokeLocationDataMap);

    for (const pokeLocation of pokeLocations) {
        const pokeLocationData = pokeLocationDataMap[pokeLocation];

        if (!pokeLocationData) {
            errors.push({
                message: "Unexpected missing PokeLocationData given pokeLocation",
                pokeLocation: pokeLocation,
            });

            continue;
        }

        validatePokeLocation(pokeLocationData, errors);
    }

    return errors;
}

const validatePokemonData = (pokemonData: PokemonData, errors: _Error[]) => {
    const isEvolution = pokemonData.evolvedFrom;

    const isCatchable = pokemonData.pokeLocations.length && Object.keys(pokemonDataMap).length;

    if (!isEvolution && !isCatchable) {
        const bypassList: PokemonName[] = [
            'Lickitung',
            'Rhyhorn',
            'Chansey',
            'Kangaskhan',
            'Scyther',
            'Pinsir',
            'Tauros',
            'Porygon',
            'Omanyte',
            'Kabuto',
            'Aerodactyl',
            'Dratini',
            'Mew', // Only pokemon that should be on this list. The rest (if any) are here to bypass validation temporarily
        ];

        if (bypassList.includes(pokemonData.pokemonName)) {
            // pass (some people aren't available just yet)
            // Mew is the only actual exception since Mew can be caught randomly through the game
        } else {
            errors.push({
                message: "Unexpected pokemon cannot be obtained",
                pokemonName: pokemonData.pokemonName,
            });

            return;
        }
    }

    if (pokemonData.pokeLocations) {
        for (const pokeLocationData of pokemonData.pokeLocations) {
            for (const locationPokemonData of pokeLocationData.catchs) {
                // Some of these validations go against our types so we need to store reference to locationPokemonData outside of these if statements
                // If not we get Errors such as ` Property 'spawnType' does not exist on type 'never'`
                const spawnType = locationPokemonData.spawnType;

                if (!locationPokemonData.inFireRed && !locationPokemonData.inLeafGreen) {
                    errors.push({
                        message: "Unexpected pokemon not available in either FireRed or LeafGreen at LocationPokemonData",
                        pokemonName: pokemonData.pokemonName,
                        pokeLocation: pokeLocationData.pokeLocation,
                        spawnType: spawnType,
                    });

                    return;
                }

                if (!locationPokemonData.mixRate || !locationPokemonData.mixRatePercent || !locationPokemonData.totalRate) {
                    errors.push({
                        message: "Unexpected spawn rate is 0 for LocationPokemonData at LocationPokemonData",
                        pokemonName: pokemonData.pokemonName,
                        pokeLocation: pokeLocationData.pokeLocation,
                        spawnType: spawnType,
                    });

                    return;
                }
            }
        }
    }
}

const validatePokemonDataMap = (pokemonDataMap: PokemonDataMap, errors: _Error[]): _Error[] => {
    const pokemonNames = keys(pokemonDataMap);

    for (const pokemonName of pokemonNames) {
        const pokemonData = pokemonDataMap[pokemonName];

        if (!pokemonData) {
            errors.push({
                message: "Unexpected missing PokemonData given PokemonName",
                pokemonName: pokemonName,
            });

            continue;
        }

        validatePokemonData(pokemonData, errors);
    }

    return errors;
}

export const performTests = (): number => {
    const errors: _Error[] = [];

    validatePokeLocationDataMap(pokeLocationDataMap, errors);
    validatePokemonDataMap(pokemonDataMap, errors);

    if (errors.length) {
        console.error(errors[0].message);

        for (let i = 0; i < Math.min(20, errors.length); i++) {
            console.error(JSON.stringify(errors[i], null, 4));
        }

        const othersLength = 20;
        if (errors.length > othersLength) {
            console.error(`\n... and ${errors.length - othersLength} other error(s)`);
        }

        console.error(`\n${errors.length} error(s) found`);

        throw errors[0];
    }

    console.log(" ~ pokemon_data passes tests. 0 errors found");

    return 1;
}

console.log(" ~ testing pokemon_data...");

performTests();
