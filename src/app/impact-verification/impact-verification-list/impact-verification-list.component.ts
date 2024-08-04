import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { ImpactVerification } from '../impact-verification.model';
import { ImpactVerificationService } from '../impact-verification.service';
import { StatusImpactVerificationEnum } from '../enums/status-impact-verification.enum';

@Component({
  selector: 'app-impact-verification-list',
  templateUrl: './impact-verification-list.component.html',
  styleUrls: ['./impact-verification-list.component.scss'],
})
export class ImpactVerificationListComponent extends BaseComponent<ImpactVerification> {
  @Input() typeVerification: 'requested' | 'received' = 'requested';
  title!: string;
  @Input() override data: ImpactVerification[] = [];

  showUploadCommunityDetails = false;

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }
  constructor(public impactVerificationService: ImpactVerificationService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.title =
      this.typeVerification === 'requested' ? 'Requested' : 'Received';
  }

  updateStatus(
    id: number,
    statusId: StatusImpactVerificationEnum,
    index: number
  ) {
    this.helper.notification.confirm(
      'Are you sure?',
      'You are about to change the status of the verification',
      () => {
        this.loading = true;
        this.impactVerificationService
          .updateStatus(id, statusId)
          .subscribe((response) => {
            this.data[index] = response.data;
            this.loading = false;
          });
      }
    );
  }

  relauch(id: number, index: number) {
    this.helper.notification.confirm(
      'Are you sure?',
      'You are about to relauch the verification',
      () => {
        this.loading = true;
        this.impactVerificationService.relauch(id).subscribe((response) => {
          this.data[index] = response.data;
          this.loading = false;
        });
      }
    );
  }

  displayUploadCommunityDetails(impactInitiative: ImpactVerification) {
    this.showUploadCommunityDetails = true;
    this.impactVerificationService.singleData = impactInitiative;
  }

  getStatusColor(status: StatusImpactVerificationEnum): string {
    switch (status) {
      case StatusImpactVerificationEnum.LAUNCHED:
        return 'bg-purple-200 text-purple-600';
      case StatusImpactVerificationEnum.ABORTED:
        return 'bg-red-200 text-red-600';
      case StatusImpactVerificationEnum.INQUIRER_CONFIRMATION:
        return 'bg-blue-200 text-blue-600';
      case StatusImpactVerificationEnum.PARTNER_COMPLETION:
        return 'bg-yellow-200 text-yellow-600';
      case StatusImpactVerificationEnum.SUSPENDED:
        return 'bg-gray-200 text-gray-600';
      default:
        return '';
    }
  }
}
