import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectResearchPartnersComponent } from './select-research-partners.component';

describe('SelectResearchPartnersComponent', () => {
  let component: SelectResearchPartnersComponent;
  let fixture: ComponentFixture<SelectResearchPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectResearchPartnersComponent]
    });
    fixture = TestBed.createComponent(SelectResearchPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
