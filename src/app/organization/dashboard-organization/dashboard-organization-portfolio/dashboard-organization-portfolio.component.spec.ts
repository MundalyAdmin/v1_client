import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationPortfolioComponent } from './dashboard-organization-portfolio.component';

describe('DashboardOrganizationPortfolioComponent', () => {
  let component: DashboardOrganizationPortfolioComponent;
  let fixture: ComponentFixture<DashboardOrganizationPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationPortfolioComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
