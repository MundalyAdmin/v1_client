import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../shared/base-component';
import { CommunityMemberDetails } from './community-details.model';
import * as Papa from 'papaparse';
import { Validators } from '@angular/forms';
import { ImpactVerificationService } from '../impact-verification.service';
import { ImpactVerification } from '../impact-verification.model';

@Component({
  selector: 'app-impact-verification-upload-community-details',
  templateUrl: './impact-verification-upload-community-details.component.html',
  styleUrls: ['./impact-verification-upload-community-details.component.scss'],
})
export class ImpactVerificationUploadCommunityDetailsComponent extends BaseCreateComponent<CommunityMemberDetails> {
  @Input() modalDetails: { title: string; description: string } = {
    title: '',
    description: '',
  };
  impactVerification: ImpactVerification | null = null;
  showPreview = false;
  csvFile: File | null = null;
  communityMembers: CommunityMemberDetails[] = [];
  errorMessage = '';
  @Output() closeModal = new EventEmitter<void>();

  constructor(public impactVerificationService: ImpactVerificationService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initform();

    this.subscriptions['loggedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization)
          this.form.patchValue({ organization_id: organization.id });
      });

    this.subscriptions['impact-verification'] =
      this.impactVerificationService.singleData$.subscribe(
        (impactVerification) => {
          if (impactVerification) {
            this.impactVerification = impactVerification;
            this.form.patchValue({
              impact_verification_id: impactVerification.id,
            });
          }
        }
      );

    this.subscriptions['type-community-member'] =
      this.impactVerificationService.typeCommunityMember$.subscribe(
        (typeCommunityMember) => {
          this.form.patchValue({
            type_impact_verification_community_details_id: typeCommunityMember,
          });
        }
      );
  }

  initform() {
    this.form = this.fb.group({
      community_details: [null, Validators.required],
      organization_id: [null, Validators.required],
      impact_verification_id: [null, Validators.required],
      type_impact_verification_community_details_id: [
        null,
        Validators.required,
      ],
    });
  }

  override onFileChanged(event: any) {
    let file: File = event.target.files[0];
    if (file.type !== 'text/csv') {
      return this.helper.notification.alertDanger('Format Invalid');
    }

    this.csvFile = file;
    this.parseCSV(file);
  }

  parseCSV(file: File): void {
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        if (this.validateHeaders(results.meta.fields!)) {
          this.communityMembers = results.data
            .map((row: any) => ({
              phone_number: row.phoneNumber,
              email: row.email,
            }))
            .filter((member) => member.email && member.phone_number);

          this.form.patchValue({
            community_details: this.communityMembers,
          });
        } else {
          this.communityMembers = []; // Clear any previously parsed data
          this.helper.notification.toastDanger(
            "Required headers 'email' and/or 'phoneNumber' not found in CSV file."
          );
        }
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        this.csvFile = null;
        this.helper.notification.toastDanger(
          'Error parsing CSV file. Please try again.'
        );
      },
    });
  }

  validateHeaders(headers: string[]): boolean {
    const requiredHeaders = ['email', 'phoneNumber'];
    return requiredHeaders.every((header) => headers.includes(header));
  }

  submit() {
    if (this.form.valid && this.csvFile) {
      this.loading = true;
      this.impactVerificationService
        .uploadCommunityMembersDetails(this.form.value)
        .subscribe({
          next: () => {
            this.loading = false;
            this.initform();
            this.form.patchValue({
              organization_id: this.currentLoggedInOrganization?.id,
              impact_verification_id: this.impactVerification?.id,
            });
            this.helper.notification.toastSuccess();
            this.closeModal.emit();
          },
          error: () => {
            this.loading = false;
          },
        });
    } else {
      this.helper.notification.toastDanger('Please upload a valid CSV file');
    }
  }
}
