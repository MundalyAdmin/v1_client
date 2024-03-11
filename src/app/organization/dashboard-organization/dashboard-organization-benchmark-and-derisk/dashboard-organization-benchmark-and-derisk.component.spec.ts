import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationBenchmarkAndDeriskComponent } from './dashboard-organization-benchmark-and-derisk.component';

describe('DashboardOrganizationBenchmarkAndDeriskComponent', () => {
  let component: DashboardOrganizationBenchmarkAndDeriskComponent;
  let fixture: ComponentFixture<DashboardOrganizationBenchmarkAndDeriskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationBenchmarkAndDeriskComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationBenchmarkAndDeriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
