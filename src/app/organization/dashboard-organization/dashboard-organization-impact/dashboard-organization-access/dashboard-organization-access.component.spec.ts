import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationAccessComponent } from './dashboard-organization-access.component';

describe('DashboardOrganizationAccessComponent', () => {
  let component: DashboardOrganizationAccessComponent;
  let fixture: ComponentFixture<DashboardOrganizationAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationAccessComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
