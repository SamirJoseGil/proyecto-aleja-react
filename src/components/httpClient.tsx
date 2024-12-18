import axios, { AxiosInstance, AxiosError } from 'axios';
import { useError } from './ErrorContext';

const httpClient: AxiosInstance = axios.create({
    baseURL: '', // Define tu URL base aquí
});

export const useHttpClient = (): AxiosInstance => {
    const { captureError } = useError();

    httpClient.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            const status = error.response?.status;
            const statusText = error.response?.statusText;

            const message =
                (error.response?.data as { message?: string })?.message ||
                error.message;

            captureError({ status, statusText, message });
            return Promise.reject(error);
        }
    );

    return httpClient;
};
