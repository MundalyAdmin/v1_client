import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowOverviewComponent } from './organization-show-overview.component';

describe('OrganizationShowOverviewComponent', () => {
  let component: OrganizationShowOverviewComponent;
  let fixture: ComponentFixture<OrganizationShowOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShowOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationShowOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
