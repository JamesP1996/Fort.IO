import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ServersProvider} from '../../providers/servers/servers';

/**
 * Generated class for the ServerstatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serverstat',
  templateUrl: 'serverstat.html',
})
export class ServerstatPage {

  serverArray: any[] = [];
  serverArray2: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private sp : ServersProvider) {
  }

  

  ionViewDidLoad() {
    this.sp.getServer().subscribe(data =>
      {
      this.serverArray = data.status;
      
      });

      this.sp.getServer().subscribe(data =>
        {
        this.serverArray2 = data.time.duration.formated;
        
        
        });
  }

  serverstat(){
    this.sp.getServer().subscribe(data =>
      {
      this.serverArray2 = data.time.duration.formated;
      
      
      });
  }
}
