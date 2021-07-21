import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '@data/service/item.service';

import { Item } from '@data/types/item';

@Component({
  selector: 'app-item-card [item]',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input()
  itemId!: number;

  item?:  Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.fetchItem(this.itemId)
      .then((item) => {
        this.item = item;
      })
      .catch((error) => {
        console.error(error);
      });
  }

}
