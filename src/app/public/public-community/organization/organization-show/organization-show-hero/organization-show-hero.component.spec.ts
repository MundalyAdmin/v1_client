import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationShowHeroComponent } from './organization-show-hero.component';

describe('OrganizationShowHeroComponent', () => {
  let component: OrganizationShowHeroComponent;
  let fixture: ComponentFixture<OrganizationShowHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationShowHeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationShowHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
