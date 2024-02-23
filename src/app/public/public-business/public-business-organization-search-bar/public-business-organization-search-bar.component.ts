import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../public-community/home/home-search-bar/home-search-bar.component';
import { PublicBusinessCheckCommunityReviewsComponent } from '../public-business-home/public-business-check-community-reviews/public-business-check-community-reviews.component';
import { OrganizationService } from '../../../organization/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-public-business-organization-search-bar',
  templateUrl: './public-business-organization-search-bar.component.html',
  styleUrls: ['./public-business-organization-search-bar.component.scss'],
})
export class PublicBusinessOrganizationSearchBarComponent extends PublicBusinessCheckCommunityReviewsComponent {
  constructor(
    public override organizationService: OrganizationService,
    public override router: Router,
    public override fb: FormBuilder,
    public override route: ActivatedRoute
  ) {
    super(organizationService, router, fb, route);
    this.resultsUrl = './';
  }
}
