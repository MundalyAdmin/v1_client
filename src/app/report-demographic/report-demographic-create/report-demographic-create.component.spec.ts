import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDemographicCreateComponent } from './report-demographic-create.component';

describe('ReportDemographicCreateComponent', () => {
  let component: ReportDemographicCreateComponent;
  let fixture: ComponentFixture<ReportDemographicCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportDemographicCreateComponent]
    });
    fixture = TestBed.createComponent(ReportDemographicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
