interface RequestOptions {
    [key: string]: string;
}

type TCallback<T> = (data: T) => void;

class Loader {
    protected baseLink: string;
    protected options: RequestOptions;

    constructor(baseLink: string, options: RequestOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string; options?: RequestOptions },
        callback: TCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            }
            throw new Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: RequestOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(
        method: string, 
        endpoint: string, 
        callback: TCallback<T>, 
        options: RequestOptions = {}
    ): void {
        console.log('Fetching:', this.makeUrl(options, endpoint));
        fetch(this.makeUrl(options, endpoint), { method })

        fetch(this.makeUrl(options, endpoint), { method })

            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data as T))
            .catch((err) => console.error(err));
    }
}

export default Loader;