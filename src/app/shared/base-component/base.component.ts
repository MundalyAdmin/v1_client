import { AppInjector } from './../services/app-injector.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Helper } from 'src/app/helpers/helper/helper';

import { BaseService } from '../services/base.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

interface Subscriptions {
  [k: string]: Subscription;
}

@Component({
  selector: '',
  template: '',
  styles: [],
})
export abstract class BaseComponent<T> implements OnDestroy {
  public loading = false;
  public data: T[] = [];
  public subscriptions: Subscriptions = {};

  public helper: Helper;
  public modalService: NgbModal;
  public modalServiceConfig: NgbModalConfig;
  // public auth: AuthService = null;

  constructor(public service?: BaseService<T>) {
    this.helper = AppInjector.injector.get(Helper);
    this.modalService = AppInjector.injector.get(NgbModal);
    this.modalServiceConfig = AppInjector.injector.get(NgbModalConfig);
    this.modalServiceConfig.backdrop = 'static';
    this.modalServiceConfig.keyboard = false;
    // this.auth = AppInjector.injector.get(AuthService);
  }

  /* ONDESTROY */
  ngOnDestroy(): void {
    this.unsubscribe(this.subscriptions);
  }

  unsubscribe(subscriptions: Subscriptions) {
    Object.keys(subscriptions).forEach((key) => {
      subscriptions[key].unsubscribe();
    });
  }

  openModal(
    content: any,
    size: 'sm' | 'lg' | 'xl' = 'xl',
    centered: boolean = true,
    scrollable: boolean = true
  ) {
    return this.modalService.open(content, {
      size,
      centered,
      scrollable,
    });
  }

  closeModal(content: any) {
    if (content) {
      this.modalService.dismissAll();
    }
  }
}
