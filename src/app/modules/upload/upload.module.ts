import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/material.module'

import { UploadRoutingModule } from './upload-routing.module';

import { UploadComponent } from './page/upload.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UploadModule { }
