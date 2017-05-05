import { Component } from '@angular/core';
import { EstablishmentsPage } from '../establishments/establishments';
import { ProductsPage } from '../products/products';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EstablishmentsPage;
  tab2Root = ProductsPage;
  tab3Root = HomePage;

  constructor(){
  }
}
