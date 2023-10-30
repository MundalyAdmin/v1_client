import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { CategoriesService } from '../../../categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../categories/categories.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent extends BaseSingleComponent<Category> {
  public override enableFetchDataFromURL: boolean = true;
  constructor(
    public categoryService: CategoriesService,
    public override route: ActivatedRoute
  ) {
    super(categoryService, route);
  }
}
