import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Organization } from '../organization/organization.model';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService extends BaseService<any> {
  constructor() {
    super('');
  }

  getByOrganization(organization: Organization) {
    return of([
      {
        title: 'Impact Analysis Report',
        price: '0',
        availability: 'In 24 hours',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906913/Blue_Red_Geometric_Annual_Report_Document_A4_qdgttm.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'on-demand',
      },
      {
        title: 'Funding Diligence Report Insights',
        price: '200',
        availability: 'In 3 hours',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906913/Blue_Red_Geometric_Annual_Report_Document_A4_qdgttm.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'on-demand',
      },
      {
        title: 'Community Needs Assessment',
        price: '180',
        availability: 'In 3 hours',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906151/New_Haven_Promise_Report.pdf_2_rya0bb.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'on-demand',
      },
      {
        title: 'Impact evaluation Report',
        price: '150',
        availability: 'In 3 hours',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906913/Blue_Red_Geometric_Annual_Report_Document_A4_qdgttm.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'coming-soon',
      },
      {
        title: 'Custom community insights',
        price: '300',
        availability: 'On demand',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906151/New_Haven_Promise_Report.pdf_2_rya0bb.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'on-demand',
      },
      {
        title: 'Impact Prediction Intelligence',
        price: '100',
        availability: 'On demand',
        organization: organization.name,
        image:
          'https://res.cloudinary.com/mundaly/image/upload/v1706906151/New_Haven_Promise_Report.pdf_2_rya0bb.png',
        community: 'Bridgeport',
        generatedBy: 'auto-generated',
        state: 'on-demand',
      },
    ]).pipe(
      tap((data) => {
        this.data = data;
      })
    );
  }
}
