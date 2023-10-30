import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessContactUsComponent } from './public-business-contact-us.component';

describe('PublicBusinessContactUsComponent', () => {
  let component: PublicBusinessContactUsComponent;
  let fixture: ComponentFixture<PublicBusinessContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessContactUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
