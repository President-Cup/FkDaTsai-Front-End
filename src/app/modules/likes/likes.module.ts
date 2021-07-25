import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/material.module'

import { LikesRoutingModule } from './likes-routing.module';

import { LikesComponent } from './page/likes.component';



@NgModule({
  declarations: [
    LikesComponent
  ],
  imports: [
    CommonModule,
    LikesRoutingModule,
    MaterialModule
  ]
})
export class LikesModule { }
