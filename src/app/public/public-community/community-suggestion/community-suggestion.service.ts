import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { CommunitySuggestion } from './community-suggestion.model';

@Injectable({
  providedIn: 'root',
})
export class CommunitySuggestionService extends BaseService<CommunitySuggestion> {
  constructor() {
    super('company-suggestions');
  }
}
