import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from '../../shared/helpers/storage/storage';
import { Flowbite } from '../../shared/decorators/flowbite.decorator';
import { TypeOrganization } from '../type-organization/type-organization.model';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.scss'],
})
@Flowbite()
export class DashboardOrganizationComponent implements OnInit {
  admin: any;
  organization: any;
  type_organization: TypeOrganization | undefined;
  constructor(public authService: AuthService, public storage: Storage) {}

  ngOnInit(): void {
    const registration = this.storage.get<any>('registration');
    this.admin = registration['adminInfo'];
    this.organization = registration['organizationInfo'];
    this.type_organization = this.authService.typeOrganization;
  }
}
