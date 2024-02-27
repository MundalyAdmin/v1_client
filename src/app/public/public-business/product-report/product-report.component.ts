import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-report',
  templateUrl: './product-report.component.html',
  styleUrls: ['./product-report.component.scss'],
})
export class ProductReportComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
