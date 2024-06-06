import { BaseModel } from '../../../shared/models/BaseModel';
import { TypeOrganizationReport } from './type-organization-report/type-organization-report.model';

export interface OrganizationReport extends BaseModel {
  name: string;

  report_url: string;

  type_organization_report_id: number;

  type_organization_report: TypeOrganizationReport;

  organization_id: number;
}
