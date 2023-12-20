import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.scss'],
})
export class SuperAdminComponent {
  constructor(public authService: AuthService, public router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
