import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { CommunitySuggestionService } from './community-suggestion.service';
import { CommunitySuggestion } from './community-suggestion.model';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Organization } from '../../../organization/organization.model';

@Component({
  selector: 'app-community-suggestion',
  templateUrl: './community-suggestion.component.html',
  styleUrls: ['./community-suggestion.component.scss'],
})
export class CommunitySuggestionComponent extends BaseCreateComponent<CommunitySuggestion> {
  organization: Organization | null = null;
  constructor(
    public communitySuggestionService: CommunitySuggestionService,
    public route: ActivatedRoute
  ) {
    super(communitySuggestionService);
  }

  ngOnInit(): void {
    this.initForm();
    if (this.communitySuggestionService.organization) {
      this.subscriptions['organization'] =
        this.communitySuggestionService.organization$.subscribe(
          (organization) => {
            if (organization) {
              this.organization = organization;
              this.formValuePatcher('organization_name', organization.name!);
              this.formValuePatcher(
                'organization_website',
                organization.website!
              );
            }
          }
        );
    }
  }

  initForm() {
    this.form = this.fb.group({
      community_member_email: ['', Validators.required],
      organization_name: ['', Validators.required],
      organization_website: ['', Validators.required],
    });
  }

  override create() {
    this.loading = true;
    this.communitySuggestionService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess(
          'Organization suggestion successfully registered'
        );
        this.router.navigate(['thank-you'], { relativeTo: this.route });
        this.initForm();
      },
      error: () => {
        this.loading = false;
        this.helper.notification.alertDanger();
      },
    });
  }
}
