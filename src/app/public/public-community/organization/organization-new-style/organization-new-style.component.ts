import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';
import { Flowbite } from '../../../../shared/decorators/flowbite.decorator';
import { CartService } from '../../../../cart/cart.service';
import { CartItem } from '../../../../cart/cart.model';
import { ReportService } from '../../../../report/report.service';

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
    public reportService: ReportService,
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

        this.reports = this.reportService.data;
      });
    });
  }
}
