import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princing',
  templateUrl: './princing.component.html',
  styleUrls: ['./princing.component.scss'],
})
export class PrincingComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
