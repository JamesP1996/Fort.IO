import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemStorePage } from './item-store';

@NgModule({
  declarations: [
    ItemStorePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemStorePage),
  ],
})
export class ItemStorePageModule {}
