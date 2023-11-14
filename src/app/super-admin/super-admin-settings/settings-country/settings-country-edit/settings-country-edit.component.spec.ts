import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCountryEditComponent } from './settings-country-edit.component';

describe('SettingsCountryEditComponent', () => {
  let component: SettingsCountryEditComponent;
  let fixture: ComponentFixture<SettingsCountryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCountryEditComponent]
    });
    fixture = TestBed.createComponent(SettingsCountryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
