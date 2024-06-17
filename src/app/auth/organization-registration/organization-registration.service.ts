import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrganizationRegistrationService {
  private _form = new FormGroup({} as any);
  private _formData = new FormData();
  form$ = new ReplaySubject<FormGroup>(1);
  formData$ = new ReplaySubject<FormData>(1);

  get form() {
    return this._form;
  }

  get formData() {
    return this._formData;
  }

  set form(form: FormGroup) {
    this._form = form;
    this.form$.next(this._form);
  }

  // addFormDataField(field: string, value: any) {
  //   this._formData.append(field, value);
  //   this.formData$.next(this._formData);
  // }

  constructor() {}

  // fillFormData(data: any, prefix: string) {
  //   Object.keys(data).forEach((key) => {
  //     this._formData.append(prefix + '[' + key + ']', data[key]);
  //   });
  // }

  updateFormSection(
    section:
      | 'updatePasswordForm'
      | 'organizationInfoForm'
      | 'organizationDetailsForm',
    subForm: FormGroup
  ) {
    this._form.controls[section] = subForm;
    this.form$.next(this._form);
  }

  // updateFormDataSection(
  //   section: 'adminInfo' | 'organizationInfo',
  //   subForm: FormData
  // ) {
  //   this._formData.append(section, JSON.stringify(subForm));
  //   this.formData$.next(this._formData);
  // }
}
