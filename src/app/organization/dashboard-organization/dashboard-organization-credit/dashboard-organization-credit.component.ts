import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-dashboard-organization-credit',
  templateUrl: './dashboard-organization-credit.component.html',
  styleUrls: ['./dashboard-organization-credit.component.scss'],
})
export class DashboardOrganizationCreditComponent extends BaseComponent<any> {
  constructor(public cartService: CartService) {
    super();
  }
}
