import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CATEGORY_NAME } from '@core/constants/category-name'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  category_names = CATEGORY_NAME;
  category_name_keys = this.category_names.keys();

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      category: new FormControl("", Validators.required),
      price: new FormControl(0, Validators.required),
      address: new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }
}
