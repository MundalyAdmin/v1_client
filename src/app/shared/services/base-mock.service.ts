import { Inject, Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Params } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseMockService<T = any> extends BaseService<T> {
  constructor(@Inject('mockData') public mockData: T[]) {
    super('');
    this.data = mockData;
  }

  override get(
    options: { emitData: boolean; params?: Params } = { emitData: true }
  ) {
    return of(this.data);
  }

  override store(elements: object) {
    this.data.push(elements as T);
    return of(this.data);
  }

  override update(id: number, elements: object) {
    //@ts-expect-error
    const index = this.data.findIndex((item) => item.id === id);
    this.data[index] = elements as T;
    return of(this.data);
  }
}
