import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { Router } from '@angular/router';
import { Storage } from '../../../shared/helpers/storage/storage';

@Component({
  selector: 'app-organization-registration-processing',
  templateUrl: './organization-registration-processing.component.html',
  styleUrls: ['./organization-registration-processing.component.scss'],
})
export class OrganizationRegistrationProcessingComponent
  extends BaseComponent<any>
  implements OnInit
{
  constructor(public router: Router, public storage: Storage) {
    super();
  }

  ngOnInit(): void {
    const admin = this.storage.get<any>('registration')?.adminInfo;
    setTimeout(() => {
      this.router.navigate(['/dashboard/benchmark']);
      this.helper.notification.toastSuccess(`Welcome ${admin?.name}!`);
    }, 5000);
  }
}
