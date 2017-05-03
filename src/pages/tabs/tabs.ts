import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { EstablishmentsPage } from '../establishments/establishments';
import { ProductsPage } from '../products/products';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../../providers/auth-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EstablishmentsPage;
  tab2Root = ProductsPage;
  tab3Root = HomePage;

  constructor(public navCtrl: NavController, af: AngularFire,private _auth: AuthService){
    if (!this._auth.authenticated) {
      this.navCtrl.setRoot(LoginPage);
    }
  }
}
