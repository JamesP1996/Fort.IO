import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

/*
  Generated class for the ServersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServersProvider Provider');
  }
  //Get Server Status from Fortnite API
  getServer() : Observable<any>{
    return this.http.get('https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status');
    
  }
}
