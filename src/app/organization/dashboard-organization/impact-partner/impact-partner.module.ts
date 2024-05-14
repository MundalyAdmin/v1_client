import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpactPartnerCreateComponent } from './impact-partner-create/impact-partner-create.component';
import { SharedModule } from '../../../shared/shared.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImpactPartnerListComponent } from './impact-partner-list/impact-partner-list.component';

@NgModule({
  declarations: [ImpactPartnerCreateComponent, ImpactPartnerListComponent],
  imports: [CommonModule, SharedModule, AutoCompleteModule],
  exports: [ImpactPartnerCreateComponent, ImpactPartnerListComponent],
})
export class ImpactPartnerModule {}
