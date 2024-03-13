import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationRegulatorsComponent } from './dashboard-organization-regulators.component';

describe('DashboardOrganizationRegulatorsComponent', () => {
  let component: DashboardOrganizationRegulatorsComponent;
  let fixture: ComponentFixture<DashboardOrganizationRegulatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationRegulatorsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationRegulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
