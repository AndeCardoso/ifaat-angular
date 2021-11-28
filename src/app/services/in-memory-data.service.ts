import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      { id: 1, name: 'Xis Salada', price: 18.00, img: 'assets/img/xis-salada.jpg' },
      { id: 2, name: 'Fritas', price: 12.00, img: 'assets/img/fritas.jpg' },
      { id: 3, name: 'Pastel', price: 8.50, img: 'assets/img/pastel.jpg' },
      { id: 4, name: 'Refrigerante', price: 5.00, img: 'assets/img/refrigerante.jpg' },
      { id: 5, name: 'Pizza', price: 65.50, img: 'assets/img/pizza.jpg' },
      { id: 6, name: 'Suco', price: 3.50, img: 'assets/img/suco.jpg' },
      { id: 7, name: 'Sushi', price: 40.00, img: 'assets/img/sushi.jpg' },
      { id: 8, name: 'Cerveja', price: 6.20, img: 'assets/img/cerveja.jpg' },
    ]; return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}
