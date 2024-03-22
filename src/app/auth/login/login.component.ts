import { Validators } from '@angular/forms';
import { AuthService } from './../auth.service';
import { BaseCreateComponent } from './../../shared/base-component/base-create.component';
import { Component } from '@angular/core';
import { AuthenticatedUser } from '../authenticated-user.model';
import { TypeUserEnum } from '../../user/type-user.enum';
// import { User } from 'src/app/users/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends BaseCreateComponent<any> {
  constructor(public authService: AuthService) {
    super(authService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login(): void {
    // this.loading = true;
    // this.authService.login(this.form.value).subscribe({
    //   next: (response: AuthenticatedUser) => {
    //     this.loading = false;
    //     if (response) {
    //       this.router.navigate(['/dashboard']);
    //     }
    //     // if (response.type_user.id == TypeUserEnum.SUPER_ADMIN) {
    //     //   this.router.navigate(['/super-admin']);
    //     // } else if (response.type_user.id == TypeUserEnum.ADMIN_ORGANIZATION) {
    //     //   this.router.navigate(['/dashboard']);
    //     // }
    //     // this.helper.notification.alertSuccess();
    //     // this.loading = false;
    //   },
    //   error: () => {
    //     this.loading = false;
    //   },
    // });
  }
}
