import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSidebarComponent } from './dashboard-organization-sidebar.component';

describe('DashboardOrganizationSidebarComponent', () => {
  let component: DashboardOrganizationSidebarComponent;
  let fixture: ComponentFixture<DashboardOrganizationSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSidebarComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
