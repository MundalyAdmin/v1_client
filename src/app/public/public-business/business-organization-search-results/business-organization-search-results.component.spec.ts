import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessOrganizationSearchResultsComponent } from './business-organization-search-results.component';

describe('BusinessOrganizationSearchResultsComponent', () => {
  let component: BusinessOrganizationSearchResultsComponent;
  let fixture: ComponentFixture<BusinessOrganizationSearchResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessOrganizationSearchResultsComponent]
    });
    fixture = TestBed.createComponent(BusinessOrganizationSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
