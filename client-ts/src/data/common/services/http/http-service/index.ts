import axois, {AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse} from 'axios'
import {BodyPayload, IHttpService, ParamsPayload} from "../../../interfaces/http";


class HttpService implements IHttpService {

    protected readonly _instance: AxiosInstance

    constructor (options: AxiosRequestConfig) {
        this._instance = axois.create(options)

        this._interceptResponse()
    }

    public async delete<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse> {
        return this._instance.delete(url, { params: payload?.params, data: payload?.body });
    }

    public async get<TResponse = unknown>(url: string, payload?: ParamsPayload): Promise<TResponse> {
        return this._instance.get(url, { params: payload?.params } );
    }

    public async patch<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse> {
        return this._instance.patch(url, payload?.body, { params: payload?.params });
    }

    public async post<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse> {
        return this._instance.post(url, payload?.body, { params: payload?.params })
    }

    public async put<TResponse = unknown>(url: string, payload?: BodyPayload): Promise<TResponse> {
        return this._instance.put(url, payload?.body, { params: payload?.params });
    }

    public async request<TResponse>(config: AxiosRequestConfig): Promise<TResponse> {
        return this._instance.request(config);
    }


    public setHeader(key: string, value: string | number | boolean): void {
        this._instance.defaults.headers.common[key] = value;
    }

    public setHeaders(headers: Record<string, string | number | boolean>): void {
        this._instance.defaults.headers.common = {
            ...this._instance.defaults.headers.common,
            ...headers
        }
    }

    public appendResponseInterceptor(onFulfilled?: (config: AxiosResponse, instance: AxiosInstance) => AxiosResponse, onRejected?: (error: any, instance: AxiosInstance) => any) {
        this._instance.interceptors.response.use(
            (config) => {
                return onFulfilled ? onFulfilled(config, this._instance) : config
            },
            (error) => {
                return onRejected ? onRejected(error, this._instance) : error
            }
        )
    }

    public appendRequestInterceptor(onFulfilled?: (config: AxiosRequestConfig, instance: AxiosInstance) => AxiosRequestConfig,  onRejected?: (error: any, instance: AxiosInstance) => any) {
        this._instance.interceptors.request.use(
            (config) => {
                return onFulfilled ? onFulfilled(config, this._instance) : config
            },
            (error) => {
                throw onRejected ? onRejected(error, this._instance) : error
            }
        )
    }

    private _interceptResponse () {
        this._instance.interceptors.response.use(
            (response) => Promise.resolve(response.data),
            (error: AxiosError ) => Promise.reject(
                error.response?.status === 401 && !(error.config as AxiosError['config'] & { _isRetry?: boolean })._isRetry
                    ? error
                    : error.response?.data)
        );
    }

}

export { HttpService }
