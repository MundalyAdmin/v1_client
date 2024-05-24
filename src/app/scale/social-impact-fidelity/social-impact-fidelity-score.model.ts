export interface SocialImpactFidelityScore {
  total_respondant?: number;

  // Scaled from 0 to 5
  score_rating?: number;
  company_reported_impact_strength?: number;
  score?: number;

  // Scaled from 0 to 100
  acceptability?: number;
  appropriateness?: number;
  comprehensiveness?: number;
  feasibility?: number;
  quality_of_delivery?: number;
}
