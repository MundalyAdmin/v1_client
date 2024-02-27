import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-component';
import { SectorOrganization } from '../../../organization/sector-organization/sector-organization.model';
import { SectorOrganizationService } from '../../../organization/sector-organization/sector-organization.service';

@Component({
  selector: 'app-public-communities-categorie-list',
  templateUrl: './public-communities-categorie-list.component.html',
  styleUrls: ['./public-communities-categorie-list.component.scss'],
})
export class PublicCommunitiesCategorieListComponent extends BaseListComponent<SectorOrganization> {
  constructor(public organizationService: SectorOrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);
    super.ngOnInit();
  }
}
