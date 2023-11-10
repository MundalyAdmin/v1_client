import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationContainerComponent } from './organization-container.component';

describe('OrganizationContainerComponent', () => {
  let component: OrganizationContainerComponent;
  let fixture: ComponentFixture<OrganizationContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationContainerComponent],
    });
    fixture = TestBed.createComponent(OrganizationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
