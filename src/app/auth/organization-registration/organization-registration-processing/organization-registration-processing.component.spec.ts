import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRegistrationProcessingComponent } from './organization-registration-processing.component';

describe('OrganizationRegistrationProcessingComponent', () => {
  let component: OrganizationRegistrationProcessingComponent;
  let fixture: ComponentFixture<OrganizationRegistrationProcessingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationRegistrationProcessingComponent]
    });
    fixture = TestBed.createComponent(OrganizationRegistrationProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
