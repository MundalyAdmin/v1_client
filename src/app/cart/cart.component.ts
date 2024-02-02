import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;
  taxPrice: number = 0;
  totalPlusTax = 0;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    console.log(this.cartService.data);

    this.totalPrice = this.cartService.totalPrice;
    this.taxPrice = Math.round(this.cartService.totalPrice * 0.18);
    this.totalPlusTax = this.cartService.totalPrice + this.taxPrice;
  }

  updatePrice(item: CartItem, event: any) {
    const type = event.target.value;
    if (type == 'up') {
      this.updatePriceUp(item);
    } else if (type == 'down') {
      this.updatePriceDown(item);
    }
  }

  updatePriceUp(item: CartItem) {
    this.cartService.updateItem({
      ...item,
      availability: 'In 4 days',
      generatedBy: 'partner-generated',
      price: +item.price + +item.price * 0.6,
    });

    console.log(this.cartService.data);
  }

  updatePriceDown(item: CartItem) {
    this.cartService.updateItem({
      ...item,
      availability: 'In 3 hours',
      generatedBy: 'auto-generated',
      price: +item.price - +item.price * 0.6,
    });
  }
}
