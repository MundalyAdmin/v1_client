import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTagOrganizationEditComponent } from './settings-tag-organization-edit.component';

describe('SettingsTagOrganizationEditComponent', () => {
  let component: SettingsTagOrganizationEditComponent;
  let fixture: ComponentFixture<SettingsTagOrganizationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTagOrganizationEditComponent]
    });
    fixture = TestBed.createComponent(SettingsTagOrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
