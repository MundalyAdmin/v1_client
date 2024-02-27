import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-business',
  templateUrl: './public-business.component.html',
  styleUrls: ['./public-business.component.scss'],
})
export class PublicBusinessComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
