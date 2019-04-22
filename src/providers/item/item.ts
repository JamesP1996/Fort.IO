import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ItemProvider Provider');
  }

  getItems() : Observable<any>{
    return this.http.get('https://fortnite-public-api.theapinetwork.com/prod09/store/get?language=en');

  }

}
