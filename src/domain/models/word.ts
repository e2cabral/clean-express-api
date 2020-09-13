export class Word {
    constructor(
        name: string,
        type: string,
        synonyms: Array<Word>,
        definition: Array<string>
    ) {
        this.name = name;
        this.type = type;
        this.synonyms = synonyms;
        this.definition = definition;
    }

    name: string;
    type: string;
    synonyms: Array<Word>;
    definition: Array<string>;
}