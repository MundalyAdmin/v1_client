import { Injectable } from '@angular/core';
import { Waitlist } from './waitlist.model';
import { BaseService } from '../shared/services';
import { CommunityWaitlist } from './community-waitlist/community-waitlist.model';
import { tap } from 'rxjs/operators';
import { BusinessWaitlist } from './business-waitlist/business-waitlist.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService extends BaseService<any> {
  // Allows to pass the email of the business form the hero section to the joinlist component
  private _businessEmail: string | null = null;
  public businessEmail$ = new ReplaySubject<string | null>(1);

  set businessEmail(email: string | null) {
    this._businessEmail = email;
    this.businessEmail$.next(this._businessEmail);
  }

  constructor() {
    super('waitlist');
  }

  addCommunityWaitlist(elements: CommunityWaitlist) {
    return this.factory.post(`${this.endPoint}/community`, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }

  addBusinessWaitlist(elements: BusinessWaitlist) {
    return this.factory.post(`${this.endPoint}/business`, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }
}
