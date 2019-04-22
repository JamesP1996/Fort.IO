import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemProvider } from '../../providers/item/item';

/**
 * Generated class for the ItemStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-store',
  templateUrl: 'item-store.html',
})
export class ItemStorePage {

  itemArray: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ip: ItemProvider) {
  }
  // Uses ItemProvider and..
  // Grabs The Data From The Json Online in the Category Items and Send it to Items Array
  ionViewDidLoad() {
    //console.log('ionViewDidLoad ItemStorePage');
    this.ip.getItems().subscribe(data => {
      this.itemArray = data.items;

    });
  }

}
