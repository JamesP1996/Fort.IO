import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServerstatPage } from './serverstat';

@NgModule({
  declarations: [
    ServerstatPage,
  ],
  imports: [
    IonicPageModule.forChild(ServerstatPage),
  ],
})
export class ServerstatPageModule {}
