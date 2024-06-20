import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPartnerSoloComponent } from './impact-partner-solo.component';

describe('ImpactPartnerSoloComponent', () => {
  let component: ImpactPartnerSoloComponent;
  let fixture: ComponentFixture<ImpactPartnerSoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactPartnerSoloComponent]
    });
    fixture = TestBed.createComponent(ImpactPartnerSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
