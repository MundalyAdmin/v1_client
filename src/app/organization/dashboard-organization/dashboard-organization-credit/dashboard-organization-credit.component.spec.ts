import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCreditComponent } from './dashboard-organization-credit.component';

describe('DashboardOrganizationCreditComponent', () => {
  let component: DashboardOrganizationCreditComponent;
  let fixture: ComponentFixture<DashboardOrganizationCreditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCreditComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
