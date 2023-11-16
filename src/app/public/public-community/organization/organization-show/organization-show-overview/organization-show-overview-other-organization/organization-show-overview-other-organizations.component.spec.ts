import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowOverviewOtherOrganizationsComponent } from './organization-show-overview-other-organizations.component';

describe('OrganizationShowOverviewOtherOrganizationsComponent', () => {
  let component: OrganizationShowOverviewOtherOrganizationsComponent;
  let fixture: ComponentFixture<OrganizationShowOverviewOtherOrganizationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationShowOverviewOtherOrganizationsComponent],
    });
    fixture = TestBed.createComponent(
      OrganizationShowOverviewOtherOrganizationsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
