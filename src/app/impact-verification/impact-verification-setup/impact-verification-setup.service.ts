import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { BehaviorSubject, ReplaySubject, combineLatest, map } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { ImpactVerification } from '../impact-verification.model';
import { ImpactVerificationSetup } from './impact-verification-setup.model';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationSetupService extends BaseService<ImpactVerificationSetup> {
  private _form = new FormGroup({} as any);

  form$ = new ReplaySubject<FormGroup>(1);
  totalPrice$ = new ReplaySubject<number>(1);
  discountedPrice$ = new ReplaySubject<number>(1);

  get form() {
    return this._form;
  }

  set form(form: FormGroup) {
    this._form = form;
    this.form$.next(this._form);
  }

  updateFormSection(
    section: 'setupForm' | 'participantsForm' | 'launchForm',
    subForm: FormGroup
  ) {
    this._form.controls[section] = subForm;
    this.form$.next(this._form);
  }

  constructor() {
    super('impact-verifications/setup');
  }
}
