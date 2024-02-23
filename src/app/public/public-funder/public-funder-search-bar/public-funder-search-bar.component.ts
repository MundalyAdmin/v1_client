import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../public-community/home/home-search-bar/home-search-bar.component';
import { OrganizationService } from '../../../organization/organization.service';
import { CountryService } from '../../../country/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-funder-search-bar',
  templateUrl: './public-funder-search-bar.component.html',
  styleUrls: ['./public-funder-search-bar.component.scss'],
})
export class PublicFunderSearchBarComponent extends HomeSearchBarComponent {
  constructor(
    public override organizationService: OrganizationService,
    public override countryService: CountryService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, countryService, route);
  }
}
