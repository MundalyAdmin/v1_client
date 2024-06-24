import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { Storage } from '../../../shared/helpers/storage/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-outcomes',
  templateUrl: './dashboard-organization-impact-outcomes.component.html',
  styleUrls: ['./dashboard-organization-impact-outcomes.component.scss'],
})
export class DashboardOrganizationImpactOutcomesComponent
  extends BaseComponent<any>
  implements OnInit
{
  visible = false;
  organization: Organization | null = null;
  activeTabs: { [key: string]: boolean } = {
    strength: true,
    opportunity: false,
    weakness: false,
    threat: false,
  };

  constructor(
    public storage: Storage,
    public route: ActivatedRoute,
    public router: Router
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.authService.organization$.subscribe((organization) => {
        this.organization = organization;
      });

    this.route.fragment.subscribe((fragment) => {
      if (fragment == 'upload-report') {
        this.visible = true;
        this.router.navigate(['./'], { relativeTo: this.route });
      }
    });
  }

  toggleTab(tab: 'strength' | 'opportunity' | 'weakness' | 'threat') {
    Object.keys(this.activeTabs).forEach((key: string) => {
      this.activeTabs[key] = key === tab ? true : false;
    });
  }
}
