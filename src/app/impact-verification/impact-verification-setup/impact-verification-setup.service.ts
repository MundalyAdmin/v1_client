import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { BehaviorSubject, ReplaySubject, combineLatest, map } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationSetupService extends BaseService<any> {
  private _form = new FormGroup({} as any);
  form$ = new ReplaySubject<FormGroup>(1);

  get form() {
    return this._form;
  }

  set form(form: FormGroup) {
    this._form = form;
    this.form$.next(this._form);
  }

  updateFormSection(
    section: 'communitiesForm' | 'participantsForm' | 'launchForm',
    subForm: FormGroup
  ) {
    this._form.controls[section] = subForm;
    this.form$.next(this._form);
  }

  locationAddress: BehaviorSubject<string> = new BehaviorSubject<string>('');
  level: BehaviorSubject<string> = new BehaviorSubject<string>('level1');
  respondents: BehaviorSubject<string> = new BehaviorSubject<string>('100');
  impact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  total = combineLatest([this.level, this.respondents]).pipe(
    map(([level, respondents]: [string, string]) => {
      const respondentPrices = this.priceList[respondents];
      if (respondentPrices) {
        return respondentPrices[level] || '$0.00';
      }
      return '$0.00';
    })
  );

  ageRange: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{
    [key: string]: boolean;
  }>({
    All: false,
    '18-25': false,
    '25-34': false,
    '35-44': false,
    '45-54': false,
    '55-64': false,
    '64+': false,
  });

  ethnicities: BehaviorSubject<{ [key: string]: boolean }> =
    new BehaviorSubject<{ [key: string]: boolean }>({
      All: false,
      Caucasian: false,
      Black: false,
      Hispanic: false,
      Arab: false,
      Asian: false,
      Multiracial: false,
      Others: false,
    });

  sexes: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{
    [key: string]: boolean;
  }>({
    All: false,
    Male: false,
    Female: false,
    Others: false,
  });

  relationshipStatus: BehaviorSubject<{ [key: string]: boolean }> =
    new BehaviorSubject<{ [key: string]: boolean }>({
      All: false,
      Single: false,
      Married: false,
      Divorced: false,
    });

  constructor() {
    super('impact-initiatives/setup');
  }
  submitReport() {
    this.store({
      address: this.locationAddress.value,
      level: this.level.value,
      respondents: this.respondents.value,
      impact: this.impact.value,
      ageRange: this.ageRange.value,
      ethnicities: this.ethnicities.value,
      sex: this.sexes.value,
      relationshipStatus: this.relationshipStatus.value,
    });
  }

  priceList: { [key: string]: { [key: string]: string } } = {
    '100': {
      level1: '$9,360.00',
      level2: '$,2925',
      level3: '$876',
    },
    '250': {
      level1: '$12,960',
      level2: '$4,050',
      level3: '$1,213',
    },
    '500': {
      level1: '$18,960',
      level2: '$5,925',
      level3: '$1,776',
    },
    '750': {
      level1: '$24,960',
      level2: '$7,800',
      level3: '$2,339',
    },
    '1000': {
      level1: '$30,960',
      level2: '$9,675',
      level3: '$2,902',
    },
    '1250': {
      level1: '$36,960',
      level2: '$11,550',
      level3: '$3,465',
    },
    '1500': {
      level1: '$48,960',
      level2: '$13,425',
      level3: '$4,028',
    },
    '1750': {
      level1: '$54,960',
      level2: '$15,300',
      level3: '$4,591',
    },
    '2000': {
      level1: '$60,960',
      level2: '$17,175',
      level3: '$5,154',
    },
    '>2000': {
      level1: 'contact sales',
      level2: 'contact sales',
      level3: 'contact sales',
    },
  };
}
