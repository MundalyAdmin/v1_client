import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../users/users.model';
import { BaseMockService } from '../shared/services/base-mock.service';
// import { users } from '../mocks/users.mock';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthMockService extends BaseMockService<User> {
  signup(elements: User) {
    this.data.push(elements as User);
    return of(elements as User);
  }

  login(elements: Partial<User>) {
    const user = this.data.find(
      (item) =>
        item.email === elements.email && item.password === elements.password
    );
    return of(user as User);
  }
}
