import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDueDiligenceRequestComponent } from './dashboard-organization-due-diligence-request.component';

describe('DashboardOrganizationDueDiligenceRequestComponent', () => {
  let component: DashboardOrganizationDueDiligenceRequestComponent;
  let fixture: ComponentFixture<DashboardOrganizationDueDiligenceRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDueDiligenceRequestComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDueDiligenceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
