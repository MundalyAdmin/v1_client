import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationPartnersComponent } from './dashboard-organization-partners.component';

describe('DashboardOrganizationPartnersComponent', () => {
  let component: DashboardOrganizationPartnersComponent;
  let fixture: ComponentFixture<DashboardOrganizationPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationPartnersComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
