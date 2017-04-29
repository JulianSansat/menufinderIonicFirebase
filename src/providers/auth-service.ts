import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://localhost:3000/';

@Injectable()
export class AuthService{
  constructor(public http:Http){}

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'auth/sign_in', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'auth', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'auth/sign_out', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}