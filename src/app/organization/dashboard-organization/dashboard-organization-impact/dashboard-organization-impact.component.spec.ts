import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactComponent } from './dashboard-organization-impact.component';

describe('DashboardOrganizationImpactComponent', () => {
  let component: DashboardOrganizationImpactComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
