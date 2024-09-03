import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../shared/base-component';
import { PortfolioOverallSnapshot } from '../../../scale/models/portfolio-overall-snapshot.model';
import { ScaleService } from '../../../scale/scale.service';

@Component({
  selector: 'app-dashboard-organization-overview-portfolio-overall-snapshot',
  templateUrl:
    './dashboard-organization-overview-portfolio-overall-snapshot.component.html',
  styleUrls: [
    './dashboard-organization-overview-portfolio-overall-snapshot.component.scss',
  ],
})
export class DashboardOrganizationOverviewPortfolioOverallSnapshotComponent extends BaseSingleComponent<PortfolioOverallSnapshot> {
  constructor(public scaleService: ScaleService) {
    super(scaleService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.getPortfolioOverallSnapshot();
  }

  getPortfolioOverallSnapshot() {
    this.loading = true;
    this.scaleService
      .getPortfolioOverallSnapshotByFunderId(
        this.currentLoggedInOrganization?.id!
      )
      .subscribe((response: PortfolioOverallSnapshot) => {
        this.single = response;
        this.loading = false;
      });
  }
}
