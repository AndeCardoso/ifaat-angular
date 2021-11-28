import { Injectable } from '@angular/core';
import { Product } from '../../models/product';
import { Cart } from '../../models/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private cart: Cart = new Cart();
  private productsUrl = 'api/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  getCart(): Cart {
    return this.cart;
  }

  get products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productsUrl);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }

  addItem(product: Product, quantity: number): void {
    this.cart.addItem(product, quantity);
  }
}
