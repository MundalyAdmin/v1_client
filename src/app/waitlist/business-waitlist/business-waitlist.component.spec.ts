import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWaitlistComponent } from './business-waitlist.component';

describe('BusinessWaitlistComponent', () => {
  let component: BusinessWaitlistComponent;
  let fixture: ComponentFixture<BusinessWaitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessWaitlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessWaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
