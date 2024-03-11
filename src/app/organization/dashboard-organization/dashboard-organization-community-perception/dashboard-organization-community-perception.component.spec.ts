import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCommunityPerceptionComponent } from './dashboard-organization-community-perception.component';

describe('DashboardOrganizationCommunityPerceptionComponent', () => {
  let component: DashboardOrganizationCommunityPerceptionComponent;
  let fixture: ComponentFixture<DashboardOrganizationCommunityPerceptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCommunityPerceptionComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCommunityPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
