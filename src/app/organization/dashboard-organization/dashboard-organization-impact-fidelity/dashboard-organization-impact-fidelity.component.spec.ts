import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactFidelityComponent } from './dashboard-organization-impact-fidelity.component';

describe('DashboardOrganizationImpactFidelityComponent', () => {
  let component: DashboardOrganizationImpactFidelityComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactFidelityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactFidelityComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactFidelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
