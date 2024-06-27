import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationService {
  private _title: string = 'Dashboard';
  title$ = new BehaviorSubject<string>(this._title);

  set title(title: string) {
    this._title = title;
    this.title$.next(title);
  }

  constructor() {}
}
