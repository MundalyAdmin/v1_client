import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSectorOrganizationListComponent } from './settings-sector-organization-list.component';

describe('SettingsSectorOrganizationListComponent', () => {
  let component: SettingsSectorOrganizationListComponent;
  let fixture: ComponentFixture<SettingsSectorOrganizationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSectorOrganizationListComponent]
    });
    fixture = TestBed.createComponent(SettingsSectorOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
