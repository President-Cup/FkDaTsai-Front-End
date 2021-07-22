import { Component } from '@angular/core';
import { CategoryService } from '@data/service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FkDaTsai-Front-End';

  constructor(private categoryService: CategoryService) {
    this.categoryService.fetchCategory()
      .then(() => console.log('Load category.'))
      .catch(() => console.error('Error fetching category.'));
  }
}
