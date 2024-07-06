import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactVerificationUploadCommunityDetailsComponent } from './impact-verification-upload-community-details.component';

describe('ImpactVerificationUploadCommunityDetailsComponent', () => {
  let component: ImpactVerificationUploadCommunityDetailsComponent;
  let fixture: ComponentFixture<ImpactVerificationUploadCommunityDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactVerificationUploadCommunityDetailsComponent]
    });
    fixture = TestBed.createComponent(ImpactVerificationUploadCommunityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
