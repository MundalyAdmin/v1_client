import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessComponent } from './public-business.component';

describe('PublicBusinessComponent', () => {
  let component: PublicBusinessComponent;
  let fixture: ComponentFixture<PublicBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
