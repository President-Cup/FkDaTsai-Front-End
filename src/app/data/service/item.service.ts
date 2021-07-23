import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '@data/types/item';

import { API_URL } from '@core/constants/api';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl = `${API_URL}/item`;

  constructor(private http: HttpClient) { }

  async fetchNumberOfItems(category_name: [string, string]): Promise<number> {
    return this.http.get<number>(`${this.itemUrl}?q=number&primary=${category_name[0]}&secondary=${category_name[1]}`)
      .toPromise();
  }

  async fetchItem(itemId: number): Promise<Item> {
    return this.http.get<Item>(`${this.itemUrl}?q=item&id=${itemId}`)
      .toPromise();
  }

  async fetchItemIdList(category_name: [string, string], pageIndex: number, pageSize: number): Promise<number[]> {
    return this.http.get<number[]>(`${this.itemUrl}?q=list&category=${category_name}&page=${pageIndex}&per_page=${pageSize}`)
      .toPromise();
  }
}
