export interface LoadWords {
    load: () => Promise<Array<unknown>>;
}