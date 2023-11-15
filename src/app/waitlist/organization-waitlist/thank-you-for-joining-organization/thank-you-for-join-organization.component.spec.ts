import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForJoiningBusinessComponent } from './thank-you-for-join-business.component';

describe('ThankYouForJoiningBusinessComponent', () => {
  let component: ThankYouForJoiningBusinessComponent;
  let fixture: ComponentFixture<ThankYouForJoiningBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThankYouForJoiningBusinessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThankYouForJoiningBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
