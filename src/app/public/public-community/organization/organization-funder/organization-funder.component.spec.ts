import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFunderComponent } from './organization-funder.component';

describe('OrganizationFunderComponent', () => {
  let component: OrganizationFunderComponent;
  let fixture: ComponentFixture<OrganizationFunderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationFunderComponent]
    });
    fixture = TestBed.createComponent(OrganizationFunderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
