import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCommunityComponent } from './public-community.component';

describe('PublicCommunityComponent', () => {
  let component: PublicCommunityComponent;
  let fixture: ComponentFixture<PublicCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
