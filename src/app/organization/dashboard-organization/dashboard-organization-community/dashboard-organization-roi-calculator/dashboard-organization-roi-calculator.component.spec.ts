import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationRoiCalculatorComponent } from './dashboard-organization-roi-calculator.component';

describe('DashboardOrganizationRoiCalculatorComponent', () => {
  let component: DashboardOrganizationRoiCalculatorComponent;
  let fixture: ComponentFixture<DashboardOrganizationRoiCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationRoiCalculatorComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationRoiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
