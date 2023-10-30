import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessCommunityPerceptionComponent } from './public-business-community-perception.component';

describe('PublicBusinessCommunityPerceptionComponent', () => {
  let component: PublicBusinessCommunityPerceptionComponent;
  let fixture: ComponentFixture<PublicBusinessCommunityPerceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessCommunityPerceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessCommunityPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
