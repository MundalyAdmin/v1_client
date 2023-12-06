import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleStoriesListComponent } from './organization-new-style-stories-list.component';

describe('OrganizationNewStyleStoriesListComponent', () => {
  let component: OrganizationNewStyleStoriesListComponent;
  let fixture: ComponentFixture<OrganizationNewStyleStoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleStoriesListComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleStoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
