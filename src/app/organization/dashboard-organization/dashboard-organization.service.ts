import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationService {
  private _title: string = 'Dashboard';
  private _type_insights_id: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;

  title$ = new BehaviorSubject<string>(this._title);
  type_insights_id$ = new BehaviorSubject<ImpactVerificationTypeInsightsEnum>(
    this._type_insights_id
  );

  set title(title: string) {
    this._title = title;
    this.title$.next(title);
  }

  set type_insights_id(type_insights_id: ImpactVerificationTypeInsightsEnum) {
    this._type_insights_id = type_insights_id;
    this.type_insights_id$.next(type_insights_id);
  }

  constructor() {}
}
