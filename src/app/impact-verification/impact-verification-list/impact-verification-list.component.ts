import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { ImpactVerification } from '../impact-verification.model';
import { ImpactVerificationService } from '../impact-verification.service';
import { StatusImpactVerificationEnum } from '../enums/status-impact-verification.enum';
import { TypeCommunityMemberEnum } from '../impact-verification-upload-community-details/type-community-member.enum';

const MODAL_UPLOAD_COMMUNITY_DETAILS_TITLE =
  'Upload your community members details';
const MODAL_UPLOAD_COMMUNITY_DETAILS_DESCRIPTION =
  "Please upload a CSV file containing your community members' information. The file should include either the phone number, the email or both of the community members.";

const MODAL_UPLOAD_STAFF_DETAILS_TITLE = 'Upload your staff members details';
const MODAL_UPLOAD_STAFF_DETAILS_DESCRIPTION =
  "Please upload a CSV file containing your staff members' information. There are some scales that only them will answer. The file should include either the phone number, the email or both of the staff members.";

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
  modalDetails: { title: string; description: string } = {
    title: '',
    description: '',
  };

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }

  get TypeCommunityMemberEnum() {
    return TypeCommunityMemberEnum;
  }

  constructor(public impactVerificationService: ImpactVerificationService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.title =
      this.typeVerification === 'requested' ? 'Requested' : 'Received';

    this.subscriptions['typeCommunityMember'] =
      this.impactVerificationService.typeCommunityMember$.subscribe(
        (typeCommunityMember) => {
          this.modalDetails = {
            [TypeCommunityMemberEnum.COMMUNITY_MEMBER]: {
              title: MODAL_UPLOAD_COMMUNITY_DETAILS_TITLE,
              description: MODAL_UPLOAD_COMMUNITY_DETAILS_DESCRIPTION,
            },
            [TypeCommunityMemberEnum.STAFF_MEMBER]: {
              title: MODAL_UPLOAD_STAFF_DETAILS_TITLE,
              description: MODAL_UPLOAD_STAFF_DETAILS_DESCRIPTION,
            },
          }[typeCommunityMember];
        }
      );
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

  displayUploadCommunityDetails(
    impactVerification: ImpactVerification,
    typeCommunityMember: TypeCommunityMemberEnum
  ) {
    this.showUploadCommunityDetails = true;
    this.impactVerificationService.singleData = impactVerification;
    this.impactVerificationService.typeCommunityMember = typeCommunityMember;
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
