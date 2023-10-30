import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowHeroComponent } from './companies-show-hero.component';

describe('CompaniesShowHeroComponent', () => {
  let component: CompaniesShowHeroComponent;
  let fixture: ComponentFixture<CompaniesShowHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesShowHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompaniesShowHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
