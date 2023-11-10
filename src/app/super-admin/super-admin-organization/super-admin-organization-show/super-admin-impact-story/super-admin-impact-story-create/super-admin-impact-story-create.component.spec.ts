import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminImpactStoryCreateComponent } from './super-admin-impact-story-create.component';

describe('SuperAdminImpactStoryCreateComponent', () => {
  let component: SuperAdminImpactStoryCreateComponent;
  let fixture: ComponentFixture<SuperAdminImpactStoryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminImpactStoryCreateComponent],
    });
    fixture = TestBed.createComponent(SuperAdminImpactStoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
