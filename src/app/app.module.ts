import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ItemProvider } from '../providers/item/item';

import {HttpClientModule} from '@angular/common/http';

import {ChallengesPage} from '../pages/challenges/challenges';

import {ItemStorePage} from '../pages/item-store/item-store';

import {ServerstatPage} from '../pages/serverstat/serverstat';

import { ChallengeProvider } from '../providers/challenge/challenge';

import { ServersProvider } from '../providers/servers/servers';
import { NewsProvider } from '../providers/news/news';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemStorePage,
    ServerstatPage,
    ChallengesPage
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemStorePage,
    ServerstatPage,
    ChallengesPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemProvider,
    ChallengeProvider,
    ServersProvider,
    NewsProvider
  ]
})
export class AppModule {}
