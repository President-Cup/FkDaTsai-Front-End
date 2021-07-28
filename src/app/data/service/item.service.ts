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

  async uploadItem(item: Item): Promise<number> {
    return this.http.post<number>(`${this.itemUrl}/upload`, item)
      .toPromise();
  }

  async fetchNumberOfItems(categoryName: [string, string]): Promise<number> {
    return this.http.get<number>(`${this.itemUrl}?q=number&primary=${categoryName[0]}&secondary=${categoryName[1]}`)
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

  async updateItem(item: Item): Promise<any> {
    return this.http.put<any>(`${this.itemUrl}/update`, item)
      .toPromise();
  }

  async removeItem(itemId: number): Promise<unknown> {
    return this.http.delete(`${this.itemUrl}/${itemId}`)
      .toPromise();
  }
}
