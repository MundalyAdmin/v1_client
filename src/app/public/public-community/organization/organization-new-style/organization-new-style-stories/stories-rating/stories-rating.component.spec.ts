import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesRatingComponent } from './stories-rating.component';

describe('StoriesRatingComponent', () => {
  let component: StoriesRatingComponent;
  let fixture: ComponentFixture<StoriesRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoriesRatingComponent]
    });
    fixture = TestBed.createComponent(StoriesRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
