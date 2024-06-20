import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-benchmark',
  templateUrl: './dashboard-organization-benchmark.component.html',
  styleUrls: ['./dashboard-organization-benchmark.component.scss'],
})
export class DashboardOrganizationBenchmarkComponent {
  constructor(public authService: AuthService) {}
}
