import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-who-is-for',
  templateUrl: './who-is-for.component.html',
  styleUrls: ['./who-is-for.component.scss'],
})
export class WhoIsForComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
