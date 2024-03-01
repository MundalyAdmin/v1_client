import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../../shared/base-component';
import { CartItem } from '../../../../../cart/cart.model';
import { ReportService } from '../../../../../report/report.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Organization } from '../../../../../organization/organization.model';
import { CartService } from '../../../../../cart/cart.service';

@Component({
  selector: 'app-organization-available-reports',
  templateUrl: './organization-available-reports.component.html',
  styleUrls: ['./organization-available-reports.component.scss'],
})
export class OrganizationAvailableReportsComponent extends BaseListComponent<CartItem> {
  constructor(
    public reportService: ReportService,
    public organizationService: OrganizationService,
    public cartService: CartService
  ) {
    super(reportService);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        this.getByOrganization(organization!);
      });
  }

  getByOrganization(organization: Organization) {
    this.loading = true;
    this.reportService.getByOrganization(organization).subscribe(() => {
      this.loading = false;
    });
  }

  onChange(event: any, index: number) {
    this.reportService._data[index].community = event.target.value;
  }

  addToCart(item: CartItem) {
    this.cartService.addItem(item);
    this.helper.notification.alertSuccess('Added to cart');
  }

  removeFromCart(item: CartItem) {
    this.cartService.deleteItem(item);
    this.helper.notification.alertSuccess('Removed from cart');
  }

  downloadSample() {
    const url =
      'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/dijecrp6s7iwwhhwjtob';

    // download file from url
    const a = document.createElement('a');
    a.href = url;
    a.download = 'url';
    a.click();

    // window.open(
    //   'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/dijecrp6s7iwwhhwjtob',
    //   '_parent',
    //   'download'
    // );

    // window.location.assign(url);
  }
}
