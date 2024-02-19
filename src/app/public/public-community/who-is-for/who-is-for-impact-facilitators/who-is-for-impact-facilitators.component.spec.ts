import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsForImpactFacilitatorsComponent } from './who-is-for-impact-facilitators.component';

describe('WhoIsForImpactFacilitatorsComponent', () => {
  let component: WhoIsForImpactFacilitatorsComponent;
  let fixture: ComponentFixture<WhoIsForImpactFacilitatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIsForImpactFacilitatorsComponent]
    });
    fixture = TestBed.createComponent(WhoIsForImpactFacilitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
