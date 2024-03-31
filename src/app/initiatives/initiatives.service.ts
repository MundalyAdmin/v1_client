import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ImpactInitiative } from './initiatives.model';
import { BaseMockService } from '../shared/services/base-mock.service';
import { Observable, ReplaySubject, map, of, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { RightDrawerParameters } from './components/right-drawer/right-drawer-parameters.model';

@Injectable({
  providedIn: 'root',
})
export class InitiativesService extends BaseService<ImpactInitiative> {
  rightDrawerParams$ = new ReplaySubject<RightDrawerParameters>();
  constructor() {
    super('impact-initiative');
  }

  openDrawer(
    component:
      | 'create-impact-initiative-goal'
      | 'create-impact-initiative-progress-data',
    title: string
  ) {
    this.rightDrawerParams$.next({
      state: 'show',
      component,
      title,
    });
  }

  closeDrawer() {
    this.rightDrawerParams$.next({
      state: 'hide',
      component: null,
      title: null,
    });
  }

  getInitiatives(): Observable<ImpactInitiative[]> {
    return this.get();
  }

  getByOrganizationId(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/organization/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<ImpactInitiative>) => {
          this.data = response.data as ImpactInitiative[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactInitiative>) =>
            response.data as ImpactInitiative[]
        )
      );
  }

  addInitiative(initiative: ImpactInitiative): Observable<ImpactInitiative[]> {
    return this.store(initiative);
  }

  override update(
    id: number,
    elements: ImpactInitiative
  ): Observable<ImpactInitiative[]> {
    this.data[id] = elements;
    return of(this.data);
  }
}
