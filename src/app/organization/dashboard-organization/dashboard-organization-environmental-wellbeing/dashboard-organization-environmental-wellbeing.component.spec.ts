import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationEnvironmentalWellbeingComponent } from './dashboard-organization-environmental-wellbeing.component';

describe('DashboardOrganizationEnvironmentalWellbeingComponent', () => {
  let component: DashboardOrganizationEnvironmentalWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationEnvironmentalWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationEnvironmentalWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationEnvironmentalWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
