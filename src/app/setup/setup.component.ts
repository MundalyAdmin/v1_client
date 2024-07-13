import { Component, ViewChild } from '@angular/core';
import { SetupreportService } from './setupreport.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent {
  total: number | string = "";
  respondents = "";
  childUrl = "";

  
  constructor(private service: SetupreportService, private route: ActivatedRoute, private router: Router) {
    this.service.total.subscribe((total) => {     
        this.total = total
    });

    this.service.respondents.subscribe(val => {
      this.respondents = val;
    })

    this.router.events
      .subscribe((evt: any) => {
        if (!(evt instanceof NavigationEnd)) return
        this.childUrl = evt['url'];
      });
  }


  ngOnInit() {
    this.childUrl = this.router.url;
  }

  nextComponent() {
    if (this.childUrl === "/setupreport/participants") return "/setupreport/survey";
    if (this.childUrl === "/setupreport/survey") return "/setupreport/launch";
    return "/setupreport/participants"
  }
}
