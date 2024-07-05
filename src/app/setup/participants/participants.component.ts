import { Component } from '@angular/core';
import { SetupreportService } from '../setupreport.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  level: string = "level1";
  value: number = 0;
  respondents: string = "100";
  impact : boolean = false;

  reachOptions: string[] = Array.from(Array(10).keys()).map((x) => {
    if (x === 0) return "100";
    if (x === 9) return ">2000";
    return (x * 250).toString()
  })

  ageRange: { [key: string]: boolean } =  {};


  ethnicities: { [key: string]: boolean } = {}

  sexes: { [key: string]: boolean } = {}

  relationshipStatus:  { [key: string]: boolean } = {}


  constructor(private service: SetupreportService) {  
    service.level.subscribe((val) => this.level = val);
    service.respondents.subscribe((val) => this.respondents = val);
    service.impact.subscribe((val) => this.impact = val);
    service.ageRange.subscribe((val) => this.ageRange = val);
    service.ethnicities.subscribe((val) => this.ethnicities = val);
    service.sexes.subscribe((val) => this.sexes = val);
    service.relationshipStatus.subscribe((val) => this.relationshipStatus = val)
  }

  
  selectLevel(level: string): void {
    this.service.level.next(level);
  }

  setReachOption(opt: string): void {
    const num = Number(opt)
    this.service.respondents.next(opt);
    if (isNaN(num)) {
      this.value = 99;
      return
    }
    console.log(num)
    if (num < 250) {
      this.value = 0;
      return;
    }
    this.value = (num / 250) * 11
  }

  reachChanged(num: number) {
    this.service.respondents.next(this.reachOptions[num / 11]);
  }

  changeImpact() {
    this.service.impact.next(!this.impact);
  }

  selectAgeRange(key: string) {
    const newVal = !this.ageRange[key];
    if (key === "All" && newVal) {
      this.service.ageRange.next({
        ...Object.fromEntries(Object.keys(this.ageRange).map((k) => [k, false])), [key]: newVal
      });
      return
    }

    this.service.ageRange.next({ ...this.ageRange, [key]: newVal, 'All': false });
  }

  selectEthnicity(key: string) {
    const newVal = !this.ethnicities[key];

    if (key === "All" && newVal) {
      this.service.ethnicities.next({
        ...Object.fromEntries(Object.keys(this.ethnicities).map((k) => [k, false])), [key]: newVal
      });
      return
    }

    this.service.ethnicities.next({ ...this.ethnicities, [key]: newVal, 'All': false });
  }

  selectSex(key: string) {
    const newVal = !this.sexes[key];

    if (key === "All" && newVal) {
      this.service.sexes.next({
        ...Object.fromEntries(Object.keys(this.sexes).map((k) => [k, false])), [key]: newVal
      });
      return
    }

    this.service.sexes.next({ ...this.sexes, [key]: newVal, 'All': false });
  }

  selectRelationshipStatus(key: string) {
    const newVal = !this.relationshipStatus[key];

    if (key === "All" && newVal) {
      this.service.relationshipStatus.next({
        ...Object.fromEntries(Object.keys(this.relationshipStatus).map((k) => [k, false])), [key]: newVal
      });
      return
    }

    this.service.relationshipStatus.next({ ...this.relationshipStatus, [key]: newVal, 'All': false });
  }

  sliderPercent(index: number) {
    const percent = index * 11;
    return percent === 99 ? 100 : percent
  }
}
