import { Component } from '@angular/core';
import { PublicBusinessHeroComponent } from '../public-business-hero/public-business-hero.component';

@Component({
  selector: 'app-public-business-contact-us',
  templateUrl: './public-business-contact-us.component.html',
  styleUrls: ['./public-business-contact-us.component.scss'],
})
export class PublicBusinessContactUsComponent extends PublicBusinessHeroComponent {}
