import { Component } from '@angular/core';
import { Flowbite } from '../../../shared/decorators/flowbite.decorator';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/base-component';

@Component({
  selector: 'app-public-business-navbar',
  templateUrl: './public-business-navbar.component.html',
  styleUrls: ['./public-business-navbar.component.scss'],
})
@Flowbite()
export class PublicBusinessNavbarComponent extends BaseComponent<any> {
  constructor(public router: Router, public route: ActivatedRoute) {
    super();
  }

  override ngOnInit(): void {}

  onButtonClicked() {
    this.helper.navigation.appendFragementToUrl('searchOrganizationByName');
  }
}
