type DeepPartial<T extends {}> = Partial<
    {
        [key in keyof T]: T[key] extends {} ? DeepPartial<T[key]> : T[key];
    }
>;

declare function deepmerge<T1, T2>(x: DeepPartial<T1>, y: DeepPartial<T2>, options?: deepmerge.Options): T1 & T2;
declare function deepmerge<T>(x: DeepPartial<T>, y: DeepPartial<T>, options?: deepmerge.Options): T;

declare namespace deepmerge {
    export interface Options {
        clone?: boolean;
        customMerge?: (key: string, options?: Options) => ((x: any, y: any) => any) | undefined;

        arrayMerge?(target: any[], source: any[], options?: Options): any[];

        isMergeableObject?(value: object): boolean;
    }

    export function all(objects: object[], options?: Options): object;
    export function all<T>(objects: DeepPartial<T>[], options?: Options): T;
}

export = deepmerge;
