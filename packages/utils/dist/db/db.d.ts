type IDBValidKey = string | number | Date | BufferSource | IDBValidKey[];
export type DBCreateOptions = {
    dbName: string;
    storeName: string;
    version: number;
};
/**
 * Simple Key Value store
 * Defaults to `'auth-client-db'` with an object store of `'ic-keyval'`
 */
export declare class IdbKeyVal {
    private _db;
    private _storeName;
    /**
     *
     * @param {DBCreateOptions} options {@link DbCreateOptions}
     * @param {DBCreateOptions['dbName']} options.dbName name for the indexDB database
     * @default
     * @param {DBCreateOptions['storeName']} options.storeName name for the indexDB Data Store
     * @default
     * @param {DBCreateOptions['version']} options.version version of the database. Increment to safely upgrade
     * @constructs an {@link IdbKeyVal}
     */
    static create(options?: DBCreateOptions): Promise<IdbKeyVal>;
    private constructor();
    /**
     * Basic setter
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @param value value to set
     * @returns void
     */
    set<T>(key: IDBValidKey, value: T): Promise<IDBValidKey>;
    /**
     * Basic getter
     * Pass in a type T for type safety if you know the type the value will have if it is found
     * @param {IDBValidKey} key string | number | Date | BufferSource | IDBValidKey[]
     * @returns `Promise<T | null>`
     * @example
     * await get<string>('exampleKey') -> 'exampleValue'
     */
    get<T>(key: IDBValidKey): Promise<T | null>;
    /**
     * Remove a key
     * @param key {@link IDBValidKey}
     * @returns void
     */
    remove(key: IDBValidKey): Promise<void>;
    /**
     * Get all values
     * @param key {@link IDBValidKey}
     * @returns void
     */
    getAll<T>(): Promise<(T | undefined)[] | null>;
}
export {};
//# sourceMappingURL=db.d.ts.map