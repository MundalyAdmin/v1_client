export interface FacilitationStrategyScore {
  total_respondant: number;

  // Scaled from 0 to 5
  score_rating: number;

  // Scaled from 0 to 100
  score: number;
  leaves_and_benefits: number;
  diversity_equity_and_inclusion: number;
  health_and_wellbeing: number;
  no_bribery_and_financial_embezzlement: number;
  no_criminal_and_assault_concerns: number;
  environmental_issues: number;
}
