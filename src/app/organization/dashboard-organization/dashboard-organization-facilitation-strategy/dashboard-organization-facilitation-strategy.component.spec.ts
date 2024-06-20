import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationFacilitationStrategyComponent } from './dashboard-organization-facilitation-strategy.component';

describe('DashboardOrganizationFacilitationStrategyComponent', () => {
  let component: DashboardOrganizationFacilitationStrategyComponent;
  let fixture: ComponentFixture<DashboardOrganizationFacilitationStrategyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationFacilitationStrategyComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationFacilitationStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
