import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {Establishment} from '../../app/models/establishment';
import { NavController, NavParams } from 'ionic-angular';
import {EstablishmentService} from '../../app/services/establishment.service';

@Component({
  selector: 'page-establishment-detail',
  templateUrl: 'establishment-detail.html',
  providers: [ EstablishmentService ]
})
export class EstablishmentDetailPage {
  establishment = Establishment;
  constructor(
    public navCtrl: NavController, 
    private establishmentService:EstablishmentService,
    public navParams: NavParams
  ) {
    this.establishment = this.navParams.data;
    this.establishmentService.findById(this.establishment).then(
            establishment => this.establishment = establishment
        );
  }

}