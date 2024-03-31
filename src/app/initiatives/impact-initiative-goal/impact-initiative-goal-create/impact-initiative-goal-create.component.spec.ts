import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeGoalCreateComponent } from './impact-initiative-goal-create.component';

describe('ImpactInitiativeGoalCreateComponent', () => {
  let component: ImpactInitiativeGoalCreateComponent;
  let fixture: ComponentFixture<ImpactInitiativeGoalCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeGoalCreateComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeGoalCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
