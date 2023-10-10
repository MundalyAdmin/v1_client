import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowAboutComponent } from './companies-show-about.component';

describe('CompaniesShowAboutComponent', () => {
  let component: CompaniesShowAboutComponent;
  let fixture: ComponentFixture<CompaniesShowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesShowAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesShowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
