import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminCommunitySuggestionListComponent } from './super-admin-community-suggestion-list.component';

describe('SuperAdminCommunitySuggestionListComponent', () => {
  let component: SuperAdminCommunitySuggestionListComponent;
  let fixture: ComponentFixture<SuperAdminCommunitySuggestionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminCommunitySuggestionListComponent]
    });
    fixture = TestBed.createComponent(SuperAdminCommunitySuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
