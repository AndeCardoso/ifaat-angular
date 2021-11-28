import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private product: Product = new Product();
  private quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProduct(id)
      .subscribe(product => this.product = product);
  }

  addItem(): void {
    this.service.addItem(this.product, this.quantity);
    this.router.navigate(['./cart']);
  }

  back(): void {
    this.router.navigate(['./main']);
  }
}
