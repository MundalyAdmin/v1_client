import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpactVerificationListComponent } from './impact-verification-list/impact-verification-list.component';
import { SharedModule } from '../shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { ImpactVerificationUploadCommunityDetailsComponent } from './impact-verification-upload-community-details/impact-verification-upload-community-details.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [
    ImpactVerificationListComponent,
    ImpactVerificationUploadCommunityDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, DialogModule, ScrollPanelModule],
  exports: [ImpactVerificationListComponent],
})
export class ImpactVerificationModule {}
