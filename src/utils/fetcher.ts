import Axios, { AxiosRequestConfig } from "axios"

export const fetcher = async (config: AxiosRequestConfig) => {
  const { url, method, data, headers } = config;

  return await Axios.request({
    baseURL: 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/',
    url,
    method: method ?? 'GET',
    data,
    ...config,
    headers: {
      ...config?.headers,
      ...headers,
    },
  });
};