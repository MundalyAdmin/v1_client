import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationLeaderboardComponent } from './dashboard-organization-leaderboard.component';

describe('DashboardOrganizationLeaderboardComponent', () => {
  let component: DashboardOrganizationLeaderboardComponent;
  let fixture: ComponentFixture<DashboardOrganizationLeaderboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationLeaderboardComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
