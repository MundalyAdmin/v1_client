import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectorOrganizationListComponent } from './home-sector-organization-list.component';

describe('HomeSectorOrganizationListComponent', () => {
  let component: HomeSectorOrganizationListComponent;
  let fixture: ComponentFixture<HomeSectorOrganizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSectorOrganizationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSectorOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
