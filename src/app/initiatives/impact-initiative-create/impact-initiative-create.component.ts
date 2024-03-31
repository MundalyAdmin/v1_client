import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { ImpactInitiative } from '../initiatives.model';
import { InitiativesService } from '../initiatives.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Organization } from '../../organization/organization.model';

@Component({
  selector: 'app-impact-initiative-create',
  templateUrl: './impact-initiative-create.component.html',
  styleUrls: ['./impact-initiative-create.component.scss'],
})
export class ImpactInitiativeCreateComponent
  extends BaseCreateComponent<ImpactInitiative>
  implements OnInit
{
  organization: Organization | null = null;
  constructor(
    public impactInitiativeService: InitiativesService,
    public authService: AuthService
  ) {
    super(impactInitiativeService);
  }

  ngOnInit(): void {
    this.subscriptions['authenticatedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) this.initForm(organization.id!);
        this.organization = organization;
      });
  }

  initForm(organizationId: number) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      start_date: [new Date(), Validators.required],
      end_date: [new Date()],
      country: ['', Validators.required],
      city: ['', Validators.required],
      description: ['', Validators.required],
      organization_id: [organizationId, Validators.required],
    });
  }

  override closeModal() {
    this.initForm(this.organization?.id!);

    this.created.emit();
  }

  override create(): void {
    if (this.form.valid) {
      this.loading = true;
      this.impactInitiativeService.store(this.form.value).subscribe({
        next: () => {
          this.loading = false;

          this.helper.notification.toastSuccess();

          this.closeModal();
        },
        error: () => {
          this.loading = false;
        },
      });
    } else {
      this.helper.notification.toastDanger('Form invalid');
    }
  }
}
