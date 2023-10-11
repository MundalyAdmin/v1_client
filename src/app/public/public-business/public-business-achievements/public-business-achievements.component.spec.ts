import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessAchievementsComponent } from './public-business-achievements.component';

describe('PublicBusinessAchievementsComponent', () => {
  let component: PublicBusinessAchievementsComponent;
  let fixture: ComponentFixture<PublicBusinessAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessAchievementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
