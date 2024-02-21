import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../shared/base-component';
import { CartItem } from '../cart.model';
import { CartService } from '../cart.service';
import { ResearchPartnerService } from '../../research-partner/research-partner.service';
import { Organization } from '../../organization/organization.model';

@Component({
  selector: 'app-select-research-partners',
  templateUrl: './select-research-partners.component.html',
  styleUrls: ['./select-research-partners.component.scss'],
})
export class SelectResearchPartnersComponent
  extends BaseCreateComponent<CartItem>
  implements OnInit
{
  cartItem: CartItem | undefined;
  selectedResearchPartners: Organization[] = [];

  constructor(
    public cartService: CartService,
    public researchPartnersService: ResearchPartnerService
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      research_partners: [null],
    });

    this.subscriptions['cartItem'] = this.cartService.singleData$.subscribe(
      (cartItem) => {
        if (cartItem) {
          this.cartItem = cartItem;
          this.selectedResearchPartners = cartItem.research_partners || [];
          this.formValuePatcher(
            'research_partners',
            this.selectedResearchPartners
          );
        }
      }
    );
  }

  onResearchPartnerSelected(item: any) {
    const index = this.selectedResearchPartners.findIndex(
      (_: any) => _.id == item.id
    );

    if (index > -1) {
      this.selectedResearchPartners = this.selectedResearchPartners.filter(
        (_: any) => _.id != item.id
      );
    } else {
      const researchPartner = this.researchPartnersService.data.find(
        (_: any) => _.id == item.id
      );

      if (researchPartner) this.selectedResearchPartners.push(researchPartner);
    }
  }

  onSelectAll() {
    this.selectedResearchPartners = this.researchPartnersService.data;
  }

  onDeselectAll() {
    this.selectedResearchPartners = [];
  }

  submit() {
    this.cartService.updateResearchPartners(
      this.cartItem!,
      this.selectedResearchPartners
    );

    this.created.emit();
  }
}
