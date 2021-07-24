import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { CategoryService } from '@data/service/category.service';
import { ItemService } from '@data/service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('selector') selector!: MatSelect;
  @ViewChild('paginator') paginator!: MatPaginator;

  isLoading = false;

  categoryName: [string, string] = ['', ''];
  itemIdList: number[] = [];

  constructor(
    public categoryService: CategoryService,
    private itemService: ItemService
  ) { }

  ngAfterViewInit(): void {
    this.selector.selectionChange.subscribe((selectionChange: MatSelectChange) => {
      this.updateCategory(selectionChange.value);
    })

    this.paginator.page.subscribe((page: PageEvent) => {
      this.updateItemIdList(page.pageIndex, page.pageSize);
    });
  }

  updateCategory(categoryName: [string, string]) {
    this.isLoading = true;
    this.categoryName = categoryName;
    console.log('categoryName', categoryName);

    this.itemService.fetchNumberOfItems(this.categoryName)
      .then((values) => this.paginator.length = values)
      .then(() => this.updateItemIdList(0, this.paginator.pageSize));
  }

  updateItemIdList(pageIndex: number, pageSize: number) {
    this.isLoading = true;

    this.itemService.fetchItemIdList(this.categoryName, pageIndex, pageSize)
      .then((data) => this.itemIdList = data)
      .finally(() => {
        console.log('this.itemIdList', this.itemIdList);
        this.isLoading = false;
      });
  }
}
