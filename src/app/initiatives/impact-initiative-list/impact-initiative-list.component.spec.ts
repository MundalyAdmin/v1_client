import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactInitiativeListComponent } from './impact-initiative-list.component';

describe('ImpactInitiativeListComponent', () => {
  let component: ImpactInitiativeListComponent;
  let fixture: ComponentFixture<ImpactInitiativeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactInitiativeListComponent]
    });
    fixture = TestBed.createComponent(ImpactInitiativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
