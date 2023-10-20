import { Injectable } from '@angular/core';
import { Waitlist } from './waitlist.model';
import { BaseService } from '../shared/services';
import { CommunityWaitlist } from './community-waitlist/community-waitlist.model';
import { tap } from 'rxjs/operators';
import { BusinessWaitlist } from './business-waitlist/business-waitlist.model';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService extends BaseService<any> {
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
