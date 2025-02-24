// app.ts
import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsResponse, SourcesResponse } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e: Event) =>
                this.controller.getNews(e, (data: NewsResponse) => this.view.drawNews(data))
            );
        this.controller.getSources((data: SourcesResponse) => this.view.drawSources(data));
    }
}

export default App;