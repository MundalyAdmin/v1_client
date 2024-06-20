import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeProgressDataCreateComponent } from './impact-initiative-progress-data-create.component';

describe('ImpactInitiativeProgressDataCreateComponent', () => {
  let component: ImpactInitiativeProgressDataCreateComponent;
  let fixture: ComponentFixture<ImpactInitiativeProgressDataCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeProgressDataCreateComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeProgressDataCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
