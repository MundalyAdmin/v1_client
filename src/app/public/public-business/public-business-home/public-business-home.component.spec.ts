import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessHomeComponent } from './public-business-home.component';

describe('PublicBusinessHomeComponent', () => {
  let component: PublicBusinessHomeComponent;
  let fixture: ComponentFixture<PublicBusinessHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
