import { Injectable } from '@angular/core';
import { CartItem } from './cart.model';
import { BaseService } from '../shared/services';
import { ReportDemographic } from './report-demographic/report-demographic.model';
import { Organization } from '../organization/organization.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService extends BaseService<CartItem> {
  totalPrice = 0;
  constructor() {
    super('');
  }

  override get data() {
    this._data = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
    this.totalPrice = this._data
      .map((item) => +item.price)
      .reduce((prev, curr) => prev + curr, 0);
    return this._data;
  }

  override set data(data: CartItem[]) {
    this._data = data;
    this.emitData();
    localStorage.setItem('cart', JSON.stringify(data));
  }

  get itemCount() {
    return this.data.length;
  }

  get taxPrice() {
    return Math.round(this.totalPrice * 0.2);
  }

  addItem(item: CartItem) {
    if (this.isItemInCart(item)) {
      this.updateItem(item);
      return;
    }
    this.data = [...this.data, item];
    localStorage.setItem('cart', JSON.stringify(this.data));
  }

  updateItem(item: CartItem) {
    const index = this._data.findIndex(
      (_: CartItem) =>
        _.title == item.title && _.organization == item.organization
    );

    this._data[index] = item;
    this.emitData();
    localStorage.setItem('cart', JSON.stringify(this._data));
  }

  isItemInCart(item: CartItem) {
    return this._data.find(
      (_: CartItem) =>
        _.title == item.title && _.organization == item.organization
    );
  }

  deleteItem(item: CartItem) {
    this.data = this.data.filter(
      (_: CartItem) =>
        !!!(_.title == item.title && _.organization == item.organization)
    );

    console.log(this.data);
  }

  updateDemographic(item: CartItem, demographic: ReportDemographic) {
    item.demographic = demographic;
    this.updateItem(item);
    console.log(item);
  }

  updateResearchPartners(item: CartItem, researchPartners: Organization[]) {
    item.research_partners = researchPartners;
    this.updateItem(item);
    console.log(item);
  }
}
