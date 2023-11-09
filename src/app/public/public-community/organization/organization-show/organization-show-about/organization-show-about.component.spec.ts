import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowAboutComponent } from './organization-show-about.component';

describe('OrganizationShowAboutComponent', () => {
  let component: OrganizationShowAboutComponent;
  let fixture: ComponentFixture<OrganizationShowAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShowAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationShowAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
