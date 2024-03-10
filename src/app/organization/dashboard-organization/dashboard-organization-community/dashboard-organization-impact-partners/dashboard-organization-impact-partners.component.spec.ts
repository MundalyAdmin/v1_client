import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactPartnersComponent } from './dashboard-organization-impact-partners.component';

describe('DashboardOrganizationImpactPartnersComponent', () => {
  let component: DashboardOrganizationImpactPartnersComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactPartnersComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
