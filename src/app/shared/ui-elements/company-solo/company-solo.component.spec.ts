import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySoloComponent } from './company-solo.component';

describe('CompanySoloComponent', () => {
  let component: CompanySoloComponent;
  let fixture: ComponentFixture<CompanySoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
