import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDueDiligenceComponent } from './dashboard-organization-due-diligence.component';

describe('DashboardOrganizationDueDiligenceComponent', () => {
  let component: DashboardOrganizationDueDiligenceComponent;
  let fixture: ComponentFixture<DashboardOrganizationDueDiligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDueDiligenceComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
