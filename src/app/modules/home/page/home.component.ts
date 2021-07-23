import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { CategoryService } from '@data/service/category.service';
import { ItemService } from '@data/service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('paginator') paginator!: MatPaginator;

  categoryName: [string, string];

  isLoading = true;
  numOfItems = 0;
  itemIdList: number[] = [];

  constructor(
    public categoryService: CategoryService,
    private itemService: ItemService
  ) {
    let defaultPrimaryCategory = this.categoryService.getPrimaryCategory()[0];
    let defaultSecondaryCategory = this.categoryService.getSecondaryCategory(defaultPrimaryCategory)[0];
    this.categoryName = [defaultPrimaryCategory, defaultSecondaryCategory];
  }

  ngAfterViewInit(): void {
    this.updateItemIdList(0, this.paginator.pageSize);
    this.paginator.page.subscribe((page: PageEvent) => {
      this.updateItemIdList(page.pageIndex, page.pageSize);
    });

  }

  updateCategory(primary?: string, secondary?: string) {
    if (primary) {
      this.categoryName[0] = primary;
    } else if (secondary) {
      this.categoryName[1] = secondary;
    }

    console.log('this.categoryName', this.categoryName);

    this.itemService.fetchNumberOfItems(this.categoryName)
      .then((values) => this.numOfItems = values)
      .then(() => this.updateItemIdList(0, this.paginator.pageSize));
  }

  updateItemIdList(pageIndex: number, pageSize: number) {
    this.itemService.fetchItemIdList(this.categoryName, pageIndex, pageSize)
      .then((data) => this.itemIdList = data)
      .finally(() => {
        console.log('this.itemIdList', this.itemIdList);
        this.isLoading = false;
      });
  }
}
