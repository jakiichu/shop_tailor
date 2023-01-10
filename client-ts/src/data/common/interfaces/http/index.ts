interface ParamsPayload {
    params?: unknown
}

interface BodyPayload extends ParamsPayload{
    body?: unknown
}

interface IHttpService {
    setHeader(key: string, value: string | number | boolean): void
    setHeaders(headers: Record<string, string | number | boolean>): void

    get<TResponse = unknown>(url: string, payload?: ParamsPayload): Promise<TResponse>
    post<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse>
    put<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse>
    patch<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse>
    delete<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse>
}

export type {
    IHttpService,
    ParamsPayload,
    BodyPayload
}
