import { BaseModel } from '../shared/models/BaseModel';

export interface Country extends BaseModel {
  id?: number;
  name?: string;
  code?: string;
}
