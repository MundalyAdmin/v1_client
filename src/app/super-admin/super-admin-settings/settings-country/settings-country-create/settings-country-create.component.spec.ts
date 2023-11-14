import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCountryCreateComponent } from './settings-country-create.component';

describe('SettingsCountryCreateComponent', () => {
  let component: SettingsCountryCreateComponent;
  let fixture: ComponentFixture<SettingsCountryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCountryCreateComponent]
    });
    fixture = TestBed.createComponent(SettingsCountryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
