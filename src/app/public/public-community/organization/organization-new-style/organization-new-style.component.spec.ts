import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleComponent } from './organization-new-style.component';

describe('OrganizationNewStyleComponent', () => {
  let component: OrganizationNewStyleComponent;
  let fixture: ComponentFixture<OrganizationNewStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
