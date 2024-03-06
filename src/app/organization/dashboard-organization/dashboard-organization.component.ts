import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from '../../shared/helpers/storage/storage';
import { Flowbite } from '../../shared/decorators/flowbite.decorator';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.scss'],
})
@Flowbite()
export class DashboardOrganizationComponent implements OnInit {
  admin: any;
  organization: any;
  constructor(public authService: AuthService, public storage: Storage) {}

  ngOnInit(): void {
    const registration = this.storage.get<any>('registration');
    this.admin = registration['adminInfo'];
    this.organization = registration['organizationInfo'];
  }
}
