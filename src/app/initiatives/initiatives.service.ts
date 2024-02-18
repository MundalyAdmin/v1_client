import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { InitiativeImpact } from './initiatives.model';
import { BaseMockService } from '../shared/services/base-mock.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitiativesService extends BaseMockService<InitiativeImpact> {

  constructor() {
    super([{
      name: "Goal Initiative",
      startDate: new Date(),
      goals: [{
        name: "Oshine Goal",
        metricType: "Total",
        metric: "100",
        target: 1000,
        data:[]
      }]
    }
    ])
  }

  getInitiatives() : Observable<InitiativeImpact[]>{
    return this.get();
  }

  addInitiative(initiative: InitiativeImpact) : Observable<InitiativeImpact[]> {
    return this.store(initiative)
  }

  override update(id: number, elements: InitiativeImpact): Observable<InitiativeImpact[]> {
    this.data[id] = elements;
    return of(this.data)
  }
}
