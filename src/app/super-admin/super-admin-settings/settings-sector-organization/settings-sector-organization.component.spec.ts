import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSectorOrganizationComponent } from './settings-sector-organization.component';

describe('SettingsSectorOrganizationComponent', () => {
  let component: SettingsSectorOrganizationComponent;
  let fixture: ComponentFixture<SettingsSectorOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSectorOrganizationComponent]
    });
    fixture = TestBed.createComponent(SettingsSectorOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
