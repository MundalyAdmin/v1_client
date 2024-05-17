import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDetailsComponent } from './dashboard-organization-details.component';

describe('DashboardOrganizationDetailsComponent', () => {
  let component: DashboardOrganizationDetailsComponent;
  let fixture: ComponentFixture<DashboardOrganizationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDetailsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
