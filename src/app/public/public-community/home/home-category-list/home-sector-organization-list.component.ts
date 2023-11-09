import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from '../../../../shared/base-component';
import { SectorOrganization } from '../../../../organization/sector-organization/sector-organization.model';
import { SectorOrganizationService } from '../../../../organization/sector-organization/sector-organization.service';

@Component({
  selector: 'app-home-sector-organization-list',
  templateUrl: './home-sector-organization-list.component.html',
  styleUrls: ['./home-sector-organization-list.component.scss'],
})
export class HomeSectorOrganizationListComponent
  extends BaseListComponent<SectorOrganization>
  implements OnInit
{
  constructor(public organizationService: SectorOrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
