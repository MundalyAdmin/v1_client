import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationHomeComponent } from './dashboard-organization-home.component';

describe('DashboardOrganizationHomeComponent', () => {
  let component: DashboardOrganizationHomeComponent;
  let fixture: ComponentFixture<DashboardOrganizationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationHomeComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
