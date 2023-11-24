import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCountryListComponent } from './settings-country-list.component';

describe('SettingsCountryListComponent', () => {
  let component: SettingsCountryListComponent;
  let fixture: ComponentFixture<SettingsCountryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCountryListComponent]
    });
    fixture = TestBed.createComponent(SettingsCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
