import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleStoriesComponent } from './organization-new-style-stories.component';

describe('OrganizationNewStyleStoriesComponent', () => {
  let component: OrganizationNewStyleStoriesComponent;
  let fixture: ComponentFixture<OrganizationNewStyleStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleStoriesComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
