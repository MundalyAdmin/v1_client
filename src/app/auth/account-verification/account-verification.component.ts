import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { AuthService } from '../auth.service';
import { Validators } from '@angular/forms';
import { AuthenticatedUser } from '../authenticated-user.model';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-account-verification',
  templateUrl: './account-verification.component.html',
  styleUrls: ['./account-verification.component.scss'],
})
export class AccountVerificationComponent
  extends BaseCreateComponent<any>
  implements AfterViewInit
{
  allowCodeResend = false;
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

  constructor(public authService: AuthService) {
    super(authService);
  }

  override ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.countdown.begin();
    this.setCountdownTimer();
  }

  initForm() {
    this.form = this.fb.group({
      otp: [null, Validators.required],
      user_id: [this.authService.user?.id, Validators.required],
    });
  }

  // countdown timer
  setCountdownTimer(timeInMs: number = 30000, restart = false) {
    this.allowCodeResend = false;
    setTimeout(() => {
      this.allowCodeResend = true;
    }, timeInMs);
  }

  resendOtp() {
    this.loading = true;
    this.authService
      .resendOtp({ user_id: this.formValue('user_id') })
      .subscribe({
        next: (response: any) => {
          this.loading = false;
          this.helper.notification.alertSuccess(
            'Verification sent successfully'
          );

          this.setCountdownTimer(30000, true);
        },
        error: () => {
          this.loading = false;
          this.helper.notification.alertDanger(
            'Error while sending Verification'
          );
        },
      });
  }

  verify(): void {
    this.loading = true;
    this.authService.verifyUser(this.form.value).subscribe({
      next: (response: any) => {
        this.loading = false;

        this.helper.notification.toastSuccess('Welcome to Mundaly');
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
      complete: () => {
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
    });
  }
}
