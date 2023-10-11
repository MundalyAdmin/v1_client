import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCompanyListComponent } from './home-company-list.component';

describe('HomeCompanyListComponent', () => {
  let component: HomeCompanyListComponent;
  let fixture: ComponentFixture<HomeCompanyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCompanyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
