import { Click } from '@serenity-js/web';
import { CatalogPage } from '../ui/CatalogPage';

export class ViewInventoryItem {
    static called(productName: string) {
        return Click.on(CatalogPage.productWithName(productName));
    }
}