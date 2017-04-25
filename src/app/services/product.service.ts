import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Product} from '../models/product';

@Injectable()
export class ProductService{
    private productsUrl = 'https://sheltered-beyond-67853.herokuapp.com/products';

    constructor(private http: Http){}

    getProducts(): Observable<Product[]> {
            return this.http.get(this.productsUrl)
                                            .map((response: Response) => <Product[]>response.json())
                                            .catch(this.handleError);
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