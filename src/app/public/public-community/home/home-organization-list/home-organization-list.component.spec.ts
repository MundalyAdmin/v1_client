import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOrganizationListComponent } from './home-organization-list.component';

describe('HomeOrganizationListComponent', () => {
  let component: HomeOrganizationListComponent;
  let fixture: ComponentFixture<HomeOrganizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOrganizationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
