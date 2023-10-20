import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent {
  @Input() title: string = 'Thank You for joining Mundaly';
  @Input() backlink: string = '/';
  @Input() subtitle: string =
    'Our team will soon get in touch with you via email for the next steps';
}
