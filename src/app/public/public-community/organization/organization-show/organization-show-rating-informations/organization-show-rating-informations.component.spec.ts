import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowRatingInformationsComponent } from './organization-show-rating-informations.component';

describe('OrganizationShowRatingInformationsComponent', () => {
  let component: OrganizationShowRatingInformationsComponent;
  let fixture: ComponentFixture<OrganizationShowRatingInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShowRatingInformationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      OrganizationShowRatingInformationsComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
