import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

let apiUrl = 'https://sheltered-beyond-67853.herokuapp.com/';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth, private platform: Platform, public face: Facebook) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<any> {
    if (this.platform.is('cordova')) {
      return this.face.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      });
    } else {
      return this.auth$.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      });
    }

  }

  signwithEmail(email: string, password: string): firebase.Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): firebase.Promise<any> {
      return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( newUser => {
          firebase.database().ref('/userProfile').child(newUser.uid)
          .set({ email: email });
    });
  }

  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }


  signOut(): firebase.Promise<void> {
    return this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.auth.displayName;
    } else {
      return '';
    }
  }
}