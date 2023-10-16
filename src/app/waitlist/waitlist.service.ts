import { Injectable } from '@angular/core';
import { Waitlist } from './waitlist.model';
import { BaseService } from '../shared/services';

@Injectable({
  providedIn: 'root',
})
export class WaitlistService extends BaseService<Waitlist> {
  constructor() {
    super('waitlist');
  }
}
