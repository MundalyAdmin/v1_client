import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactPartnersAlignmentComponent } from './dashboard-organization-impact-partners-alignment.component';

describe('DashboardOrganizationImpactPartnersAlignmentComponent', () => {
  let component: DashboardOrganizationImpactPartnersAlignmentComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactPartnersAlignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactPartnersAlignmentComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactPartnersAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
