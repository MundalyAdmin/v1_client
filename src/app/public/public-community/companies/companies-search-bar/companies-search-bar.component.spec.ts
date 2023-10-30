import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSearchBarComponent } from './companies-search-bar.component';

describe('CompaniesSearchBarComponent', () => {
  let component: CompaniesSearchBarComponent;
  let fixture: ComponentFixture<CompaniesSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesSearchBarComponent]
    });
    fixture = TestBed.createComponent(CompaniesSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
