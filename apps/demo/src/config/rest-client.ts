import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export const restClient = (): AxiosInstance => {
    const config: AxiosRequestConfig = {
        baseURL: `${import.meta.env.VITE_API_URL}`,
    }

    const client = axios.create(config)

    return client
}
