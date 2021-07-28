import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@shared/material.module';
import { AccountComponent, AccountDialogComponent } from './page/account.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AccountComponent
  ],
})
export class AccountModule { }
