import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDiligenceComponent } from './due-diligence.component';

describe('DueDiligenceComponent', () => {
  let component: DueDiligenceComponent;
  let fixture: ComponentFixture<DueDiligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueDiligenceComponent]
    });
    fixture = TestBed.createComponent(DueDiligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
