import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminImpactStoryEditComponent } from './super-admin-impact-story-edit.component';

describe('SuperAdminImpactStoryEditComponent', () => {
  let component: SuperAdminImpactStoryEditComponent;
  let fixture: ComponentFixture<SuperAdminImpactStoryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminImpactStoryEditComponent]
    });
    fixture = TestBed.createComponent(SuperAdminImpactStoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
