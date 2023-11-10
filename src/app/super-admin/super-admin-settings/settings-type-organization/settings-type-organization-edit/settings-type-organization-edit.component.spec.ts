import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTypeOrganizationEditComponent } from './settings-type-organization-edit.component';

describe('SettingsTypeOrganizationEditComponent', () => {
  let component: SettingsTypeOrganizationEditComponent;
  let fixture: ComponentFixture<SettingsTypeOrganizationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTypeOrganizationEditComponent]
    });
    fixture = TestBed.createComponent(SettingsTypeOrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
