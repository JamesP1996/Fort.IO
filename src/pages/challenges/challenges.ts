import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChallengeProvider} from '../../providers/challenge/challenge';
/**
 * Generated class for the ChallengesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-challenges',
  templateUrl: 'challenges.html',
})
export class ChallengesPage {

  week1Array: any[] = [];
  week2Array: any[] = [];
  week3Array: any[] = [];
  week4Array: any[] = [];
  week5Array: any[] = [];
  week6Array: any[] = [];
  week7Array: any[] = [];
  week8Array: any[] = [];
  week9Array: any[] = [];
  week10Array: any[] = [];
 



  constructor(public navCtrl: NavController, public navParams: NavParams , private cp: ChallengeProvider ) {
  }

  ionViewDidLoad() {
    this.cp.getChallenge().subscribe(data =>
      {
      this.week1Array = data.challenges.week1;
      
      });
      this.cp.getChallenge().subscribe(data =>
        {
        this.week2Array = data.challenges.week2;
        
        });
        this.cp.getChallenge().subscribe(data =>
          {
          this.week3Array = data.challenges.week3;
          
          });
          this.cp.getChallenge().subscribe(data =>
            {
            this.week4Array = data.challenges.week4;
            
            });
            this.cp.getChallenge().subscribe(data =>
              {
              this.week5Array = data.challenges.week5;
              
              });
              this.cp.getChallenge().subscribe(data =>
                {
                this.week6Array = data.challenges.week6;
                
                });
                this.cp.getChallenge().subscribe(data =>
                  {
                  this.week7Array = data.challenges.week7;
                  
                  });
                  this.cp.getChallenge().subscribe(data =>
                    {
                    this.week8Array = data.challenges.week8;
                    
                    });
                    this.cp.getChallenge().subscribe(data =>
                      {
                      this.week9Array = data.challenges.week9;
                      
                      });
                      this.cp.getChallenge().subscribe(data =>
                        {
                        this.week10Array = data.challenges.week10;
                        
                        });
      }
    }
  


