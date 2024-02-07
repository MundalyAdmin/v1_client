import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingReportComponent } from './generating-report.component';

describe('GeneratingReportComponent', () => {
  let component: GeneratingReportComponent;
  let fixture: ComponentFixture<GeneratingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratingReportComponent]
    });
    fixture = TestBed.createComponent(GeneratingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
