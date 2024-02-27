import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-act',
  templateUrl: './product-act.component.html',
  styleUrls: ['./product-act.component.scss'],
})
export class ProductActComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
