import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationPhysicalWellbeingComponent } from './dashboard-organization-physical-wellbeing.component';

describe('DashboardOrganizationPhysicalWellbeingComponent', () => {
  let component: DashboardOrganizationPhysicalWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationPhysicalWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationPhysicalWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationPhysicalWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
