import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminCommunitySuggestionComponent } from './super-admin-community-suggestion.component';

describe('SuperAdminCommunitySuggestionComponent', () => {
  let component: SuperAdminCommunitySuggestionComponent;
  let fixture: ComponentFixture<SuperAdminCommunitySuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminCommunitySuggestionComponent]
    });
    fixture = TestBed.createComponent(SuperAdminCommunitySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
