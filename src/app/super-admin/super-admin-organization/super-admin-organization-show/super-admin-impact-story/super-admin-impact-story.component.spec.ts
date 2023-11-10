import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminImpactStoryComponent } from './super-admin-impact-story.component';

describe('SuperAdminImpactStoryComponent', () => {
  let component: SuperAdminImpactStoryComponent;
  let fixture: ComponentFixture<SuperAdminImpactStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminImpactStoryComponent],
    });
    fixture = TestBed.createComponent(SuperAdminImpactStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
