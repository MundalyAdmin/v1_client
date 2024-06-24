import { AfterViewInit, Component } from '@angular/core';
import { SuperAdminOrganizationCreateComponent } from '../super-admin-organization-create/super-admin-organization-create.component';
import { OrganizationService } from '../../../organization/organization.service';
import { TypeOrganizationService } from '../../../organization/type-organization/type-organization.service';
import { SectorOrganizationService } from '../../../organization/sector-organization/sector-organization.service';
import { TagOrganizationService } from '../../../organization/tag-organization/tag-organization.service';
import { CountryService } from '../../../country/country.service';
import { AuthService } from '../../../auth/auth.service';
import { Organization } from '../../../organization/organization.model';
import { TagOrganization } from '../../../organization/tag-organization/tag-organization.model';

@Component({
  selector: 'app-super-admin-organization-edit',
  templateUrl: './super-admin-organization-edit.component.html',
  styleUrls: ['./super-admin-organization-edit.component.scss'],
})
export class SuperAdminOrganizationEditComponent extends SuperAdminOrganizationCreateComponent {
  organization: Organization | null = null;

  constructor(
    public override organizationService: OrganizationService,
    public override typeOrganizationService: TypeOrganizationService,
    public override sectorOrganizationService: SectorOrganizationService,
    public override tagService: TagOrganizationService,
    public override countryService: CountryService
  ) {
    super(
      organizationService,
      typeOrganizationService,
      sectorOrganizationService,
      tagService,
      countryService
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.initForm(organization);

          // Reload the form because of of the library ng-multiselect-dropdown
          // is not updating the formControl value
          this.organization = null;
          setTimeout(() => {
            this.organization = organization;
          }, 1);
        }
      });
  }

  edit() {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Form Invalid');
      return;
    }

    this.loading = true;

    const {
      type_organization,
      sector_organization,
      country,
      city,
      tag_organizations,
      ...formData
    } = this.form.value;

    const data = {
      ...formData,
      type_organization_id: type_organization[0].id,
      sector_organization_id: sector_organization[0].id,
      country: country[0].name,
      city: city[0],
      tag_organizations: tag_organizations.map(
        (tag: TagOrganization) => tag.name
      ),
    };

    this.fillFormData(data);
    this.organizationService
      .update(this.organization?.id!, this.formData)
      .subscribe({
        next: () => {
          this.loading = false;
          this.helper.notification.alertSuccess();
          this.formData = new FormData();
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
