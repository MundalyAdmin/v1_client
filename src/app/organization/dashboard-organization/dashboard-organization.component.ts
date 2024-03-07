import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Storage } from '../../shared/helpers/storage/storage';
import { Flowbite } from '../../shared/decorators/flowbite.decorator';
import { TypeOrganization } from '../type-organization/type-organization.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.scss'],
})
@Flowbite()
export class DashboardOrganizationComponent implements OnInit {
  admin: any;
  organization: any;
  typeOrganization: TypeOrganization | undefined;
  constructor(
    public authService: AuthService,
    public storage: Storage,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const registration = this.storage.get<any>('registration');
    this.admin = registration['adminInfo'];
    this.organization = registration['organizationInfo'];
    this.typeOrganization = this.authService.typeOrganization;

    if (this.typeOrganization.id === 1) {
      console.log('community');
      this.router.navigate(['community'], { relativeTo: this.route });
    } else if (this.typeOrganization.id === 2) {
      console.log('benchmark');

      this.router.navigate(['benchmark'], { relativeTo: this.route });
    }
  }
}
