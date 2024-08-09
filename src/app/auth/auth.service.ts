import { ApiResponse } from './../shared/models/ApiResponse';
import { tap, map } from 'rxjs/operators';
import { Observable, ReplaySubject, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '../shared/helpers/storage/storage';
import { User } from '../user/user.model';
import { TypeUserEnum } from '../user/type-user.enum';
import { environment } from '../../environments/environment';
import { TypeUser } from '../user/type-user.model';
import { Organization } from '../organization/organization.model';
import { AuthenticatedUser } from './authenticated-user.model';
import { TypeOrganization } from '../organization/type-organization/type-organization.model';
import { ReportOrganizationStatusEnum } from '../organization/report-organization/report-organization-status.enum';

interface LoginInformation {
  user: User;
  accessToken: string;
  organization: Organization | null;
  type_user: TypeUser | null;
  impact_analysis_report_status: ReportOrganizationStatusEnum | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<any> {
  public user$ = new ReplaySubject<User | null>(1);
  public typeUser$ = new ReplaySubject<TypeUser | null>(1);
  public typeOrganization$ = new ReplaySubject<TypeOrganization | null>(1);
  public organization$ = new ReplaySubject<Organization | null>(1);

  private _user: User | null = null;
  private _userType: TypeUser | null = null;
  private _organization: Organization | null = null;
  private _organizationType: TypeOrganization | null = null;

  get user(): User | null {
    return this._user;
  }
  get typeUser(): TypeUser | null {
    return this._userType;
  }

  get typeOrganization(): TypeOrganization | null {
    return this._organizationType;
  }

  get organization(): Organization | null {
    return this._organization;
  }

  get freeImpactAnalysisReportStatus() {
    return this.storage.get('impact_analysis_report_status');
  }

  set typeOrganization(typeOrganization: TypeOrganization | null) {
    this._organizationType = typeOrganization;
    this.typeOrganization$.next(this._organizationType);
  }

  set typeUser(typeUser: TypeUser | null) {
    this._userType = typeUser;
    this.typeUser$.next(this._userType);
  }

  set organization(organization: Organization | null) {
    this._organization = organization;
    this.organization$.next(this._organization);
  }

  set user(user: User | null) {
    this._user = user;
    this.user$.next(this._user);
  }
  constructor(public storage: Storage, public router: Router) {
    super('auth');
    this.emitData();
  }

  setOrganizationInLocalStorage(organization: Organization | null) {
    this.storage.set('organization', organization);
    this.organization = organization;
  }

  getUser() {
    return this._user;
  }

  override emitData() {
    this.user = this.storage.get('user') as User;
    this.typeUser = this.storage.get('typeUser') as TypeUser;
    this.typeOrganization = this.storage.get(
      'type_organization'
    ) as TypeOrganization;
    this.organization = this.storage.get('organization') as Organization;
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
    return this.factory.post(`auth/login/email`, elements).pipe(
      tap({
        next: ({ data }: ApiResponse<AuthenticatedUser>) => {
          this.storeLoginInformation(data as AuthenticatedUser);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      }),
      map((response: any) => response.data)
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
    this.storage.delete('organization');
    this.emitData();
  }

  registerOrganization(data: any) {
    return this.factory.post(`auth/signup/organization`, data).pipe(
      tap({
        next: (response: { data: any }) => {
          this.storeLoginInformation(response.data);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      })
    );
  }

  updateOrganizationRegistration(organizationId: number, data: any) {
    return this.factory
      .patch(`auth/update-registration/organization/${organizationId}`, data)

      .pipe(
        tap({
          next: (response: { data: any }) => {
            this.storeLoginInformation(response.data);
          },
          error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
        })
      );
  }

  verifyUser(data: { user_id: number; otp: number }) {
    return this.factory.post(`auth/verify`, data).pipe(
      tap({
        next: (response: { data: any }) => {
          this.storeLoginInformation(response.data);
        },
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      })
    );
  }

  resendOtp(data: { user_id: number }) {
    return this.factory.post(`auth/resend-otp`, data).pipe(
      tap({
        next: (response: { data: any }) => {},
        error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
      })
    );
  }

  private storeLoginInformation(data: LoginInformation) {
    this.clearLoginInformation();

    this.storage.set('accessToken', data.accessToken);
    this.storage.set('user', data.user);
    if (data.organization) {
      this.storage.set('organization', data.organization);

      setTimeout(() => {}, 500);
    }

    this.user = data.user as User;
    this.typeUser = data.type_user as TypeUser;
    this.typeOrganization = data.organization
      ?.type_organization as TypeOrganization;
    this.organization = data.organization as Organization;
  }
  isLoggedIn() {
    return this.storage.getAccessToken() && this.storage.getUser();
  }
  public logout() {
    this.clearLoginInformation();
    this.router.navigate(['/auth/login']);
  }

  verifyRegistrationToken(token: string) {
    return this.factory
      .get(`auth/verify-registration-token`, { params: { token } })
      .pipe(
        tap({
          next: (response: { data: any }) => {
            this.storeLoginInformation(response.data);
          },
          error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
        })
      );
  }

  completeOrganizationRegistration(data: FormData) {
    return this.factory
      .post(`auth/complete-registration/organization`, data)
      .pipe(
        tap({
          next: (response: { data: any }) => {
            this.storage.set('organization', response.data);
            this.storage.set('user', {
              ...this.user,
            });

            this.emitData();
          },
          error: (error: HttpErrorResponse) => this.errorResponseHandler(error),
        })
      );
  }
}
