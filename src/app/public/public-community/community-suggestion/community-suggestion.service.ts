import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { CommunitySuggestion } from './community-suggestion.model';
import { Organization } from '../../../organization/organization.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunitySuggestionService extends BaseService<CommunitySuggestion> {
  private _organization: Organization | null = null;
  organization$ = new ReplaySubject<Organization>(1);

  get organization() {
    return this._organization;
  }

  set organization(organization: Organization | null) {
    this._organization = organization;
    if (this._organization) this.organization$.next(this._organization);
  }
  constructor() {
    super('community-suggestions');
  }
}
