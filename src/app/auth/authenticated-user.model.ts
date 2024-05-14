import { Organization } from '../organization/organization.model';
import { ReportOrganizationStatusEnum } from '../organization/report-organization/report-organization-status.enum';
import { TypeUser } from '../user/type-user.model';
import { User } from '../user/user.model';

export interface AuthenticatedUser {
  user: User;
  type_user: TypeUser;
  organization: Organization | null;
  accessToken: string;
  impact_analysis_report_status: ReportOrganizationStatusEnum | null;
}
