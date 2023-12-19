import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '../../shared/helpers/storage/storage';

@Component({
  selector: 'app-login-redirection',
  templateUrl: './login-redirection.component.html',
  styleUrls: ['./login-redirection.component.scss'],
})
export class LoginRedirectionComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public storage: Storage,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['access-token']) {
        this.authService.me(params['access-token']).subscribe(() => {
          const redirect = this.storage.get('redirect');
          if (redirect) {
            this.storage.delete('redirect');
            this.router.navigate([redirect]);
            return;
          }

          this.router.navigate(['/']);
        });
      }
    });
  }
}
