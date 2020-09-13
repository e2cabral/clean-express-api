import { LoadWords } from './../../../domain/usecases/word/load-words';
import { HttpRequest, HttpResponse } from '../../protocols/http';
import { Controller } from '../../protocols/controller';

export class LoadWordsController implements Controller {
    constructor(private readonly loadWords: LoadWords) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const words = await this.loadWords.load();
            return await { statusCode: 200, body: words };
        } catch (error) {
            return await { statusCode: 500, body: error };
        }
    }

}