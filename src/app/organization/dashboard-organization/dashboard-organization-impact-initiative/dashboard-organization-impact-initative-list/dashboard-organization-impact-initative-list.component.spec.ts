import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactInitativeListComponent } from './dashboard-organization-impact-initative-list.component';

describe('DashboardOrganizationImpactInitativeListComponent', () => {
  let component: DashboardOrganizationImpactInitativeListComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactInitativeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactInitativeListComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactInitativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
