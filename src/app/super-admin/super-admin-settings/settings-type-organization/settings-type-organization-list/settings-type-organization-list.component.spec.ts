import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTypeOrganizationListComponent } from './settings-type-organization-list.component';

describe('SettingsTypeOrganizationListComponent', () => {
  let component: SettingsTypeOrganizationListComponent;
  let fixture: ComponentFixture<SettingsTypeOrganizationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTypeOrganizationListComponent]
    });
    fixture = TestBed.createComponent(SettingsTypeOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
