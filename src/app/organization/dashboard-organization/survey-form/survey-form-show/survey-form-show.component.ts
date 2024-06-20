import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../../shared/base-component';
import { SurveyForm } from '../survey-form.model';
import { SurveyFormService } from '../survey-form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from '../../../organization.service';
import { Organization } from '../../../organization.model';

@Component({
  selector: 'app-survey-form-show',
  templateUrl: './survey-form-show.component.html',
  styleUrls: ['./survey-form-show.component.scss'],
})
export class SurveyFormShowComponent extends BaseSingleComponent<SurveyForm> {
  organization: Organization | null = null;
  constructor(
    public surveyFormService: SurveyFormService,
    public override route: ActivatedRoute,
    public organizationService: OrganizationService,
    public router: Router
  ) {
    super(surveyFormService);
  }

  override ngOnInit(): void {
    if (!this.organizationService.singleData)
      this.router.navigate(['..'], { relativeTo: this.route });

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.organization = organization;
      });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.loading = true;
        this.surveyFormService.show(+params['id']).subscribe((response) => {
          this.single = response;
          this.loading = false;
        });
      }
    });
  }
}
