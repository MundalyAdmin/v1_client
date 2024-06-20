import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { InitiativesService } from '../../initiatives.service';

@Component({
  selector: 'app-right-drawer',
  templateUrl: './right-drawer.component.html',
  styleUrls: ['./right-drawer.component.scss'],
})
export class RightDrawerComponent extends BaseComponent<any> implements OnInit {
  show = false;
  title: string | null = null;
  component: string | null = null;
  constructor(public impactInitiativeService: InitiativesService) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['parameters'] =
      this.impactInitiativeService.rightDrawerParams$.subscribe((params) => {
        if (params.state === 'show') {
          this.show = true;
          this.title = params.title;
          this.component = params.component;
        } else {
          this.show = false;
          this.title = null;
          this.component = null;
        }
      });
  }

  close() {
    this.impactInitiativeService.closeDrawer();
  }
}
