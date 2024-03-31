import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeGoalListComponent } from './impact-initiative-goal-list.component';

describe('ImpactInitiativeGoalListComponent', () => {
  let component: ImpactInitiativeGoalListComponent;
  let fixture: ComponentFixture<ImpactInitiativeGoalListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeGoalListComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
