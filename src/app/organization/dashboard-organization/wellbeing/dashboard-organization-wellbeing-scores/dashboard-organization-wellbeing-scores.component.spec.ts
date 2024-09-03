import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingScoresComponent } from './dashboard-organization-wellbeing-scores.component';

describe('DashboardOrganizationWellbeingScoresComponent', () => {
  let component: DashboardOrganizationWellbeingScoresComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingScoresComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
