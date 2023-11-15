import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSectorOrganizationEditComponent } from './settings-sector-organization-edit.component';

describe('SettingsSectorOrganizationEditComponent', () => {
  let component: SettingsSectorOrganizationEditComponent;
  let fixture: ComponentFixture<SettingsSectorOrganizationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSectorOrganizationEditComponent]
    });
    fixture = TestBed.createComponent(SettingsSectorOrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
