import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowOverviewSimilarComponent } from './companies-show-overview-similar.component';

describe('CompaniesShowOverviewSimilarComponent', () => {
  let component: CompaniesShowOverviewSimilarComponent;
  let fixture: ComponentFixture<CompaniesShowOverviewSimilarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesShowOverviewSimilarComponent]
    });
    fixture = TestBed.createComponent(CompaniesShowOverviewSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
