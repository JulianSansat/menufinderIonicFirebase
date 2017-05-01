import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EstablishmentsPage } from '../establishments/establishments';
import { ProductsPage } from '../products/products';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EstablishmentsPage;
  tab2Root = ProductsPage;
  tab3Root = HomePage;

  constructor(public navCtrl: NavController, storage: Storage) {
    storage.ready().then(() => {
       storage.get('token').then((val) => {
         if(!val){
         navCtrl.setRoot(LoginPage);
         }
      })
     });
  }
}
