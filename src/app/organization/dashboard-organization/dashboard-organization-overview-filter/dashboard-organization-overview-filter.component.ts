import { Component } from '@angular/core';
import { Organization } from '../../organization.model';
import { Country } from 'src/app/country/country.model';
import { CitySearchResult } from 'src/app/country/city-search-result.model';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { CountryService } from 'src/app/country/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/base-component';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

interface SelectedFilters {
  'verified-organization': Organization | null;
  country: Country | null;
  community: CitySearchResult | null;
}

interface Filter {
  'verified-organization': Organization[];
  country: Country[];
  community: CitySearchResult[];
}
@Component({
  selector: 'app-dashboard-organization-overview-filter',
  templateUrl: './dashboard-organization-overview-filter.component.html',
  styleUrls: ['./dashboard-organization-overview-filter.component.scss'],
})
export class DashboardOrganizationOverviewFilterComponent extends BaseComponent<any> {
  typeInsightId: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;

  filterLoading = {
    'verified-organization': false,
    country: false,
    community: false,
  };

  filters: Filter = {
    'verified-organization': [],
    country: [],
    community: [],
  };

  selectedFilters: SelectedFilters = {
    'verified-organization': null,
    country: null,
    community: null,
  };

  constructor(
    private organizationService: OrganizationService,
    private readonly dashboardOrganizationService: DashboardOrganizationService,
    private countryService: CountryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.subscribeToTypeInsight();
  }

  navigateWithFilterQueryParams(
    filterName: keyof SelectedFilters,
    filterValue: any
  ) {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        [filterName]: filterValue,
      },
      queryParamsHandling: 'merge',
    });
  }

  getVerifiedOrganizations(funderId: number, callback?: () => void) {
    if (this.filters['verified-organization'].length === 0) {
      this.filterLoading['verified-organization'] = true;
      this.organizationService
        .getVerifiedOrganizationsByFunderAndTypeInsight(
          funderId,
          this.typeInsightId
        )
        .subscribe((res) => {
          this.filters['verified-organization'] = res as Organization[];
          this.filterLoading['verified-organization'] = false;

          if (callback) {
            callback();
          }
        });
    }
  }

  getCountries(funderId: number, callback?: () => void) {
    if (this.filters.country.length === 0) {
      this.filterLoading.country = true;
      this.countryService
        .getCountriesByFunderIdAndTypeInsightId(funderId, this.typeInsightId)
        .subscribe((res) => {
          this.filters.country = res as Country[];
          this.filterLoading.country = false;
          if (callback) {
            callback();
          }
        });
    }
  }

  getCommunities(funderId: number, callback?: () => void) {
    if (this.filters.community.length === 0) {
      this.filterLoading.community = true;
      this.countryService
        .getCitiesByFunderIdAndTypeInsightId(funderId, this.typeInsightId)
        .subscribe((res) => {
          this.filters.community = res as CitySearchResult[];
          this.filterLoading.community = false;

          if (callback) {
            callback();
          }
        });
    }
  }

  subscribeToTypeInsight() {
    this.subscriptions['typeInsightId'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsightId) => {
          this.typeInsightId = typeInsightId;
          this.route.queryParams.subscribe((params) => {
            if (params['country']) {
              this.getCountries(this.currentLoggedInOrganization?.id!, () => {
                this.selectedFilters.country = this.filters.country.find(
                  (country) => country.name === params['country']
                ) as Country;
              });
            }
            if (params['community']) {
              this.getCommunities(this.currentLoggedInOrganization?.id!, () => {
                this.selectedFilters.community = this.filters.community.find(
                  (community) => community.name === params['community']
                ) as CitySearchResult;
              });
            }

            if (params['verified-organization']) {
              this.getVerifiedOrganizations(
                this.currentLoggedInOrganization?.id!,
                () => {
                  this.selectedFilters['verified-organization'] = this.filters[
                    'verified-organization'
                  ].find(
                    (organization) =>
                      organization.id ===
                      parseInt(params['verified-organization'])
                  ) as Organization;
                }
              );
            }
          });
        }
      );
  }
}
