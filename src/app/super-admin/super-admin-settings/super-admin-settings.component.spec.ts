import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSettingsComponent } from './super-admin-settings.component';

describe('SuperAdminSettingsComponent', () => {
  let component: SuperAdminSettingsComponent;
  let fixture: ComponentFixture<SuperAdminSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminSettingsComponent]
    });
    fixture = TestBed.createComponent(SuperAdminSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
