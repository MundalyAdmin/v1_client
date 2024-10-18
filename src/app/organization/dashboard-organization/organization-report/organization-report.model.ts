import { ImpactVerificationTypeInsights } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.model';
import { BaseModel } from '../../../shared/models/BaseModel';
import { TypeOrganizationReport } from './type-organization-report/type-organization-report.model';

export interface OrganizationReport extends BaseModel {
  name: string;

  report_url: string;

  type_organization_report_id: number;

  type_organization_report: TypeOrganizationReport;

  type_insights_id: number;

  type_insight: ImpactVerificationTypeInsights;

  organization_id: number;

  report_status: ReportStatus;
}

export enum ReportStatus {
  DONE = 'done',
  ON_PROGRESS = 'on-progress',
  NOT_STARTED = 'not-started',
}
