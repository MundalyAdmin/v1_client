import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { WellbeingScoring } from './wellbeing-scoring.model';
import { ReplaySubject, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { BaseScaleService } from '../scale/base-scale.service';
import { AuthService } from '../auth/auth.service';
import { CategoryOrganizationEnum } from '../organization/category-organization/category-organization.enum';

@Injectable({
  providedIn: 'root',
})
export class WellbeingScoringService extends BaseScaleService<WellbeingScoring> {
  constructor(public authService: AuthService) {
    super('wellbeing-scoring');
  }

  getRecommendation(wellbeingScoring: WellbeingScoring) {
    const totalRespondants = wellbeingScoring?.total_respondants;
    const trustScore = wellbeingScoring?.score;

    if (totalRespondants! < 5) {
      return 'Insufficient data for a recommendation';
    }

    if (trustScore) {
      if (trustScore <= 55) {
        return `Poor Wellbeing Status, Action Needed`;
      } else if (trustScore > 55 && trustScore <= 67) {
        return `Poor to Moderate Wellbeing Status, Action Needed`;
      } else if (trustScore > 68 && trustScore <= 77) {
        return `Moderate Wellbeing Status, Need More Insights`;
      } else if (trustScore > 78 && trustScore <= 88) {
        return `Moderate to High Wellbeing Status, No Action`;
      } else {
        return `High Wellbeing Status, No Action`;
      }
    }

    return '';
  }
}
