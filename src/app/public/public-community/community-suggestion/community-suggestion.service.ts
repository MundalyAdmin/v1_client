import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { CommunitySuggestion } from './community-suggestion.model';
import { Company } from '../../../companies/companies.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunitySuggestionService extends BaseService<CommunitySuggestion> {
  private _company: Company | null = null;
  company$ = new ReplaySubject<Company>(1);

  get company() {
    return this._company;
  }

  set company(company: Company | null) {
    this._company = company;
    if (this._company) this.company$.next(this._company);
  }
  constructor() {
    super('community-suggestions');
  }
}
