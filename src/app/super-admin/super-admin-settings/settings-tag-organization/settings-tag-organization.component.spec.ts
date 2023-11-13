import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTagOrganizationComponent } from './settings-tag-organization.component';

describe('SettingsTagOrganizationComponent', () => {
  let component: SettingsTagOrganizationComponent;
  let fixture: ComponentFixture<SettingsTagOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTagOrganizationComponent]
    });
    fixture = TestBed.createComponent(SettingsTagOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
