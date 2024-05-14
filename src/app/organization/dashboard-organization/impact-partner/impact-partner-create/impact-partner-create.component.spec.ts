import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactPartnerCreateComponent } from './impact-partner-create.component';

describe('ImpactPartnerCreateComponent', () => {
  let component: ImpactPartnerCreateComponent;
  let fixture: ComponentFixture<ImpactPartnerCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactPartnerCreateComponent]
    });
    fixture = TestBed.createComponent(ImpactPartnerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
