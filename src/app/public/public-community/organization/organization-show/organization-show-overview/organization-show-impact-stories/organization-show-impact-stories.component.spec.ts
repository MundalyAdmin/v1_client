import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowImpactStoriesComponent } from './organization-show-impact-stories.component';

describe('OrganizationShowImpactStoriesComponent', () => {
  let component: OrganizationShowImpactStoriesComponent;
  let fixture: ComponentFixture<OrganizationShowImpactStoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationShowImpactStoriesComponent]
    });
    fixture = TestBed.createComponent(OrganizationShowImpactStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
