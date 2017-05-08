import { Component} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AngularFire} from 'angularfire2';
import { FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  user: Observable<firebase.User>;

  constructor(public authProvider: AuthService, af: AngularFire, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
          if (!authProvider.authenticated) {
            this.rootPage = LoginPage;
          } else { 
            this.rootPage = TabsPage;
          }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


