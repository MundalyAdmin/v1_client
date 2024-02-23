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
        name: 'Tarkwa Breman Community Farm',
        startDate: new Date(),
        goals: [
          {
            name: 'Farm Expension',
            metricType: 'Total',
            metric: 'Acres',
            startValue: 10,
            target: 17,
            data: [
              {
                date: new Date(),
                data: 1.5,
                description: '',
              },
              {
                date: new Date(),
                data: 1.7,
                description: '',
              },
              {
                date: new Date(),
                data: 0.2,
                description: '',
              },
              {
                date: new Date(),
                data: 5,
                description: '',
              },
              {
                date: new Date(),
                data: 7,
                description: '',
              },
            ],
          },
          {
            name: 'Secure Fertilizer from COCOBOD',
            metricType: 'Total',
            metric: 'Bags',
            startValue: 10,
            target: 57,
            data: [
              {
                date: new Date(),
                data: 12,
                description: '',
              },
              {
                date: new Date(),
                data: 13,
                description: '',
              },
              {
                date: new Date(),
                data: 23,
                description: '',
              },
              {
                date: new Date(),
                data: 18,
                description: '',
              },
            ],
          },
        ],
      },
      {
        name: "Tarkwa Breman Girl's School",
        startDate: new Date(),
        goals: [
          {
            name: 'Free home tuition',
            metricType: 'Total',
            metric: 'Tuition Fees',
            startValue: 10,
            target: 85,
            data: [
              {
                date: new Date('2023-03-01'),
                data: 7,
                description: '',
              },
              {
                date: new Date('2023-04-01'),
                data: 15,
                description: '',
              },
              {
                date: new Date('2023-05-01'),
                data: 18,
                description: '',
              },
              {
                date: new Date('2023-06-01'),
                data: 22,
                description: '',
              },
              {
                date: new Date('2023-07-01'),
                data: 16,
                description: '',
              },
            ],
          },
          {
            name: 'Enable access to PPEs to students',
            metricType: 'Total',
            metric: 'Students',
            startValue: 10,
            target: 340,
            data: [
              {
                date: new Date('2023-03-01'),
                data: 40,
                description: '',
              },
              {
                date: new Date('2023-04-01'),
                data: 40,
                description: '',
              },
              {
                date: new Date('2023-05-01'),
                data: 60,
                description: '',
              },
              {
                date: new Date('2023-06-01'),
                data: 40,
                description: '',
              },
              {
                date: new Date('2023-07-01'),
                data: 70,
                description: '',
              },
            ],
          },
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
