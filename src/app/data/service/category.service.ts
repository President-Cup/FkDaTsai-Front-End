import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '@core/constants/api';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl = `${API_URL}/category`;
  private category: Object = {
    '家具': ['沙發', '桌子'],
    '輔具': ['輪椅'],
    '紙箱': ['小', '中', '大', '其他']
  };

  constructor(private http: HttpClient) { }

  async fetchCategory(): Promise<JSON> {
    return this.http.get<JSON>(this.categoryUrl)
      .toPromise()
      .then((data) => this.category = data);
  }

  getPrimaryCategory(): string[] {
    return Object.keys(this.category);
  }

  getSecondaryCategory(index: number | string): string[] {
    if (typeof index === 'string') {
      index = Object.keys(this.category).indexOf(index);
    }
    return Object.values(this.category)[index];
  }
}
