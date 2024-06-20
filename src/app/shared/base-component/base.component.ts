import { AppInjector } from './../services/app-injector.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BaseService } from '../services/base.service';
import { Helper } from '../helpers/helper/helper';

interface Subscriptions {
  [k: string]: Subscription;
}

@Component({
  selector: '',
  template: '',
  styles: [],
})
export abstract class BaseComponent<T> implements OnDestroy, OnInit {
  public loading = false;
  public data: T[] = [];
  public subscriptions: Subscriptions = {};

  public helper: Helper;
  modalService: any;

  constructor(public service?: BaseService<T>) {
    this.helper = AppInjector.injector.get(Helper);
  }

  ngOnInit(): void {}

  /* ONDESTROY */
  ngOnDestroy(): void {
    this.unsubscribe(this.subscriptions);
  }

  unsubscribe(subscriptions: Subscriptions) {
    Object.keys(subscriptions).forEach((key) => {
      subscriptions[key].unsubscribe();
    });
  }
}
