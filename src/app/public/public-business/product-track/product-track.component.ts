import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-track',
  templateUrl: './product-track.component.html',
  styleUrls: ['./product-track.component.scss'],
})
export class ProductTrackComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
