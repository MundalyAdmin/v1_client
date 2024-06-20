import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSidebarMenuImpactComponent } from './dashboard-organization-sidebar-menu-impact.component';

describe('DashboardOrganizationSidebarMenuImpactComponent', () => {
  let component: DashboardOrganizationSidebarMenuImpactComponent;
  let fixture: ComponentFixture<DashboardOrganizationSidebarMenuImpactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSidebarMenuImpactComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSidebarMenuImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
