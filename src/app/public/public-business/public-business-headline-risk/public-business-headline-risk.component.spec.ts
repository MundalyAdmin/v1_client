import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessHeadlineRiskComponent } from './public-business-headline-risk.component';

describe('PublicBusinessHeadlineRiskComponent', () => {
  let component: PublicBusinessHeadlineRiskComponent;
  let fixture: ComponentFixture<PublicBusinessHeadlineRiskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessHeadlineRiskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessHeadlineRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
