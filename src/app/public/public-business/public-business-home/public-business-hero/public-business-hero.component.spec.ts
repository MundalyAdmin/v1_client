import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessHeroComponent } from './public-business-hero.component';

describe('PublicBusinessHeroComponent', () => {
  let component: PublicBusinessHeroComponent;
  let fixture: ComponentFixture<PublicBusinessHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
