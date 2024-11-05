import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationService {
  private _title: string = 'Dashboard';
  private _typeInsightId: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;
  requestedVerificationRequests$ = new ReplaySubject<number>(1);
  receivedVerificationRequests$ = new ReplaySubject<number>(1);

  title$ = new BehaviorSubject<string>(this._title);
  typeInsight$ = new BehaviorSubject<ImpactVerificationTypeInsightsEnum>(
    this._typeInsightId
  );

  set title(title: string) {
    if (this._title !== title) {
      this._title = title;
      this.title$.next(this._title);
    }
  }

  set typeInsightId(type_insights_id: ImpactVerificationTypeInsightsEnum) {
    if (this._typeInsightId !== type_insights_id) {
      this._typeInsightId = type_insights_id;
      this.typeInsight$.next(this._typeInsightId);
    }
  }

  constructor() {}
}
