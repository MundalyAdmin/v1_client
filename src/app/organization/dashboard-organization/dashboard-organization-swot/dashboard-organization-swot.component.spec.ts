import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSwotComponent } from './dashboard-organization-swot.component';

describe('DashboardOrganizationSwotComponent', () => {
  let component: DashboardOrganizationSwotComponent;
  let fixture: ComponentFixture<DashboardOrganizationSwotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSwotComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
