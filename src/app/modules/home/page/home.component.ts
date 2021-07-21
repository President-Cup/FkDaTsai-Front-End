import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';

import { CATEGORY_NAME } from '@core/constants/category-name';
import { ItemService } from '@data/service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  category_names = CATEGORY_NAME;

  main_category_name = '';
  minor_category_name = '';

  itemIdList: number[] = [];
  displayList: number[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  updateMainCategoryName(name: string): void {
    this.main_category_name = name;
    console.log(`updateMainCategoryName ${name}`);
    this.updateItemIdList()
  }

  updateMinorCategoryName(name: string): void {
    this.minor_category_name = name;
    console.log(`updateMinorCategoryName ${name}`);
    this.updateItemIdList()
  }

  updateItemIdList() {
    this.itemService.listItemIdByCategory(this.main_category_name, this.minor_category_name)
      .then((result) => { this.itemIdList = result; });
  }

  updateDisplayList(pe: PageEvent) {
    let begin = pe.pageIndex * pe.pageSize;
    let end = begin + pe.pageSize;
    this.displayList = this.itemIdList.slice(begin, end);
  }
}
