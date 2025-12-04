import { By, PageElement, PageElements } from '@serenity-js/web';

export class CatalogPage {
    static productWithName(productName: string) {
        return PageElement.located(By.xpath(`//div[normalize-space()="${productName}"]`)).describedAs('Product name');
    } 

    static readonly inventoryItemName = PageElements.located(By.css('.inventory_item_name')).describedAs('Inventory item name');
}