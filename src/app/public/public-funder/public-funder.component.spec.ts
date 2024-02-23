import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFunderComponent } from './public-funder.component';

describe('PublicFunderComponent', () => {
  let component: PublicFunderComponent;
  let fixture: ComponentFixture<PublicFunderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicFunderComponent]
    });
    fixture = TestBed.createComponent(PublicFunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
