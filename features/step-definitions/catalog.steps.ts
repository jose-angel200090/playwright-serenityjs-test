import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Actor } from '@serenity-js/core';
import { ProductDetails } from '../../test/screenplay/models/ProductDetails';
import { NavigateTo } from '../../test/screenplay/tasks/NavigateTo';
import { Login } from '../../test/screenplay/tasks/Login';
import { ViewInventoryItem } from '../../test/screenplay/tasks/ViewInventoryItem';
import { CatalogPage } from '../../test/screenplay/ui/CatalogPage';
import { Product } from '../../test/screenplay/models/Product';
import { ProductDataTable } from '../../test/screenplay/models/ProductDataTable';
import { By, PageElements, Text } from '@serenity-js/web';
import { ProductDetailsPage } from '../../test/screenplay/ui/ProductDetailsPage';
import { Ensure, includes, equals } from '@serenity-js/assertions'

Given('{actor} has logged on to the application', async (actor: Actor) =>
    actor.attemptsTo(
        NavigateTo.toTheLoginPage(),
        Login.withCredentials("standard_user", "secret_sauce")
    )
);

When('{actor} is browsing the product catalog', async (actor: Actor) =>
    actor.attemptsTo(
        NavigateTo.toTheCatalogPage()
    )
);

When('{actor} opens the product details for {string}', async (actor: Actor, productName: string) =>
    actor.attemptsTo(
        ViewInventoryItem.called(productName)
    )
);

Then('{pronoun} should be presented with {int} products', async (actor: Actor, productCount: number) =>
    actor.attemptsTo(
        Ensure.that(CatalogPage.inventoryItemName.count(), equals(productCount))
    )
);

Then('{pronoun} should be presented with the following products:', async (actor: Actor, dataTable: DataTable) => {
    const expectedProducts: Product[] = ProductDataTable.toProductList(dataTable)
    for (const product of expectedProducts) {
        const inventoryItem = PageElements
            .located(By.css('.inventory_item'))
            .describedAs(`producto "${product.title}"`)
            .where(Text, includes(product.title))
            .first();

        await actor.attemptsTo(
            Ensure.that(Text.of(inventoryItem), includes(product.price))
        );
    }
}
);

Then('{pronoun} should see a product with the following details:', async (actor: Actor, dataTable: DataTable) => {
    const row = dataTable.hashes()[0];
    
    const productDetails: ProductDetails = {
        name: row['Name'],
        price: row['Price'],
        description: row['Description']
    };

    await actor.attemptsTo(
        Ensure.that(
            Text.of(ProductDetailsPage.productName).toLocaleLowerCase(),
            equals(productDetails.name.toLowerCase())
        ),
        Ensure.that(
            Text.of(ProductDetailsPage.price),
            equals(productDetails.price)
        ),
        Ensure.that(
            Text.of(ProductDetailsPage.description),
            includes(productDetails.description)
        )
    );
}
);