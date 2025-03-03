import './news.css';
import{NewsArticle} from '../../../types';

class News {
    public draw(data: NewsArticle[]): void {
        const news = data.length >= 10 ? data.slice(0, 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) return;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            if (idx % 2) {
                newsClone.querySelector<HTMLElement>('.news__item')?.classList.add('alt');
            }

            const metaPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo');
            if (metaPhoto) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            newsClone.querySelector<HTMLElement>('.news__meta-author')!.textContent = item.author || item.source.name;
            newsClone.querySelector<HTMLElement>('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector<HTMLElement>('.news__description-title')!.textContent = item.title;
            newsClone.querySelector<HTMLElement>('.news__description-source')!.textContent = item.source.name;
            newsClone.querySelector<HTMLElement>('.news__description-content')!.textContent = item.description;
            newsClone.querySelector<HTMLAnchorElement>('.news__read-more a')!.href = item.url;

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector<HTMLElement>('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}




export default News;
