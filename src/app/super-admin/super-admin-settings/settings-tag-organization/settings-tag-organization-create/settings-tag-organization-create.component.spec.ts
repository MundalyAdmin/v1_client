import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTagOrganizationCreateComponent } from './settings-tag-organization-create.component';

describe('SettingsTagOrganizationCreateComponent', () => {
  let component: SettingsTagOrganizationCreateComponent;
  let fixture: ComponentFixture<SettingsTagOrganizationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTagOrganizationCreateComponent]
    });
    fixture = TestBed.createComponent(SettingsTagOrganizationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
