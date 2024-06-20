import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeProgressDataShowComponent } from './impact-initiative-progress-data-show.component';

describe('ImpactInitiativeProgressDataShowComponent', () => {
  let component: ImpactInitiativeProgressDataShowComponent;
  let fixture: ComponentFixture<ImpactInitiativeProgressDataShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeProgressDataShowComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeProgressDataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
