import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTypeOrganizationCreateComponent } from './settings-type-organization-create.component';

describe('SettingsTypeOrganizationCreateComponent', () => {
  let component: SettingsTypeOrganizationCreateComponent;
  let fixture: ComponentFixture<SettingsTypeOrganizationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTypeOrganizationCreateComponent]
    });
    fixture = TestBed.createComponent(SettingsTypeOrganizationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
