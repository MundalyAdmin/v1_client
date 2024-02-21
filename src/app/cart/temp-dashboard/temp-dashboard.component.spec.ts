import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDashboardComponent } from './temp-dashboard.component';

describe('TempDashboardComponent', () => {
  let component: TempDashboardComponent;
  let fixture: ComponentFixture<TempDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempDashboardComponent]
    });
    fixture = TestBed.createComponent(TempDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
