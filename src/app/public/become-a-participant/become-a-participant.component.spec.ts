import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeAParticipantComponent } from './become-a-participant.component';

describe('BecomeAParticipantComponent', () => {
  let component: BecomeAParticipantComponent;
  let fixture: ComponentFixture<BecomeAParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeAParticipantComponent]
    });
    fixture = TestBed.createComponent(BecomeAParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
