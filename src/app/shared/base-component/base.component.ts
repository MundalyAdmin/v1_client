import { AppInjector } from './../services/app-injector.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { BaseService } from '../services/base.service';
import { Helper } from '../helpers/helper/helper';
import { User } from '../../user/user.model';
import { Organization } from '../../organization/organization.model';
import { AuthService } from '../../auth/auth.service';

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

  public authService: AuthService;

  currentLoggedInUser: User | null = null;
  currentLoggedInOrganization: Organization | null = null;

  public helper: Helper;

  constructor(public service?: BaseService<T>) {
    this.helper = AppInjector.injector.get(Helper);
    this.authService = AppInjector.injector.get(AuthService);
  }

  ngOnInit(): void {
    this.subscriptions['currentLoggedInOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        this.currentLoggedInOrganization = organization;
      });

    this.subscriptions['currentLoggedInUser'] =
      this.authService.user$.subscribe((user) => {
        this.currentLoggedInUser = user;
      });
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
}
