import { Component } from '@angular/core';
import { SetupreportService } from '../setupreport.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent {
  respondents: string = "";
  total: string = "";
  state: "card" | "invoice" | "link" | "" = ""

  constructor(private service: SetupreportService) {  
    this.service.respondents.subscribe((val) => this.respondents = val);
    this.service.total.subscribe((val) => this.total = val)
  }

  clickState(state: "card" | "invoice" | "link") {
    this.state = state;
  }
}
