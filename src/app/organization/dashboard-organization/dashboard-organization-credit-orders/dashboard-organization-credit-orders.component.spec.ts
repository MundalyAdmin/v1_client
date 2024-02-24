import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCreditOrdersComponent } from './dashboard-organization-credit-orders.component';

describe('DashboardOrganizationCreditOrdersComponent', () => {
  let component: DashboardOrganizationCreditOrdersComponent;
  let fixture: ComponentFixture<DashboardOrganizationCreditOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCreditOrdersComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCreditOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
