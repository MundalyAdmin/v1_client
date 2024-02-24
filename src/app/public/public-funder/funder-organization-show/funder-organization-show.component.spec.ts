import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunderOrganizationShowComponent } from './funder-organization-show.component';

describe('FunderOrganizationShowComponent', () => {
  let component: FunderOrganizationShowComponent;
  let fixture: ComponentFixture<FunderOrganizationShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunderOrganizationShowComponent]
    });
    fixture = TestBed.createComponent(FunderOrganizationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
