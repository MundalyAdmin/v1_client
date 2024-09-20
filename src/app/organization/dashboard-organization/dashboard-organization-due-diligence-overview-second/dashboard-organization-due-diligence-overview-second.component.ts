import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitySearchResult } from 'src/app/country/city-search-result.model';
import { Country } from 'src/app/country/country.model';
import { CountryService } from 'src/app/country/country.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { BaseComponent } from 'src/app/shared/base-component';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-due-diligence-overview-second',
  templateUrl:
    './dashboard-organization-due-diligence-overview-second.component.html',
  styleUrls: [
    './dashboard-organization-due-diligence-overview-second.component.scss',
  ],
})
export class DashboardOrganizationDueDiligenceOverviewSecondComponent {
  constructor() {}
}
