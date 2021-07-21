import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './page/home.component';
import { ItemCardComponent } from './page/item-card/item-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
