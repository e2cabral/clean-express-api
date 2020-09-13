import { Word } from './../../models/word';

export interface LoadWords {
    load: () => Promise<Array<Word>>;
}