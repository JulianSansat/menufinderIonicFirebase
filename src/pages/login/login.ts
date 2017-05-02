import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

}