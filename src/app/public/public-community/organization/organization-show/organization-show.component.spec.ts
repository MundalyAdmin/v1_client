import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowComponent } from './organization-show.component';

describe('OrganizationShowComponent', () => {
  let component: OrganizationShowComponent;
  let fixture: ComponentFixture<OrganizationShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
