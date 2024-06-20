export interface RightDrawerParameters {
  state: 'show' | 'hide';
  component:
    | 'create-impact-initiative-goal'
    | 'create-impact-initiative-progress-data'
    | null;
  title: string | null;
}
