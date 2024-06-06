import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { Organization } from '../../../organization/organization.model';
import { OrganizationService } from '../../../organization/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Flowbite } from '../../../shared/decorators/flowbite.decorator';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-super-admin-organization-show',
  templateUrl: './super-admin-organization-show.component.html',
  styleUrls: ['./super-admin-organization-show.component.scss'],
})
@Flowbite()
export class SuperAdminOrganizationShowComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public authService: AuthService,
    public override route: ActivatedRoute,
    public router: Router
  ) {
    super(organizationService, route);
    // this.enableFetchDataFromURL = true;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.route.params.subscribe((params) => {
      this.loading = true;
      this.organizationService.show(+params['id']).subscribe(() => {
        this.loading = false;
      });
    });
  }

  delete() {
    this.helper.notification.confirm(
      `Delete ${this.single!.name}`,
      'Are you sure you want to delete this organization?',
      () => {
        this.loading = true;
        this.organizationService.delete(this.single!.id!).subscribe(() => {
          this.loading = false;
          this.router.navigate(['/super-admin/organizations']);
        });
      }
    );
  }
}
