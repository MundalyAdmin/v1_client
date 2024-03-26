import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { InitiativeImpact } from './initiatives.model';
import { BaseMockService } from '../shared/services/base-mock.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitiativesService extends BaseMockService<InitiativeImpact> {
  constructor() {
    super([
      {
        name: 'Establishing the new Communities and Social Performance mode',
        startDate: new Date(),
        goals: [
          // {
          //   name: 'Onboard Communities and Social Performance professionals',
          //   metricType: 'Total',
          //   metric: 'csps ',
          //   startValue: 250,
          //   target: 500,
          //   data: [
          //     {
          //       date: new Date('2023-01-01'),
          //       data: 88,
          //       description: '',
          //     },
          //     {
          //       date: new Date('2023-02-01'),
          //       data: 64,
          //       description: '',
          //     },
          //     {
          //       date: new Date('2023-03-01'),
          //       data: 122,
          //       description: '',
          //     },
          //     {
          //       date: new Date('2023-04-01'),
          //       data: 88,
          //       description: '',
          //     },
          //     {
          //       date: new Date('2023-05-01'),
          //       data: 128,
          //       description: '',
          //     },
          //   ],
          // },
          // {
          //   name: 'Secure Fertilizer from COCOBOD',
          //   metricType: 'Total',
          //   metric: 'Bags',
          //   startValue: 10,
          //   target: 57,
          //   data: [
          //     {
          //       date: new Date(),
          //       data: 12,
          //       description: '',
          //     },
          //     {
          //       date: new Date(),
          //       data: 13,
          //       description: '',
          //     },
          //     {
          //       date: new Date(),
          //       data: 23,
          //       description: '',
          //     },
          //     {
          //       date: new Date(),
          //       data: 18,
          //       description: '',
          //     },
          //   ],
          // },
        ],
      },
      {
        name: ' Reducing barriers and increasing Indigenous employment',
        startDate: new Date(),
        goals: [
          // {
          //   name: 'Indigenous business development Investments',
          //   metricType: 'Total',
          //   metric: 'millions USD',
          //   startValue: 0,
          //   target: 50,
          //   data: [
          //     // {
          //     //   date: new Date('2023-03-01'),
          //     //   data: 7,
          //     //   description: '',
          //     // },
          //     // {
          //     //   date: new Date('2023-04-01'),
          //     //   data: 9,
          //     //   description: '',
          //     // },
          //     // {
          //     //   date: new Date('2023-05-01'),
          //     //   data: 9,
          //     //   description: '',
          //     // },
          //     // {
          //     //   date: new Date('2023-06-01'),
          //     //   data: 7,
          //     //   description: '',
          //     // },
          //     // {
          //     //   date: new Date('2023-07-01'),
          //     //   data: 15,
          //     //   description: '',
          //     // },
          //   ],
          // },
        ],
      },
    ]);
  }

  getInitiatives(): Observable<InitiativeImpact[]> {
    return this.get();
  }

  addInitiative(initiative: InitiativeImpact): Observable<InitiativeImpact[]> {
    return this.store(initiative);
  }

  override update(
    id: number,
    elements: InitiativeImpact
  ): Observable<InitiativeImpact[]> {
    this.data[id] = elements;
    return of(this.data);
  }
}
