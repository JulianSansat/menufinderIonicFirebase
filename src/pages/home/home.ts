import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFire } from 'angularfire2';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _app: App,af: AngularFire, private _auth: AuthService) {}
    logout() {
      this._auth.signOut().then( () => {
        this._app.getRootNav().setRoot(LoginPage);
      });
    }
}