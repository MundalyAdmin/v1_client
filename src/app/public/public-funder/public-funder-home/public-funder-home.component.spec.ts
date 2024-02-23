import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFunderHomeComponent } from './public-funder-home.component';

describe('PublicFunderHomeComponent', () => {
  let component: PublicFunderHomeComponent;
  let fixture: ComponentFixture<PublicFunderHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicFunderHomeComponent]
    });
    fixture = TestBed.createComponent(PublicFunderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
