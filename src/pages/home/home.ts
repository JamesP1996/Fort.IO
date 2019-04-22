import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ItemStorePage} from '../item-store/item-store';
import { ChallengesPage } from '../challenges/challenges';
import {ServerstatPage } from '../serverstat/serverstat';
import { NewsProvider } from '../../providers/news/news';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsArray: any[] = [];

  constructor(public navCtrl: NavController, private np : NewsProvider) {

  }

  ionViewDidLoad() {
    this.np.getNews().subscribe(data =>
      {
      this.newsArray = data.entries;
      
      });
    }

  ItemClicked(){
    this.navCtrl.push(ItemStorePage);

  }

  chClick(){
    this.navCtrl.push(ChallengesPage);
  }

  servClick(){
    this.navCtrl.push(ServerstatPage);
  }
  

}
