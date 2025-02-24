export interface NewsArticle {
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

export enum NewsCategory {
    Business = 'business',
    Entertainment = 'entertainment',
    General = 'general',
    Health = 'health',
    Science = 'science',
    Sports = 'sports',
    Technology = 'technology'
}

export interface SourceItem {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: NewsCategory;
    language?: string;
    country?: string;
}

export interface NewsResponse {
    articles: NewsArticle[];
}

export interface SourcesResponse {
    sources: SourceItem[];
}