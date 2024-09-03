import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingComponent } from './dashboard-organization-wellbeing.component';

describe('DashboardOrganizationWellbeingComponent', () => {
  let component: DashboardOrganizationWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
