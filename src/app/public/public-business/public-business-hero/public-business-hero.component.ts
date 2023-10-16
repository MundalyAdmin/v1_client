import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { Waitlist } from '../../../waitlist/waitlist.model';
import { WaitlistService } from '../../../waitlist/waitlist.service';

@Component({
  selector: 'app-public-business-hero',
  templateUrl: './public-business-hero.component.html',
  styleUrls: ['./public-business-hero.component.scss'],
})
export class PublicBusinessHeroComponent
  extends BaseCreateComponent<Waitlist>
  implements OnInit
{
  constructor(public waitlistService: WaitlistService) {
    super(waitlistService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: [''],
    });
  }

  override create(): void {
    this.loading = true;
    this.waitlistService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess('Successfully registered');
        this.initForm();
      },
      error: () => {
        this.loading = false;
        this.helper.notification.alertDanger();
      },
    });
  }
}
