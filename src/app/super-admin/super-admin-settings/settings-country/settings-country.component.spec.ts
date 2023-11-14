import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCountryComponent } from './settings-country.component';

describe('SettingsCountryComponent', () => {
  let component: SettingsCountryComponent;
  let fixture: ComponentFixture<SettingsCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCountryComponent]
    });
    fixture = TestBed.createComponent(SettingsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
