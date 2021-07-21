import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { ItemCardComponent } from './page/item-card/item-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
