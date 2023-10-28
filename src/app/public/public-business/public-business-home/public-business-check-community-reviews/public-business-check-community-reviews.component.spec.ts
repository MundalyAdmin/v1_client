import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessCheckCommunityReviewsComponent } from './public-business-check-community-reviews.component';

describe('PublicBusinessCheckCommunityReviewsComponent', () => {
  let component: PublicBusinessCheckCommunityReviewsComponent;
  let fixture: ComponentFixture<PublicBusinessCheckCommunityReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBusinessCheckCommunityReviewsComponent]
    });
    fixture = TestBed.createComponent(PublicBusinessCheckCommunityReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
