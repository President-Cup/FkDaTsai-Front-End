import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '@data/service/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FkDaTsai-Front-End';
  isLoading = true;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryService.fetchCategory()
      .then(() => {
        console.log('Load category.');
      })
      .catch(() => {
        console.error('Error fetching category.');
      })
      .finally(() => {
        this.isLoading = false;
        this.router.navigate(['home'], { relativeTo: this.route });
      });
      // TODO: Add a page for error.

  }


}
