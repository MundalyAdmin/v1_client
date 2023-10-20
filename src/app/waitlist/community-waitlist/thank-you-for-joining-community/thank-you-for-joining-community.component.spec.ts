import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouForJoiningCommunityComponent } from './thank-you-for-joining-community.component';

describe('ThankYouForJoiningCommunityComponent', () => {
  let component: ThankYouForJoiningCommunityComponent;
  let fixture: ComponentFixture<ThankYouForJoiningCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouForJoiningCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankYouForJoiningCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
