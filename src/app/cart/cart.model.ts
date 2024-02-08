import { Organization } from '../organization/organization.model';
import { ReportDemographic } from './report-demographic/report-demographic.model';

export interface CartItem {
  title: string;
  price: number;
  availability: string;
  organization: string;
  state: string;
  community?: string;
  generatedBy?: string;
  demographic?: ReportDemographic;
  research_partners: Organization[];
}
