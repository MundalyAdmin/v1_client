import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSectorOrganizationCreateComponent } from './settings-sector-organization-create.component';

describe('SettingsSectorOrganizationCreateComponent', () => {
  let component: SettingsSectorOrganizationCreateComponent;
  let fixture: ComponentFixture<SettingsSectorOrganizationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSectorOrganizationCreateComponent]
    });
    fixture = TestBed.createComponent(SettingsSectorOrganizationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
