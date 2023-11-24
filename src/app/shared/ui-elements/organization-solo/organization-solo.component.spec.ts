import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSoloComponent } from './organization-solo.component';

describe('OrganizationSoloComponent', () => {
  let component: OrganizationSoloComponent;
  let fixture: ComponentFixture<OrganizationSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationSoloComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
