import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from '../../../../shared/base-component';
import { Category } from '../../../../categories/categories.model';
import { CategoriesService } from '../../../../categories/categories.service';

@Component({
  selector: 'app-home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.scss'],
})
export class HomeCategoryListComponent
  extends BaseListComponent<Category>
  implements OnInit
{
  constructor(public categoryService: CategoriesService) {
    super(categoryService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
