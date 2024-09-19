import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactStoriesListComponent } from './dashboard-organization-impact-stories-list.component';

describe('DashboardOrganizationImpactStoriesListComponent', () => {
  let component: DashboardOrganizationImpactStoriesListComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactStoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactStoriesListComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
