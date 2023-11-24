import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../organization/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunitySuggestionService } from '../../../community-suggestion/community-suggestion.service';

@Component({
  selector: 'app-organization-show-hero',
  templateUrl: './organization-show-hero.component.html',
  styleUrls: ['./organization-show-hero.component.scss'],
})
export class OrganizationShowHeroComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public communitySuggestionService: CommunitySuggestionService,
    public router: Router
  ) {
    super(organizationService, route);
  }

  takeSurvey() {
    this.communitySuggestionService.organization = this.single!;
    this.router.navigate(['/community-voice']);
  }
}
