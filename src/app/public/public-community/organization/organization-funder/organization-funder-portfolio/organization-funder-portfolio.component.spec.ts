import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFunderPortfolioComponent } from './organization-funder-portfolio.component';

describe('OrganizationFunderPortfolioComponent', () => {
  let component: OrganizationFunderPortfolioComponent;
  let fixture: ComponentFixture<OrganizationFunderPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationFunderPortfolioComponent]
    });
    fixture = TestBed.createComponent(OrganizationFunderPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
