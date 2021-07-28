import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { UserService } from '@data/service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  isLogin = false;

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
  ) { }

  openAccountDialog(): void {
    this.dialog.open(AccountDialogComponent);
  }

}

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.html'
})
export class AccountDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    private userService: UserService
  ) { }

  onSignInClick(email: string, password: string, button: EventTarget | null): void {
    (button as HTMLButtonElement).disabled = true;
    this.userService.signIn(email, password)
      .then(() => this.dialogRef.close())
      .catch(() => (button as HTMLButtonElement).disabled = false);
  }

  onRegisterClick(name: string, email: string, password: string, button: EventTarget | null): void {
    (button as HTMLButtonElement).disabled = true;

    if (this.userService.isValid(name, email, password)) {
      (button as HTMLButtonElement).disabled = false;
      return
    }

    this.userService.register(name, email, password)
      .then(() => this.dialogRef.close())
      .catch(() => (button as HTMLButtonElement).disabled = false);
  }

}
