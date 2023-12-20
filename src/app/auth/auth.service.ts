import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '../shared/helpers/storage/storage';
import { User } from '../user/user.model';
import { TypeUserEnum } from '../user/type-user.enum';
import { environment } from '../../environments/environment';

interface LoginInformation {
  user: User;
  accessToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  public user$ = new ReplaySubject<User>(1);
  public typeUser$ = new ReplaySubject<TypeUserEnum | null>(1);

  get user(): User {
    return this.storage.get('user') as User;
  }
  get typeUser(): TypeUserEnum {
    return this.storage.get('typeUser') as TypeUserEnum;
  }
  set typeUser(typeUser: TypeUserEnum | null) {
    this.storage.set('typeUser', typeUser);
    this.typeUser$.next(typeUser);
  }

  set user(user: User) {
    if (user) {
      this.storage.set('user', user);
      this.user$.next(user);
    }
  }
  constructor(public storage: Storage, public router: Router) {
    super('auth');
  }
  // public signup(elements: User) {
  //   return this.factory.post(`auth/signup/`, elements).pipe(
  //     tap({
  //       next: (response: { data: any }) => {
  //         this.storeLoginInformation(response.data);
  //         if (response.data.typeUser == TypeUserEnum.Individual) {
  //           this.storage.delete('temp_user_info');
  //         }
  //       },
  //       error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
  //     })
  //   );
  // }
  // TODO: Ensure type safety
  public login(elements: Partial<User>) {
    return this.factory.post(`auth/login/`, elements).pipe(
      tap({
        next: ({ data }: any) => {
          this.storeLoginInformation(data);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      }),
      map((response: any) => response.user)
    );
  }

  public me(accessToken: string) {
    return this.factory
      .get(`auth/me`, { headers: { Authorization: `Bearer ${accessToken}` } })
      .pipe(
        tap({
          next: (response: ApiResponse<LoginInformation>) => {
            this.storeLoginInformation(response.data as LoginInformation);
          },
          error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
        })
      );
  }

  continueWithGoogle() {
    window.location.href = `${environment.apiUrl}/auth/google-oauth`;
  }

  clearLoginInformation() {
    this.storage.delete('user');
    this.storage.delete('typeUser');
    this.storage.delete('accessToken');
  }

  private storeLoginInformation(data: LoginInformation) {
    this.clearLoginInformation();
    this.storage.set('accessToken', data.accessToken);
    this.user = data.user;
    this.typeUser = data.user.type_user_id;
  }
  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
  public logout() {
    this.clearLoginInformation();
  }
}
