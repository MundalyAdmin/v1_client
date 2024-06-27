import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-registration',
  templateUrl: './verify-registration.component.html',
  styleUrls: ['./verify-registration.component.scss'],
})
export class VerifyRegistrationComponent extends BaseComponent<any> {
  constructor(public route: ActivatedRoute, public router: Router) {
    super();
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['token']) {
        this.authService
          .verifyRegistrationToken(params['token'])
          .subscribe(() => {
            window.location.href = '/dashboard';
          });
      }
    });
  }
}
