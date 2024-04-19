import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPartnerListComponent } from './impact-partner-list.component';

describe('ImpactPartnerListComponent', () => {
  let component: ImpactPartnerListComponent;
  let fixture: ComponentFixture<ImpactPartnerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactPartnerListComponent]
    });
    fixture = TestBed.createComponent(ImpactPartnerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
