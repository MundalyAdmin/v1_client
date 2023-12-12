import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIsForComponent } from './who-is-for.component';

describe('WhoIsForComponent', () => {
  let component: WhoIsForComponent;
  let fixture: ComponentFixture<WhoIsForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhoIsForComponent]
    });
    fixture = TestBed.createComponent(WhoIsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
