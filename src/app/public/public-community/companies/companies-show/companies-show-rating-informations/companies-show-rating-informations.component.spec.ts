import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowRatingInformationsComponent } from './companies-show-rating-informations.component';

describe('CompaniesShowRatingInformationsComponent', () => {
  let component: CompaniesShowRatingInformationsComponent;
  let fixture: ComponentFixture<CompaniesShowRatingInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesShowRatingInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesShowRatingInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
