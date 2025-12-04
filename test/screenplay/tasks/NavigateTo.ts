import { Navigate } from '@serenity-js/web';

export class NavigateTo {
    private static readonly BASE_URL = 'https://www.saucedemo.com';

    static toTheLoginPage() {
        return Navigate.to(this.BASE_URL);
    }

    static toTheShoppingCartPage() {
        return Navigate.to(`${this.BASE_URL}/cart.html`);
    }

    static toTheCheckoutPage() {
        return Navigate.to(`${this.BASE_URL}/checkout-step-one.html`);
    }

    static toTheOrderReviewPage() {
        return Navigate.to(`${this.BASE_URL}/checkout-step-two.html`);
    }

    static toTheCatalogPage() {
        return Navigate.to(`${this.BASE_URL}/inventory.html`);
    }
}