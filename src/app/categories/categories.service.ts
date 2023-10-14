import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Category } from './categories.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService<Category> {
  constructor() {
    super('categories');
  }
}
