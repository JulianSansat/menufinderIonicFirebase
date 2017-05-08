import { Component } from '@angular/core';
import {
  Loading,
  LoadingController, 
  NavController,
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailValidator } from '../../app/validators/email';
import { AuthService } from '../../providers/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Storage } from '@ionic/storage';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm:FormGroup;
  public loading:Loading;
  private user = {}

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, 
    public authProvider: AuthService, public formBuilder: FormBuilder){
      this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, 
        EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), 
        Validators.required])]
      });
    }

  goToSignup(){
    this.navCtrl.push(RegisterPage);
  }

  goToResetPassword(): void {}  
  
  loginWithFacebook(): void {
    this.authProvider.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  public loginWithEmail(): void {
  if (!this.loginForm.valid){
    console.log(this.loginForm.value);
  } else {
    this.authProvider.signInWithEmail(this.loginForm.value.email, 
        this.loginForm.value.password)
    .then( authData => {
      this.loading.dismiss().then( () => {
        this.navCtrl.setRoot(TabsPage);
      });
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }
}

  private onSignInSuccess(): void {
    console.log("Facebook display name ",this.authProvider.displayName());
    this.navCtrl.setRoot(TabsPage);
  }

}