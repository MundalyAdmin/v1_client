import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../../../organization/organization.model';

@Component({
  selector: 'app-organization-solo',
  templateUrl: './organization-solo.component.html',
  styleUrls: ['./organization-solo.component.scss'],
})
export class OrganizationSoloComponent implements OnInit {
  // required input
  @Input() detailsLink: string | null = null;

  @Input() organization: Organization | null = null;

  ngOnInit(): void {
    if (!this.detailsLink && this.organization)
      this.detailsLink = `organizations/${this.organization?.id}`;
  }
}
