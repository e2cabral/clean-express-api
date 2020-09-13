import { HttpRequest, HttpResponse } from '../../protocols/http';
import { Controller } from './../../protocols/controller';

export class LoadWordsController implements Controller {

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            return await { statusCode: 200, body: [] }
        } catch (error) {
            return await { statusCode: 500, body: error }
        }
    }

}