import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-component';
import { Category } from '../../../categories/categories.model';
import { CategoriesService } from '../../../categories/categories.service';

@Component({
  selector: 'app-public-communities-categorie-list',
  templateUrl: './public-communities-categorie-list.component.html',
  styleUrls: ['./public-communities-categorie-list.component.scss'],
})
export class PublicCommunitiesCategorieListComponent extends BaseListComponent<Category> {
  constructor(public categoryService: CategoriesService) {
    super(categoryService);
  }
}
