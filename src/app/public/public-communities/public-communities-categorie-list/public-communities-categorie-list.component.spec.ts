import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCommunitiesCategorieListComponent } from './public-communities-categorie-list.component';

describe('PublicCommunitiesCategorieListComponent', () => {
  let component: PublicCommunitiesCategorieListComponent;
  let fixture: ComponentFixture<PublicCommunitiesCategorieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCommunitiesCategorieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCommunitiesCategorieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
