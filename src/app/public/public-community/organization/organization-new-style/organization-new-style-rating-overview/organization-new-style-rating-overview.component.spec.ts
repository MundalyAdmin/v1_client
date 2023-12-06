import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleRatingOverviewComponent } from './organization-new-style-rating-overview.component';

describe('OrganizationNewStyleRatingOverviewComponent', () => {
  let component: OrganizationNewStyleRatingOverviewComponent;
  let fixture: ComponentFixture<OrganizationNewStyleRatingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleRatingOverviewComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleRatingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
