import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactPartnersWellbeingComponent } from './dashboard-organization-impact-partners-wellbeing.component';

describe('DashboardOrganizationImpactPartnersWellbeingComponent', () => {
  let component: DashboardOrganizationImpactPartnersWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactPartnersWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactPartnersWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactPartnersWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
