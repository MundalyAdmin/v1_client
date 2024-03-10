import { Component, OnInit } from '@angular/core';

interface DemographicGenderData {
  male: number;
  female: number;
  other: number;
}

@Component({
  selector: 'app-dashboard-organization-demographics',
  templateUrl: './dashboard-organization-demographics.component.html',
  styleUrls: ['./dashboard-organization-demographics.component.scss'],
})
export class DashboardOrganizationDemographicsComponent implements OnInit {
  demographicGenderData: DemographicGenderData | undefined;
  demographicAgeData: { name: string; value: number }[] | undefined;

  ngOnInit(): void {
    this.demographicGenderData = {
      male: 42.5,
      female: 50.5,
      other: 7,
    };

    this.demographicAgeData = [
      { name: '< 10', value: 0.5 },
      { name: '10 - 20', value: 15 },
      { name: '20 - 30', value: 25 },
      { name: '30 - 40', value: 20 },
      { name: '40 - 50', value: 10 },
      { name: '50 - 60', value: 7 },
      { name: '60 - 70', value: 2 },
      { name: '70+', value: 0 },
    ];
    this.initDemographicGenderChart(this.demographicGenderData);
  }

  initDemographicGenderChart(demographicGenderData: DemographicGenderData) {
    const getChartOptions = () => {
      return {
        series: [
          demographicGenderData.male,
          demographicGenderData.female,
          demographicGenderData.other,
        ],
        colors: ['#1C64F2', '#16BDCA', '#9061F9'],
        chart: {
          height: 420,
          width: '100%',
          type: 'pie',
        },
        stroke: {
          colors: ['white'],
          lineCap: '',
        },
        plotOptions: {
          pie: {
            labels: {
              show: true,
            },
            size: '100%',
            dataLabels: {
              offset: -25,
            },
          },
        },
        labels: ['Male', 'Female', 'Other'],
        dataLabels: {
          enabled: true,
          style: {
            fontFamily: 'Inter, sans-serif',
          },
        },
        legend: {
          position: 'bottom',
          fontFamily: 'Inter, sans-serif',
        },
        yaxis: {
          labels: {
            formatter: function (value: number) {
              return value + '%';
            },
          },
        },
        xaxis: {
          labels: {
            formatter: function (value: number) {
              return value + '%';
            },
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
      };
    };

    if (
      document.getElementById('pie-chart') &&
      typeof ApexCharts !== 'undefined'
    ) {
      const chart = new ApexCharts(
        document.getElementById('pie-chart'),
        getChartOptions()
      );
      chart.render();
    }
  }
}
