import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShowOverviewOtherOrganizationsComponent } from './companies-show-overview-other-organizations.component';

describe('CompaniesShowOverviewOtherOrganizationsComponent', () => {
  let component: CompaniesShowOverviewOtherOrganizationsComponent;
  let fixture: ComponentFixture<CompaniesShowOverviewOtherOrganizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesShowOverviewOtherOrganizationsComponent],
    });
    fixture = TestBed.createComponent(
      CompaniesShowOverviewOtherOrganizationsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
