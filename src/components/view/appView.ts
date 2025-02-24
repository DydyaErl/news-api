// appView.ts
import News from './news/news';
import Sources from './sources/sources';
import { NewsArticle, SourceItem, NewsResponse, SourcesResponse } from '../../types';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponse): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;