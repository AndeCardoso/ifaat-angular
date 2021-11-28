import { Product } from "./product";
import { CartItem } from "./cart-item";

export class Cart {
    items: CartItem[] = [];
    totalValue = 0;

    addItem(product: Product, quantity: number): void {
        let newItem = true;

        this.items.forEach(item => {
            if (item.product.id == product.id) {
                item.increment(quantity);
                newItem = false;
            }
        });

        if (newItem) {
            const item = new CartItem(product);
            item.increment(quantity);
            this.items.push(item);
        }
    }

    totalValueCalc(): void {
        this.totalValue = 0;
        this.items.map(item => this.totalValue += item.totalValue);
    }
}