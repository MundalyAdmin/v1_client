import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization-swot',
  templateUrl: './dashboard-organization-swot.component.html',
  styleUrls: ['./dashboard-organization-swot.component.scss'],
})
export class DashboardOrganizationSwotComponent {
  activeTabs: { [key: string]: boolean } = {
    strength: true,
    opportunity: false,
    weakness: false,
    threat: false,
  };

  toggleTab(tab: 'strength' | 'opportunity' | 'weakness' | 'threat') {
    Object.keys(this.activeTabs).forEach((key: string) => {
      this.activeTabs[key] = key === tab ? true : false;
    });
  }
}
