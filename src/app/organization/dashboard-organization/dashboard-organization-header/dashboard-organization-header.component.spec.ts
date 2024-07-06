import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationHeaderComponent } from './dashboard-organization-header.component';

describe('DashboardOrganizationHeaderComponent', () => {
  let component: DashboardOrganizationHeaderComponent;
  let fixture: ComponentFixture<DashboardOrganizationHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationHeaderComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
