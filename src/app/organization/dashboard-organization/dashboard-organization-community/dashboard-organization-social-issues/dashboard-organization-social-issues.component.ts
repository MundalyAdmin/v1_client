import { Component, OnInit } from '@angular/core';
import { Flowbite } from '../../../../shared/decorators/flowbite.decorator';

@Component({
  selector: 'app-dashboard-organization-social-issues',
  templateUrl: './dashboard-organization-social-issues.component.html',
  styleUrls: ['./dashboard-organization-social-issues.component.scss'],
})
@Flowbite()
export class DashboardOrganizationSocialIssuesComponent implements OnInit {
  options: any;
  showChart: boolean = true;
  ngOnInit(): void {
    this.initChart();
  }

  lastYearComparison() {
    this.showChart = false;
    if (this.options.series.length > 1) {
      this.options.series.pop();
    } else {
      const data = {
        name: 'Last year',
        color: '#A6EBE3',
        data: [
          { x: 'Water', y: 232 },
          { x: 'Health', y: 113 },
          { x: 'Educational', y: 341 },
          { x: 'Employment', y: 224 },
          { x: 'Infrastructure', y: 522 },
        ],
      };

      this.options.series.push(data);
      this.initChart();
    }
  }

  initChart() {
    this.options = {
      colors: ['#0095FF', '#A6EBE3'],
      series: [
        {
          name: 'Current year',
          color: '#0095FF',
          data: [
            { x: 'Water', y: 231 },
            { x: 'Health', y: 122 },
            { x: 'Educational', y: 63 },
            { x: 'Employment', y: 421 },
            { x: 'Infrastructure', y: 122 },
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: '320px',
        fontFamily: 'Inter, sans-serif',
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          borderRadiusApplication: 'end',
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: 'Inter, sans-serif',
        },
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ['transparent'],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
      },
      fill: {
        opacity: 1,
      },
    };

    if (
      document.getElementById('column-chart') &&
      typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        document.getElementById('column-chart'),
        this.options
      );
      chart.render();
    }
  }
}
