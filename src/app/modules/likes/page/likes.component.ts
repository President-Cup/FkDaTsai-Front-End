import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

import { Item } from '@data/types/item';

import { CategoryService } from '@data/service/category.service';
import { ItemService } from '@data/service/item.service';
import { LikesListService } from '@data/service/likes-list.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {

  @ViewChild('matTable') table!: MatTable<ItemDisplay>;

  isLoading = true;
  dataSource: ItemDisplay[] = [];

  constructor(
    private likesListService: LikesListService,
    private itemService: ItemService,
    private categoryService: CategoryService
  ) {
    let itemPromise = this.likesListService.likesList
      .map((id) => this.itemService.fetchItem(id));

    Promise.all(itemPromise)
      .then((itemArray) => itemArray.map((item) => this.toItemDisplay(item)))
      .then((itemDisplayArray) => this.dataSource = itemDisplayArray)
      .finally(() => this.isLoading = false);
  }

  ngOnInit(): void {
  }

  removeRow(index: number): void {
    let id = this.dataSource[index].id;
    this.likesListService.dislike(id);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  private toItemDisplay(item: Item): ItemDisplay {
    return <ItemDisplay>{
      id: item.itemId,
      primary: this.categoryService.getPrimaryCategory()[item.categoryId.primary],
      secondary: this.categoryService.getSecondaryCategory(item.categoryId.primary)[item.categoryId.secondary],
      price: item.price,
      location: item.location
    };
  }
}

interface ItemDisplay {
  id: number,
  primary: string,
  secondary: string,
  price: number,
  location: string
}
