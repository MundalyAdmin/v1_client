import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingInformationComponent } from './rating-information.component';

describe('RatingInformationComponent', () => {
  let component: RatingInformationComponent;
  let fixture: ComponentFixture<RatingInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingInformationComponent]
    });
    fixture = TestBed.createComponent(RatingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
