// source: https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string
// https://github.com/microsoft/TypeScript/issues/20503
export function keys<O>(o: O): (keyof O)[] {
    return Object.keys(o) as (keyof O)[];
}
