import Loader from './loader';
import { NewsResponse, SourcesResponse } from '../../types';


type ApiEndpoints = 'everything' | 'sources';
type ApiOptions = Pick<RequestInit, 'method' | 'headers'>;

class AppLoader extends Loader<NewsResponse | SourcesResponse> {
    constructor() {
        const apiKey = process.env.API_KEY;
        const apiUrl = process.env.API_URL;
        
        if (!apiKey || !apiUrl) {
            throw new Error('API configuration is missing');
        }

        super(apiUrl, {
            apiKey: apiKey,
        });
    }
}

export default AppLoader;