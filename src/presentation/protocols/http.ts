export type HttpRequest = {
    body?: unknown;
    headers?: unknown;
    params?: unknown;
}

export type HttpResponse = {
    statusCode: number;
    body: unknown;
}
