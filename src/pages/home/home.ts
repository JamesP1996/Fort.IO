import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemStorePage } from '../item-store/item-store';
import { ChallengesPage } from '../challenges/challenges';
import { ServerstatPage } from '../serverstat/serverstat';
import { NewsProvider } from '../../providers/news/news';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsArray: any[] = [];

  constructor(public navCtrl: NavController, private np: NewsProvider) {

  }

  // Get Data from the JSON and Printing it to the News Array
  ionViewDidLoad() {
    this.np.getNews().subscribe(data => {
      this.newsArray = data.entries;

    });
  }

  //Method for the Onclick Method for Item Store Div to go to the Item Store Page
  ItemClicked() {
    this.navCtrl.push(ItemStorePage);

  }
  //Method for the Onclick Method for Challenges Div to go to the Challenges Page
  chClick() {
    this.navCtrl.push(ChallengesPage);
  }
  //Method for the Onclick Method for Server Status Div to go to the Server Status Page
  servClick() {
    this.navCtrl.push(ServerstatPage);
  }


}
