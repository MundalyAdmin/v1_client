import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { OrganizationService } from '../organization/organization.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService extends BaseService<any> {
  constructor(public organizationService: OrganizationService) {
    super('');

    this.organizationService.singleData$.subscribe((organization) => {
      if (organization) {
        this.data = [
          {
            title: 'Community Health Needs Assessment Report ',
            price: '640',
            availability: 'In 3 hours',
            organization: organization.name,
            image:
              'https://res.cloudinary.com/mundaly/image/upload/v1706906913/Blue_Red_Geometric_Annual_Report_Document_A4_qdgttm.png',
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'on-demand',
          },
          {
            title: 'Community Health Improvement Plans (CHIP)',
            price: '590',
            availability: 'In 3 hours',
            organization: organization.name,
            image:
              'https://res.cloudinary.com/mundaly/image/upload/v1706906151/New_Haven_Promise_Report.pdf_2_rya0bb.png',
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'on-demand',
          },
          {
            title: 'Communities Urgent Issues Report',
            price: '500',
            availability: 'In 30 minutes',
            organization: organization.name,
            image:
              'https://res.cloudinary.com/mundaly/image/upload/v1706906913/Blue_Red_Geometric_Annual_Report_Document_A4_qdgttm.png',
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'coming-soon',
          },
          {
            title: 'Community Diligence Report',
            price: '0',
            availability: 'On demand',
            organization: organization.name,
            image:
              'https://res.cloudinary.com/mundaly/image/upload/v1706906151/New_Haven_Promise_Report.pdf_2_rya0bb.png',
            community: 'Bridgeport',
            generatedBy: 'auto-generated',
            state: 'on-demand',
          },
        ];
      }
    });
  }
}
