
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = new Cart();
  private isAlertSuccess = false;
  private isAlertError = false;

  constructor(
    private location: Location,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getCart();
    this.cart.totalValueCalc();
  }

  getCart(): void {
    this.cart = this.productsService.getCart();
  }

  goBack(): void {
    this.location.back();
  }

  goBuy(): void {
    if(this.cart.items.length > 0) {
      this.cart = new Cart();
      this.isAlertSuccess = true;
      setTimeout(() => {
        this.isAlertSuccess = false;
      }, 2000);
    } else {
      this.isAlertError = true;
      setTimeout(() => {
        this.isAlertError = false;
      }, 2000);
      
    }
  }

  goToProducts(): void {
    this.router.navigate(['./home']);
  }
}