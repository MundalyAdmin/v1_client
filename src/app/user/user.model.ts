import { BaseModel } from '../shared/models/BaseModel';
import { TypeUserEnum } from './type-user.enum';
import { TypeUser } from './type-user.model';

export interface User extends BaseModel {
  name: string | null;

  username: string | null;

  email: string | null;

  password: string | null;

  phone_number: string | null;

  type_user_id: TypeUserEnum;

  typeUser: TypeUser | null;

  auth_method: 'local' | 'google' | 'linkedin';
}
