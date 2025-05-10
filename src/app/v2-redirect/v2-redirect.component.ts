import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-v2-redirect',
  templateUrl: './v2-redirect.component.html',
  styleUrls: ['./v2-redirect.component.scss'],
})
export class V2RedirectComponent implements OnInit {
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.authService.me(params['token']).subscribe({
        next: (res) => {
          window.location.href = '/dashboard';
        },
        error: (err) => {
          this.router.navigate(['/auth/login']);
        },
      });
    });
  }
}
