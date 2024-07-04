import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, forkJoin, map, merge } from 'rxjs';
import { BaseService } from '../shared/services';

@Injectable({
  providedIn: 'root'
})
export class SetupreportService extends BaseService {
  locationAddress: BehaviorSubject<string> = new BehaviorSubject<string>("");
  level: BehaviorSubject<string> = new BehaviorSubject<string>("level1");
  respondents: BehaviorSubject<string> = new BehaviorSubject<string>("100");
  impact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  total = combineLatest([this.level, this.respondents])
  ageRange : BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{ [key: string]: boolean }>(
    { "All": false, "18-25": false, "25-34": false, "35-44": false, "45-54": false, "55-64": false, "64+": false }
  )
  ethnicities: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{ [key: string]: boolean }>(
    {
      "All": false, "Caucasian": false, "Black": false, "Hispanic": false, "Arab": false, "Asian": false, "Multiracial": false, "Others": false
    }
  )
  sexes: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{ [key: string]: boolean }>(
    {
      "All": false, "Male": false, "Female": false, "Others": false
    }
  )

  relationshipStatus: BehaviorSubject<{ [key: string]: boolean }> = new BehaviorSubject<{ [key: string]: boolean }>(
    {
      "All": false, "Single": false, "Married": false, "Divorced": false
    })

  constructor() {
    super("report/create");
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
      relationshipStatus: this.relationshipStatus.value
    })
  }
}
