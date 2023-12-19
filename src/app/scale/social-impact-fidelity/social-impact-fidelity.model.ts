export interface SocialImpactFidelity {
  // comment: 'Id of the organization which the survey is about',

  organization_id: number;

  // comment: 'Id of the submission associated with the survey',

  survey_submission_id: number;

  // comment: 'Question: I welcome [Organization X’s] Intervention',

  intervention_welcome: number;

  // comment: 'Question: The Intervention appeals to me, and I will participate if necessary.',

  intervention_participation: number;

  // comment: 'Question: The Intervention seems suitable for the problem.',

  intervention_fit: number;

  // comment: 'Question: The Intervention doesn’t seem like a good match for our context.',

  intervention_match: number;

  // comment: 'Question: The Intervention Plan seems possible.',

  intervention_plan_possibility: number;

  // comment: 'Question: The Intervention Plan seems difficult to do.',

  intervention_plan_difficulty: number;

  // comment: 'Question: The intervention plan seems straightforward and easily understood. ',

  intervention_understanding: number;

  // comment: 'Question: The intervention provides social impact to those who need them.',

  intervention_social_impact: number;

  // comment: 'Question: The intervention harms people for whom the impact is intended.',

  intervention_harm: number;

  // comment: 'Question: The intervention achieves an impact that provides the full range of opportunities for children, adolescents and adults.',

  intervention_opportunities: number;

  // comment: 'Question: The intervention maximizes the benefit of available resources and avoids waste.',

  intervention_benefits: number;

  // comment: 'Question: what’s the name of your community?',

  community_name: string;

  score: number;
}
