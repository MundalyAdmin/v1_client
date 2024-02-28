import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  activeTabs: { [key: string]: boolean } = {
    communityMember: false,
    organization: true,
  };

  constructor() {}

  toggleTab(tab: 'communityMember' | 'organization') {
    Object.keys(this.activeTabs).forEach((key: string) => {
      this.activeTabs[key] = key === tab ? true : false;
    });
  }
}
