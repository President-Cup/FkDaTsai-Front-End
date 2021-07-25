import { Component, OnInit, Input } from '@angular/core';

import { ItemService } from '@data/service/item.service';
import { LikesListService } from '@data/service/likes-list.service';

import { Item } from '@data/types/item';

@Component({
  selector: 'app-item-card [itemId]',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() itemId!: number;

  item?: Item;

  constructor(
    private itemService: ItemService,
    public likesListService: LikesListService
  ) { }

  ngOnInit(): void {
    this.itemService.fetchItem(this.itemId)
      .then((item) => this.item = item)
      .catch((error) => console.error(error));
  }

  toggleLikesStatus(): void {
    if (this.likesListService.isLiked(this.itemId)) {
      this.likesListService.dislike(this.itemId);
    } else {
      this.likesListService.like(this.itemId);
    }
  }
}
