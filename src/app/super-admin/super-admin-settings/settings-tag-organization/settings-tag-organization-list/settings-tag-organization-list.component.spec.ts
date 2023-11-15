import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTagOrganizationListComponent } from './settings-tag-organization-list.component';

describe('SettingsTagOrganizationListComponent', () => {
  let component: SettingsTagOrganizationListComponent;
  let fixture: ComponentFixture<SettingsTagOrganizationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTagOrganizationListComponent]
    });
    fixture = TestBed.createComponent(SettingsTagOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
