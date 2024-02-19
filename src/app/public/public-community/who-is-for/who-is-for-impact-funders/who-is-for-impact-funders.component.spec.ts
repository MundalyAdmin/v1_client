import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsForImpactFundersComponent } from './who-is-for-impact-funders.component';

describe('WhoIsForImpactFundersComponent', () => {
  let component: WhoIsForImpactFundersComponent;
  let fixture: ComponentFixture<WhoIsForImpactFundersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIsForImpactFundersComponent]
    });
    fixture = TestBed.createComponent(WhoIsForImpactFundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
