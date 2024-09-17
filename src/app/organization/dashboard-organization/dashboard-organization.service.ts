import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationService {
  private _title: string = 'Dashboard';
  private _typeInsightId: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;

  title$ = new BehaviorSubject<string>(this._title);
  typeInsight$ = new BehaviorSubject<ImpactVerificationTypeInsightsEnum>(
    this._typeInsightId
  );

  set title(title: string) {
    this._title = title;
    this.title$.next(title);
  }

  set typeInsightId(type_insights_id: ImpactVerificationTypeInsightsEnum) {
    this._typeInsightId = type_insights_id;
    this.typeInsight$.next(type_insights_id);
  }

  constructor() {}
}
