import { Component, Input } from '@angular/core';
import { Company } from '../../../companies/companies.model';

@Component({
  selector: 'app-company-solo',
  templateUrl: './company-solo.component.html',
  styleUrls: ['./company-solo.component.scss'],
})
export class CompanySoloComponent {
  // required input

  @Input() company: Company | null = null;
}
