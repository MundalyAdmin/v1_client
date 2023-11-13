import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSearchBarComponent } from './organization-search-bar.component';

describe('OrganizationSearchBarComponent', () => {
  let component: OrganizationSearchBarComponent;
  let fixture: ComponentFixture<OrganizationSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSearchBarComponent],
    });
    fixture = TestBed.createComponent(OrganizationSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
