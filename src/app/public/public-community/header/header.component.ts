import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}
}
