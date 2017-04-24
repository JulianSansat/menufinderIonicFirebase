import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Establishment} from '../../app/models/establishment';
import { NavController } from 'ionic-angular';
import {EstablishmentService} from '../../app/services/establishment.service';

@Component({
  selector: 'page-establishments',
  templateUrl: 'establishments.html',
  providers: [ EstablishmentService ]
})
export class EstablishmentsPage {
  establishments: Establishment[];
  errorMessage: string;
  mode = "Observable";
  constructor(
    public navCtrl: NavController, 
    private establishmentService:EstablishmentService
  ) {}

  ngOnInit(){
    let timer = Observable.timer(0, 5000);
      timer.subscribe(() => this.getEstablishments());
  }
  
  getEstablishments() {
      this.establishmentService.getEstablishments()
          .subscribe(
            establishments => this.establishments = establishments,
            error => this.errorMessage = <any>error
          );
    }
}