import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  activeTabs: { [key: string]: boolean } = {
    communityMember: false,
    organization: true,
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  constructor() {}

  toggleTab(tab: 'communityMember' | 'organization') {
    Object.keys(this.activeTabs).forEach((key: string) => {
      this.activeTabs[key] = key === tab ? true : false;
    });
  }
}
