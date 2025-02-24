import Loader from './loader';
import { NewsResponse, SourcesResponse } from '../../types';

// Используем объединение типов для поддержки всех возможных типов ответов
type ApiResponse = NewsResponse | SourcesResponse;

class AppLoader extends Loader<ApiResponse> {
    constructor() {
        super(process.env.API_URL as string, {
            apiKey: process.env.API_KEY as string,
        });
    }
}

export default AppLoader;