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
import { AuthenticatedUser } from './authenticated-user.model';
import { TypeUser } from '../user/type-user.model';
import { Organization } from '../organization/organization.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  public user$ = new ReplaySubject<User>(1);
  public typeUser$ = new ReplaySubject<TypeUser | null>(1);
  public organization$ = new ReplaySubject<Organization | null>(1);

  get user(): User {
    return this.storage.get('user') as User;
  }
  get typeUser(): TypeUser {
    return this.storage.get('typeUser') as TypeUser;
  }

  get organization(): Organization {
    return this.storage.get('organization') as TypeUser;
  }

  set typeUser(typeUser: TypeUser | null) {
    this.storage.set('typeUser', typeUser);
    this.typeUser$.next(typeUser);
  }

  set organization(organization: Organization | null) {
    this.storage.set('organization', organization);
    this.organization$.next(organization);
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
        next: ({ data }: ApiResponse<AuthenticatedUser>) => {
          this.storeLoginInformation(data as AuthenticatedUser);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      }),
      map((response: any) => response.data)
    );
  }

  private storeLoginInformation(data: AuthenticatedUser) {
    this.storage.clear();
    this.storage.set('accessToken', data.accessToken);
    this.user = data.user;
    this.typeUser = data.type_user;

    if (data.organization) this.organization = data.organization;
  }
  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
  public logout() {
    this.storage.clear();
    this.router.navigate(['/auth/login']);
  }
}
