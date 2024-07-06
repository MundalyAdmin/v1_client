import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpactPartnerCreateComponent } from './impact-partner-create/impact-partner-create.component';
import { SharedModule } from '../../../shared/shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImpactPartnerListComponent } from './impact-partner-list/impact-partner-list.component';
import { Routes } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ImpactPartnerSoloComponent } from './impact-partner-solo/impact-partner-solo.component';

@NgModule({
  declarations: [
    ImpactPartnerCreateComponent,
    ImpactPartnerListComponent,
    ImpactPartnerSoloComponent,
  ],
  imports: [CommonModule, SharedModule, AutoCompleteModule, DropdownModule],
  exports: [ImpactPartnerCreateComponent, ImpactPartnerListComponent],
})
export class ImpactPartnerModule {}
