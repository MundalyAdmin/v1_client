import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminImpactStoryListComponent } from './super-admin-impact-story-list.component';

describe('SuperAdminImpactStoryListComponent', () => {
  let component: SuperAdminImpactStoryListComponent;
  let fixture: ComponentFixture<SuperAdminImpactStoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminImpactStoryListComponent],
    });
    fixture = TestBed.createComponent(SuperAdminImpactStoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
