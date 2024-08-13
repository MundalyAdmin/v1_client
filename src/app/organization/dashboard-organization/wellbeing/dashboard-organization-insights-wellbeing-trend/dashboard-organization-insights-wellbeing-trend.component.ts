import { Component } from '@angular/core';
import { DashboardOrganizationInsightsScalesTrendComponent } from '../../dashboard-organization-insights/dashboard-organization-insights-scales-trend/dashboard-organization-insights-scales-trend.component';

@Component({
  selector: 'app-dashboard-organization-insights-wellbeing-trend',
  templateUrl:
    './dashboard-organization-insights-wellbeing-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-wellbeing-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsWellbeingTrendComponent extends DashboardOrganizationInsightsScalesTrendComponent {
  override getChartDataSets() {
    const trends = [
      {
        name: 'Physical Health',
        data: this.impactFidelityTrend,
        color: this.helper.color.getPredictableColor(0),
      },
      {
        name: 'Psychological Health',
        data: this.communityPerceptionTrend,
        color: this.helper.color.getPredictableColor(5),
      },
      {
        name: 'Social Relations',
        data: this.facilitationStrategyTrend,
        color: this.helper.color.getPredictableColor(2),
      },
      {
        name: 'Environmental Conditions',
        data: this.facilitationStrategyTrend.map((data) => ({
          ...data,
          date: data.date,
          score: data.score + 2,
        })),
        color: this.helper.color.getPredictableColor(4),
      },
    ];

    const datasets: any[] = [];

    trends.forEach((trend) => {
      if (trend.data.length) {
        const dataset = this.createChartDataSet(
          trend.name,
          trend.color,
          trend.data
        );

        datasets.push(dataset);
      }
    });

    return datasets;
  }
}
