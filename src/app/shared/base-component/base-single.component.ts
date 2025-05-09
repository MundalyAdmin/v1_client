import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseComponent } from './base.component';
import { BaseService } from '../services/base.service';

@Component({
  selector: '',
  template: '',
  styles: [],
})
export class BaseSingleComponent<T>
  extends BaseComponent<T>
  implements OnInit, OnDestroy
{
  single: T | null | undefined = null;
  public enableFetchDataFromURL: boolean = false;

  constructor(
    public override service: BaseService<T>,
    public route?: ActivatedRoute
  ) {
    super(service);
  }

  override ngOnInit() {
    super.ngOnInit();
    if (this.enableFetchDataFromURL) {
      this.show(this.route!);
    }

    this.subscriptions['single'] = this.service.singleData$.subscribe(
      (single) => {
        this.single = single;
      }
    );
  }

  show(route: ActivatedRoute) {
    route.params.subscribe((param) => {
      this.loading = true;
      let id = param['id'];
      this.service.show(id).subscribe(() => {
        this.loading = false;
      });
    });
  }
}
