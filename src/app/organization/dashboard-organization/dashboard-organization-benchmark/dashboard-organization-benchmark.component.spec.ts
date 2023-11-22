import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationBenchmarkComponent } from './dashboard-organization-benchmark.component';

describe('DashboardOrganizationBenchmarkComponent', () => {
  let component: DashboardOrganizationBenchmarkComponent;
  let fixture: ComponentFixture<DashboardOrganizationBenchmarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationBenchmarkComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationBenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
