import { By, PageElement } from '@serenity-js/web';

export class ProductDetailsPage {
    static readonly productName = PageElement.located(By.css('.inventory_details_name')).describedAs('Product name');

    static readonly price = PageElement.located(By.css('.inventory_details_price')).describedAs('Product price');

    static readonly description = PageElement.located(By.css('.inventory_details_desc')).describedAs('Product description');
}