export interface BaseScaleScore {
  total_respondants?: number;

  // Scaled from 0 to 5
  score_rating?: number;

  // Scaled from 0 to 100
  score?: number;
}
