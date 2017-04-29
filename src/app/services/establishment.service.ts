import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Establishment} from '../models/establishment';

@Injectable()
export class EstablishmentService{
    private establishmentsUrl = 'http://localhost:3000/establishment';

    constructor(private http: Http){}

    getEstablishments(): Observable<Establishment[]> {
            return this.http.get(this.establishmentsUrl)
                                            .map((response: Response) => <Establishment[]>response.json())
                                            .catch(this.handleError);
    }

    findById(id){
      return this.http.get(this.establishmentsUrl + "/" + id)
            .map(res => res.json())
            .toPromise();
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

}