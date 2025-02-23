import News from './news/news';
import Sources from './sources/sources';


interface SourceItem {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: { articles?: NewsArticle[] }): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: { sources?: SourceItem[] }): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
