import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationHistoryComponent } from './dashboard-organization-history.component';

describe('DashboardOrganizationHistoryComponent', () => {
  let component: DashboardOrganizationHistoryComponent;
  let fixture: ComponentFixture<DashboardOrganizationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationHistoryComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
