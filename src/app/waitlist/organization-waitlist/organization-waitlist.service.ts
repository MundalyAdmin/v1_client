import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { OrganizationWaitlist } from './organization-waitlist.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationWaitlistService extends BaseService<OrganizationWaitlist> {
  // Allows to pass the email of the business form the hero section to the joinlist component
  private _businessEmail: string | null = null;
  public businessEmail$ = new ReplaySubject<string | null>(1);

  set businessEmail(email: string | null) {
    this._businessEmail = email;
    this.businessEmail$.next(this._businessEmail);
  }

  constructor() {
    super('organization-waitlist');
  }
}
