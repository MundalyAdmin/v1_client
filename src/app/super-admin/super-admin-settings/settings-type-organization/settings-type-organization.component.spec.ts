import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsTypeOrganizationComponent } from './settings-type-organization.component';

describe('SettingsTypeOrganizationComponent', () => {
  let component: SettingsTypeOrganizationComponent;
  let fixture: ComponentFixture<SettingsTypeOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsTypeOrganizationComponent]
    });
    fixture = TestBed.createComponent(SettingsTypeOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
