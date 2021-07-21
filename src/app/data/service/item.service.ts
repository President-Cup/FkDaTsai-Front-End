import { Injectable } from '@angular/core';
import { Item } from '@data/types/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  async fetchItem(itemId: number): Promise<Item> {
    return new Promise<Item>((resolve, reject) => { })
  }

  async listItemIdByCategory(main: string, minor: string): Promise<number[]> {
    return new Promise<number[]>((resolve, reject) => { });
  }
}
