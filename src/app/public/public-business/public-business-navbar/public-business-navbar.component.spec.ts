import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessNavbarComponent } from './public-business-navbar.component';

describe('PublicBusinessNavbarComponent', () => {
  let component: PublicBusinessNavbarComponent;
  let fixture: ComponentFixture<PublicBusinessNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
