import Loader from './loader';




class AppLoader extends Loader {
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