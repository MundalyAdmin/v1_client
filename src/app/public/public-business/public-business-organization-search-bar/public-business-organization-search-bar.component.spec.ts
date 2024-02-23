import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessOrganizationSearchBarComponent } from './public-business-organization-search-bar.component';

describe('PublicBusinessOrganizationSearchBarComponent', () => {
  let component: PublicBusinessOrganizationSearchBarComponent;
  let fixture: ComponentFixture<PublicBusinessOrganizationSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBusinessOrganizationSearchBarComponent]
    });
    fixture = TestBed.createComponent(PublicBusinessOrganizationSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
