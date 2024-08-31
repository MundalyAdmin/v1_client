import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactStoriesComponent } from './dashboard-organization-impact-stories.component';

describe('DashboardOrganizationImpactStoriesComponent', () => {
  let component: DashboardOrganizationImpactStoriesComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactStoriesComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
