import { Component, OnInit } from '@angular/core';
import { Helper } from '../../shared/helpers/helper/helper';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(
    public helperService: Helper,
    public cartService: CartService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  doneSuccessfully() {
    this.helperService.notification.alertSuccess();

    this.cartService.data = [];
    window.location.href = 'https://mundaly-demo.netlify.app/dashboard';
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
