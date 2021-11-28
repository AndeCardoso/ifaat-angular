import { Product } from "./product";

export class CartItem {
    product: Product;
    quantity: number = 0;

    constructor(product: Product) {
        this.product = product;
    }

    get totalValue() {
        return this.product.price * this.quantity;
    }

    increment(price: number) {
        this.quantity += price;
    }
}