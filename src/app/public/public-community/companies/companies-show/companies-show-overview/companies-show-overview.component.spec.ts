import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowOverviewComponent } from './companies-show-overview.component';

describe('CompaniesShowOverviewComponent', () => {
  let component: CompaniesShowOverviewComponent;
  let fixture: ComponentFixture<CompaniesShowOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesShowOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesShowOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
