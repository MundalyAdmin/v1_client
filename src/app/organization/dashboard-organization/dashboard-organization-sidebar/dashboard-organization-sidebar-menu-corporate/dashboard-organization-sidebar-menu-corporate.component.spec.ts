import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSidebarMenuCorporateComponent } from './dashboard-organization-sidebar-menu-corporate.component';

describe('DashboardOrganizationSidebarMenuCorporateComponent', () => {
  let component: DashboardOrganizationSidebarMenuCorporateComponent;
  let fixture: ComponentFixture<DashboardOrganizationSidebarMenuCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSidebarMenuCorporateComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSidebarMenuCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
