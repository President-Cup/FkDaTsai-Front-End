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
}
