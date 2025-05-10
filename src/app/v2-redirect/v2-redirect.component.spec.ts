import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2RedirectComponent } from './v2-redirect.component';

describe('V2RedirectComponent', () => {
  let component: V2RedirectComponent;
  let fixture: ComponentFixture<V2RedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [V2RedirectComponent]
    });
    fixture = TestBed.createComponent(V2RedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
