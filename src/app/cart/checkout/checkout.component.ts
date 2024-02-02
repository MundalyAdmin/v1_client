import { Component, OnInit } from '@angular/core';
import { Helper } from '../../shared/helpers/helper/helper';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(public helperService: Helper, public cartService: CartService) {}
  doneSuccessfully() {
    this.helperService.notification.alertSuccess();

    this.cartService.data = [];

    window.open(
      'https://www.figma.com/proto/6oIZcKuGxg26kcRzq8XJ2U/Mundaly?page-id=0%3A1&type=design&node-id=79-9187&viewport=-381%2C5%2C0.11&t=FQrnUfWTmX7TIHGz-8&scaling=scale-down&starting-point-node-id=79%3A9187&show-proto-sidebar=1&hide-ui=1',
      ''
    );
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
