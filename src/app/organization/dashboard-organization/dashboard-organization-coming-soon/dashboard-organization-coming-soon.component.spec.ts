import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationComingSoonComponent } from './dashboard-organization-coming-soon.component';

describe('DashboardOrganizationComingSoonComponent', () => {
  let component: DashboardOrganizationComingSoonComponent;
  let fixture: ComponentFixture<DashboardOrganizationComingSoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationComingSoonComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
