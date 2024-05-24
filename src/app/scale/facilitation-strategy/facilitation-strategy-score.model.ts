export interface FacilitationStrategyScore {
  total_respondant: number;

  // Scaled from 0 to 5
  score_rating: number;

  // Scaled from 0 to 100
  score: number;
  leaves_and_benefits: number;
  diversity_equity_and_inclusion: number;
  safety_and_wellbeing: number;
  work_life_balance: number;
  growth_and_recognition: number;
  support_and_control: number;
}
