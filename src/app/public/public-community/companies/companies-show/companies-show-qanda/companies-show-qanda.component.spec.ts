import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowQandaComponent } from './companies-show-qanda.component';

describe('CompaniesShowQandaComponent', () => {
  let component: CompaniesShowQandaComponent;
  let fixture: ComponentFixture<CompaniesShowQandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesShowQandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesShowQandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
