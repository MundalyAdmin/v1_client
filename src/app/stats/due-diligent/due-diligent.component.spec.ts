import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDiligentComponent } from './due-diligent.component';

describe('DueDiligentComponent', () => {
  let component: DueDiligentComponent;
  let fixture: ComponentFixture<DueDiligentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DueDiligentComponent]
    });
    fixture = TestBed.createComponent(DueDiligentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
