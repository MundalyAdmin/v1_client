import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from '../../../../shared/base-component';
import { Category } from '../../../../categories/categories.model';
import { CategoriesService } from '../../../../categories/categories.service';
import { JsLoaderService } from '../../../../js-loader.service';

@Component({
  selector: 'app-home-category-list',
  templateUrl: './home-category-list.component.html',
  styleUrls: ['./home-category-list.component.scss'],
})
export class HomeCategoryListComponent
  extends BaseListComponent<Category>
  implements OnInit
{
  constructor(
    public categoryService: CategoriesService,
    private renderer: Renderer2,
    public jsLoaderService: JsLoaderService
  ) {
    super(categoryService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  getCategories = () => {
    this.loading = true;
    this.categoryService.all().subscribe(() => {
      this.loading = false;
      this.jsLoaderService.loadJsScript(
        this.renderer,
        'assets/js/plugins.init.js'
      );
    });
  };
}
