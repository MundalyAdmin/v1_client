import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactInitiative } from '../../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../../scale/impact-initiative/impact-initiative.service';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../../../../organization/organization.service';
import { ScaleService } from '../../../../../scale/scale.service';

@Component({
  selector: 'app-organization-new-style-company-reported',
  templateUrl: './organization-new-style-company-reported.component.html',
  styleUrls: ['./organization-new-style-company-reported.component.scss'],
})
export class OrganizationNewStyleCompanyReportedComponent extends BaseComponent<ImpactInitiative> {
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getByOrganizationId(organization.id!);
        }
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactInitiativeService.getByOrganizationId(organizationId).subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }

  getRandomBgColor() {
    const color =
      'bg-[#' + ((Math.random() * 0xffffff) << 0).toString(16) + ']';
    console.log(color);
    return color;
  }
}
