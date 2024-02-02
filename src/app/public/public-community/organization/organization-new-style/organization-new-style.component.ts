import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';
import { Flowbite } from '../../../../shared/decorators/flowbite.decorator';
import { CartService } from '../../../../cart/cart.service';
import { CartItem } from '../../../../cart/cart.model';

@Component({
  selector: 'app-organization-new-style',
  templateUrl: './organization-new-style.component.html',
  styleUrls: ['./organization-new-style.component.scss'],
})
@Flowbite()
export class OrganizationNewStyleComponent extends BaseSingleComponent<Organization> {
  protected reports: any[] = [];
  constructor(
    public organizationService: OrganizationService,
    public cartService: CartService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      this.loading = true;
      this.organizationService.show(+params['id']).subscribe((organization) => {
        this.single = organization;
        this.loading = false;

        this.reports = [
          {
            title: 'Community Health Needs Assessment Report ',
            price: '640',
            availability: 'In 3 hours',
            organization: organization.name,
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'on-demand',
          },
          {
            title: 'Community Health Improvement Plans (CHIP)',
            price: '590',
            availability: 'In 3 hours',
            organization: organization.name,
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'on-demand',
          },
          {
            title: 'Communities Urgent Issues Report',
            price: '500',
            availability: 'In 6 hours',
            organization: organization.name,
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'coming-soon',
          },
          {
            title: 'Complete Verified Community Report',
            price: '0',
            availability: 'In 3 hours',
            organization: organization.name,
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'coming-soon',
          },
        ];
      });
    });
  }

  onChange(event: any, index: number) {
    this.reports[index].community = event.target.value;
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
    window.open(
      'https://res.cloudinary.com/mundaly/image/upload/f_auto,q_auto/dijecrp6s7iwwhhwjtob',
      '_blank'
    );
  }
}
