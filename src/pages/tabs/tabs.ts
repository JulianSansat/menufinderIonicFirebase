import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { EstablishmentsPage } from '../establishments/establishments';
import { ProductsPage } from '../products/products';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EstablishmentsPage;
  tab2Root = RegisterPage;
  tab3Root = ProductsPage;

  constructor() {

  }
}
