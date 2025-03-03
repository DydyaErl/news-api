import './sources.css';
import { SourceItem } from  '../../../types';

class Sources {
    public draw(data: SourceItem[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) return;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const sourceName = sourceClone.querySelector<HTMLElement>('.source__item-name');
            if (sourceName) sourceName.textContent = item.name;

            const sourceItem = sourceClone.querySelector<HTMLElement>('.source__item');
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}



export default Sources;
