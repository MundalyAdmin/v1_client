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

  priceList: { [key: string]: { [key: string]: number | string } } = {
    "100": {
      "level1": "$9,360.00",
      "level2": "$,2925",
      "level3": "$876"
    },
    "250": {
      "level1": "$12,960",
      "level2": "$4,050",
      "level3": "$1,213"
    },
    "500": {
      "level1": "$18,960",
      "level2": "$5,925",
      "level3": "$1,776"
    },
    "750": {
      "level1": "$24,960",
      "level2": "$7,800",
      "level3": "$2,339"
    },
    "1000": {
      "level1": "$30,960",
      "level2": "$9,675",
      "level3": "$2,902"
    },
    "1250": {
      "level1": "$36,960",
      "level2": "$11,550",
      "level3": "$3,465"
    },
    "1500": {
      "level1": "$48,960",
      "level2": "$13,425",
      "level3": "$4,028"
    },
    "1750": {
      "level1": "$54,960",
      "level2": "$15,300",
      "level3": "$4,591"
    },
    "2000": {
      "level1": "$60,960",
      "level2": "$17,175",
      "level3": "$5,154"
    },
    ">2000": {
      "level1": "contact sales",
      "level2": "contact sales",
      "level3": "contact sales"
    },
  }
  constructor(private service: SetupreportService, private route: ActivatedRoute, private router: Router) {
    service.total.subscribe(([level, respondents]: [string, string]) => {
      const respondentPrices = this.priceList[respondents];
      if (respondentPrices) {
        this.total = respondentPrices[level] || 0
      }
    });

    service.respondents.subscribe(val => {
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
    if (this.childUrl === "/setupreport/participants") return "/setupreport/launch"
    return "/setupreport/participants"
  }
}
