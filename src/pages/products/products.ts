import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Product} from '../../app/models/product';
import { NavController } from 'ionic-angular';
import {ProductService} from '../../app/services/product.service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  providers: [ ProductService ]
})
export class ProductsPage {
  products: Product[];
  errorMessage: string;
  mode = "Observable";
  constructor(
    public navCtrl: NavController, 
    private productService:ProductService
  ) {}

  ngOnInit(){
    let timer = Observable.timer(0, 5000);
      timer.subscribe(() => this.getProducts());
  }
  
  getProducts() {
      this.productService.getProducts()
          .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
          );
    }
}