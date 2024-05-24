export interface CommunityPerceptionIndexScore {
  total_respondant?: number;

  // Scaled from 0 to 5
  score_rating?: number;

  // Scaled from 0 to 100
  score?: number;
  communication: number;
  contribution_and_impact: number;
  consideration_of_context: number;
  vision_alignment: number;
}
