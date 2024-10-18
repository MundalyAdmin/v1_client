import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationReportsCreateComponent } from './dashboard-organization-reports-create.component';

describe('DashboardOrganizationReportsCreateComponent', () => {
  let component: DashboardOrganizationReportsCreateComponent;
  let fixture: ComponentFixture<DashboardOrganizationReportsCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationReportsCreateComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationReportsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
