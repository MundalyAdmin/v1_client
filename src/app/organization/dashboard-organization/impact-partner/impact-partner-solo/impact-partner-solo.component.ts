import { Component, Input, OnInit } from '@angular/core';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';

@Component({
  selector: 'app-impact-partner-solo',
  templateUrl: './impact-partner-solo.component.html',
  styleUrls: ['./impact-partner-solo.component.scss'],
})
export class ImpactPartnerSoloComponent implements OnInit {
  @Input() partner!: ImpactPartner;
  selectedImpactInitiative!: ImpactInitiative;

  ngOnInit(): void {
    if (this.partner.implementer?.impact_initiatives?.length)
      this.selectedImpactInitiative =
        this.partner.implementer.impact_initiatives[0];
  }
}
