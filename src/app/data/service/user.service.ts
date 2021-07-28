import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '@data/types/user';

import { API_URL } from '@core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLogin = false;
  get isLogin() { return this._isLogin; }

  private _user?: User;
  get user() { return this._user; }

  constructor(private http: HttpClient) { }

  isValid(name: string, email: string, password: string) {
    if (!name || !name.trim() || !name.match('/^\w+$/')) {
      return false;
    }
    if (!email || !email.trim() || !email.match('/^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)\w+)*\.[A-Za-z]+$/')) {
      return false;
    }
    if (!password || !password.trim() || password.length < 8 || !password.match('/^\w+$/')) {
      return false;
    }
    return true;
  }

  async register(name: string, email: string, password: string) {
    let body = {
      name: name,
      email: email,
      password: password
    };

    return this.http.post<User>(`${API_URL}/register`, body)
      .toPromise()
      .then((user) => this._user = user)
      .then(() => this._isLogin = true);
  }

  async signIn(email: string, password: string) {
    let body = {
      email: email,
      password: password
    };

    return this.http.post<User>(`${API_URL}/sign-in`, body)
      .toPromise()
      .then((user) => this._user = user)
      .then(() => this._isLogin = true);
  }

  logOut(): void {
    this._isLogin = false;
    this._user = undefined;
  }
}
