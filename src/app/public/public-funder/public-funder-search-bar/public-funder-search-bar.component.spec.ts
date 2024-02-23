import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFunderSearchBarComponent } from './public-funder-search-bar.component';

describe('PublicFunderSearchBarComponent', () => {
  let component: PublicFunderSearchBarComponent;
  let fixture: ComponentFixture<PublicFunderSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicFunderSearchBarComponent]
    });
    fixture = TestBed.createComponent(PublicFunderSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
